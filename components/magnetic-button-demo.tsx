"use client";
import React from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function MagneticButtonDemo() {
  const handleClick = () => {
    console.log("Magnetic button activated");
  };
  return (
    <div className="flex h-[30rem] w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-white/10">
      <MagneticButton strength={0.8} maxDistance={90}>
        <button
          onClick={handleClick}
          className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white shadow-xl shadow-cyan-500/25 transition-transform duration-150 active:scale-95 border border-cyan-400/40"
        >
          Follow @mannupaaji
        </button>
      </MagneticButton>
    </div>
  );
}
