import { ResumeVariant } from "./types";

/**
 * MULTI-FORMAT RESUME EXPORT ENGINE
 *
 * Generates Markdown, Plain Text ATS format, JSON, and triggers browser PDF printing / direct downloads.
 */

export function exportToMarkdown(resume: ResumeVariant): string {
  let md = `# VISHWAJEET\n`;
  md += `**Target Role**: ${resume.targetRole} | **Version**: ${resume.version} | **ATS Match**: ${resume.atsScore}%\n`;
  md += `Bengaluru, Karnataka, India | +91 85952 02922 | vishwajeetsrk@gmail.com\n`;
  md += `LinkedIn: [Vishwajeetsrk](https://linkedin.com/in/vishwajeetsrk) | GitHub: [Vishwajeetsrk](https://github.com/Vishwajeetsrk) | Portfolio: [learnifyai.in](https://learnifyai.in)\n\n`;
  md += `## PROFESSIONAL SUMMARY\n${resume.summary}\n\n`;

  resume.sections.forEach((sec) => {
    md += `## ${sec.title.toUpperCase()}\n`;
    if (sec.bullets) {
      sec.bullets.forEach((b) => {
        md += `- ${b.text}\n`;
      });
      md += `\n`;
    }
    if (sec.items) {
      sec.items.forEach((item) => {
        md += `### ${item.title}${item.subtitle ? ` — *${item.subtitle}*` : ""}\n`;
        if (item.dateRange) md += `*${item.dateRange}${item.location ? ` | ${item.location}` : ""}*\n`;
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
  let txt = `VISHWAJEET\n${resume.targetRole.toUpperCase()}\n`;
  txt += `Bengaluru, Karnataka, India | +91 85952 02922 | vishwajeetsrk@gmail.com\n`;
  txt += `LinkedIn: linkedin.com/in/vishwajeetsrk | GitHub: github.com/Vishwajeetsrk | Portfolio: learnifyai.in\n\n`;
  txt += `PROFESSIONAL SUMMARY\n${resume.summary}\n\n`;

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
        txt += `${item.title} | ${item.subtitle || ""} | ${item.dateRange || ""}${item.location ? ` | ${item.location}` : ""}\n`;
        item.bullets.forEach((b) => {
          txt += `* ${b.text}\n`;
        });
        txt += `\n`;
      });
    }
  });

  return txt;
}

export function downloadFile(filename: string, content: string, mimeType = "text/plain"): void {
  if (typeof window === "undefined") return;
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadMarkdownResume(resume: ResumeVariant): void {
  const content = exportToMarkdown(resume);
  const slug = resume.slug || "vishwajeet-resume";
  downloadFile(`${slug}.md`, content, "text/markdown;charset=utf-8;");
}

export function downloadPlainTextResume(resume: ResumeVariant): void {
  const content = exportToPlainTextATS(resume);
  const slug = resume.slug || "vishwajeet-resume";
  downloadFile(`${slug}-ats.txt`, content, "text/plain;charset=utf-8;");
}

export function downloadJsonResume(resume: ResumeVariant): void {
  const content = JSON.stringify(resume, null, 2);
  const slug = resume.slug || "vishwajeet-resume";
  downloadFile(`${slug}.json`, content, "application/json;charset=utf-8;");
}

export function triggerPrintPDF(): void {
  if (typeof window !== "undefined") {
    window.print();
  }
}
