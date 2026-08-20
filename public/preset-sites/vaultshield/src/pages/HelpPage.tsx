export function HelpPage() {
  const faqs = [
    [
      "How do I import passwords?",
      "Use the guided importer from 1Password, Bitwarden, or CSV export.",
    ],
    [
      "Is my master password stored?",
      "Never—only a salted verifier is kept locally on your device.",
    ],
    [
      "Can teams share vaults?",
      "Business plans support role-based shared vaults with audit trails.",
    ],
  ];

  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="help" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Help
        </h1>
        <p className="mb-10 max-w-xl opacity-80">
          Answers to the questions we hear most—plus direct support when you need a human.
        </p>
        <section id="faq" className="scroll-mt-24">
          <h2 className="text-lg font-semibold">FAQ</h2>
          <dl className="mt-6 space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-xl border border-[#192837]/10 bg-white/50 p-5">
                <dt className="font-medium">{q}</dt>
                <dd className="mt-2 text-sm opacity-80">{a}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section id="contact" className="mt-16 scroll-mt-24 border-t border-[#192837]/10 pt-16">
          <h2 className="text-lg font-semibold">Contact support</h2>
          <p className="mt-3 opacity-80">support@vaultshield.example — 24/7 for Business plans.</p>
        </section>
      </section>
    </main>
  );
}
