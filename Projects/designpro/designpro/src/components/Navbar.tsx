import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";
import LogoMark from "./LogoMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            href={routeHref("")}
            className="flex shrink-0 items-center gap-2.5 text-white"
            onClick={navClick("")}
            aria-label="DesignPro home"
          >
            <LogoMark className="h-9 w-9" />
            <span className="text-sm font-semibold tracking-tight sm:text-base">DesignPro</span>
          </a>

          <nav
            className="nav-pill hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 lg:flex"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((link) => (
              <a
                key={link.route}
                href={routeHref(link.route)}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
                onClick={navClick(link.route)}
              >
                {link.label}
                {"arrow" in link && link.arrow ? (
                  <ArrowRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
                ) : null}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="nav-pill flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu backdrop"
            />
            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(88vw,320px)] flex-col lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-full flex-col border-l border-gray-700 bg-black/95 backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <LogoMark className="h-8 w-8" />
                    <span className="text-sm font-semibold">DesignPro</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white/80"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                  {NAV_ITEMS.map((link, i) => (
                    <motion.a
                      key={link.route}
                      href={routeHref(link.route)}
                      className="flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                      onClick={navClick(link.route)}
                    >
                      {link.label}
                      {"arrow" in link && link.arrow ? (
                        <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />
                      ) : null}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
