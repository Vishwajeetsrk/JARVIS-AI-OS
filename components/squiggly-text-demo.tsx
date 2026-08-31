"use client";
import React from "react";
import { SquigglyText } from "@/components/ui/squiggly-text";

export default function SquigglyTextDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center p-6 text-center">
      <h1 className="text-center text-4xl leading-tight font-bold text-neutral-100 md:text-7xl lg:text-8xl">
        How many{" "}
        <SquigglyText
          stepDuration={70}
          scale={[6, 9]}
          className="text-amber-400"
        >
          drinks
        </SquigglyText>{" "}
        <br />
        are <SquigglyText scale={5} className="text-cyan-400">too many</SquigglyText> drinks?
      </h1>
    </div>
  );
}
