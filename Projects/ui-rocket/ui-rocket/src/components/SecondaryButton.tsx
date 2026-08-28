import type { ButtonHTMLAttributes, ReactNode } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function SecondaryButton({ children, className = "", ...props }: SecondaryButtonProps) {
  return (
    <button
      type="button"
      className={`liquid-glass inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 active:scale-[0.98] ${className}`}
      data-editable
      {...props}
    >
      {children}
    </button>
  );
}
