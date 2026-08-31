"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundLinesProps {
  children?: React.ReactNode;
  className?: string;
}

export function BackgroundLines({ children, className }: BackgroundLinesProps) {
  return (
    <div className={cn("relative min-h-[30rem] w-full overflow-hidden bg-neutral-950 flex items-center justify-center p-8", className)}>
      <svg
        className="absolute inset-0 h-full w-full opacity-30 pointer-events-none"
        viewBox="0 0 1000 600"
        fill="none"
      >
        <path
          d="M-100,100 C300,200 400,-50 1100,300"
          stroke="url(#line-grad-1)"
          strokeWidth="2"
        />
        <path
          d="M-100,300 C300,450 700,150 1100,500"
          stroke="url(#line-grad-2)"
          strokeWidth="1.5"
        />
        <path
          d="M-100,500 C400,600 600,300 1100,200"
          stroke="url(#line-grad-1)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
