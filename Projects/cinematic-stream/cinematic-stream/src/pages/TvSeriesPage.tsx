import { CatalogGrid } from "../components/CatalogGrid";
import { StreamPageShell } from "../components/StreamPageShell";

const SERIES = [
  { title: "Framecast Originals", meta: "8 episodes · Season 1", rating: "8.7", tag: "New season" },
  { title: "Midnight Signal", meta: "6 episodes · Limited", rating: "8.5" },
  { title: "The Long Edit", meta: "10 episodes · Docu-series", rating: "9.1" },
  { title: "Parallel Rooms", meta: "12 episodes · Drama", rating: "8.0" },
  { title: "Operator", meta: "5 episodes · Sci-fi", rating: "8.3" },
  { title: "West Archive", meta: "9 episodes · Mystery", rating: "8.6" },
];

export function TvSeriesPage() {
  return (
    <StreamPageShell
      eyebrow="Serialized"
      title="TV Series"
      description="Serialized originals with weekly drops and curated binge collections."
    >
      <CatalogGrid items={SERIES} />
    </StreamPageShell>
  );
}
