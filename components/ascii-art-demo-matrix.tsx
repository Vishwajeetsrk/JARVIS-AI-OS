"use client";
import React from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtMatrixDemo() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <AsciiArt
        src="https://assets.aceternity.com/avatars/manu.webp"
        resolution={80}
        color="#00ff00"
        animationStyle="matrix"
        inverted
        animateOnView={false}
        className="mx-auto aspect-square w-full max-w-md rounded-2xl bg-black border border-green-500/30 shadow-2xl"
      />
    </div>
  );
}
