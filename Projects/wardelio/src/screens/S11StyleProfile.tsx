import { useState } from "react";
import { tokens } from "../tokens";
import { Button } from "../components/ui/Button";
import { StepIndicator } from "../components/ui/StepIndicator";
import { Sparkles, ArrowRight } from "../components/icons";

interface S11StyleProfileProps {
  onComplete: () => void;
  onBack: () => void;
}

const QUESTIONS = [
  {
    question: "How do you identify?",
    type: "single" as const,
    options: ["Female", "Male", "Non-binary", "Prefer not to say"],
  },
  {
    question: "What's your age range?",
    type: "single" as const,
    options: ["18-24", "25-34", "35-44", "45-54", "55+"],
  },
  {
    question: "What's your style?",
    type: "single" as const,
    options: ["Casual", "Classic", "Streetwear", "Formal", "Bohemian", "Minimalist"],
  },
  {
    question: "Pick your color palette",
    type: "multi" as const,
    options: ["Neutrals", "Earth Tones", "Bold Colors", "Pastels", "Monochrome", "Jewel Tones"],
  },
  {
    question: "What occasions do you dress for?",
    type: "multi" as const,
    options: ["Work", "Casual Outings", "Date Nights", "Special Events", "Athletic", "Travel"],
  },
  {
    question: "What's your budget range?",
    type: "single" as const,
    options: ["Budget-Friendly", "Mid-Range", "Premium", "Luxury", "Mix of Everything"],
  },
  {
    question: "How important is sustainability?",
    type: "single" as const,
    options: ["Very Important", "Somewhat", "Not a Priority"],
  },
  {
    question: "Pick your go-to brands",
    type: "multi" as const,
    options: ["High Street", "Designer", "Independent", "Athletic", "Vintage", "Mix of Everything"],
  },
];

const DNA_RESULT = {
  type: "The Modern Minimalist",
  desc: "Clean lines, quality fabrics, and a neutral palette form the backbone of your wardrobe. You value timeless pieces over trends.",
  colors: ["#161616", "#6B6B66", "#E9E5DF", "#C8A96A", "#F6F3EE"],
  keywords: ["Clean", "Timeless", "Versatile", "Quality"],
};

export function S11StyleProfile({ onComplete, onBack }: S11StyleProfileProps) {
  const [step, setStep] = useState(0); // 0 = intro, 1-8 = questions, 9 = result
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const totalSteps = QUESTIONS.length;

  const selectSingle = (qIndex: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: [value] }));
    setTimeout(() => {
      if (qIndex < totalSteps - 1) setStep(qIndex + 2);
      else setStep(totalSteps + 1);
    }, 300);
  };

  const toggleMulti = (qIndex: number, value: string) => {
    setAnswers((prev) => {
      const current = prev[qIndex] || [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [qIndex]: next };
    });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
    else setStep(totalSteps + 1);
  };

  const qIndex = step - 1;
  const currentQ = step >= 1 && step <= totalSteps ? QUESTIONS[qIndex] : null;
  const selected = currentQ ? answers[qIndex] || [] : [];

  // Intro
  if (step === 0) {
    return (
      <div className="screen" style={{
        background: tokens.colors.bg,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 32,
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: tokens.radius.full,
          background: tokens.colors.accentLight,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24,
        }}>
          <Sparkles size={36} style={{ color: tokens.colors.accent }} />
        </div>
        <h1 style={{
          fontSize: 28, fontWeight: 800, color: tokens.colors.textPrimary,
          textAlign: "center", marginBottom: 12,
        }}>Let's find your Style DNA</h1>
        <p style={{
          fontSize: 15, color: tokens.colors.textSecondary, textAlign: "center",
          lineHeight: 1.5, marginBottom: 32, maxWidth: 300,
        }}>
          Answer {totalSteps} quick questions so our AI can understand your unique style and recommend outfits you'll love.
        </p>
        <Button variant="primary" onClick={() => setStep(1)} icon={<ArrowRight size={18} />}>
          Start
        </Button>
        <button onClick={onBack} style={{
          marginTop: 16, border: "none", background: "none",
          color: tokens.colors.textSecondary, fontSize: 14, cursor: "pointer",
        }}>Maybe later</button>
      </div>
    );
  }

  // Result
  if (step > totalSteps) {
    return (
      <div className="screen" style={{
        background: tokens.colors.bg,
        display: "flex", flexDirection: "column",
        alignItems: "center", padding: "54px 24px 40px",
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            fontSize: 11, fontWeight: 600, color: tokens.colors.accent,
            letterSpacing: "2px", textAlign: "center", marginBottom: 12,
          }}>YOUR STYLE DNA</div>
          <h1 style={{
            fontSize: 28, fontWeight: 800, color: tokens.colors.textPrimary,
            textAlign: "center", marginBottom: 8,
          }}>{DNA_RESULT.type}</h1>
          <p style={{
            fontSize: 14, color: tokens.colors.textSecondary, textAlign: "center",
            lineHeight: 1.5, marginBottom: 24, maxWidth: 300,
          }}>{DNA_RESULT.desc}</p>

          {/* Color palette */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {DNA_RESULT.colors.map((c, i) => (
              <div key={i} style={{
                width: 36, height: 36, borderRadius: "50%",
                background: c, border: `2px solid ${tokens.colors.border}`,
              }} />
            ))}
          </div>

          {/* Keywords */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {DNA_RESULT.keywords.map((k) => (
              <span key={k} style={{
                padding: "6px 14px", borderRadius: tokens.radius.full,
                background: tokens.colors.accentLight, color: tokens.colors.accent,
                fontSize: 13, fontWeight: 500,
              }}>{k}</span>
            ))}
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <Button variant="primary" onClick={onComplete}>
            Explore My Wardrobe
          </Button>
        </div>
      </div>
    );
  }

  // Questions
  return (
    <div className="screen" style={{
      background: tokens.colors.bg,
      display: "flex", flexDirection: "column",
    }}>
      <div className="phone-status-bar" style={{ color: tokens.colors.textPrimary }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, fontSize: 12 }}>●●●●</div>
      </div>

      {/* Back + progress */}
      <div style={{ padding: "58px 20px 0" }}>
        <button onClick={() => step > 1 ? setStep(step - 1) : onBack()} style={{
          border: "none", background: "none", cursor: "pointer",
          fontSize: 15, color: tokens.colors.textPrimary, fontWeight: 500, padding: 8,
        }}>← Back</button>
        <div style={{ marginTop: 12 }}>
          <StepIndicator totalSteps={totalSteps} currentStep={step} />
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px 24px", display: "flex", flexDirection: "column" }}>
        <h2 style={{
          fontSize: 24, fontWeight: 700, color: tokens.colors.textPrimary,
          textAlign: "center", marginBottom: 24,
        }}>{currentQ!.question}</h2>

        <div style={{
          display: "flex", flexDirection: "column", gap: 10,
          flex: 1, overflowY: "auto", paddingBottom: 16,
        }}>
          {currentQ!.options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => {
                  if (currentQ!.type === "single") selectSingle(qIndex, opt);
                  else toggleMulti(qIndex, opt);
                }}
                style={{
                  width: "100%", padding: "16px 20px",
                  border: `1.5px solid ${isSelected ? tokens.colors.accent : tokens.colors.border}`,
                  borderRadius: tokens.radius.lg,
                  background: isSelected ? tokens.colors.accentLight : tokens.colors.surface,
                  color: isSelected ? tokens.colors.accent : tokens.colors.textPrimary,
                  fontSize: 16, fontWeight: 500, textAlign: "left",
                  cursor: "pointer", fontFamily: tokens.typography.fontFamily,
                  transition: "all 0.2s",
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue button (multi-select) */}
      {currentQ!.type === "multi" && (
        <div style={{ padding: "0 24px 40px" }}>
          <Button
            variant="primary"
            onClick={nextStep}
            disabled={selected.length === 0}
          >
            Continue
          </Button>
        </div>
      )}

      {/* Single-select has no bottom button (auto-advances) */}
    </div>
  );
}
