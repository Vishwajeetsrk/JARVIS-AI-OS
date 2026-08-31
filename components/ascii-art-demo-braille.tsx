"use client";
import React from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtBrailleDemo() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <AsciiArt
        src="https://assets.aceternity.com/avatars/manu.webp"
        resolution={80}
        charset="braille"
        color="#06b6d4"
        inverted
        animated={false}
        className="mx-auto aspect-square w-full max-w-md rounded-2xl bg-neutral-950 border border-cyan-500/30 shadow-2xl"
      />
    </div>
  );
}
