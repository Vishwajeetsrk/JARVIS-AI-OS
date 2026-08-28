import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FadeDownProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeDown({ children, className, delay = 0 }: FadeDownProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.65, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
