import { motion } from "motion/react";
import { VIDEOS } from "../constants";
import { HlsVideo } from "./HlsVideo";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: delay > 0.15 ? 30 : 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden scroll-mt-24"
    >
      <HlsVideo src={VIDEOS.ctaHls} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 z-[1] bg-black/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-2px] text-foreground mb-6"
        >
          Ready to <span className="font-accent italic font-normal">Transform</span> Your Brand?
        </motion.h2>
        <motion.p {...fadeUp(0.15)} className="text-lg text-muted-foreground mb-10">
          Let&apos;s build something extraordinary together.
        </motion.p>
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full bg-foreground px-10 py-4 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            START A PROJECT
          </button>
          <button
            type="button"
            className="liquid-glass-strong rounded-full px-10 py-4 text-sm font-medium text-foreground hover:scale-[1.03] transition-transform"
          >
            BOOK A CALL
          </button>
        </motion.div>
      </div>
    </section>
  );
}
