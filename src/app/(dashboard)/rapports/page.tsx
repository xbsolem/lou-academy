import { createServerSupabase } from "@/lib/supabase/server";

export default async function RapportsPage() {
  const supabase = await createServerSupabase();

  const [
    { count: totalCompletions },
    { data: enrollments },
    { count: certCount },
    { data: topCourses },
  ] = await Promise.all([
    supabase.from("enrollments").select("*", { count: "exact", head: true }).eq("status", "completed"),
    supabase.from("enrollments").select("progress_percent"),
    supabase.from("certificates").select("*", { count: "exact", head: true }),
    supabase.from("courses").select("id, title, enrollments(id)").eq("status", "published").limit(5),
  ]);

  const avgP = enrollments && enrollments.length > 0
    ? Math.round(enrollments.reduce((s, e) => s + Number(e.progress_percent), 0) / enrollments.length)
    : 0;

  const stats = [
    { icon: "fa-check-double", color: "#10b981", bg: "#ecfdf5", value: totalCompletions ?? 0, label: "Formations terminees" },
    { icon: "fa-percentage", color: "#4f46e5", bg: "#eff6ff", value: `${avgP}%`, label: "Taux de completion moyen" },
    { icon: "fa-certificate", color: "#06b6d4", bg: "#ecfeff", value: certCount ?? 0, label: "Certificats delivres" },
  ];

  const coursesWithCount = (topCourses || []).map((c) => ({
    ...c,
    count: Array.isArray(c.enrollments) ? c.enrollments.length : 0,
  })).sort((a, b) => b.count - a.count);

  const maxCount = Math.max(1, ...coursesWithCount.map((c) => c.count));

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>Rapports et statistiques</h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>Analysez les performances de votre plateforme</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 32 }}>
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

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: 20 }}>Top formations par inscriptions</h3>
        {coursesWithCount.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {coursesWithCount.map((c) => (
              <div key={c.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 200, fontSize: "0.85rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.title}</span>
                <div style={{ flex: 1, height: 8, background: "var(--border)", borderRadius: 10, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(c.count / maxCount) * 100}%`, background: "var(--primary)", borderRadius: 10 }} />
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, width: 30 }}>{c.count}</span>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--text-light)" }}>Aucune donnee.</p>
        )}
      </div>
    </>
  );
}
