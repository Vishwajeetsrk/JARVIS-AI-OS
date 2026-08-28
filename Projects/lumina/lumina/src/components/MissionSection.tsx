import { motion } from "motion/react";

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="section-scrim relative scroll-mt-8 px-6 py-28 sm:px-10 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40"
        >
          Mission
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-3xl font-medium leading-snug tracking-[-0.02em] sm:text-4xl md:text-5xl"
        >
          We build interfaces that feel like light passing through glass — precise, calm, and
          unmistakably human.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-6 text-base leading-relaxed text-white/50 md:text-lg"
        >
          Our mission is to help brands launch with cinematic presence: one continuous video canvas,
          intentional typography in Helvetica, and navigation that lives in the footer — never
          competing with the hero.
        </motion.p>
      </div>
    </section>
  );
}
