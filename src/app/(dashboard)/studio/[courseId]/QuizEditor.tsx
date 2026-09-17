"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

interface Question {
  id: string;
  question: string;
  question_type: "single_choice" | "multiple_choice" | "true_false";
  options: string[];
  correct_answer: number[];
  explanation: string;
  position: number;
}

interface QuizData {
  id: string;
  title: string;
  passing_score: number;
  max_attempts: number | null;
}

export default function QuizEditor({ lessonId }: { lessonId: string }) {
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const load = useCallback(async () => {
    const { data: q } = await supabase
      .from("quizzes")
      .select("*")
      .eq("lesson_id", lessonId)
      .single();
    if (q) {
      setQuiz(q);
      const { data: qs } = await supabase
        .from("quiz_questions")
        .select("*")
        .eq("quiz_id", q.id)
        .order("position");
      if (qs) {
        setQuestions(
          qs.map((qq) => ({
            ...qq,
            options: Array.isArray(qq.options) ? qq.options as string[] : [],
            correct_answer: Array.isArray(qq.correct_answer) ? qq.correct_answer as number[] : [],
            explanation: qq.explanation || "",
          }))
        );
      }
    }
  }, [lessonId, supabase]);

  useEffect(() => { load(); }, [load]);

  const createQuiz = async () => {
    const { data } = await supabase
      .from("quizzes")
      .insert({ lesson_id: lessonId, title: "Quiz", passing_score: 70 })
      .select()
      .single();
    if (data) {
      setQuiz(data);
      await supabase.from("lessons").update({ lesson_type: "quiz" }).eq("id", lessonId);
    }
  };

  const addQuestion = async () => {
    if (!quiz) return;
    const pos = questions.length;
    const { data } = await supabase
      .from("quiz_questions")
      .insert({
        quiz_id: quiz.id,
        question: "Nouvelle question",
        question_type: "single_choice",
        options: JSON.stringify(["Option A", "Option B", "Option C", "Option D"]),
        correct_answer: JSON.stringify([0]),
        explanation: "",
        position: pos,
      })
      .select()
      .single();
    if (data) await load();
  };

  const updateQuestion = (id: string, field: string, value: unknown) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const saveQuestion = async (q: Question) => {
    setSaving(true);
    await supabase.from("quiz_questions").update({
      question: q.question,
      question_type: q.question_type,
      options: JSON.stringify(q.options),
      correct_answer: JSON.stringify(q.correct_answer),
      explanation: q.explanation,
    }).eq("id", q.id);
    setSaving(false);
  };

  const deleteQuestion = async (id: string) => {
    await supabase.from("quiz_questions").delete().eq("id", id);
    await load();
  };

  const savePassingScore = async (score: number) => {
    if (!quiz) return;
    await supabase.from("quizzes").update({ passing_score: score }).eq("id", quiz.id);
    setQuiz({ ...quiz, passing_score: score });
  };

  if (!quiz) {
    return (
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius)", padding: 32, boxShadow: "var(--shadow)", textAlign: "center" }}>
        <i className="fas fa-question-circle" style={{ fontSize: "3rem", color: "var(--border)", marginBottom: 16, display: "block" }} />
        <h3 style={{ marginBottom: 8 }}>Aucun quiz pour cette lecon</h3>
        <p style={{ color: "var(--text-light)", marginBottom: 20, fontSize: "0.9rem" }}>
          Creez un quiz pour evaluer les apprenants.
        </p>
        <button onClick={createQuiz}
          style={{ padding: "10px 24px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <i className="fas fa-plus" /> Creer un quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
          <i className="fas fa-question-circle" style={{ marginRight: 8, color: "var(--primary)" }} />
          Quiz — {questions.length} questions
        </h3>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <label style={{ fontSize: "0.8rem", fontWeight: 600 }}>Score requis:</label>
          <input
            type="number"
            value={quiz.passing_score}
            onChange={(e) => setQuiz({ ...quiz, passing_score: Number(e.target.value) })}
            onBlur={(e) => savePassingScore(Number(e.target.value))}
            min={0}
            max={100}
            style={{ width: 60, padding: "4px 8px", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.85rem", textAlign: "center", fontFamily: "inherit" }}
          />
          <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>%</span>
        </div>
        {saving && <span style={{ fontSize: "0.8rem", color: "var(--text-lighter)" }}>Sauvegarde...</span>}
      </div>

      {questions.map((q, qi) => (
        <div key={q.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: 20, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontWeight: 600, color: "var(--text-lighter)", fontSize: "0.85rem" }}>Q{qi + 1}</span>
            <select
              value={q.question_type}
              onChange={(e) => { updateQuestion(q.id, "question_type", e.target.value); }}
              onBlur={() => saveQuestion(q)}
              style={{ padding: "4px 8px", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.8rem", fontFamily: "inherit" }}
            >
              <option value="single_choice">Choix unique</option>
              <option value="multiple_choice">Choix multiples</option>
              <option value="true_false">Vrai/Faux</option>
            </select>
            <button
              onClick={() => deleteQuestion(q.id)}
              style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--danger)", fontSize: "0.8rem" }}
            >
              <i className="fas fa-trash" />
            </button>
          </div>

          <textarea
            value={q.question}
            onChange={(e) => updateQuestion(q.id, "question", e.target.value)}
            onBlur={() => saveQuestion(q)}
            placeholder="Enonce de la question..."
            style={{ width: "100%", border: "1px solid var(--border)", borderRadius: 6, padding: "8px 12px", fontSize: "0.9rem", fontFamily: "inherit", marginBottom: 12, minHeight: 60, resize: "vertical" }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
            {q.options.map((opt, oi) => (
              <div key={oi} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type={q.question_type === "multiple_choice" ? "checkbox" : "radio"}
                  name={`q-${q.id}`}
                  checked={q.correct_answer.includes(oi)}
                  onChange={() => {
                    const newAnswer = q.question_type === "multiple_choice"
                      ? q.correct_answer.includes(oi)
                        ? q.correct_answer.filter((a) => a !== oi)
                        : [...q.correct_answer, oi]
                      : [oi];
                    updateQuestion(q.id, "correct_answer", newAnswer);
                    saveQuestion({ ...q, correct_answer: newAnswer });
                  }}
                />
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => {
                    const newOpts = [...q.options];
                    newOpts[oi] = e.target.value;
                    updateQuestion(q.id, "options", newOpts);
                  }}
                  onBlur={() => saveQuestion(q)}
                  style={{ flex: 1, padding: "6px 10px", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.85rem", fontFamily: "inherit" }}
                />
                {q.options.length > 2 && (
                  <button
                    onClick={() => {
                      const newOpts = q.options.filter((_, i) => i !== oi);
                      const newAnswer = q.correct_answer.filter((a) => a !== oi).map((a) => a > oi ? a - 1 : a);
                      updateQuestion(q.id, "options", newOpts);
                      updateQuestion(q.id, "correct_answer", newAnswer);
                      saveQuestion({ ...q, options: newOpts, correct_answer: newAnswer });
                    }}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-lighter)", fontSize: "0.75rem" }}
                  >
                    <i className="fas fa-times" />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                const newOpts = [...q.options, `Option ${q.options.length + 1}`];
                updateQuestion(q.id, "options", newOpts);
                saveQuestion({ ...q, options: newOpts });
              }}
              style={{ alignSelf: "flex-start", padding: "4px 12px", border: "1px dashed var(--border)", borderRadius: 6, background: "transparent", cursor: "pointer", fontSize: "0.8rem", color: "var(--text-light)", fontFamily: "inherit" }}
            >
              <i className="fas fa-plus" style={{ marginRight: 4 }} /> Ajouter une option
            </button>
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", fontWeight: 600, marginBottom: 4, display: "block" }}>Explication (optionnel)</label>
            <input
              type="text"
              value={q.explanation}
              onChange={(e) => updateQuestion(q.id, "explanation", e.target.value)}
              onBlur={() => saveQuestion(q)}
              placeholder="Explication de la bonne reponse..."
              style={{ width: "100%", padding: "6px 10px", border: "1px solid var(--border)", borderRadius: 6, fontSize: "0.85rem", fontFamily: "inherit" }}
            />
          </div>
        </div>
      ))}

      <button onClick={addQuestion}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, border: "2px dashed var(--border)", borderRadius: "var(--radius-sm)", background: "transparent", cursor: "pointer", fontSize: "0.9rem", color: "var(--text-light)", fontFamily: "inherit", width: "100%" }}
      >
        <i className="fas fa-plus" /> Ajouter une question
      </button>
    </div>
  );
}
