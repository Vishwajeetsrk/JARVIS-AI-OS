"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HeroSectionOneProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  primaryCta?: string;
  secondaryCta?: string;
  previewImage?: string;
  className?: string;
}

export function HeroSectionOne({
  title = "Launch your website in hours, not days",
  subtitle = "With AI, you can launch your website in hours, not days. Try our best in class, state of the art, cutting edge AI tools.",
  badge = "Introducing NEXORA APEX v4.0",
  primaryCta = "Explore Now",
  secondaryCta = "Contact Support",
  previewImage = "https://assets.aceternity.com/pro/aceternity-landing.webp",
  className,
}: HeroSectionOneProps) {
  return (
    <div className={cn("relative mx-auto my-6 flex max-w-6xl flex-col items-center justify-center p-6 text-center", className)}>
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
        <span>⚡</span> {badge} <span>→</span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg leading-relaxed">
        {subtitle}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button className="rounded-xl bg-cyan-500 px-8 py-3 font-bold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95">
          {primaryCta}
        </button>
        <button className="rounded-xl border border-neutral-700 bg-neutral-900 px-8 py-3 font-bold text-white transition-all hover:bg-neutral-800 hover:border-neutral-600">
          {secondaryCta}
        </button>
      </div>

      {/* Preview Card */}
      <div className="mt-14 w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-2 shadow-2xl">
        <img src={previewImage} alt="Hero Preview" className="h-auto w-full rounded-2xl object-cover" />
      </div>
    </div>
  );
}
