"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function DraggableCardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-[40rem] w-full overflow-hidden bg-neutral-950 p-6 flex items-center justify-center", className)}>
      {children}
    </div>
  );
}

export function DraggableCardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPos({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className={cn(
        "rounded-2xl border border-neutral-700 bg-neutral-900/90 p-4 shadow-2xl backdrop-blur-md select-none transition-shadow",
        isDragging && "shadow-cyan-500/20 z-50",
        className
      )}
    >
      {children}
    </div>
  );
}
