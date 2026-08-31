"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsWithCollisionProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundBeamsWithCollision({
  children,
  className,
}: BackgroundBeamsWithCollisionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };
    resize();
    window.addEventListener("resize", resize);

    // Beams with particles
    const beams = Array.from({ length: 6 }, () => ({
      x: Math.random() * 800,
      y: 0,
      speed: 3 + Math.random() * 4,
      length: 80 + Math.random() * 60,
      color: ["#a855f7", "#ec4899", "#3b82f6", "#06b6d4"][Math.floor(Math.random() * 4)],
    }));

    const sparks: { x: number; y: number; vx: number; vy: number; life: number; color: string }[] = [];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((b) => {
        b.y += b.speed;
        if (b.y > canvas.height - 40) {
          // Collision Explosion
          for (let i = 0; i < 8; i++) {
            sparks.push({
              x: b.x,
              y: canvas.height - 40,
              vx: (Math.random() - 0.5) * 6,
              vy: -Math.random() * 5,
              life: 1,
              color: b.color,
            });
          }
          b.y = -b.length;
          b.x = Math.random() * canvas.width;
        }

        const grad = ctx.createLinearGradient(b.x, b.y - b.length, b.x, b.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, b.color);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y - b.length);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });

      // Render sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.04;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.life;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={cn("relative min-h-[30rem] w-full overflow-hidden bg-neutral-950 flex items-center justify-center p-8", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" />
      <div className="relative z-20 text-center">{children}</div>
    </div>
  );
}
