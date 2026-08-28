import { tokens } from "../../tokens";

interface TabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface TabBarProps {
  tabs: TabItem[];
  active: string;
  onChange: (key: string) => void;
}

export function TabBar({ tabs, active, onChange }: TabBarProps) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: tokens.colors.surface,
        borderTop: `1px solid ${tokens.colors.borderLight}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "8px 0 28px",
        zIndex: 50,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "4px 12px",
              color: isActive ? tokens.colors.accent : tokens.colors.textMuted,
              transition: "color 0.2s",
            }}
          >
            {tab.icon}
            <span
              style={{
                fontSize: tokens.typography.size.xs,
                fontWeight: isActive ? tokens.typography.weight.semibold : tokens.typography.weight.regular,
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
