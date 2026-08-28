import { VIDEOS } from "../constants";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <video
        src={VIDEOS.cta}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        <p
          className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:text-sm"
          data-editable
        >
          Starting at $99,000
        </p>
        <h2
          className="font-heading text-5xl leading-[0.95] tracking-[-2px] text-foreground sm:text-7xl md:text-8xl"
          data-editable
        >
          Join the ride
        </h2>
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          data-editable
        >
          Reserve your Velorah today with a fully refundable $500 deposit. Early adopters receive
          priority delivery and exclusive founding-member benefits.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="liquid-glass rounded-full px-10 py-4 text-sm text-foreground transition-transform hover:scale-[1.03]"
            data-editable
          >
            Preorder Now
          </button>
          <button
            type="button"
            className="rounded-full border border-border px-10 py-4 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            data-editable
          >
            Schedule a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
