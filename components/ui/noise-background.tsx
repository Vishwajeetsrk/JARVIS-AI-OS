"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NoiseBackgroundProps {
  children?: React.ReactNode;
  containerClassName?: string;
  gradientColors?: string[];
  className?: string;
}

export function NoiseBackground({
  children,
  containerClassName,
  gradientColors = ["rgb(255, 100, 150)", "rgb(100, 150, 255)", "rgb(255, 200, 100)"],
  className,
}: NoiseBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-1",
        containerClassName
      )}
      style={{
        background: `linear-gradient(135deg, ${gradientColors.join(", ")})`,
      }}
    >
      <div className={cn("relative z-10 h-full w-full rounded-2xl bg-neutral-950/90 backdrop-blur-sm", className)}>
        {children}
      </div>
    </div>
  );
}
