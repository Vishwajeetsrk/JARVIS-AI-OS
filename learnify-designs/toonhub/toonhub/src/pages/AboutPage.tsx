import { ToonFooter, ToonNav } from "../components/ToonNav";

export function AboutPage() {
  const panel = "#ED9DC4";
  const bg = "#E882B4";
  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh" }}>
      <ToonNav />
      <main id="about" className="px-6 py-20 sm:px-12 max-w-3xl mx-auto text-white">
        <h1 className="font-display text-4xl uppercase">About</h1>
        <p className="mt-6 text-sm leading-relaxed text-white/90">
          TOONHUB crafts designer toys with gallery-grade finishes and seasonal color chapters. Each
          figurine is molded, hand-finished, and numbered for collectors who want bold silhouettes
          on the shelf.
        </p>
      </main>
      <ToonFooter panelColor={panel} />
    </div>
  );
}
