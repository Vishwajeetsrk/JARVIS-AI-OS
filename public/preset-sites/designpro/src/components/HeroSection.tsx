import { ArrowRight } from "lucide-react";
import { navigateToRoute } from "../../../_shared/preset-site-routing";
import { HERO_VIDEO } from "../constants";
import ShinyText from "./ShinyText";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-vignette pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <p className="text-sm text-white/80 sm:text-base">
            We deliver transformative programs that empower emerging product designers with
            cutting-edge expertise and vision to thrive globally.
          </p>
          <p className="text-sm text-white/80 sm:text-base lg:text-right">
            8000+ Talented Designers Launched !
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-4 text-xs uppercase tracking-tight text-white/80 sm:text-sm">
            Seats for Next Program Opening Soon
          </p>
          <h1
            className="font-medium leading-[0.85] tracking-tighter text-white"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            <span className="block">Become</span>
            <span className="block">
              <ShinyText>Product Leader.</ShinyText>
            </span>
          </h1>
          <button
            type="button"
            onClick={() => navigateToRoute("contact")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            Apply for Next Enrollment
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
