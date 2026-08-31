"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WebcamPixelGridProps {
  gridCols?: number;
  gridRows?: number;
  maxElevation?: number;
  motionSensitivity?: number;
  elevationSmoothing?: number;
  colorMode?: string;
  backgroundColor?: string;
  mirror?: boolean;
  gapRatio?: number;
  invertColors?: boolean;
  darken?: number;
  borderColor?: string;
  borderOpacity?: number;
  onWebcamReady?: () => void;
  onWebcamError?: (err: any) => void;
  className?: string;
}

export function WebcamPixelGrid({
  gridCols = 40,
  gridRows = 30,
  backgroundColor = "#030303",
  borderColor = "#38bdf8",
  className,
}: WebcamPixelGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += 0.03;
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);

      const cellW = w / gridCols;
      const cellH = h / gridRows;

      for (let c = 0; c < gridCols; c++) {
        for (let r = 0; r < gridRows; r++) {
          const wave = Math.sin(c * 0.2 + time) * Math.cos(r * 0.2 + time);
          const size = Math.max(2, (wave + 1) * (cellW * 0.4));
          const alpha = (wave + 1) * 0.35 + 0.1;

          ctx.fillStyle = `rgba(56, 189, 248, ${alpha.toFixed(2)})`;
          ctx.beginPath();
          ctx.rect(c * cellW + (cellW - size) / 2, r * cellH + (cellH - size) / 2, size, size);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [gridCols, gridRows, backgroundColor, borderColor]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
