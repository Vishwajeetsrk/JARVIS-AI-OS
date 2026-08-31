"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  language?: string;
  filename?: string;
  highlightLines?: number[];
  code: string;
  className?: string;
}

export function CodeBlock({
  language = "tsx",
  filename = "Component.tsx",
  highlightLines = [],
  code,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 font-mono text-sm shadow-2xl text-neutral-300",
        className
      )}
    >
      {/* Titlebar */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-semibold text-neutral-400">{filename}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-cyan-400 hover:text-white"
        >
          {copied ? "✔ Copied!" : "📋 Copy Code"}
        </button>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto p-4 leading-relaxed">
        <pre>
          {lines.map((line, idx) => {
            const lineNum = idx + 1;
            const isHighlighted = highlightLines.includes(lineNum);
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-4 px-2 py-0.5 rounded",
                  isHighlighted && "bg-cyan-500/10 border-l-2 border-cyan-400 text-cyan-200"
                )}
              >
                <span className="w-6 select-none text-right text-xs text-neutral-600">
                  {lineNum}
                </span>
                <code>{line}</code>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
