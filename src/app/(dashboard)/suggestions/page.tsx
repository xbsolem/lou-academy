import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SuggestionsClient from "./SuggestionsClient";

export default async function SuggestionsPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  const isAdmin = profile?.role === "admin";

  let query = supabase
    .from("activity_events")
    .select("id, created_at, user_id, metadata, profiles(first_name, last_name, email)")
    .eq("event_type", "Demande de formation")
    .order("created_at", { ascending: false })
    .limit(80);

  if (!isAdmin) query = query.eq("user_id", user.id);

  const { data } = await query;

  return (
    <SuggestionsClient
      isAdmin={Boolean(isAdmin)}
      userId={user.id}
      initialRequests={(data || []) as never}
    />
  );
}
