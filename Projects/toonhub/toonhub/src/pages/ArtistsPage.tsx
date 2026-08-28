import { ToonFooter, ToonNav } from "../components/ToonNav";

const ARTISTS = [
  { name: "Mika Tan", role: "Character design" },
  { name: "Rio Vale", role: "Color & finish" },
  { name: "Studio Koto", role: "Packaging & lore" },
];

export function ArtistsPage() {
  const panel = "#F79B7F";
  const bg = "#F4845F";
  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh" }}>
      <ToonNav />
      <main id="artists" className="px-6 py-20 sm:px-12 max-w-3xl mx-auto text-white">
        <h1 className="font-display text-4xl uppercase">Artists</h1>
        <ul className="mt-10 space-y-4">
          {ARTISTS.map((a) => (
            <li key={a.name} className="rounded-xl bg-white/15 px-5 py-4">
              <p className="font-display text-xl uppercase">{a.name}</p>
              <p className="text-sm text-white/80 mt-1">{a.role}</p>
            </li>
          ))}
        </ul>
      </main>
      <ToonFooter panelColor={panel} />
    </div>
  );
}
