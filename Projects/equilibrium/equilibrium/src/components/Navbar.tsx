import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import {
  getPresetRoutePath,
  sectionHref,
  subscribePresetHashNavigation,
} from "../../../_shared/preset-site-routing";
import { WELLNESS_DROPDOWN } from "../constants";
import { scrollToHomeSection } from "../lib/nav";
import LogoMark from "./LogoMark";

const navPillClass = (active: boolean) =>
  `rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
    active ? "bg-white/10 text-foreground" : "text-foreground/75 hover:text-foreground"
  }`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wellnessOpen, setWellnessOpen] = useState(false);
  const [route, setRoute] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRoute(getPresetRoutePath());
    return subscribePresetHashNavigation(setRoute);
  }, []);

  useEffect(() => {
    if (!wellnessOpen) return;
    const close = (e: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWellnessOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [wellnessOpen]);

  const wellnessActive = route === "wellness" || WELLNESS_DROPDOWN.some((l) => l.path === route);

  const sectionClick = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToHomeSection(sectionId);
    setMenuOpen(false);
    setWellnessOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <PresetNavLink
            target={{ kind: "route", path: "" }}
            className="flex shrink-0 items-center gap-2.5 text-foreground"
            aria-label="Equilibrium home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-accent">
              <LogoMark className="h-5 w-5" />
            </span>
            <span data-editable className="text-sm font-semibold tracking-tight">
              Equilibrium
            </span>
          </PresetNavLink>

          <nav
            className="liquid-glass hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 md:flex"
            aria-label="Primary"
          >
            <PresetNavLink
              target={{ kind: "route", path: "" }}
              className={navPillClass(route === "")}
              data-editable
            >
              Home
            </PresetNavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className={`inline-flex items-center gap-1 ${navPillClass(wellnessActive)}`}
                aria-expanded={wellnessOpen}
                aria-haspopup="true"
                onClick={() => setWellnessOpen((o) => !o)}
              >
                <span data-editable>Wellness</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-70" aria-hidden />
              </button>
              {wellnessOpen && (
                <div className="liquid-glass absolute left-0 top-full z-50 mt-2 min-w-[10.5rem] rounded-2xl p-1.5 shadow-lg">
                  <a
                    href={sectionHref("wellness")}
                    className="block rounded-xl px-3 py-2 text-sm text-foreground/90 hover:bg-white/5"
                    data-editable
                    onClick={sectionClick("wellness")}
                  >
                    Overview
                  </a>
                  {WELLNESS_DROPDOWN.map((link) => (
                    <PresetNavLink
                      key={link.path}
                      target={{ kind: "route", path: link.path }}
                      className="block rounded-xl px-3 py-2 text-sm text-foreground/90 hover:bg-white/5"
                      data-editable
                      onClick={() => setWellnessOpen(false)}
                    >
                      {link.label}
                    </PresetNavLink>
                  ))}
                </div>
              )}
            </div>

            <a
              href={sectionHref("routine")}
              className={navPillClass(false)}
              data-editable
              onClick={sectionClick("routine")}
            >
              Routine
            </a>
            <a
              href={sectionHref("our-team")}
              className={navPillClass(false)}
              data-editable
              onClick={sectionClick("our-team")}
            >
              Our Team
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className="liquid-glass rounded-full px-4 py-2 text-sm font-medium text-foreground/85"
              data-editable
            >
              Log in
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition hover:brightness-110"
              data-editable
            >
              Begin Now
            </PresetNavLink>
          </div>

          <button
            type="button"
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu backdrop"
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,320px)] flex-col md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="liquid-glass flex h-full flex-col border-l border-white/10 bg-surface/95">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <LogoMark className="h-6 w-6 text-accent" />
                    <span data-editable className="text-sm font-semibold">
                      Equilibrium
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/80"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                  <PresetNavLink
                    target={{ kind: "route", path: "" }}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5"
                    data-editable
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </PresetNavLink>
                  <p className="px-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
                    Wellness
                  </p>
                  <a
                    href={sectionHref("wellness")}
                    className="rounded-xl px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-white/5"
                    data-editable
                    onClick={sectionClick("wellness")}
                  >
                    Overview
                  </a>
                  {WELLNESS_DROPDOWN.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                    >
                      <PresetNavLink
                        target={{ kind: "route", path: link.path }}
                        className="block rounded-xl px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-white/5"
                        data-editable
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </PresetNavLink>
                    </motion.div>
                  ))}
                  <a
                    href={sectionHref("routine")}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5"
                    data-editable
                    onClick={sectionClick("routine")}
                  >
                    Routine
                  </a>
                  <a
                    href={sectionHref("our-team")}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground/90 hover:bg-white/5"
                    data-editable
                    onClick={sectionClick("our-team")}
                  >
                    Our Team
                  </a>
                </nav>
                <div className="flex flex-col gap-2 border-t border-white/10 p-5">
                  <PresetNavLink
                    target={{ kind: "route", path: "contact" }}
                    className="liquid-glass w-full rounded-full px-5 py-3 text-center text-sm font-medium"
                    data-editable
                    onClick={() => setMenuOpen(false)}
                  >
                    Log in
                  </PresetNavLink>
                  <PresetNavLink
                    target={{ kind: "route", path: "contact" }}
                    className="w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-background"
                    data-editable
                    onClick={() => setMenuOpen(false)}
                  >
                    Begin Now
                  </PresetNavLink>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
