import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { FutureLogo } from "./FutureLogo";

const NAV_LINKS = [
  { label: "Home", route: "" },
  { label: "Services", route: "services" },
  { label: "Reviews", route: "reviews" },
  { label: "Contact us", route: "contact" },
] as const;

const navLinkClass =
  "font-cabin text-sm font-medium text-white/80 transition-colors hover:text-white";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-30 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10">
        <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 sm:py-4">
          <PresetNavLink
            target={{ kind: "route", path: "" }}
            className="flex items-center gap-2.5"
            aria-label="Datacore home"
            onClick={closeMenu}
          >
            <FutureLogo className="h-9 w-9 shrink-0" />
            <span className="text-base font-semibold tracking-tight text-white" data-editable>
              Datacore
            </span>
          </PresetNavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <PresetNavLink
                key={link.route}
                target={{ kind: "route", path: link.route }}
                className={navLinkClass}
              >
                <span data-editable>{link.label}</span>
              </PresetNavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className={`${navLinkClass} rounded-full px-4 py-2 hover:bg-white/5`}
            >
              <span data-editable>Sign In</span>
            </PresetNavLink>
            <PresetNavLink target={{ kind: "route", path: "services" }}>
              <button
                type="button"
                className="rounded-full bg-datacore-purple px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <span data-editable>Get Started</span>
              </button>
            </PresetNavLink>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-datacore-dark/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-label="Close menu backdrop"
            />
            <motion.aside
              className="glass-panel fixed right-0 top-0 z-50 flex h-[100dvh] w-[min(88vw,360px)] flex-col lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <FutureLogo className="h-8 w-8" />
                <button type="button" onClick={closeMenu} aria-label="Close menu">
                  <X className="h-5 w-5 text-white" />
                </button>
              </motion.div>

              <nav className="flex flex-1 flex-col gap-1 px-5 py-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.route}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06 }}
                  >
                    <PresetNavLink
                      target={{ kind: "route", path: link.route }}
                      className="block py-3 font-cabin text-base font-medium text-white/90"
                      onClick={closeMenu}
                    >
                      <span data-editable>{link.label}</span>
                    </PresetNavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-white/10 p-5">
                <PresetNavLink
                  target={{ kind: "route", path: "contact" }}
                  className="glass-pill rounded-full px-5 py-3 text-center text-sm font-medium text-white"
                  onClick={closeMenu}
                >
                  <span data-editable>Sign In</span>
                </PresetNavLink>
                <PresetNavLink target={{ kind: "route", path: "services" }} onClick={closeMenu}>
                  <button
                    type="button"
                    className="w-full rounded-full bg-datacore-purple px-5 py-3 text-sm font-semibold text-white"
                  >
                    <span data-editable>Get Started</span>
                  </button>
                </PresetNavLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
