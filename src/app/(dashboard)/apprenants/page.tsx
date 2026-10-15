import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ApprenantsClient from "./ApprenantsClient";

export default async function ApprenantsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (!profile || profile.role !== "admin") redirect("/");

  const { data: learners } = await supabase
    .from("profiles")
    .select("*, enrollments(id, progress_percent, course_id, status)")
    .order("created_at", { ascending: false });

  return <ApprenantsClient learners={learners || []} initialSearch={q || ""} />;
}
