import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative pt-20">
        <Navbar />
      </div>
      <InfoSection />
    </div>
  );
}
