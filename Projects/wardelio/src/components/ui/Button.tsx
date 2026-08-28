import { tokens } from "../../tokens";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: tokens.colors.textPrimary,
    color: tokens.colors.accent,
    border: "none",
  },
  secondary: {
    background: "transparent",
    color: tokens.colors.textPrimary,
    border: `1.5px solid ${tokens.colors.border}`,
  },
  accent: {
    background: tokens.colors.accent,
    color: "#FFFFFF",
    border: "none",
  },
  ghost: {
    background: "transparent",
    color: tokens.colors.accent,
    border: "none",
  },
  danger: {
    background: tokens.colors.error,
    color: "#FFFFFF",
    border: "none",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "10px 16px", fontSize: tokens.typography.size.sm, borderRadius: tokens.radius.md },
  md: { padding: "14px 24px", fontSize: tokens.typography.size.md, borderRadius: tokens.radius.xl },
  lg: { padding: "16px 28px", fontSize: tokens.typography.size.lg, borderRadius: tokens.radius.xl },
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = true,
  loading = false,
  disabled,
  style,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      style={{
        ...variantStyles[variant],
        ...sizeStyles[size],
        width: fullWidth ? "100%" : "auto",
        fontFamily: tokens.typography.fontFamily,
        fontWeight: tokens.typography.weight.semibold,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "transform 0.2s, opacity 0.2s",
        ...style,
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.97)";
        }
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
      {...rest}
    >
      {loading ? (
        <span
          style={{
            width: 18,
            height: 18,
            border: "2px solid currentColor",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 0.6s linear infinite",
          }}
        />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
}
