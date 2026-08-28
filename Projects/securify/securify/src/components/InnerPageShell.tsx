import type { ReactNode } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { SecurifyNavbar } from "./SecurifyNavbar";

export function InnerPageShell({
  children,
  title,
  eyebrow,
}: {
  children: ReactNode;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <SecurifyNavbar variant="page" />
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-8 md:px-10 md:pt-12">
        {eyebrow && <p className="mb-3 text-xs lowercase tracking-wide text-white/50">{eyebrow}</p>}
        <h1 className="hero-title mb-10 text-4xl font-medium lowercase md:text-5xl">{title}</h1>
        {children}
      </main>
      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 text-sm text-white/50">
          <span>© 2026 securify</span>
          <div className="flex flex-wrap gap-4 lowercase">
            <PresetNavLink target={{ kind: "route", path: "privacy" }} className="hover:text-white">
              privacy
            </PresetNavLink>
            <PresetNavLink target={{ kind: "route", path: "terms" }} className="hover:text-white">
              terms
            </PresetNavLink>
            <PresetNavLink target={{ kind: "route", path: "support" }} className="hover:text-white">
              support
            </PresetNavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
