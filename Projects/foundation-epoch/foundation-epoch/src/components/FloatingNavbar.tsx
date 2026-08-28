import { motion } from "motion/react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Home", route: "" },
  { label: "Products", route: "products" },
  { label: "Ecosystem", route: "ecosystem" },
  { label: "Docs", route: "docs" },
  { label: "About", route: "about" },
  { label: "Contact", route: "contact" },
] as const;

export function FloatingNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      aria-label="Primary"
    >
      <div
        className={cn(
          "pointer-events-auto flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/20",
          "bg-white/10 px-2 py-2 shadow-lg backdrop-blur-xl",
        )}
      >
        {NAV_ITEMS.map((item) => (
          <PresetNavLink
            key={item.route || "home"}
            target={{ kind: "route", path: item.route }}
            className={cn(
              "rounded-full px-4 py-2.5 text-sm font-medium text-white/90 transition-colors sm:px-5",
              "hover:bg-white/15 hover:text-white",
            )}
          >
            {item.label}
          </PresetNavLink>
        ))}
      </div>
    </motion.nav>
  );
}
