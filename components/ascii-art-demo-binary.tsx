"use client";
import React from "react";
import { AsciiArt } from "@/components/ui/ascii-art";

export default function AsciiArtBinaryDemo() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <AsciiArt
        src="https://assets.aceternity.com/avatars/manu.webp"
        resolution={80}
        charset="binary"
        color="#22c55e"
        inverted
        animated={false}
        className="mx-auto aspect-square w-full max-w-md rounded-2xl bg-neutral-950 border border-emerald-500/30 shadow-2xl"
      />
    </div>
  );
}
