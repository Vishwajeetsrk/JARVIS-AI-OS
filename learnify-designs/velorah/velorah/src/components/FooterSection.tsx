import { FOOTER_LINKS } from "../constants";
import { BrandMark } from "./BrandMark";

export function FooterSection() {
  return (
    <footer id="footer" className="border-t border-border bg-[hsl(0,0%,0%)] px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3
              className="font-heading text-2xl leading-tight text-foreground sm:text-3xl"
              data-editable
            >
              Where home
              <br />
              meets the road.
            </h3>
          </div>
          <ul className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="text-sm capitalize text-muted-foreground transition-colors hover:text-foreground"
                  data-editable
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-4 text-sm text-muted-foreground" data-editable>
              Subscribe for the latest
              <br />
              Velorah updates.
            </p>
            <button
              type="button"
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
              data-editable
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <BrandMark size="footer" />
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-foreground" data-editable>
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-foreground" data-editable>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
