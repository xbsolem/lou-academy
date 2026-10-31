import type { CourseMission } from "@/types/database";

export default function MissionCard({
  mission,
  compact = false,
  stepLabel,
}: {
  mission: Pick<CourseMission, "title" | "problem" | "skills_summary" | "situations" | "outcome" | "kind">;
  compact?: boolean;
  stepLabel?: string;
}) {
  const advanced = mission.kind === "advanced";
  return (
    <section className={`mission-card${compact ? " compact" : ""}`} aria-label="Mission professionnelle">
      <p className="mission-kicker">
        {advanced ? "Approfondissement facultatif" : stepLabel || "Mission professionnelle"}
      </p>
      <h3>{mission.title}</h3>
      <dl>
        <div>
          <dt>Problème</dt>
          <dd>{mission.problem}</dd>
        </div>
        <div>
          <dt>Compétences</dt>
          <dd>{mission.skills_summary}</dd>
        </div>
        {!compact && (
          <div>
            <dt>Situations</dt>
            <dd>{mission.situations}</dd>
          </div>
        )}
        <div>
          <dt>Résultat attendu</dt>
          <dd>{mission.outcome}</dd>
        </div>
      </dl>
      {advanced && (
        <p className="mission-optional">Cette étape n&apos;est pas requise pour avancer dans le tronc commun.</p>
      )}
    </section>
  );
}
