import { BodySections } from "../components/BodySections";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#08020e]">
      <Navbar />
      <Hero />
      <BodySections />
    </div>
  );
}
