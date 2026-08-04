import { useState, useEffect, useRef } from "react";
import { Sparkles, Code, FileText, PenLine, Search, Puzzle, Lightbulb, X } from "lucide-react";

interface Suggestion {
  text: string;
  icon: typeof Lightbulb;
  label: string;
}

const SUGGESTIONS: Suggestion[] = [
  { text: "Generate a SaaS landing page with corporate identity", icon: Sparkles, label: "Design landing page" },
  { text: "Create a project roadmap with milestones and deadlines", icon: PenLine, label: "Create roadmap" },
  { text: "Analyze my codebase for security vulnerabilities", icon: Search, label: "Security audit" },
  { text: "Write a Python script to automate file organization", icon: Code, label: "Write automation" },
  { text: "Create a Word document with a business proposal", icon: FileText, label: "Business proposal" },
  { text: "Design a dashboard with the Apple design system", icon: Puzzle, label: "Apple design system" },
];

interface ChatSuggestionsProps {
  onSelect: (text: string) => void;
}

export function ChatSuggestions({ onSelect }: ChatSuggestionsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 60000);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (!visible) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <Lightbulb className="h-3 w-3" />
        Suggestions
      </button>

      {isOpen && (
        <div className="mb-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {SUGGESTIONS.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                onSelect(s.text);
                setVisible(false);
              }}
              className="group flex items-start gap-2 rounded-lg border border-border bg-card p-2.5 text-left text-xs transition-all hover:border-primary/30 hover:bg-surface"
            >
              <s.icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              <div>
                <div className="text-xs font-medium text-foreground group-hover:text-primary">{s.label}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{s.text}</div>
              </div>
            </button>
          ))}
          <button
            onClick={() => setVisible(false)}
            className="flex items-center justify-center gap-1 rounded-lg border border-dashed border-border p-2 text-[11px] text-muted-foreground hover:border-muted-foreground/30"
          >
            <X className="h-3 w-3" /> Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
