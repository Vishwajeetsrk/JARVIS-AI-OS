import { InnerPageShell } from "../components/InnerPageShell";

const TEAM = [
  { name: "mara chen", role: "ceo & co-founder" },
  { name: "elliot price", role: "head of security research" },
  { name: "priya nair", role: "vp customer trust" },
] as const;

export function CompanyPage() {
  return (
    <InnerPageShell title="company" eyebrow="about us">
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-white/70">
        we started securify after watching startups leak customer trust through ad-hoc encryption.
        today we protect more than a billion gigabytes for teams who refuse to trade velocity for
        safety.
      </p>
      <ul className="space-y-6">
        {TEAM.map((person) => (
          <li
            key={person.name}
            className="flex flex-col gap-1 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-lg font-medium lowercase">{person.name}</span>
            <span className="text-sm text-white/50">{person.role}</span>
          </li>
        ))}
      </ul>
    </InnerPageShell>
  );
}
