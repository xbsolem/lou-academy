"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import SqlExercise from "./SqlExercise";
import type { SqlExerciseData } from "@/lib/sql-exercise-data";
import { createSqlSandbox } from "@/lib/sql-sandbox";
import {
  PRACTICAL_MAX_SCORE,
  PRACTICAL_PASSING_SCORE,
  PRACTICAL_POINTS_PER_TASK,
} from "@/lib/completion";

interface TaskResult {
  passed: boolean;
  points: number;
  error?: string;
}

export default function SqlPracticalTest({
  lessonId,
  exercises,
  isPreview,
  onComplete,
}: {
  lessonId: string;
  exercises: SqlExerciseData[];
  isPreview: boolean;
  onComplete?: (passed: boolean, score: number, maxScore: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [queries, setQueries] = useState<string[]>(() =>
    exercises.map((ex) => ex.starterQuery || "")
  );
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<TaskResult[]>([]);
  const [score, setScore] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const supabase = createClient();
  const draftTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const maxScore = useMemo(
    () => exercises.reduce((sum, ex) => sum + (ex.points ?? PRACTICAL_POINTS_PER_TASK), 0) || PRACTICAL_MAX_SCORE,
    [exercises]
  );
  const passingScore = maxScore === PRACTICAL_MAX_SCORE ? PRACTICAL_PASSING_SCORE : Math.ceil(maxScore * 0.7);

  useEffect(() => {
    let cancelled = false;
    const restore = async () => {
      if (isPreview) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("lesson_progress")
        .select("metadata")
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId)
        .maybeSingle();
      if (cancelled || !data?.metadata) return;
      const practical = (data.metadata as { practical?: Record<string, unknown> }).practical;
      if (!practical) return;
      const savedQueries = practical.queries;
      if (Array.isArray(savedQueries)) {
        setQueries(exercises.map((ex, i) => String(savedQueries[i] ?? ex.starterQuery ?? "")));
      }
      if (typeof practical.currentIndex === "number") setIndex(practical.currentIndex);
      if (practical.submitted && Array.isArray(practical.results)) {
        setSubmitted(true);
        setResults(practical.results as TaskResult[]);
        setScore(Number(practical.score) || 0);
      }
    };
    restore();
    return () => { cancelled = true; };
  }, [exercises, isPreview, lessonId, supabase]);

  const persist = async (payload: Record<string, unknown>, eventType?: string) => {
    if (isPreview) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    if (eventType) {
      await supabase.from("activity_events").insert({
        user_id: user.id,
        lesson_id: lessonId,
        event_type: eventType,
        metadata: payload,
      });
    }
    await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      lesson_id: lessonId,
      started_at: new Date().toISOString(),
      metadata: { practical: payload },
    }, { onConflict: "user_id,lesson_id" });
  };

  const saveDraft = (nextQueries: string[], nextIndex: number) => {
    setQueries(nextQueries);
    setIndex(nextIndex);
    void persist({ queries: nextQueries, currentIndex: nextIndex, submitted: false });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    const taskResults: TaskResult[] = [];
    let total = 0;
    for (let i = 0; i < exercises.length; i++) {
      const points = exercises[i].points ?? PRACTICAL_POINTS_PER_TASK;
      try {
        const sandbox = await createSqlSandbox(exercises[i].setupSql || "");
        const checked = sandbox.verify(queries[i] || "", exercises[i]);
        if (checked.ok) {
          taskResults.push({ passed: true, points });
          total += points;
        } else {
          taskResults.push({ passed: false, points: 0, error: checked.error });
        }
      } catch {
        taskResults.push({ passed: false, points: 0, error: "Impossible d'évaluer cet exercice." });
      }
    }
    const passed = total >= passingScore;
    setResults(taskResults);
    setScore(total);
    setSubmitted(true);
    setSubmitting(false);
    await persist({
      queries,
      currentIndex: index,
      submitted: true,
      results: taskResults,
      score: total,
      maxScore,
      passed,
      submittedAt: new Date().toISOString(),
    }, passed ? "Épreuve SQL réussie" : "Épreuve SQL échouée");
    onComplete?.(passed, total, maxScore);
  };

  const retry = () => {
    setSubmitted(false);
    setResults([]);
    setScore(0);
    setIndex(0);
    const next = exercises.map((ex) => ex.starterQuery || "");
    saveDraft(next, 0);
  };

  if (exercises.length === 0) {
    return <p style={{ color: "var(--text-light)" }}>Aucun exercice SQL pour cette épreuve.</p>;
  }

  if (submitted) {
    const passed = score >= passingScore;
    return (
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: "3rem", marginBottom: 8 }}>
            {passed
              ? <i className="fas fa-trophy" style={{ color: "var(--success)" }} />
              : <i className="fas fa-times-circle" style={{ color: "var(--danger)" }} />}
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>
            {passed ? "Épreuve réussie" : "Épreuve non validée"}
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            Score : <strong>{score}/{maxScore}</strong>
          </p>
          <p style={{ color: "var(--text-light)", marginTop: 4 }}>
            Seuil de réussite : {passingScore}/{maxScore}
          </p>
        </div>
        {exercises.map((ex, i) => (
          <div key={i} style={{ marginBottom: 24, border: `2px solid ${results[i]?.passed ? "var(--success)" : "var(--danger)"}`, borderRadius: 12, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontWeight: 600 }}>
              <span>Exercice {i + 1}</span>
              <span>{results[i]?.passed ? `${results[i].points} pts` : "0 pt"}</span>
            </div>
            <SqlExercise
              lessonId={lessonId}
              exerciseData={ex}
              isPreview
              mode="exam"
              query={queries[i]}
              showCorrection
              examResult={results[i] ? { passed: results[i].passed } : null}
            />
          </div>
        ))}
        <button
          onClick={retry}
          style={{
            padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
            color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500,
            fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8,
          }}
        >
          <i className="fas fa-redo" /> Réessayer
        </button>
      </div>
    );
  }

  const current = exercises[index];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: "0.9rem" }}>
          <strong>Exercice {index + 1} sur {exercises.length}</strong>
          <span style={{ color: "var(--text-light)" }}>{maxScore} points — seuil {passingScore}</span>
        </div>
        <div style={{ height: 8, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ width: `${((index + 1) / exercises.length) * 100}%`, height: "100%", background: "var(--secondary)" }} />
        </div>
      </div>
      <SqlExercise
        lessonId={lessonId}
        exerciseData={current}
        isPreview={isPreview}
        mode="exam"
        query={queries[index]}
        onQueryChange={(q) => {
          const next = [...queries];
          next[index] = q;
          setQueries(next);
          if (draftTimer.current) clearTimeout(draftTimer.current);
          draftTimer.current = setTimeout(() => {
            void persist({ queries: next, currentIndex: index, submitted: false });
          }, 600);
        }}
      />
      <div className="player-nav" style={{ marginTop: 20 }}>
        <button
          onClick={() => saveDraft(queries, Math.max(0, index - 1))}
          disabled={index === 0}
          style={{
            padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
            color: "var(--text)", border: "1px solid var(--border)",
            cursor: index === 0 ? "not-allowed" : "pointer", fontFamily: "inherit",
            opacity: index === 0 ? 0.5 : 1,
          }}
        >
          <i className="fas fa-chevron-left" /> Précédent
        </button>
        {index < exercises.length - 1 ? (
          <button
            onClick={() => saveDraft(queries, index + 1)}
            style={{
              padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
              color: "#fff", border: "none", cursor: "pointer", fontFamily: "inherit",
            }}
          >
            Suivant <i className="fas fa-chevron-right" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting || queries.some((q) => !q.trim())}
            style={{
              padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--success)",
              color: "#fff", border: "none", cursor: submitting ? "not-allowed" : "pointer",
              fontFamily: "inherit", fontWeight: 600, opacity: queries.some((q) => !q.trim()) ? 0.5 : 1,
            }}
          >
            <i className="fas fa-paper-plane" /> {submitting ? "Évaluation..." : "Soumettre l'épreuve"}
          </button>
        )}
      </div>
    </div>
  );
}
