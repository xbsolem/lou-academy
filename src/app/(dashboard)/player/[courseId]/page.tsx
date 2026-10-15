import { createServerSupabase } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import PlayerClient from "./PlayerClient";

const PROGRESS_CHUNK = 120;

export default async function PlayerPage({
  params,
  searchParams,
}: {
  params: Promise<{ courseId: string }>;
  searchParams: Promise<{ preview?: string }>;
}) {
  const { courseId } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "1";
  const supabase = await createServerSupabase();

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

  if (!course) notFound();

  const { data: modules } = await supabase
    .from("modules")
    .select("*, lessons(*)")
    .eq("course_id", courseId)
    .order("position")
    .order("position", { referencedTable: "lessons" });

  const outline = (modules || []).map((mod) => ({
    ...mod,
    lessons: [...(mod.lessons || [])]
      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
      .map((lesson) => ({ ...lesson, content_blocks: [] })),
  }));

  const { data: { user } } = await supabase.auth.getUser();

  let lessonProgressMap: Record<string, string> = {};
  if (user && !isPreview) {
    const allLessonIds = outline.flatMap((m) => m.lessons.map((l: { id: string }) => l.id));
    for (let i = 0; i < allLessonIds.length; i += PROGRESS_CHUNK) {
      const slice = allLessonIds.slice(i, i + PROGRESS_CHUNK);
      const { data: progress } = await supabase
        .from("lesson_progress")
        .select("lesson_id, status")
        .eq("user_id", user.id)
        .in("lesson_id", slice);
      if (progress) {
        progress.forEach((p) => {
          lessonProgressMap[p.lesson_id] = p.status;
        });
      }
    }
  }

  return (
    <PlayerClient
      course={course}
      modules={outline}
      lessonProgress={lessonProgressMap}
      isPreview={isPreview}
    />
  );
}
