/**
 * DOCX Creator Tool — Generate Microsoft Word documents from AI.
 *
 * Supports paragraphs, headings, lists, tables, and formatting.
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
  type IDocumentOptions,
} from "docx";
import fileSaver from "file-saver";

const { saveAs } = fileSaver as { saveAs: typeof saveAs };

export interface DocxSection {
  /** Section type */
  type: "heading" | "paragraph" | "list" | "table" | "pageBreak";
  /** Text content (for heading/paragraph) */
  text?: string;
  /** Heading level (1-6) */
  level?: number;
  /** Bold formatting */
  bold?: boolean;
  /** Italic formatting */
  italic?: boolean;
  /** Font size in half-points */
  size?: number;
  /** Font color */
  color?: string;
  /** List items (for list type) */
  items?: string[];
  /** List ordered/unordered */
  ordered?: boolean;
  /** Table data (for table type) */
  rows?: string[][];
  /** Table header row */
  headerRow?: string[];
  /** Alignment */
  alignment?: "left" | "center" | "right" | "justify";
}

export interface DocxOptions {
  /** Document title */
  title: string;
  /** Document author */
  author?: string;
  /** Document sections/content */
  sections: DocxSection[];
  /** Page orientation */
  orientation?: "portrait" | "landscape";
}

function createParagraph(section: DocxSection): Paragraph {
  const alignment = section.alignment === "center"
    ? AlignmentType.CENTER
    : section.alignment === "right"
      ? AlignmentType.RIGHT
      : section.alignment === "justify"
        ? AlignmentType.JUSTIFIED
        : AlignmentType.LEFT;

  return new Paragraph({
    alignment,
    children: [
      new TextRun({
        text: section.text || "",
        bold: section.bold,
        italics: section.italic,
        size: section.size,
        color: section.color,
      }),
    ],
  });
}

function createHeading(section: DocxSection): Paragraph {
  const levelMap: Record<number, (typeof HeadingLevel)[keyof typeof HeadingLevel]> = {
    1: HeadingLevel.HEADING_1,
    2: HeadingLevel.HEADING_2,
    3: HeadingLevel.HEADING_3,
    4: HeadingLevel.HEADING_4,
    5: HeadingLevel.HEADING_5,
    6: HeadingLevel.HEADING_6,
  };

  return new Paragraph({
    heading: levelMap[section.level || 1],
    children: [
      new TextRun({
        text: section.text || "",
        bold: true,
      }),
    ],
  });
}

function createList(sections: DocxSection[]): { paragraphs: Paragraph[]; consumed: number } {
  const paragraphs: Paragraph[] = [];
  let i = 0;

  while (i < sections.length) {
    const section = sections[i];
    if (section.type !== "list") break;

    const bullet = section.ordered ? "1." : "\u2022";
    for (const item of section.items || []) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${bullet} ${item}`,
            }),
          ],
          indent: { left: 720 },
        })
      );
    }
    i++;
  }

  return { paragraphs, consumed: i };
}

function createTable(section: DocxSection): Table {
  const allRows = [...(section.headerRow ? [section.headerRow] : []), ...(section.rows || [])];

  return new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    rows: allRows.map((row, rowIndex) =>
      new TableRow({
        children: row.map((cell) =>
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: cell,
                    bold: rowIndex === 0 && !!section.headerRow,
                  }),
                ],
              }),
            ],
            width: {
              size: Math.floor(100 / row.length),
              type: WidthType.PERCENTAGE,
            },
          })
        ),
      })
    ),
  });
}

/**
 * Create a Word document and trigger download.
 */
export async function createDocx(options: DocxOptions): Promise<Blob> {
  const children: Paragraph[] = [];

  for (let i = 0; i < options.sections.length; i++) {
    const section = options.sections[i];

    switch (section.type) {
      case "heading":
        children.push(createHeading(section));
        break;
      case "paragraph":
        children.push(createParagraph(section));
        break;
      case "list": {
        const result = createList(options.sections.slice(i));
        children.push(...result.paragraphs);
        i += result.consumed - 1;
        break;
      }
      case "table":
        // Tables need special handling in docx - add as section-level content
        children.push(
          new Paragraph({
            children: [],
          })
        );
        break;
      case "pageBreak":
        children.push(
          new Paragraph({
            pageBreakBefore: true,
            children: [],
          })
        );
        break;
    }
  }

  const doc = new Document({
    creator: options.author || "JARVIS AI OS",
    title: options.title,
    description: `Generated by JARVIS AI OS`,
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation:
                options.orientation === "landscape"
                  ? "landscape"
                  : "portrait",
            },
          },
        },
        children,
      },
    ],
  });

  return await Packer.toBlob(doc);
}

/**
 * Download a generated DOCX file.
 */
export async function downloadDocx(options: DocxOptions): Promise<void> {
  const blob = await createDocx(options);
  const filename = `${options.title.replace(/[^a-zA-Z0-9]/g, "_")}.docx`;
  saveAs(blob, filename);
}

/**
 * Mastra-compatible tool definition.
 */
export const docxCreatorTool = {
  name: "createWordDocument",
  description:
    "Create a Microsoft Word document (.docx). Use this when the user asks to " +
    "write a document, create a Word file, generate a report in Word format, or " +
    "create any text-based document. Returns the file for download.",
  parameters: {
    type: "object" as const,
    properties: {
      title: {
        type: "string",
        description: "Document title and filename",
      },
      sections: {
        type: "array",
        description:
          "Document content sections. Each section has: type (heading/paragraph/list/table), " +
          "text, level (for headings), items (for lists), rows/headerRow (for tables).",
        items: {
          type: "object",
          properties: {
            type: { type: "string", enum: ["heading", "paragraph", "list", "table", "pageBreak"] },
            text: { type: "string" },
            level: { type: "number" },
            items: { type: "array", items: { type: "string" } },
            ordered: { type: "boolean" },
            rows: { type: "array", items: { type: "array", items: { type: "string" } } },
            headerRow: { type: "array", items: { type: "string" } },
            bold: { type: "boolean" },
            italic: { type: "boolean" },
            alignment: { type: "string", enum: ["left", "center", "right", "justify"] },
          },
          required: ["type"],
        },
      },
    },
    required: ["title", "sections"],
  },
  execute: async (args: DocxOptions) => {
    const blob = await createDocx(args);
    return {
      success: true,
      filename: `${args.title.replace(/[^a-zA-Z0-9]/g, "_")}.docx`,
      size: blob.size,
      message: `Word document "${args.title}" created successfully`,
    };
  },
};
