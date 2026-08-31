"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GooeyInputProps {
  placeholder?: string;
  className?: string;
  onSearch?: (val: string) => void;
}

export function GooeyInput({
  placeholder = "Search anything in JARVIS...",
  className,
  onSearch,
}: GooeyInputProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={cn("relative flex items-center justify-center p-4", className)}>
      {/* SVG Gooey Filter */}
      <svg className="absolute h-0 w-0 pointer-events-none">
        <defs>
          <filter id="gooey-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className={cn(
          "relative flex w-full max-w-lg items-center rounded-full border border-cyan-500/30 bg-neutral-900/90 px-5 py-3 shadow-lg backdrop-blur-md transition-all duration-300",
          focused && "border-cyan-400 ring-2 ring-cyan-500/30 shadow-cyan-500/20"
        )}
      >
        <span className="mr-3 text-cyan-400">⚡</span>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onSearch?.(e.target.value);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium text-white placeholder-neutral-500 focus:outline-none sm:text-base"
        />
        {value && (
          <button
            onClick={() => {
              setValue("");
              onSearch?.("");
            }}
            className="ml-2 text-xs font-bold text-neutral-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
