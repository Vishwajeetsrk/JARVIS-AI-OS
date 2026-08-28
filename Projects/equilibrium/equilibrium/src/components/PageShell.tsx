import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
        <h1 className="font-display mt-3 text-4xl font-normal leading-[1.05] tracking-[-1.5px] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">{children}</div>
      </main>
    </div>
  );
}
