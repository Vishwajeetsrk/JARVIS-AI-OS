import type { MouseEvent } from "react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";

export function Navbar() {
  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-canvas/90 px-4 py-4 backdrop-blur-md md:px-10">
      <a href={routeHref("")} onClick={navClick("")} className="text-sm font-medium text-white/90">
        Max Reed
      </a>
      <nav className="hidden gap-6 sm:flex">
        {NAV_ITEMS.map((link) => (
          <a
            key={link.route}
            href={routeHref(link.route)}
            onClick={navClick(link.route)}
            className="text-sm text-white/60 transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
