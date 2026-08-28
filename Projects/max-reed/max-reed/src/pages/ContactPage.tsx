import { ArrowUpRight } from "lucide-react";

export function ContactPage() {
  return (
    <section className="border-t border-white/10 px-4 py-20 md:px-14">
      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-card p-8">
        <h2 className="text-3xl font-normal tracking-tight">Reach me</h2>
        <p className="mt-4 text-sm text-white/60">hello@maxreed.studio · +44 20 7946 0958</p>
        <a
          href="mailto:hello@maxreed.studio"
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
        >
          Send an email
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
