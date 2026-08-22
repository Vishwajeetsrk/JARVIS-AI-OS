/**
 * VIDA SOTA Agent 5: Sheet Builder (Excel Generator)
 * Leverages exceljs to create professional styled spreadsheets, financial models,
 * sprint trackers, and data sheets.
 */
import ExcelJS from "exceljs";

export interface SheetColumn {
  header: string;
  key: string;
  width?: number;
}

export interface SheetOptions {
  title: string;
  sheetName?: string;
  columns: SheetColumn[];
  rows: Record<string, any>[];
}

export class SheetBuilderAgent {
  public async generateSpreadsheet(options: SheetOptions): Promise<Blob> {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Nia AI Operating System";
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet(options.sheetName || "Sheet1", {
      views: [{ showGridLines: true }],
    });

    // Set Columns
    worksheet.columns = options.columns.map((col) => ({
      header: col.header,
      key: col.key,
      width: col.width || 20,
    }));

    // Header styling
    const headerRow = worksheet.getRow(1);
    headerRow.height = 28;
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF0F172A" }, // Dark slate
      };
      cell.font = {
        name: "Segoe UI",
        size: 11,
        bold: true,
        color: { argb: "FF38BDF8" }, // Cyan
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // Add Rows
    options.rows.forEach((rowData) => {
      const row = worksheet.addRow(rowData);
      row.height = 22;
      row.eachCell((cell) => {
        cell.font = { name: "Segoe UI", size: 10 };
        cell.alignment = { vertical: "middle" };
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  }
}

export const sheetBuilder = new SheetBuilderAgent();
