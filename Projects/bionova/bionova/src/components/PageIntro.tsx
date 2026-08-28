import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="scroll-mt-24 px-5 pb-16 pt-28 lg:px-16 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-normal tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base">
          {description}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
