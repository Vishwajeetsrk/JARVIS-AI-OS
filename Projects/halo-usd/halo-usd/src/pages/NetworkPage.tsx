import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function NetworkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <div className="flex h-screen flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[88rem]">
          <h2
            className="text-4xl font-semibold text-black md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
            data-editable
            data-preset-text="network-headline"
          >
            Halo network
          </h2>
          <p
            className="mt-6 max-w-2xl text-xl text-black/70"
            data-editable
            data-preset-text="network-body"
          >
            Institutional validators, seamless DeFi connectivity, and reward-earning dollars—USD
            Halo stays pegged while your wealth works across the network.
          </p>
        </div>
      </section>
    </div>
  );
}
