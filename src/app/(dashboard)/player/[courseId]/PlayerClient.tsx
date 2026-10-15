"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Course, Module, Lesson, ContentBlock } from "@/types/database";
import QuizPlayer from "@/components/ui/QuizPlayer";
import SqlExercise from "@/components/ui/SqlExercise";
import SqlPracticalTest from "@/components/ui/SqlPracticalTest";
import AiTutor from "@/components/ui/AiTutor";
import { parseSqlExerciseData } from "@/lib/sql-exercise-data";
import { canIssueCertificate, computeProgressPercent, isPracticalLesson } from "@/lib/completion";

type LessonFull = Lesson & { content_blocks: ContentBlock[] };
type ModuleFull = Module & { lessons: LessonFull[] };

function sqlBlocksOf(lesson: LessonFull) {
  return (lesson.content_blocks || []).filter((block) => block.block_type === "sql_exercise");
}

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
  const [activeBlocks, setActiveBlocks] = useState<ContentBlock[]>([]);
  const [blocksLoading, setBlocksLoading] = useState(Boolean(modules[0]?.lessons?.[0]));
  const [completing, setCompleting] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sqlSuccess, setSqlSuccess] = useState<Record<string, boolean>>({});
  const blockCache = useRef<Record<string, ContentBlock[]>>({});
  const supabase = createClient();

  const allLessons = useMemo(() => modules.flatMap((m) => m.lessons), [modules]);

  const activeLessonId = activeLesson?.id;

  useEffect(() => {
    if (!activeLessonId) {
      setActiveBlocks([]);
      setBlocksLoading(false);
      return;
    }
    const cached = blockCache.current[activeLessonId];
    if (cached) {
      setActiveBlocks(cached);
      setBlocksLoading(false);
      return;
    }
    let cancelled = false;
    setBlocksLoading(true);
    setActiveBlocks([]);
    (async () => {
      const { data } = await supabase
        .from("content_blocks")
        .select("*")
        .eq("lesson_id", activeLessonId)
        .order("position");
      if (cancelled) return;
      const blocks = data || [];
      blockCache.current[activeLessonId] = blocks;
      setActiveBlocks(blocks);
      setBlocksLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [activeLessonId]);

  const lessonWithBlocks: LessonFull | null = activeLesson
    ? { ...activeLesson, content_blocks: activeBlocks }
    : null;

  const markComplete = useCallback(async (options?: { advance?: boolean; lesson?: LessonFull }) => {
    const lesson = options?.lesson || activeLesson;
    if (!lesson || isPreview) return;
    setCompleting(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setCompleting(false);
      return;
    }

    await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      lesson_id: lesson.id,
      status: "completed",
      progress_percent: 100,
      completed_at: new Date().toISOString(),
    }, { onConflict: "user_id,lesson_id" });

    const nextProgress = { ...progress, [lesson.id]: "completed" };
    setProgress(nextProgress);

    const pct = computeProgressPercent(allLessons, nextProgress);
    const issueCert = canIssueCertificate(allLessons, nextProgress);

    await supabase.from("enrollments").upsert({
      user_id: user.id,
      course_id: course.id,
      status: issueCert ? "completed" : "in_progress",
      progress_percent: pct,
      started_at: new Date().toISOString(),
      last_activity_at: new Date().toISOString(),
      ...(issueCert ? { completed_at: new Date().toISOString() } : {}),
    }, { onConflict: "user_id,course_id" });

    if (issueCert) {
      const { data: existingCert } = await supabase
        .from("certificates")
        .select("id")
        .eq("user_id", user.id)
        .eq("course_id", course.id)
        .maybeSingle();
      if (!existingCert) {
        const certNumber = `LOU-${course.id.substring(0, 8).toUpperCase()}-${user.id.substring(0, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
        await supabase.from("certificates").insert({
          user_id: user.id,
          course_id: course.id,
          certificate_number: certNumber,
          metadata: {
            duration_minutes: course.estimated_duration_minutes,
            course_title: course.title,
          },
        });
        await supabase.from("activity_events").insert({
          user_id: user.id,
          course_id: course.id,
          event_type: "Certificat obtenu",
        });
      }
    }

    if (options?.advance !== false) {
      const currentIdx = allLessons.findIndex((l) => l.id === lesson.id);
      if (currentIdx < allLessons.length - 1) {
        setActiveLesson(allLessons[currentIdx + 1]);
      }
    }

    setCompleting(false);
  }, [activeLesson, isPreview, supabase, allLessons, progress, course.id, course.estimated_duration_minutes, course.title]);

  const goToLesson = (lesson: LessonFull) => {
    setActiveLesson(lesson);
    setSidebarOpen(false);
  };

  const currentIdx = activeLesson ? allLessons.findIndex((l) => l.id === activeLesson.id) : -1;
  const sqlBlocks = lessonWithBlocks ? sqlBlocksOf(lessonWithBlocks) : [];
  const practical = lessonWithBlocks ? isPracticalLesson(lessonWithBlocks) : false;
  const parsedExercises = sqlBlocks
    .map((block) => ({ block, data: parseSqlExerciseData(block.content) }))
    .filter((item): item is { block: ContentBlock; data: NonNullable<ReturnType<typeof parseSqlExerciseData>> } => Boolean(item.data));
  const displayBlocks = activeBlocks.filter(
    (block) => block.block_type !== "sql_exercise" && block.block_type !== "quiz"
  );
  const isQuiz = activeLesson?.lesson_type === "quiz";
  const isSqlLesson = Boolean(activeLesson && (activeLesson.lesson_type === "sql_exercise" || sqlBlocks.length > 0));
  const lessonComplete = activeLesson ? progress[activeLesson.id] === "completed" : false;
  const showFinish =
    !isPreview &&
    !blocksLoading &&
    activeLesson &&
    !lessonComplete &&
    !isQuiz &&
    !practical &&
    !(activeLesson.lesson_type === "sql_exercise");
  const showGatedSqlFinish =
    !isPreview &&
    !blocksLoading &&
    activeLesson &&
    !lessonComplete &&
    activeLesson.lesson_type === "sql_exercise" &&
    !practical;

  return (
    <div className="player-layout">
      <button
        className="player-sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className={`fas ${sidebarOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
        {sidebarOpen ? "Masquer le sommaire" : "Afficher le sommaire"}
      </button>

      <div className={`player-sidebar${!sidebarOpen ? " collapsed" : ""}`}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 16, padding: "0 8px" }}>{course.title}</h3>
        {isPreview && (
          <div style={{ padding: "6px 12px", background: "#fffbeb", color: "#d97706", borderRadius: 8, fontSize: "0.75rem", fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            MODE APERÇU
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

      <div className="player-content">
        {activeLesson ? (
          <div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 24 }}>{activeLesson.title}</h2>

            {blocksLoading && (
              <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", marginBottom: 24, textAlign: "center", color: "var(--text-light)" }}>
                Chargement de la leçon…
              </div>
            )}

            {!blocksLoading && displayBlocks.length > 0 && (
              <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", marginBottom: 24 }}>
                {displayBlocks.map((block) => (
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
                    {block.block_type === "video" && block.content && (
                      <video src={block.content} controls style={{ maxWidth: "100%", borderRadius: 8 }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {!blocksLoading && isQuiz && (
              <div style={{ marginBottom: 24 }}>
                <QuizPlayer
                  lessonId={activeLesson.id}
                  isPreview={isPreview}
                  onComplete={async (passed) => {
                    if (passed && !isPreview) {
                      await markComplete({ advance: false, lesson: activeLesson });
                    }
                  }}
                />
              </div>
            )}

            {!blocksLoading && !isQuiz && practical && parsedExercises.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <SqlPracticalTest
                  lessonId={activeLesson.id}
                  exercises={parsedExercises.map((item) => item.data)}
                  isPreview={isPreview}
                  onComplete={async (passed) => {
                    if (passed && !isPreview) {
                      await markComplete({ advance: false, lesson: activeLesson });
                    }
                  }}
                />
              </div>
            )}

            {!blocksLoading && !isQuiz && !practical && parsedExercises.map((item) => (
              <div key={item.block.id} style={{ marginBottom: 24 }}>
                <SqlExercise
                  lessonId={activeLesson.id}
                  exerciseData={item.data}
                  isPreview={isPreview}
                  onSuccess={() => {
                    setSqlSuccess((prev) => ({ ...prev, [activeLesson.id]: true }));
                    if (!isPreview) {
                      void markComplete({ advance: false, lesson: activeLesson });
                    }
                  }}
                />
              </div>
            ))}

            {!blocksLoading && !isQuiz && !isSqlLesson && displayBlocks.length === 0 && (
              <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", marginBottom: 24 }}>
                <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
                  <i className="fas fa-file-alt" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 12, display: "block" }} />
                  <p>Aucun contenu pour cette leçon.</p>
                </div>
              </div>
            )}

            <div className="player-nav">
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
                <i className="fas fa-chevron-left" /> Précédent
              </button>

              {showFinish && (
                <button
                  onClick={() => markComplete({ advance: true })}
                  disabled={completing}
                  style={{
                    padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--success)",
                    color: "#fff", border: "none", cursor: completing ? "not-allowed" : "pointer",
                    fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit",
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}
                >
                  <i className="fas fa-check" /> Terminer la leçon
                </button>
              )}

              {showGatedSqlFinish && (
                <button
                  onClick={() => markComplete({ advance: true })}
                  disabled={completing || !sqlSuccess[activeLesson.id]}
                  title={sqlSuccess[activeLesson.id] ? "Terminer la leçon" : "Validez l'exercice pour terminer"}
                  style={{
                    padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--success)",
                    color: "#fff", border: "none",
                    cursor: completing || !sqlSuccess[activeLesson.id] ? "not-allowed" : "pointer",
                    fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit",
                    display: "inline-flex", alignItems: "center", gap: 8,
                    opacity: sqlSuccess[activeLesson.id] ? 1 : 0.5,
                  }}
                >
                  <i className="fas fa-check" /> Terminer la leçon
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
            <h3 style={{ marginBottom: 8, color: "var(--text)" }}>Aucune leçon</h3>
            <p>Cette formation n&apos;a pas encore de contenu.</p>
          </div>
        )}
      </div>

      {!isPreview && (
        <AiTutor
          courseTitle={course.title}
          lessonTitle={activeLesson?.title || ""}
          lessonContent={activeBlocks.map((b) => b.content).join("\n") || ""}
        />
      )}
    </div>
  );
}
