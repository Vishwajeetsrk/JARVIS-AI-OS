"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ThreeDMarqueeProps {
  images: string[];
  className?: string;
}

export function ThreeDMarquee({ images = [], className }: ThreeDMarqueeProps) {
  const displayImages = images.length > 0 ? images : [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
  ];

  return (
    <div
      className={cn(
        "relative flex h-96 w-full items-center overflow-hidden [perspective:1000px]",
        className
      )}
    >
      <div
        className="flex gap-6 animate-marquee select-none"
        style={{
          transform: "rotateX(15deg) rotateY(-10deg) rotateZ(4deg)",
        }}
      >
        {[...displayImages, ...displayImages].map((src, idx) => (
          <div
            key={idx}
            className="h-44 w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/80 p-1 shadow-2xl transition-transform hover:scale-105"
          >
            <img src={src} alt={`Marquee ${idx}`} className="h-full w-full rounded-xl object-cover" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: rotateX(15deg) rotateY(-10deg) rotateZ(4deg) translateX(0%);
          }
          100% {
            transform: rotateX(15deg) rotateY(-10deg) rotateZ(4deg) translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
