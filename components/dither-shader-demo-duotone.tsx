"use client";
import React from "react";
import { DitherShader } from "@/components/ui/dither-shader";

export default function DitherShaderDemoDuotone() {
  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl dark:border-neutral-800">
        <DitherShader
          src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          gridSize={1}
          ditherMode="bayer"
          colorMode="duotone"
          primaryColor="#1e3a5f"
          secondaryColor="#f0e68c"
          threshold={0.45}
          className="h-72 w-[400px] sm:h-80 sm:w-[500px]"
        />
      </div>
    </div>
  );
}
