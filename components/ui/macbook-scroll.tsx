"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MacbookScrollProps {
  src?: string;
  showGradient?: boolean;
  title?: React.ReactNode;
  badge?: React.ReactNode;
}

export function MacbookScroll({
  src = "https://assets.aceternity.com/linear-demo.webp",
  showGradient = false,
  title,
  badge,
}: MacbookScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openAngle, setOpenAngle] = useState(25);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setOpenAngle(Math.round(85 - progress * 80));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="flex min-h-[60rem] flex-col items-center justify-start py-20 [perspective:1200px]">
      {/* Title & Badge */}
      <div className="mb-12 flex flex-col items-center text-center">
        {badge && <div className="mb-4">{badge}</div>}
        <div className="text-3xl font-bold tracking-tight text-neutral-800 md:text-5xl dark:text-neutral-100">
          {title || "This Macbook is built with pure Tailwind & React."}
        </div>
      </div>

      {/* 3D Hardware Model */}
      <div className="relative flex flex-col items-center" style={{ transform: "rotateX(12deg) scale(0.9)" }}>
        {/* Screen Lid (Rotates around bottom edge) */}
        <div
          className="relative h-[24rem] w-[36rem] origin-bottom rounded-t-2xl border-4 border-neutral-700 bg-neutral-900 shadow-2xl transition-transform duration-100 ease-out sm:h-[30rem] sm:w-[46rem]"
          style={{ transform: `rotateX(-${openAngle}deg)` }}
        >
          {/* Webcam Notch */}
          <div className="absolute top-1 left-1/2 h-3 w-16 -translate-x-1/2 rounded-b-md bg-neutral-800 flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Screen Display */}
          <div className="m-3 h-[calc(100%-1.5rem)] overflow-hidden rounded-xl bg-black">
            <img src={src} alt="Macbook Screen" className="h-full w-full object-cover" />
          </div>

          {/* Glossy glare */}
          <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Keyboard Base Chassis */}
        <div className="relative h-12 w-[38rem] rounded-b-2xl border-2 border-neutral-700 bg-neutral-800 shadow-2xl sm:h-16 sm:w-[48rem]">
          {/* Keyboard Trackpad */}
          <div className="absolute top-1 left-1/2 h-8 w-24 -translate-x-1/2 rounded-md border border-neutral-600/50 bg-neutral-900/60 sm:h-10 sm:w-32" />
          {/* Front Notch Lip */}
          <div className="absolute -bottom-1 left-1/2 h-2 w-16 -translate-x-1/2 rounded-t-sm bg-neutral-600" />
        </div>

        {/* Shadow Ground */}
        <div className="mt-8 h-8 w-[36rem] rounded-full bg-cyan-500/20 filter blur-2xl sm:w-[46rem]" />
      </div>
    </div>
  );
}
