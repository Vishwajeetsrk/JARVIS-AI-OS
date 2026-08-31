"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface PixelatedCanvasProps {
  src?: string;
  width?: number;
  height?: number;
  cellSize?: number;
  dotScale?: number;
  shape?: "square" | "circle";
  backgroundColor?: string;
  dropoutStrength?: number;
  interactive?: boolean;
  distortionStrength?: number;
  distortionRadius?: number;
  distortionMode?: "repel" | "attract";
  followSpeed?: number;
  jitterStrength?: number;
  jitterSpeed?: number;
  sampleAverage?: boolean;
  className?: string;
}

export function PixelatedCanvas({
  src = "https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?q=80&w=2670&auto=format&fit=crop",
  cellSize = 8,
  className,
}: PixelatedCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = (canvas.width = 500);
      const h = (canvas.height = 360);
      ctx.drawImage(img, 0, 0, w, h);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      for (let y = 0; y < h; y += cellSize) {
        for (let x = 0; x < w; x += cellSize) {
          const idx = (y * w + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.beginPath();
          ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
  }, [src, cellSize]);

  return (
    <div className={cn("overflow-hidden rounded-2xl bg-black p-2 shadow-2xl flex items-center justify-center", className)}>
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
    </div>
  );
}
