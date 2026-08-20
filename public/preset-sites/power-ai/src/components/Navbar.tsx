import { Menu, X } from "lucide-react";
import { useState } from "react";
import { linkToSectionId, scrollToSection, sectionHref } from "../lib/scroll";

const NAV_LINKS = ["Features", "Solutions", "Plans", "Learning"] as const;
const LOGO_SRC = `${import.meta.env.BASE_URL}logo.svg`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-5 py-5 sm:px-8 md:px-12">
        <a
          href={sectionHref("home")}
          onClick={(e) => scrollToSection(e, "home")}
          className="flex items-center gap-3"
          aria-label="Power AI home"
        >
          <img
            src={LOGO_SRC}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-cover"
          />
          <span className="font-display text-sm font-semibold tracking-tight text-foreground/90">
            Power AI
          </span>
        </a>

        <nav className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={sectionHref(link)}
              onClick={(e) => scrollToSection(e, linkToSectionId(link))}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </header>

      {menuOpen && (
        <div className="relative z-50 border-t border-white/10 bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={sectionHref(link)}
                className="text-sm font-medium text-foreground/80"
                onClick={(e) => {
                  scrollToSection(e, linkToSectionId(link), closeMenu);
                }}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="liquid-glass mt-2 w-full rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
