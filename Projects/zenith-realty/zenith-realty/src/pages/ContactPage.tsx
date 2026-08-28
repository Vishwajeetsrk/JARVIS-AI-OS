import { PageShell } from "../components/PageShell";

export function ContactPage() {
  return (
    <PageShell
      title="Book a call"
      subtitle="Share your goals and we will match you with an advisor and curated listings."
    >
      <form className="max-w-xl space-y-6 bg-white p-8 md:p-12">
        <label className="block">
          <span className="text-[13px] font-medium text-[#141414]">Full name</span>
          <input
            type="text"
            className="mt-2 w-full border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-[#141414]">Email</span>
          <input
            type="email"
            className="mt-2 w-full border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30"
            placeholder="you@email.com"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-medium text-[#141414]">Message</span>
          <textarea
            rows={4}
            className="mt-2 w-full resize-none border border-black/10 bg-[#F8F8F8] px-4 py-3 text-[14px] outline-none focus:border-black/30"
            placeholder="Tell us about the property you are seeking"
          />
        </label>
        <button
          type="button"
          className="bg-[#141414] px-9 py-4 text-[13px] font-medium uppercase tracking-wider text-white shadow-2xl"
        >
          Book a call
        </button>
      </form>
    </PageShell>
  );
}
