import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          {description}
        </p>
        <div className="mt-12">{children}</div>
        <div className="mt-16 border-t border-white/10 pt-10">
          <button
            type="button"
            onClick={() => navigateToRoute("contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Apply for Next Enrollment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
