"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface SlideData {
  title: string;
  button?: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
  className?: string;
}

export default function Carousel({ slides = [], className }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  if (!slides.length) return null;

  return (
    <div className={cn("relative mx-auto max-w-5xl overflow-hidden py-10 px-4", className)}>
      <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              idx === current ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            )}
          >
            <img src={s.src} alt={s.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-4xl">{s.title}</h3>
              </div>
              <button className="rounded-full bg-cyan-500 px-6 py-2.5 font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95">
                {s.button || "Explore"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white hover:border-cyan-400"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white hover:border-cyan-400"
        >
          →
        </button>
      </div>
    </div>
  );
}
