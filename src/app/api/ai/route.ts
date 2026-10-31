import { NextResponse } from "next/server";
import { completeChat, completeJson } from "@/lib/ai/openai";
import { requireAiContext } from "@/lib/ai/guard";
import { generateRevisionSheet } from "@/lib/revision/generate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const gated = await requireAiContext({ action: body.action, courseId: body.courseId });
    if (!gated.ok) return gated.response;

    if (gated.action === "generate_curriculum") {
      const { subject, audience, level, durationHours, objectives, instructions } = body;

      const system = `Tu es un concepteur pedagogique expert. Tu crees des programmes de formation structures.
Tu reponds UNIQUEMENT en JSON valide avec cette structure exacte:
{
  "title": "string",
  "description": "string",
  "objectives": ["string"],
  "modules": [
    {
      "title": "string",
      "description": "string",
      "lessons": [
        { "title": "string", "type": "lesson|quiz", "estimatedDuration": number }
      ]
    }
  ]
}
Chaque module doit avoir entre 2 et 6 lecons. Ajoute un quiz a la fin de chaque module.
La langue du contenu doit etre le francais.`;

      const user = `Cree un programme de formation:
Sujet: ${subject}
Public: ${audience || "Non precise"}
Niveau: ${level}
Duree souhaitee: ${durationHours} heures
Objectifs: ${objectives || "Non precises"}
Instructions: ${instructions || "Aucune"}`;

      const result = await completeJson(system, user);
      if ("error" in result) return NextResponse.json({ error: result.error }, { status: result.status });
      return NextResponse.json({ curriculum: result.result });
    }

    if (gated.action === "lesson_content") {
      const { lessonTitle, aiAction, existingContent } = body;

      const actionPrompts: Record<string, string> = {
        generate: `Genere le contenu pedagogique complet pour la lecon "${lessonTitle}".`,
        improve: `Ameliore ce contenu pedagogique:\n${existingContent}`,
        simplify: `Simplifie ce contenu pour le rendre plus accessible:\n${existingContent}`,
        expand: `Developpe et enrichis ce contenu avec plus de details:\n${existingContent}`,
        add_examples: `Ajoute des exemples concrets et pratiques a ce contenu:\n${existingContent}`,
        generate_quiz: `Genere un quiz de 5 questions pour tester la comprehension de cette lecon "${lessonTitle}".`,
      };

      const system = `Tu es un formateur expert. Tu crees du contenu pedagogique de haute qualite.
Tu reponds UNIQUEMENT en JSON valide avec cette structure:
{
  "blocks": [
    { "type": "heading|text|callout|code", "content": "string" }
  ]
}
Utilise heading pour les titres, text pour les paragraphes, callout pour les points importants, code pour les exemples de code.
La langue du contenu doit etre le francais.`;

      const user = actionPrompts[aiAction] || `Genere du contenu pour: ${lessonTitle}`;
      const result = await completeJson(system, user);
      if ("error" in result) return NextResponse.json({ error: result.error }, { status: result.status });
      const parsed = result.result as { blocks?: unknown };
      return NextResponse.json({ blocks: parsed?.blocks || [] });
    }

    if (gated.action === "tutor") {
      const { courseTitle, lessonTitle, lessonContent, question, history } = body;
      const system = `Tu es un tuteur pedagogique bienveillant pour la plateforme LOU Academy.
Tu aides les apprenants a comprendre les concepts sans donner directement la reponse.
Tu privilegies: 1) l'explication, 2) les indices, 3) les pistes, 4) les exemples differents.
Tu es patient, encourageant et precis.
Contexte actuel:
- Formation: ${courseTitle || "Non precisee"}
- Lecon: ${lessonTitle || "Non precisee"}
- Contenu de la lecon: ${lessonContent ? String(lessonContent).substring(0, 2000) : "Non disponible"}
Reponds en francais.`;

      const messagesForAi = [
        { role: "system" as const, content: system },
        ...((history || []) as { role: string; content: string }[]).map((m) => ({
          role: (m.role === "assistant" ? "assistant" : "user") as "user" | "assistant",
          content: m.content,
        })),
        { role: "user" as const, content: String(question || "") },
      ];

      const result = await completeChat(messagesForAi);
      if ("error" in result) return NextResponse.json({ error: result.error }, { status: result.status });
      return NextResponse.json({ response: result.response });
    }

    if (gated.action === "revision_sheet") {
      const generated = await generateRevisionSheet({
        supabase: gated.supabase,
        userId: gated.userId,
        courseId: String(body.courseId || ""),
        lessonId: String(body.lessonId || ""),
        regenerate: Boolean(body.regenerate),
      });
      if ("error" in generated) {
        return NextResponse.json({ error: generated.error }, { status: generated.status });
      }
      return NextResponse.json(generated);
    }

    return NextResponse.json({ error: "Action inconnue." }, { status: 400 });
  } catch (err) {
    console.error("AI API error:", err);
    return NextResponse.json({ error: "Erreur serveur. Réessayez dans un instant." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
