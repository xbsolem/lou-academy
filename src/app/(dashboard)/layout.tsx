import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import type { Profile } from "@/types/database";
import DashboardShell from "@/components/layout/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!profile) redirect("/login");

  const lastSeen = profile.last_activity_at ? new Date(profile.last_activity_at).getTime() : 0;
  if (!lastSeen || Date.now() - lastSeen > 15 * 60 * 1000) {
    await supabase
      .from("profiles")
      .update({ last_activity_at: new Date().toISOString() })
      .eq("id", user.id);
  }

  const sixHours = 6 * 60 * 60 * 1000;
  const { data: lastConn } = await supabase
    .from("activity_events")
    .select("created_at")
    .eq("user_id", user.id)
    .eq("event_type", "Connexion")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  const lastConnAt = lastConn?.created_at ? new Date(lastConn.created_at).getTime() : 0;
  if (!lastConnAt || Date.now() - lastConnAt > sixHours) {
    await supabase.from("activity_events").insert({
      user_id: user.id,
      event_type: "Connexion",
      metadata: { source: "dashboard" },
    });
  }

  return <DashboardShell profile={profile as Profile}>{children}</DashboardShell>;
}
