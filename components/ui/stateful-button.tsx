"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface StatefulButtonProps {
  children: React.ReactNode;
  onClick?: () => Promise<any> | void;
  className?: string;
}

export function Button({ children, onClick, className }: StatefulButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async () => {
    if (state !== "idle") return;
    if (!onClick) return;

    setState("loading");
    try {
      await onClick();
      setState("success");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("idle");
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={state !== "idle"}
      className={cn(
        "relative flex h-11 min-w-36 items-center justify-center rounded-xl bg-cyan-500 px-6 font-bold text-black shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-95 disabled:opacity-80",
        state === "success" && "bg-emerald-500 text-white shadow-emerald-500/30",
        className
      )}
    >
      {state === "idle" && children}
      {state === "loading" && (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
          <span>Executing...</span>
        </span>
      )}
      {state === "success" && (
        <span className="flex items-center gap-1.5 font-bold">
          <span>✔</span> Done
        </span>
      )}
    </button>
  );
}
