import { Menu, X } from "lucide-react";
import { useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { NAV_ITEMS } from "../constants";

function LogoMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden
    >
      <path
        d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z"
        fill="#111111"
      />
    </svg>
  );
}

export function Navbar({ onNavigate }: { onNavigate?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    onNavigate?.();
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center">
          <PresetNavLink
            target={{ kind: "section", id: "device" }}
            className="flex items-center"
            aria-label="PureFlow One home"
            onClick={closeMenu}
          >
            <LogoMark />
          </PresetNavLink>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-gray-900 px-2 py-1.5 md:flex">
          {NAV_ITEMS.map((item) =>
            item.section === "device" ? (
              <span
                key={item.label}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900"
                data-editable
              >
                {item.label}
              </span>
            ) : (
              <PresetNavLink
                key={item.label}
                target={{ kind: "section", id: item.section }}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                data-editable
              >
                {item.label}
              </PresetNavLink>
            ),
          )}
        </div>

        <PresetNavLink
          target={{ kind: "section", id: "contact" }}
          className="hidden items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 md:flex"
          data-editable
        >
          <span className="inline-block h-2 w-2 rounded-full bg-green-400" aria-hidden />
          Reserve Yours
        </PresetNavLink>

        <button
          type="button"
          className="p-1 text-gray-900 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed left-0 right-0 top-0 z-40 flex flex-col gap-1 bg-white px-5 pb-6 pt-16 shadow-lg md:hidden">
          {NAV_ITEMS.map((item) => (
            <PresetNavLink
              key={item.label}
              target={{ kind: "section", id: item.section }}
              className="border-b border-gray-100 py-3 text-left text-base font-medium text-gray-800 transition-colors hover:text-gray-500"
              data-editable
              onClick={closeMenu}
            >
              {item.label}
            </PresetNavLink>
          ))}
          <PresetNavLink
            target={{ kind: "section", id: "contact" }}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            data-editable
            onClick={closeMenu}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-green-400" aria-hidden />
            Reserve Yours
          </PresetNavLink>
        </div>
      )}
    </>
  );
}
