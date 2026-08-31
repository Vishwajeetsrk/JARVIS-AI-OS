"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImagesBadgeProps {
  text: string;
  images: string[];
  folderSize?: { width: number; height: number };
  teaserImageSize?: { width: number; height: number };
  hoverImageSize?: { width: number; height: number };
  hoverTranslateY?: number;
  hoverSpread?: number;
  hoverRotation?: number;
  className?: string;
}

export function ImagesBadge({
  text = "Introducing Aceternity UI Pro",
  images = [
    "https://assets.aceternity.com/pro/agenforce-2.webp",
    "https://assets.aceternity.com/pro/minimal-3-min.webp",
    "https://assets.aceternity.com/pro/bento-4.png",
  ],
  hoverSpread = 40,
  hoverRotation = 15,
  className,
}: ImagesBadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-neutral-900/90 px-5 py-2 text-sm font-semibold text-white shadow-xl backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-neutral-800",
        className
      )}
    >
      {/* Floating Image Fan Stack */}
      <div className="relative h-7 w-7">
        {images.map((src, i) => {
          const spreadX = hovered ? (i - (images.length - 1) / 2) * hoverSpread : i * 2;
          const spreadY = hovered ? -60 : 0;
          const rotate = hovered ? (i - (images.length - 1) / 2) * hoverRotation : 0;
          const scale = hovered ? 2.2 : 1;

          return (
            <img
              key={i}
              src={src}
              alt="Badge Preview"
              style={{
                transform: `translate(${spreadX}px, ${spreadY}px) rotate(${rotate}deg) scale(${scale})`,
                zIndex: i + 10,
              }}
              className="absolute left-0 top-0 h-7 w-7 rounded-md border border-white/30 object-cover shadow-lg transition-all duration-300 ease-out"
            />
          );
        })}
      </div>

      <span>{text}</span>
      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
    </div>
  );
}
