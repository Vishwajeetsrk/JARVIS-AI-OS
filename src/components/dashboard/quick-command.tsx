import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { VoiceButton } from "@/components/dashboard/voice-button";
import { createThread } from "@/lib/threads.functions";

export function QuickCommand() {
  const navigate = useNavigate();
  const createFn = useServerFn(createThread);

  const start = useMutation({
    mutationFn: (text: string) => createFn({ data: { title: text.slice(0, 60) } }),
    onSuccess: (t, text) => {
      navigate({
        to: "/console/$threadId",
        params: { threadId: t.id },
        search: { seed: text },
      });
    },
  });

  const submit = async (msg: { text: string }) => {
    const text = msg.text.trim();
    if (!text || start.isPending) return;
    start.mutate(text);
  };

  return (
    <PromptInput onSubmit={submit}>
      <PromptInputTextarea placeholder="Tell Jarvis what to do — or press Talk and speak…" autoFocus />
      <PromptInputFooter>
        <PromptInputTools className="flex-wrap gap-1.5">
          <VoiceButton onTranscribed={(text) => text && start.mutate(text)} />
        </PromptInputTools>
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  );
}
