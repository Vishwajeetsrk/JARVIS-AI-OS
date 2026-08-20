import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, ArrowRight, Activity, Cpu } from "lucide-react";

export function CyberAnimatedCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-cyan-500/20"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
          JARVIS // MK-85 ACTIVE
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          <Activity className="h-3 w-3 text-emerald-400 animate-pulse" /> Live Telemetry
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">
        Cybernetic Autonomous AI Interface
      </h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
        Engineered with smooth 60fps micro-animations, glassmorphism elevation, and responsive haptic audio feedback.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-2 text-slate-300">
          <Zap className="h-4 w-4 text-cyan-400" /> 0ms Latency
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 p-2 text-slate-300">
          <Cpu className="h-4 w-4 text-purple-400" /> 53 Design Systems
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:opacity-95"
      >
        Deploy Autonomous Flow <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}
