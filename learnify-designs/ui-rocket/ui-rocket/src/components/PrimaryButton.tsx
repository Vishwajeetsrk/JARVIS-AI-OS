import type { ButtonHTMLAttributes, ReactNode } from "react";
import { MIcon } from "./MIcon";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: string;
};

export function PrimaryButton({
  children,
  icon = "arrow_forward",
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08020e] transition hover:bg-white/90 active:scale-[0.98] ${className}`}
      data-editable
      {...props}
    >
      <span>{children}</span>
      <MIcon name={icon} className="text-[18px]" />
    </button>
  );
}
