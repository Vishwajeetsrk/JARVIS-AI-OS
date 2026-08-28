import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "Discover", targetId: "discover" },
  { label: "Mission", targetId: "mission" },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <motion.footer
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-5 sm:px-6 sm:pb-6"
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      <motion.div
        className="liquid-glass pointer-events-auto flex w-full max-w-4xl flex-col items-center gap-4 rounded-[28px] px-5 py-4 sm:flex-row sm:justify-between sm:px-8 sm:py-5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium tracking-[-0.02em] text-white">Lumina</span>
          <span className="hidden text-xs text-white/35 sm:inline">© 2026</span>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Footer">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.targetId}
              type="button"
              onClick={() => scrollToSection(link.targetId)}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:text-[11px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.button>
          ))}
        </nav>

        <motion.button
          type="button"
          className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors hover:bg-white/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get started
        </motion.button>
      </motion.div>
    </motion.footer>
  );
}
