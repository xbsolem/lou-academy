import type { createServerSupabase } from "@/lib/supabase/server";
import { completeJson, hasOpenAiKey } from "@/lib/ai/openai";
import { isRateLimited, missingOpenAiKeyMessage, REVISION_RATE_WINDOW_MS } from "@/lib/ai/access";
import { tableMissing } from "@/lib/octalysis/safe";
import { hasUsableLessonSource, normalizeRevisionSheet, type RevisionSheetDoc } from "./schema";

type Supabase = Awaited<ReturnType<typeof createServerSupabase>>;

function nest<T>(raw: unknown): T | null {
  const row = Array.isArray(raw) ? raw[0] : raw;
  return (row as T) || null;
}

export async function generateRevisionSheet(input: {
  supabase: Supabase;
  userId: string;
  courseId: string;
  lessonId: string;
  regenerate?: boolean;
}): Promise<{ sheet: RevisionSheetDoc; saved: boolean } | { error: string; status: number }> {
  if (!input.lessonId || !input.courseId) {
    return { error: "La leçon et la formation sont requises.", status: 400 };
  }
  if (!hasOpenAiKey()) {
    return { error: missingOpenAiKeyMessage(), status: 503 };
  }

  const since = new Date(Date.now() - REVISION_RATE_WINDOW_MS).toISOString();
  const { count, error: countError } = await input.supabase
    .from("activity_events")
    .select("id", { count: "exact", head: true })
    .eq("user_id", input.userId)
    .eq("event_type", "Fiche de revision")
    .gte("created_at", since);
  if (!countError && isRateLimited(count || 0)) {
    return {
      error: "Vous avez atteint la limite de 8 fiches par heure. Réessayez un peu plus tard.",
      status: 429,
    };
  }

  const { data: lesson, error: lessonError } = await input.supabase
    .from("lessons")
    .select("id, title, description, module_id, modules(title, course_id, courses(id, title))")
    .eq("id", input.lessonId)
    .single();
  if (lessonError || !lesson) {
    return { error: "Leçon introuvable.", status: 404 };
  }
  const mod = nest<{ title?: string; course_id?: string; courses?: unknown }>(lesson.modules);
  const course = nest<{ id?: string; title?: string }>(mod?.courses);
  if (mod?.course_id && mod.course_id !== input.courseId) {
    return { error: "Cette leçon n'appartient pas à la formation indiquée.", status: 400 };
  }

  const { data: blocks } = await input.supabase
    .from("content_blocks")
    .select("block_type, content, position")
    .eq("lesson_id", input.lessonId)
    .order("position");

  const source = [
    lesson.title || "",
    lesson.description || "",
    ...(blocks || [])
      .filter((b) => b.block_type !== "quiz")
      .map((b) => String(b.content || "")),
  ]
    .join("\n\n")
    .slice(0, 12000);

  if (!hasUsableLessonSource(source)) {
    return {
      error: "Cette leçon n'a pas encore assez de contenu pour établir une fiche. Aucun fait n'a été inventé.",
      status: 422,
    };
  }

  const system = `Vous rédigez une fiche de révision professionnelle à partir UNIQUEMENT du texte fourni.
Vous répondez en JSON avec cette forme :
{
  "title": "string",
  "sections": {
    "objectifs": { "items": ["string"] },
    "points_cles": { "items": ["string"] },
    "definitions": { "items": ["string"] },
    "methodes": { "items": ["string"] },
    "exemples": { "items": ["string"] },
    "vigilance": { "items": ["string"] },
    "verification": { "items": ["string"] },
    "synthese": { "items": ["string"] }
  }
}
Règles strictes :
- Ne jamais inventer un fait, un chiffre, une procédure ou un exemple absent du texte.
- Omettre une section si le texte ne fournit rien de solide (tableau vide interdit : simplement omettre la clé).
- Formuler à la deuxième personne du pluriel (vous).
- Pas de gamification, pas de score, pas d'encouragements ludiques.
- Langue : français.`;

  const user = `Formation : ${course?.title || ""}
Module : ${mod?.title || ""}
Leçon : ${lesson.title}
Contenu réel :
${source}`;

  const result = await completeJson(system, user);
  if ("error" in result) return { error: result.error, status: result.status };

  const sheet = normalizeRevisionSheet(result.result, `Fiche — ${lesson.title}`);
  if (sheet.sections.length === 0) {
    return {
      error: "Le contenu de la leçon ne permet pas de remplir une section fiable. Rien n'a été inventé.",
      status: 422,
    };
  }

  const payload = {
    user_id: input.userId,
    lesson_id: input.lessonId,
    course_id: input.courseId,
    title: sheet.title,
    sections: Object.fromEntries(sheet.sections.map((s) => [s.key, { items: s.items }])),
    generated_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const upsert = await input.supabase.from("revision_sheets").upsert(payload, { onConflict: "user_id,lesson_id" });
  const saved = !upsert.error && !tableMissing(upsert.error);

  await input.supabase.from("activity_events").insert({
    user_id: input.userId,
    course_id: input.courseId,
    lesson_id: input.lessonId,
    event_type: "Fiche de revision",
    metadata: { regenerate: Boolean(input.regenerate), keys: sheet.sections.map((s) => s.key) },
  });

  return { sheet, saved };
}
