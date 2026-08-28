import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { JoinWaitlistPill } from "./JoinWaitlistPill";
import { LogoIpsum } from "./LogoIpsum";

const NAV_LINKS = [
  { label: "Platform", route: "platform", chevron: true },
  { label: "Ecosystem", route: "ecosystem", chevron: true },
  { label: "Developers", route: "developers", chevron: true },
  { label: "Docs", route: "docs", chevron: false },
] as const;

const navLinkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-white/75 transition-colors hover:text-white";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="shrink-0"
          aria-label="Web3 EOS home"
          onClick={closeMenu}
        >
          <LogoIpsum />
        </PresetNavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.route}
              target={{ kind: "route", path: link.route }}
              className={navLinkClass}
            >
              {link.label}
              {link.chevron ? <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden /> : null}
            </PresetNavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <PresetNavLink target={{ kind: "route", path: "waitlist" }} onClick={closeMenu}>
            <JoinWaitlistPill />
          </PresetNavLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {menuOpen ? (
        <div className="relative z-20 border-t border-white/10 bg-black/90 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <PresetNavLink
                key={link.route}
                target={{ kind: "route", path: link.route }}
                className={`${navLinkClass} py-1`}
                onClick={closeMenu}
              >
                {link.label}
                {link.chevron ? (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
                ) : null}
              </PresetNavLink>
            ))}
            <PresetNavLink
              target={{ kind: "route", path: "waitlist" }}
              className="mt-2 w-fit"
              onClick={closeMenu}
            >
              <JoinWaitlistPill className="w-full" />
            </PresetNavLink>
          </nav>
        </div>
      ) : null}
    </>
  );
}
