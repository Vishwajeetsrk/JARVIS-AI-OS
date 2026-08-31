"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ScalesProps {
  size?: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Scales({
  size = 8,
  orientation = "vertical",
  className,
}: ScalesProps) {
  const ticks = Array.from({ length: 30 }, (_, i) => i);

  return (
    <div
      className={cn(
        "flex justify-between overflow-hidden opacity-50 select-none font-mono text-[9px] text-neutral-500",
        orientation === "horizontal" ? "w-full flex-row border-b border-neutral-800 py-1" : "h-full flex-col border-r border-neutral-800 px-1",
        className
      )}
    >
      {ticks.map((t) => (
        <div
          key={t}
          className={cn(
            "flex items-center",
            orientation === "horizontal" ? "flex-col" : "flex-row gap-1"
          )}
        >
          <div
            className={cn(
              "bg-neutral-600",
              orientation === "horizontal" ? (t % 5 === 0 ? "h-3 w-[1px]" : "h-1.5 w-[1px]") : t % 5 === 0 ? "w-3 h-[1px]" : "w-1.5 h-[1px]"
            )}
          />
          {t % 5 === 0 && <span>{t * size}</span>}
        </div>
      ))}
    </div>
  );
}
