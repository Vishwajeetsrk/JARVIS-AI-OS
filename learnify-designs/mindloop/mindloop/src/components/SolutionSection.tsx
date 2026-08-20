import { motion } from "framer-motion";
import { VIDEOS } from "../constants";
import { fadeUp } from "../lib/fadeUp";

const FEATURES = [
  {
    title: "Curated Feed",
    description: "Hand-picked stories and insights delivered on your schedule — depth over noise.",
  },
  {
    title: "Writer Tools",
    description: "Compose, schedule, and analyze newsletters with a workflow built for clarity.",
  },
  {
    title: "Community",
    description: "Readers and writers in one loop — replies, threads, and shared discovery.",
  },
  {
    title: "Distribution",
    description: "Reach inboxes, archives, and syndication channels from a single dashboard.",
  },
];

export default function SolutionSection() {
  return (
    <section id="use-cases" className="py-32 md:py-44 px-6 md:px-28 border-t border-border/30">
      <motion.p
        {...fadeUp(0)}
        className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4"
      >
        SOLUTION
      </motion.p>
      <motion.h2
        {...fadeUp(0.08)}
        className="text-4xl md:text-6xl font-medium tracking-[-1px] mb-12 max-w-3xl"
      >
        The platform for <span className="font-serif italic font-normal">meaningful</span> content
      </motion.h2>

      <motion.div {...fadeUp(0.15)} className="rounded-2xl overflow-hidden aspect-[3/1] mb-16">
        <video
          src={VIDEOS.solution}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {FEATURES.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.2 + i * 0.06)}>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
