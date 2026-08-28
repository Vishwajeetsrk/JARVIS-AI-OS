import { tokens } from "../../tokens";
import { ArrowLeft } from "../icons/Nav";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
  transparent?: boolean;
}

export function Header({ title, subtitle, onBack, rightAction, transparent }: HeaderProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 54,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 20px 0",
        background: transparent ? "transparent" : tokens.colors.bg,
        zIndex: 50,
      }}
    >
      <div style={{ width: 80, display: "flex", alignItems: "center" }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              padding: 4,
              cursor: "pointer",
              display: "flex",
              color: tokens.colors.textPrimary,
            }}
          >
            <ArrowLeft size={22} />
          </button>
        )}
      </div>

      <div style={{ flex: 1, textAlign: "center" }}>
        {title && (
          <div
            style={{
              fontSize: tokens.typography.size.base,
              fontWeight: tokens.typography.weight.semibold,
              color: tokens.colors.textPrimary,
            }}
          >
            {title}
          </div>
        )}
        {subtitle && (
          <div
            style={{
              fontSize: tokens.typography.size.xs,
              color: tokens.colors.textSecondary,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div style={{ width: 80, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        {rightAction}
      </div>
    </div>
  );
}
