"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextHoverEffectProps {
  text: string;
  className?: string;
}

export function TextHoverEffect({ text = "ACET", className }: TextHoverEffectProps) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className={cn("flex items-center justify-center select-none", className)}>
      <svg
        ref={svgRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="h-48 w-full max-w-2xl cursor-pointer"
        viewBox="0 0 600 200"
      >
        <defs>
          <radialGradient
            id="text-spotlight"
            cx={cursor.x}
            cy={cursor.y}
            r="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Base stroke */}
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="2"
          fill="transparent"
          className="text-8xl font-black tracking-widest uppercase font-sans"
        >
          {text}
        </text>

        {/* Illuminated Hover Stroke */}
        {hovered && (
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#text-spotlight)"
            strokeWidth="3"
            fill="url(#text-spotlight)"
            className="text-8xl font-black tracking-widest uppercase font-sans transition-all duration-75"
          >
            {text}
          </text>
        )}
      </svg>
    </div>
  );
}
