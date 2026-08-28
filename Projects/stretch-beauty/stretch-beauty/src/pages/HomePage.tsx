import { AnnouncementBar } from "../components/AnnouncementBar";
import { BestSellersSection } from "../components/BestSellersSection";
import { CategoriesSection } from "../components/CategoriesSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";

export function HomePage() {
  return (
    <>
      <div className="relative">
        <AnnouncementBar />
        <Navbar />
        <HeroSection />
      </div>
      <BestSellersSection />
      <CategoriesSection />
    </>
  );
}
