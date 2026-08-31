"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function LoaderOne({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center p-6", className)}>
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-400" />
    </div>
  );
}

export function LoaderThree({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-1.5 p-6", className)}>
      <div className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
      <div className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
      <div className="h-3 w-3 rounded-full bg-cyan-400 animate-bounce" />
    </div>
  );
}

export function LoaderFour({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center p-6", className)}>
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-500 animate-ping opacity-75" />
        <div className="absolute inset-2 rounded-lg bg-cyan-400 shadow-lg shadow-cyan-500/50" />
      </div>
    </div>
  );
}
