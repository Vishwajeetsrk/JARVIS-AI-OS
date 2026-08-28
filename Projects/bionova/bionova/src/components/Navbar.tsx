import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="relative z-20 flex items-center justify-between px-5 py-5 lg:px-16">
        <a
          href={routeHref("")}
          onClick={navClick("")}
          className="font-heading text-xl font-bold tracking-tight"
          aria-label="BIONOVA home"
        >
          BIONOVA
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.route}
              href={routeHref(link.route)}
              onClick={navClick(link.route)}
              className="text-sm font-semibold text-foreground/70 transition-opacity hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={routeHref("contact")}
            onClick={navClick("contact")}
            className="text-sm font-semibold text-foreground/70 transition-opacity hover:text-foreground"
          >
            Log in
          </a>
          <a
            href={routeHref("contact")}
            onClick={navClick("contact")}
            className="rounded-full bg-hero-btn px-5 py-2.5 text-sm font-semibold text-white"
          >
            Request a call
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-heading text-xl font-bold tracking-tight">BIONOVA</span>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-2 px-5 py-6">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.route}
                href={routeHref(link.route)}
                onClick={navClick(link.route)}
                className="py-3 text-lg font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={routeHref("contact")}
              onClick={navClick("contact")}
              className="py-3 text-lg font-semibold text-foreground/70"
            >
              Log in
            </a>
          </nav>
          <div className="border-t border-foreground/10 p-5">
            <a
              href={routeHref("contact")}
              onClick={navClick("contact")}
              className="block rounded-full bg-hero-btn py-3 text-center text-sm font-semibold text-white"
            >
              Request a call
            </a>
          </div>
        </div>
      )}
    </>
  );
}
