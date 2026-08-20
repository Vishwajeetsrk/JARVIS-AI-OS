import { useEffect } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { NAV_LINKS } from "../constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <nav className="flex h-full flex-col items-center justify-center gap-8" aria-label="Mobile">
        {NAV_LINKS.map((link) =>
          "route" in link ? (
            <PresetNavLink
              key={link.label}
              target={{ kind: "route", path: link.route }}
              className="text-3xl font-light capitalize text-white"
              onClick={onClose}
            >
              {link.label}
            </PresetNavLink>
          ) : (
            <PresetNavLink
              key={link.label}
              target={{ kind: "section", id: link.section }}
              className="text-3xl font-light capitalize text-white"
              onClick={onClose}
            >
              {link.label}
            </PresetNavLink>
          ),
        )}
      </nav>
    </div>
  );
}
