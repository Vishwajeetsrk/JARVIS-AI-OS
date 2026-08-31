"use client";
import React from "react";
import { CanvasText } from "@/components/ui/canvas-text";

export default function CanvasTextDemo2() {
  return (
    <div className="flex min-h-80 items-center justify-center bg-neutral-950 p-8 rounded-2xl border border-white/10">
      <CanvasText
        text="Aceternity"
        className="text-3xl font-bold md:text-5xl lg:text-7xl"
        backgroundClassName="bg-cyan-500"
        colors={[
          "#3b82f6",
          "#00e5ff",
          "#8b5cf6",
          "#10b981",
        ]}
        lineGap={6}
        animationDuration={10}
      />
    </div>
  );
}
