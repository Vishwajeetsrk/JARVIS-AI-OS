import { InnerPageShell } from "../components/InnerPageShell";
import { LegalSections } from "../components/LegalSections";

export function TermsPage() {
  return (
    <InnerPageShell title="terms" eyebrow="legal">
      <p className="mb-8 max-w-2xl text-sm text-white/60">
        review the agreements that govern access to securify products and customer data handling.
      </p>
      <LegalSections />
    </InnerPageShell>
  );
}
