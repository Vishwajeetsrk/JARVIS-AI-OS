"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const MagneticButton = ({
  children,
  strength = 0.8,
  maxDistance = 100,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  maxDistance?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    let x = (clientX - (left + width / 2)) * strength;
    let y = (clientY - (top + height / 2)) * strength;

    const distance = Math.hypot(x, y);
    if (distance > maxDistance) {
      const scale = maxDistance / distance;
      x *= scale;
      y *= scale;
    }

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasMoved = position.x !== 0 || position.y !== 0;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "cursor-pointer rounded-2xl border border-dashed transition-all duration-200 p-2",
        className,
      )}
      style={{
        borderColor: hasMoved ? "#00e5ff" : "transparent",
        backgroundColor: hasMoved
          ? "rgba(0, 229, 255, 0.08)"
          : "transparent",
      }}
    >
      <div
        ref={ref}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: hasMoved ? "transform 0.05s linear" : "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
