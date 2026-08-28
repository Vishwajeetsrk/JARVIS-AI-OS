import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GRASS_IMG, HERO_VIDEO } from "../constants";
import { scrollToSection } from "../lib/scroll";
import { AnimatedText } from "./AnimatedText";
import { DashboardMock } from "./DashboardMock";
import { FadeUp } from "./FadeUp";
import { FadingVideo } from "./FadingVideo";
import { HeroBadge } from "./HeroBadge";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const grassY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.55, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden scroll-mt-0"
    >
      <div className="absolute inset-0">
        <FadingVideo src={HERO_VIDEO} className="h-full w-full object-cover" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-48" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6 pt-28 text-center sm:pt-32"
      >
        <FadeUp>
          <HeroBadge />
        </FadeUp>
        <FadeUp delay={0.08} className="mt-6">
          <h1
            className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            data-editable
          >
            Design at the{" "}
            <AnimatedText className="italic text-violet-200">speed of thought</AnimatedText>
          </h1>
        </FadeUp>
        <FadeUp delay={0.16} className="mt-5 max-w-xl">
          <p className="text-base leading-relaxed text-white/60 sm:text-lg" data-editable>
            UI Rocket turns prompts into production-ready interfaces — with live preview, glass UI,
            and scroll-driven motion built in.
          </p>
        </FadeUp>
        <FadeUp delay={0.24} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton onClick={() => scrollToSection("pricing")}>Start building</PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection("features")}>
            See features
          </SecondaryButton>
        </FadeUp>
      </motion.div>

      <motion.div
        style={{ y: dashboardY }}
        className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-4 pb-8 sm:mt-14 sm:px-6 md:pb-12"
      >
        <DashboardMock />
      </motion.div>

      <motion.div
        style={{ y: grassY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[min(28vh,220px)]"
        aria-hidden
      >
        <img src={GRASS_IMG} alt="" className="h-full w-full object-cover object-bottom" />
      </motion.div>
    </section>
  );
}
