import { HERO_BRANDS, HERO_VIDEO } from "../constants";
import BrandMarquee from "./BrandMarquee";
import PillButton from "./PillButton";

export default function HeroSection() {
  return (
    <section className="relative px-6 pt-20 pb-6">
      <div
        id="network"
        className="relative h-screen w-full scroll-mt-24 overflow-hidden rounded-2xl"
        style={{ maxHeight: "calc(100vh - 5rem)" }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 flex h-full flex-col items-start justify-start p-12 pt-36">
          <h1
            className="mb-4 max-w-xl text-5xl leading-tight font-semibold text-black md:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
            data-editable
            data-preset-text="hero-headline"
          >
            Your Wealth
            <br />
            Works
          </h1>
          <p
            className="mb-8 max-w-md text-base leading-relaxed text-black/70 md:text-lg"
            data-editable
            data-preset-text="hero-subcopy"
          >
            An automated, reward-powered digital dollar built for native passive earnings and
            effortless connection into DeFi.
          </p>
          <PillButton section="ecosystem" presetText="hero-cta">
            Join us
          </PillButton>

          <div className="mt-24 w-full max-w-md overflow-hidden">
            <BrandMarquee brands={HERO_BRANDS} trackClass="marquee-track" />
          </div>
        </div>
      </div>
    </section>
  );
}
