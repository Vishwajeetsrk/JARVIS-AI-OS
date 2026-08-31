"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DitherShaderProps {
  src?: string;
  gridSize?: number;
  ditherMode?: "bayer" | "noise";
  colorMode?: "grayscale" | "color";
  invert?: boolean;
  animated?: boolean;
  animationSpeed?: number;
  primaryColor?: string;
  secondaryColor?: string;
  threshold?: number;
  className?: string;
}

export function DitherShader({
  src = "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop",
  gridSize = 2,
  className,
}: DitherShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 4x4 Bayer Matrix
  const bayerMatrix4x4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = (canvas.width = 400);
      const h = (canvas.height = 300);
      ctx.drawImage(img, 0, 0, w, h);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      for (let y = 0; y < h; y += gridSize) {
        for (let x = 0; x < w; x += gridSize) {
          const idx = (y * w + x) * 4;
          const gray = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
          const bayerVal = (bayerMatrix4x4[(y / gridSize) % 4][(x / gridSize) % 4] / 16) * 255;
          const dithered = gray < bayerVal ? 0 : 255;

          for (let dy = 0; dy < gridSize; dy++) {
            for (let dx = 0; dx < gridSize; dx++) {
              const pIdx = ((y + dy) * w + (x + dx)) * 4;
              data[pIdx] = dithered;
              data[pIdx + 1] = dithered;
              data[pIdx + 2] = dithered;
            }
          }
        }
      }
      ctx.putImageData(imgData, 0, 0);
    };
  }, [src, gridSize]);

  return (
    <div className={cn("overflow-hidden rounded-xl bg-black flex items-center justify-center", className)}>
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
    </div>
  );
}
