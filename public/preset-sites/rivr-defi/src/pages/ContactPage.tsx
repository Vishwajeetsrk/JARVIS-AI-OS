export function ContactPage() {
  return (
    <section className="scroll-mt-24 border-t border-[rgba(30,50,90,0.12)] px-6 py-20 md:px-10 md:py-28">
      <h2 className="text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-4xl">
        Contact
      </h2>
      <p className="mt-4 max-w-2xl text-[rgba(30,50,90,0.65)]">
        Book a demo with the RIVR team — integrations@rivr.finance
      </p>
      <form className="mt-8 max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Work email"
          className="w-full rounded-lg border border-[rgba(30,50,90,0.2)] px-4 py-3 text-sm"
        />
        <button
          type="submit"
          className="rounded-full bg-[rgba(30,50,90,0.8)] px-6 py-2.5 text-sm text-white"
        >
          Book demo
        </button>
      </form>
    </section>
  );
}
