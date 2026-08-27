import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BookPage {
  title: string;
  subtitle?: string;
  content: string;
  chapter?: string;
  badge?: string;
  image?: string;
}

export interface BookFlipAnimationProps {
  pages?: BookPage[];
  coverTitle?: string;
  coverSubtitle?: string;
  author?: string;
  className?: string;
}

const DEFAULT_PAGES: BookPage[] = [
  {
    chapter: "Chapter I",
    title: "Autonomous Intelligence",
    subtitle: "The Genesis of JARVIS AI OS",
    badge: "Architecture",
    content:
      "JARVIS AI OS operates as a unified cognitive fabric. By intertwining 4-tier neural memory with real-time multi-agent dispatch, every instruction is analyzed, refined, and executed across parallel developer pipelines.",
  },
  {
    chapter: "Chapter II",
    title: "Self-Healing Workflows",
    subtitle: "Automated Error Remediation",
    badge: "Reliability",
    content:
      "When compilation errors or UI discrepancies arise, the feedback loop triggers an autonomous diagnostic session. AST verification and type-checking happen continuously in the background.",
  },
  {
    chapter: "Chapter III",
    title: "Generative UI & Motion",
    subtitle: "From Thought to Interface",
    badge: "Design",
    content:
      "Modern interfaces require fluid dynamics. Leveraging Aceternity UI, Magic UI, and Framer Motion, every component breathes with subtle micro-interactions and tactile feedback.",
  },
  {
    chapter: "Chapter IV",
    title: "The Universal Connectors",
    subtitle: "Bridging Every Tool & Cloud",
    badge: "Integration",
    content:
      "Through Model Context Protocol (MCP), JARVIS interfaces directly with databases, Git repositories, terminal commands, and third-party APIs with zero friction.",
  },
];

export function BookFlipAnimation({
  pages = DEFAULT_PAGES,
  coverTitle = "JARVIS AI OS",
  author = "Vishwajeet & JARVIS",
  className,
}: BookFlipAnimationProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const page = pages[currentPage] || pages[0];

  return (
    <div className={cn("relative flex flex-col items-center justify-center p-4 sm:p-8", className)}>
      <div className="relative w-full max-w-[540px]">
        {/* Book Outer Spine & Drop Shadow */}
        <div className="relative mx-auto min-h-[360px] sm:min-h-[420px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-[#121216] to-black p-4 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(232,122,58,0.15)] transition-all">
          <div className="absolute inset-y-0 left-0 w-2 rounded-l-2xl bg-gradient-to-r from-[#e87a3a] via-[#b85a20] to-zinc-800 opacity-80" />
          <div className="absolute inset-y-0 left-2 w-px bg-white/10" />

          {/* Book Header Bar */}
          <div className="mb-4 flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#e87a3a]" />
              <span className="font-mono uppercase tracking-wider text-zinc-300">
                {coverTitle}
              </span>
            </div>
            <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400">
              Page {currentPage + 1} of {pages.length}
            </span>
          </div>

          {/* Animated Page Content with 3D Flip Transition */}
          <div className="relative min-h-[240px] sm:min-h-[280px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ rotateY: 30, opacity: 0, scale: 0.96 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                exit={{ rotateY: -30, opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-[#e87a3a] uppercase tracking-widest font-semibold">
                      {page.chapter || `Section ${currentPage + 1}`}
                    </span>
                    {page.badge && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-zinc-300">
                        {page.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                    {page.title}
                  </h3>

                  {page.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-4">
                      {page.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300/90 font-sans">
                    {page.content}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-zinc-500">
                  <span className="italic">{author}</span>
                  <span className="font-mono">§ {currentPage + 1}.0</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Book Controls */}
          <div className="mt-4 flex items-center justify-between pt-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={cn(
                "flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all",
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    currentPage === idx
                      ? "w-5 bg-[#e87a3a]"
                      : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                  )}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={cn(
                "flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all",
                currentPage === pages.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-white/10 hover:text-white"
              )}
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
