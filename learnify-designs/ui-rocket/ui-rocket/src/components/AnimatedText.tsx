import type { ReactNode } from "react";

type AnimatedTextProps = {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
};

/** Hover slide-reveal text (duplicate layer slides up on group hover) */
export function AnimatedText({ children, className = "", as: Tag = "span" }: AnimatedTextProps) {
  return (
    <Tag className={`group relative inline-block overflow-hidden ${className}`}>
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        className="absolute left-0 top-full block w-full transition-transform duration-300 ease-out group-hover:-translate-y-full text-violet-300"
        aria-hidden
      >
        {children}
      </span>
    </Tag>
  );
}
