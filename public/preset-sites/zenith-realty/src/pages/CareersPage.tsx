import { PageShell } from "../components/PageShell";

const ROLES = [
  { title: "Senior Property Advisor", location: "Los Angeles, CA" },
  { title: "VR Experience Producer", location: "Remote" },
  { title: "Investment Analyst", location: "New York, NY" },
];

export function CareersPage() {
  return (
    <PageShell
      title="Careers"
      subtitle="Join a team building the next standard for luxury real estate discovery and client care."
    >
      <ul className="divide-y divide-black/10 bg-white">
        {ROLES.map((role) => (
          <li
            key={role.title}
            className="flex flex-wrap items-center justify-between gap-4 px-8 py-6"
          >
            <div>
              <p className="font-medium text-[#141414]">{role.title}</p>
              <p className="mt-1 text-[13px] text-[#A5A5A5]">{role.location}</p>
            </div>
            <button
              type="button"
              className="border border-black/15 px-5 py-2.5 text-[13px] font-medium hover:bg-gray-50"
            >
              Apply
            </button>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
