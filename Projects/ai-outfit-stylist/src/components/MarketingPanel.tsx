import {
  Sparkles,
  Shirt,
  Palette,
  Cloud,
  Sliders,
  Shield,
  Lightbulb,
  Lock,
  Cpu,
  CloudOff,
  HeartHandshake,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI-POWERED STYLIST",
    description: "Advanced AI understands your style, preferences and needs.",
  },
  {
    icon: Shirt,
    title: "SMART MATCHING",
    description: "We match items from your wardrobe and beyond.",
  },
  {
    icon: Palette,
    title: "COLOR & STYLE HARMONY",
    description: "We ensure every piece works beautifully together.",
  },
  {
    icon: Cloud,
    title: "CONTEXT AWARE",
    description: "Weather, occasion, time and mood — all considered.",
  },
  {
    icon: Sliders,
    title: "PERSONALIZED FOR YOU",
    description: "Built around your unique style and today's priorities.",
  },
  {
    icon: Shield,
    title: "PRIVATE & SECURE",
    description: "Your data and preferences stay private and secure.",
  },
];

const TRUST_ITEMS = [
  { icon: Lock, label: "Your data is private", sub: "We never sell or share your data." },
  { icon: Cpu, label: "AI-Powered", sub: "Smart insights based on your style and wardrobe." },
  { icon: CloudOff, label: "Access anywhere", sub: "Your wardrobe syncs across all your devices." },
  { icon: HeartHandshake, label: "We're here for you", sub: "Help and support whenever you need us." },
];

export function MarketingPanel() {
  return (
    <div className="marketing">
      <div className="marketing-badge">$72</div>
      <h2 className="marketing-title">
        GENERATE OUTFIT
        <br />
        — PROCESSING
      </h2>
      <p className="marketing-desc">
        We're analyzing your style, wardrobe
        <br />
        and context to create personalized
        <br />
        outfit ideas that are perfect for you.
      </p>

      <div className="marketing-features">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>

      <div className="marketing-tip">
        <Lightbulb size={18} />
        <div>
          <strong>TIP</strong>
          <p>
            The more you use the app and provide
            <br />
            feedback, the better and more accurate
            <br />
            your outfit ideas will become.
          </p>
        </div>
      </div>

      <div className="marketing-trust">
        {TRUST_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="trust-item">
              <Icon size={16} />
              <div>
                <strong>{item.label}</strong>
                <p>{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
