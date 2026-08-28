import { useEffect, useState } from "react";

export type StepStatus = "pending" | "processing" | "complete";

export interface PipelineStepData {
  id: number;
  icon: string;
  title: string;
  description: string;
  status: StepStatus;
}

const INITIAL_STEPS: Omit<PipelineStepData, "status">[] = [
  {
    id: 1,
    icon: "shirt",
    title: "Understanding your style",
    description: "Analyzing your wardrobe, preferences and style profile.",
  },
  {
    id: 2,
    icon: "sparkles",
    title: "Selecting the best pieces",
    description: "Finding the perfect items that match your taste and the context.",
  },
  {
    id: 3,
    icon: "palette",
    title: "Building outfit combinations",
    description: "Creating stylish combinations that look great together.",
  },
  {
    id: 4,
    icon: "heart",
    title: "Perfecting the details",
    description: "Checking colors, fit, weather and finishing touches.",
  },
  {
    id: 5,
    icon: "star",
    title: "Finalizing your recommendations",
    description: "Personalizing and ranking the best outfit ideas for you.",
  },
];

export function usePipeline() {
  const [steps, setSteps] = useState<PipelineStepData[]>(() =>
    INITIAL_STEPS.map((s, i) => ({
      ...s,
      status: i === 0 ? "processing" : "pending",
    }))
  );
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    INITIAL_STEPS.forEach((_, i) => {
      const delayBeforeComplete = 1800 + i * 2200;
      const delayBeforeNext = delayBeforeComplete + 300;

      timers.push(
        setTimeout(() => {
          setSteps((prev) =>
            prev.map((s, idx) =>
              idx === i ? { ...s, status: "complete" } : s
            )
          );
          if (i < INITIAL_STEPS.length - 1) {
            timers.push(
              setTimeout(() => {
                setSteps((prev) =>
                  prev.map((s, idx) =>
                    idx === i + 1 ? { ...s, status: "processing" } : s
                  )
                );
                setCurrentStep(i + 1);
              }, 300)
            );
          }
        }, delayBeforeComplete)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const completedCount = steps.filter((s) => s.status === "complete").length;
  const progress = Math.round((completedCount / steps.length) * 100);

  return { steps, currentStep, progress, completedCount };
}
