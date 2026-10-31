import { PlayerSkeleton } from "@/components/ui/Skeleton";

export default function PlayerLoading() {
  return (
    <div className="player-layout">
      <div className="player-sidebar">
        <div className="skeleton-block" style={{ height: 18, width: "70%", marginBottom: 16 }} />
        <div className="skeleton-block" style={{ height: 12, width: "90%", marginBottom: 8 }} />
        <div className="skeleton-block" style={{ height: 12, width: "80%", marginBottom: 8 }} />
        <div className="skeleton-block" style={{ height: 12, width: "85%" }} />
      </div>
      <div className="player-content">
        <PlayerSkeleton />
      </div>
    </div>
  );
}
