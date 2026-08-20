import InnerPageLayout from "../components/InnerPageLayout";

export default function ContactPage() {
  return (
    <InnerPageLayout
      eyebrow="Contact"
      title="Get started"
      description="Tell us about your operations stack—we onboard design partners in rolling cohorts."
    >
      <form
        id="contact"
        data-draftly-section-id="contact"
        className="max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block text-sm font-medium">
          Work email
          <input
            type="email"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF0000]/50"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm font-medium">
          Company
          <input
            type="text"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF0000]/50"
            placeholder="Your team"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
        >
          Request access
        </button>
      </form>
    </InnerPageLayout>
  );
}
