import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  avatarController,
  type AvatarState,
  type AvatarEmotion,
  type Viseme,
} from "@/lib/avatar/avatar-controller";
import {
  Sparkles, Heart, Zap, Shield, Smile, Eye, Volume2, Mic,
  Radio, Compass, RefreshCw
} from "lucide-react";

export function AICompanionAvatar({
  className = "",
  onToggleMode,
}: {
  className?: string;
  onToggleMode?: () => void;
}) {
  const [state, setState] = useState<AvatarState>("IDLE");
  const [emotion, setEmotion] = useState<AvatarEmotion>("neutral");
  const [viseme, setViseme] = useState<Viseme>("viseme_sil");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [blink, setBlink] = useState(false);
  const [breathing, setBreathing] = useState(0);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  // Subscribe to Avatar Controller Events
  useEffect(() => {
    const unsub = avatarController.subscribe((ev) => {
      setState(ev.state);
      setEmotion(ev.emotion);
      setViseme(ev.viseme);
      setIsSpeaking(ev.isSpeaking);
      setIsListening(ev.isListening);
    });
    return unsub;
  }, []);

  // Blinking Loop (subtle realistic blinks every 3-5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 140);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // Breathing Loop
  useEffect(() => {
    let frameId: number;
    let t = 0;
    const loop = () => {
      t += 0.03;
      setBreathing(Math.sin(t) * 3);
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Mouse / Eye Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    setEyePos({ x, y });
  };

  // Viseme mouth height and width map
  const getMouthDimensions = () => {
    if (!isSpeaking) {
      if (emotion === "happy" || emotion === "playful" || emotion === "celebrating") {
        return { w: 28, h: 6, rx: 6, ry: 3, border: "rounded-full" };
      }
      return { w: 20, h: 3, rx: 4, ry: 2, border: "rounded-full" };
    }
    switch (viseme) {
      case "viseme_aa":
      case "viseme_O":
        return { w: 26, h: 18, rx: 12, ry: 8, border: "rounded-full" };
      case "viseme_E":
      case "viseme_I":
        return { w: 32, h: 10, rx: 14, ry: 4, border: "rounded-full" };
      case "viseme_U":
        return { w: 16, h: 16, rx: 8, ry: 8, border: "rounded-full" };
      case "viseme_FF":
      case "viseme_PP":
        return { w: 22, h: 4, rx: 6, ry: 2, border: "rounded-full" };
      default:
        return { w: 24, h: 12, rx: 10, ry: 5, border: "rounded-full" };
    }
  };

  const mouth = getMouthDimensions();

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-950/95 via-indigo-950/40 to-slate-950/95 p-6 shadow-2xl backdrop-blur-2xl transition-all hover:border-cyan-400/60 ${className}`}
    >
      {/* 1. Cinematic Background Atmosphere & Light Pillars */}
      <div className="pointer-events-none absolute -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="pointer-events-none absolute -bottom-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />

      {/* Mode Toggle & Companion Badge */}
      <div className="z-10 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
            3D AI COMPANION
          </span>
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-300">
            LUMI × LYRA HYBRID
          </span>
        </div>

        {onToggleMode && (
          <button
            onClick={onToggleMode}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground transition-all hover:border-cyan-500/40 hover:text-cyan-300"
          >
            <RefreshCw className="h-3 w-3" /> Arc HUD Mode
          </button>
        )}
      </div>

      {/* 2. Interactive Character Visual Presence */}
      <div className="relative mt-4 flex h-60 w-60 items-center justify-center">
        {/* Holographic Concentric Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute h-56 w-56 rounded-full border border-dashed border-cyan-500/25"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="absolute h-48 w-48 rounded-full border border-cyan-400/20"
        />

        {/* Floating AI Companion Face Capsule */}
        <motion.div
          animate={{ y: breathing }}
          className="relative z-10 flex h-40 w-36 flex-col items-center justify-center rounded-[3rem] border border-cyan-300/40 bg-gradient-to-b from-slate-900/90 via-indigo-950/80 to-slate-900/95 p-4 shadow-[0_0_50px_rgba(6,182,212,0.3)] backdrop-blur-md"
        >
          {/* Subtle Cyber Forehead Halo Accent */}
          <div className="absolute top-3 h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />

          {/* Expressive Eyes with Eye Tracking */}
          <div className="mt-4 flex w-full items-center justify-around px-2">
            {/* Left Eye */}
            <div className="relative flex h-8 w-7 items-center justify-center overflow-hidden rounded-full border border-cyan-400/60 bg-slate-950 shadow-inner">
              {blink ? (
                <div className="h-0.5 w-6 bg-cyan-300 rounded-full" />
              ) : (
                <motion.div
                  animate={{ x: eyePos.x, y: eyePos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-400 shadow-[0_0_8px_#06b6d4]"
                >
                  <div className="absolute top-0.5 right-0.5 h-1.5 w-1.5 rounded-full bg-white opacity-90" />
                  <div className="h-2 w-2 rounded-full bg-slate-950" />
                </motion.div>
              )}
            </div>

            {/* Right Eye */}
            <div className="relative flex h-8 w-7 items-center justify-center overflow-hidden rounded-full border border-cyan-400/60 bg-slate-950 shadow-inner">
              {blink ? (
                <div className="h-0.5 w-6 bg-cyan-300 rounded-full" />
              ) : (
                <motion.div
                  animate={{ x: eyePos.x, y: eyePos.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-400 shadow-[0_0_8px_#06b6d4]"
                >
                  <div className="absolute top-0.5 right-0.5 h-1.5 w-1.5 rounded-full bg-white opacity-90" />
                  <div className="h-2 w-2 rounded-full bg-slate-950" />
                </motion.div>
              )}
            </div>
          </div>

          {/* Cheeks Blush on Happy/Playful */}
          {(emotion === "happy" || emotion === "playful" || emotion === "caring" || emotion === "celebrating") && (
            <div className="mt-1 flex w-full justify-between px-3">
              <div className="h-2 w-4 rounded-full bg-pink-500/40 blur-[2px]" />
              <div className="h-2 w-4 rounded-full bg-pink-500/40 blur-[2px]" />
            </div>
          )}

          {/* Dynamic Lip-Synced Mouth */}
          <div className="mt-3 flex h-6 items-center justify-center">
            <motion.div
              animate={{
                width: mouth.w,
                height: mouth.h,
              }}
              transition={{ duration: 0.08 }}
              className={`border border-cyan-300/80 bg-gradient-to-b from-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] ${mouth.border}`}
            />
          </div>
        </motion.div>

        {/* State Particle Waveform when Speaking or Listening */}
        {isListening && (
          <div className="pointer-events-none absolute -bottom-2 flex items-center gap-1">
            <span className="h-3 w-1 rounded-full bg-cyan-400 animate-pulse" />
            <span className="h-5 w-1 rounded-full bg-cyan-300 animate-pulse" style={{ animationDelay: "150ms" }} />
            <span className="h-7 w-1 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "300ms" }} />
            <span className="h-5 w-1 rounded-full bg-cyan-300 animate-pulse" style={{ animationDelay: "450ms" }} />
            <span className="h-3 w-1 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "600ms" }} />
          </div>
        )}
      </div>

      {/* 3. Companion Status & Emotion Pill */}
      <div className="mt-2 flex items-center gap-3">
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-cyan-300">{state}</span>
        </div>
        <span className="text-slate-600">•</span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Smile className="h-3.5 w-3.5 text-purple-400" />
          <span className="capitalize">{emotion} expression</span>
        </div>
      </div>

      {/* Interactive Quick Expressions */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-[10px]">
        {(["attentive", "curious", "happy", "caring", "focused", "playful"] as AvatarEmotion[]).map((em) => (
          <button
            key={em}
            onClick={() => avatarController.setEmotion(em)}
            className={`rounded-lg border px-2 py-0.5 capitalize transition-all ${
              emotion === em
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-200"
                : "border-white/5 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-slate-200"
            }`}
          >
            {em}
          </button>
        ))}
      </div>
    </div>
  );
}
