import { LegalSections } from "../components/LegalSections";
import { PageShell } from "../components/PageShell";

export function PrivacyPage() {
  return (
    <>
      <PageShell title="Legal" eyebrow="Policies" />
      <LegalSections />
    </>
  );
}
