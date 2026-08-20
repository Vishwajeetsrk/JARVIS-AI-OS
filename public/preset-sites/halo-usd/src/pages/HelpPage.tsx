import Navbar from "../components/Navbar";
import UseCasesSection from "../components/UseCasesSection";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative pt-20">
        <Navbar />
      </div>
      <UseCasesSection />
    </div>
  );
}
