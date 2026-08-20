import { cn } from "@/lib/utils";

export function JarvisStar({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0 animate-pulse", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="44" stroke="#38bdf8" strokeWidth="3" strokeDasharray="14 6" fill="none" opacity="0.6" />
      <circle cx="50" cy="50" r="32" stroke="url(#logoArcGrad)" strokeWidth="4" strokeDasharray="20 8" fill="none" />
      <polygon points="50,26 68,60 32,60" stroke="#fbbf24" strokeWidth="3" fill="none" />
      <circle cx="50" cy="50" r="10" fill="#38bdf8" />
      <circle cx="50" cy="50" r="4" fill="#ffffff" />
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
