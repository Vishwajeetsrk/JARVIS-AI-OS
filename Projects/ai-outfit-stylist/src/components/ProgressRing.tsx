import { useCountUp } from "../hooks/useCountUp";

interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}

export function ProgressRing({
  progress,
  size = 180,
  strokeWidth = 10,
  delay = 0,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const displayValue = useCountUp(progress, 2000, delay);
  const offset = circumference - (displayValue / 100) * circumference;

  return (
    <div className="progress-ring-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8E0D8"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#7B2D26"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="progress-ring-arc"
        />
      </svg>
      <div className="progress-ring-label">
        <span className="progress-ring-value">{displayValue}</span>
        <span className="progress-ring-percent">%</span>
        <span className="progress-ring-text">PROCESSING</span>
      </div>
    </div>
  );
}
