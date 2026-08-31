"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FocusCardItem {
  title: string;
  src: string;
}

export function FocusCards({
  cards = [],
  className,
}: {
  cards: FocusCardItem[];
  className?: string;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4", className)}>
      {cards.map((card, idx) => (
        <div
          key={card.title}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          className={cn(
            "relative h-72 sm:h-80 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition-all duration-300 ease-out cursor-pointer shadow-xl",
            hovered !== null && hovered !== idx && "scale-95 blur-xs opacity-50",
            hovered === idx && "scale-105 border-cyan-400/80 shadow-cyan-500/20"
          )}
        >
          <img src={card.src} alt={card.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-xl font-bold text-white">{card.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
