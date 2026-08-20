import type { MouseEvent } from "react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";

export function WanderfulHeader() {
  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-8">
      <a
        href={routeHref("")}
        onClick={navClick("")}
        className="text-[17px] font-semibold tracking-tight"
      >
        Wanderful<sup className="ml-0.5 text-[0.55em]">TM</sup>
      </a>

      <nav
        className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex"
        aria-label="Primary"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.route}
            href={routeHref(item.route)}
            onClick={navClick(item.route)}
            className="rounded-full px-4 py-1.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors duration-200 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href={routeHref("roaming")}
        onClick={navClick("roaming")}
        className="liquid-glass hidden rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 transition-colors hover:text-white md:inline-flex"
      >
        GET ROAMING
      </a>

      <a
        href={routeHref("roaming")}
        onClick={navClick("roaming")}
        className="liquid-glass rounded-full px-5 py-2.5 font-body text-[11px] font-medium tracking-[0.12em] text-white/90 md:hidden"
      >
        GET ROAMING
      </a>
    </header>
  );
}
