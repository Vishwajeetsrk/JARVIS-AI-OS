import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ShinyTextProps = {
  children: ReactNode;
  className?: string;
};

/** Animated gradient shine per DesignPro hero spec (#64CEFB base, white shine, 3s loop). */
export default function ShinyText({ children, className = "" }: ShinyTextProps) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(100deg, #64CEFB 0%, #64CEFB 30%, #ffffff 50%, #64CEFB 70%, #64CEFB 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
      }}
      animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}
