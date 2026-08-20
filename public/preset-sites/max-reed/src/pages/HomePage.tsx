import { ArrowUpRight } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { VIDEO_BACKGROUND } from "../constants";

export function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.5rem)] flex-col justify-end overflow-hidden px-4 pb-16 pt-10 md:px-14 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <BackgroundVideo src={VIDEO_BACKGROUND} />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/85 to-canvas/40" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
          Portfolio · London
        </p>
        <h1 className="mt-6 text-[32px] font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Max Reed
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          Digital products, brand systems, and motion-led interfaces for teams who want cinematic
          clarity without losing personality.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-canvas transition hover:bg-white/90"
            onClick={() => navigateToRoute("work")}
          >
            View work
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="liquid-glass rounded-full px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
            onClick={() => navigateToRoute("contact")}
          >
            Let&apos;s team up
          </button>
        </div>
      </div>
    </section>
  );
}
