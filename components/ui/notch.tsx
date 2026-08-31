"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface NotchOption {
  id: string;
  label: string;
}

export interface NotchItem {
  id: string;
  label: string;
  options: NotchOption[];
  value: string;
  onChange: (id: string) => void;
}

interface NotchProps {
  items: NotchItem[];
  position?: "top" | "bottom";
  className?: string;
}

export function Notch({ items, position = "bottom", className }: NotchProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-neutral-900/90 px-4 py-2 text-white shadow-2xl backdrop-blur-xl transition-all duration-300",
        position === "bottom" ? "bottom-6" : "top-6",
        className
      )}
    >
      {items.map((item) => (
        <div key={item.id} className="relative flex items-center gap-1.5">
          <button
            onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <span>{item.label}:</span>
            <span className="capitalize text-cyan-400">
              {item.options.find((o) => o.id === item.value)?.label || item.value}
            </span>
          </button>

          {/* Expanded Option Popover */}
          {activeItem === item.id && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full border border-white/10 bg-neutral-950/95 p-1 shadow-xl backdrop-blur-md">
              {item.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    item.onChange(opt.id);
                    setActiveItem(null);
                  }}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium transition-all",
                    item.value === opt.id
                      ? "bg-cyan-500 text-black font-bold shadow-sm"
                      : "text-neutral-300 hover:bg-white/10"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
