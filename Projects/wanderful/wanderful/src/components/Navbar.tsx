import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Star, X } from "lucide-react";
import {
  handlePresetNavClick,
  navigateToRoute,
  presetNavHref,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { usePresetHashRoute } from "../../../_shared/hooks/usePresetHashRoute";
import { goldEase } from "../constants";
import { DESKTOP_LINKS, MOBILE_LINKS } from "../routes";

function isLinkActive(path: string, route: string): boolean {
  if (route === "") return path === "" || path === "home";
  if (route === "destinations") {
    return path === "destinations" || path.startsWith("destinations/");
  }
  return path === route;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePresetHashRoute("");
  const isHome = path === "" || path === "home";
  const isTourDetail = path.startsWith("destinations/") && path !== "destinations";

  const starColor = menuOpen
    ? "text-black"
    : isTourDetail
      ? "text-white"
      : isHome
        ? "max-[850px]:text-white min-[851px]:text-black"
        : "text-black";

  const menuBtnColor = isHome || isTourDetail ? "text-white" : "text-black";

  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    handlePresetNavClick(e, resolveNavTarget("", { route }));
  };

  return (
    <>
      <Star
        size={30}
        fill="currentColor"
        strokeWidth={0}
        className={`fixed z-[1001] ${starColor}`}
        style={{ top: 30, left: 30 }}
        aria-hidden
      />

      <button
        type="button"
        className={`fixed right-[30px] top-[30px] z-[300] transition-transform duration-300 ease-out hover:scale-110 ${menuBtnColor}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <Menu size={32} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: goldEase }}
            className="fixed inset-0 z-[200] flex flex-col bg-white"
          >
            <button
              type="button"
              className="absolute right-[30px] top-[30px] transition-transform duration-300 hover:rotate-90"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-1 flex-col items-center justify-center gap-2">
              {MOBILE_LINKS.map((link, i) => {
                const active = isLinkActive(path, link.route);
                return (
                  <motion.a
                    key={link.route}
                    href={routeHref(link.route)}
                    onClick={navClick(link.route)}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.55, ease: goldEase }}
                    className="text-5xl font-light tracking-tighter hover:italic md:text-7xl"
                  >
                    {active && <span className="mr-1">/</span>}
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {!isTourDetail && (
        <nav className="fixed bottom-10 left-10 z-[100] hidden min-[851px]:flex flex-col gap-1">
          {DESKTOP_LINKS.map((link, i) => {
            const active = isLinkActive(path, link.route);
            return (
              <motion.a
                key={link.route}
                href={presetNavHref(resolveNavTarget("", { route: link.route }))}
                onClick={navClick(link.route)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: goldEase }}
                className="text-[13px] font-medium tracking-widest"
              >
                {active && <span className="mr-0.5">/</span>}
                {link.label}
              </motion.a>
            );
          })}
        </nav>
      )}
    </>
  );
}
