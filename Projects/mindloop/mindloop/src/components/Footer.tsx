import type { MouseEvent } from "react";
import {
  navigateToRoute,
  navigateToSection,
  routeHref,
  sectionHref,
} from "../../../_shared/preset-site-routing";

const FOOTER_LINKS = [
  { label: "Privacy", route: "privacy" },
  { label: "Terms", route: "terms" },
  { label: "Contact", sectionId: "contact" },
] as const;

export default function Footer() {
  const routeClick = (route: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToRoute(route);
  };

  const sectionClick = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };

  return (
    <footer
      id="contact"
      className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/30 scroll-mt-24"
    >
      <p className="text-muted-foreground text-sm">© 2026 Mindloop. All rights reserved.</p>
      <div className="flex items-center gap-6">
        {FOOTER_LINKS.map((link) =>
          "route" in link ? (
            <a
              key={link.route}
              href={routeHref(link.route)}
              onClick={routeClick(link.route)}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.sectionId}
              href={sectionHref(link.sectionId)}
              onClick={sectionClick(link.sectionId)}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ),
        )}
      </div>
    </footer>
  );
}
