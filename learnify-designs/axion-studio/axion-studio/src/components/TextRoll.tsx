import type { ReactNode } from "react";

type TextRollProps = {
  text: string;
  heightClass?: string;
};

export function TextRoll({ text, heightClass = "h-[20px]" }: TextRollProps) {
  return (
    <span className={`inline-flex flex-col overflow-hidden ${heightClass}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span>{text}</span>
        <span aria-hidden>{text}</span>
      </span>
    </span>
  );
}

export function TextRollSlot({
  children,
  heightClass = "h-[20px]",
}: {
  children: ReactNode;
  heightClass?: string;
}) {
  return (
    <span className={`inline-flex flex-col overflow-hidden ${heightClass}`}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        {children}
        <span aria-hidden>{children}</span>
      </span>
    </span>
  );
}
