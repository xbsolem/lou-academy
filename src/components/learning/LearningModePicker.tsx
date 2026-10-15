"use client";

import { MODE_LABELS, type LearningMode } from "@/lib/learning-mode";
import { useLearningMode } from "./LearningModeProvider";

export default function LearningModePicker({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useLearningMode();
  return (
    <div className="learning-picker">
      {!compact && (
        <>
          <h2 className="learning-picker-title">Comment souhaitez-vous apprendre ?</h2>
          <p className="learning-picker-lead">
            Vous pourrez modifier ce choix à tout moment. Les formations, la progression et les quiz restent les mêmes.
          </p>
        </>
      )}
      <div className="learning-picker-grid">
        {(["calm", "engaged"] as LearningMode[]).map((value) => {
          const meta = MODE_LABELS[value];
          const selected = mode === value;
          return (
            <button
              key={value}
              type="button"
              className={`learning-choice${selected ? " selected" : ""}`}
              onClick={() => void setMode(value)}
            >
              <i className={`fas ${value === "calm" ? "fa-book" : "fa-star"}`} aria-hidden="true" />
              <strong>{compact ? meta.title : meta.choice}</strong>
              <span>{meta.hint}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
