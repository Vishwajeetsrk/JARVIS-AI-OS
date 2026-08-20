import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { scrollToSection } from "../lib/scroll";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Platform", id: "platform" },
  { label: "Projects", id: "projects" },
  { label: "Community", id: "community" },
  { label: "Contact", id: "contact" },
] as const;

export const FEATURE_DROPDOWN = [
  { label: "Pipelines", id: "features-pipelines" },
  { label: "Catalog", id: "features-catalog" },
  { label: "Quality", id: "features-quality" },
  { label: "Access", id: "features-access" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const navClick = (id: string) => {
    setMenuOpen(false);
    setFeaturesOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-line/80 bg-canvas/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-10">
          <button
            type="button"
            onClick={() => navClick("platform")}
            className="font-display text-left text-lg font-semibold tracking-tight text-white"
          >
            Transform Data
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            <button
              type="button"
              onClick={() => navClick("platform")}
              className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              Platform
            </button>

            <div ref={featuresRef} className="relative">
              <button
                type="button"
                onClick={() => setFeaturesOpen((o) => !o)}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                aria-expanded={featuresOpen}
                aria-haspopup="true"
              >
                Features
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                />
              </button>
              {featuresOpen && (
                <div className="absolute left-0 top-full mt-2 min-w-[200px] rounded-2xl border border-line bg-panel/95 p-2 shadow-2xl backdrop-blur-xl">
                  {FEATURE_DROPDOWN.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => navClick(item.id)}
                      className="block w-full rounded-xl px-3 py-2 text-left text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => navClick("features")}
                    className="mt-1 block w-full rounded-xl border-t border-line px-3 py-2 text-left text-xs text-cyan/90 transition hover:bg-white/5"
                  >
                    View all features
                  </button>
                </div>
              )}
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => navClick(link.id)}
                className="rounded-full px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <label className="liquid-glass hidden items-center gap-2 rounded-full px-3 py-2 sm:flex md:min-w-[200px]">
              <Search className="h-4 w-4 shrink-0 text-white/50" strokeWidth={2} />
              <input
                type="search"
                placeholder="Search datasets, jobs…"
                className="w-full min-w-0 border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                aria-label="Search"
              />
            </label>
            <button
              type="button"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-canvas transition hover:bg-white/90 sm:inline-flex"
            >
              Get started
            </button>
            <button
              type="button"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={navClick} />
    </>
  );
}
