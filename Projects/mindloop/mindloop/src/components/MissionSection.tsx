import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VIDEOS } from "../constants";

const P1_WORDS = [
  "We're",
  "building",
  "a",
  "space",
  "where",
  "curiosity",
  "meets",
  "clarity",
  "—",
  "where",
  "readers",
  "find",
  "depth,",
  "writers",
  "find",
  "reach,",
  "and",
  "every",
  "newsletter",
  "becomes",
  "a",
  "conversation",
  "worth",
  "having.",
];

const P2_WORDS = [
  "A",
  "platform",
  "where",
  "content,",
  "community,",
  "and",
  "insight",
  "flow",
  "together",
  "—",
  "with",
  "less",
  "noise,",
  "less",
  "friction,",
  "and",
  "more",
  "meaning",
  "for",
  "everyone",
  "involved.",
];

const HIGHLIGHT = new Set(["curiosity", "meets", "clarity"]);

function ScrollWords({
  words,
  className,
  scrollYProgress,
  range,
}: {
  words: string[];
  className: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  return (
    <p className={className}>
      {words.map((word, i) => {
        const start = range[0] + (i / words.length) * (range[1] - range[0]);
        const end = start + (range[1] - range[0]) / words.length;
        return (
          <ScrollWord
            key={`${word}-${i}`}
            word={word}
            start={start}
            end={end}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}

function ScrollWord({
  word,
  start,
  end,
  scrollYProgress,
}: {
  word: string;
  start: number;
  end: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const clean = word.replace(/[,—]/g, "");
  const highlighted = HIGHLIGHT.has(clean);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] ${highlighted ? "text-foreground" : "text-hero-subtitle"}`}
    >
      {word}
    </motion.span>
  );
}

export default function MissionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section id="philosophy" ref={ref} className="pt-0 pb-32 md:pb-44 px-6 md:px-28">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[800px] aspect-square mb-16 md:mb-20 overflow-hidden rounded-2xl">
          <video
            src={VIDEOS.mission}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
          />
        </div>

        <div className="max-w-4xl w-full">
          <ScrollWords
            words={P1_WORDS}
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-snug"
            scrollYProgress={scrollYProgress}
            range={[0.1, 0.45]}
          />
          <ScrollWords
            words={P2_WORDS}
            className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug"
            scrollYProgress={scrollYProgress}
            range={[0.4, 0.75]}
          />
        </div>
      </div>
    </section>
  );
}
