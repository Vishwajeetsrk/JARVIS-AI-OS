import { useState } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { usePresetHashRoute } from "../../../_shared/hooks/usePresetHashRoute";
import { NAV_ITEMS } from "../routes";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activePath = usePresetHashRoute("");

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="animate-blur-fade-up h-8 text-lg font-semibold tracking-tight md:h-10 md:text-xl"
          style={{ animationDelay: "0ms" }}
        >
          FRAMECAST
        </PresetNavLink>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((link, i) => {
            const isActive = activePath === link.route;
            return (
              <PresetNavLink
                key={link.route}
                target={{ kind: "route", path: link.route }}
                className={`animate-blur-fade-up text-sm transition-colors hover:text-gray-300 ${
                  isActive ? "ml-1 font-medium text-white" : "text-white/90"
                }`}
                style={{ animationDelay: `${100 + i * 50}ms` }}
              >
                {isActive ? `/ ${link.label}` : link.label}
              </PresetNavLink>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="animate-blur-fade-up liquid-glass hidden items-center gap-2 rounded-full px-4 py-2 text-sm sm:flex md:px-6"
            style={{ animationDelay: "350ms" }}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={2} />
            Search
          </button>
          <button
            type="button"
            className="animate-blur-fade-up liquid-glass hidden h-10 w-10 items-center justify-center rounded-full sm:flex"
            style={{ animationDelay: "400ms" }}
            aria-label="Profile"
          >
            <User className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
          <button
            type="button"
            className="animate-blur-fade-up relative liquid-glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            style={{ animationDelay: "350ms" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`transition-all duration-500 ease-out ${
                menuOpen ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            >
              <Menu className="h-[18px] w-[18px]" />
            </span>
            <span
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-50 opacity-0"
              }`}
            >
              <X className="h-[18px] w-[18px]" />
            </span>
          </button>
        </div>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activePath={activePath} />
    </>
  );
}
