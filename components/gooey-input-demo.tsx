"use client";

import { GooeyInput } from "@/components/ui/gooey-input";

export default function GooeyInputDemo() {
  return (
    <div className="flex h-44 w-full items-center justify-center p-6 bg-neutral-950 rounded-2xl border border-white/10">
      <GooeyInput placeholder="Search JARVIS agents..." />
    </div>
  );
}
