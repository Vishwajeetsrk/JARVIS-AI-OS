"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CloudShaderProps {
  className?: string;
  speed?: number;
  cloudColor?: string;
  skyColor?: string;
}

export function CloudShader({
  className,
  speed = 1,
  cloudColor = "#ffffff",
  skyColor = "#0f172a",
}: CloudShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener("resize", resize);

    // Procedural Perlin-like 2D noise approximation
    const noise = (x: number, y: number, t: number) => {
      const s = Math.sin(x * 0.01 + t * 0.5) * Math.cos(y * 0.01 + t * 0.3);
      const s2 = Math.sin(x * 0.02 - t * 0.2) * Math.sin(y * 0.02 + t * 0.4);
      const s3 = Math.sin((x + y) * 0.005 + t * 0.1);
      return (s + s2 + s3 + 3) / 6;
    };

    const render = () => {
      time += 0.015 * speed;
      const w = canvas.width;
      const h = canvas.height;

      // Background Sky Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, skyColor);
      grad.addColorStop(1, "#030712");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Cloud density layers
      const step = 8;
      for (let x = 0; x < w; x += step) {
        for (let y = 0; y < h; y += step) {
          const n = noise(x, y, time);
          if (n > 0.45) {
            const alpha = Math.min((n - 0.45) * 2.2, 0.85);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(2)})`;
            ctx.beginPath();
            ctx.arc(x, y, step * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, cloudColor, skyColor]);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-neutral-950", className)}>
      <canvas ref={canvasRef} className="h-full w-full object-cover filter blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
