"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TextFlippingBoardProps {
  text: string;
  className?: string;
}

export function TextFlippingBoard({ text, className }: TextFlippingBoardProps) {
  const [displayText, setDisplayText] = useState(text.toUpperCase());
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);

  useEffect(() => {
    const upper = text.toUpperCase();
    setDisplayText(upper);
    setFlippingIndex(0);
    const timer = setTimeout(() => setFlippingIndex(null), 800);
    return () => clearTimeout(timer);
  }, [text]);

  const lines = displayText.split("\n");

  return (
    <div className={cn("flex flex-col items-center gap-2 p-6 font-mono", className)}>
      {lines.map((line, lIdx) => (
        <div key={lIdx} className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {line.split("").map((char, cIdx) => (
            <div
              key={cIdx}
              className={cn(
                "relative flex h-10 w-8 items-center justify-center rounded-md border border-neutral-700 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-lg font-bold text-amber-400 shadow-md sm:h-14 sm:w-11 sm:text-2xl",
                char === " " && "border-transparent bg-transparent text-transparent",
                flippingIndex !== null && "animate-pulse"
              )}
            >
              {/* Mechanical Flap Split Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/80 shadow-sm" />
              <span className="relative z-10">{char}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
