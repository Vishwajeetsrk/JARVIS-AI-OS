import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { InnerPageShell } from "../components/InnerPageShell";

const CAPABILITIES = [
  {
    title: "encryption at rest",
    detail: "aes-256 envelopes with customer-managed keys and automatic rotation.",
  },
  {
    title: "runtime shield",
    detail: "policy checks on every api call with tamper-evident audit streams.",
  },
  {
    title: "privacy mesh",
    detail: "field-level tokenization so analysts never touch raw identifiers.",
  },
] as const;

export function PlatformPage() {
  return (
    <InnerPageShell title="platform" eyebrow="infrastructure">
      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-white/70">
        securify wraps your data plane in zero-trust controls—deploy agents in minutes, enforce
        policies globally, and prove compliance without slowing product teams.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {CAPABILITIES.map((cap) => (
          <article
            key={cap.title}
            className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur"
          >
            <h2 className="text-lg font-medium lowercase">{cap.title}</h2>
            <p className="mt-3 text-sm text-white/60">{cap.detail}</p>
          </article>
        ))}
      </div>
      <p className="mt-12 text-sm text-white/50">
        compare tiers on{" "}
        <PresetNavLink
          target={{ kind: "route", path: "solutions" }}
          className="text-white underline"
        >
          solutions
        </PresetNavLink>
        .
      </p>
    </InnerPageShell>
  );
}
