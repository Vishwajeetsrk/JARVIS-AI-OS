import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import {
  handlePresetNavClick,
  resolveNavTarget,
  routeHref,
} from "../../../_shared/preset-site-routing";
import { goldEase } from "../constants";

type StubPageProps = {
  title: string;
  description: string;
};

export function StubPage({ title, description }: StubPageProps) {
  const homeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    handlePresetNavClick(e, resolveNavTarget("", { route: "" }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f3ebe4] px-6 font-sans selection:bg-black selection:text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: goldEase }}
        className="text-3xl font-light tracking-tight text-[#1c1c1c] md:text-4xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: goldEase }}
        className="mt-4 max-w-md text-center text-sm text-black/50 leading-relaxed"
      >
        {description}
      </motion.p>
      <motion.a
        href={routeHref("")}
        onClick={homeClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: goldEase }}
        className="mt-10 text-[13px] font-medium tracking-widest text-black border-b border-black/20 pb-0.5 hover:border-black transition-colors duration-200"
      >
        Back to home
      </motion.a>
    </div>
  );
}
