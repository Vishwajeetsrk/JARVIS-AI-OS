import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-40 pt-16 text-center sm:px-10">
      <p
        className="animate-blur-fade-up mb-5 text-[11px] font-medium uppercase tracking-[0.38em] text-white/45"
        style={{ animationDelay: "150ms" }}
      >
        Lumina
      </p>

      <h1
        className="animate-blur-fade-up max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animationDelay: "280ms" }}
      >
        Light that follows
        <span className="block text-white/55">every frame forward</span>
      </h1>

      <p
        className="animate-blur-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg"
        style={{ animationDelay: "420ms" }}
      >
        A cinematic one-page experience — immersive video, scroll discovery, and a glass footer that
        guides the journey.
      </p>

      <div
        className="animate-blur-fade-up mt-10 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: "560ms" }}
      >
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
        >
          Start exploring
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white"
          onClick={() =>
            document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Discover below
        </button>
      </div>
    </section>
  );
}
