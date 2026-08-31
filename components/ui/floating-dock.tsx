"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
  mobileClassName?: string;
}

export function FloatingDock({ items = [], className }: FloatingDockProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border border-white/20 bg-neutral-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIdx === idx;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

        const scale = isHovered ? 1.4 : isNeighbor ? 1.15 : 1;
        const translateY = isHovered ? -10 : isNeighbor ? -4 : 0;

        return (
          <a
            key={item.title}
            href={item.href}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
            }}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition-all duration-200 ease-out hover:bg-neutral-700"
          >
            <div className="h-5 w-5">{item.icon}</div>

            {/* Tooltip */}
            {isHovered && (
              <div className="absolute -top-9 rounded-md border border-neutral-700 bg-black px-2 py-0.5 text-[10px] font-bold text-white shadow-md">
                {item.title}
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
}
