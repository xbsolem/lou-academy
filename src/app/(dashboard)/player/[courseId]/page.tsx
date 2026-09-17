import { createServerSupabase } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import PlayerClient from "./PlayerClient";

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
    .select("*, lessons(*, content_blocks(*))")
    .eq("course_id", courseId)
    .order("position")
    .order("position", { referencedTable: "lessons" })
    .order("position", { referencedTable: "lessons.content_blocks" });

  const { data: { user } } = await supabase.auth.getUser();

  let lessonProgressMap: Record<string, string> = {};
  if (user && !isPreview) {
    const allLessonIds = (modules || []).flatMap((m) =>
      (m.lessons || []).map((l: { id: string }) => l.id)
    );
    if (allLessonIds.length > 0) {
      const { data: progress } = await supabase
        .from("lesson_progress")
        .select("lesson_id, status")
        .eq("user_id", user.id)
        .in("lesson_id", allLessonIds);
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
      modules={modules || []}
      lessonProgress={lessonProgressMap}
      isPreview={isPreview}
    />
  );
}
