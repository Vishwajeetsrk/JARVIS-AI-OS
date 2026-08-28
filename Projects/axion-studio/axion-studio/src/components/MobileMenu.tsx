import type { MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import {
  handlePresetNavClick,
  resolveNavTarget,
  sectionHref,
} from "../../../_shared/preset-site-routing";
import { NAV_ITEMS } from "../routes";
import { TextRoll } from "./TextRoll";
import { useLondonTime } from "../hooks/useLondonTime";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const londonTime = useLondonTime();

  const navClick = (section: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { section }));
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 rounded-2xl bg-white px-6 py-8 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600">
          <span>{londonTime} in London</span>
        </div>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.section}
              href={sectionHref(link.section)}
              className="text-[28px] font-medium text-gray-900 sm:text-[32px]"
              onClick={navClick(link.section)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={sectionHref("connect")}
          onClick={navClick("connect")}
          className="group mt-10 flex w-full items-center justify-between rounded-full bg-[#F26522] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#e05a1a]"
        >
          <TextRoll text="Start a project" heightClass="h-[24px]" />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
            <ArrowRight size={18} className="text-[#F26522]" />
          </span>
        </a>
      </div>
    </div>
  );
}
