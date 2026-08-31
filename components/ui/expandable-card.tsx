"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ExpandableItem {
  title: string;
  description: string;
  src: string;
  ctaText: string;
  ctaLink?: string;
  content?: string | (() => React.ReactNode);
}

export function ExpandableCardList({
  items = [],
  className,
}: {
  items: ExpandableItem[];
  className?: string;
}) {
  const [active, setActive] = useState<ExpandableItem | null>(null);

  return (
    <div className={cn("w-full max-w-2xl mx-auto space-y-4", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          onClick={() => setActive(item)}
          className="flex cursor-pointer items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 transition-all hover:border-cyan-500/40 hover:bg-neutral-800/80"
        >
          <div className="flex items-center gap-4">
            <img src={item.src} alt={item.title} className="h-14 w-14 rounded-xl object-cover" />
            <div>
              <h4 className="font-bold text-white">{item.title}</h4>
              <p className="text-xs text-neutral-400">{item.description}</p>
            </div>
          </div>
          <button className="rounded-full bg-cyan-500/20 px-4 py-1.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500 hover:text-black">
            {item.ctaText}
          </button>
        </div>
      ))}

      {/* Expanded Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-neutral-700 bg-neutral-900 p-6 text-white shadow-2xl">
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
            >
              ✕
            </button>
            <img src={active.src} alt={active.title} className="h-56 w-full rounded-2xl object-cover mb-4" />
            <h3 className="text-2xl font-bold">{active.title}</h3>
            <p className="text-sm text-cyan-400 mb-4">{active.description}</p>
            <div className="text-neutral-300 text-sm leading-relaxed mb-6">
              {typeof active.content === "function" ? active.content() : active.content || "Expanded content details."}
            </div>
            <a
              href={active.ctaLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl bg-cyan-500 py-3 text-center font-bold text-black hover:bg-cyan-400"
            >
              {active.ctaText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
