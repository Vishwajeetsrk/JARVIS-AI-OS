import { motion } from "framer-motion";
import { PLATFORM_ICONS } from "../constants";
import { fadeUp } from "../lib/fadeUp";

const PLATFORMS = [
  {
    name: "ChatGPT",
    description: "Answers in seconds — but whose perspective shapes the narrative?",
    iconSrc: PLATFORM_ICONS.chatgpt,
  },
  {
    name: "Perplexity",
    description: "Research-grade answers with citations — the new default for discovery.",
    iconSrc: PLATFORM_ICONS.perplexity,
  },
  {
    name: "Google AI",
    description: "Search reimagined — summaries before you click, context before you commit.",
    iconSrc: PLATFORM_ICONS.googleAi,
  },
];

export default function SearchSection() {
  return (
    <section id="how-it-works" className="pt-52 md:pt-64 pb-6 md:pb-9 px-6 md:px-28 text-center">
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6"
      >
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-24">
        AI assistants now shape how people discover ideas, brands, and voices. Your perspective
        needs a home that search engines cannot replace.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-5xl mx-auto">
        {PLATFORMS.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.15 + i * 0.08)}
            className="flex flex-col items-center"
          >
            <div className="mb-6 flex items-center justify-center w-[200px] h-[200px]">
              <img src={platform.iconSrc} alt="" width={96} height={96} className="w-24 h-24" />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{platform.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.4)} className="text-muted-foreground text-sm">
        If you don&apos;t answer the questions, someone else will.
      </motion.p>
    </section>
  );
}
