import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import {
  Plus,
  Mic,
  AudioLines,
  GraduationCap,
  Code2,
  HardDrive,
  CalendarDays,
  Mail,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { createThread } from "@/lib/threads.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/console/")({
  component: ClaudeHome,
  head: () => ({
    meta: [
      { title: "Jarvis — Evening thoughts" },
      { name: "description", content: "Jarvis AI OS · Chat with your autonomous OS." },
    ],
  }),
});

function greetingForHour(h: number) {
  if (h < 12) return "Morning thoughts";
  if (h < 18) return "Afternoon thoughts";
  return "Evening thoughts";
}

function ClaudeHome() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const createFn = useServerFn(createThread);
  const [now, setNow] = useState(() => new Date());
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chat" | "cowork">("chat");
  const [model] = useState("Sonnet 4.6");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const greeting = greetingForHour(now.getHours());

  const mCreate = useMutation({
    mutationFn: (text: string) => createFn({ data: { project_id: null } }).then((t) => ({ t, text })),
    onSuccess: ({ t, text }) => {
      qc.invalidateQueries({ queryKey: ["threads"] });
      if (text.trim()) {
        navigate({ to: "/console/$threadId", params: { threadId: t.id }, search: { seed: text.trim() } as any });
      } else {
        navigate({ to: "/console/$threadId", params: { threadId: t.id } });
      }
    },
    onError: () => toast.error("Could not start chat."),
  });

  const handleSend = () => {
    if (!input.trim() || mCreate.isPending) return;
    mCreate.mutate(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto bg-[#09090b]">
      {/* Center column like Claude */}
      <div className="mx-auto flex w-full max-w-[760px] flex-1 flex-col px-6 py-12">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="flex flex-1 flex-col items-center justify-center py-8 text-center"
        >
          <h1 className="flex items-center gap-3 font-serif text-[42px] font-normal tracking-tight text-white sm:text-[54px]">
            <span className="inline-flex h-8 w-8 items-center justify-center text-[#e87a3a] sm:h-9 sm:w-9">
              {/* starburst like Claude */}
              <svg viewBox="0 0 24 24" className="h-8 w-8 sm:h-9 sm:w-9" fill="none" aria-hidden>
                <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8M6 12a6 6 0 0 0 12 0 6 6 0 0 0-12 0Z" />
                </g>
              </svg>
            </span>
            {greeting}
          </h1>

          {/* Central input — Claude style */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.35, ease: [0.2, 0, 0, 1] }}
            className={`mt-10 w-full rounded-[28px] border bg-[#1a1a1d] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all ${
              focused ? "border-zinc-700 ring-1 ring-zinc-700/50" : "border-zinc-800"
            }`}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="How can I help you today?"
              className="min-h-[44px] w-full resize-none bg-transparent px-3 py-3 text-[15px] leading-6 text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
              style={{ fieldSizing: "content" } as any}
            />

            {/* Input footer */}
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200 transition-colors"
                  aria-label="Add"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900 p-1 text-xs">
                  <button
                    onClick={() => setMode("chat")}
                    className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "chat" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    Chat
                  </button>
                  <button
                    onClick={() => setMode("cowork")}
                    className={`rounded-full px-3 py-1 font-medium transition-colors ${mode === "cowork" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-zinc-200"}`}
                  >
                    Cowork
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 text-xs text-zinc-400 sm:flex">
                  <span className="font-medium text-zinc-300">{model}</span>
                  <span className="text-zinc-600">Medium</span>
                  <ChevronDown className="h-3 w-3" />
                </div>
                <button className="hidden h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 sm:flex" aria-label="Mic">
                  <Mic className="h-4 w-4" />
                </button>
                <button className="hidden h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 sm:flex" aria-label="Voice">
                  <AudioLines className="h-4 w-4" />
                </button>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || mCreate.isPending}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1f9d6b] text-white hover:bg-[#1a8a5e] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send"
                >
                  <Sparkles className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Integration pills */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.35 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2"
          >
            <Pill icon={GraduationCap} label="Learn" />
            <Pill icon={Code2} label="Code" />
            <Pill icon={HardDrive} label="From Drive" color="text-[#4285f4]" />
            <Pill icon={CalendarDays} label="From Calendar" color="text-[#34a853]" />
            <Pill icon={Mail} label="From Gmail" color="text-[#ea4335]" />
          </motion.div>
        </motion.div>

        {/* Subtle footer hint like Claude */}
        <div className="pb-4 text-center text-[11px] text-zinc-600">
          Jarvis can make mistakes. Verify important info. · <Link to="/how-it-works" className="underline decoration-zinc-700 underline-offset-4 hover:text-zinc-400">How Jarvis works</Link>
        </div>
      </div>
    </div>
  );
}

function Pill({ icon: Icon, label, color }: { icon: typeof GraduationCap; label: string; color?: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors">
      <Icon className={`h-3.5 w-3.5 ${color ?? "text-zinc-400"}`} /> {label}
    </button>
  );
}
