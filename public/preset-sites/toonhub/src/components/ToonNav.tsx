import { PresetNavLink } from "../../../_shared/components/PresetNavLink";

const NAV = [
  { label: "Collection", route: "" },
  { label: "Shop", route: "shop" },
  { label: "About", route: "about" },
  { label: "FAQ", route: "faq" },
  { label: "Drops", route: "drops" },
  { label: "Artists", route: "artists" },
] as const;

type ToonNavProps = {
  panelColor?: string;
  /** Hero carousel: absolute overlay; inner pages: sticky bar */
  variant?: "hero" | "page";
};

export function ToonNav({ panelColor, variant = "page" }: ToonNavProps) {
  const isHero = variant === "hero";
  return (
    <nav
      className={
        isHero
          ? "absolute top-6 left-4 right-4 sm:left-8 sm:right-8 z-[60] flex items-center justify-between"
          : "sticky top-0 z-[70] flex items-center justify-between px-4 py-4 sm:px-8"
      }
    >
      <PresetNavLink
        target={{ kind: "route", path: "" }}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90 hover:text-white"
      >
        TOONHUB
      </PresetNavLink>
      <div className="hidden gap-5 sm:flex">
        {NAV.map((item) => (
          <PresetNavLink
            key={item.route}
            target={{ kind: "route", path: item.route }}
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 hover:text-white transition-colors"
            style={panelColor ? { borderBottom: `2px solid ${panelColor}` } : undefined}
          >
            {item.label}
          </PresetNavLink>
        ))}
      </div>
      <PresetNavLink
        target={{ kind: "route", path: "shop" }}
        className="sm:hidden text-[11px] font-medium uppercase tracking-[0.12em] text-white/90"
      >
        Shop
      </PresetNavLink>
    </nav>
  );
}

export function ToonFooter({ panelColor }: { panelColor: string }) {
  return (
    <footer
      className="py-8 text-center text-xs uppercase tracking-wider text-white/60"
      style={{ backgroundColor: panelColor }}
    >
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <PresetNavLink target={{ kind: "route", path: "privacy" }} className="hover:text-white">
          Privacy
        </PresetNavLink>
        <PresetNavLink target={{ kind: "route", path: "terms" }} className="hover:text-white">
          Terms
        </PresetNavLink>
        <PresetNavLink target={{ kind: "route", path: "faq" }} className="hover:text-white">
          FAQ
        </PresetNavLink>
      </div>
      © 2026 TOONHUB
    </footer>
  );
}
