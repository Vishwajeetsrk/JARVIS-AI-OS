import { useState } from "react";
import { tokens } from "../../tokens";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;
}

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  onRightIconClick,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? tokens.colors.error
    : focused
    ? tokens.colors.accent
    : tokens.colors.border;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
      {label && (
        <label
          style={{
            fontSize: tokens.typography.size.sm,
            fontWeight: tokens.typography.weight.medium,
            color: tokens.colors.textSecondary,
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        {leftIcon && (
          <span
            style={{
              position: "absolute",
              left: 14,
              color: tokens.colors.textMuted,
              display: "flex",
              pointerEvents: "none",
            }}
          >
            {leftIcon}
          </span>
        )}
        <input
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: leftIcon ? "14px 16px 14px 42px" : "14px 16px",
            paddingRight: rightIcon ? 42 : 16,
            border: `1.5px solid ${borderColor}`,
            borderRadius: tokens.radius.md,
            background: tokens.colors.surface,
            fontSize: tokens.typography.size.md,
            fontFamily: tokens.typography.fontFamily,
            color: tokens.colors.textPrimary,
            outline: "none",
            transition: "border-color 0.2s",
            ...style,
          }}
          {...rest}
        />
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            style={{
              position: "absolute",
              right: 12,
              background: "none",
              border: "none",
              padding: 4,
              cursor: "pointer",
              display: "flex",
              color: tokens.colors.textMuted,
            }}
          >
            {rightIcon}
          </button>
        )}
      </div>
      {error && (
        <span style={{ fontSize: tokens.typography.size.xs, color: tokens.colors.error }}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span style={{ fontSize: tokens.typography.size.xs, color: tokens.colors.textMuted }}>
          {hint}
        </span>
      )}
    </div>
  );
}
