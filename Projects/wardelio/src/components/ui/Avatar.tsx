import { tokens } from "../../tokens";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  icon?: React.ReactNode;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const colors = [
  "#C8A96A", "#5B21B6", "#4CAF50", "#E53935", "#FF9800",
  "#2196F3", "#9C27B0", "#00BCD4", "#795548", "#607D8B",
];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({ src, name, size = 40, icon }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: name ? getColor(name) : "rgba(0,0,0,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FFFFFF",
        fontSize: size * 0.38,
        fontWeight: tokens.typography.weight.semibold,
        fontFamily: tokens.typography.fontFamily,
      }}
    >
      {icon || (name ? getInitials(name) : "?")}
    </div>
  );
}
