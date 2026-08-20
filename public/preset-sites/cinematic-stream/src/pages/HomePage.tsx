import { Calendar, ChevronLeft, ChevronRight, Clock, Play, Star } from "lucide-react";
import HeroVideo from "../components/HeroVideo";
import Navbar from "../components/Navbar";
import { HERO_VIDEO } from "../routes";

export function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 z-0">
        <HeroVideo src={HERO_VIDEO} className="h-full w-full object-cover" />
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col">
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

            <div className="flex w-full flex-row gap-3 md:w-auto md:flex-col">
              <button
                type="button"
                className="animate-blur-fade-up liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3"
                style={{ animationDelay: "800ms" }}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              <button
                type="button"
                className="animate-blur-fade-up liquid-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium sm:flex-none sm:px-6 sm:py-3"
                style={{ animationDelay: "900ms" }}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
