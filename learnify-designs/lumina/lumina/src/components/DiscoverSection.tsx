import { motion } from "motion/react";

const PILLARS = [
  {
    title: "Ambient clarity",
    copy: "Soft gradients and motion-led layouts keep focus on the story without visual noise.",
  },
  {
    title: "Living surfaces",
    copy: "Liquid glass refracts the footage beneath — depth without sacrificing legibility.",
  },
  {
    title: "Guided scroll",
    copy: "Footer navigation anchors Discover and Mission so visitors always know where to go.",
  },
];

export default function DiscoverSection() {
  return (
    <section
      id="discover"
      className="section-scrim relative scroll-mt-8 px-6 py-28 sm:px-10 md:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-white/40"
        >
          Discover
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="max-w-3xl text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl"
        >
          See how light shapes every interaction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/50"
        >
          Lumina pairs full-bleed video with editorial sections — scroll to uncover the craft behind
          the atmosphere.
        </motion.p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-medium tracking-[-0.01em]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{pillar.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
