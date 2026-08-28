import { motion } from "framer-motion";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { HERO_VIDEO_URL } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:px-5 sm:py-2.5"
          >
            <span className="rounded-full bg-datacore-purple px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white sm:text-xs">
              New
            </span>
            <span className="font-cabin text-xs text-white/90 sm:text-sm" data-editable>
              Say Hello to Datacore v3.2
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-text-shadow text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            data-editable
          >
            Hotel booking built for modern teams{" "}
            <span className="font-serif italic font-normal">and</span> unforgettable stays
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hero-text-shadow mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg"
            data-editable
          >
            Streamline reservations, unlock revenue insights, and deliver five-star guest
            experiences from one purple-powered platform.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
          >
            <PresetNavLink target={{ kind: "route", path: "contact" }}>
              <button
                type="button"
                className="rounded-full bg-datacore-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-datacore-purple/30 transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5"
              >
                <span data-editable>Book a Free Demo</span>
              </button>
            </PresetNavLink>
            <PresetNavLink target={{ kind: "route", path: "services" }}>
              <button
                type="button"
                className="glass-pill rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5"
              >
                <span data-editable>Get Started Now</span>
              </button>
            </PresetNavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
