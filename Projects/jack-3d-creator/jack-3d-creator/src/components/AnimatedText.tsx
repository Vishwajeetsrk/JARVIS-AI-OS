import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const chars = useMemo(() => text.split(""), [text]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => (
        <Char
          key={`${char}-${i}`}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const display = char === " " ? "\u00a0" : char;

  return (
    <span className="relative inline-block">
      <span className="invisible">{display}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  );
}
