"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

export function AnimatedTestimonials({
  testimonials = [],
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials.length) return null;

  const current = testimonials[active];

  return (
    <div className={cn("mx-auto max-w-4xl p-6 sm:p-10", className)}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        {/* Avatar Stack */}
        <div className="relative flex justify-center [perspective:800px]">
          {testimonials.map((t, idx) => {
            const offset = (idx - active + testimonials.length) % testimonials.length;
            if (offset > 2) return null;

            return (
              <div
                key={t.name}
                style={{
                  transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.08}) rotate(${offset * 3}deg)`,
                  zIndex: 20 - offset,
                }}
                className={cn(
                  "absolute h-72 w-72 overflow-hidden rounded-3xl border-2 border-neutral-700 bg-neutral-900 shadow-2xl transition-all duration-500 ease-out sm:h-80 sm:w-80",
                  offset === 0 ? "border-cyan-400/80 shadow-cyan-500/20" : "opacity-40"
                )}
              >
                <img src={t.src} alt={t.name} className="h-full w-full object-cover" />
              </div>
            );
          })}
          <div className="h-72 sm:h-80 w-72 sm:w-80 pointer-events-none" />
        </div>

        {/* Quote & Author Info */}
        <div className="flex flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="text-4xl text-cyan-400 font-serif">“</div>
            <p className="text-lg font-medium text-neutral-200 sm:text-xl leading-relaxed">
              {current.quote}
            </p>
            <div>
              <h4 className="text-lg font-bold text-white">{current.name}</h4>
              <p className="text-sm text-cyan-400">{current.designation}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white transition-colors hover:border-cyan-400 hover:bg-neutral-800"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 text-white transition-colors hover:border-cyan-400 hover:bg-neutral-800"
            >
              →
            </button>
            <span className="text-xs font-mono text-neutral-500 ml-2">
              {active + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
