type LegalSectionsProps = {
  variant?: "dark" | "light";
};

export function LegalSections({ variant = "dark" }: LegalSectionsProps) {
  const sectionClass =
    variant === "dark"
      ? "border-t border-white/10 bg-black px-6 py-20 md:px-12"
      : "border-t border-[#e2e8f0] bg-white px-6 py-20 md:px-12";
  const titleClass =
    variant === "dark"
      ? "text-2xl font-semibold text-white"
      : "text-2xl font-semibold text-[#0f172a]";
  const bodyClass =
    variant === "dark"
      ? "mt-4 max-w-2xl text-sm leading-relaxed text-white/60"
      : "mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b]";

  return (
    <>
      <section id="privacy" className={sectionClass}>
        <div className="mx-auto max-w-4xl">
          <h2 className={titleClass}>Privacy Policy</h2>
          <p className={bodyClass}>
            This privacy policy describes how we collect, use, and protect information when you use
            our services. Replace this copy with your legal team&apos;s final text before launch.
          </p>
        </div>
      </section>
      <section id="terms" className={sectionClass}>
        <div className="mx-auto max-w-4xl">
          <h2 className={titleClass}>Terms of Service</h2>
          <p className={bodyClass}>
            These terms govern access to the site and products. By continuing to browse, you agree
            to the policies published here. Update with your jurisdiction-specific terms before
            production.
          </p>
        </div>
      </section>
    </>
  );
}
