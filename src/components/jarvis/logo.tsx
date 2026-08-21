import { cn } from "@/lib/utils";

export function JarvisStar({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <radialGradient id="logoGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <filter id="logoShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0ea5e9" floodOpacity="0.5" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#logoGlow)" opacity="0.5" />
      <g className="origin-center animate-[spin_8s_linear_infinite]" style={{ transformOrigin: "50px 50px" }}>
        <circle cx="50" cy="50" r="36" stroke="url(#logoArcGrad)" strokeWidth="2.5" strokeDasharray="18 6" fill="none" opacity="0.9" />
      </g>
      <g className="origin-center animate-[spin_12s_linear_infinite_reverse]" style={{ transformOrigin: "50px 50px" }}>
        <circle cx="50" cy="50" r="26" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="10 5" fill="none" opacity="0.6" />
      </g>
      <path d="M50 22 L62 42 L50 34 L38 42 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2" filter="url(#logoShadow)" />
      <circle cx="50" cy="50" r="10" fill="url(#logoArcGrad)" stroke="#e0f2fe" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="3.5" fill="#ffffff" className="animate-pulse" />
    </svg>
  );
}

export function JarvisWordmark({ size = 26 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <JarvisStar size={size} className="text-cyan-400" />
      <span className="font-display text-[18px] font-black tracking-wider text-foreground">
        JARVIS <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">AI OS</span>
      </span>
    </span>
  );
}
