/**
 * XLSX Creator Tool — State-of-the-Art Excel Spreadsheet & Executive Dashboard Generator.
 *
 * Supports:
 * - Executive KPI Dashboard cards with metric badges and percentage indicators
 * - Multi-sheet financial & operational workbooks
 * - Custom themes (Midnight Executive, Emerald Growth, Cobalt Modern, Titanium Clean)
 * - Automated formulas (SUM, AVERAGE, MIN, MAX, percentages)
 * - Zebra striping, column auto-fitting, and double-underline totals
 */

import ExcelJS from "exceljs";
import fileSaver from "file-saver";

const saveAs = (fileSaver as any).saveAs ?? fileSaver;

export interface KpiCard {
  label: string;
  value: string | number;
  change?: string;
  status?: "positive" | "negative" | "neutral";
  icon?: string;
}

export interface XlsxSheet {
  /** Sheet name */
  name: string;
  /** Optional KPI cards to display at top of dashboard sheet */
  kpiCards?: KpiCard[];
  /** Column headers */
  headers?: string[];
  /** Data rows (array of arrays) */
  rows?: (string | number | boolean | null)[][];
  /** Column widths (in character count) */
  columnWidths?: number[];
  /** Header background color (hex without #) */
  headerColor?: string;
  /** Header text color (hex without #) */
  headerTextColor?: string;
  /** Auto-filter on header row */
  autoFilter?: boolean;
  /** Freeze top row */
  freezeTopRow?: boolean;
  /** Include total sum row at the bottom */
  includeTotalRow?: boolean;
  /** Description / subtitle for sheet */
  description?: string;
}

export interface XlsxOptions {
  /** Workbook title (used as filename) */
  title: string;
  /** Author */
  author?: string;
  /** Organization or company */
  company?: string;
  /** Color theme */
  theme?: "midnight" | "emerald" | "cobalt" | "titanium";
  /** Sheets */
  sheets: XlsxSheet[];
  /** Default font size */
  defaultFontSize?: number;
}

const THEMES = {
  midnight: { header: "0F172A", headerText: "FFFFFF", accent: "38BDF8", altRow: "F8FAFC", border: "CBD5E1" },
  emerald: { header: "064E3B", headerText: "FFFFFF", accent: "10B981", altRow: "ECFDF5", border: "A7F3D0" },
  cobalt: { header: "1E3A8A", headerText: "FFFFFF", accent: "3B82F6", altRow: "EFF6FF", border: "BFDBFE" },
  titanium: { header: "27272A", headerText: "FFFFFF", accent: "F59E0B", altRow: "FAFAFA", border: "E4E4E7" },
};

export async function createXlsx(options: XlsxOptions): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = options.author || "JARVIS AI OS";
  workbook.company = options.company || "Open Source Jarvis Community";
  workbook.created = new Date();

  const theme = THEMES[options.theme || "midnight"];

  for (const sheet of options.sheets) {
    const ws = workbook.addWorksheet(sheet.name, {
      views: [{ showGridLines: true }],
    });

    let currentRow = 1;

    // 1. Sheet Title Banner
    const titleRow = ws.getRow(currentRow);
    titleRow.getCell(1).value = `${sheet.name.toUpperCase()} — ${options.title}`;
    titleRow.getCell(1).font = { name: "Calibri", size: 14, bold: true, color: { argb: theme.header } };
    currentRow += 2;

    // 2. Render KPI Summary Cards if present
    if (sheet.kpiCards && sheet.kpiCards.length > 0) {
      const kpiRowStart = currentRow;
      const kpiCards = sheet.kpiCards.slice(0, 4); // Up to 4 cards across

      kpiCards.forEach((kpi, idx) => {
        const colStart = idx * 3 + 1;
        const colEnd = colStart + 2;

        // Merge cells for card
        ws.mergeCells(kpiRowStart, colStart, kpiRowStart, colEnd);
        ws.mergeCells(kpiRowStart + 1, colStart, kpiRowStart + 1, colEnd);
        ws.mergeCells(kpiRowStart + 2, colStart, kpiRowStart + 2, colEnd);

        // Label
        const labelCell = ws.getCell(kpiRowStart, colStart);
        labelCell.value = kpi.label.toUpperCase();
        labelCell.font = { name: "Calibri", size: 9, bold: true, color: { argb: "64748B" } };
        labelCell.alignment = { horizontal: "center", vertical: "middle" };

        // Value
        const valCell = ws.getCell(kpiRowStart + 1, colStart);
        valCell.value = kpi.value;
        valCell.font = { name: "Calibri", size: 18, bold: true, color: { argb: theme.header } };
        valCell.alignment = { horizontal: "center", vertical: "middle" };

        // Change badge
        const changeCell = ws.getCell(kpiRowStart + 2, colStart);
        changeCell.value = kpi.change || "• Active Metric";
        const badgeColor =
          kpi.status === "positive" ? "16A34A" : kpi.status === "negative" ? "DC2626" : "475569";
        changeCell.font = { name: "Calibri", size: 9, italic: true, color: { argb: badgeColor } };
        changeCell.alignment = { horizontal: "center", vertical: "middle" };

        // Apply box border & fill
        for (let r = kpiRowStart; r <= kpiRowStart + 2; r++) {
          for (let c = colStart; c <= colEnd; c++) {
            const cell = ws.getCell(r, c);
            cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: theme.altRow } };
            cell.border = {
              top: { style: "thin", color: { argb: theme.border } },
              left: { style: "thin", color: { argb: theme.border } },
              bottom: { style: "thin", color: { argb: theme.border } },
              right: { style: "thin", color: { argb: theme.border } },
            };
          }
        }
      });

      currentRow += 4;
    }

    // 3. Render Table Headers
    const headers = sheet.headers || [];
    const headerRowIdx = currentRow;

    if (headers.length > 0) {
      const headerRow = ws.getRow(headerRowIdx);
      headers.forEach((header, idx) => {
        const cell = headerRow.getCell(idx + 1);
        cell.value = header;
        cell.font = {
          name: "Calibri",
          size: 11,
          bold: true,
          color: { argb: sheet.headerTextColor || theme.headerText },
        };
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: sheet.headerColor || theme.header },
        };
        cell.alignment = { vertical: "middle", horizontal: "left" };
        cell.border = {
          top: { style: "thin", color: { argb: theme.border } },
          bottom: { style: "medium", color: { argb: theme.accent } },
        };
      });
      headerRow.height = 26;

      if (sheet.autoFilter) {
        ws.autoFilter = {
          from: { row: headerRowIdx, column: 1 },
          to: { row: headerRowIdx, column: headers.length },
        };
      }

      currentRow++;
    }

    // 4. Render Data Rows
    const rows = sheet.rows || [];
    const dataStartRow = currentRow;

    rows.forEach((row, rIdx) => {
      const dataRow = ws.getRow(currentRow);
      const isAlt = rIdx % 2 === 1;

      row.forEach((val, cIdx) => {
        const cell = dataRow.getCell(cIdx + 1);
        cell.value = val;
        cell.font = { name: "Calibri", size: 10, color: { argb: "1E293B" } };
        cell.alignment = { vertical: "middle" };

        if (typeof val === "number") {
          cell.alignment = { horizontal: "right", vertical: "middle" };
          if (val > 1000) {
            cell.numFmt = "#,##0.00";
          }
        }

        if (isAlt) {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: theme.altRow },
          };
        }

        cell.border = {
          bottom: { style: "thin", color: { argb: theme.border } },
          left: { style: "thin", color: { argb: theme.border } },
          right: { style: "thin", color: { argb: theme.border } },
        };
      });
      dataRow.height = 20;
      currentRow++;
    });

    // 5. Total Row if requested
    if (sheet.includeTotalRow && rows.length > 0 && headers.length > 0) {
      const totalRow = ws.getRow(currentRow);
      totalRow.getCell(1).value = "TOTAL / SUMMARY";
      totalRow.getCell(1).font = { name: "Calibri", size: 11, bold: true, color: { argb: theme.header } };

      for (let c = 2; c <= headers.length; c++) {
        // Check if column contains numbers
        const colHasNum = rows.some((r) => typeof r[c - 1] === "number");
        if (colHasNum) {
          const colLetter = String.fromCharCode(64 + c);
          const formula = `SUM(${colLetter}${dataStartRow}:${colLetter}${currentRow - 1})`;
          const cell = totalRow.getCell(c);
          cell.value = { formula, result: 0 };
          cell.font = { name: "Calibri", size: 11, bold: true, color: { argb: theme.header } };
          cell.alignment = { horizontal: "right", vertical: "middle" };
          cell.numFmt = "#,##0.00";
        }
      }

      for (let c = 1; c <= headers.length; c++) {
        const cell = totalRow.getCell(c);
        cell.border = {
          top: { style: "thin", color: { argb: theme.header } },
          bottom: { style: "double", color: { argb: theme.header } },
        };
      }
      totalRow.height = 24;
      currentRow++;
    }

    // 6. Auto Column Widths
    if (sheet.columnWidths) {
      sheet.columnWidths.forEach((w, i) => {
        ws.getColumn(i + 1).width = w;
      });
    } else {
      // Automatically fit widths
      ws.columns.forEach((column) => {
        let maxLen = 12;
        column.eachCell?.({ includeEmpty: false }, (cell) => {
          const val = cell.value ? cell.value.toString() : "";
          if (val.length > maxLen) maxLen = Math.min(val.length + 3, 40);
        });
        column.width = maxLen;
      });
    }
  }

  return workbook;
}

export async function downloadXlsx(options: XlsxOptions): Promise<void> {
  const workbook = await createXlsx(options);
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const filename = `${options.title.replace(/[^a-z0-9_-]/gi, "_")}.xlsx`;
  saveAs(blob, filename);
}
