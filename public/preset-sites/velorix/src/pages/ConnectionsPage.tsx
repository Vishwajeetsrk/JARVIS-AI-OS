import InnerPageLayout from "../components/InnerPageLayout";

const INTEGRATIONS = ["Slack", "Notion", "Salesforce", "Stripe", "Google Workspace", "HubSpot"];

export default function ConnectionsPage() {
  return (
    <InnerPageLayout
      eyebrow="Connections"
      title="Your stack, orchestrated"
      description="Pre-built connectors and webhooks keep data flowing—Velorix normalizes events into one operational timeline."
    >
      <div className="flex flex-wrap gap-3">
        {INTEGRATIONS.map((name) => (
          <span
            key={name}
            className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm text-white/80"
          >
            {name}
          </span>
        ))}
      </div>
    </InnerPageLayout>
  );
}
