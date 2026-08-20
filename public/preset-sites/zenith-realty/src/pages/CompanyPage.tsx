import { PageShell } from "../components/PageShell";

export function CompanyPage() {
  return (
    <PageShell
      title="Company"
      subtitle="Zenith Realty connects discerning buyers with residences that balance craft, comfort, and investment discipline."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="bg-white p-8 md:p-12">
          <h2 className="text-xl font-medium text-[#141414]">Our approach</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#A5A5A5]">
            We pair local market intelligence with digital walk-throughs so every client can
            evaluate homes with clarity before stepping inside.
          </p>
        </div>
        <div className="bg-white p-8 md:p-12">
          <h2 className="text-xl font-medium text-[#141414]">Global reach</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[#A5A5A5]">
            From coastal California to mountain retreats and island sanctuaries, our advisors
            maintain vetted portfolios across premier destinations.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
