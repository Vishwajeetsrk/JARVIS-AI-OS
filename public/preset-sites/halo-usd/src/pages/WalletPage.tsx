import Navbar from "../components/Navbar";
import WalletSection from "../components/WalletSection";

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="relative pt-20">
        <Navbar />
      </div>
      <WalletSection />
    </div>
  );
}
