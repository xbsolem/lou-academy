import { CatalogueSkeleton } from "@/components/ui/Skeleton";

export default function CatalogueLoading() {
  return (
    <>
      <h1>Catalogue des formations</h1>
      <p className="muted" style={{ marginBottom: 24 }}>
        Chargement…
      </p>
      <CatalogueSkeleton />
    </>
  );
}
