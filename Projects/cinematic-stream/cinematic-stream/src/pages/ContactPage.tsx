import { PresetNavLink } from "../../../_shared/components/PresetNavLink";
import { StreamPageShell } from "../components/StreamPageShell";

export function ContactPage() {
  return (
    <StreamPageShell
      eyebrow="Studio"
      title="Contact"
      description="Press, licensing, and partnership inquiries for the Framecast catalog."
    >
      <div className="liquid-glass max-w-xl rounded-2xl p-6 md:p-8">
        <p className="text-sm text-gray-400">General inquiries</p>
        <a
          href="mailto:studios@framecast.example"
          className="mt-2 block text-lg font-medium text-white hover:text-gray-200"
        >
          studios@framecast.example
        </a>
        <p className="mt-6 text-sm text-gray-400">Member support</p>
        <a
          href="mailto:support@framecast.example"
          className="mt-2 block text-lg font-medium text-white hover:text-gray-200"
        >
          support@framecast.example
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <PresetNavLink
            target={{ kind: "route", path: "" }}
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Back to feature
          </PresetNavLink>
          <PresetNavLink
            target={{ kind: "route", path: "movies" }}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm font-medium"
          >
            Browse movies
          </PresetNavLink>
        </div>
      </div>
    </StreamPageShell>
  );
}
