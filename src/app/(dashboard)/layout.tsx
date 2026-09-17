import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import type { Profile } from "@/types/database";

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

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar profile={profile as Profile} />
      <main style={{ marginLeft: 260, flex: 1, minHeight: "100vh" }}>
        <Topbar />
        <div style={{ padding: 32 }}>{children}</div>
      </main>
    </div>
  );
}
