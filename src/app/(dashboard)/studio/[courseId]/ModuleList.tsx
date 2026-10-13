"use client";

import { useState } from "react";
import type { Module, Lesson, LessonType } from "@/types/database";

type ModuleWithLessons = Module & { lessons: (Lesson & { content_blocks: { id: string }[] })[] };

export default function ModuleList({
  modules,
  onAddModule,
  onRenameModule,
  onDeleteModule,
  onMoveModule,
  onAddLesson,
  onDeleteLesson,
  onMoveLesson,
  onSelectLesson,
}: {
  modules: ModuleWithLessons[];
  onAddModule: () => void;
  onRenameModule: (id: string, title: string) => void;
  onDeleteModule: (id: string) => void;
  onMoveModule: (id: string, dir: "up" | "down") => void;
  onAddLesson: (moduleId: string, lessonType?: LessonType) => void;
  onDeleteLesson: (id: string) => void;
  onMoveLesson: (id: string, moduleId: string, dir: "up" | "down") => void;
  onSelectLesson: (id: string) => void;
}) {
  const [editingModule, setEditingModule] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const lessonTypeIcon: Record<string, string> = {
    lesson: "fa-file-alt",
    quiz: "fa-question-circle",
    sql_exercise: "fa-database",
  };

  return (
    <div>
      {modules.map((mod, mi) => (
        <div
          key={mod.id}
          style={{
            background: "var(--bg-card)",
            borderRadius: "var(--radius)",
            boxShadow: "var(--shadow)",
            marginBottom: 16,
            overflow: "hidden",
          }}
        >
          {/* Module Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 20px",
              borderBottom: "1px solid var(--border)",
              background: "var(--bg)",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--text-lighter)", fontSize: "0.85rem" }}>
              Module {mi + 1}
            </span>
            {editingModule === mod.id ? (
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onBlur={() => { onRenameModule(mod.id, editTitle); setEditingModule(null); }}
                onKeyDown={(e) => { if (e.key === "Enter") { onRenameModule(mod.id, editTitle); setEditingModule(null); } }}
                autoFocus
                style={{
                  flex: 1, border: "1px solid var(--primary)", borderRadius: 6,
                  padding: "4px 8px", fontSize: "0.95rem", fontWeight: 600, fontFamily: "inherit",
                }}
              />
            ) : (
              <span
                style={{ flex: 1, fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}
                onDoubleClick={() => { setEditingModule(mod.id); setEditTitle(mod.title); }}
              >
                {mod.title}
              </span>
            )}
            <div style={{ display: "flex", gap: 4 }}>
              <button onClick={() => { setEditingModule(mod.id); setEditTitle(mod.title); }} title="Renommer" style={iconBtnStyle}>
                <i className="fas fa-pen" />
              </button>
              <button onClick={() => onMoveModule(mod.id, "up")} disabled={mi === 0} title="Monter" style={iconBtnStyle}>
                <i className="fas fa-chevron-up" />
              </button>
              <button onClick={() => onMoveModule(mod.id, "down")} disabled={mi === modules.length - 1} title="Descendre" style={iconBtnStyle}>
                <i className="fas fa-chevron-down" />
              </button>
              <button onClick={() => onDeleteModule(mod.id)} title="Supprimer" style={{ ...iconBtnStyle, color: "var(--danger)" }}>
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>

          {/* Lessons */}
          <div style={{ padding: "8px 20px 16px" }}>
            {mod.lessons.map((lesson, li) => (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 12px",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  transition: "background 0.15s",
                  marginBottom: 4,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <i className={`fas ${lessonTypeIcon[lesson.lesson_type] || "fa-file"}`} style={{ color: "var(--primary)", width: 20, textAlign: "center" }} />
                <span style={{ flex: 1, fontSize: "0.9rem" }}>{lesson.title}</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-lighter)" }}>
                  {lesson.content_blocks?.length || 0} blocs
                </span>
                <div style={{ display: "flex", gap: 4 }} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => onMoveLesson(lesson.id, mod.id, "up")} disabled={li === 0} style={smallIconBtnStyle}>
                    <i className="fas fa-chevron-up" />
                  </button>
                  <button onClick={() => onMoveLesson(lesson.id, mod.id, "down")} disabled={li === mod.lessons.length - 1} style={smallIconBtnStyle}>
                    <i className="fas fa-chevron-down" />
                  </button>
                  <button onClick={() => onDeleteLesson(lesson.id)} style={{ ...smallIconBtnStyle, color: "var(--danger)" }}>
                    <i className="fas fa-trash" />
                  </button>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              {([
                { type: "lesson" as const, label: "Ajouter une leçon", icon: "fa-file-alt" },
                { type: "quiz" as const, label: "Quiz", icon: "fa-question-circle" },
                { type: "sql_exercise" as const, label: "Exercice SQL", icon: "fa-database" },
              ]).map((item) => (
                <button
                  key={item.type}
                  onClick={() => onAddLesson(mod.id, item.type)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 12px",
                    border: "2px dashed var(--border)",
                    borderRadius: "var(--radius-sm)",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    color: "var(--text-light)",
                    fontFamily: "inherit",
                    flex: item.type === "lesson" ? 1 : undefined,
                  }}
                >
                  <i className={`fas ${item.icon}`} /> {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={onAddModule}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: 16,
          border: "2px dashed var(--border)",
          borderRadius: "var(--radius-sm)",
          background: "transparent",
          cursor: "pointer",
          fontSize: "0.9rem",
          color: "var(--text-light)",
          fontFamily: "inherit",
          width: "100%",
        }}
      >
        <i className="fas fa-plus" /> Ajouter un module
      </button>
    </div>
  );
}

const iconBtnStyle: React.CSSProperties = {
  width: 32, height: 32, borderRadius: 8, border: "1px solid var(--border)",
  background: "var(--bg-card)", cursor: "pointer", fontSize: "0.75rem",
  color: "var(--text-light)", display: "inline-flex", alignItems: "center", justifyContent: "center",
};

const smallIconBtnStyle: React.CSSProperties = {
  width: 26, height: 26, borderRadius: 6, border: "1px solid var(--border)",
  background: "var(--bg-card)", cursor: "pointer", fontSize: "0.7rem",
  color: "var(--text-light)", display: "inline-flex", alignItems: "center", justifyContent: "center",
};
