import { ArrowRight, Play } from "lucide-react";
import { LegalSections } from "./components/LegalSections";
import HeroVideo from "./components/HeroVideo";
import Navbar from "./components/Navbar";

const EXTRA = [
  {
    id: "work",
    title: "Work",
    body: "Selected reels and launch films crafted for brands that need atmosphere, pacing, and clarity in every frame.",
  },
  {
    id: "studio",
    title: "Studio",
    body: "Our team blends editorial direction, color science, and motion design to ship cinematic stories at production scale.",
  },
  {
    id: "archive",
    title: "Archive",
    body: "Browse past collaborations, festival cuts, and director editions from the last decade of Cinematic Cloud.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "Tell us about your premiere date, format, and audience—we will respond within one business day.",
  },
] as const;

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <section id="home" className="relative min-h-screen overflow-hidden">
        <HeroVideo />
        <div className="hero-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1 flex-col items-center justify-center px-4 pb-16 text-center sm:px-6 md:px-12">
            <p
              className="animate-blur-fade-up mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
              style={{ animationDelay: "200ms" }}
            >
              Premium cinematic experiences
            </p>
            <h1
              className="animate-blur-fade-up headline-glow max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "350ms" }}
            >
              Stories that move
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
                through the atmosphere
              </span>
            </h1>
            <p
              className="animate-blur-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
              style={{ animationDelay: "500ms" }}
            >
              A full-screen cinematic hero for launches, films, and immersive brands — dark,
              refined, and built for motion.
            </p>
            <div
              className="animate-blur-fade-up mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              style={{ animationDelay: "650ms" }}
            >
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                <Play className="h-4 w-4 fill-black" />
                Watch reel
              </button>
              <button
                type="button"
                className="liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white"
              >
                Explore work
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </main>
        </div>
      </section>

      {EXTRA.map((s) => (
        <section key={s.id} id={s.id} className="border-t border-white/10 px-6 py-24 md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">{s.title}</h2>
            <p className="mt-4 text-base text-white/55">{s.body}</p>
          </div>
        </section>
      ))}

      <LegalSections />
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/40">
        © 2026 Cinematic Cloud
      </footer>
    </div>
  );
}
