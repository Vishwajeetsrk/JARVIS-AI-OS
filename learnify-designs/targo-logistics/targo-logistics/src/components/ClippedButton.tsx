import type { ButtonHTMLAttributes, ReactNode } from "react";

type ClippedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "brand" | "outline";
};

const variantClasses = {
  brand: "bg-brand text-white hover:bg-[#d63525]",
  outline: "border border-white/35 bg-white/5 text-white hover:bg-white/10",
};

export function ClippedButton({
  children,
  className = "",
  variant = "brand",
  ...props
}: ClippedButtonProps) {
  return (
    <button
      type="button"
      className={`clip-corner inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold tracking-wide transition ${variantClasses[variant]} ${className}`}
      data-editable
      {...props}
    >
      {children}
    </button>
  );
}
