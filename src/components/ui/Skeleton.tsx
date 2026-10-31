export function Skeleton({
  height = 16,
  width = "100%",
  radius = 8,
}: {
  height?: number | string;
  width?: number | string;
  radius?: number;
}) {
  return (
    <div
      className="skeleton-block"
      style={{ height, width, borderRadius: radius }}
      aria-hidden="true"
    />
  );
}

export function CatalogueSkeleton() {
  return (
    <div className="cards-grid" aria-busy="true" aria-label="Chargement du catalogue">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <Skeleton height={160} radius={0} />
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <Skeleton height={18} width="70%" />
            <Skeleton height={12} width="100%" />
            <Skeleton height={12} width="80%" />
            <Skeleton height={32} width={120} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function PlayerSkeleton() {
  return (
    <div className="player-card skeleton-card" aria-busy="true" aria-label="Chargement de la leçon">
      <Skeleton height={22} width="55%" />
      <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        <Skeleton height={12} width="100%" />
        <Skeleton height={12} width="96%" />
        <Skeleton height={12} width="88%" />
        <Skeleton height={80} width="100%" />
        <Skeleton height={12} width="70%" />
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Chargement">
      <Skeleton height={28} width="40%" />
      <div style={{ marginTop: 12 }}>
        <Skeleton height={14} width="60%" />
      </div>
      <div className="stats-grid" style={{ marginTop: 24 }}>
        <Skeleton height={96} />
        <Skeleton height={96} />
        <Skeleton height={96} />
        <Skeleton height={96} />
      </div>
    </div>
  );
}
