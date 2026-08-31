"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export function FeaturesSection({
  features = [
    { title: "Built for Developers", description: "Engineered with precision for maximum workflow velocity.", icon: "⚡" },
    { title: "Autonomous Agents", description: "18 Specialist AI agents orchestrating full lifecycle actions.", icon: "🤖" },
    { title: "100% Verified Evidence", description: "Zero-fabrication telemetry with Level 6 Human approval gates.", icon: "🛡️" },
    { title: "Universal Connectors", description: "Plug into GitHub, LinkedIn, Supabase, and Razorpay.", icon: "🔗" },
  ],
  className,
}: {
  features?: Feature[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto", className)}>
      {features.map((f, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-900 shadow-xl"
        >
          <div className="absolute top-0 left-0 h-1 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          <div className="text-3xl mb-4">{f.icon || "✨"}</div>
          <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
