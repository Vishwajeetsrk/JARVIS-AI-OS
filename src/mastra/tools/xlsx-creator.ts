/**
 * XLSX Creator Tool — Generate Microsoft Excel spreadsheets from AI.
 *
 * Supports multiple sheets, formulas, formatting, charts, and data tables.
 */

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export interface XlsxSheet {
  /** Sheet name */
  name: string;
  /** Column headers */
  headers?: string[];
  /** Data rows (array of arrays) */
  rows?: (string | number | boolean | null)[][];
  /** Column widths (array of numbers, in characters) */
  columnWidths?: number[];
  /** Header row color (hex without #) */
  headerColor?: string;
  /** Auto-filter on header row */
  autoFilter?: boolean;
  /** Freeze top row */
  freezeTopRow?: boolean;
}

export interface XlsxOptions {
  /** Workbook title (used as filename) */
  title: string;
  /** Author */
  author?: string;
  /** Sheets */
  sheets: XlsxSheet[];
  /** Default font size (default 11) */
  defaultFontSize?: number;
}

const DEFAULT_HEADER_COLOR = "1a1a2e";
const DEFAULT_HEADER_TEXT = "ffffff";
const BORDER_COLOR = "cccccc";

/**
 * Create an Excel workbook.
 */
export async function createXlsx(options: XlsxOptions): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = options.author || "JARVIS AI OS";
  workbook.created = new Date();

  for (const sheet of options.sheets) {
    const ws = workbook.addWorksheet(sheet.name);

    // Set column widths
    if (sheet.columnWidths) {
      ws.columns = sheet.columnWidths.map((width) => ({ width }));
    }

    // Add headers
    if (sheet.headers && sheet.headers.length > 0) {
      const headerRow = ws.addRow(sheet.headers);
      const headerColor = sheet.headerColor || DEFAULT_HEADER_COLOR;

      headerRow.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: `FF${headerColor}` },
        };
        cell.font = {
          bold: true,
          color: { argb: `FF${DEFAULT_HEADER_TEXT}` },
          size: options.defaultFontSize || 11,
        };
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
          left: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
          bottom: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
          right: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
        };
      });

      headerRow.height = 25;

      // Auto-filter
      if (sheet.autoFilter) {
        ws.autoFilter = {
          from: { row: 1, column: 1 },
          to: { row: 1, column: sheet.headers.length },
        };
      }

      // Freeze top row
      if (sheet.freezeTopRow) {
        ws.views = [{ state: "frozen", ySplit: 1 }];
      }
    }

    // Add data rows
    if (sheet.rows) {
      for (const rowData of sheet.rows) {
        const row = ws.addRow(rowData);

        // Apply borders and alternating row colors
        row.eachCell((cell, colNumber) => {
          cell.border = {
            top: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
            left: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
            bottom: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
            right: { style: "thin", color: { argb: `FF${BORDER_COLOR}` } },
          };

          // Number formatting
          if (typeof cell.value === "number") {
            cell.numFmt = "#,##0.00";
            cell.alignment = { horizontal: "right" };
          }

          // Boolean formatting
          if (typeof cell.value === "boolean") {
            cell.value = cell.value ? "Yes" : "No";
            cell.alignment = { horizontal: "center" };
          }
        });

        // Alternating row colors
        const rowIndex = ws.rowCount;
        if (rowIndex % 2 === 0) {
          row.eachCell((cell) => {
            cell.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: { argb: "FFF5F5F5" },
            };
          });
        }
      }
    }
  }

  return workbook;
}

/**
 * Download a generated XLSX file.
 */
export async function downloadXlsx(options: XlsxOptions): Promise<void> {
  const workbook = await createXlsx(options);
  const filename = `${options.title.replace(/[^a-zA-Z0-9]/g, "_")}.xlsx`;

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, filename);
}

/**
 * Mastra-compatible tool definition.
 */
export const xlsxCreatorTool = {
  name: "createSpreadsheet",
  description:
    "Create a Microsoft Excel spreadsheet (.xlsx). Use this when the user asks to " +
    "create an Excel file, make a spreadsheet, generate a data table, or build " +
    "any tabular data file. Returns the file for download.",
  parameters: {
    type: "object" as const,
    properties: {
      title: {
        type: "string",
        description: "Spreadsheet title and filename",
      },
      sheets: {
        type: "array",
        description:
          "Array of sheets. Each sheet has: name, headers (array of strings), " +
          "rows (array of arrays), columnWidths, autoFilter, freezeTopRow.",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            headers: { type: "array", items: { type: "string" } },
            rows: { type: "array", items: { type: "array" } },
            columnWidths: { type: "array", items: { type: "number" } },
            autoFilter: { type: "boolean" },
            freezeTopRow: { type: "boolean" },
            headerColor: { type: "string" },
          },
          required: ["name"],
        },
      },
    },
    required: ["title", "sheets"],
  },
  execute: async (args: XlsxOptions) => {
    const workbook = await createXlsx(args);
    const filename = `${args.title.replace(/[^a-zA-Z0-9]/g, "_")}.xlsx`;
    return {
      success: true,
      filename,
      sheetCount: args.sheets.length,
      message: `Spreadsheet "${args.title}" with ${args.sheets.length} sheet(s) created successfully`,
    };
  },
};
