import React, { useEffect, useRef, useState } from "react";
import { Globe, RotateCw, Sparkles, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EarthGlobeProps {
  className?: string;
  size?: number;
  autoRotateSpeed?: number;
  highlightColor?: string;
  gridColor?: string;
}

export function Earth3DGlobe({
  className,
  size = 360,
  autoRotateSpeed = 0.008,
  highlightColor = "#e87a3a",
  gridColor = "#22d3ee",
}: EarthGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<string | null>("San Francisco (Primary Hub)");
  const rotationRef = useRef({ x: 0.3, y: 0 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) * 0.38;
    const cx = width / 2;
    const cy = height / 2;

    // Generate Globe Nodes & Lat/Long Rings
    const points: { lat: number; lon: number; label?: string }[] = [
      { lat: 37.7749, lon: -122.4194, label: "San Francisco (Primary Hub)" },
      { lat: 51.5074, lon: -0.1278, label: "London (Edge Node)" },
      { lat: 35.6762, lon: 139.6503, label: "Tokyo (Neural Cluster)" },
      { lat: 1.3521, lon: 103.8198, label: "Singapore (Gateway)" },
      { lat: 28.6139, lon: 77.209, label: "New Delhi (Developer Hub)" },
      { lat: -33.8688, lon: 151.2093, label: "Sydney (Pacific Relay)" },
      { lat: 52.52, lon: 13.405, label: "Berlin (Core Engine)" },
      { lat: 40.7128, lon: -74.006, label: "New York (Datacenter)" },
    ];

    // Add decorative dots on sphere surface
    const surfaceDots: { lat: number; lon: number; size: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 12) {
      const ringRadius = Math.cos((lat * Math.PI) / 180);
      const dotCount = Math.max(6, Math.floor(ringRadius * 36));
      for (let i = 0; i < dotCount; i++) {
        surfaceDots.push({
          lat,
          lon: (i * 360) / dotCount,
          size: Math.random() * 1.5 + 0.8,
        });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (isRotating && !isDraggingRef.current) {
        rotationRef.current.y += autoRotateSpeed;
      }

      const rotX = rotationRef.current.x;
      const rotY = rotationRef.current.y;

      // Draw Atmospheric Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.75, cx, cy, radius * 1.25);
      glowGrad.addColorStop(0, "rgba(232, 122, 58, 0.08)");
      glowGrad.addColorStop(0.7, "rgba(34, 211, 238, 0.05)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Draw Globe Sphere Base
      const sphereGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, radius * 0.1, cx, cy, radius);
      sphereGrad.addColorStop(0, "#16161a");
      sphereGrad.addColorStop(0.8, "#09090b");
      sphereGrad.addColorStop(1, "#000000");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Project spherical (lat, lon) to 2D
      const project = (lat: number, lon: number) => {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lon + 180) * Math.PI) / 180 + rotY;

        let x = -radius * Math.sin(phi) * Math.cos(theta);
        let y = radius * Math.cos(phi);
        let z = radius * Math.sin(phi) * Math.sin(theta);

        // Rotate along X axis
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y2 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;

        return { x: cx + x, y: cy + y2, z: z2, visible: z2 > 0 };
      };

      // Draw Surface Grid Dots
      surfaceDots.forEach((dot) => {
        const p = project(dot.lat, dot.lon);
        if (p.visible) {
          const alpha = Math.min(1, Math.max(0.15, (p.z / radius) * 0.9));
          ctx.fillStyle = `rgba(161, 161, 170, ${alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dot.size * (0.8 + (p.z / radius) * 0.4), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw Connecting Arcs between Points
      for (let i = 0; i < points.length; i++) {
        const next = (i + 1) % points.length;
        const p1 = project(points[i].lat, points[i].lon);
        const p2 = project(points[next].lat, points[next].lon);

        if (p1.visible && p2.visible) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2 - 25;
          ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
          ctx.strokeStyle = "rgba(232, 122, 58, 0.4)";
          ctx.lineWidth = 1.2;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Draw Major Hub Points & Glows
      points.forEach((point) => {
        const p = project(point.lat, point.lon);
        if (p.visible) {
          const pulse = (Math.sin(Date.now() * 0.005) + 1) * 2;
          
          // Outer halo
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6 + pulse, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(232, 122, 58, 0.25)";
          ctx.fill();

          // Core point
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#e87a3a";
          ctx.fill();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isRotating, autoRotateSpeed, highlightColor, gridColor]);

  // Handle Drag / Rotate
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    rotationRef.current.y += dx * 0.006;
    rotationRef.current.x = Math.max(-0.8, Math.min(0.8, rotationRef.current.x - dy * 0.006));
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div className={cn("relative flex flex-col items-center justify-center p-4", className)}>
      <div className="relative cursor-grab active:cursor-grabbing select-none">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="max-w-full touch-none"
        />

        {/* Floating badge */}
        <div className="absolute top-2 left-2 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-zinc-300">
          <Globe className="h-3.5 w-3.5 text-[#e87a3a] animate-pulse" />
          <span>Global Neural Cluster</span>
        </div>

        {/* Controls */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-md p-1.5 text-xs text-zinc-300 hover:bg-white/10 transition-colors"
            title={isRotating ? "Pause Auto-Rotate" : "Start Auto-Rotate"}
          >
            <RotateCw className={cn("h-3.5 w-3.5", isRotating && "text-[#e87a3a]")} />
          </button>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-zinc-400 font-mono">
        💡 Drag to rotate the 3D sphere · Connected across 8 Edge Datacenters
      </p>
    </div>
  );
}
