import { useState } from "react";
import { Menu, X } from "lucide-react";
import { linkToSectionId, scrollToSection, sectionHref } from "../lib/scroll";

const LINKS = ["Work", "Studio", "Archive", "Contact"] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-black/50 px-4 py-4 backdrop-blur-md sm:px-6 md:px-12 md:py-6">
      <a
        href={sectionHref("home")}
        onClick={(e) => scrollToSection(e, "home")}
        className="animate-blur-fade-up text-lg font-semibold tracking-[0.2em] text-white/95 md:text-xl"
        style={{ animationDelay: "0ms" }}
      >
        CINEMATIC CLOUD
      </a>

      <div className="hidden items-center gap-8 lg:flex">
        {LINKS.map((link, i) => (
          <a
            key={link}
            href={sectionHref(link)}
            onClick={(e) => scrollToSection(e, linkToSectionId(link))}
            className="animate-blur-fade-up text-sm text-white/70 transition-colors hover:text-white"
            style={{ animationDelay: `${100 + i * 50}ms` }}
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="animate-blur-fade-up liquid-glass hidden rounded-full px-5 py-2 text-sm font-medium sm:inline-flex"
          style={{ animationDelay: "350ms" }}
        >
          Sign in
        </button>
        <button
          type="button"
          className="animate-blur-fade-up hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:inline-flex"
          style={{ animationDelay: "400ms" }}
        >
          Get access
        </button>
        <button
          type="button"
          className="animate-blur-fade-up liquid-glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          style={{ animationDelay: "350ms" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`transition-all duration-500 ease-out ${
              menuOpen ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Menu className="h-[18px] w-[18px]" />
          </span>
          <span
            className={`absolute transition-all duration-500 ease-out ${
              menuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-50 opacity-0"
            }`}
          >
            <X className="h-[18px] w-[18px]" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link}
                href={sectionHref(link)}
                className="text-sm text-white/80"
                onClick={(e) => scrollToSection(e, linkToSectionId(link), closeMenu)}
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
            >
              Get access
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
