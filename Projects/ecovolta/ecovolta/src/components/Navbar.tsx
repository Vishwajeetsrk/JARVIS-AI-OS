import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { FadeDown } from "./FadeDown";

const NAV_ROUTES = [
  { label: "Solutions", path: "renewables" },
  { label: "Projects", path: "strategies" },
  { label: "Impact", path: "photovoltaic" },
  { label: "About", path: "wind" },
] as const;

export function Navbar() {
  return (
    <FadeDown className="relative z-20 px-6 pt-5 md:px-10" delay={0.05}>
      <nav className="liquid-glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-8 md:py-3.5">
        <PresetNavLink
          target=""
          className="text-lg font-semibold tracking-tight text-heading md:text-xl"
        >
          Sunfield Energy
        </PresetNavLink>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ROUTES.map((link) => (
            <PresetNavLink
              key={link.path}
              target={link.path}
              className="text-sm font-medium text-heading/75 transition-colors hover:text-heading"
            >
              {link.label}
            </PresetNavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <PresetNavLink
            target="packages"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-heading/80 transition hover:bg-white/40 sm:inline-flex"
          >
            Sign in
          </PresetNavLink>
          <PresetNavLink
            target="packages"
            className="btn-green-gradient rounded-full px-5 py-2 text-sm font-semibold transition sm:px-6 sm:py-2.5"
          >
            Get started
          </PresetNavLink>
        </div>
      </nav>
    </FadeDown>
  );
}
