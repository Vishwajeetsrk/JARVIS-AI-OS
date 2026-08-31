"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ColourfulTextProps {
  text: string;
  className?: string;
}

export default function ColourfulText({ text, className }: ColourfulTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-emerald-400 bg-[length:200%_auto] bg-clip-text font-black text-transparent animate-gradient-slow",
        className
      )}
      style={{
        backgroundSize: "200% auto",
        animation: "gradientFlow 4s linear infinite",
      }}
    >
      {text}
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </span>
  );
}
