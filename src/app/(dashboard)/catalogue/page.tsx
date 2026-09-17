import { createServerSupabase } from "@/lib/supabase/server";
import CatalogueClient from "./CatalogueClient";

export default async function CataloguePage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: courses } = await supabase
    .from("courses")
    .select("*, modules(id), enrollments(id)")
    .eq("status", "published")
    .order("created_at", { ascending: false });

  const { data: myEnrollments } = user
    ? await supabase.from("enrollments").select("course_id").eq("user_id", user.id)
    : { data: [] };

  const enrolledIds = new Set((myEnrollments || []).map((e) => e.course_id));

  return (
    <CatalogueClient
      courses={courses || []}
      enrolledCourseIds={Array.from(enrolledIds)}
    />
  );
}
