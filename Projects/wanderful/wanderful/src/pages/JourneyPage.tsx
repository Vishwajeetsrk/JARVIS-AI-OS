import { Lock } from "lucide-react";
import HeroParallaxVideo from "../components/HeroParallaxVideo";

export function JourneyPage() {
  return (
    <section className="relative min-h-screen">
      <HeroParallaxVideo />

      <div className="pointer-events-none fixed inset-x-0 top-[120px] z-20 flex flex-col items-center text-center">
        <h1 className="hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em] text-white">
          Venture without edges.
        </h1>
        <p
          className="hero-fade-in font-hero text-[clamp(40px,5.4vw,72px)] font-normal leading-[1.1] tracking-[-0.02em]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Uncover with keen instinct.
        </p>
      </div>

      <div className="pointer-events-auto fixed inset-x-0 bottom-14 z-20 flex flex-col items-center gap-6 px-6">
        <p className="hero-fade-in-delay max-w-[620px] text-center text-[15px] leading-relaxed">
          <span className="text-white">
            Our smart itineraries shape around you — your rhythm, your vibe, your hunger for
            adventure.
          </span>
          <span className="text-white/55">
            {" "}
            Each getaway is tailored, seamless, and wholly yours.
          </span>
        </p>

        <button
          type="button"
          className="hero-fade-in-delay rounded-full bg-white px-8 py-3.5 text-[15px] font-medium text-black transition hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
        >
          Plan my escape today
        </button>

        <div className="hero-fade-in-delay flex items-center gap-2">
          <Lock size={13} strokeWidth={1.5} className="text-white/70" />
          <span className="font-body text-[11px] font-medium tracking-[0.14em] text-white/70">
            SECURE BY DESIGN. ZERO DATA LEAKS.
          </span>
        </div>
      </div>
    </section>
  );
}
