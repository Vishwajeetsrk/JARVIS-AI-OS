import { BottomLeftCard } from "../components/BottomLeftCard";

export function StakingPage() {
  return (
    <section className="relative min-h-[70vh] border-t border-[rgba(30,50,90,0.12)] px-6 py-20 md:px-10">
      <h2 className="text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-4xl">
        Staking
      </h2>
      <p className="mt-4 max-w-2xl text-[rgba(30,50,90,0.65)]">
        Deposit ETH or stablecoins, receive liquid receipt tokens, and route yield across curated
        strategies with live APY updates.
      </p>
      <div className="relative mt-16 min-h-[200px]">
        <BottomLeftCard />
      </div>
    </section>
  );
}
