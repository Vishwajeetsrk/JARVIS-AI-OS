"use client";

const CYAN = "#00e5ff";
const CYAN_BRIGHT = "#e0fbff";
const GOLD = "#ffb800";
const EMERALD = "#10b981";
const ROSE = "#f43f5e";

function Waveform({ active, cx, cy, width = 240, color = CYAN }) {
  const barCount = 36;
  const barW = 3;
  const gap = (width - barCount * barW) / (barCount - 1);
  return (
    <g>
      {Array.from({ length: barCount }, (_, i) => {
        const x = cx - width / 2 + i * (barW + gap);
        const baseH = 4 + Math.abs(Math.sin(i * 0.5)) * 6;
        const activeH = 10 + Math.abs(Math.sin(i * 0.75)) * 32;
        const h = active ? activeH : baseH;
        return (
          <rect
            key={i}
            x={x}
            y={cy - h / 2}
            width={barW}
            height={h}
            rx={1.5}
            fill={color}
            opacity={active ? 0.9 : 0.35}
            style={{
              transformOrigin: `${x + barW / 2}px ${cy}px`,
              animation: active
                ? `sbBar ${0.45 + (i % 6) * 0.14}s ease-in-out ${(i % 7) * 0.06}s infinite alternate`
                : "none",
            }}
          />
        );
      })}
    </g>
  );
}

export default function OrbStatusBar({ state = "idle" }) {
  const W = 480,
    H = 140;
  const cx = W / 2,
    cy = 48;
  const isActive = state !== "idle";
  const label =
    state === "listening"
      ? "VOICE LISTENING"
      : state === "speaking"
      ? "SYNTHESIZING AUDIO"
      : state === "thinking"
      ? "AUTONOMOUS PROCESSING"
      : "JARVIS CORE · STANDBY";

  const activeColor =
    state === "speaking" ? ROSE : state === "thinking" ? CYAN : state === "listening" ? EMERALD : CYAN;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 24,
        display: "flex",
        justifyContent: "center",
        zIndex: 18,
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes sbBar { from { transform: scaleY(0.3); } to { transform: scaleY(1.2); } }
        @keyframes dotPulse { 0%, 100% { opacity: 0.3; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1.2); } }
      `}</style>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
        <defs>
          <filter id="sbBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Extension Circuit Lines */}
        <line
          x1={cx - 180}
          y1={cy}
          x2={cx - 36}
          y2={cy}
          stroke={activeColor}
          strokeWidth="1.2"
          opacity={isActive ? 0.65 : 0.25}
          strokeDasharray="5 3"
        />
        <line
          x1={cx + 36}
          y1={cy}
          x2={cx + 180}
          y2={cy}
          stroke={activeColor}
          strokeWidth="1.2"
          opacity={isActive ? 0.65 : 0.25}
          strokeDasharray="5 3"
        />

        {/* Dynamic Spectrum Equalizer */}
        <Waveform active={isActive} cx={cx} cy={cy} width={200} color={activeColor} />

        {/* Center Ring & Luminous Particle Hub */}
        <circle
          cx={cx}
          cy={cy}
          r={22}
          stroke={activeColor}
          strokeWidth="1.5"
          strokeOpacity="0.8"
          fill="#02050b"
          filter="url(#sbBlur)"
        />
        <circle
          cx={cx}
          cy={cy}
          r={7}
          fill={CYAN_BRIGHT}
          opacity="0.95"
          style={{ filter: `drop-shadow(0 0 12px ${activeColor})` }}
        />

        {/* Main State Label */}
        <text
          x={cx}
          y={cy + 46}
          textAnchor="middle"
          fill={activeColor}
          fontSize="11.5"
          fontFamily="'JetBrains Mono', monospace"
          letterSpacing="0.32em"
          fontWeight="600"
          opacity="0.9"
        >
          {label}
        </text>

        {/* 3 Telemetry Indicator Dots */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx={cx + (i - 1) * 14}
            cy={cy + 64}
            r={2.5}
            fill={activeColor}
            style={{
              animation: `dotPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              filter: `drop-shadow(0 0 6px ${activeColor})`,
            }}
          />
        ))}

        {/* Hint text on standby */}
        {!isActive && (
          <text
            className="sb-hint"
            x={cx}
            y={cy + 82}
            textAnchor="middle"
            fill="rgba(240, 237, 232, 0.45)"
            fontSize="8.5"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="0.16em"
            textTransform="uppercase"
          >
            TAP ORB TO CYCLE STATE · CLICK AGENT NODE FOR COCKPIT · USE VOICE ASSISTANT
          </text>
        )}
      </svg>
    </div>
  );
}
