"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CoverProps {
  children: React.ReactNode;
  className?: string;
}

export function Cover({ children, className }: CoverProps) {
  return (
    <span className={cn("relative inline-block px-3 py-1 text-white font-bold", className)}>
      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 -rotate-1 shadow-lg" />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
