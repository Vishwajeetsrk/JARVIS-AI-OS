"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface GlobeMarker {
  lat: number;
  lng: number;
  src?: string;
  label: string;
}

interface Globe3DProps {
  markers?: GlobeMarker[];
  config?: {
    atmosphereColor?: string;
    atmosphereIntensity?: number;
    bumpScale?: number;
    autoRotateSpeed?: number;
  };
  onMarkerClick?: (m: GlobeMarker) => void;
  onMarkerHover?: (m: GlobeMarker | null) => void;
  className?: string;
}

export function Globe3D({
  markers = [],
  config,
  onMarkerClick,
  className,
}: Globe3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let rotation = 0;

    const render = () => {
      rotation += (config?.autoRotateSpeed || 0.3) * 0.02;
      const w = (canvas.width = 400);
      const h = (canvas.height = 400);
      const cx = w / 2;
      const cy = h / 2;
      const r = 140;

      ctx.clearRect(0, 0, w, h);

      // Atmosphere Glow
      const glow = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 1.3);
      glow.addColorStop(0, "rgba(56, 189, 248, 0.4)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Globe Sphere
      const sphereGrad = ctx.createRadialGradient(cx - 40, cy - 40, 20, cx, cy, r);
      sphereGrad.addColorStop(0, "#1e293b");
      sphereGrad.addColorStop(1, "#090d16");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      // Latitude lines
      ctx.strokeStyle = "rgba(56, 189, 248, 0.15)";
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        const y = cy + (lat / 90) * r;
        const rad = Math.sqrt(Math.max(0, r * r - (y - cy) * (y - cy)));
        ctx.beginPath();
        ctx.ellipse(cx, y, rad, rad * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitude lines with rotation
      for (let lng = 0; lng < 360; lng += 45) {
        const angle = (lng * Math.PI) / 180 + rotation;
        const xOffset = Math.sin(angle) * r;
        if (Math.cos(angle) > 0) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, Math.abs(xOffset), r, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Render Markers
      markers.forEach((m) => {
        const phi = (90 - m.lat) * (Math.PI / 180);
        const theta = (m.lng * Math.PI) / 180 + rotation;
        const x = cx + r * Math.sin(phi) * Math.sin(theta);
        const y = cy - r * Math.cos(phi);
        const z = Math.sin(phi) * Math.cos(theta);

        if (z > 0) {
          ctx.fillStyle = "#38bdf8";
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.font = "10px sans-serif";
          ctx.fillText(m.label, x + 6, y + 3);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [markers, config]);

  return (
    <div className={cn("relative flex items-center justify-center p-4", className)}>
      <canvas ref={canvasRef} className="h-80 w-80 sm:h-96 sm:w-96 cursor-pointer" />
    </div>
  );
}
