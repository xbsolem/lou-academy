import { CORE_DRIVE_LABELS, type OctagonScore, type OctagonChecks } from "@/lib/octalysis/checklist";

const CHECK_LABELS: { key: keyof OctagonChecks; label: string }[] = [
  { key: "hasMission", label: "Mission professionnelle présente" },
  { key: "hasQuiz", label: "Au moins un quiz" },
  { key: "hasSkillsMapped", label: "Compétences reliées à des preuves" },
  { key: "hasPortfolioHook", label: "Éléments de portefeuille prévus" },
  { key: "hasSocialOptIn", label: "Partage volontaire possible" },
  { key: "hasChallenges", label: "Défis issus des quiz / exercices" },
  { key: "hasFeedbackExplanations", label: "Explications de quiz présentes" },
  { key: "hasOptionalAdvanced", label: "Leçons facultatives (is_required = non)" },
];

export default function OctagonStudio({
  checks,
  score,
}: {
  checks: OctagonChecks;
  score: OctagonScore;
}) {
  return (
    <div className="octagon-studio">
      <h3>Qualité du parcours (indicative)</h3>
      <p className="muted">{score.note}</p>
      <ul className="octagon-checks">
        {CHECK_LABELS.map((item) => (
          <li key={item.key} className={checks[item.key] ? "on" : "off"}>
            <i className={`fas ${checks[item.key] ? "fa-check-circle" : "fa-circle"}`} aria-hidden="true" />
            {item.label}
          </li>
        ))}
      </ul>
      <div className="octagon-grid">
        {(Object.keys(CORE_DRIVE_LABELS) as Array<keyof typeof CORE_DRIVE_LABELS>).map((id) => (
          <div key={id} className="octagon-drive">
            <span>{CORE_DRIVE_LABELS[id]}</span>
            <strong>{score.drives[id]}/10</strong>
            <div className="player-progress-track">
              <div className="player-progress-fill" style={{ width: `${score.drives[id] * 10}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 16 }}>
        Total indicatif : {score.total}/80. P5 (partage volontaire) : opt-in uniquement, pas de classement
        public. P6 (rareté) et pression restent à 0 volontairement — ces leviers ne sont pas construits
        (pas de places limitées fictives, pas de compte à rebours). Un score élevé ne signifie pas que
        l&apos;apprenant a appris.
      </p>
    </div>
  );
}
