import { linkToSectionId, scrollToSection, sectionHref } from "../lib/scroll";

const FOOTER_LINKS = ["Privacy", "Terms"] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-white/40">© 2026 Power AI. All rights reserved.</p>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link}
              href={sectionHref(link)}
              onClick={(e) => scrollToSection(e, linkToSectionId(link))}
              className="text-xs text-white/50 transition-colors hover:text-white/80"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
