/**
 * DOCX Creator Tool — Deep Research & Technical PRD Word Document Generator.
 *
 * Supports:
 * - Formal PRD Metadata Header & Cover Block
 * - Executive Callout Boxes with Accent Borders
 * - Formatted Multi-Column Tables (EARS requirements, Risk Matrices, Specs)
 * - Deep Research Sections with Fact & Citation Labeling
 * - Header/Footer Page Numbering
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  TableRow,
  TableCell,
  Table,
  WidthType,
  BorderStyle,
  Header,
  Footer,
  PageNumber,
  ShadingType,
} from "docx";
import fileSaver from "file-saver";

const saveAs = (fileSaver as any).saveAs ?? fileSaver;

export interface DocxSection {
  /** Section type */
  type: "heading" | "paragraph" | "callout" | "list" | "table" | "pageBreak" | "metaHeader";
  /** Text content */
  text?: string;
  /** Heading level (1-4) */
  level?: number;
  /** Bold formatting */
  bold?: boolean;
  /** Italic formatting */
  italic?: boolean;
  /** Font color (hex without #) */
  color?: string;
  /** List items */
  items?: string[];
  /** Table header columns */
  headerRow?: string[];
  /** Table data rows */
  rows?: string[][];
  /** Callout subtitle / tag */
  calloutTag?: string;
  /** Meta block fields (e.g., { Version: "1.0", Author: "Vishwajeet", Status: "Approved" }) */
  metaFields?: Record<string, string>;
}

export interface DocxOptions {
  /** Document title */
  title: string;
  /** Document subtitle */
  subtitle?: string;
  /** Document author */
  author?: string;
  /** Organization */
  company?: string;
  /** Document sections */
  sections: DocxSection[];
}

const BRAND_PRIMARY = "0F172A"; // Slate 900
const BRAND_ACCENT = "0284C7"; // Sky 600
const TEXT_MUTED = "64748B"; // Slate 500
const BG_ALT = "F8FAFC"; // Slate 50
const BORDER_LIGHT = "CBD5E1"; // Slate 300

export async function createDocx(options: DocxOptions): Promise<Document> {
  const children: (Paragraph | Table)[] = [];

  for (const s of options.sections) {
    // 1. Meta Header / PRD Cover Box
    if (s.type === "metaHeader") {
      children.push(
        new Paragraph({
          text: (s.calloutTag || "TECHNICAL PRODUCT REQUIREMENTS DOCUMENT").toUpperCase(),
          style: "Normal",
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: (s.calloutTag || "TECHNICAL PRODUCT REQUIREMENTS DOCUMENT").toUpperCase(),
              bold: true,
              size: 20,
              color: BRAND_ACCENT,
            }),
          ],
        }),
        new Paragraph({
          text: s.text || options.title,
          heading: HeadingLevel.TITLE,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: s.text || options.title,
              bold: true,
              size: 48,
              color: BRAND_PRIMARY,
            }),
          ],
        })
      );

      if (options.subtitle) {
        children.push(
          new Paragraph({
            text: options.subtitle,
            spacing: { after: 300 },
            children: [
              new TextRun({
                text: options.subtitle,
                size: 24,
                italics: true,
                color: TEXT_MUTED,
              }),
            ],
          })
        );
      }

      if (s.metaFields) {
        const metaRows: TableRow[] = [];
        const entries = Object.entries(s.metaFields);

        for (let i = 0; i < entries.length; i += 2) {
          const [k1, v1] = entries[i];
          const [k2, v2] = entries[i + 1] || ["", ""];

          metaRows.push(
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  children: [new Paragraph({ children: [new TextRun({ text: k1, bold: true, size: 18, color: TEXT_MUTED })] })],
                  shading: { type: ShadingType.CLEAR, fill: BG_ALT },
                }),
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  children: [new Paragraph({ children: [new TextRun({ text: v1, size: 18, bold: true, color: BRAND_PRIMARY })] })],
                }),
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  children: [new Paragraph({ children: [new TextRun({ text: k2, bold: true, size: 18, color: TEXT_MUTED })] })],
                  shading: { type: ShadingType.CLEAR, fill: BG_ALT },
                }),
                new TableCell({
                  width: { size: 25, type: WidthType.PERCENTAGE },
                  children: [new Paragraph({ children: [new TextRun({ text: v2, size: 18, bold: true, color: BRAND_PRIMARY })] })],
                }),
              ],
            })
          );
        }

        children.push(
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: metaRows,
          }),
          new Paragraph({ text: "", spacing: { after: 300 } })
        );
      }
    }

    // 2. Headings
    else if (s.type === "heading") {
      const level = s.level || 1;
      const headingLevel =
        level === 1
          ? HeadingLevel.HEADING_1
          : level === 2
          ? HeadingLevel.HEADING_2
          : level === 3
          ? HeadingLevel.HEADING_3
          : HeadingLevel.HEADING_4;

      const size = level === 1 ? 32 : level === 2 ? 26 : 22;
      const color = level === 1 ? BRAND_PRIMARY : BRAND_ACCENT;

      children.push(
        new Paragraph({
          text: s.text,
          heading: headingLevel,
          spacing: { before: level === 1 ? 360 : 240, after: 120 },
          children: [
            new TextRun({
              text: s.text,
              bold: true,
              size,
              color,
            }),
          ],
        })
      );
    }

    // 3. Callout Box (Quote / Alert)
    else if (s.type === "callout") {
      children.push(
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 100, type: WidthType.PERCENTAGE },
                  shading: { type: ShadingType.CLEAR, fill: BG_ALT },
                  borders: {
                    left: { style: BorderStyle.SINGLE, size: 24, color: BRAND_ACCENT },
                    top: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                  },
                  children: [
                    new Paragraph({
                      spacing: { before: 120, after: 120 },
                      children: [
                        new TextRun({
                          text: s.calloutTag ? `[${s.calloutTag}] ` : "",
                          bold: true,
                          color: BRAND_ACCENT,
                          size: 20,
                        }),
                        new TextRun({
                          text: s.text || "",
                          italics: true,
                          size: 20,
                          color: BRAND_PRIMARY,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new Paragraph({ text: "", spacing: { after: 180 } })
      );
    }

    // 4. Formatted Table (EARS requirements, Risk Matrices, Specs)
    else if (s.type === "table" && (s.headerRow || s.rows)) {
      const tableRows: TableRow[] = [];

      // Header row
      if (s.headerRow) {
        tableRows.push(
          new TableRow({
            tableHeader: true,
            children: s.headerRow.map(
              (h) =>
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: BRAND_PRIMARY },
                  children: [
                    new Paragraph({
                      spacing: { before: 100, after: 100 },
                      children: [
                        new TextRun({
                          text: h,
                          bold: true,
                          color: "FFFFFF",
                          size: 19,
                        }),
                      ],
                    }),
                  ],
                })
            ),
          })
        );
      }

      // Data rows
      if (s.rows) {
        s.rows.forEach((row, rIdx) => {
          const isAlt = rIdx % 2 === 1;
          tableRows.push(
            new TableRow({
              children: row.map(
                (cell) =>
                  new TableCell({
                    shading: isAlt ? { type: ShadingType.CLEAR, fill: BG_ALT } : undefined,
                    children: [
                      new Paragraph({
                        spacing: { before: 80, after: 80 },
                        children: [new TextRun({ text: cell, size: 18, color: BRAND_PRIMARY })],
                      }),
                    ],
                  })
              ),
            })
          );
        });
      }

      children.push(
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: tableRows,
        }),
        new Paragraph({ text: "", spacing: { after: 200 } })
      );
    }

    // 5. Bullet List
    else if (s.type === "list" && s.items) {
      s.items.forEach((item) => {
        children.push(
          new Paragraph({
            bullet: { level: 0 },
            spacing: { before: 60, after: 60 },
            children: [new TextRun({ text: item, size: 20, color: BRAND_PRIMARY })],
          })
        );
      });
      children.push(new Paragraph({ text: "", spacing: { after: 120 } }));
    }

    // 6. Standard Paragraph
    else if (s.type === "paragraph") {
      children.push(
        new Paragraph({
          spacing: { before: 80, after: 120 },
          children: [
            new TextRun({
              text: s.text || "",
              bold: s.bold,
              italics: s.italic,
              size: 20,
              color: s.color || BRAND_PRIMARY,
            }),
          ],
        })
      );
    }

    // 7. Page Break
    else if (s.type === "pageBreak") {
      children.push(new Paragraph({ pageBreakBefore: true }));
    }
  }

  const doc = new Document({
    creator: options.author || "JARVIS AI OS",
    title: options.title,
    description: options.subtitle || "Generated with Jarvis PRD Engine",
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: options.title,
                    size: 16,
                    color: TEXT_MUTED,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({ text: "Page ", size: 16, color: TEXT_MUTED }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 16,
                    color: TEXT_MUTED,
                  }),
                  new TextRun({ text: " of ", size: 16, color: TEXT_MUTED }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                    size: 16,
                    color: TEXT_MUTED,
                  }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });

  return doc;
}

export async function downloadDocx(options: DocxOptions): Promise<void> {
  const doc = await createDocx(options);
  const blob = await Packer.toBlob(doc);
  const filename = `${options.title.replace(/[^a-z0-9_-]/gi, "_")}.docx`;
  saveAs(blob, filename);
}
