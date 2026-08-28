import type { ReactNode } from "react";
import Navbar from "./Navbar";

export function PageShell({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-28 md:pt-36">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-widest text-white/40">{eyebrow}</p>
        ) : null}
        <h1
          className="mt-4 text-4xl tracking-tight md:text-6xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </h1>
        {children ? <div className="mt-8 space-y-4 text-white/65">{children}</div> : null}
      </div>
    </div>
  );
}
