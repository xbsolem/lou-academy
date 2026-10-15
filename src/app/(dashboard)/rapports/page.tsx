import { createServerSupabase } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

function startOfDaysAgo(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export default async function RapportsPage() {
  const supabase = await createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (!profile || !["admin", "creator"].includes(profile.role)) redirect("/");

  const weekAgo = startOfDaysAgo(7);
  const monthAgo = startOfDaysAgo(30);
  const staleCut = startOfDaysAgo(14);

  const [
    { count: totalCompletions },
    { data: enrollments },
    { count: certCount },
    { data: topCourses },
    { count: connections7d },
    { count: connections30d },
    { count: learnersTotal },
    { data: activeProfiles },
    { data: requests },
    { count: enrollments7d },
    { data: newProfiles },
  ] = await Promise.all([
    supabase.from("enrollments").select("*", { count: "exact", head: true }).eq("status", "completed"),
    supabase.from("enrollments").select("progress_percent, status, last_activity_at, enrolled_at, user_id, course_id"),
    supabase.from("certificates").select("*", { count: "exact", head: true }),
    supabase.from("courses").select("id, title, enrollments(id)").eq("status", "published").limit(8),
    supabase.from("activity_events").select("id", { count: "exact", head: true }).eq("event_type", "Connexion").gte("created_at", weekAgo),
    supabase.from("activity_events").select("id", { count: "exact", head: true }).eq("event_type", "Connexion").gte("created_at", monthAgo),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "learner"),
    supabase.from("profiles").select("id, last_activity_at").eq("role", "learner").gte("last_activity_at", weekAgo),
    supabase
      .from("activity_events")
      .select("id, created_at, metadata")
      .eq("event_type", "Demande de formation")
      .order("created_at", { ascending: false })
      .limit(50),
    supabase.from("enrollments").select("id", { count: "exact", head: true }).gte("enrolled_at", weekAgo),
    supabase.from("profiles").select("id").eq("role", "learner").gte("created_at", weekAgo),
  ]);

  const allEnroll = enrollments || [];
  const started = allEnroll.filter((e) => e.status === "in_progress" || Number(e.progress_percent) > 0).length;
  const completed = allEnroll.filter((e) => e.status === "completed").length;
  const enrolledOnly = allEnroll.filter((e) => e.status === "enrolled" && Number(e.progress_percent) === 0).length;
  const stale = allEnroll.filter((e) => {
    if (e.status === "completed") return false;
    const stamp = e.last_activity_at || e.enrolled_at;
    return Boolean(stamp && stamp < staleCut);
  }).length;
  const avgP =
    allEnroll.length > 0
      ? Math.round(allEnroll.reduce((s, e) => s + Number(e.progress_percent), 0) / allEnroll.length)
      : 0;
  const completionRate = allEnroll.length > 0 ? Math.round((completed / allEnroll.length) * 100) : 0;
  const startRate = allEnroll.length > 0 ? Math.round((started / allEnroll.length) * 100) : 0;

  const coursesWithCount = (topCourses || [])
    .map((c) => ({
      ...c,
      count: Array.isArray(c.enrollments) ? c.enrollments.length : 0,
    }))
    .sort((a, b) => b.count - a.count);
  const maxCount = Math.max(1, ...coursesWithCount.map((c) => c.count));

  const topicMap = new Map<string, number>();
  const roleMap = new Map<string, number>();
  for (const row of requests || []) {
    const meta = (row.metadata || {}) as { topic?: string; target_role?: string };
    const topic = (meta.topic || "Non précisé").trim().toLowerCase();
    topicMap.set(topic, (topicMap.get(topic) || 0) + 1);
    if (meta.target_role) {
      const role = meta.target_role.trim().toLowerCase();
      roleMap.set(role, (roleMap.get(role) || 0) + 1);
    }
  }
  const topTopics = [...topicMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  const topRoles = [...roleMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

  const stats = [
    { icon: "fa-signal", color: "#4f46e5", bg: "#eff6ff", value: connections7d ?? 0, label: "Connexions (7 j.)" },
    { icon: "fa-user-clock", color: "#0f766e", bg: "#ecfdf5", value: activeProfiles?.length ?? 0, label: "Apprenants actifs (7 j.)" },
    { icon: "fa-user-plus", color: "#d97706", bg: "#fffbeb", value: newProfiles?.length ?? 0, label: "Nouveaux comptes (7 j.)" },
    { icon: "fa-plus-circle", color: "#7c3aed", bg: "#f5f3ff", value: enrollments7d ?? 0, label: "Inscriptions (7 j.)" },
    { icon: "fa-percentage", color: "#4f46e5", bg: "#eff6ff", value: `${avgP}%`, label: "Progression moyenne" },
    { icon: "fa-flag-checkered", color: "#10b981", bg: "#ecfdf5", value: `${completionRate}%`, label: "Taux de completion" },
    { icon: "fa-play", color: "#06b6d4", bg: "#ecfeff", value: `${startRate}%`, label: "Taux de démarrage" },
    { icon: "fa-pause", color: "#ef4444", bg: "#fef2f2", value: stale, label: "Parcours inactifs (14 j.)" },
    { icon: "fa-check-double", color: "#10b981", bg: "#ecfdf5", value: totalCompletions ?? 0, label: "Formations terminées" },
    { icon: "fa-certificate", color: "#06b6d4", bg: "#ecfeff", value: certCount ?? 0, label: "Attestations délivrées" },
    { icon: "fa-lightbulb", color: "#d97706", bg: "#fffbeb", value: requests?.length ?? 0, label: "Suggestions (échantillon)" },
    { icon: "fa-users", color: "#4f46e5", bg: "#eff6ff", value: learnersTotal ?? 0, label: "Apprenants inscrits" },
  ];

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Rapports et indicateurs</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        Connexions, démarrage, completion, besoins exprimés. Les volumes 7 jours et 30 jours aident à voir l&apos;usage réel, pas seulement les inscriptions.
      </p>

      <div className="stats-grid" style={{ marginBottom: 32 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", background: s.bg, color: s.color }}>
              <i className={`fas ${s.icon}`} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>{s.value}</h3>
              <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 24 }}>
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>Entonnoir d&apos;engagement</h3>
          <p style={{ fontSize: "0.9rem", marginBottom: 8 }}>Inscrits sans démarrer : <strong>{enrolledOnly}</strong></p>
          <p style={{ fontSize: "0.9rem", marginBottom: 8 }}>Démarrés : <strong>{started}</strong></p>
          <p style={{ fontSize: "0.9rem", marginBottom: 8 }}>Terminés : <strong>{completed}</strong></p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
            Connexions 30 jours : {connections30d ?? 0}. Un écart élevé entre inscriptions et démarrages signale un besoin d&apos;accompagnement, pas forcément un désintérêt.
          </p>
        </div>
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>Besoins exprimés (sujets)</h3>
          {topTopics.length === 0 ? (
            <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
              Aucune suggestion pour l&apos;instant.{" "}
              <Link href="/suggestions" style={{ color: "var(--primary)", fontWeight: 600 }}>
                Voir l&apos;onglet
              </Link>
            </p>
          ) : (
            topTopics.map(([label, n]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px solid var(--border)" }}>
                <span style={{ textTransform: "capitalize" }}>{label}</span>
                <strong>{n}</strong>
              </div>
            ))
          )}
        </div>
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: 12 }}>Postes visés déclarés</h3>
          {topRoles.length === 0 ? (
            <p style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>Aucun poste visé dans les demandes.</p>
          ) : (
            topRoles.map(([label, n]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "0.9rem", borderBottom: "1px solid var(--border)" }}>
                <span style={{ textTransform: "capitalize" }}>{label}</span>
                <strong>{n}</strong>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: 20 }}>Top formations par inscriptions</h3>
        {coursesWithCount.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {coursesWithCount.map((c) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="report-bar-label">{c.title}</span>
                <div style={{ flex: 1, height: 8, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(c.count / maxCount) * 100}%`, background: "var(--primary)", borderRadius: 10 }} />
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, width: 30 }}>{c.count}</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--text-light)" }}>Aucune donnée.</p>
        )}
      </div>
    </>
  );
}
