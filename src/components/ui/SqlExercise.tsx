"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createClient } from "@/lib/supabase/client";

interface SqlExerciseData {
  instructions: string;
  schema: string;
  setupSql: string;
  expectedResult: string[][];
  hints: string[];
  solution: string;
  starterQuery: string;
}

export default function SqlExercise({
  lessonId,
  exerciseData,
  isPreview,
}: {
  lessonId: string;
  exerciseData: SqlExerciseData;
  isPreview: boolean;
}) {
  const [query, setQuery] = useState(exerciseData.starterQuery || "");
  const [results, setResults] = useState<{ columns: string[]; values: unknown[][] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showHint, setShowHint] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const [running, setRunning] = useState(false);
  const dbRef = useRef<unknown>(null);
  const supabase = createClient();

  const initDb = useCallback(async () => {
    try {
      const initSqlJs = (await import("sql.js")).default;
      const SQL = await initSqlJs({
        locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
      });
      const db = new SQL.Database();
      if (exerciseData.setupSql) {
        db.run(exerciseData.setupSql);
      }
      dbRef.current = db;
    } catch (err) {
      console.error("SQL init error:", err);
      setError("Erreur d'initialisation du moteur SQL.");
    }
  }, [exerciseData.setupSql]);

  useEffect(() => {
    initDb();
    return () => {
      if (dbRef.current && typeof (dbRef.current as { close: () => void }).close === "function") {
        (dbRef.current as { close: () => void }).close();
      }
    };
  }, [initDb]);

  const executeQuery = async () => {
    if (!dbRef.current) {
      setError("Le moteur SQL n'est pas initialise.");
      return;
    }
    setRunning(true);
    setError(null);
    setResults(null);
    setSuccess(false);

    try {
      const db = dbRef.current as { exec: (sql: string) => { columns: string[]; values: unknown[][] }[] };
      const result = db.exec(query);
      if (result.length > 0) {
        setResults(result[0]);

        if (exerciseData.expectedResult && exerciseData.expectedResult.length > 0) {
          const actual = result[0].values.map((row) => row.map(String));
          const expected = exerciseData.expectedResult.map((row) => row.map(String));
          const match =
            actual.length === expected.length &&
            actual.every((row, i) =>
              row.length === expected[i].length &&
              row.every((val, j) => val === expected[i][j])
            );
          setSuccess(match);

          if (match && !isPreview) {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
              await supabase.from("activity_events").insert({
                user_id: user.id,
                lesson_id: lessonId,
                event_type: "Exercice SQL reussi",
                metadata: JSON.stringify({ query }),
              });
            }
          }
        } else {
          setSuccess(true);
        }
      } else {
        setResults({ columns: [], values: [] });
        setSuccess(true);
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setRunning(false);
    }
  };

  return (
    <div>
      {/* Instructions */}
      <div style={{ background: "#eff6ff", borderLeft: "4px solid var(--primary)", borderRadius: 8, padding: "16px 20px", marginBottom: 20, lineHeight: 1.6 }}>
        <i className="fas fa-info-circle" style={{ color: "var(--primary)", marginRight: 8 }} />
        {exerciseData.instructions}
      </div>

      {/* Schema */}
      {exerciseData.schema && (
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: 8, color: "var(--text-light)" }}>
            <i className="fas fa-database" style={{ marginRight: 6 }} /> Schema
          </h4>
          <pre style={{ padding: 12, background: "#1e293b", color: "#e2e8f0", borderRadius: 8, fontSize: "0.8rem", overflow: "auto" }}>
            {exerciseData.schema}
          </pre>
        </div>
      )}

      {/* SQL Editor */}
      <div style={{ marginBottom: 16 }}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) executeQuery(); }}
          placeholder="Ecrivez votre requete SQL ici..."
          style={{
            width: "100%", minHeight: 120, padding: 16,
            fontFamily: "monospace", fontSize: "0.9rem",
            background: "#1e293b", color: "#e2e8f0",
            border: "2px solid var(--border)", borderRadius: 8,
            resize: "vertical",
          }}
        />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={executeQuery} disabled={running || !query.trim()}
            style={{
              padding: "8px 20px", borderRadius: "var(--radius-sm)", background: "var(--success)",
              color: "#fff", border: "none", cursor: running ? "not-allowed" : "pointer",
              fontSize: "0.85rem", fontWeight: 500, fontFamily: "inherit",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}
          >
            <i className="fas fa-play" /> {running ? "Execution..." : "Executer (Ctrl+Enter)"}
          </button>
          {exerciseData.hints && exerciseData.hints.length > 0 && (
            <button onClick={() => setShowHint((prev) => Math.min(prev + 1, exerciseData.hints.length - 1))}
              style={{ padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <i className="fas fa-lightbulb" /> Indice
            </button>
          )}
          <button onClick={() => setShowSolution(!showSolution)}
            style={{ padding: "8px 16px", borderRadius: "var(--radius-sm)", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "0.85rem", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <i className="fas fa-eye" /> Solution
          </button>
        </div>
      </div>

      {/* Hints */}
      {showHint >= 0 && exerciseData.hints && (
        <div style={{ padding: "12px 16px", background: "#fffbeb", borderRadius: 8, marginBottom: 16, fontSize: "0.85rem" }}>
          <i className="fas fa-lightbulb" style={{ color: "var(--warning)", marginRight: 8 }} />
          {exerciseData.hints[showHint]}
        </div>
      )}

      {/* Solution */}
      {showSolution && exerciseData.solution && (
        <div style={{ marginBottom: 16 }}>
          <pre style={{ padding: 12, background: "#ecfdf5", color: "#059669", borderRadius: 8, fontSize: "0.85rem", fontFamily: "monospace" }}>
            {exerciseData.solution}
          </pre>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{ padding: "12px 16px", background: "#fef2f2", color: "#dc2626", borderRadius: 8, marginBottom: 16, fontSize: "0.85rem" }}>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: 8 }} />
          {error}
        </div>
      )}

      {/* Success */}
      {success && (
        <div style={{ padding: "12px 16px", background: "#ecfdf5", color: "#059669", borderRadius: 8, marginBottom: 16, fontSize: "0.9rem", fontWeight: 600 }}>
          <i className="fas fa-check-circle" style={{ marginRight: 8 }} />
          Correct ! Bien joue.
        </div>
      )}

      {/* Results Table */}
      {results && results.columns.length > 0 && (
        <div style={{ overflow: "auto", borderRadius: 8, border: "1px solid var(--border)" }}>
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
                      {String(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
