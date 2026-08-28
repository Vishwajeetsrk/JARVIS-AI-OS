import { tokens } from "../../tokens";

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "outlined";
}

export function Chip({ label, selected = false, onClick, icon, variant = "default" }: ChipProps) {
  const isOutlined = variant === "outlined";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 16px",
        borderRadius: tokens.radius.full,
        border: selected
          ? `1.5px solid ${tokens.colors.accent}`
          : isOutlined
          ? `1.5px solid ${tokens.colors.border}`
          : "1.5px solid transparent",
        background: selected
          ? tokens.colors.accentLight
          : isOutlined
          ? "transparent"
          : "rgba(0,0,0,0.04)",
        color: selected ? tokens.colors.accent : tokens.colors.textPrimary,
        fontSize: tokens.typography.size.sm,
        fontWeight: tokens.typography.weight.medium,
        fontFamily: tokens.typography.fontFamily,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {icon && <span style={{ display: "flex" }}>{icon}</span>}
      {label}
    </button>
  );
}
