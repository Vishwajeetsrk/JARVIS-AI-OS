"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ContainerTextFlipProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  className,
  interval = 2500,
}: ContainerTextFlipProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg bg-neutral-800 px-3 py-1 font-bold text-cyan-400 border border-neutral-700 shadow-md transition-all duration-300",
        className
      )}
    >
      <span key={words[index]} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        {words[index]}
      </span>
    </span>
  );
}
