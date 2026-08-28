import { AboutSection } from "../components/AboutSection";
import { CtaSection } from "../components/CtaSection";
import { FooterSection } from "../components/FooterSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { VideoShowcaseSection } from "../components/VideoShowcaseSection";
import { WorkSection } from "../components/WorkSection";

export function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <VideoShowcaseSection />
      <CtaSection />
      <FooterSection />
    </>
  );
}
