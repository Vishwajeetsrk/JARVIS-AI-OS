import { CatalogGrid } from "../components/CatalogGrid";
import { StreamPageShell } from "../components/StreamPageShell";

const MOVIES = [
  { title: "Northern Passage", meta: "Sci-fi · 2h 12m", rating: "8.9", tag: "Premiere" },
  { title: "Glass Meridian", meta: "Drama · 1h 48m", rating: "8.4" },
  { title: "Echo Division", meta: "Thriller · 1h 56m", rating: "8.1" },
  { title: "Silent Orbit", meta: "Documentary · 1h 32m", rating: "9.0", tag: "Awarded" },
  { title: "Afterlight", meta: "Romance · 1h 44m", rating: "7.8" },
  { title: "Iron Harbor", meta: "Action · 2h 04m", rating: "8.2" },
];

export function MoviesPage() {
  return (
    <StreamPageShell
      eyebrow="Catalog"
      title="Movies"
      description="Premieres, festival cuts, and exclusive director editions streaming in 4K HDR."
    >
      <CatalogGrid items={MOVIES} />
    </StreamPageShell>
  );
}
