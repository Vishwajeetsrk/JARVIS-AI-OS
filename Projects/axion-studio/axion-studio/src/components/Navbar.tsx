import type { MouseEvent } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import {
  handlePresetNavClick,
  resolveNavTarget,
  sectionHref,
} from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";
import { TextRoll } from "./TextRoll";
import { useLondonTime } from "../hooks/useLondonTime";

type NavbarProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function Navbar({ menuOpen, onMenuToggle }: NavbarProps) {
  const londonTime = useLondonTime();

  const navClick = (section: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { section }));
  };

  return (
    <nav className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
      <div className="flex items-center justify-between rounded-full bg-white p-[5px]">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={sectionHref("hero")}
            onClick={navClick("hero")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold tracking-tight text-white sm:h-10 sm:w-10 sm:text-[11px]"
            aria-label="Axion home"
          >
            AX
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.section}
                href={sectionHref(link.section)}
                onClick={navClick(link.section)}
                className="text-sm text-gray-900 transition-colors duration-300 hover:text-gray-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <span className="hidden text-[13px] text-gray-600 lg:inline">
            Taking on projects for Q1 2026
          </span>
          <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
            <Clock size={14} />
            {londonTime} in London
          </span>
          <a
            href={sectionHref("connect")}
            onClick={navClick("connect")}
            className="group flex items-center gap-2 rounded-full bg-[#F26522] py-2 pl-5 pr-2 text-[13px] font-medium text-white transition-colors hover:bg-[#e05a1a]"
          >
            <TextRoll text="Book a strategy call" />
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
              <ArrowRight size={14} className="text-[#F26522]" />
            </span>
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white md:hidden"
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
