import { ResumeVariant } from "./types";

/**
 * MULTI-FORMAT RESUME EXPORT ENGINE
 *
 * Generates Markdown, Plain Text ATS format, and handles browser PDF printing.
 */

export function exportToMarkdown(resume: ResumeVariant): string {
  let md = `# ${resume.title}\n\n`;
  md += `**Target Role**: ${resume.targetRole} | **Version**: ${resume.version} | **ATS Score**: ${resume.atsScore}%\n\n`;
  md += `## Professional Summary\n${resume.summary}\n\n`;

  resume.sections.forEach((sec) => {
    md += `## ${sec.title}\n`;
    if (sec.bullets) {
      sec.bullets.forEach((b) => {
        md += `- ${b.text}\n`;
      });
      md += `\n`;
    }
    if (sec.items) {
      sec.items.forEach((item) => {
        md += `### ${item.title}${item.subtitle ? ` — *${item.subtitle}*` : ""}\n`;
        if (item.dateRange) md += `*${item.dateRange}*\n`;
        if (item.github) md += `GitHub: ${item.github}\n`;
        if (item.link) md += `Live: ${item.link}\n`;
        item.bullets.forEach((b) => {
          md += `- ${b.text}\n`;
        });
        md += `\n`;
      });
    }
  });

  return md;
}

export function exportToPlainTextATS(resume: ResumeVariant): string {
  let txt = `VISHWAJEET\n${resume.targetRole.toUpperCase()}\nBengaluru, India | github.com/Vishwajeetsrk | learnifyai.in\n\n`;
  txt += `SUMMARY\n${resume.summary}\n\n`;

  resume.sections.forEach((sec) => {
    txt += `${sec.title.toUpperCase()}\n`;
    if (sec.bullets) {
      sec.bullets.forEach((b) => {
        txt += `* ${b.text}\n`;
      });
      txt += `\n`;
    }
    if (sec.items) {
      sec.items.forEach((item) => {
        txt += `${item.title} | ${item.subtitle || ""} | ${item.dateRange || ""}\n`;
        item.bullets.forEach((b) => {
          txt += `* ${b.text}\n`;
        });
        txt += `\n`;
      });
    }
  });

  return txt;
}

export function triggerPrintPDF(): void {
  if (typeof window !== "undefined") {
    window.print();
  }
}
