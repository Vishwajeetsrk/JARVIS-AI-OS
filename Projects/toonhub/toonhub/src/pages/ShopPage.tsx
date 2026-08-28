import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { ToonFooter, ToonNav } from "../components/ToonNav";

const PRODUCTS = [
  { name: "Blaze Figurine", price: "$48", color: "#F4845F", panel: "#F79B7F" },
  { name: "Moss Figurine", price: "$48", color: "#6BBF7A", panel: "#85CC92" },
  { name: "Bloom Figurine", price: "$52", color: "#E882B4", panel: "#ED9DC4" },
  { name: "Sky Figurine", price: "$52", color: "#6EB5FF", panel: "#8DC4FF" },
];

export function ShopPage() {
  const accent = PRODUCTS[0];
  return (
    <div
      style={{
        backgroundColor: accent.color,
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <ToonNav />
      <main id="shop" className="px-6 py-16 sm:px-12 max-w-5xl mx-auto">
        <h1 className="font-display text-4xl uppercase text-white">Shop</h1>
        <p className="mt-4 max-w-lg text-sm text-white/85">
          Limited drops ship worldwide—reserve your figurine before the window closes.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: p.panel }}
            >
              <h2 className="font-display text-xl uppercase">{p.name}</h2>
              <p className="mt-2 text-2xl font-bold">{p.price}</p>
              <PresetNavLink
                target={{ kind: "route", path: "drops" }}
                className="mt-4 inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white/30"
              >
                View drop
              </PresetNavLink>
            </article>
          ))}
        </div>
      </main>
      <ToonFooter panelColor={accent.panel} />
    </div>
  );
}
