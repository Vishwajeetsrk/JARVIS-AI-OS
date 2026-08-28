import HeroVideo from "./components/HeroVideo";
import HeroSection from "./components/HeroSection";
import DiscoverSection from "./components/DiscoverSection";
import MissionSection from "./components/MissionSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeroVideo />
      <div className="page-vignette pointer-events-none fixed inset-0 z-[1]" aria-hidden />

      <div className="relative z-10 pb-32">
        <main>
          <HeroSection />
          <DiscoverSection />
          <MissionSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}
