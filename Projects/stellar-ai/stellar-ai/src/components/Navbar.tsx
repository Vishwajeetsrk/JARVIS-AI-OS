import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import {
  getPresetRoutePath,
  subscribePresetHashNavigation,
} from "../../../_shared/preset-site-routing";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(getPresetRoutePath());
    return subscribePresetHashNavigation(setRoute);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <PresetNavLink target={{ kind: "route", path: "" }} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            <Sparkles className="h-4 w-4 text-violet-300" strokeWidth={1.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Stellar<span className="text-white/50">.ai</span>
          </span>
        </PresetNavLink>

        <nav
          className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.path}
              target={{ kind: "route", path: link.path }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${
                route === link.path ? "bg-white/10 text-white" : "text-white/75"
              }`}
            >
              {link.label}
            </PresetNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <PresetNavLink
            target={{ kind: "route", path: "learn-hub" }}
            className="text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Sign in
          </PresetNavLink>
          <PresetNavLink
            target={{ kind: "route", path: "pricing" }}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Get started
          </PresetNavLink>
        </div>

        <button
          type="button"
          className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="liquid-glass mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-2xl p-3 md:hidden"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.path}
              target={{ kind: "route", path: link.path }}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </PresetNavLink>
          ))}
          <PresetNavLink
            target={{ kind: "route", path: "pricing" }}
            className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-black"
            onClick={() => setOpen(false)}
          >
            Get started
          </PresetNavLink>
        </nav>
      )}
    </header>
  );
}
