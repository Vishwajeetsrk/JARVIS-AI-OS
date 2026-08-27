import React, { useState, useEffect, Suspense } from "react";
import { cn } from "@/lib/utils";
import { JarvisStar } from "@/components/jarvis/logo";
import { motion, AnimatePresence } from "framer-motion";

export interface JarvisLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  sublabel?: string;
  className?: string;
  showTelemetry?: boolean;
}

const TELEMETRY_MESSAGES = [
  "Initializing Quantum Neural Weights...",
  "Connecting Supabase Cloud Database (15 Tables)...",
  "Mounting 8-Bot Autonomous Fleet...",
  "Calibrating Sub-Second Real-Time Voice Studio...",
  "Loading 3D Motion UI & Canvas Engine...",
  "Syncing 4-Tier Neural Memory Matrix...",
  "Readying Autonomous Workspace...",
];

/**
 * High-tech holographic arc-reactor spinner
 */
export function JarvisReactorLoader({
  size = "md",
  label,
  sublabel,
  className,
  showTelemetry = false,
}: JarvisLoaderProps) {
  const [telemetryIndex, setTelemetryIndex] = useState(0);

  useEffect(() => {
    if (!showTelemetry) return;
    const interval = setInterval(() => {
      setTelemetryIndex((prev) => (prev + 1) % TELEMETRY_MESSAGES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [showTelemetry]);

  const sizeDimensions = {
    sm: { star: 32, box: "h-20" },
    md: { star: 48, box: "h-36" },
    lg: { star: 72, box: "h-52" },
    xl: { star: 96, box: "h-64" },
  }[size];

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4 text-center p-6", className)}>
      <div className="relative flex items-center justify-center">
        {/* Outer pulsating energy radar wave */}
        <div className="absolute w-24 h-24 rounded-full border border-cyan-500/20 animate-ping opacity-40 pointer-events-none" />
        <div className="absolute w-32 h-32 rounded-full border border-purple-500/15 animate-pulse pointer-events-none" />

        {/* Central Jarvis Holographic Core */}
        <JarvisStar size={sizeDimensions.star} interactive={false} />
      </div>

      {(label || showTelemetry) && (
        <div className="flex flex-col items-center gap-1.5 max-w-sm">
          <div className="text-sm font-bold tracking-wider text-white flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            {label || TELEMETRY_MESSAGES[telemetryIndex]}
          </div>
          {sublabel ? (
            <p className="text-xs text-slate-400">{sublabel}</p>
          ) : (
            <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800 mt-1">
              <div className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 animate-[shimmer_1.5s_infinite] w-full origin-left" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Full page or section glassmorphic loading screen
 */
export function JarvisPageLoader({
  title = "JARVIS AI OS",
  subtitle = "Initializing Autonomous Environment...",
  fullscreen = false,
}: {
  title?: string;
  subtitle?: string;
  fullscreen?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-2xl z-50 p-6 select-none",
        fullscreen ? "fixed inset-0 min-h-screen" : "min-h-[400px] w-full rounded-2xl border border-slate-800/80 my-4"
      )}
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <JarvisReactorLoader size="lg" showTelemetry={true} />

        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-extrabold tracking-widest text-white uppercase flex items-center gap-2">
            {title}
            <span className="text-xs px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              v3.0 SOTA
            </span>
          </h3>
          <p className="text-xs font-mono text-slate-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Quantum lightweight spinner
 */
export function JarvisQuantumSpinner({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("relative inline-flex items-center justify-center shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 50 50"
        width={size}
        height={size}
        className="animate-spin text-cyan-400"
        style={{ animationDuration: "1s" }}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="80 40"
          className="opacity-90"
        />
      </svg>
      <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
    </div>
  );
}

/**
 * Next-Gen Shimmer Card Skeleton
 */
export function JarvisCardSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 space-y-4 backdrop-blur-sm",
        className
      )}
    >
      {/* Animated holographic sweep overlay */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-500/10 via-purple-500/10 to-transparent animate-[shimmer_2s_infinite]" />

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-800/80 animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-1/3 rounded-md bg-slate-800/80 animate-pulse" />
          <div className="h-3 w-1/2 rounded-md bg-slate-800/50 animate-pulse" />
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <div className="h-3 w-full rounded-md bg-slate-800/60 animate-pulse" />
        <div className="h-3 w-4/5 rounded-md bg-slate-800/60 animate-pulse" />
        <div className="h-3 w-2/3 rounded-md bg-slate-800/40 animate-pulse" />
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
        <div className="h-4 w-16 rounded-md bg-slate-800/60 animate-pulse" />
        <div className="h-8 w-24 rounded-xl bg-slate-800/80 animate-pulse" />
      </div>
    </div>
  );
}

/**
 * Bento Grid Shimmer Skeleton
 */
export function JarvisBentoSkeleton({ count = 4, className }: { count?: number; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {Array.from({ length: count }).map((_, idx) => (
        <JarvisCardSkeleton key={idx} />
      ))}
    </div>
  );
}

/**
 * Reusable Lazy Route Boundary with Smooth Entrance
 */
export function LazyRouteBoundary({
  children,
  fallbackTitle,
}: {
  children: React.ReactNode;
  fallbackTitle?: string;
}) {
  return (
    <Suspense fallback={<JarvisPageLoader title={fallbackTitle} />}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Suspense>
  );
}
