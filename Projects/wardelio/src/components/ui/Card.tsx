import { tokens } from "../../tokens";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "xl" | "full";
  style?: React.CSSProperties;
  onClick?: () => void;
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    background: tokens.colors.surface,
    border: `1px solid ${tokens.colors.border}`,
    boxShadow: tokens.shadow.card,
  },
  elevated: {
    background: tokens.colors.surface,
    border: "none",
    boxShadow: tokens.shadow.lg,
  },
  outlined: {
    background: "transparent",
    border: `1.5px solid ${tokens.colors.border}`,
    boxShadow: "none",
  },
  filled: {
    background: "rgba(0,0,0,0.03)",
    border: "none",
    boxShadow: "none",
  },
};

const paddingMap = {
  none: 0,
  sm: 12,
  md: 16,
  lg: 20,
};

const radiusMap = {
  sm: tokens.radius.sm,
  md: tokens.radius.md,
  lg: tokens.radius.lg,
  xl: tokens.radius.xl,
  full: tokens.radius.full,
};

export function Card({
  children,
  variant = "default",
  padding = "md",
  radius = "lg",
  style,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        ...variantStyles[variant],
        padding: paddingMap[padding],
        borderRadius: radiusMap[radius],
        cursor: onClick ? "pointer" : undefined,
        transition: "transform 0.15s, box-shadow 0.15s",
        ...style,
      }}
      onMouseDown={(e) => {
        if (onClick) (e.currentTarget as HTMLDivElement).style.transform = "scale(0.98)";
      }}
      onMouseUp={(e) => {
        if (onClick) (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
      }}
    >
      {children}
    </div>
  );
}
