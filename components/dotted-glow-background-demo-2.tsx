"use client";
import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function DottedGlowBackgroundDemoSecond() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-between space-y-6 px-8 py-16 text-center md:flex-row">
        <div>
          <h2 className="text-center text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl md:text-left dark:text-neutral-400">
            Ready to buy{" "}
            <span className="font-bold dark:text-white">Aceternity Pro</span>?
          </h2>
          <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
            Unlock premium components, advanced animations, and exclusive
            templates to build stunning modern interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-8 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

export { DottedGlowBackgroundDemoSecond as DottedGlowBackgroundDemo2 };
