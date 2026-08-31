"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface AppleCardData {
  category: string;
  title: string;
  src: string;
  content?: React.ReactNode;
}

export function Card({
  card,
  index,
  layout = false,
}: {
  card: AppleCardData;
  index: number;
  layout?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative flex h-80 w-56 flex-shrink-0 flex-col items-start justify-end overflow-hidden rounded-3xl bg-neutral-900 p-6 text-left shadow-xl transition-all duration-300 hover:scale-[1.02] sm:h-96 sm:w-72"
      >
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {card.category}
          </span>
          <h3 className="text-lg font-bold text-white leading-tight sm:text-xl">
            {card.title}
          </h3>
        </div>
      </button>

      {/* Modal Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-neutral-700 bg-neutral-900 p-6 shadow-2xl text-white">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
            >
              ✕
            </button>
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {card.category}
              </span>
              <h2 className="text-2xl font-bold sm:text-3xl">{card.title}</h2>
              <img
                src={card.src}
                alt={card.title}
                className="h-64 w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="pt-2 text-neutral-300 leading-relaxed">
                {card.content || (
                  <p>
                    Experience advanced AI capabilities with zero latency and high precision execution tailored for enterprise pipelines.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Carousel({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto py-6 px-4 no-scrollbar">
      {items}
    </div>
  );
}
