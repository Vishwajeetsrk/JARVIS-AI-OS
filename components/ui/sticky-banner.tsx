"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface StickyBannerProps {
  children: React.ReactNode;
  className?: string;
}

export function StickyBanner({ children, className }: StickyBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-md sm:text-sm",
        className
      )}
    >
      <div className="flex-1 text-center">{children}</div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 rounded px-1.5 py-0.5 hover:bg-white/20"
      >
        ✕
      </button>
    </div>
  );
}
