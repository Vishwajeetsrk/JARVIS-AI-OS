import { motion } from "framer-motion";
import { VIDEOS } from "../constants";
import { fadeUp } from "../lib/fadeUp";
import { scrollToSubscribe } from "../lib/subscribe";
import { navigateToSection } from "../../../_shared/preset-site-routing";
import HlsVideo from "./HlsVideo";
import LogoMark from "./LogoMark";

export default function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-44 px-6 overflow-hidden border-t border-border/30"
    >
      <HlsVideo src={VIDEOS.ctaHls} className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute inset-0 bg-background/45 z-[1]" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <LogoMark outerClass="w-10 h-10" innerClass="w-5 h-5" />
        </motion.div>
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-5xl font-medium tracking-[-1px] mb-4"
        >
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="text-muted-foreground mb-10">
          Join thousands of readers and writers building a quieter, more meaningful web.
        </motion.p>
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToSubscribe}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Subscribe Now
          </button>
          <button
            type="button"
            onClick={() => navigateToSection("contact")}
            className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
          >
            Start Writing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
