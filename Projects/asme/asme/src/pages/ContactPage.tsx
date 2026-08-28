import { ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";

export function ContactPage() {
  return (
    <PageShell title="Contact" eyebrow="Reach us">
      <p>hello@asme.studio — partnerships, press, and studio inquiries.</p>
      <form className="mt-8 flex max-w-xl flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="liquid-glass rounded-full border-none bg-transparent px-6 py-3 text-base text-white placeholder:text-white/40 outline-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="liquid-glass rounded-full border-none bg-transparent px-6 py-3 text-base text-white placeholder:text-white/40 outline-none"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="How can we help?"
          className="liquid-glass rounded-3xl border-none bg-transparent px-6 py-4 text-base text-white placeholder:text-white/40 outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
        >
          Send message
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </PageShell>
  );
}
