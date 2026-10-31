import { NextResponse } from "next/server";
import { requireAiContext } from "@/lib/ai/guard";
import { generateRevisionSheet } from "@/lib/revision/generate";
import { normalizeRevisionSheet } from "@/lib/revision/schema";
import { tableMissing } from "@/lib/octalysis/safe";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const gated = await requireAiContext({ action: "revision_sheet", courseId: body.courseId });
    if (!gated.ok) return gated.response;

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
  } catch (err) {
    console.error("revision-sheet POST", err);
    return NextResponse.json({ error: "Erreur serveur. Réessayez dans un instant." }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lessonId = url.searchParams.get("lessonId");
  const courseId = url.searchParams.get("courseId");
  const gated = await requireAiContext({ action: "revision_sheet", courseId });
  if (!gated.ok) return gated.response;
  if (!lessonId) {
    return NextResponse.json({ error: "La leçon est requise." }, { status: 400 });
  }

  const { data, error } = await gated.supabase
    .from("revision_sheets")
    .select("id, title, sections, updated_at, generated_at")
    .eq("user_id", gated.userId)
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (tableMissing(error)) {
    return NextResponse.json({ sheet: null, tablesMissing: true });
  }
  if (error) {
    return NextResponse.json({ error: "Impossible de charger la fiche." }, { status: 500 });
  }
  if (!data) return NextResponse.json({ sheet: null });
  return NextResponse.json({
    sheet: normalizeRevisionSheet({ title: data.title, sections: data.sections }, data.title),
    updatedAt: data.updated_at || data.generated_at,
  });
}
