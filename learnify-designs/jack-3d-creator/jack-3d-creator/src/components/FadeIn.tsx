import { motion } from "framer-motion";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

type FadeInProps = {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
} & HTMLAttributes<HTMLElement>;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function FadeIn({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: FadeInProps) {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
