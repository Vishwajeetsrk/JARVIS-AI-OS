export function LegalSections() {
  return (
    <>
      <section id="privacy" className="border-t border-white/10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium text-white">privacy policy</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            securify processes customer data only to deliver encryption, access control, and audit
            services described in your agreement.
          </p>
        </div>
      </section>
      <section id="terms" className="border-t border-white/10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-medium text-white">terms of service</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
            by using securify products you agree to acceptable-use policies, data residency choices,
            and billing terms published here. update with jurisdiction-specific language before
            go-live.
          </p>
        </div>
      </section>
    </>
  );
}
