import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { NAV_LINKS } from "../constants";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-[38px] z-30 px-4 sm:px-6 md:top-[42px] lg:px-10">
        <div className="flex items-center justify-between text-white">
          <PresetNavLink
            target={{ kind: "section", id: "hero" }}
            className="text-lg font-bold uppercase tracking-[0.2em] sm:text-xl"
          >
            STRETCH
          </PresetNavLink>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              "route" in link ? (
                <PresetNavLink
                  key={link.label}
                  target={{ kind: "route", path: link.route }}
                  className="group relative text-sm capitalize"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </PresetNavLink>
              ) : (
                <PresetNavLink
                  key={link.label}
                  target={{ kind: "section", id: link.section }}
                  className="group relative text-sm capitalize"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </PresetNavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="flex h-4 w-6 overflow-hidden rounded-sm">
                <span className="w-1/3 bg-blue-700" />
                <span className="w-1/3 bg-white" />
                <span className="w-1/3 bg-red-600" />
              </span>
              <span className="text-xs uppercase tracking-wide">eur €</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </div>

            <span className="mx-2 hidden h-5 w-px bg-white/30 sm:block" aria-hidden />

            <PresetNavLink
              target={{ kind: "route", path: "account" }}
              className="hidden sm:inline-flex"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "route", path: "search" }}
              className="inline-flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "route", path: "shop" }}
              className="inline-flex"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </PresetNavLink>

            <button
              type="button"
              className="inline-flex md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
