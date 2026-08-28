import { tokens } from "../../tokens";
import { Button } from "./Button";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
        textAlign: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: tokens.radius.full,
          background: tokens.colors.accentLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: tokens.colors.accent,
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontSize: tokens.typography.size.xl,
          fontWeight: tokens.typography.weight.semibold,
          color: tokens.colors.textPrimary,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: tokens.typography.size.base,
          color: tokens.colors.textSecondary,
          lineHeight: tokens.typography.lineHeight.relaxed,
          maxWidth: 280,
        }}
      >
        {description}
      </div>
      {actionLabel && onAction && (
        <div style={{ marginTop: 8, width: "100%", maxWidth: 260 }}>
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
