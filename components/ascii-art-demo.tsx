"use client";
import React from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtDemo() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <AsciiArt
        src="https://assets.aceternity.com/avatars/manu.webp"
        resolution={90}
        color="#00e5ff"
        animationStyle="fade"
        animationDuration={1.5}
        animateOnView={false}
        className="mx-auto aspect-square w-full max-w-md rounded-2xl bg-neutral-950 border border-cyan-500/20 shadow-2xl"
      />
    </div>
  );
}
