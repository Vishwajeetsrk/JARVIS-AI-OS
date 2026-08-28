import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";
import { ZenithLogo } from "./ZenithLogo";

export function ZenithNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a href={routeHref("")} onClick={navClick("")} aria-label="ZENITH REALTY home">
            <ZenithLogo />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.route}
                href={routeHref(item.route)}
                onClick={navClick(item.route)}
                className="flex items-center gap-1 text-[13px] font-medium tracking-tight text-[#141414] transition-opacity hover:opacity-60"
              >
                {item.label}
                {"chevron" in item && item.chevron ? <ChevronDown className="size-3.5" /> : null}
                {"badge" in item && item.badge ? (
                  <span className="ml-1 rounded-xs bg-black px-1.5 py-0.5 text-[9px] leading-none text-white">
                    {item.badge}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>

          <a
            href={routeHref("contact")}
            onClick={navClick("contact")}
            className="hidden items-center gap-2 border border-black/10 bg-white/80 px-6 py-2.5 text-[13px] font-medium backdrop-blur-md transition-colors hover:bg-white lg:inline-flex"
          >
            <Home className="size-4" />
            Post a property
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border border-black/10 bg-white/80 lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-black/20 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,320px)] flex-col bg-[#F8F8F8] p-8 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <ZenithLogo />
                <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.route}
                    href={routeHref(item.route)}
                    onClick={navClick(item.route)}
                    className="text-[15px] font-medium text-[#141414]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={routeHref("contact")}
                onClick={navClick("contact")}
                className="mt-auto flex items-center justify-center gap-2 bg-[#141414] px-6 py-4 text-[13px] font-medium text-white"
              >
                <Home className="size-4" />
                Post a property
              </a>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
