import BackedBySection from "../components/BackedBySection";
import Navbar from "../components/Navbar";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative pt-20">
        <Navbar />
      </div>
      <BackedBySection />
    </div>
  );
}
