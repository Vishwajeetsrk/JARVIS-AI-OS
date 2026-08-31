"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  className?: string;
}

export function EncryptedText({
  text = "Welcome to the Matrix, Neo.",
  encryptedClassName = "text-cyan-500 font-mono",
  revealedClassName = "text-white font-mono font-bold",
  revealDelayMs = 50,
  className,
}: EncryptedTextProps) {
  const [revealedChars, setRevealedChars] = useState(0);
  const [scramble, setScramble] = useState("");
  const glyphs = "!@#$%^&*()_+-=[]{}|;:,.<>?/~0123456789";

  useEffect(() => {
    setRevealedChars(0);
    const interval = setInterval(() => {
      setRevealedChars((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, revealDelayMs);

    const scrambleInterval = setInterval(() => {
      const randomStr = Array.from({ length: 4 }, () =>
        glyphs[Math.floor(Math.random() * glyphs.length)]
      ).join("");
      setScramble(randomStr);
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(scrambleInterval);
    };
  }, [text, revealDelayMs]);

  const revealedPart = text.slice(0, revealedChars);
  const remainingPart = text.slice(revealedChars);

  return (
    <span className={cn("inline-block", className)}>
      <span className={revealedClassName}>{revealedPart}</span>
      {remainingPart.length > 0 && (
        <span className={encryptedClassName}>
          {scramble.slice(0, Math.min(2, remainingPart.length))}
          {remainingPart.slice(2).replace(/./g, () => glyphs[Math.floor(Math.random() * glyphs.length)])}
        </span>
      )}
    </span>
  );
}
