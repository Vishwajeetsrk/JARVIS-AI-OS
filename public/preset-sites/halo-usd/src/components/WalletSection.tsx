import PillButton from "./PillButton";

export default function WalletSection() {
  return (
    <section
      id="wallet"
      className="scroll-mt-24 border-t border-black/5 bg-[#F5F5F5] px-6 py-20"
      aria-label="Wallet"
    >
      <div className="mx-auto max-w-[88rem] text-center">
        <h2
          className="mb-4 text-3xl font-semibold text-black md:text-4xl"
          style={{ letterSpacing: "-0.03em" }}
          data-editable
          data-preset-text="wallet-headline"
        >
          Connect your wallet
        </h2>
        <p
          className="mx-auto mb-8 max-w-md text-base text-black/60"
          data-editable
          data-preset-text="wallet-body"
        >
          Link a compatible wallet to hold USD Halo, view rewards, and move funds on-chain.
        </p>
        <PillButton size="base" route="wallet" presetText="wallet-cta">
          Open Wallet
        </PillButton>
      </div>
    </section>
  );
}
