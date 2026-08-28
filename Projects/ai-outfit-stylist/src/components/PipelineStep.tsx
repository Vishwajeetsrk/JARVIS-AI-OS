import {
  Shirt,
  Sparkles,
  Palette,
  Heart,
  Star,
  CircleCheck,
  Circle,
  Loader2,
} from "lucide-react";
import type { StepStatus } from "../hooks/usePipeline";

interface PipelineStepProps {
  icon: string;
  title: string;
  description: string;
  status: StepStatus;
  delay: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  shirt: Shirt,
  sparkles: Sparkles,
  palette: Palette,
  heart: Heart,
  star: Star,
};

export function PipelineStep({
  icon,
  title,
  description,
  status,
  delay,
}: PipelineStepProps) {
  const Icon = ICON_MAP[icon] || Sparkles;

  return (
    <div
      className={`pipeline-step pipeline-step--${status}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pipeline-step-icon">
        <Icon size={22} />
      </div>
      <div className="pipeline-step-content">
        <h4 className="pipeline-step-title">{title}</h4>
        <p className="pipeline-step-desc">{description}</p>
      </div>
      <div className="pipeline-step-status">
        {status === "complete" && (
          <div className="pipeline-step-check">
            <CircleCheck size={26} strokeWidth={2.5} />
          </div>
        )}
        {status === "processing" && (
          <div className="pipeline-step-spinner">
            <Loader2 size={26} className="spin" />
          </div>
        )}
        {status === "pending" && (
          <div className="pipeline-step-pending">
            <Circle size={24} strokeWidth={1.5} />
          </div>
        )}
      </div>
    </div>
  );
}
