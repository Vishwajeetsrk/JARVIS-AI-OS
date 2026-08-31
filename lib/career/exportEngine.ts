import { ResumeVariant } from "./types";

/**
 * MULTI-FORMAT RESUME EXPORT ENGINE
 *
 * Generates:
 * 1. Microsoft Word (.doc / .docx compatible)
 * 2. Markdown (.md)
 * 3. Plain Text ATS (.txt)
 * 4. Structured JSON (.json)
 * 5. Clean PDF Print
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

export function exportToWordDoc(resume: ResumeVariant): string {
  let html = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${resume.title}</title>
<style>
  @page {
    size: 8.5in 11in;
    margin: 0.5in 0.5in 0.5in 0.5in;
    mso-header-margin: 0.3in;
    mso-footer-margin: 0.3in;
  }
  body {
    font-family: 'Calibri', 'Arial', sans-serif;
    font-size: 10.5pt;
    line-height: 1.35;
    color: #111827;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 20pt;
    font-weight: bold;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    margin: 0 0 2pt 0;
  }
  .role-title {
    font-size: 11pt;
    font-weight: bold;
    color: #1f2937;
    margin: 0 0 4pt 0;
  }
  .contact-info {
    font-size: 9.5pt;
    color: #4b5563;
    margin-bottom: 10pt;
    border-bottom: 2pt solid #000000;
    padding-bottom: 6pt;
  }
  h2 {
    font-size: 11pt;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #000000;
    border-bottom: 1pt solid #cccccc;
    padding-bottom: 2pt;
    margin: 10pt 0 4pt 0;
  }
  .summary-text {
    font-size: 10pt;
    line-height: 1.4;
    color: #374151;
    margin-bottom: 8pt;
  }
  ul {
    margin: 2pt 0 6pt 16pt;
    padding: 0;
  }
  li {
    font-size: 9.5pt;
    line-height: 1.35;
    color: #374151;
    margin-bottom: 3pt;
  }
  .item-header {
    font-size: 10.5pt;
    font-weight: bold;
    color: #111827;
    margin-top: 6pt;
    margin-bottom: 2pt;
  }
  .item-date {
    float: right;
    font-size: 9.5pt;
    font-weight: normal;
    color: #6b7280;
  }
  .item-subtitle {
    font-size: 9.5pt;
    font-style: italic;
    color: #4b5563;
    margin-bottom: 2pt;
  }
</style>
</head>
<body>
  <h1>VISHWAJEET</h1>
  <div class="role-title">${resume.targetRole}</div>
  <div class="contact-info">
    Bengaluru, Karnataka, India | +91 85952 02922 | vishwajeetsrk@gmail.com<br/>
    LinkedIn: linkedin.com/in/vishwajeetsrk | GitHub: github.com/Vishwajeetsrk | Portfolio: learnifyai.in
  </div>

  <h2>Professional Summary</h2>
  <p class="summary-text">${resume.summary}</p>
`;

  resume.sections.forEach((sec) => {
    html += `  <h2>${sec.title.toUpperCase()}</h2>\n`;
    if (sec.bullets) {
      html += `  <ul>\n`;
      sec.bullets.forEach((b) => {
        html += `    <li>${b.text}</li>\n`;
      });
      html += `  </ul>\n`;
    }
    if (sec.items) {
      sec.items.forEach((item) => {
        html += `  <div class="item-header">\n`;
        if (item.dateRange) {
          html += `    <span class="item-date">${item.dateRange}${item.location ? ` | ${item.location}` : ""}</span>\n`;
        }
        html += `    <span>${item.title}</span>\n`;
        html += `  </div>\n`;
        if (item.subtitle) {
          html += `  <div class="item-subtitle">${item.subtitle}</div>\n`;
        }
        if (item.bullets) {
          html += `  <ul>\n`;
          item.bullets.forEach((b) => {
            html += `    <li>${b.text}</li>\n`;
          });
          html += `  </ul>\n`;
        }
      });
    }
  });

  html += `</body>\n</html>`;
  return html;
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

export function downloadWordResume(resume: ResumeVariant): void {
  const content = exportToWordDoc(resume);
  const slug = resume.slug || "vishwajeet-resume";
  downloadFile(`${slug}.doc`, content, "application/msword;charset=utf-8;");
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
