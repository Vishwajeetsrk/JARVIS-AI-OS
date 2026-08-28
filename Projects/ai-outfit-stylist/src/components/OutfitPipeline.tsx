import { Sparkles } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import { PipelineStep } from "./PipelineStep";
import { usePipeline } from "../hooks/usePipeline";

export function OutfitPipeline() {
  const { steps, progress } = usePipeline();

  return (
    <div className="pipeline">
      <div className="pipeline-header">
        <button className="pipeline-back" aria-label="Go back">
          ‹
        </button>
        <h3 className="pipeline-title">Generating Outfit</h3>
        <button className="pipeline-info" aria-label="Info">
          ⓘ
        </button>
      </div>

      <div className="pipeline-hero">
        <h1 className="pipeline-hero-title">
          Creating your
          <br />
          perfect outfit...
        </h1>
        <Sparkles size={32} className="pipeline-hero-sparkle" />
        <p className="pipeline-hero-sub">
          Our AI stylist is curating outfit ideas
          <br />
          just for you.
        </p>
      </div>

      <ProgressRing progress={progress} delay={200} />

      <div className="pipeline-steps">
        {steps.map((step, i) => (
          <PipelineStep
            key={step.id}
            icon={step.icon}
            title={step.title}
            description={step.description}
            status={step.status}
            delay={i * 150}
          />
        ))}
      </div>

      {steps.filter((s) => s.status === "complete").length >= 3 && (
        <div className="pipeline-banner">
          <div className="pipeline-banner-icon">
            <Sparkles size={18} />
          </div>
          <div>
            <strong>Almost there!</strong>
            <p>
              This usually takes less than 30 seconds.
              <br />
              Hang tight while we work our magic.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
