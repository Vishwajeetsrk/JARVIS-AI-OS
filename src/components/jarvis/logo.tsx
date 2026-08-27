import { cn } from "@/lib/utils";

export interface JarvisLogoProps {
  className?: string;
  size?: number;
  variant?: "default" | "minimal" | "reactor" | "hologram" | "cyber";
  interactive?: boolean;
}

export function JarvisStar({ className, size = 28, variant = "default", interactive = true }: JarvisLogoProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center select-none group",
        interactive && "cursor-pointer transition-transform duration-300 hover:scale-110",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* Ambient background bloom glow */}
      <div
        className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/40 via-purple-500/30 to-amber-500/30 animate-pulse pointer-events-none"
        style={{ transform: "scale(1.25)" }}
      />

      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        className="relative z-10 shrink-0 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="jarvisOuterArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="45%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <linearGradient id="jarvisInnerArcGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          <linearGradient id="jarvisCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#38bdf8" />
            <stop offset="70%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          <radialGradient id="jarvisReactorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="80%" stopColor="#c084fc" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <filter id="jarvisNeonBloom" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="jarvisCoreShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#38bdf8" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Ambient Back Glow Circle */}
        <circle cx="60" cy="60" r="54" fill="url(#jarvisReactorGlow)" opacity="0.7" />

        {/* Outer Orbit Ring (Counter Clockwise) */}
        <g
          className="origin-center animate-[spin_10s_linear_infinite] group-hover:[animation-duration:4s]"
          style={{ transformOrigin: "60px 60px" }}
        >
          <circle
            cx="60"
            cy="60"
            r="48"
            stroke="url(#jarvisOuterArcGrad)"
            strokeWidth="2.2"
            strokeDasharray="28 10 8 10"
            fill="none"
            opacity="0.85"
            filter="url(#jarvisNeonBloom)"
          />
          {/* Orbital Satellite Node */}
          <circle cx="60" cy="12" r="2.8" fill="#38bdf8" filter="url(#jarvisNeonBloom)" />
          <circle cx="60" cy="108" r="2.2" fill="#c084fc" />
        </g>

        {/* Inner Segmented Tech Ring (Clockwise) */}
        <g
          className="origin-center animate-[spin_14s_linear_infinite_reverse] group-hover:[animation-duration:6s]"
          style={{ transformOrigin: "60px 60px" }}
        >
          <circle
            cx="60"
            cy="60"
            r="36"
            stroke="url(#jarvisInnerArcGrad)"
            strokeWidth="1.8"
            strokeDasharray="14 7 4 7"
            fill="none"
            opacity="0.75"
          />
          {/* Orbit Nodes */}
          <circle cx="24" cy="60" r="2" fill="#fbbf24" />
          <circle cx="96" cy="60" r="2" fill="#06b6d4" />
        </g>

        {/* Micro Tech Marks & Compass Crosshairs */}
        <line x1="60" y1="18" x2="60" y2="24" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="96" x2="60" y2="102" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="18" y1="60" x2="24" y2="60" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
        <line x1="96" y1="60" x2="102" y2="60" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />

        {/* Central Arc-Reactor Star/Diamond Energy Emitters */}
        <g filter="url(#jarvisCoreShadow)">
          {/* Gold North-South Shard */}
          <path
            d="M60 26 L74 54 L60 44 L46 54 Z"
            fill="url(#jarvisInnerArcGrad)"
            stroke="#fbbf24"
            strokeWidth="1"
            className="transition-transform duration-300 group-hover:scale-105"
            style={{ transformOrigin: "60px 60px" }}
          />
          {/* Subtle Lower Stabilization Fin */}
          <path
            d="M60 94 L50 68 L60 76 L70 68 Z"
            fill="#818cf8"
            opacity="0.8"
            stroke="#6366f1"
            strokeWidth="0.8"
          />
        </g>

        {/* Quantum Fusion Core Hub */}
        <circle
          cx="60"
          cy="60"
          r="14"
          fill="url(#jarvisCoreGrad)"
          stroke="#e0f2fe"
          strokeWidth="2"
          filter="url(#jarvisNeonBloom)"
        />

        {/* Inner Reactor Eye with Pulsing Core */}
        <circle cx="60" cy="60" r="6" fill="#0369a1" />
        <circle cx="60" cy="60" r="3.2" fill="#ffffff" className="animate-pulse" />
      </svg>
    </div>
  );
}

export function JarvisWordmark({ size = 26, showBadge = true }: { size?: number; showBadge?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 select-none group cursor-pointer">
      <JarvisStar size={size + 6} className="text-cyan-400" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-sans text-[19px] font-black tracking-wider text-white">
            JARVIS{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
              AI OS
            </span>
          </span>
          {showBadge && (
            <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/60 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.3)]">
              v3.0 SOTA
            </span>
          )}
        </div>
        <span className="text-[10px] font-medium tracking-wide text-slate-400 -mt-1 hidden sm:inline-block">
          Autonomous Personal Intelligence
        </span>
      </div>
    </div>
  );
}

export function JarvisLogoBadge({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:border-cyan-500/40 transition-all duration-300",
        className
      )}
    >
      <JarvisStar size={size} />
      <div className="flex flex-col">
        <span className="text-xs font-black tracking-wide text-white flex items-center gap-1.5">
          JARVIS <span className="text-cyan-400 font-bold">OS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </span>
        <span className="text-[9px] font-mono text-slate-400">ONLINE</span>
      </div>
    </div>
  );
}
