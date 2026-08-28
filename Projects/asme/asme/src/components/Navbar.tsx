import type { MouseEvent } from "react";
import { Globe } from "lucide-react";
import { navigateToRoute, routeHref } from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";

export default function Navbar() {
  const navClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
  };

  return (
    <nav className="relative z-20 px-6 py-6">
      <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
        <div className="flex items-center gap-8">
          <a
            href={routeHref("")}
            onClick={navClick("")}
            className="flex items-center gap-2 text-lg font-semibold text-white"
            aria-label="Asme home"
          >
            <Globe className="h-6 w-6" aria-hidden />
            Asme
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.route}
                href={routeHref(link.route)}
                onClick={navClick(link.route)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={routeHref("pricing")}
            onClick={navClick("pricing")}
            className="text-sm font-medium text-white transition-colors hover:text-white/90"
          >
            Sign Up
          </a>
          <a
            href={routeHref("contact")}
            onClick={navClick("contact")}
            className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
