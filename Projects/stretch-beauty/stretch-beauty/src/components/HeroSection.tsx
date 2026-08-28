import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { HERO_IMAGE, HERO_VIDEOS } from "../constants";
import { useInView } from "../hooks/useInView";

function WavyUnderline() {
  return (
    <svg
      className="absolute -bottom-1 left-0 h-4 w-full"
      viewBox="0 0 200 16"
      fill="none"
      aria-hidden
    >
      <path d="M0 12 Q25 4 50 12 T100 12 T150 12 T200 12" stroke="#C8A45C" strokeWidth="2" />
      <path d="M0 10 Q25 6 50 10 T100 10 T150 10 T200 10" stroke="#C8A45C" strokeWidth="1.5" />
      <path d="M0 8 Q25 8 50 8 T100 8 T150 8 T200 8" stroke="#C8A45C" strokeWidth="1" />
    </svg>
  );
}

export function HeroSection() {
  const { ref, isVisible } = useInView(0.15);
  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setActiveSlide((i) => (i + 1) % HERO_VIDEOS.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex min-h-screen scroll-mt-0 flex-col lg:flex-row"
    >
      <div className="relative min-h-[60vh] w-full lg:min-h-0 lg:w-1/2">
        <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" aria-hidden />

        <div
          className={`relative z-10 flex h-full min-h-[60vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-10 lg:min-h-0 lg:pb-20 lg:pt-40 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all duration-1000`}
        >
          <h1 className="mb-6 text-4xl font-light leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,6rem)]">
            ethical beauty,
            <br />
            <span className="relative inline-block">
              sustainable impact.
              <WavyUnderline />
            </span>
          </h1>
          <p className="mb-10 max-w-md text-sm text-white/80 md:text-base">
            Committed to sustainable beauty and minimize our impact on the planet.
          </p>
          <PresetNavLink target={{ kind: "route", path: "about" }}>
            <button
              type="button"
              className="btn-primary rounded-full bg-white px-10 py-4 text-sm text-black"
            >
              about us
            </button>
          </PresetNavLink>
        </div>
      </div>

      <div className="relative min-h-[40vh] w-full overflow-hidden lg:min-h-0 lg:w-1/2">
        {HERO_VIDEOS.map((src, index) => (
          <video
            key={src}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <div className="flex items-center gap-2">
            {HERO_VIDEOS.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeSlide ? "scale-125 bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white"
            onClick={() => setPlaying((p) => !p)}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
