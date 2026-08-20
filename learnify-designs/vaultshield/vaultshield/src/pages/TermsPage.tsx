export function TermsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="terms" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Terms of Service
        </h1>
        <p className="max-w-2xl opacity-80 text-sm leading-relaxed">
          These terms govern your use of VaultShield apps and websites. By creating an account you
          agree to acceptable-use guidelines and subscription billing terms published here.
        </p>
      </section>
    </main>
  );
}
