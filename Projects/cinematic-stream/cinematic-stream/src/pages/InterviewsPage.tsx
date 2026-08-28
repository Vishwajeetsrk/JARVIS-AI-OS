import { StreamPageShell } from "../components/StreamPageShell";

const INTERVIEWS = [
  { guest: "Mira Okonkwo", role: "Director · Northern Passage", duration: "42 min" },
  { guest: "Jonah Hale", role: "Composer · Glass Meridian", duration: "28 min" },
  { guest: "Elena Voss", role: "Cinematographer · Echo Division", duration: "36 min" },
  { guest: "The Framecast Desk", role: "Weekly roundup", duration: "18 min" },
];

export function InterviewsPage() {
  return (
    <StreamPageShell
      eyebrow="Long-form"
      title="Interviews"
      description="Conversations with directors, composers, and cinematographers behind the lens."
    >
      <ul className="space-y-4">
        {INTERVIEWS.map((item) => (
          <li
            key={item.guest}
            className="liquid-glass flex flex-col gap-2 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="text-lg font-medium">{item.guest}</h2>
              <p className="text-sm text-gray-400">{item.role}</p>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-white/50">
              {item.duration}
            </span>
          </li>
        ))}
      </ul>
    </StreamPageShell>
  );
}
