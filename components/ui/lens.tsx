"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LensProps {
  children: React.ReactNode;
  hovering?: boolean;
  setHovering?: (h: boolean) => void;
  className?: string;
}

export function Lens({
  children,
  hovering: controlledHover,
  setHovering: setControlledHover,
  className,
}: LensProps) {
  const [localHover, setLocalHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isHovered = controlledHover !== undefined ? controlledHover : localHover;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setLocalHover(true);
        setControlledHover?.(true);
      }}
      onMouseLeave={() => {
        setLocalHover(false);
        setControlledHover?.(false);
      }}
      className={cn("relative overflow-hidden rounded-2xl cursor-none", className)}
    >
      {children}
      {isHovered && (
        <div
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(56,189,248,0.5)] backdrop-contrast-125"
        />
      )}
    </div>
  );
}
