"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

interface EnrollmentDetail {
  id: string;
  course_id: string;
  course_title: string;
  status: string;
  progress_percent: number;
  enrolled_at: string;
}

interface LearnerInfo {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  department: string | null;
  status: string;
  created_at: string;
  last_activity_at: string | null;
}

export default function LearnerDetail({
  learner,
  onClose,
  onStatusChanged,
}: {
  learner: LearnerInfo;
  onClose: () => void;
  onStatusChanged: () => void;
}) {
  const [enrollments, setEnrollments] = useState<EnrollmentDetail[]>([]);
  const [courses, setCourses] = useState<{ id: string; title: string }[]>([]);
  const [showEnroll, setShowEnroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState(false);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data } = await supabase
      .from("enrollments")
      .select("id, course_id, status, progress_percent, enrolled_at, courses(title)")
      .eq("user_id", learner.id);
    if (data) {
      setEnrollments(
        data.map((e) => ({
          id: e.id,
          course_id: e.course_id,
          course_title: (e.courses as unknown as { title: string })?.title || "Sans titre",
          status: e.status,
          progress_percent: Number(e.progress_percent),
          enrolled_at: e.enrolled_at,
        }))
      );
    }
    setLoading(false);
  }, [learner.id, supabase]);

  useEffect(() => { load(); }, [load]);

  const toggleStatus = async () => {
    setToggling(true);
    const newStatus = learner.status === "active" ? "inactive" : "active";
    await supabase.from("profiles").update({ status: newStatus }).eq("id", learner.id);
    setToggling(false);
    onStatusChanged();
  };

  const loadCourses = async () => {
    const { data } = await supabase
      .from("courses")
      .select("id, title")
      .eq("status", "published");
    if (data) setCourses(data);
    setShowEnroll(true);
  };

  const enrollInCourse = async (courseId: string) => {
    await supabase.from("enrollments").upsert(
      { user_id: learner.id, course_id: courseId, status: "enrolled", progress_percent: 0 },
      { onConflict: "user_id,course_id" }
    );
    setShowEnroll(false);
    await load();
  };

  const unenroll = async (enrollmentId: string) => {
    if (!confirm("Desinscrire de cette formation ?")) return;
    await supabase.from("enrollments").delete().eq("id", enrollmentId);
    await load();
  };

  const initials = `${learner.first_name?.[0] || ""}${learner.last_name?.[0] || ""}`.toUpperCase();
  const enrolledCourseIds = new Set(enrollments.map((e) => e.course_id));

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)", zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="learner-modal-content"
      >
        {/* Header */}
        <div style={{ padding: "24px 28px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: "var(--primary)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: "1.1rem",
          }}>
            {initials}
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 2 }}>
              {learner.first_name} {learner.last_name}
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{learner.email}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <span style={{
                padding: "2px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600,
                background: learner.status === "active" ? "#ecfdf5" : "#fef2f2",
                color: learner.status === "active" ? "#059669" : "#dc2626",
              }}>
                {learner.status === "active" ? "Actif" : "Inactif"}
              </span>
              <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, background: "#eff6ff", color: "var(--primary)" }}>
                {learner.role}
              </span>
              {learner.department && (
                <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, background: "var(--bg)", color: "var(--text-light)" }}>
                  {learner.department}
                </span>
              )}
            </div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)", fontSize: "1.2rem" }}>
            <i className="fas fa-times" />
          </button>
        </div>

        {/* Actions */}
        <div style={{ padding: "16px 28px", display: "flex", gap: 8, borderBottom: "1px solid var(--border)" }}>
          <button
            onClick={toggleStatus}
            disabled={toggling}
            style={{
              padding: "6px 14px", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", fontFamily: "inherit",
              border: "1px solid var(--border)", cursor: "pointer",
              background: learner.status === "active" ? "#fef2f2" : "#ecfdf5",
              color: learner.status === "active" ? "#dc2626" : "#059669",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className={`fas ${learner.status === "active" ? "fa-user-slash" : "fa-user-check"}`} />
            {learner.status === "active" ? "Desactiver" : "Reactiver"}
          </button>
          <button
            onClick={loadCourses}
            style={{
              padding: "6px 14px", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", fontFamily: "inherit",
              border: "none", cursor: "pointer", background: "var(--primary)", color: "#fff",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className="fas fa-plus" /> Inscrire a une formation
          </button>
        </div>

        {/* Enroll picker */}
        {showEnroll && (
          <div style={{ padding: "12px 28px", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: 8 }}>Choisir une formation :</p>
            <div style={{ maxHeight: 150, overflowY: "auto" }}>
              {courses.filter((c) => !enrolledCourseIds.has(c.id)).length === 0 ? (
                <p style={{ fontSize: "0.8rem", color: "var(--text-lighter)", padding: 8 }}>Deja inscrit a toutes les formations.</p>
              ) : (
                courses.filter((c) => !enrolledCourseIds.has(c.id)).map((c) => (
                  <div
                    key={c.id}
                    onClick={() => enrollInCourse(c.id)}
                    style={{ padding: "8px 12px", borderRadius: 6, cursor: "pointer", fontSize: "0.85rem" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-card)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    {c.title}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Info */}
        <div style={{ padding: "20px 28px" }}>
          <div className="form-grid-2" style={{ gap: 16, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)", fontWeight: 600, marginBottom: 4 }}>Inscrit depuis</div>
              <div style={{ fontSize: "0.9rem" }}>{new Date(learner.created_at).toLocaleDateString("fr-FR")}</div>
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-lighter)", fontWeight: 600, marginBottom: 4 }}>Derniere activite</div>
              <div style={{ fontSize: "0.9rem" }}>{learner.last_activity_at ? new Date(learner.last_activity_at).toLocaleDateString("fr-FR") : "Jamais"}</div>
            </div>
          </div>

          <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 12 }}>
            Formations ({enrollments.length})
          </h3>
          {loading ? (
            <div style={{ textAlign: "center", padding: 20 }}>Chargement...</div>
          ) : enrollments.length === 0 ? (
            <p style={{ fontSize: "0.85rem", color: "var(--text-lighter)", padding: "12px 0" }}>
              Aucune formation.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {enrollments.map((e) => (
                <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "var(--bg)", borderRadius: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: 4 }}>{e.course_title}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, maxWidth: 120, height: 5, background: "var(--border)", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${e.progress_percent}%`, background: "var(--primary)", borderRadius: 3 }} />
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600 }}>{e.progress_percent}%</span>
                    </div>
                  </div>
                  <span style={{
                    padding: "3px 10px", borderRadius: 20, fontSize: "0.65rem", fontWeight: 600,
                    background: e.status === "completed" ? "#ecfdf5" : e.status === "in_progress" ? "#eff6ff" : "#f9fafb",
                    color: e.status === "completed" ? "#059669" : e.status === "in_progress" ? "#2563eb" : "var(--text-lighter)",
                  }}>
                    {e.status === "completed" ? "Termine" : e.status === "in_progress" ? "En cours" : "Inscrit"}
                  </span>
                  <button
                    onClick={() => unenroll(e.id)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)", fontSize: "0.75rem" }}
                    title="Desinscrire"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
