"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GoogleGeminiEffectProps {
  pathLengths?: any[];
  className?: string;
}

export function GoogleGeminiEffect({ className }: GoogleGeminiEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.02;
      const w = (canvas.width = canvas.parentElement?.clientWidth || 800);
      const h = (canvas.height = 400);

      ctx.clearRect(0, 0, w, h);

      const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#8AB4F8"];

      colors.forEach((color, i) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let x = 0; x < w; x += 10) {
          const y =
            h / 2 +
            Math.sin(x * 0.008 + t + i * 0.8) * 60 +
            Math.cos(x * 0.004 - t * 0.5) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className={cn("relative h-96 w-full overflow-hidden bg-black p-4 flex items-center justify-center", className)}>
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
    </div>
  );
}
