import { useEffect } from "react";
import { Calendar, ChevronLeft, ChevronRight, Clock, Play, Star } from "lucide-react";
import { applyPresetHashOnLoad } from "../../_shared/preset-site-routing";
import FadingVideo from "./components/FadingVideo";
import Navbar from "./components/Navbar";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

const SECTIONS = [
  {
    id: "movies",
    title: "Movies",
    body: "Premieres, festival cuts, and exclusive director editions streaming in 4K HDR.",
  },
  {
    id: "tv-series",
    title: "TV Series",
    body: "Serialized originals with weekly drops and curated binge collections.",
  },
  {
    id: "editors-pick",
    title: "Editor's Pick",
    body: "Hand-selected features updated every Friday by the Framecast editorial team.",
  },
  {
    id: "interviews",
    title: "Interviews",
    body: "Long-form conversations with directors, composers, and cinematographers.",
  },
  {
    id: "user-reviews",
    title: "User Reviews",
    body: "Community ratings and scene-level notes from verified members.",
  },
] as const;

export default function App() {
  useEffect(() => {
    applyPresetHashOnLoad();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="fixed inset-0 z-0">
          <FadingVideo src={HERO_VIDEO} className="h-full w-full object-cover" />
        </div>

        <div
          className="pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <div className="flex flex-1 flex-col justify-end px-4 pb-8 sm:px-6 md:px-12 md:pb-16">
            <div className="flex flex-col items-end gap-8 md:flex-row">
              <div className="w-full flex-1">
                <div
                  className="animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs sm:mb-8 sm:gap-6 sm:text-sm"
                  style={{ animationDelay: "300ms" }}
                >
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Star className="h-4 w-4 fill-white sm:h-5 sm:w-5" />
                    8.7/10 IMDB
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/90">
                    <Clock className="h-4 w-4" />
                    132 min
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/90">
                    <Calendar className="h-4 w-4" />
                    April, 2025
                  </span>
                </div>

                <h1
                  className="animate-blur-fade-up mb-4 text-3xl font-normal tracking-[-0.04em] sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ animationDelay: "400ms" }}
                >
                  Step Through. Work Smarter.
                </h1>

                <p
                  className="animate-blur-fade-up mb-6 max-w-2xl text-base text-gray-400 sm:mb-12 sm:text-lg md:text-xl"
                  style={{ animationDelay: "500ms" }}
                >
                  A voyage through forgotten realms, where past and future intertwine.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="animate-blur-fade-up inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3"
                    style={{ animationDelay: "600ms" }}
                  >
                    <Play className="h-[18px] w-[18px] fill-black" />
                    Watch Now
                  </button>
                  <button
                    type="button"
                    className="animate-blur-fade-up liquid-glass rounded-full px-6 py-2.5 text-sm font-medium sm:px-8 sm:py-3"
                    style={{ animationDelay: "700ms" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div
                className="animate-blur-fade-up flex w-full flex-row gap-3 md:w-auto md:flex-col"
                style={{ animationDelay: "800ms" }}
              >
                <button
                  type="button"
                  className="liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button
                  type="button"
                  className="liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 md:px-12 md:py-28"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{s.title}</h2>
          <p className="mt-4 max-w-2xl text-white/55">{s.body}</p>
        </section>
      ))}

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 md:px-12"
      >
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-white/55">studios@framecast.example</p>
      </section>
    </div>
  );
}
