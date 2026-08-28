import { MIcon } from "./MIcon";

const MESSAGES = [
  { role: "user" as const, text: "Design a fintech hero with glass nav and parallax dashboard." },
  {
    role: "ai" as const,
    text: "On it — deep violet base, Instrument Serif headline, liquid-glass chrome.",
  },
  { role: "user" as const, text: "Add a live preview panel on the right." },
  { role: "ai" as const, text: "Preview wired with crossfade video loop and chat rail." },
];

export function ChatPanel() {
  return (
    <div className="flex h-full flex-col border-r border-white/10 bg-[#0c0418]/80">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <MIcon name="auto_awesome" className="text-violet-300 text-[20px]" />
        <span className="text-sm font-medium text-white/90" data-editable>
          UI Rocket
        </span>
        <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
          Live
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-4">
        {MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[92%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-violet-600/40 text-white/95"
                : "mr-auto bg-white/5 text-white/75"
            }`}
            data-editable
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 p-3">
        <div className="liquid-glass flex items-center gap-2 rounded-xl px-3 py-2">
          <input
            type="text"
            readOnly
            value="Describe your next screen…"
            className="flex-1 bg-transparent text-xs text-white/50 outline-none"
            aria-label="Chat input"
          />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500 text-white"
            aria-label="Send"
          >
            <MIcon name="send" className="text-[16px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
