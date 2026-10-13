"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { DEFAULT_QUIZ_PASSING_SCORE, scoreQuiz } from "@/lib/quiz-scoring";
import { parseQuizAttemptPayload } from "@/lib/quiz-payload";

interface Question {
  id: string;
  question: string;
  question_type: "single_choice" | "multiple_choice" | "true_false";
  options: string[];
  correct_answer: number[];
  explanation: string | null;
  position: number;
}

export default function QuizPlayer({
  lessonId,
  isPreview,
  onComplete,
}: {
  lessonId: string;
  isPreview: boolean;
  onComplete?: (passed: boolean, score: number) => void;
}) {
  const [quizId, setQuizId] = useState<string | null>(null);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [passingScore, setPassingScore] = useState(DEFAULT_QUIZ_PASSING_SCORE);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [loading, setLoading] = useState(true);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const supabase = createClient();

  const payload = useCallback(
    () => ({ answers, currentIndex }),
    [answers, currentIndex]
  );

  const load = useCallback(async () => {
    const { data: quiz } = await supabase
      .from("quizzes")
      .select("*")
      .eq("lesson_id", lessonId)
      .single();
    if (!quiz) { setLoading(false); return; }
    setQuizId(quiz.id);
    setPassingScore(quiz.passing_score ?? DEFAULT_QUIZ_PASSING_SCORE);

    const { data: qs } = await supabase
      .from("quiz_questions")
      .select("*")
      .eq("quiz_id", quiz.id)
      .order("position");
    if (qs) {
      setQuestions(
        qs.map((q) => ({
          ...q,
          options: Array.isArray(q.options) ? q.options as string[] : [],
          correct_answer: Array.isArray(q.correct_answer) ? q.correct_answer as number[] : [],
        }))
      );
    }

    if (!isPreview) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: attempts } = await supabase
          .from("quiz_attempts")
          .select("*")
          .eq("quiz_id", quiz.id)
          .eq("user_id", user.id)
          .order("started_at", { ascending: false })
          .limit(5);
        const inProgress = attempts?.find((a) => !a.completed_at);
        const latestDone = attempts?.find((a) => a.completed_at);
        if (inProgress) {
          const parsed = parseQuizAttemptPayload(inProgress.answers);
          setAttemptId(inProgress.id);
          setAnswers(parsed.answers);
          setCurrentIndex(Math.min(parsed.currentIndex, Math.max((qs?.length || 1) - 1, 0)));
        } else if (latestDone) {
          const parsed = parseQuizAttemptPayload(latestDone.answers);
          setAnswers(parsed.answers);
          setScore(Number(latestDone.score) || 0);
          setPassed(Boolean(latestDone.passed));
          setSubmitted(true);
        } else {
          const { data: progressRow } = await supabase
            .from("lesson_progress")
            .select("metadata")
            .eq("user_id", user.id)
            .eq("lesson_id", lessonId)
            .maybeSingle();
          const draft = (progressRow?.metadata as { quiz_draft?: unknown } | null)?.quiz_draft;
          if (draft) {
            const parsed = parseQuizAttemptPayload(draft);
            setAnswers(parsed.answers);
            setCurrentIndex(parsed.currentIndex);
          }
        }
      }
    }
    setLoading(false);
  }, [lessonId, supabase, isPreview]);

  useEffect(() => { load(); }, [load]);

  const persistDraft = useCallback(async (nextAnswers: Record<string, number[]>, nextIndex: number) => {
    if (isPreview || !quizId) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const body = {
      quiz_id: quizId,
      user_id: user.id,
      score: 0,
      passed: false,
      answers: { answers: nextAnswers, currentIndex: nextIndex },
      completed_at: null,
    };
    if (attemptId) {
      const { error } = await supabase.from("quiz_attempts").update({
        answers: body.answers,
      }).eq("id", attemptId);
      if (!error) return;
      await supabase.from("lesson_progress").upsert({
        user_id: user.id,
        lesson_id: lessonId,
        started_at: new Date().toISOString(),
        metadata: { quiz_draft: body.answers },
      }, { onConflict: "user_id,lesson_id" });
      return;
    }
    const { data, error } = await supabase.from("quiz_attempts").insert(body).select("id").single();
    if (!error && data) setAttemptId(data.id);
    else {
      await supabase.from("lesson_progress").upsert({
        user_id: user.id,
        lesson_id: lessonId,
        started_at: new Date().toISOString(),
        metadata: { quiz_draft: body.answers },
      }, { onConflict: "user_id,lesson_id" });
    }
  }, [attemptId, isPreview, lessonId, quizId, supabase]);

  const scheduleSave = (nextAnswers: Record<string, number[]>, nextIndex: number) => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      void persistDraft(nextAnswers, nextIndex);
    }, 400);
  };

  const toggleAnswer = (questionId: string, optionIdx: number, type: string) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const next = {
        ...prev,
        [questionId]: type === "multiple_choice"
          ? current.includes(optionIdx)
            ? current.filter((i) => i !== optionIdx)
            : [...current, optionIdx]
          : [optionIdx],
      };
      scheduleSave(next, currentIndex);
      return next;
    });
  };

  const goTo = (nextIndex: number) => {
    setCurrentIndex(nextIndex);
    scheduleSave(answers, nextIndex);
  };

  const handleSubmit = async () => {
    const result = scoreQuiz(questions, answers, passingScore);
    setScore(result.percent);
    setPassed(result.passed);
    setSubmitted(true);

    if (!isPreview && quizId) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const row = {
          quiz_id: quizId,
          user_id: user.id,
          score: result.percent,
          passed: result.passed,
          answers: payload(),
          completed_at: new Date().toISOString(),
        };
        if (attemptId) {
          await supabase.from("quiz_attempts").update(row).eq("id", attemptId);
        } else {
          await supabase.from("quiz_attempts").insert(row);
        }
      }
    }

    if (onComplete) onComplete(result.passed, result.percent);
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setPassed(false);
    setCurrentIndex(0);
    setAttemptId(null);
  };

  if (loading) return <div style={{ padding: 40, textAlign: "center" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  if (!quizId || questions.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
        <i className="fas fa-question-circle" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 12, display: "block" }} />
        <p>Aucun quiz disponible pour cette leçon.</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: 16 }}>
          {passed ? <i className="fas fa-trophy" style={{ color: "var(--success)" }} /> : <i className="fas fa-times-circle" style={{ color: "var(--danger)" }} />}
        </div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>
          {passed ? "Félicitations !" : "Dommage..."}
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>
          Score: <strong>{score}%</strong>
        </p>
        <p style={{ color: "var(--text-light)", marginBottom: 24 }}>
          {passed
            ? "Vous avez réussi ce quiz."
            : `Score requis: ${passingScore}%. Réessayez !`}
        </p>

        <div style={{ textAlign: "left", marginBottom: 24 }}>
          {questions.map((q, qi) => {
            const userAnswer = [...(answers[q.id] || [])].sort((a, b) => a - b);
            const correctAnswer = [...q.correct_answer].sort((a, b) => a - b);
            const isCorrect = userAnswer.length === correctAnswer.length && userAnswer.every((v, i) => v === correctAnswer[i]);
            return (
              <div key={q.id} style={{ padding: 16, marginBottom: 8, borderRadius: 8, border: `2px solid ${isCorrect ? "var(--success)" : "var(--danger)"}`, background: isCorrect ? "#ecfdf5" : "#fef2f2" }}>
                <p style={{ fontWeight: 600, marginBottom: 8 }}>Q{qi + 1}. {q.question}</p>
                {q.options.map((opt, oi) => (
                  <div key={oi} style={{ display: "flex", alignItems: "center", gap: 8, padding: "2px 0", fontSize: "0.9rem" }}>
                    <span>{q.correct_answer.includes(oi) ? <i className="fas fa-check" style={{ color: "var(--success)" }} /> : userAnswer.includes(oi) ? <i className="fas fa-times" style={{ color: "var(--danger)" }} /> : <span style={{ width: 14, display: "inline-block" }} />}</span>
                    <span style={{ fontWeight: userAnswer.includes(oi) ? 600 : 400 }}>{opt}</span>
                  </div>
                ))}
                {q.explanation && <p style={{ marginTop: 8, fontSize: "0.85rem", color: "var(--text-light)", fontStyle: "italic" }}><i className="fas fa-lightbulb" style={{ marginRight: 4, color: "var(--warning)" }} />{q.explanation}</p>}
              </div>
            );
          })}
        </div>

        {!passed && (
          <button onClick={retry}
            style={{ padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <i className="fas fa-redo" /> Réessayer
          </button>
        )}
      </div>
    );
  }

  const q = questions[currentIndex];
  const allAnswered = questions.every((question) => (answers[question.id] || []).length > 0);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            Question {currentIndex + 1} sur {questions.length}
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
            Score requis: {passingScore}%
          </span>
        </div>
        <div style={{ height: 8, background: "var(--border)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{
            width: `${((currentIndex + 1) / questions.length) * 100}%`,
            height: "100%",
            background: "var(--primary)",
            transition: "width 0.2s",
          }} />
        </div>
      </div>

      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 16 }}>
        <p style={{ fontWeight: 600, marginBottom: 16, fontSize: "0.95rem" }}>
          <span style={{ color: "var(--primary)", marginRight: 8 }}>Q{currentIndex + 1}.</span>
          {q.question}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {q.options.map((opt, oi) => {
            const selected = (answers[q.id] || []).includes(oi);
            return (
              <div
                key={oi}
                onClick={() => toggleAnswer(q.id, oi, q.question_type)}
                style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                  borderRadius: 8, border: `2px solid ${selected ? "var(--primary)" : "var(--border)"}`,
                  background: selected ? "rgba(79,70,229,0.05)" : "transparent",
                  cursor: "pointer", transition: "all 0.15s",
                }}
              >
                <div style={{
                  width: 20, height: 20,
                  borderRadius: q.question_type === "multiple_choice" ? 4 : "50%",
                  border: `2px solid ${selected ? "var(--primary)" : "var(--border)"}`,
                  background: selected ? "var(--primary)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {selected && <i className="fas fa-check" style={{ color: "#fff", fontSize: "0.6rem" }} />}
                </div>
                <span style={{ fontSize: "0.9rem" }}>{opt}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="player-nav">
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          style={{
            padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--bg)",
            color: "var(--text)", border: "1px solid var(--border)",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            fontSize: "0.9rem", fontFamily: "inherit", opacity: currentIndex === 0 ? 0.5 : 1,
          }}
        >
          <i className="fas fa-chevron-left" /> Précédent
        </button>
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => goTo(currentIndex + 1)}
            style={{
              padding: "10px 20px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
              color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontFamily: "inherit",
            }}
          >
            Suivant <i className="fas fa-chevron-right" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            style={{
              padding: "12px 32px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
              color: "#fff", border: "none",
              cursor: allAnswered ? "pointer" : "not-allowed",
              fontSize: "0.95rem", fontWeight: 600, fontFamily: "inherit",
              opacity: allAnswered ? 1 : 0.5,
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            <i className="fas fa-paper-plane" /> Valider mes réponses
          </button>
        )}
      </div>
    </div>
  );
}
