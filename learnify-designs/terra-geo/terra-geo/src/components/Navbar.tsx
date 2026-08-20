import { ChevronDown, Menu, X } from "lucide-react";
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
    return subscribePresetHashNavigation((path) => {
      setRoute(path);
      setOpen(false);
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <PresetNavLink
          target={{ kind: "route", path: "" }}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-400 text-base">
            🌍
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground" data-editable>
            Terra
          </span>
        </PresetNavLink>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <PresetNavLink
              key={link.path}
              target={{ kind: "route", path: link.path }}
              className={`inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground ${
                route === link.path ? "font-medium text-foreground" : ""
              }`}
              data-editable
            >
              {link.label}
              {link.dropdown ? <ChevronDown className="ml-0.5 h-3.5 w-3.5 opacity-60" /> : null}
            </PresetNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PresetNavLink
            target={{ kind: "route", path: "contact" }}
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            data-editable
          >
            Login
          </PresetNavLink>
          <PresetNavLink
            target={{ kind: "route", path: "contact" }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            data-editable
          >
            Sign Up
          </PresetNavLink>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <PresetNavLink
                  target={{ kind: "route", path: link.path }}
                  className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  data-editable
                >
                  {link.label}
                  {link.dropdown ? <NavChevron /> : null}
                </PresetNavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium"
              data-editable
            >
              Login
            </PresetNavLink>
            <PresetNavLink
              target={{ kind: "route", path: "contact" }}
              className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              data-editable
            >
              Sign Up
            </PresetNavLink>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavChevron() {
  return <ChevronDown className="ml-1 h-3.5 w-3.5 opacity-60" />;
}
