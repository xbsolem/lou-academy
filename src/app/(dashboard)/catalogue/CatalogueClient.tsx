"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { Course } from "@/types/database";

type CourseWithRels = Course & { modules: { id: string }[]; enrollments: { id: string }[] };

export default function CatalogueClient({
  courses,
  enrolledCourseIds,
}: {
  courses: CourseWithRels[];
  enrolledCourseIds: string[];
}) {
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set(enrolledCourseIds));
  const [filter, setFilter] = useState("all");
  const [enrolling, setEnrolling] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const categories: string[] = ["all", ...new Set(courses.map((c) => c.category).filter((c): c is string => !!c))];
  const filtered = filter === "all" ? courses : courses.filter((c) => c.category === filter);

  const handleEnroll = async (courseId: string) => {
    setEnrolling(courseId);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("enrollments").upsert({
      user_id: user.id,
      course_id: courseId,
      status: "enrolled",
      progress_percent: 0,
    }, { onConflict: "user_id,course_id" });

    await supabase.from("activity_events").insert({
      user_id: user.id,
      course_id: courseId,
      event_type: "Inscription a une formation",
    });

    setEnrolled((prev) => new Set([...prev, courseId]));
    setEnrolling(null);
  };

  return (
    <>
      <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: 8 }}>
        Catalogue des formations
      </h1>
      <p style={{ color: "var(--text-light)", marginBottom: 24, fontSize: "0.95rem" }}>
        {courses.length} formations disponibles
      </p>

      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              border: `1px solid ${filter === cat ? "var(--primary)" : "var(--border)"}`,
              background: filter === cat ? "var(--primary)" : "var(--bg-card)",
              color: filter === cat ? "#fff" : "inherit",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontFamily: "inherit",
            }}
          >
            {cat === "all" ? "Toutes" : cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="cards-grid">
          {filtered.map((course) => {
            const isEnrolled = enrolled.has(course.id);
            const gradient = course.gradient || "linear-gradient(135deg, #4f46e5, #06b6d4)";
            const icon = course.icon || "fa-book";
            const moduleCount = Array.isArray(course.modules) ? course.modules.length : 0;
            const enrollCount = Array.isArray(course.enrollments) ? course.enrollments.length : 0;
            const dur = course.estimated_duration_minutes
              ? `${Math.floor(course.estimated_duration_minutes / 60)}h${String(course.estimated_duration_minutes % 60).padStart(2, "0")}`
              : "";

            return (
              <div
                key={course.id}
                style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", overflow: "hidden", boxShadow: "var(--shadow)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
              >
                <div
                  onClick={() => isEnrolled ? router.push(`/player/${course.id}`) : null}
                  style={{ height: 160, background: gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", cursor: isEnrolled ? "pointer" : "default" }}
                >
                  <i className={`fas ${icon}`} style={{ fontSize: "3rem", color: "rgba(255,255,255,0.3)" }} />
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>{course.title}</h3>
                  <p style={{ color: "var(--text-light)", fontSize: "0.85rem", marginBottom: 12, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {course.description || "Aucune description"}
                  </p>
                  <div style={{ display: "flex", gap: 16, fontSize: "0.8rem", color: "var(--text-lighter)" }}>
                    {dur && <span><i className="fas fa-clock" /> {dur}</span>}
                    <span><i className="fas fa-layer-group" /> {moduleCount} modules</span>
                    <span><i className="fas fa-users" /> {enrollCount}</span>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px", borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.75rem", padding: "4px 10px", borderRadius: 20, background: "#eff6ff", color: "var(--primary)", fontWeight: 500 }}>
                    {course.category || "Non categorise"}
                  </span>
                  {isEnrolled ? (
                    <button
                      onClick={() => router.push(`/player/${course.id}`)}
                      style={{ padding: "6px 16px", borderRadius: "var(--radius-sm)", border: "none", background: "var(--success)", color: "#fff", cursor: "pointer", fontSize: "0.8rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
                    >
                      <i className="fas fa-play" /> Continuer
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEnroll(course.id)}
                      disabled={enrolling === course.id}
                      style={{ padding: "6px 16px", borderRadius: "var(--radius-sm)", border: "none", background: "var(--primary)", color: "#fff", cursor: enrolling === course.id ? "not-allowed" : "pointer", fontSize: "0.8rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6, opacity: enrolling === course.id ? 0.7 : 1 }}
                    >
                      <i className="fas fa-plus" /> {enrolling === course.id ? "Inscription..." : "S'inscrire"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-light)" }}>
          <i className="fas fa-book-open" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
          <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune formation</h3>
        </div>
      )}
    </>
  );
}
