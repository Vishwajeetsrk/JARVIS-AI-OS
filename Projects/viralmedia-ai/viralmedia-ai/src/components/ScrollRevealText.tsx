import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 ${className}`}
    >
      {words.map((word, index) => (
        <Word
          key={`${word}-${index}`}
          word={word}
          progress={scrollYProgress}
          index={index}
          total={words.length}
        />
      ))}
    </p>
  );
}

function Word({
  word,
  progress,
  index,
  total,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}
