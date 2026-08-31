"use client";
import React from "react";
import { DitherShader } from "@/components/ui/dither-shader";

export default function DitherShaderDemoSimple() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative overflow-hidden rounded-2xl">
        <DitherShader
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
          gridSize={4}
          ditherMode="bayer"
          colorMode="grayscale"
          className="h-64 w-80 sm:h-72 sm:w-96"
        />
      </div>
    </div>
  );
}
