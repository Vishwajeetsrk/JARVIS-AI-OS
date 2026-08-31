"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LayoutTextFlipProps {
  text?: string;
  words: string[];
  className?: string;
}

export function LayoutTextFlip({
  text = "Welcome to ",
  words = ["Aceternity UI", "Fight Club", "The Matrix", "JARVIS AI OS"],
  className,
}: LayoutTextFlipProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className={cn("text-3xl font-bold text-white md:text-5xl", className)}>
      <span>{text}</span>
      <span
        key={words[index]}
        className="inline-block bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent animate-in fade-in zoom-in-90 duration-300"
      >
        {words[index]}
      </span>
    </div>
  );
}
