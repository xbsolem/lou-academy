import { createServerSupabase } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import StudioEditor from "./StudioEditor";

export default async function StudioCoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const supabase = await createServerSupabase();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();
  if (!profile || !["admin", "creator"].includes(profile.role)) {
    redirect("/");
  }

  const { data: course } = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

  if (!course) notFound();

  const { data: modules } = await supabase
    .from("modules")
    .select("*, lessons(*, content_blocks(id))")
    .eq("course_id", courseId)
    .order("position")
    .order("position", { referencedTable: "lessons" });

  return (
    <StudioEditor
      course={course}
      initialModules={modules || []}
    />
  );
}
