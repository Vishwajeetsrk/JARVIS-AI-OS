"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundRippleEffectProps {
  className?: string;
}

export function BackgroundRippleEffect({ className }: BackgroundRippleEffectProps) {
  const [clickedBox, setClickedBox] = useState<number | null>(null);

  const boxes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={cn("grid grid-cols-6 sm:grid-cols-10 gap-2 p-6 justify-center opacity-70", className)}>
      {boxes.map((i) => (
        <div
          key={i}
          onClick={() => {
            setClickedBox(i);
            setTimeout(() => setClickedBox(null), 600);
          }}
          className={cn(
            "h-12 w-12 rounded-lg border border-neutral-800 bg-neutral-900/60 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-500/20 cursor-pointer",
            clickedBox === i && "scale-125 border-cyan-400 bg-cyan-400/40 shadow-lg shadow-cyan-500/50"
          )}
        />
      ))}
    </div>
  );
}
