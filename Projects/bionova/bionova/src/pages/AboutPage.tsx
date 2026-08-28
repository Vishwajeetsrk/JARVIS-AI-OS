import { PageIntro } from "../components/PageIntro";

const PILLARS = [
  {
    title: "Strategy",
    body: "Therapeutic focus, indication sequencing, and competitive positioning.",
  },
  {
    title: "Regulatory",
    body: "IND/CTA pathways, FDA meeting prep, and global filing coordination.",
  },
  { title: "Capital", body: "Data-room narrative, investor targeting, and term-sheet support." },
];

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About BIONOVA"
        title="Consultants built for biotech velocity"
        description="We are a boutique advisory collective of former operators, scientists, and investors who have launched, funded, and scaled bioventures from seed through IPO."
      />
      <section className="border-t border-foreground/10 px-5 py-16 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PILLARS.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-foreground/10 p-6 lg:rounded-[2rem]"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
