const PRINCIPLES = [
  "Strategy before pixels—we map category ambition before opening Figma.",
  "WebGL when it earns attention, restraint when clarity converts faster.",
  "Case studies as proof: Narrativ and Luminar set the bar for every engagement.",
] as const;

export function AboutPage() {
  return (
    <section className="scroll-mt-24 bg-[#EFEFEF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
            4
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            About Axion
          </span>
        </div>
        <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
          Axion Studio
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-700 sm:text-base">
          A London-rooted design agency pairing shader-driven hero craft with category-defining case
          studies for B2B brands ready to dominate online.
        </p>
        <ul className="mt-10 max-w-2xl space-y-4">
          {PRINCIPLES.map((line) => (
            <li key={line} className="flex gap-3 text-[15px] leading-relaxed text-gray-800">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F26522]" aria-hidden />
              {line}
            </li>
          ))}
        </ul>
        <dl className="mt-14 grid gap-8 sm:grid-cols-3">
          <div>
            <dt className="text-[13px] text-gray-600">Founded</dt>
            <dd className="mt-1 text-lg font-medium text-gray-900">2019</dd>
          </div>
          <div>
            <dt className="text-[13px] text-gray-600">Team</dt>
            <dd className="mt-1 text-lg font-medium text-gray-900">14 creatives</dd>
          </div>
          <div>
            <dt className="text-[13px] text-gray-600">Focus</dt>
            <dd className="mt-1 text-lg font-medium text-gray-900">B2B &amp; category launches</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
