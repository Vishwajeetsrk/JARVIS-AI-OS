import { handlePresetNavClick, sectionHref } from "../../../_shared/preset-site-routing";
import { NAV_LINKS } from "../constants";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
      <a
        href={sectionHref("hero")}
        className="text-xl font-semibold tracking-tight font-body text-foreground"
        onClick={(e) => handlePresetNavClick(e, "hero", true)}
      >
        VIRALMEDIA
      </a>

      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(({ label, section }) => (
          <a
            key={label}
            href={sectionHref(section)}
            className="px-4 py-2 text-sm font-medium text-foreground rounded-sm hover:bg-white/10 transition-colors"
            onClick={(e) => handlePresetNavClick(e, section, true)}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="liquid-glass-strong rounded-full px-6 py-2.5 text-sm font-medium text-foreground hover:scale-[1.03] transition-transform"
        onClick={(e) => handlePresetNavClick(e, "cta", true)}
      >
        Get Started
      </button>
    </header>
  );
}
