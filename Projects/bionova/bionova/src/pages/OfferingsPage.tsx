import { PageIntro } from "../components/PageIntro";

const OFFERINGS = [
  {
    name: "Venture launch",
    detail: "90-day sprint from thesis to investor-ready deck and data room.",
  },
  {
    name: "Clinical design",
    detail: "Protocol optimization, endpoint selection, and CRO/vendor orchestration.",
  },
  {
    name: "BD & partnering",
    detail: "Target identification, diligence support, and deal structuring.",
  },
  {
    name: "Board advisory",
    detail: "Quarterly strategic reviews with operator-grade KPI frameworks.",
  },
];

export function OfferingsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Offerings"
        title="Engagements that match your stage"
        description="Modular advisory tracks—embed a partner team or retain specialists for milestone-based deliverables."
      />
      <section className="border-t border-foreground/10 px-5 py-16 lg:px-16">
        <ul className="mx-auto max-w-3xl divide-y divide-foreground/10">
          {OFFERINGS.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-lg font-semibold">{item.name}</span>
              <span className="max-w-md text-sm text-foreground/70">{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
