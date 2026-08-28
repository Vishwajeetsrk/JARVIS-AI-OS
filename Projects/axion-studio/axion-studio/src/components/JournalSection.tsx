import { JOURNAL_ENTRIES } from "../constants";

export function JournalSection() {
  return (
    <section className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
            3
          </span>
          <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Journal
          </span>
        </div>
        <h1 className="text-[clamp(1.75rem,5vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
          Essays on brand systems
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-700">
          Notes from the studio on WebGL craft, category launches, and the partners we admire.
        </p>
        <ul className="mt-12 flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry) => (
            <li
              key={entry.title}
              className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-[#FAFAFA] px-5 py-5 transition-colors hover:border-gray-300 sm:flex-row sm:items-center sm:justify-between sm:px-6"
            >
              <div>
                <h2 className="text-base font-semibold text-gray-900 sm:text-lg">{entry.title}</h2>
                <p className="mt-1 text-[13px] text-gray-600">
                  {entry.date} · {entry.readTime}
                </p>
              </div>
              <span className="text-[13px] font-medium text-[#F26522]">Read essay →</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
