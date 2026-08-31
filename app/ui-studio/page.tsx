"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UIComponentStudio from "@/components/UIComponentStudio";

export default function UIStudioPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#04080f] text-white">
      {/* Top Nav with Back to Orbit Link */}
      <div className="fixed top-4 left-4 z-[9999999] flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-neutral-900/90 px-4 py-2 text-xs font-bold text-cyan-400 backdrop-blur-xl shadow-lg hover:border-cyan-400 hover:bg-cyan-950/60 hover:text-white transition-all"
        >
          <ArrowLeft size={14} />
          <span>Back to JARVIS AI OS Orbit</span>
        </Link>
      </div>

      {/* Full Dedicated UI Component Studio */}
      <UIComponentStudio isOpen={true} onClose={() => {
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      }} />
    </div>
  );
}
