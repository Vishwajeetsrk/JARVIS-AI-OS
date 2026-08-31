"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PointerHighlightProps {
  children: React.ReactNode;
  rectangleClassName?: string;
  pointerClassName?: string;
  containerClassName?: string;
}

export function PointerHighlight({
  children,
  rectangleClassName,
  pointerClassName,
  containerClassName,
}: PointerHighlightProps) {
  return (
    <span className={cn("relative inline-block mx-1", containerClassName)}>
      <span
        className={cn(
          "rounded-md border border-yellow-500/40 bg-yellow-500/10 px-2 py-0.5 text-yellow-300 font-semibold",
          rectangleClassName
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "absolute -top-3 -right-2 text-yellow-400 font-mono text-[10px] bg-yellow-500/20 border border-yellow-500/40 px-1 rounded animate-pulse",
          pointerClassName
        )}
      >
        ▲ Collaborator
      </span>
    </span>
  );
}
