/**
 * Arc Reactor 3D Holographic HUD Component for JARVIS AI OS
 * Interactive 3D Canvas rendering rotating energy cores, particle rings,
 * audio-reactive waveforms, and dynamic cybernetic telemetry.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type HudState = "idle" | "listening" | "researching" | "thinking" | "speaking" | "executing" | "error";

export interface ArcReactorHudProps {
  state?: HudState;
  size?: number;
  className?: string;
  interactive?: boolean;
  audioLevel?: number; // 0.0 to 1.0 audio reactivity
  statusText?: string;
  onClick?: () => void;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  orbitRadius: number;
}

export function ArcReactorHud({
  state = "idle",
  size = 280,
  className,
  interactive = true,
  audioLevel = 0,
  statusText,
  onClick,
}: ArcReactorHudProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const centerX = size / 2;
    const centerY = size / 2;

    // Theme color based on state
    const getStateColors = () => {
      switch (state) {
        case "listening":
          return { primary: "#10B981", glow: "rgba(16, 185, 129, 0.6)", core: "#34D399" };
        case "researching":
          return { primary: "#8B5CF6", glow: "rgba(139, 92, 246, 0.6)", core: "#C084FC" };
        case "thinking":
          return { primary: "#F59E0B", glow: "rgba(245, 158, 11, 0.6)", core: "#FBBF24" };
        case "speaking":
          return { primary: "#3B82F6", glow: "rgba(59, 130, 246, 0.6)", core: "#60A5FA" };
        case "executing":
          return { primary: "#EC4899", glow: "rgba(236, 72, 153, 0.6)", core: "#F472B6" };
        case "error":
          return { primary: "#EF4444", glow: "rgba(239, 68, 68, 0.6)", core: "#F87171" };
        default:
          return { primary: "#00E5FF", glow: "rgba(0, 229, 255, 0.5)", core: "#E0F7FA" };
      }
    };

    // Initialize 3D Orbiting Particles
    const particleCount = 45;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const orbitRadius = 35 + Math.random() * (size * 0.38);
      particles.push({
        x: 0,
        y: 0,
        z: (Math.random() - 0.5) * 60,
        radius: 1 + Math.random() * 2,
        color: Math.random() > 0.3 ? getStateColors().primary : "#FFFFFF",
        speed: (0.01 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1),
        angle: Math.random() * Math.PI * 2,
        orbitRadius,
      });
    }

    let rotationAngle = 0;
    let pulseScale = 1;
    let waveOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, size, size);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const tiltX = (mouseRef.current.x / size - 0.5) * 16;
      const tiltY = (mouseRef.current.y / size - 0.5) * 16;

      rotationAngle += 0.015 + (state === "thinking" || state === "executing" ? 0.03 : 0);
      waveOffset += 0.05;

      const colors = getStateColors();
      const currentAudio = Math.max(audioLevel, hovered ? 0.2 : 0.05);
      pulseScale = 1 + Math.sin(Date.now() * 0.003) * 0.04 + currentAudio * 0.15;

      ctx.save();
      ctx.translate(centerX + tiltX, centerY + tiltY);

      // ─── 1. Ambient Glow ───
      const gradient = ctx.createRadialGradient(0, 0, 10, 0, 0, size * 0.48 * pulseScale);
      gradient.addColorStop(0, colors.glow);
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.48 * pulseScale, 0, Math.PI * 2);
      ctx.fill();

      // ─── 2. Outer HUD Rings & Segmented Ticks ───
      const outerR = size * 0.42 * pulseScale;
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(0, 0, outerR, 0, Math.PI * 2);
      ctx.stroke();

      // Segmented Orbiting Ring
      ctx.save();
      ctx.rotate(-rotationAngle * 0.8);
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = 0.7;
      ctx.setLineDash([8, 12, 24, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, outerR - 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // ─── 3. Cyber Ticks & Coordinate Markings ───
      const ticks = 24;
      ctx.save();
      ctx.rotate(rotationAngle * 0.4);
      for (let i = 0; i < ticks; i++) {
        const rad = (i * Math.PI * 2) / ticks;
        const x1 = Math.cos(rad) * (outerR - 14);
        const y1 = Math.sin(rad) * (outerR - 14);
        const x2 = Math.cos(rad) * (outerR - (i % 4 === 0 ? 22 : 18));
        const y2 = Math.sin(rad) * (outerR - (i % 4 === 0 ? 22 : 18));

        ctx.strokeStyle = i % 4 === 0 ? colors.core : colors.primary;
        ctx.lineWidth = i % 4 === 0 ? 2 : 1;
        ctx.globalAlpha = i % 4 === 0 ? 0.8 : 0.35;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();

      // ─── 4. Mid Arc Reactor Ring & Tri-Nodes ───
      const midR = size * 0.26 * pulseScale;
      ctx.save();
      ctx.rotate(rotationAngle * 1.5);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.core;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.arc(0, 0, midR, 0, Math.PI * 2);
      ctx.stroke();

      // 3 Arc Reactor Focus Nodes
      for (let i = 0; i < 3; i++) {
        const nodeAngle = (i * Math.PI * 2) / 3;
        const nx = Math.cos(nodeAngle) * midR;
        const ny = Math.sin(nodeAngle) * midR;

        ctx.fillStyle = colors.core;
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(nx, ny, 7, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // ─── 5. Audio Reactive Energy Waveform ───
      const wavePoints = 32;
      const waveR = size * 0.17 * pulseScale;
      ctx.save();
      ctx.strokeStyle = colors.core;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      for (let i = 0; i <= wavePoints; i++) {
        const theta = (i * Math.PI * 2) / wavePoints;
        const waveMod = Math.sin(theta * 6 + waveOffset) * (currentAudio * 18);
        const r = waveR + waveMod;
        const wx = Math.cos(theta) * r;
        const wy = Math.sin(theta) * r;
        if (i === 0) ctx.moveTo(wx, wy);
        else ctx.lineTo(wx, wy);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // ─── 6. 3D Holographic Orbiting Particles ───
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = Math.cos(p.angle) * p.orbitRadius;
        const py = Math.sin(p.angle) * p.orbitRadius * 0.7; // slight 3D perspective ellipse

        const pScale = (p.z + 100) / 100;
        ctx.fillStyle = colors.primary;
        ctx.globalAlpha = Math.min(0.85, Math.max(0.2, (p.z + 40) / 80));
        ctx.beginPath();
        ctx.arc(px, py, p.radius * pScale, 0, Math.PI * 2);
        ctx.fill();
      });

      // ─── 7. Center Arc Reactor Core ───
      const innerCoreR = size * 0.08 * (1 + currentAudio * 0.25);
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, innerCoreR);
      coreGrad.addColorStop(0, "#FFFFFF");
      coreGrad.addColorStop(0.4, colors.core);
      coreGrad.addColorStop(1, colors.primary);

      ctx.fillStyle = coreGrad;
      ctx.globalAlpha = 0.95;
      ctx.beginPath();
      ctx.arc(0, 0, innerCoreR, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [state, size, audioLevel, hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current.targetX = e.clientX - rect.left;
    mouseRef.current.targetY = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = size / 2;
    mouseRef.current.targetY = size / 2;
    setHovered(false);
  };

  return (
    <div
      className={cn("relative inline-flex flex-col items-center justify-center select-none", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      />
      {statusText && (
        <div className="absolute -bottom-2 text-[11px] font-mono tracking-widest uppercase text-primary/80 bg-background/80 px-2 py-0.5 rounded-full border border-primary/20 backdrop-blur-sm">
          {statusText}
        </div>
      )}
    </div>
  );
}
