"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: TracingBeamProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);
      setScrollY(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative mx-auto max-w-4xl px-6", className)}>
      {/* Neon Tracer Line */}
      <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-neutral-800">
        <div
          style={{ height: `${scrollY}%` }}
          className="w-full bg-cyan-400 shadow-[0_0_12px_#38bdf8] transition-all duration-75"
        />
        <div
          style={{ top: `${scrollY}%` }}
          className="absolute -left-1.5 h-4 w-4 rounded-full border-2 border-cyan-400 bg-neutral-900 shadow-md shadow-cyan-500/50"
        />
      </div>

      <div className="pl-6">{children}</div>
    </div>
  );
}
