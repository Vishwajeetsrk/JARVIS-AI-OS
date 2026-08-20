import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { linkToSectionId, scrollToSection, sectionHref } from "../lib/scroll";

const NAV_ITEMS = [
  { label: "Ecosystem", hasDropdown: false },
  { label: "Economics", hasDropdown: true },
  { label: "Developers", hasDropdown: false },
  { label: "Governance", hasDropdown: true },
] as const;

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <a
        href={sectionHref("home")}
        onClick={(e) => scrollToSection(e, "home")}
        className="hidden font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)] md:block"
      >
        RIVR
      </a>
      <div className="flex-1 hidden md:block" />

      <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
        {NAV_ITEMS.map(({ label, hasDropdown }) => (
          <li key={label}>
            <a
              href={sectionHref(label)}
              onClick={(e) => scrollToSection(e, linkToSectionId(label))}
              className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
            >
              {label}
              {hasDropdown && (
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={sectionHref("home")}
        onClick={(e) => scrollToSection(e, "home")}
        className="md:hidden font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]"
      >
        RIVR
      </a>

      <div className="flex-1 flex justify-end">
        <motion.a
          href={sectionHref("contact")}
          onClick={(e) => scrollToSection(e, "contact")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.a>
      </div>
    </nav>
  );
}
