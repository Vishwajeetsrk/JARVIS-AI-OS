import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">
        <Icon size={22} />
      </div>
      <div className="feature-card-content">
        <h4 className="feature-card-title">{title}</h4>
        <p className="feature-card-desc">{description}</p>
      </div>
    </div>
  );
}
