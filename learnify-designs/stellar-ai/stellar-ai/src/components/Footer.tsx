import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { NAV_LINKS } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04050c] px-4 py-14 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            Stellar<span className="text-white/40">.ai</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-white/45">
            Ship production AI with confidence. © {new Date().getFullYear()} Stellar Labs.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.path}
              target={{ kind: "route", path: link.path }}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </PresetNavLink>
          ))}
        </nav>
        <PresetNavLink
          target={{ kind: "route", path: "pricing" }}
          className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Start free trial
        </PresetNavLink>
      </div>
    </footer>
  );
}
