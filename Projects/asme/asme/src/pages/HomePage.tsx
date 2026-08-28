import AboutSection from "../components/AboutSection";
import FeaturedVideoSection from "../components/FeaturedVideoSection";
import HeroSection from "../components/HeroSection";
import PhilosophySection from "../components/PhilosophySection";
import ServicesSection from "../components/ServicesSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </main>
  );
}
