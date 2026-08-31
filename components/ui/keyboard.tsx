"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface KeyboardProps {
  enableSound?: boolean;
  showPreview?: boolean;
  className?: string;
}

export function Keyboard({
  enableSound = true,
  showPreview = true,
  className,
}: KeyboardProps) {
  const [typedText, setTypedText] = useState("JARVIS AI OS");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const keyRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "⌫"],
    ["SPACE", "CLEAR"],
  ];

  const playClickSound = () => {
    if (!enableSound || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600 + Math.random() * 200, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {}
  };

  const handleKeyPress = (k: string) => {
    setActiveKey(k);
    playClickSound();
    setTimeout(() => setActiveKey(null), 150);

    if (k === "⌫") {
      setTypedText((prev) => prev.slice(0, -1));
    } else if (k === "SPACE") {
      setTypedText((prev) => prev + " ");
    } else if (k === "CLEAR") {
      setTypedText("");
    } else {
      setTypedText((prev) => prev + k);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      if (k === "BACKSPACE") handleKeyPress("⌫");
      else if (k === " ") handleKeyPress("SPACE");
      else if (k.length === 1 && k >= "A" && k <= "Z") handleKeyPress(k);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("flex flex-col items-center gap-6 p-6 font-mono select-none", className)}>
      {showPreview && (
        <div className="flex h-16 w-full max-w-lg items-center justify-between rounded-xl border border-cyan-500/30 bg-neutral-900/90 px-6 shadow-inner backdrop-blur-md">
          <span className="text-xl font-bold text-cyan-400 tracking-wider">
            {typedText || <span className="text-neutral-600 font-normal">Type on keyboard...</span>}
          </span>
          <span className="h-6 w-2 bg-cyan-400 animate-pulse" />
        </div>
      )}

      {/* Mechanical Keyboard Chassis */}
      <div className="flex flex-col gap-2 rounded-2xl border-2 border-neutral-700 bg-neutral-950 p-4 shadow-2xl [perspective:800px]">
        {keyRows.map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-2">
            {row.map((k) => (
              <button
                key={k}
                onClick={() => handleKeyPress(k)}
                className={cn(
                  "flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 font-bold text-neutral-200 shadow-md transition-all active:scale-95",
                  k === "SPACE" ? "h-12 w-48 text-xs" : k === "CLEAR" || k === "⌫" ? "h-12 w-16 text-xs bg-neutral-800" : "h-12 w-11 sm:h-14 sm:w-13 text-base sm:text-lg",
                  activeKey === k ? "border-cyan-400 bg-cyan-500/30 text-cyan-300 shadow-cyan-500/40 translate-y-1" : "hover:bg-neutral-800 hover:text-white"
                )}
              >
                {k}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
