import type { MouseEvent } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { navigateToSection, sectionHref } from "../../../_shared/preset-site-routing";
import LogoMark from "./LogoMark";
import { NAV_ITEMS } from "../routes";

export default function Navbar() {
  const navClick = (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToSection(sectionId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 bg-transparent">
      <div className="flex items-center justify-between gap-6">
        <a
          href={sectionHref("home")}
          onClick={navClick("home")}
          className="flex items-center gap-3 shrink-0"
          aria-label="Mindloop home"
        >
          <LogoMark />
          <span className="font-semibold text-foreground">Mindloop</span>
        </a>

        <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
          {NAV_ITEMS.map((link, i) => (
            <span key={link.sectionId} className="flex items-center gap-2">
              {i > 0 && <span className="text-muted-foreground/50">•</span>}
              <a
                href={sectionHref(link.sectionId)}
                onClick={navClick(link.sectionId)}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {[Instagram, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href={sectionHref("contact")}
              onClick={navClick("contact")}
              aria-label="Social"
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
