"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  commands?: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  className?: string;
}

export function Terminal({
  commands = [
    "npx shadcn@latest init",
    "npm install motion",
    "npx shadcn@latest add button card",
    "jarvis runtime --tier-6",
  ],
  outputs = {
    0: ["✔ Preflight checks passed.", "✔ Created components.json", "✔ Initialized project."],
    1: ["added 1 package in 2s"],
    2: ["✔ Done. Installed button, card."],
    3: ["✔ JARVIS Autonomous Constellation Active."],
  },
  typingSpeed = 40,
  delayBetweenCommands = 1200,
  className,
}: TerminalProps) {
  const [currentCmdIdx, setCurrentCmdIdx] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [history, setHistory] = useState<{ cmd: string; out: string[] }[]>([]);

  useEffect(() => {
    if (currentCmdIdx >= commands.length) return;

    const currentCmd = commands[currentCmdIdx];

    if (typedChars < currentCmd.length) {
      const timer = setTimeout(() => {
        setTypedChars((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          {
            cmd: currentCmd,
            out: outputs[currentCmdIdx] || ["✔ Command executed."],
          },
        ]);
        setCurrentCmdIdx((idx) => idx + 1);
        setTypedChars(0);
      }, delayBetweenCommands);
      return () => clearTimeout(timer);
    }
  }, [currentCmdIdx, typedChars, commands, outputs, typingSpeed, delayBetweenCommands]);

  return (
    <div
      className={cn(
        "w-full max-w-2xl mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-sm shadow-2xl text-neutral-300",
        className
      )}
    >
      {/* Terminal Titlebar */}
      <div className="mb-4 flex items-center justify-between border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-neutral-500">bash — jarvis-runtime</span>
        <div className="w-10" />
      </div>

      {/* History */}
      <div className="space-y-3">
        {history.map((h, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400">➜</span>
              <span className="text-purple-400">~</span>
              <span>{h.cmd}</span>
            </div>
            {h.out.map((line, oIdx) => (
              <div key={oIdx} className="text-xs text-neutral-400 pl-4">
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Active Typing Line */}
        {currentCmdIdx < commands.length && (
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="text-emerald-400">➜</span>
            <span className="text-purple-400">~</span>
            <span>{commands[currentCmdIdx].slice(0, typedChars)}</span>
            <span className="h-4 w-2 bg-cyan-400 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
