import { ABOUT_CORNER_IMAGES, ABOUT_TEXT } from "../constants";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";
import { FadeIn } from "./FadeIn";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
      >
        <img src={ABOUT_CORNER_IMAGES.moon} alt="" className="h-auto w-full" />
      </FadeIn>
      <FadeIn
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
      >
        <img src={ABOUT_CORNER_IMAGES.object} alt="" className="h-auto w-full" />
      </FadeIn>
      <FadeIn
        className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
      >
        <img src={ABOUT_CORNER_IMAGES.lego} alt="" className="h-auto w-full" />
      </FadeIn>
      <FadeIn
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
      >
        <img src={ABOUT_CORNER_IMAGES.group} alt="" className="h-auto w-full" />
      </FadeIn>

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-mist"
        />

        <div id="contact" className="pt-6 sm:pt-8 md:pt-10">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
