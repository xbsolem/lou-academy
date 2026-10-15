"use client";

import { MODE_LABELS, type LearningMode } from "@/lib/learning-mode";
import { useLearningMode } from "./LearningModeProvider";

export default function LearningModeGate() {
  const { mode, ready, setMode } = useLearningMode();
  if (!ready || mode) return null;

  const choose = (value: LearningMode) => {
    void setMode(value);
  };

  return (
    <div className="learning-gate" role="dialog" aria-modal="true" aria-labelledby="learning-gate-title">
      <div className="learning-gate-card">
        <p className="learning-gate-kicker">LOU Academy</p>
        <h2 id="learning-gate-title">Comment souhaitez-vous apprendre ?</h2>
        <p>
          Choisissez l’ambiance de l’interface. Les formations, la sauvegarde de votre progression et les quiz sont identiques dans les deux cas.
        </p>
        <div className="learning-picker-grid">
          {(["calm", "engaged"] as LearningMode[]).map((value) => {
            const meta = MODE_LABELS[value];
            return (
              <button
                key={value}
                type="button"
                className="learning-choice"
                onClick={() => choose(value)}
              >
                <i className={`fas ${value === "calm" ? "fa-book" : "fa-star"}`} aria-hidden="true" />
                <strong>{meta.choice}</strong>
                <span>{meta.hint}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
