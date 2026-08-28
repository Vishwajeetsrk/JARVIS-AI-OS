type BrandMarkProps = {
  className?: string;
  size?: "nav" | "footer";
};

export function BrandMark({ className = "", size = "nav" }: BrandMarkProps) {
  const textClass =
    size === "nav"
      ? "font-heading text-3xl tracking-tight text-foreground"
      : "font-heading text-xl tracking-tight text-foreground";

  return (
    <span className={`${textClass} ${className}`} data-editable>
      Velorah
      <sup className={size === "footer" ? "text-[8px]" : "text-xs"}>®</sup>
    </span>
  );
}
