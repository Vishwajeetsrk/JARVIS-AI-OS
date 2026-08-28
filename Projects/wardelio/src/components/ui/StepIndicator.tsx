import { tokens } from "../../tokens";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number;
  height?: number;
}

export function StepIndicator({ totalSteps, currentStep, height = 4 }: StepIndicatorProps) {
  return (
    <div style={{ display: "flex", gap: 6, width: "100%" }}>
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height,
            borderRadius: height / 2,
            background: i <= currentStep - 1 ? tokens.colors.accent : "rgba(0,0,0,0.06)",
            transition: "background 0.3s",
          }}
        />
      ))}
    </div>
  );
}
