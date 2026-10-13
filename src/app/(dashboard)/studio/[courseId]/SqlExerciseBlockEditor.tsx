"use client";

import { useState } from "react";
import {
  DEFAULT_SQL_EXERCISE,
  parseSqlExerciseData,
  serializeSqlExerciseData,
  type SqlExerciseData,
} from "@/lib/sql-exercise-data";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--border)",
  borderRadius: 6,
  padding: "8px 10px",
  fontSize: "0.85rem",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "var(--text-light)",
  marginBottom: 4,
};

export default function SqlExerciseBlockEditor({
  content,
  onChange,
  onSave,
}: {
  content: string;
  onChange: (content: string) => void;
  onSave: (content?: string) => void;
}) {
  const data = parseSqlExerciseData(content) || { ...DEFAULT_SQL_EXERCISE };
  const [resultJson, setResultJson] = useState(() => JSON.stringify(data.expectedResult || [], null, 2));
  const [shapesJson, setShapesJson] = useState(() => JSON.stringify(data.expectedResults || [], null, 2));

  const patch = (partial: Partial<SqlExerciseData>, save = false) => {
    const next = serializeSqlExerciseData({ ...data, ...partial });
    onChange(next);
    if (save) onSave(next);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <label style={labelStyle}>Consigne</label>
        <textarea
          value={data.instructions}
          onChange={(e) => patch({ instructions: e.target.value })}
          onBlur={() => onSave()}
          placeholder="Décrivez ce que l'apprenant doit obtenir..."
          style={{ ...fieldStyle, minHeight: 70, resize: "vertical", fontFamily: "inherit" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Schéma affiché (optionnel)</label>
        <textarea
          value={data.schema}
          onChange={(e) => patch({ schema: e.target.value })}
          onBlur={() => onSave()}
          placeholder="users(id, name, city)"
          style={{ ...fieldStyle, minHeight: 60, fontFamily: "monospace", background: "#1e293b", color: "#e2e8f0" }}
        />
      </div>
      <div>
        <label style={labelStyle}>setupSql — tables et données (exécuté en local, jamais sur Supabase)</label>
        <textarea
          value={data.setupSql}
          onChange={(e) => patch({ setupSql: e.target.value })}
          onBlur={() => onSave()}
          placeholder="CREATE TABLE users (...); INSERT INTO users VALUES (...);"
          style={{ ...fieldStyle, minHeight: 90, fontFamily: "monospace", background: "#1e293b", color: "#e2e8f0" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Requête de départ</label>
        <textarea
          value={data.starterQuery}
          onChange={(e) => patch({ starterQuery: e.target.value })}
          onBlur={() => onSave()}
          placeholder="SELECT "
          style={{ ...fieldStyle, minHeight: 50, fontFamily: "monospace", background: "#1e293b", color: "#e2e8f0" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Colonnes attendues (virgules) — comparaison insensible à la casse</label>
        <input
          value={(data.expectedColumns || []).join(", ")}
          onChange={(e) => patch({ expectedColumns: e.target.value.split(",").map((c) => c.trim()).filter(Boolean) })}
          onBlur={() => onSave()}
          placeholder="name, city"
          style={fieldStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>Résultat attendu (JSON : tableau de lignes)</label>
        <textarea
          value={resultJson}
          onChange={(e) => setResultJson(e.target.value)}
          onBlur={() => {
            try {
              const parsed = JSON.parse(resultJson);
              if (Array.isArray(parsed)) patch({ expectedResult: parsed }, true);
            } catch { /* keep last valid */ }
          }}
          placeholder='[["Ada","Paris"],["Chloé","Paris"]]'
          style={{ ...fieldStyle, minHeight: 80, fontFamily: "monospace" }}
        />
      </div>
      <div>
        <label style={labelStyle}>Formes alternatives expectedResults (JSON optionnel)</label>
        <textarea
          value={shapesJson}
          onChange={(e) => setShapesJson(e.target.value)}
          onBlur={() => {
            try {
              const parsed = JSON.parse(shapesJson);
              if (Array.isArray(parsed)) patch({ expectedResults: parsed }, true);
            } catch { /* keep last valid */ }
          }}
          placeholder='[{"columns":["name"],"rows":[["Ada"]],"orderRequired":false}]'
          style={{ ...fieldStyle, minHeight: 70, fontFamily: "monospace" }}
        />
      </div>
      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem" }}>
        <input
          type="checkbox"
          checked={Boolean(data.orderRequired)}
          onChange={(e) => patch({ orderRequired: e.target.checked }, true)}
        />
        Ordre des lignes obligatoire
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem" }}>
        <input
          type="checkbox"
          checked={Boolean(data.practicalExam)}
          onChange={(e) => patch({ practicalExam: e.target.checked }, true)}
        />
        Épreuve pratique (barème /20 si 5 exercices)
      </label>
      <div>
        <label style={labelStyle}>Points (défaut 4)</label>
        <input
          type="number"
          min={0}
          value={data.points ?? 4}
          onChange={(e) => patch({ points: Number(e.target.value) })}
          onBlur={() => onSave()}
          style={{ ...fieldStyle, width: 80 }}
        />
      </div>
      <div>
        <label style={labelStyle}>Indices (un par ligne)</label>
        <textarea
          value={(data.hints || []).join("\n")}
          onChange={(e) => patch({ hints: e.target.value.split("\n") })}
          onBlur={() => onSave()}
          placeholder="Utilisez WHERE..."
          style={{ ...fieldStyle, minHeight: 60 }}
        />
      </div>
      <div>
        <label style={labelStyle}>Correction (solution SQL)</label>
        <textarea
          value={data.solution}
          onChange={(e) => patch({ solution: e.target.value })}
          onBlur={() => onSave()}
          placeholder="SELECT name FROM users;"
          style={{ ...fieldStyle, minHeight: 70, fontFamily: "monospace", background: "#ecfdf5", color: "#059669" }}
        />
      </div>
    </div>
  );
}
