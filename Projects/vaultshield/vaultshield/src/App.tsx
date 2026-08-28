import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PresetHashRouter } from "../../_shared/components/PresetHashRouter";
import { PresetNavLink } from "../../_shared/components/PresetNavLink";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import { HelpPage } from "./pages/HelpPage";
import { HomePage } from "./pages/HomePage";
import { InstallPage } from "./pages/InstallPage";
import { NewsPage } from "./pages/NewsPage";
import { PlansPage } from "./pages/PlansPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";

const NAV: { label: string; route: string }[] = [
  { label: "Vault", route: "" },
  { label: "Plans", route: "plans" },
  { label: "Install", route: "install" },
  { label: "News", route: "news" },
  { label: "Help", route: "help" },
];

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
    >
      <path
        d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z"
        fill="#192837"
      />
    </svg>
  );
}

function VaultHeader({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <>
      <header className="relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="flex items-center gap-2"
          aria-label="VaultShield home"
          onClick={() => setMenuOpen(false)}
        >
          <Logo />
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            VaultShield
          </span>
        </PresetNavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((link) => (
            <PresetNavLink
              key={link.route}
              target={{ kind: "route", path: link.route }}
              className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </PresetNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <PresetNavLink
            target={{ kind: "route", path: "plans" }}
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white"
            style={{ background: "var(--color-accent)" }}
          >
            Start For Free
          </PresetNavLink>
          <PresetNavLink
            target={{ kind: "route", path: "help" }}
            className="rounded-full px-5 py-2.5 text-sm font-medium"
            style={{ background: "var(--color-login-bg)", color: "var(--color-text)" }}
          >
            Sign In
          </PresetNavLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(25,40,55,0.35)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu backdrop"
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-[100dvh] flex-col md:hidden"
              style={{
                width: "min(88vw, 360px)",
                background: "#CFC8C5",
                boxShadow: "-12px 0 48px rgba(25,40,55,0.18)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[#192837]/10 px-5 py-4">
                <Logo />
                <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 px-5 py-6">
                {NAV.map((link, i) => (
                  <motion.div
                    key={link.route}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07 }}
                  >
                    <PresetNavLink
                      target={{ kind: "route", path: link.route }}
                      className="block py-3 text-base font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </PresetNavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-[#192837]/10 p-5">
                <PresetNavLink
                  target={{ kind: "route", path: "plans" }}
                  className="rounded-full px-5 py-2.5 text-center text-sm font-medium text-white"
                  style={{ background: "var(--color-accent)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Start For Free
                </PresetNavLink>
                <PresetNavLink
                  target={{ kind: "route", path: "help" }}
                  className="rounded-full px-5 py-2.5 text-center text-sm font-medium"
                  style={{ background: "var(--color-login-bg)", color: "var(--color-text)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </PresetNavLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function VaultFooter() {
  return (
    <footer className="relative z-10 mx-auto max-w-[1280px] border-t border-[#192837]/10 px-5 py-8 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm opacity-70">
        <span>© 2026 VaultShield</span>
        <div className="flex flex-wrap gap-4">
          <PresetNavLink target={{ kind: "route", path: "privacy" }} className="hover:opacity-100">
            Privacy
          </PresetNavLink>
          <PresetNavLink target={{ kind: "route", path: "terms" }} className="hover:opacity-100">
            Terms
          </PresetNavLink>
          <PresetNavLink target={{ kind: "route", path: "help" }} className="hover:opacity-100">
            Support
          </PresetNavLink>
        </div>
      </div>
    </footer>
  );
}

function VaultShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="hero-mesh relative min-h-screen w-full">
      <VaultHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <VaultFooter />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <PresetHashRouter
      routes={{
        "": (
          <VaultShell>
            <HomePage />
          </VaultShell>
        ),
        plans: (
          <VaultShell>
            <PlansPage />
          </VaultShell>
        ),
        install: (
          <VaultShell>
            <InstallPage />
          </VaultShell>
        ),
        news: (
          <VaultShell>
            <NewsPage />
          </VaultShell>
        ),
        help: (
          <VaultShell>
            <HelpPage />
          </VaultShell>
        ),
        privacy: (
          <VaultShell>
            <PrivacyPage />
          </VaultShell>
        ),
        terms: (
          <VaultShell>
            <TermsPage />
          </VaultShell>
        ),
      }}
    />
  );
}
