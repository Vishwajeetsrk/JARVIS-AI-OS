"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  containerClassName?: string;
}

export function Tooltip({ children, content, containerClassName }: TooltipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={cn("relative inline-block cursor-pointer", containerClassName)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-xl border border-neutral-700 bg-neutral-900/95 p-3 text-xs text-neutral-200 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      )}
    </span>
  );
}
