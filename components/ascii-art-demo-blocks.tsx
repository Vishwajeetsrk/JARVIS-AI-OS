"use client";
import React from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtBlocksDemo() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <AsciiArt
        src="https://assets.aceternity.com/avatars/manu.webp"
        resolution={80}
        charset="blocks"
        color="#a855f7"
        inverted
        animated={false}
        className="mx-auto aspect-square w-full max-w-md rounded-2xl bg-neutral-950 border border-purple-500/30 shadow-2xl"
      />
    </div>
  );
}
