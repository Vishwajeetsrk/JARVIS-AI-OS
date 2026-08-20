import InnerPageLayout from "../components/InnerPageLayout";

export default function AiDefensePage() {
  return (
    <InnerPageLayout
      eyebrow="AI Defense"
      title="Guardrails for every automated decision"
      description="Velorix monitors model outputs, enforces policy, and pauses risky actions before they reach production systems."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-[#FF4444]/30 bg-[#FF0000]/10 p-6">
          <h3 className="text-lg font-semibold">Threat detection</h3>
          <p className="mt-3 text-sm text-white/60">
            Anomaly scoring on prompts, tool calls, and data exports with real-time alerts.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-lg font-semibold">Human-in-the-loop</h3>
          <p className="mt-3 text-sm text-white/60">
            Sensitive actions queue for approval with full context and rollback paths.
          </p>
        </article>
      </div>
    </InnerPageLayout>
  );
}
