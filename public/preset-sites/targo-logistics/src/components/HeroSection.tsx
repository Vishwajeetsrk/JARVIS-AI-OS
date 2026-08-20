import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { CONTACT_ROUTE, HERO_VIDEO_URL } from "../constants";
import { ClippedButton } from "./ClippedButton";
import { ConsultationCard } from "./ConsultationCard";
import { Navbar } from "./Navbar";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col px-5 pb-8 md:px-10 lg:px-14">
          <div className="pt-[6vh] md:pt-[8vh] lg:max-w-3xl">
            <h1
              className="animate-fade-up text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              data-editable
            >
              Swift and Simple Transport
            </h1>
            <div className="animate-fade-up-delay mt-8">
              <PresetNavLink target={CONTACT_ROUTE}>
                <ClippedButton>Get Started</ClippedButton>
              </PresetNavLink>
            </div>
          </div>

          <div className="animate-fade-up-delay-2 mt-auto">
            <ConsultationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
