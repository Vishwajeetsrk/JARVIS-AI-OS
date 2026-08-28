import HeroSection from "../components/HeroSection";
import RoutineSection from "../components/RoutineSection";
import TeamSection from "../components/TeamSection";
import WellnessSection from "../components/WellnessSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WellnessSection />
      <RoutineSection />
      <TeamSection />
    </>
  );
}
