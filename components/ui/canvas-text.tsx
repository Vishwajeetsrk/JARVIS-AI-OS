"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CanvasTextProps {
  text: string;
  backgroundClassName?: string;
  colors?: string[];
  lineGap?: number;
  animationDuration?: number;
  className?: string;
}

export function CanvasText({
  text = "Lightning Speed",
  backgroundClassName,
  colors = [
    "rgba(0, 153, 255, 1)",
    "rgba(0, 153, 255, 0.8)",
    "rgba(0, 153, 255, 0.6)",
    "rgba(0, 153, 255, 0.4)",
    "rgba(0, 153, 255, 0.2)",
  ],
  className,
}: CanvasTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    canvas.width = 400;
    canvas.height = 80;

    const render = () => {
      offset += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 36px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      colors.forEach((color, i) => {
        ctx.fillStyle = color;
        const wave = Math.sin(offset + i * 0.4) * 4;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2 + wave + (i - colors.length / 2) * 1.5);
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [text, colors]);

  return (
    <span className={cn("relative inline-block align-middle", className)}>
      <canvas ref={canvasRef} className={cn("h-16 w-72 rounded-lg", backgroundClassName)} />
    </span>
  );
}
