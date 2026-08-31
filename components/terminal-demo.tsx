"use client";
import { Terminal } from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <section className="w-full py-6 md:py-12 flex justify-center">
      <Terminal
        commands={[
          "npx shadcn@latest init",
          "npm install @aceternity/ui",
          "jarvis deploy --cluster-alpha",
          "echo 'JARVIS AI OS Ready 🚀'",
        ]}
        outputs={{
          0: [
            "✔ Preflight checks passed.",
            "✔ Created components.json",
            "✔ Initialized project.",
          ],
          1: ["added 53 UI components in 1.4s"],
          2: ["✔ Connected to constellation network."],
          3: ["JARVIS AI OS Ready 🚀"],
        }}
        typingSpeed={40}
        delayBetweenCommands={900}
      />
    </section>
  );
}
