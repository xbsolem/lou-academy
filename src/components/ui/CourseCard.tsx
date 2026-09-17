"use client";

import { useRouter } from "next/navigation";
import type { Course } from "@/types/database";

export default function CourseCard({
  course,
  enrollCount,
  moduleCount,
  showStudioLink,
}: {
  course: Course;
  enrollCount?: number;
  moduleCount?: number;
  showStudioLink?: boolean;
}) {
  const router = useRouter();

  const badgeMap: Record<string, { label: string; bg: string }> = {
    draft: { label: "Brouillon", bg: "var(--text-lighter)" },
    published: { label: "Publié", bg: "var(--success)" },
    archived: { label: "Archivé", bg: "var(--danger)" },
  };

  const badge = badgeMap[course.status];
  const gradient = course.gradient || "linear-gradient(135deg, #4f46e5, #06b6d4)";
  const icon = course.icon || "fa-book";

  const durationLabel = course.estimated_duration_minutes
    ? `${Math.floor(course.estimated_duration_minutes / 60)}h${String(course.estimated_duration_minutes % 60).padStart(2, "0")}`
    : "";

  return (
    <div
      onClick={() =>
        router.push(showStudioLink ? `/studio/${course.id}` : `/player/${course.id}`)
      }
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        boxShadow: "var(--shadow)",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
      }}
    >
      <div
        style={{
          height: 160,
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <i
          className={`fas ${icon}`}
          style={{ fontSize: "3rem", color: "rgba(255,255,255,0.3)" }}
        />
        {badge && (
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              background: badge.bg,
              color: "#fff",
            }}
          >
            {badge.label}
          </span>
        )}
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 8 }}>
          {course.title}
        </h3>
        <p
          style={{
            color: "var(--text-light)",
            fontSize: "0.85rem",
            marginBottom: 12,
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.description || "Aucune description"}
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: "0.8rem",
            color: "var(--text-lighter)",
          }}
        >
          {durationLabel && (
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <i className="fas fa-clock" /> {durationLabel}
            </span>
          )}
          {moduleCount !== undefined && (
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <i className="fas fa-layer-group" /> {moduleCount} modules
            </span>
          )}
          {enrollCount !== undefined && (
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <i className="fas fa-users" /> {enrollCount}
            </span>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            padding: "4px 10px",
            borderRadius: 20,
            background: "#eff6ff",
            color: "var(--primary)",
            fontWeight: 500,
          }}
        >
          {course.category || "Non catégorisé"}
        </span>
        <span
          style={{
            padding: "6px 16px",
            borderRadius: "var(--radius-sm)",
            background: "var(--primary)",
            color: "#fff",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          {showStudioLink ? "Éditer" : "Voir"}
        </span>
      </div>
    </div>
  );
}
