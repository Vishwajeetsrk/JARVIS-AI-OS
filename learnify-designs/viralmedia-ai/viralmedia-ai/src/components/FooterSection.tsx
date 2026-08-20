import { handlePresetNavClick, sectionHref } from "../../../_shared/preset-site-routing";

const SERVICES = ["Brand Design", "AI Web Design", "AI Web Development", "Optimization"];
const COMPANY = ["About", "Work", "Blog", "Careers"];
const CONNECT = ["Twitter", "LinkedIn", "Instagram", "Dribbble"];

export function FooterSection() {
  return (
    <footer id="footer" className="scroll-mt-24 border-t border-border bg-background px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="text-xl font-semibold tracking-tight text-foreground mb-3">VIRALMEDIA</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered web design agency crafting digital experiences that convert.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-4">Services</p>
            <ul className="space-y-2">
              {SERVICES.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-4">Company</p>
            <ul className="space-y-2">
              {COMPANY.map((item) => {
                const section = item === "Work" ? "work" : item === "About" ? "about" : "footer";
                return (
                  <li key={item}>
                    <a
                      href={sectionHref(section)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => handlePresetNavClick(e, section, true)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground mb-4">Connect</p>
            <ul className="space-y-2">
              {CONNECT.map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 VIRALMEDIA. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
