"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const generateRandomCharacter = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
  return chars[Math.floor(Math.random() * chars.length)];
};

export const EncryptedText = ({
  text,
  encryptedClassName,
  revealedClassName,
  revealDelay = 0,
  revealDuration = 0.8,
  className,
}: {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelay?: number;
  revealDuration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayText, setDisplayText] = useState<string[]>(() =>
    text.split("").map(() => generateRandomCharacter()!),
  );
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((char, idx) =>
          revealedIndices.has(idx) ? text[idx]! : generateRandomCharacter()!,
        ),
      );
    }, 50);

    const revealTimeout = setTimeout(() => {
      let currentIndex = 0;
      const revealInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setRevealedIndices((prev) => new Set([...prev, currentIndex]));
          setDisplayText((prev) =>
            prev.map((char, idx) => (idx === currentIndex ? text[idx]! : char)),
          );
          currentIndex++;
        } else {
          clearInterval(revealInterval);
          setIsRevealed(true);
          clearInterval(interval);
        }
      }, (revealDuration * 1000) / text.length);

      return () => clearInterval(revealInterval);
    }, revealDelay * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(revealTimeout);
    };
  }, [isInView, text, revealDelay, revealDuration, revealedIndices]);

  // secondary effect to keep scrambling until reveal
  useEffect(() => {
    if (!isInView || isRevealed) return;
    const scramble = setInterval(() => {
      setDisplayText((prev) =>
        prev.map((c, i) => (revealedIndices.has(i) ? text[i]! : generateRandomCharacter()!)),
      );
    }, 60);
    return () => clearInterval(scramble);
  }, [isInView, revealedIndices, text, isRevealed]);

  return (
    <div ref={ref} className={cn("inline-flex", className)}>
      {displayText.map((char, idx) => (
        <motion.span
          key={idx}
          className={cn(
            "font-mono",
            revealedIndices.has(idx)
              ? cn("text-black dark:text-white", revealedClassName)
              : cn("text-neutral-400 dark:text-neutral-600", encryptedClassName),
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.02 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
