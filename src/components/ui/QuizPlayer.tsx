"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

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
  const [passingScore, setPassingScore] = useState(70);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data: quiz } = await supabase
      .from("quizzes")
      .select("*")
      .eq("lesson_id", lessonId)
      .single();
    if (!quiz) { setLoading(false); return; }
    setQuizId(quiz.id);
    setPassingScore(quiz.passing_score);

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
    setLoading(false);
  }, [lessonId, supabase]);

  useEffect(() => { load(); }, [load]);

  const toggleAnswer = (questionId: string, optionIdx: number, type: string) => {
    setAnswers((prev) => {
      const current = prev[questionId] || [];
      if (type === "multiple_choice") {
        return {
          ...prev,
          [questionId]: current.includes(optionIdx)
            ? current.filter((i) => i !== optionIdx)
            : [...current, optionIdx],
        };
      }
      return { ...prev, [questionId]: [optionIdx] };
    });
  };

  const handleSubmit = async () => {
    let correct = 0;
    questions.forEach((q) => {
      const userAnswer = (answers[q.id] || []).sort();
      const correctAnswer = q.correct_answer.sort();
      if (
        userAnswer.length === correctAnswer.length &&
        userAnswer.every((v, i) => v === correctAnswer[i])
      ) {
        correct++;
      }
    });

    const pct = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    const didPass = pct >= passingScore;
    setScore(pct);
    setPassed(didPass);
    setSubmitted(true);

    if (!isPreview && quizId) {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("quiz_attempts").insert({
          quiz_id: quizId,
          user_id: user.id,
          score: pct,
          passed: didPass,
          answers: JSON.stringify(answers),
          completed_at: new Date().toISOString(),
        });
      }
    }

    if (onComplete) onComplete(didPass, pct);
  };

  const retry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setPassed(false);
  };

  if (loading) return <div style={{ padding: 40, textAlign: "center" }}><div className="spinner" style={{ margin: "0 auto" }} /></div>;

  if (!quizId || questions.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "var(--text-light)" }}>
        <i className="fas fa-question-circle" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 12, display: "block" }} />
        <p>Aucun quiz disponible pour cette lecon.</p>
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
          {passed ? "Felicitations !" : "Dommage..."}
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: 8 }}>
          Score: <strong>{score}%</strong>
        </p>
        <p style={{ color: "var(--text-light)", marginBottom: 24 }}>
          {passed
            ? "Vous avez reussi ce quiz."
            : `Score requis: ${passingScore}%. Reessayez !`}
        </p>

        {/* Show corrections */}
        <div style={{ textAlign: "left", marginBottom: 24 }}>
          {questions.map((q, qi) => {
            const userAnswer = (answers[q.id] || []).sort();
            const correctAnswer = q.correct_answer.sort();
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
            <i className="fas fa-redo" /> Reessayer
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
          {questions.length} questions — Score requis: {passingScore}%
        </span>
      </div>

      {questions.map((q, qi) => (
        <div key={q.id} style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 24, boxShadow: "var(--shadow)", marginBottom: 16 }}>
          <p style={{ fontWeight: 600, marginBottom: 16, fontSize: "0.95rem" }}>
            <span style={{ color: "var(--primary)", marginRight: 8 }}>Q{qi + 1}.</span>
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
      ))}

      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length < questions.length}
        style={{
          padding: "12px 32px", borderRadius: "var(--radius-sm)", background: "var(--primary)",
          color: "#fff", border: "none",
          cursor: Object.keys(answers).length < questions.length ? "not-allowed" : "pointer",
          fontSize: "0.95rem", fontWeight: 600, fontFamily: "inherit",
          opacity: Object.keys(answers).length < questions.length ? 0.5 : 1,
          display: "inline-flex", alignItems: "center", gap: 8,
        }}
      >
        <i className="fas fa-paper-plane" /> Valider mes reponses
      </button>
    </div>
  );
}
