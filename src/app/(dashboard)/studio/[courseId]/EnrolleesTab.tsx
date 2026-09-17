"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

interface EnrolleeRow {
  enrollment_id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  enrollment_status: string;
  progress_percent: number;
  enrolled_at: string;
}

export default function EnrolleesTab({ courseId }: { courseId: string }) {
  const [enrollees, setEnrollees] = useState<EnrolleeRow[]>([]);
  const [allLearners, setAllLearners] = useState<{ id: string; first_name: string; last_name: string; email: string }[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("enrollments")
      .select("id, user_id, status, progress_percent, enrolled_at, profiles(first_name, last_name, email)")
      .eq("course_id", courseId);

    if (data) {
      setEnrollees(data.map((e) => {
        const p = e.profiles as unknown as { first_name: string; last_name: string; email: string } | null;
        return {
          enrollment_id: e.id,
          user_id: e.user_id,
          first_name: p?.first_name || "",
          last_name: p?.last_name || "",
          email: p?.email || "",
          enrollment_status: e.status,
          progress_percent: Number(e.progress_percent),
          enrolled_at: e.enrolled_at,
        };
      }));
    }
    setLoading(false);
  }, [courseId, supabase]);

  const loadLearners = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("id, first_name, last_name, email")
      .eq("role", "learner")
      .eq("status", "active");
    if (data) setAllLearners(data);
    setShowAdd(true);
  };

  const enrollUser = async (userId: string) => {
    await supabase.from("enrollments").upsert({
      user_id: userId,
      course_id: courseId,
      status: "enrolled",
      progress_percent: 0,
    }, { onConflict: "user_id,course_id" });
    setShowAdd(false);
    await load();
  };

  const unenroll = async (enrollmentId: string) => {
    if (!confirm("Desinscrire cet apprenant ?")) return;
    await supabase.from("enrollments").delete().eq("id", enrollmentId);
    await load();
  };

  useEffect(() => { load(); }, [load]);

  if (loading) return <div style={{ padding: 40, textAlign: "center" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  const enrolledIds = new Set(enrollees.map((e) => e.user_id));
  const available = allLearners.filter((l) =>
    !enrolledIds.has(l.id) &&
    (search === "" || `${l.first_name} ${l.last_name} ${l.email}`.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 4 }}>Apprenants inscrits</h3>
          <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>{enrollees.length} apprenants</p>
        </div>
        <button onClick={loadLearners}
          style={{ padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.85rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <i className="fas fa-user-plus" /> Ajouter un apprenant
        </button>
      </div>

      {showAdd && (
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 20, boxShadow: "var(--shadow)", marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <h4 style={{ fontWeight: 600 }}>Selectionner un apprenant</h4>
            <button onClick={() => setShowAdd(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)" }}>
              <i className="fas fa-times" />
            </button>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher..."
            style={{ width: "100%", padding: "8px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.85rem", fontFamily: "inherit", marginBottom: 12 }}
          />
          <div style={{ maxHeight: 200, overflowY: "auto" }}>
            {available.length === 0 ? (
              <p style={{ textAlign: "center", color: "var(--text-lighter)", padding: 16, fontSize: "0.85rem" }}>Aucun apprenant disponible.</p>
            ) : (
              available.map((l) => (
                <div key={l.id} onClick={() => enrollUser(l.id)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", borderRadius: 6, cursor: "pointer", fontSize: "0.85rem" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600 }}>
                    {l.first_name.charAt(0)}{l.last_name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500 }}>{l.first_name} {l.last_name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>{l.email}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {enrollees.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "var(--bg-card)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)" }}>
          <i className="fas fa-user-graduate" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text-light)" }}>Aucun apprenant inscrit</h3>
        </div>
      ) : (
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                <th style={thStyle}>Apprenant</th>
                <th style={thStyle}>Statut</th>
                <th style={thStyle}>Progression</th>
                <th style={thStyle}>Inscrit le</th>
                <th style={thStyle}></th>
              </tr>
            </thead>
            <tbody>
              {enrollees.map((e) => (
                <tr key={e.enrollment_id} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 600 }}>
                        {e.first_name.charAt(0)}{e.last_name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, fontSize: "0.9rem" }}>{e.first_name} {e.last_name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>{e.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600,
                      background: e.enrollment_status === "completed" ? "#ecfdf5" : e.enrollment_status === "in_progress" ? "#eff6ff" : "#f9fafb",
                      color: e.enrollment_status === "completed" ? "#059669" : e.enrollment_status === "in_progress" ? "#2563eb" : "var(--text-lighter)",
                    }}>
                      {e.enrollment_status === "completed" ? "Termine" : e.enrollment_status === "in_progress" ? "En cours" : "Inscrit"}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 6, background: "var(--bg)", borderRadius: 3, maxWidth: 100, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${e.progress_percent}%`, background: "var(--primary)", borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>{e.progress_percent}%</span>
                    </div>
                  </td>
                  <td style={tdStyle}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-lighter)" }}>
                      {new Date(e.enrolled_at).toLocaleDateString("fr-FR")}
                    </span>
                  </td>
                  <td style={tdStyle}>
                    <button onClick={() => unenroll(e.enrollment_id)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)", fontSize: "0.8rem" }}
                      title="Desinscrire"
                    >
                      <i className="fas fa-user-minus" />
                    </button>
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
