"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import type { SqlExerciseData } from "@/lib/sql-exercise-data";
import { createSqlSandbox, type QueryResult, type SqlSandbox } from "@/lib/sql-sandbox";
import { highlightSql } from "@/lib/sql-highlight";

const btnBase: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: "var(--radius-sm)",
  border: "none",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: 500,
  fontFamily: "inherit",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const ghostBtn: React.CSSProperties = {
  ...btnBase,
  background: "var(--bg)",
  color: "var(--text)",
  border: "1px solid var(--border)",
};

export default function SqlExercise({
  lessonId,
  exerciseData,
  isPreview,
  onSuccess,
  mode = "practice",
  query: controlledQuery,
  onQueryChange,
  showCorrection = false,
  examResult = null,
}: {
  lessonId: string;
  exerciseData: SqlExerciseData;
  isPreview: boolean;
  onSuccess?: () => void;
  mode?: "practice" | "exam";
  query?: string;
  onQueryChange?: (query: string) => void;
  showCorrection?: boolean;
  examResult?: { passed: boolean } | null;
}) {
  const [internalQuery, setInternalQuery] = useState(exerciseData.starterQuery || "");
  const query = controlledQuery !== undefined ? controlledQuery : internalQuery;
  const setQuery = (next: string) => {
    onQueryChange?.(next);
    if (controlledQuery === undefined) setInternalQuery(next);
  };

  const [results, setResults] = useState<QueryResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showHint, setShowHint] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);
  const [ready, setReady] = useState(false);
  const sandboxRef = useRef<SqlSandbox | null>(null);
  const successOnce = useRef(false);
  const highlightRef = useRef<HTMLPreElement | null>(null);
  const supabase = createClient();

  const initDb = useCallback(async () => {
    try {
      sandboxRef.current = await createSqlSandbox(exerciseData.setupSql || "");
      setReady(true);
      setError(null);
    } catch {
      setError("Erreur d'initialisation du moteur SQL.");
      setReady(false);
    }
  }, [exerciseData.setupSql]);

  useEffect(() => {
    initDb();
  }, [initDb]);

  useEffect(() => {
    if (controlledQuery === undefined) {
      setInternalQuery(exerciseData.starterQuery || "");
    }
    setResults(null);
    setError(null);
    setSuccess(false);
    setShowHint(-1);
    setShowSolution(false);
    successOnce.current = false;
  }, [exerciseData.starterQuery, exerciseData.instructions, controlledQuery]);

  const persistAttempt = async (payload: Record<string, unknown>, succeeded: boolean) => {
    if (isPreview) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    await supabase.from("activity_events").insert({
      user_id: user.id,
      lesson_id: lessonId,
      event_type: succeeded ? "Exercice SQL réussi" : "Exercice SQL tenté",
      metadata: payload,
    });
    await supabase.from("lesson_progress").upsert({
      user_id: user.id,
      lesson_id: lessonId,
      started_at: new Date().toISOString(),
      metadata: {
        sql: {
          lastQuery: query,
          success: succeeded,
          lastVerifiedAt: new Date().toISOString(),
        },
      },
    }, { onConflict: "user_id,lesson_id" });
  };

  const run = async (verify: boolean) => {
    if (!sandboxRef.current) {
      setError("Le moteur SQL n'est pas initialisé.");
      return { ok: false as const };
    }
    setRunning(true);
    setError(null);
    setResults(null);
    if (verify) setSuccess(false);
    try {
      if (verify) {
        const checked = sandboxRef.current.verify(query, exerciseData);
        if (checked.result) setResults(checked.result);
        if (!checked.ok) {
          setError(checked.error);
          setSuccess(false);
          await persistAttempt({ query, verify: true, ok: false, code: checked.code }, false);
          return { ok: false as const };
        }
        setSuccess(true);
        await persistAttempt({ query, verify: true, ok: true }, true);
        if (!successOnce.current) {
          successOnce.current = true;
          onSuccess?.();
        }
        return { ok: true as const };
      }
      const executed = sandboxRef.current.execute(query);
      if (!executed.ok) {
        setError(executed.error);
        return { ok: false as const };
      }
      setResults(executed.result);
      if (executed.result.values.length === 0) {
        setError("Résultat vide. Votre requête ne renvoie aucune ligne.");
      }
      return { ok: true as const };
    } finally {
      setRunning(false);
    }
  };

  const restart = () => {
    setQuery(exerciseData.starterQuery || "");
    setResults(null);
    setError(null);
    setSuccess(false);
    setShowHint(-1);
    setShowSolution(false);
  };

  const examMode = mode === "exam";
  const correctionVisible = showCorrection || (!examMode && showSolution);

  return (
    <div className="sql-lab">
      <div className="sql-lab-prompt">
        <div style={{ background: "#eff6ff", borderLeft: "4px solid var(--primary)", borderRadius: 8, padding: "16px 20px", lineHeight: 1.6, marginBottom: 16 }}>
          <i className="fas fa-info-circle" style={{ color: "var(--primary)", marginRight: 8 }} />
          {exerciseData.instructions || "Écrivez une requête SQL pour obtenir le résultat attendu."}
        </div>
        {exerciseData.schema && (
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: 8, color: "var(--text-light)" }}>
              <i className="fas fa-database" style={{ marginRight: 6 }} /> Schéma
            </h4>
            <pre style={{ padding: 12, background: "#1e293b", color: "#e2e8f0", borderRadius: 8, fontSize: "0.8rem", overflow: "auto", whiteSpace: "pre-wrap" }}>
              {exerciseData.schema}
            </pre>
          </div>
        )}
      </div>

      <div className="sql-lab-editor">
        <div className="sql-editor">
          <pre
            ref={highlightRef}
            className="sql-editor-highlight"
            aria-hidden
            dangerouslySetInnerHTML={{ __html: highlightSql(query) + (query.endsWith("\n") ? " " : "") }}
          />
          <textarea
            className="sql-editor-textarea"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onScroll={(e) => {
              if (highlightRef.current) {
                highlightRef.current.scrollTop = e.currentTarget.scrollTop;
                highlightRef.current.scrollLeft = e.currentTarget.scrollLeft;
              }
            }}
            onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) run(false); }}
            placeholder="Écrivez votre requête SQL ici..."
            spellCheck={false}
          />
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
          <button
            onClick={() => run(false)}
            disabled={running || !query.trim() || !ready}
            style={{ ...btnBase, background: "var(--primary)", color: "#fff", cursor: running ? "not-allowed" : "pointer" }}
          >
            <i className="fas fa-play" /> {running ? "Exécution..." : "Exécuter"}
          </button>
          {!examMode && (
            <button
              onClick={() => run(true)}
              disabled={running || !query.trim() || !ready}
              style={{ ...btnBase, background: "var(--success)", color: "#fff" }}
            >
              <i className="fas fa-check" /> Vérifier
            </button>
          )}
          {!examMode && exerciseData.hints && exerciseData.hints.length > 0 && (
            <button onClick={() => setShowHint((prev) => Math.min(prev + 1, exerciseData.hints.length - 1))} style={ghostBtn}>
              <i className="fas fa-lightbulb" /> Indice
            </button>
          )}
          {!examMode && (
            <button onClick={() => setShowSolution((prev) => !prev)} style={ghostBtn}>
              <i className="fas fa-eye" /> Voir la correction
            </button>
          )}
          <button onClick={restart} style={ghostBtn}>
            <i className="fas fa-undo" /> Recommencer
          </button>
        </div>
        {!examMode && showHint >= 0 && exerciseData.hints?.[showHint] && (
          <div style={{ padding: "12px 16px", background: "#fffbeb", borderRadius: 8, marginTop: 12, fontSize: "0.85rem" }}>
            <i className="fas fa-lightbulb" style={{ color: "var(--warning)", marginRight: 8 }} />
            {exerciseData.hints[showHint]}
          </div>
        )}
        {correctionVisible && exerciseData.solution && (
          <div style={{ marginTop: 12 }}>
            <pre style={{ padding: 12, background: "#ecfdf5", color: "#059669", borderRadius: 8, fontSize: "0.85rem", fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
              {exerciseData.solution}
            </pre>
          </div>
        )}
      </div>

      <div className="sql-lab-results">
        {error && (
          <div style={{ padding: "12px 16px", background: "#fef2f2", color: "#dc2626", borderRadius: 8, marginBottom: 12, fontSize: "0.85rem" }}>
            <i className="fas fa-exclamation-triangle" style={{ marginRight: 8 }} />
            {error}
          </div>
        )}
        {(success || examResult?.passed) && (
          <div style={{ padding: "12px 16px", background: "#ecfdf5", color: "#059669", borderRadius: 8, marginBottom: 12, fontSize: "0.9rem", fontWeight: 600 }}>
            <i className="fas fa-check-circle" style={{ marginRight: 8 }} />
            Correct ! Bien joué.
          </div>
        )}
        {examResult && !examResult.passed && showCorrection && (
          <div style={{ padding: "12px 16px", background: "#fef2f2", color: "#dc2626", borderRadius: 8, marginBottom: 12, fontSize: "0.9rem", fontWeight: 600 }}>
            <i className="fas fa-times-circle" style={{ marginRight: 8 }} />
            Réponse incorrecte.
          </div>
        )}
        {results && results.columns.length > 0 && (
          <div className="table-responsive" style={{ borderRadius: 8, border: "1px solid var(--border)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr>
                  {results.columns.map((col, i) => (
                    <th key={i} style={{ padding: "10px 16px", background: "var(--bg)", borderBottom: "1px solid var(--border)", textAlign: "left", fontWeight: 600, fontSize: "0.8rem", color: "var(--text-light)" }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {results.values.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((val, ci) => (
                      <td key={ci} style={{ padding: "8px 16px", borderBottom: "1px solid var(--border)", fontFamily: "monospace", fontSize: "0.8rem" }}>
                        {val == null ? "NULL" : String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {results && results.columns.length === 0 && (
          <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Aucune colonne renvoyée.</p>
        )}
      </div>
    </div>
  );
}
