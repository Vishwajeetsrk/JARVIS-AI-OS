import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type StaggeredFadeProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function StaggeredFade({ text, className, delay = 0 }: StaggeredFadeProps) {
  const letters = [...text];

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.035,
            duration: 0.55,
            ease: EASE,
          }}
          aria-hidden={letter === " "}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
