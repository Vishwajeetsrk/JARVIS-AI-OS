type MIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

/** Material Symbols Outlined icon wrapper */
export function MIcon({ name, className = "", filled = false }: MIconProps) {
  return (
    <span
      className={`material-symbols-outlined leading-none ${className}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden
    >
      {name}
    </span>
  );
}
