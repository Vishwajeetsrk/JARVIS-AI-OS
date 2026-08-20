export function PrivacyPage() {
  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="privacy" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="max-w-2xl opacity-80 text-sm leading-relaxed">
          VaultShield never stores your master password. This policy describes how metadata, crash
          logs, and billing identifiers are handled.
        </p>
      </section>
    </main>
  );
}
