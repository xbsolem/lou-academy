import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import EspaceForm from "./EspaceForm";
import LearningModePicker from "@/components/learning/LearningModePicker";

function asCourse(raw: unknown) {
  const row = Array.isArray(raw) ? raw[0] : raw;
  return row as {
    id: string;
    title: string;
    estimated_duration_minutes: number | null;
    category: string | null;
  } | null;
}

export default async function EspacePage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  if (!profile) redirect("/login");

  const [{ data: enrollments }, { data: certificates }, { data: profilEvent }] = await Promise.all([
    supabase
      .from("enrollments")
      .select("status, progress_percent, last_activity_at, courses(id, title, estimated_duration_minutes, category)")
      .eq("user_id", user.id)
      .order("last_activity_at", { ascending: false }),
    supabase.from("certificates").select("id, issued_at, courses(title)").eq("user_id", user.id),
    supabase
      .from("activity_events")
      .select("metadata, created_at")
      .eq("user_id", user.id)
      .eq("event_type", "Profil professionnel")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const meta = (profilEvent?.metadata || {}) as {
    target_role?: string | null;
    current_project?: string | null;
    career_goal?: string | null;
  };
  const targetRole = profile.target_role || meta.target_role || "";
  const currentProject = profile.current_project || meta.current_project || "";
  const careerGoal = profile.career_goal || meta.career_goal || "";

  const rows = enrollments || [];
  const minutesDone = rows.reduce((sum, row) => {
    const course = asCourse(row.courses);
    const duration = Number(course?.estimated_duration_minutes) || 0;
    return sum + Math.round((duration * (Number(row.progress_percent) || 0)) / 100);
  }, 0);
  const minutesEnrolled = rows.reduce((sum, row) => {
    const course = asCourse(row.courses);
    return sum + (Number(course?.estimated_duration_minutes) || 0);
  }, 0);
  const inProgress = rows.filter((r) => r.status !== "completed");
  const completed = rows.filter((r) => r.status === "completed");

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Mon espace</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Heures, projet professionnel et étapes de parcours — un suivi personnel, pas un bilan officiel.
      </p>

      <div className="stats-grid" style={{ marginBottom: 28 }}>
        <div style={statStyle}>
          <strong style={{ fontSize: "1.5rem" }}>{(minutesDone / 60).toFixed(1)} h</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Heures de formation suivies</span>
        </div>
        <div style={statStyle}>
          <strong style={{ fontSize: "1.5rem" }}>{(minutesEnrolled / 60).toFixed(1)} h</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Heures des parcours inscrits</span>
        </div>
        <div style={statStyle}>
          <strong style={{ fontSize: "1.5rem" }}>{inProgress.length}</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Formations en cours</span>
        </div>
        <div style={statStyle}>
          <strong style={{ fontSize: "1.5rem" }}>{certificates?.length ?? 0}</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Attestations obtenues</span>
        </div>
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 28 }}>
        <LearningModePicker />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
        <EspaceForm
          userId={user.id}
          targetRole={targetRole}
          currentProject={currentProject}
          careerGoal={careerGoal}
        />
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>Évolution de parcours</h2>
          {completed.length === 0 && inProgress.length === 0 ? (
            <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
              Aucune formation commencée.{" "}
              <Link href="/catalogue" style={{ color: "var(--primary)", fontWeight: 600 }}>
                Voir le catalogue
              </Link>
            </p>
          ) : (
            <ol style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              {completed.map((row) => {
                const course = asCourse(row.courses);
                if (!course) return null;
                return (
                  <li key={course.id} style={{ fontSize: "0.9rem" }}>
                    <strong>{course.title}</strong>
                    <div style={{ color: "var(--text-light)", fontSize: "0.8rem" }}>Terminée — attestation possible dans Certificats</div>
                  </li>
                );
              })}
              {inProgress.map((row) => {
                const course = asCourse(row.courses);
                if (!course) return null;
                return (
                  <li key={course.id} style={{ fontSize: "0.9rem" }}>
                    <Link href={`/player/${course.id}`} style={{ color: "var(--primary)", fontWeight: 600 }}>
                      {course.title}
                    </Link>
                    <div style={{ color: "var(--text-light)", fontSize: "0.8rem" }}>
                      En cours · {Math.round(Number(row.progress_percent) || 0)} %
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
          {targetRole && (
            <p style={{ marginTop: 16, fontSize: "0.85rem", color: "var(--text-light)" }}>
              Poste visé déclaré : <strong style={{ color: "var(--text)" }}>{targetRole}</strong>. Ce n&apos;est pas une garantie d&apos;embauche.
            </p>
          )}
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/suggestions" style={linkBtn}>
          <i className="fas fa-lightbulb" /> Demander une formation
        </Link>
        <Link href="/mes-formations" style={{ ...linkBtn, background: "var(--bg-card)", color: "var(--text)", border: "1px solid var(--border)" }}>
          <i className="fas fa-play-circle" /> Continuer
        </Link>
      </div>
    </>
  );
}

const statStyle: React.CSSProperties = {
  background: "var(--bg-card)",
  borderRadius: "var(--radius)",
  padding: 24,
  boxShadow: "var(--shadow)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const linkBtn: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: "var(--radius-sm)",
  background: "var(--primary)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "0.9rem",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
};
