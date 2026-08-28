import { Shirt, Calendar, Cloud, Heart, Sparkles, ArrowRight } from "lucide-react";

interface S03OnboardingProps {
  step: 1 | 2 | 3;
  onNext: () => void;
  onSkip: () => void;
  onLogin: () => void;
}

const STEPS = [
  {
    badge: "YOUR AI STYLIST",
    title: "Personalized outfits, just for you.",
    desc: "Our AI understands your style, occasion, weather and preferences to recommend outfits you'll love.",
    heroUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    orbitFeatures: [
      { icon: Shirt, label: "Understands your wardrobe", angle: -45 },
      { icon: Calendar, label: "Considers occasion & schedule", angle: 45 },
      { icon: Cloud, label: "Adapts to the weather", angle: -135 },
      { icon: Heart, label: "Matches your style DNA", angle: 135 },
    ],
    centerLabel: "Creates outfits you'll love",
    dots: 5, activeDot: 2,
  },
  {
    badge: "YOUR SMART WARDROBE",
    title: "Organize. Enrich. Make the most of what you own.",
    desc: "Add your clothes and let AI understand every detail — so you can find, style and wear them better.",
    heroUrl: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    orbitFeatures: [
      { icon: Shirt, label: "Add Instantly", angle: -45 },
      { icon: Sparkles, label: "AI Understands", angle: 45 },
      { icon: Shirt, label: "Smart Tags", angle: -135 },
      { icon: Shirt, label: "Always Organized", angle: 135 },
    ],
    centerLabel: "",
    dots: 5, activeDot: 3,
  },
  {
    badge: "VIRTUAL TRY-ON",
    title: "See it on you. Before you wear it.",
    desc: "Try outfits virtually using your own photo to see how they look on you in realistic lighting and fit.",
    heroUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    orbitFeatures: [
      { icon: User, label: "Realistic Results", angle: -45 },
      { icon: Sparkles, label: "True-to-Life Lighting", angle: 45 },
      { icon: Shirt, label: "Better Fit Understanding", angle: -135 },
      { icon: Shield, label: "Your Privacy Matters", angle: 135 },
    ],
    centerLabel: "",
    dots: 5, activeDot: 4,
  },
];

import { User, Shield } from "lucide-react";

export function S03Onboarding({ step, onNext, onSkip, onLogin }: S03OnboardingProps) {
  const s = STEPS[step - 1];
  return (
    <div className="screen" style={{
      background: "#F6F3EE",
      display: "flex", flexDirection: "column",
    }}>
      {/* Status bar */}
      <div className="phone-status-bar" style={{ color: "#161616" }}>
        <span>9:41</span>
        <div style={{ display: "flex", gap: 4, fontSize: 12 }}>●●●●</div>
      </div>

      {/* Skip */}
      <div style={{ padding: "58px 20px 0", display: "flex", justifyContent: "flex-end" }}>
        <button onClick={onSkip} style={{
          border: "none", background: "none", cursor: "pointer",
          fontSize: 15, color: "#161616", fontWeight: 500, padding: 8,
        }}>Skip</button>
      </div>

      <div style={{ flex: 1, padding: "4px 24px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {/* Badge */}
        <div style={{
          fontSize: 11, fontWeight: 600, color: "#C8A96A",
          letterSpacing: "2px", textAlign: "center", marginBottom: 12,
        }}>
          {s.badge}
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 28, fontWeight: 800, lineHeight: 1.15,
          color: "#161616", textAlign: "center", marginBottom: 8,
        }}>{s.title}</h1>
        <p style={{
          fontSize: 14, color: "#6B6B66", lineHeight: 1.5,
          textAlign: "center", marginBottom: 20,
        }}>{s.desc}</p>

        {/* Hero image with orbit features */}
        <div style={{
          width: "100%", height: 260, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 16,
        }}>
          {/* Connecting ring */}
          <div style={{
            position: "absolute",
            width: 220, height: 220,
            border: "1px solid rgba(200,169,106,0.2)",
            borderRadius: "50%",
          }} />

          {/* Hero image (center) */}
          <div style={{
            width: 160, height: 160, borderRadius: "50%",
            backgroundImage: `url(${s.heroUrl})`,
            backgroundSize: "cover", backgroundPosition: "center top",
            border: "3px solid rgba(200,169,106,0.15)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            animation: "scaleIn 0.6s ease-out both",
            animationDelay: "0.3s",
          }} />

          {/* Orbit feature icons */}
          {s.orbitFeatures.map((f, i) => {
            const Icon = f.icon;
            const rad = (f.angle * Math.PI) / 180;
            const radius = 130;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            return (
              <div key={i} style={{
                position: "absolute",
                left: `calc(50% + ${x}px - 30px)`,
                top: `calc(50% + ${y}px - 30px)`,
                width: 60, height: 60,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 3,
                animation: "scaleIn 0.4s ease-out both",
                animationDelay: `${0.6 + i * 0.15}s`,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1px solid #E9E5DF",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}>
                  <Icon size={18} style={{ color: "#6B6B66" }} />
                </div>
                <span style={{
                  fontSize: 8, color: "#6B6B66", textAlign: "center",
                  lineHeight: 1.2, maxWidth: 56,
                }}>{f.label}</span>
              </div>
            );
          })}

          {/* Center label below hero */}
          {s.centerLabel && (
            <div style={{
              position: "absolute", bottom: -4, left: "50%",
              transform: "translateX(-50%)",
              background: "#161616", color: "#C8A96A",
              padding: "5px 12px", borderRadius: 16,
              fontSize: 10, fontWeight: 600, whiteSpace: "nowrap",
              display: "flex", alignItems: "center", gap: 4,
              animation: "scaleIn 0.4s ease-out both",
              animationDelay: "1.2s",
            }}>
              <Sparkles size={10} /> {s.centerLabel}
            </div>
          )}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "12px 0 16px" }}>
          {Array.from({ length: s.dots }).map((_, i) => (
            <div key={i} style={{
              width: i === s.activeDot - 1 ? 20 : 6, height: 6, borderRadius: 3,
              background: i === s.activeDot - 1 ? "#161616" : "#E9E5DF",
              transition: "all 0.3s",
            }} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 24px 40px" }}>
        <button onClick={onNext} style={{
          width: "100%", padding: "16px 24px", border: "none",
          borderRadius: "var(--radius-xl)", background: "#161616",
          color: "#C8A96A", fontSize: 16, fontWeight: 600,
          cursor: "pointer", display: "flex", alignItems: "center",
          justifyContent: "center", gap: 8,
          animation: "slideUp 0.4s ease-out both",
          animationDelay: "1.4s",
        }}>
          {step < 3 ? "Next" : "All Set!"} <ArrowRight size={18} />
        </button>
        <div style={{
          textAlign: "center", marginTop: 14, fontSize: 14, color: "#6B6B66",
        }}>
          Already have an account?{" "}
          <button onClick={onLogin} style={{
            border: "none", background: "none", color: "#C8A96A",
            fontSize: 14, fontWeight: 500, cursor: "pointer",
          }}>Log in</button>
        </div>
      </div>
    </div>
  );
}
