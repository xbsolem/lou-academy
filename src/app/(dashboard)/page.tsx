import { createServerSupabase } from "@/lib/supabase/server";

export default async function DashboardPage() {
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

      {/* Stats Grid */}
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

      {/* Recent Activity */}
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
