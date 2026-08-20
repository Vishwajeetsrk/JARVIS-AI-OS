import BackedBySection from "../components/BackedBySection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import UseCasesSection from "../components/UseCasesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <BackedBySection />
      <UseCasesSection />
    </div>
  );
}
