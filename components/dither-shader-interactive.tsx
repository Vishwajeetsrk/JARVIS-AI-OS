"use client";
import React, { useState } from "react";
import { DitherShader } from "@/components/ui/dither-shader";

export default function DitherShaderInteractive() {
  const [ditherMode, setDitherMode] = useState<
    "bayer" | "halftone" | "noise" | "crosshatch"
  >("bayer");
  const [colorMode, setColorMode] = useState<
    "original" | "grayscale" | "duotone" | "custom"
  >("grayscale");
  const [gridSize, setGridSize] = useState(3);
  const [invert, setInvert] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [threshold, setThreshold] = useState(0.5);
  const [primaryColor, setPrimaryColor] = useState("#0a0a0a");
  const [secondaryColor, setSecondaryColor] = useState("#fafafa");

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Canvas - responsive sizing via Tailwind */}
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-xl dark:border-neutral-800">
        <DitherShader
          src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432&auto=format&fit=crop"
          gridSize={gridSize}
          ditherMode={ditherMode}
          colorMode={colorMode}
          invert={invert}
          animated={animated}
          animationSpeed={0.025}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          threshold={threshold}
          className="h-[300px] w-[400px] sm:h-[350px] sm:w-[500px] md:h-[400px] md:w-[600px]"
        />
      </div>

      {/* Controls Panel */}
      <div className="w-full max-w-xl rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
          {/* Dither Mode */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Pattern
            </label>
            <select
              value={ditherMode}
              onChange={(e) =>
                setDitherMode(
                  e.target.value as
                    | "bayer"
                    | "halftone"
                    | "noise"
                    | "crosshatch",
                )
              }
              className="h-9 rounded-lg border border-neutral-200 bg-white px-2.5 text-sm text-neutral-900 transition-colors outline-none focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
            >
              <option value="bayer">Bayer</option>
              <option value="halftone">Halftone</option>
              <option value="noise">Noise</option>
              <option value="crosshatch">Crosshatch</option>
            </select>
          </div>

          {/* Color Mode */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Colors
            </label>
            <select
              value={colorMode}
              onChange={(e) =>
                setColorMode(
                  e.target.value as
                    | "original"
                    | "grayscale"
                    | "duotone"
                    | "custom",
                )
              }
              className="h-9 rounded-lg border border-neutral-200 bg-white px-2.5 text-sm text-neutral-900 transition-colors outline-none focus:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
            >
              <option value="grayscale">Grayscale</option>
              <option value="original">Original</option>
              <option value="duotone">Duotone</option>
            </select>
          </div>

          {/* Grid Size */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Size: {gridSize}px
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={gridSize}
              onChange={(e) => setGridSize(Number(e.target.value))}
              className="mt-1.5 h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-neutral-900 dark:bg-neutral-700 dark:accent-white"
            />
          </div>

          {/* Threshold */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Threshold: {threshold.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="mt-1.5 h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-neutral-900 dark:bg-neutral-700 dark:accent-white"
            />
          </div>

          {/* Duotone Colors - only show when duotone is selected */}
          {colorMode === "duotone" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Dark Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-9 w-12 cursor-pointer rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                  <span className="font-mono text-xs text-neutral-500">
                    {primaryColor}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  Light Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="h-9 w-12 cursor-pointer rounded-lg border border-neutral-200 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                  />
                  <span className="font-mono text-xs text-neutral-500">
                    {secondaryColor}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Toggle Buttons Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setInvert(!invert)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              invert
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {invert ? "Inverted" : "Invert"}
          </button>
          <button
            onClick={() => setAnimated(!animated)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              animated
                ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                : "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            }`}
          >
            {animated ? "Animating" : "Animate"}
          </button>
          <button
            onClick={() => {
              setDitherMode("bayer");
              setColorMode("grayscale");
              setGridSize(3);
              setInvert(false);
              setAnimated(false);
              setThreshold(0.5);
              setPrimaryColor("#0a0a0a");
              setSecondaryColor("#fafafa");
            }}
            className="rounded-full bg-neutral-200 px-4 py-1.5 text-xs font-medium text-neutral-700 transition-all hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
