import { ABOUT_TEXT } from "../constants";
import { ScrollRevealText } from "./ScrollRevealText";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-32 px-8">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollRevealText
          text={ABOUT_TEXT}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-relaxed font-body text-foreground"
        />
      </div>
    </section>
  );
}
