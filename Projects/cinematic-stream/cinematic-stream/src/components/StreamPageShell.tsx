import type { ReactNode } from "react";
import Navbar from "./Navbar";

type StreamPageShellProps = {
  children: ReactNode;
  title: string;
  description: string;
  eyebrow?: string;
};

export function StreamPageShell({ children, title, description, eyebrow }: StreamPageShellProps) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(60, 80, 120, 0.35), transparent 60%), linear-gradient(180deg, #0a0c12 0%, #000 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 px-4 pb-16 pt-6 sm:px-6 md:px-12 md:pb-20">
          <header className="mx-auto max-w-5xl border-b border-white/10 pb-10 md:pb-14">
            {eyebrow ? (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-3xl font-normal tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg md:text-xl">
              {description}
            </p>
          </header>
          <div className="mx-auto max-w-5xl pt-10 md:pt-14">{children}</div>
        </main>
      </div>
    </div>
  );
}
