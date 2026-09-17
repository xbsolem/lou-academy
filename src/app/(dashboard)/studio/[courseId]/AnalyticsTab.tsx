"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

interface LearnerRow {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  progress_percent: number;
  last_activity_at: string | null;
}

export default function AnalyticsTab({ courseId }: { courseId: string }) {
  const [stats, setStats] = useState({
    enrolledCount: 0,
    startedCount: 0,
    completedCount: 0,
    avgProgress: 0,
    avgQuizScore: 0,
  });
  const [learners, setLearners] = useState<LearnerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data: enrollments } = await supabase
      .from("enrollments")
      .select("user_id, status, progress_percent, last_activity_at, profiles(first_name, last_name, email)")
      .eq("course_id", courseId);

    if (enrollments) {
      const enrolled = enrollments.length;
      const started = enrollments.filter((e) => e.status !== "enrolled").length;
      const completed = enrollments.filter((e) => e.status === "completed").length;
      const avg = enrolled > 0 ? Math.round(enrollments.reduce((a, e) => a + Number(e.progress_percent), 0) / enrolled) : 0;

      setStats({ enrolledCount: enrolled, startedCount: started, completedCount: completed, avgProgress: avg, avgQuizScore: 0 });

      setLearners(enrollments.map((e) => {
        const p = e.profiles as unknown as { first_name: string; last_name: string; email: string } | null;
        return {
          user_id: e.user_id,
          first_name: p?.first_name || "",
          last_name: p?.last_name || "",
          email: p?.email || "",
          status: e.status,
          progress_percent: Number(e.progress_percent),
          last_activity_at: e.last_activity_at,
        };
      }));
    }

    // Quiz stats
    const { data: lessons } = await supabase.from("lessons").select("id, module_id, modules!inner(course_id)").eq("modules.course_id", courseId);
    if (lessons && lessons.length > 0) {
      const lessonIds = lessons.map((l) => l.id);
      const { data: quizzes } = await supabase.from("quizzes").select("id").in("lesson_id", lessonIds);
      if (quizzes && quizzes.length > 0) {
        const quizIds = quizzes.map((q) => q.id);
        const { data: attempts } = await supabase.from("quiz_attempts").select("score").in("quiz_id", quizIds);
        if (attempts && attempts.length > 0) {
          const avgScore = Math.round(attempts.reduce((a, at) => a + Number(at.score), 0) / attempts.length);
          setStats((prev) => ({ ...prev, avgQuizScore: avgScore }));
        }
      }
    }

    setLoading(false);
  }, [courseId, supabase]);

  useEffect(() => { load(); }, [load]);

  if (loading) return <div style={{ padding: 40, textAlign: "center" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  const statCards = [
    { label: "Inscrits", value: stats.enrolledCount, icon: "fa-users", color: "var(--primary)" },
    { label: "Demarres", value: stats.startedCount, icon: "fa-play", color: "#2563eb" },
    { label: "Termines", value: stats.completedCount, icon: "fa-check-circle", color: "var(--success)" },
    { label: "Progression moy.", value: `${stats.avgProgress}%`, icon: "fa-chart-line", color: "var(--warning)" },
    { label: "Score quiz moy.", value: `${stats.avgQuizScore}%`, icon: "fa-question-circle", color: "#8b5cf6" },
  ];

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 24 }}>
        {statCards.map((s) => (
          <div key={s.label} style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 20, boxShadow: "var(--shadow)", textAlign: "center" }}>
            <i className={`fas ${s.icon}`} style={{ fontSize: "1.5rem", color: s.color, marginBottom: 8, display: "block" }} />
            <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 16 }}>Apprenants inscrits</h3>
      {learners.length === 0 ? (
        <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
          <p>Aucun apprenant inscrit.</p>
        </div>
      ) : (
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={thStyle}>Apprenant</th>
                <th style={thStyle}>Statut</th>
                <th style={thStyle}>Progression</th>
                <th style={thStyle}>Derniere activite</th>
              </tr>
            </thead>
            <tbody>
              {learners.map((l) => (
                <tr key={l.user_id} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={tdStyle}>
                    <div style={{ fontWeight: 500 }}>{l.first_name} {l.last_name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>{l.email}</div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600,
                      background: l.status === "completed" ? "#ecfdf5" : l.status === "in_progress" ? "#eff6ff" : "#f9fafb",
                      color: l.status === "completed" ? "#059669" : l.status === "in_progress" ? "#2563eb" : "var(--text-lighter)",
                    }}>
                      {l.status === "completed" ? "Termine" : l.status === "in_progress" ? "En cours" : "Inscrit"}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 6, background: "var(--bg)", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${l.progress_percent}%`, background: "var(--primary)", borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, minWidth: 36, textAlign: "right" }}>{l.progress_percent}%</span>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-lighter)" }}>
                      {l.last_activity_at ? new Date(l.last_activity_at).toLocaleDateString("fr-FR") : "—"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: "12px 16px", textAlign: "left", fontSize: "0.75rem", fontWeight: 600,
  color: "var(--text-lighter)", textTransform: "uppercase",
};
const tdStyle: React.CSSProperties = { padding: "12px 16px" };
