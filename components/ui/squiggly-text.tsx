"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface SquigglyTextProps {
  children: React.ReactNode;
  className?: string;
  stepDuration?: number;
  scale?: number | [number, number];
}

export function SquigglyText({
  children,
  className,
  stepDuration = 80,
  scale = 6,
}: SquigglyTextProps) {
  const id = useId().replace(/:/g, "");
  const baseFreq = typeof scale === "number" ? scale * 0.005 : scale[0] * 0.005;

  return (
    <span className={cn("relative inline-block", className)}>
      <svg className="absolute h-0 w-0 pointer-events-none">
        <defs>
          <filter id={`squiggly-${id}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFreq}
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={`${(stepDuration * 4) / 1000}s`}
                values={`${baseFreq}; ${baseFreq * 1.8}; ${baseFreq * 0.7}; ${baseFreq}`}
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
        </defs>
      </svg>
      <span style={{ filter: `url(#squiggly-${id})` }}>{children}</span>
    </span>
  );
}
