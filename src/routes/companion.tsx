import { createFileRoute } from "@tanstack/react-router";
import { NiaDesktopCompanion } from "@/components/jarvis/nia-desktop-companion";

// @ts-ignore
export const Route = createFileRoute("/companion")({
  component: CompanionPage,
});

function CompanionPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent overflow-hidden">
      <NiaDesktopCompanion />
    </div>
  );
}
