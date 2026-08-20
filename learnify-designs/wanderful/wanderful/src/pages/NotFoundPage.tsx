import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  handlePresetNavClick,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { goldEase } from "../constants";

export function NotFoundPage() {
  const homeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { route: "" }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f3ebe4] font-sans selection:bg-black selection:text-white">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: goldEase }}
        className="text-[120px] font-light leading-none tracking-[-0.04em] text-black/10 select-none"
      >
        404
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: goldEase }}
        className="text-2xl font-light tracking-tight text-black mt-4 mb-3"
      >
        Page not found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: goldEase }}
        className="text-sm text-black/40 mb-10"
      >
        This page doesn&apos;t exist yet.
      </motion.p>
      <motion.a
        href={routeHref("")}
        onClick={homeClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6, ease: goldEase }}
        className="text-[13px] tracking-widest font-medium text-black border-b border-black/20 pb-0.5 hover:border-black transition-colors duration-200"
      >
        Back to home
      </motion.a>
    </div>
  );
}
