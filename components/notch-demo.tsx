"use client";
import React, { useState } from "react";
import { Notch, type NotchItem } from "@/components/ui/notch";
import { cn } from "@/lib/utils";

const COLORS = [
  { id: "#3b82f6", label: "Blue" },
  { id: "#8b5cf6", label: "Violet" },
  { id: "#10b981", label: "Emerald" },
  { id: "#f43f5e", label: "Rose" },
];

const ALIGNMENTS = [
  { id: "left", label: "Left" },
  { id: "center", label: "Center" },
  { id: "right", label: "Right" },
];

export default function NotchDemo() {
  const [bg, setBg] = useState("#3b82f6");
  const [align, setAlign] = useState<"left" | "center" | "right">("center");

  const items: NotchItem[] = [
    {
      id: "background",
      label: "Background",
      options: COLORS,
      value: bg,
      onChange: (id) => setBg(id),
    },
    {
      id: "alignment",
      label: "Alignment",
      options: ALIGNMENTS,
      value: align,
      onChange: (id) => setAlign(id as "left" | "center" | "right"),
    },
  ];

  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
        ? "items-end text-right"
        : "items-center text-center";

  return (
    <div className="relative flex min-h-[40rem] w-full items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 p-6 text-white">
      <div
        className={cn(
          "relative flex w-80 flex-col justify-center gap-2 overflow-hidden rounded-2xl p-4 shadow-2xl transition-all duration-300 border border-white/10",
          alignClass,
        )}
        style={{
          background: `linear-gradient(180deg, ${bg}44 0%, rgba(10,15,30,0.95) 100%)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1365&auto=format&fit=crop"
          alt="The serenity of the sea"
          className="relative z-20 h-48 w-full rounded-xl object-cover shadow-2xl"
        />
        <div className="px-1 mt-2">
          <h3 className="relative text-lg font-bold text-white">
            The serenity of the sea
          </h3>
          <p className="relative text-xs text-neutral-300 mt-1">
            Use the dynamic notch below to change the background theme and alignment.
          </p>
        </div>
      </div>

      <Notch items={items} position="bottom" offset={24} />
    </div>
  );
}
