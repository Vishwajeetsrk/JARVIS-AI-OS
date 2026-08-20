import { ChatPanel } from "./ChatPanel";
import { LivePreviewHero } from "./LivePreviewHero";

export function DashboardMock() {
  return (
    <div
      className="liquid-glass-strong mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-950/50"
      style={{ aspectRatio: "16 / 9" }}
    >
      <div className="grid h-full grid-cols-[minmax(0,34%)_1fr]">
        <ChatPanel />
        <LivePreviewHero />
      </div>
    </div>
  );
}
