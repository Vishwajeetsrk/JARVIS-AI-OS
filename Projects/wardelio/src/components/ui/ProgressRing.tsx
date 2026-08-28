import { useEffect, useState } from "react";
import { tokens } from "../../tokens";

interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  animated?: boolean;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  progress,
  size = 80,
  strokeWidth = 6,
  color = tokens.colors.accent,
  bgColor = "rgba(0,0,0,0.06)",
  animated = true,
  label,
  sublabel,
}: ProgressRingProps) {
  const [currentProgress, setCurrentProgress] = useState(animated ? 0 : progress);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentProgress / 100) * circumference;

  useEffect(() => {
    if (animated) {
      const t = setTimeout(() => setCurrentProgress(progress), 50);
      return () => clearTimeout(t);
    }
  }, [progress, animated]);

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: animated ? "stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1)" : undefined }}
        />
      </svg>
      {(label || sublabel) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {label && (
            <span
              style={{
                fontSize: size * 0.25,
                fontWeight: tokens.typography.weight.bold,
                color: tokens.colors.textPrimary,
              }}
            >
              {label}
            </span>
          )}
          {sublabel && (
            <span
              style={{
                fontSize: size * 0.14,
                color: tokens.colors.textSecondary,
                marginTop: 2,
              }}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
