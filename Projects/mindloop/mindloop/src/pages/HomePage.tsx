import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import SearchSection from "../components/SearchSection";
import SolutionSection from "../components/SolutionSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
