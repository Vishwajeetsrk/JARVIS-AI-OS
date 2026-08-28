import { Search, User } from "lucide-react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { NAV_ITEMS } from "../routes";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activePath: string;
};

export default function MobileMenu({ open, onClose, activePath }: MobileMenuProps) {
  return (
    <div
      className={`absolute left-0 right-0 top-[72px] z-40 border-b border-gray-800 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${
        open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <div className="flex flex-col px-4 py-4">
        {NAV_ITEMS.map((link, i) => {
          const isActive = activePath === link.route;
          return (
            <PresetNavLink
              key={link.route}
              target={{ kind: "route", path: link.route }}
              onClick={onClose}
              className="rounded-lg py-3 px-3 text-sm transition-colors hover:bg-gray-800/50"
              style={{
                transform: open ? "translateX(0)" : "translateX(-8px)",
                transitionDelay: open ? `${i * 50}ms` : "0ms",
              }}
            >
              {isActive ? `/ ${link.label}` : link.label}
            </PresetNavLink>
          );
        })}

        <div className="mt-4 flex flex-col gap-3 border-t border-gray-800 pt-4 sm:hidden">
          <button
            type="button"
            className="liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Search className="h-[18px] w-[18px]" />
            Search
          </button>
          <button
            type="button"
            className="liquid-glass inline-flex h-10 w-10 items-center justify-center self-center rounded-full"
            aria-label="Profile"
          >
            <User className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
