import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { MarqueeSection } from "../components/MarqueeSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";

export function HomePage() {
  return (
    <main className="overflow-x-clip bg-canvas font-sans text-mist">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
