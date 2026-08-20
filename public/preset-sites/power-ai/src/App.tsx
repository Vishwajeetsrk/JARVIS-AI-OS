import FadingVideo from "./components/FadingVideo";
import LogoMarquee from "./components/LogoMarquee";
import Navbar from "./components/Navbar";
import { PageSections } from "./components/PageSections";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <FadingVideo src={HERO_VIDEO} className="h-full w-full object-cover" />
        </div>

        <div className="hero-vignette pointer-events-none fixed inset-0 z-[1]" aria-hidden />

        <div
          className="content-blur-shape pointer-events-none fixed inset-0 z-[2] flex items-center justify-center"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex flex-1 flex-col items-center justify-center px-6 pb-6 text-center md:px-12">
            <h1
              className="animate-blur-fade-up ai-gradient-text font-display text-[clamp(3.5rem,18vw,13.75rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
              style={{ animationDelay: "200ms" }}
            >
              Power AI
            </h1>
            <p
              className="animate-blur-fade-up mt-6 max-w-xl text-sm leading-relaxed text-hero-sub/90 md:text-base"
              style={{ animationDelay: "400ms" }}
            >
              Enterprise intelligence that scales with your team — deploy models, orchestrate
              agents, and ship production AI on one liquid-glass platform.
            </p>
            <div className="animate-blur-fade-up mt-10" style={{ animationDelay: "550ms" }}>
              <button
                type="button"
                className="liquid-glass rounded-full px-9 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                Schedule a Consult
              </button>
            </div>
          </main>

          <LogoMarquee />
        </div>
      </section>

      <PageSections />
    </div>
  );
}
