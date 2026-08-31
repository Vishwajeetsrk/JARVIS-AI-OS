"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";

export default function CanvasTextDemo() {
  return (
    <div className="flex min-h-80 items-center justify-center p-8 bg-neutral-950 rounded-2xl border border-white/10">
      <h2
        className={cn(
          "group relative mx-auto max-w-2xl text-left text-3xl font-bold tracking-tight text-neutral-300 sm:text-5xl md:text-6xl",
        )}
      >
        Ship landing pages at{" "}
        <CanvasText
          text="Lightning Speed"
          backgroundClassName="bg-blue-600"
          colors={[
            "rgba(0, 229, 255, 1)",
            "rgba(0, 229, 255, 0.9)",
            "rgba(0, 229, 255, 0.8)",
            "rgba(0, 229, 255, 0.7)",
            "rgba(0, 229, 255, 0.6)",
            "rgba(0, 229, 255, 0.5)",
            "rgba(0, 229, 255, 0.4)",
            "rgba(0, 229, 255, 0.3)",
            "rgba(0, 229, 255, 0.2)",
            "rgba(0, 229, 255, 0.1)",
          ]}
          lineGap={4}
          animationDuration={15}
        />
      </h2>
    </div>
  );
}
