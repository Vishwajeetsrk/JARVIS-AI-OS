import { InnerPageShell } from "../components/InnerPageShell";
import { LegalSections } from "../components/LegalSections";

export function PrivacyPage() {
  return (
    <InnerPageShell title="privacy" eyebrow="legal">
      <LegalSections />
    </InnerPageShell>
  );
}
