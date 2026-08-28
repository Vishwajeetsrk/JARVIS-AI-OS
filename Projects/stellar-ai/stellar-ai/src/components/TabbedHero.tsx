import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { HERO_TABS, HERO_VIDEO } from "../constants";

export default function TabbedHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = HERO_TABS[activeIndex]!;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#060812]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src={HERO_VIDEO}
          aria-hidden
        />
      </div>

      <div className="hero-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 flex min-h-screen flex-col px-4 pb-10 pt-28 sm:px-8 md:px-12 md:pb-14 md:pt-32">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
          <p
            className="animate-fade-in-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/45"
            style={{ animationDelay: "0.1s" }}
          >
            Enterprise AI platform
          </p>

          <h1
            className="animate-fade-in-up font-display max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="stellar-gradient-text">Stellar intelligence</span>
            <span className="block text-white">for every workflow</span>
          </h1>

          <p
            className="animate-fade-in-up mt-5 max-w-xl text-base leading-relaxed text-white/55 md:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Deploy models, orchestrate agents, and govern production AI from one tabbed command
            center—built for teams that ship at stellar velocity.
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Explore solutions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#learn-hub"
              className="liquid-glass inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-white/90"
            >
              Visit Learn Hub
            </a>
          </div>

          <div className="animate-fade-in-up mt-12 md:mt-16" style={{ animationDelay: "0.55s" }}>
            <div className="liquid-glass mb-4 inline-flex flex-wrap gap-1 rounded-2xl p-1.5">
              {HERO_TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    i === activeIndex
                      ? "bg-white text-black shadow-lg shadow-violet-500/10"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div
              key={active.id}
              className="tab-overlay-enter liquid-glass max-w-2xl rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300/90">
                {active.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {active.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                {active.description}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {active.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-white/40">
                      {stat.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white md:text-xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
