import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, first_name")
    .eq("id", user.id)
    .single();

  if (profile?.role === "learner") {
    return <LearnerHome userId={user.id} firstName={profile.first_name} />;
  }

  return <AdminHome />;
}

async function LearnerHome({
  userId,
  firstName,
}: {
  userId: string;
  firstName: string;
}) {
  const supabase = await createServerSupabase();
  const { data: enrollments } = await supabase
    .from("enrollments")
    .select("progress_percent, status, courses(id, title, icon, gradient)")
    .eq("user_id", userId)
    .order("last_activity_at", { ascending: false })
    .limit(6);

  const inProgress = (enrollments || []).filter((e) => e.status !== "completed");
  const completed = (enrollments || []).filter((e) => e.status === "completed");

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Bonjour{firstName ? ` ${firstName}` : ""}
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Retrouvez vos formations et continuez là où vous vous êtes arrêté.
      </p>

      <div className="stats-grid" style={{ marginBottom: 32 }}>
        <div style={statCardStyle}>
          <strong style={{ fontSize: "1.6rem" }}>{inProgress.length}</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Formations en cours</span>
        </div>
        <div style={statCardStyle}>
          <strong style={{ fontSize: "1.6rem" }}>{completed.length}</strong>
          <span style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Formations terminées</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <Link href="/catalogue" style={primaryBtnStyle}>
          <i className="fas fa-book-open" /> Catalogue
        </Link>
        <Link href="/mes-formations" style={secondaryBtnStyle}>
          <i className="fas fa-play-circle" /> Mes formations
        </Link>
      </div>

      <h2 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 16 }}>Continuer</h2>
      {inProgress.length > 0 ? (
        <div className="cards-grid">
          {inProgress.map((e) => {
            const raw = e.courses as unknown;
            const c = (Array.isArray(raw) ? raw[0] : raw) as
              | { id: string; title: string; icon: string | null; gradient: string | null }
              | null;
            if (!c) return null;
            const p = Number(e.progress_percent);
            return (
              <Link key={c.id} href={`/player/${c.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
                  <div style={{ height: 100, background: c.gradient || "linear-gradient(135deg, #4f46e5, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fas ${c.icon || "fa-book"}`} style={{ fontSize: "2rem", color: "rgba(255,255,255,0.35)" }} />
                  </div>
                  <div style={{ padding: 16 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 10 }}>{c.title}</h3>
                    <div style={{ height: 8, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${p}%`, background: "var(--primary)", borderRadius: 10 }} />
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-light)", marginTop: 8 }}>{Math.round(p)}%</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p style={{ color: "var(--text-light)" }}>
          Aucune formation en cours.{" "}
          <Link href="/catalogue" style={{ color: "var(--primary)", fontWeight: 600 }}>
            Parcourir le catalogue
          </Link>
        </p>
      )}
    </>
  );
}

async function AdminHome() {
  const supabase = await createServerSupabase();

  const [
    { count: learnersCount },
    { count: coursesCount },
    { count: enrollmentsCount },
    { data: enrollments },
    { data: recentActivity },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "learner").eq("status", "active"),
    supabase.from("courses").select("*", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("enrollments").select("*", { count: "exact", head: true }),
    supabase.from("enrollments").select("progress_percent"),
    supabase.from("activity_events").select("*, profiles(first_name, last_name)").order("created_at", { ascending: false }).limit(5),
  ]);

  const avgProgress =
    enrollments && enrollments.length > 0
      ? Math.round(
          enrollments.reduce((s, e) => s + Number(e.progress_percent), 0) /
            enrollments.length
        )
      : 0;

  const stats = [
    { icon: "fa-users", color: "blue", value: learnersCount ?? 0, label: "Apprenants actifs" },
    { icon: "fa-book-open", color: "green", value: coursesCount ?? 0, label: "Formations publiées" },
    { icon: "fa-user-graduate", color: "orange", value: enrollmentsCount ?? 0, label: "Inscriptions totales" },
    { icon: "fa-chart-line", color: "cyan", value: `${avgProgress}%`, label: "Progression moyenne" },
  ];

  const colorMap: Record<string, { bg: string; fg: string }> = {
    blue: { bg: "#eff6ff", fg: "#4f46e5" },
    green: { bg: "#ecfdf5", fg: "#10b981" },
    orange: { bg: "#fffbeb", fg: "#f59e0b" },
    cyan: { bg: "#ecfeff", fg: "#06b6d4" },
  };

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Tableau de bord
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Bienvenue ! Voici un aperçu de votre plateforme.
      </p>

      <div className="stats-grid" style={{ marginBottom: 32 }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--radius)",
              padding: 24,
              boxShadow: "var(--shadow)",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                background: colorMap[s.color].bg,
                color: colorMap[s.color].fg,
              }}
            >
              <i className={`fas ${s.icon}`} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
                {s.value}
              </h3>
              <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius)",
          padding: 24,
          boxShadow: "var(--shadow)",
        }}
      >
        <h3 style={{ fontSize: "1rem", marginBottom: 20 }}>
          <i className="fas fa-clock" style={{ marginRight: 8, color: "var(--warning)" }} />
          Activité récente
        </h3>
        {recentActivity && recentActivity.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {recentActivity.map((event) => {
              const p = event.profiles as { first_name: string; last_name: string } | null;
              return (
                <div
                  key={event.id}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      background: "#eff6ff",
                      color: "#4f46e5",
                      flexShrink: 0,
                    }}
                  >
                    <i className="fas fa-bolt" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.9rem", marginBottom: 2 }}>
                      <strong>
                        {p ? `${p.first_name} ${p.last_name}` : "Utilisateur"}
                      </strong>{" "}
                      — {event.event_type}
                    </p>
                    <small style={{ color: "var(--text-lighter)", fontSize: "0.8rem" }}>
                      {new Date(event.created_at).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
            Aucune activité récente.
          </p>
        )}
      </div>
    </>
  );
}

const statCardStyle: React.CSSProperties = {
  background: "var(--bg-card)",
  borderRadius: "var(--radius)",
  padding: 24,
  boxShadow: "var(--shadow)",
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const primaryBtnStyle: React.CSSProperties = {
  padding: "10px 20px",
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

const secondaryBtnStyle: React.CSSProperties = {
  ...primaryBtnStyle,
  background: "var(--bg-card)",
  color: "var(--text)",
  border: "1px solid var(--border)",
};
