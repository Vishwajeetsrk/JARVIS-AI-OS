"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ParallaxHeroImagesProps {
  images: string[];
  variant?: "edge-focus" | "grid";
  className?: string;
}

export function ParallaxHeroImages({
  images = [],
  variant = "edge-focus",
  className,
}: ParallaxHeroImagesProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const defaultImages = images.length > 0 ? images : [
    "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
    "https://assets.aceternity.com/components/3d-globe.webp",
    "https://assets.aceternity.com/components/keyboard-2.webp",
    "https://assets.aceternity.com/components/hero-1.webp",
    "https://assets.aceternity.com/components/hero-2.webp",
    "https://assets.aceternity.com/components/hero-3.webp",
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {defaultImages.map((src, idx) => {
        const factor = (idx + 1) * 0.4;
        const offsetX = mousePos.x * factor;
        const offsetY = mousePos.y * factor;

        // Position images around the periphery
        const positions = [
          "top-10 left-10 w-48 sm:w-64 rotate-[-6deg]",
          "top-12 right-12 w-52 sm:w-72 rotate-[8deg]",
          "bottom-16 left-16 w-56 sm:w-80 rotate-[4deg]",
          "bottom-20 right-20 w-48 sm:w-64 rotate-[-8deg]",
          "top-1/3 left-4 w-40 sm:w-56 rotate-[-12deg]",
          "top-1/2 right-4 w-44 sm:w-60 rotate-[10deg]",
        ];

        const posClass = positions[idx % positions.length];

        return (
          <div
            key={idx}
            className={cn(
              "absolute rounded-2xl border border-white/10 bg-neutral-900/60 p-2 shadow-2xl backdrop-blur-sm transition-transform duration-200 ease-out",
              posClass
            )}
            style={{
              transform: `translate(${offsetX}px, ${offsetY}px)`,
            }}
          >
            <img
              src={src}
              alt={`Parallax Layer ${idx}`}
              className="h-32 w-full rounded-xl object-cover sm:h-44 opacity-80 hover:opacity-100"
            />
          </div>
        );
      })}
    </div>
  );
}
