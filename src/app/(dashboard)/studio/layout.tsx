import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function StudioLayout({
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
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || !["admin", "creator"].includes(profile.role)) {
    redirect("/");
  }

  return children;
}
