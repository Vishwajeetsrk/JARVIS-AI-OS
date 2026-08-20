import { CatalogGrid } from "../components/CatalogGrid";
import { StreamPageShell } from "../components/StreamPageShell";

const PICKS = [
  {
    title: "Step Through",
    meta: "Feature · Editor spotlight",
    rating: "9.2",
    tag: "Editor's pick",
  },
  { title: "Coral Static", meta: "Indie · Restored 4K", rating: "8.8" },
  { title: "White Frequency", meta: "Experimental · 72 min", rating: "8.5" },
  { title: "Borrowed Sun", meta: "Drama · Friday drop", rating: "8.7", tag: "This week" },
];

export function EditorsPickPage() {
  return (
    <StreamPageShell
      eyebrow="Curated"
      title="Editor's Pick"
      description="Hand-selected features updated every Friday by the Framecast editorial team."
    >
      <CatalogGrid items={PICKS} />
    </StreamPageShell>
  );
}
