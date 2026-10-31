export default function ProgressLayers({
  lessonLabel,
  modulePercent,
  coursePercent,
  globalPercent,
  skillCount,
}: {
  lessonLabel: string;
  modulePercent: number;
  coursePercent: number;
  globalPercent?: number;
  skillCount: number;
}) {
  return (
    <div className="progress-layers" aria-label="Progression">
      <div className="progress-layer">
        <span>Leçon</span>
        <strong>{lessonLabel}</strong>
      </div>
      <div className="progress-layer">
        <span>Module</span>
        <strong>{modulePercent} %</strong>
      </div>
      <div className="progress-layer">
        <span>Parcours</span>
        <strong>{coursePercent} %</strong>
      </div>
      {globalPercent != null && (
        <div className="progress-layer">
          <span>Ensemble</span>
          <strong>{globalPercent} %</strong>
        </div>
      )}
      <div className="progress-layer">
        <span>Compétences validées</span>
        <strong>{skillCount}</strong>
      </div>
    </div>
  );
}
