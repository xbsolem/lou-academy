import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";
import { authorizeAiAction, isStaffRole, type AiAction } from "./access";

export async function requireAiContext(input: {
  action: unknown;
  courseId?: string | null;
}): Promise<
  | {
      ok: true;
      action: AiAction;
      supabase: Awaited<ReturnType<typeof createServerSupabase>>;
      userId: string;
      role: string;
    }
  | { ok: false; response: NextResponse }
> {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { ok: false, response: NextResponse.json({ error: "Vous devez être connecté." }, { status: 401 }) };
  }

  const { data: profile } = await supabase.from("profiles").select("id, role").eq("id", user.id).single();
  if (!profile) {
    return { ok: false, response: NextResponse.json({ error: "Profil introuvable." }, { status: 401 }) };
  }

  let enrolled = false;
  if (input.courseId) {
    if (isStaffRole(profile.role)) {
      enrolled = true;
    } else {
      const { data } = await supabase
        .from("enrollments")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_id", input.courseId)
        .maybeSingle();
      enrolled = Boolean(data);
    }
  }

  const auth = authorizeAiAction({ action: input.action, role: profile.role, enrolled });
  if (!auth.ok) {
    return { ok: false, response: NextResponse.json({ error: auth.error }, { status: auth.status }) };
  }

  if ((auth.action === "tutor" || auth.action === "revision_sheet") && !input.courseId) {
    return {
      ok: false,
      response: NextResponse.json({ error: "L'identifiant de la formation est requis." }, { status: 400 }),
    };
  }

  return { ok: true, action: auth.action, supabase, userId: user.id, role: profile.role };
}
