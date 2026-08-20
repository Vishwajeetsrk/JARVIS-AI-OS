import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { ToonFooter, ToonNav } from "../components/ToonNav";

export function DropsPage() {
  const panel = "#8DC4FF";
  const bg = "#6EB5FF";
  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh" }}>
      <ToonNav />
      <main id="drops" className="px-6 py-20 sm:px-12 max-w-3xl mx-auto text-white">
        <h1 className="font-display text-4xl uppercase">Drops</h1>
        <p className="mt-4 text-sm text-white/90">
          Spring 2026 — Sky chapter opens April 12. Join the waitlist for early access.
        </p>
        <PresetNavLink
          target={{ kind: "route", path: "shop" }}
          className="mt-8 inline-block rounded-full bg-white text-[#6EB5FF] px-6 py-3 text-sm font-bold uppercase tracking-wider"
        >
          Shop current drop
        </PresetNavLink>
      </main>
      <ToonFooter panelColor={panel} />
    </div>
  );
}
