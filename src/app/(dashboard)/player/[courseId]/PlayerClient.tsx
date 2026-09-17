"use client";

import { useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Course, Module, Lesson, ContentBlock } from "@/types/database";

type LessonFull = Lesson & { content_blocks: ContentBlock[] };
type ModuleFull = Module & { lessons: LessonFull[] };

export default function PlayerClient({
  course,
  modules,
  lessonProgress: initialProgress,
  isPreview,
}: {
  course: Course;
  modules: ModuleFull[];
  lessonProgress: Record<string, string>;
  isPreview: boolean;
}) {
  const [progress, setProgress] = useState(initialProgress);
  const [activeLesson, setActiveLesson] = useState<LessonFull | null>(
    modules[0]?.lessons?.[0] || null
  );
  const [completing, setCompleting] = useState(false);
  const supabase = createClient();

  const allLessons = modules.flatMap((m) => m.lessons);

  const markComplete = useCallback(async () => {
    if (!activeLesson || isPreview) return;
    setCompleting(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      lesson_id: activeLesson.id,
      status: "completed",
      progress_percent: 100,
      completed_at: new Date().toISOString(),
    }, { onConflict: "user_id,lesson_id" });

    setProgress((prev) => ({ ...prev, [activeLesson.id]: "completed" }));

    const totalLessons = allLessons.length;
    const completedCount = Object.values({ ...progress, [activeLesson.id]: "completed" })
      .filter((s) => s === "completed").length;
    const pct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    await supabase.from("enrollments").upsert({
      user_id: user.id,
      course_id: course.id,
      status: pct >= 100 ? "completed" : "in_progress",
      progress_percent: pct,
      started_at: new Date().toISOString(),
      last_activity_at: new Date().toISOString(),
      ...(pct >= 100 ? { completed_at: new Date().toISOString() } : {}),
    }, { onConflict: "user_id,course_id" });

    const currentIdx = allLessons.findIndex((l) => l.id === activeLesson.id);
    if (currentIdx < allLessons.length - 1) {
      setActiveLesson(allLessons[currentIdx + 1]);
    }

    setCompleting(false);
  }, [activeLesson, isPreview, supabase, allLessons, progress, course.id]);

  const goToLesson = (lesson: LessonFull) => {
    setActiveLesson(lesson);
  };

  const currentIdx = activeLesson ? allLessons.findIndex((l) => l.id === activeLesson.id) : -1;

  return (
    <div style={{ display: "flex", gap: 24, minHeight: "calc(100vh - 160px)" }}>
      {/* Sidebar */}
      <div style={{ width: 280, flexShrink: 0, background: "var(--bg-card)", borderRadius: "var(--radius)", boxShadow: "var(--shadow)", padding: 16, overflowY: "auto", maxHeight: "calc(100vh - 160px)" }}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 16, padding: "0 8px" }}>{course.title}</h3>
        {isPreview && (
          <div style={{ padding: "6px 12px", background: "#fffbeb", color: "#d97706", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            MODE APERCU
          </div>
        )}
        {modules.map((mod) => (
          <div key={mod.id} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-lighter)", textTransform: "uppercase", padding: "0 8px", marginBottom: 8 }}>
              {mod.title}
            </div>
            {mod.lessons.map((lesson) => {
              const status = progress[lesson.id];
              const isActive = activeLesson?.id === lesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => goToLesson(lesson)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "8px 12px",
                    borderRadius: 8, cursor: "pointer", marginBottom: 2, fontSize: "0.85rem",
                    background: isActive ? "rgba(79,70,229,0.1)" : "transparent",
                    color: isActive ? "var(--primary)" : "var(--text)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {status === "completed" ? (
                    <i className="fas fa-check-circle" style={{ color: "var(--success)", width: 16 }} />
                  ) : isActive ? (
                    <i className="fas fa-play-circle" style={{ color: "var(--primary)", width: 16 }} />
                  ) : (
                    <i className="far fa-circle" style={{ color: "var(--text-lighter)", width: 16 }} />
                  )}
                  <span style={{ flex: 1 }}>{lesson.title}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        {activeLesson ? (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>{activeLesson.title}</h2>
            <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", marginBottom: 24 }}>
              {activeLesson.content_blocks && activeLesson.content_blocks.length > 0 ? (
                activeLesson.content_blocks.map((block) => (
                  <div key={block.id} style={{ marginBottom: 20 }}>
                    {block.block_type === "heading" && (
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 8 }}>{block.content}</h3>
                    )}
                    {block.block_type === "text" && (
                      <p style={{ lineHeight: 1.8, color: "var(--text)", whiteSpace: "pre-wrap" }}>{block.content}</p>
                    )}
                    {block.block_type === "callout" && (
                      <div style={{ padding: "16px 20px", background: "#eff6ff", borderLeft: "4px solid var(--primary)", borderRadius: 8, lineHeight: 1.6 }}>
                        <i className="fas fa-lightbulb" style={{ color: "var(--primary)", marginRight: 8 }} />
                        {block.content}
                      </div>
                    )}
                    {block.block_type === "code" && (
                      <pre style={{ padding: 16, background: "#1e293b", color: "#e2e8f0", borderRadius: 8, overflow: "auto", fontSize: "0.85rem", lineHeight: 1.6 }}>
                        <code>{block.content}</code>
                      </pre>
                    )}
                    {block.block_type === "image" && block.content && (
                      <img src={block.content} alt="" style={{ maxWidth: "100%", borderRadius: 8 }} />
                    )}
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
                  <i className="fas fa-file-alt" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 12, display: "block" }} />
                  <p>Aucun contenu pour cette lecon.</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={() => currentIdx > 0 && setActiveLesson(allLessons[currentIdx - 1])}
                disabled={currentIdx <= 0}
                style={{
                  padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
                  color: "var(--text)", border: "1px solid var(--border)", cursor: currentIdx <= 0 ? "not-allowed" : "pointer",
                  fontSize: "0.9rem", fontFamily: "inherit", opacity: currentIdx <= 0 ? 0.5 : 1,
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}
              >
                <i className="fas fa-chevron-left" /> Precedent
              </button>

              {!isPreview && progress[activeLesson.id] !== "completed" && (
                <button
                  onClick={markComplete}
                  disabled={completing}
                  style={{
                    padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--success)",
                    color: "#fff", border: "none", cursor: completing ? "not-allowed" : "pointer",
                    fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit",
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}
                >
                  <i className="fas fa-check" /> Marquer comme termine
                </button>
              )}

              <button
                onClick={() => currentIdx < allLessons.length - 1 && setActiveLesson(allLessons[currentIdx + 1])}
                disabled={currentIdx >= allLessons.length - 1}
                style={{
                  padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
                  color: "#fff", border: "none", cursor: currentIdx >= allLessons.length - 1 ? "not-allowed" : "pointer",
                  fontSize: "0.9rem", fontFamily: "inherit", opacity: currentIdx >= allLessons.length - 1 ? 0.5 : 1,
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}
              >
                Suivant <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: 60, color: "var(--text-light)" }}>
            <i className="fas fa-book-open" style={{ fontSize: "4rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
            <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune lecon</h3>
            <p>Cette formation n&apos;a pas encore de contenu.</p>
          </div>
        )}
      </div>
    </div>
  );
}
