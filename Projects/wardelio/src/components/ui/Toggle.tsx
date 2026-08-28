import { tokens } from "../../tokens";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function Toggle({ checked, onChange, disabled = false, label, description, icon }: ToggleProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        borderBottom: `1px solid ${tokens.colors.borderLight}`,
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
        {icon && (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: tokens.radius.full,
              background: checked ? tokens.colors.accentLight : "rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: checked ? tokens.colors.accent : tokens.colors.textMuted,
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          {label && (
            <div
              style={{
                fontSize: tokens.typography.size.base,
                fontWeight: tokens.typography.weight.medium,
                color: tokens.colors.textPrimary,
              }}
            >
              {label}
            </div>
          )}
          {description && (
            <div
              style={{
                fontSize: tokens.typography.size.sm,
                color: tokens.colors.textSecondary,
                marginTop: 2,
              }}
            >
              {description}
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: 52,
          height: 32,
          borderRadius: 16,
          border: "none",
          padding: 2,
          cursor: disabled ? "not-allowed" : "pointer",
          background: checked ? tokens.colors.accent : "#D1D5DB",
          position: "relative",
          transition: "background 0.2s",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            position: "absolute",
            top: 2,
            left: checked ? 22 : 2,
            transition: "left 0.2s",
          }}
        />
      </button>
    </div>
  );
}
