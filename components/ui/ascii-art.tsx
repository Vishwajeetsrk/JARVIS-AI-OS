"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AsciiArtProps {
  src?: string;
  resolution?: number;
  color?: string;
  animationStyle?: string;
  animationDuration?: number;
  animateOnView?: boolean;
  className?: string;
}

export function AsciiArt({
  src = "https://assets.aceternity.com/avatars/manu.webp",
  resolution = 60,
  color = "#00f0ff",
  className,
}: AsciiArtProps) {
  const containerRef = useRef<HTMLPreElement>(null);
  const chars = "@%#*+=-:. ";

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx || !containerRef.current) return;

      const w = resolution;
      const h = Math.round(resolution * (img.height / img.width) * 0.55);
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);

      const imgData = ctx.getImageData(0, 0, w, h).data;
      let ascii = "";

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const brightness = (imgData[idx] + imgData[idx + 1] + imgData[idx + 2]) / 3;
          const charIdx = Math.floor((brightness / 255) * (chars.length - 1));
          ascii += chars[chars.length - 1 - charIdx];
        }
        ascii += "\n";
      }

      containerRef.current.textContent = ascii;
    };
  }, [src, resolution]);

  return (
    <div className={cn("overflow-hidden rounded-xl bg-black p-4 flex items-center justify-center", className)}>
      <pre
        ref={containerRef}
        style={{ color }}
        className="font-mono text-[6px] leading-[6px] sm:text-[8px] sm:leading-[8px] whitespace-pre select-none"
      >
        Loading ASCII Matrix...
      </pre>
    </div>
  );
}
