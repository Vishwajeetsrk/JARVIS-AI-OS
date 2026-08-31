"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CompareProps {
  firstImage: string;
  secondImage: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  className?: string;
  slideMode?: "hover" | "drag";
  autoplay?: boolean;
}

export function Compare({
  firstImage = "https://assets.aceternity.com/code-problem.png",
  secondImage = "https://assets.aceternity.com/code-solution.png",
  className,
}: CompareProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 select-none cursor-ew-resize shadow-2xl",
        className
      )}
    >
      {/* Background Image (Second) */}
      <img src={secondImage} alt="After" className="absolute inset-0 h-full w-full object-cover" />

      {/* Clipped Top Image (First) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={firstImage}
          alt="Before"
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-neutral-900 shadow-md text-xs font-bold text-white">
          ↔
        </div>
      </div>
    </div>
  );
}
