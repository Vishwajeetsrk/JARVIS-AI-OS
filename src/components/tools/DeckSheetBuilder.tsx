import React, { useState } from "react";
import { Presentation, Table, Download, Check, Sparkles, FileSpreadsheet } from "lucide-react";
import { generateDeckSheetContent, DeckSheetOutput } from "@/server/tools/deckSheetBuilder";
import pptxgen from "pptxgenjs";
import ExcelJS from "exceljs";

export function DeckSheetBuilder() {
  const [title, setTitle] = useState("Nia AI OS Architecture & Executive Summary");
  const [data, setData] = useState<DeckSheetOutput | null>(null);
  const [exportingPptx, setExportingPptx] = useState(false);
  const [exportingXlsx, setExportingXlsx] = useState(false);

  const handleBuild = () => {
    const res = generateDeckSheetContent({ title });
    setData(res);
  };

  const handleExportPPTX = async () => {
    if (!data) return;
    setExportingPptx(true);
    try {
      const pres = new pptxgen();
      pres.layout = "LAYOUT_16x9";

      data.slides.forEach((s) => {
        const slide = pres.addSlide();
        slide.background = { color: "0F172A" };
        slide.addText(s.title, {
          x: 0.8,
          y: 0.8,
          w: "80%",
          h: 0.8,
          fontSize: 24,
          bold: true,
          color: "38BDF8",
          fontFace: "Arial",
        });

        slide.addText(
          s.bullets.map((b) => ({ text: `• ${b}\n`, options: { fontSize: 16, color: "E2E8F0" } })),
          { x: 0.8, y: 2.0, w: "80%", h: 3.5 }
        );
      });

      await pres.writeFile({ fileName: `${title.toLowerCase().replace(/\s+/g, "_")}.pptx` });
    } catch (err) {
      console.error("Failed to export PPTX:", err);
    } finally {
      setExportingPptx(false);
    }
  };

  const handleExportXLSX = async () => {
    if (!data) return;
    setExportingXlsx(true);
    try {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet("System Audit");

      sheet.columns = data.sheetColumns.map((c) => ({
        header: c,
        key: c,
        width: 25,
      }));

      data.sheetRows.forEach((r) => {
        sheet.addRow(r);
      });

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title.toLowerCase().replace(/\s+/g, "_")}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to export XLSX:", err);
    } finally {
      setExportingXlsx(false);
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center border border-violet-500/30">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Deck & Sheet Builder</h2>
            <p className="text-xs text-slate-400">Generate executive slide decks (.pptx) and structured audit sheets (.xlsx) with 1-click export.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium">
          VIDA SOTA #7
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-violet-500/50"
            placeholder="Presentation / Spreadsheet Title"
          />
          <button
            onClick={handleBuild}
            className="py-2 px-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-medium rounded-lg shadow-lg shadow-violet-600/20 flex items-center gap-2 text-sm transition-all whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            Build Assets
          </button>
        </div>

        {data && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Generated {data.slideCount} Slides & {data.sheetRows.length} Row Audit Dataset
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportPPTX}
                  disabled={exportingPptx}
                  className="flex items-center gap-1.5 text-xs text-white bg-violet-600 hover:bg-violet-500 px-3 py-1.5 rounded-lg shadow-sm font-medium transition-all disabled:opacity-50"
                >
                  <Presentation className="w-3.5 h-3.5" />
                  {exportingPptx ? "Exporting..." : "Download .PPTX"}
                </button>
                <button
                  onClick={handleExportXLSX}
                  disabled={exportingXlsx}
                  className="flex items-center gap-1.5 text-xs text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg shadow-sm font-medium transition-all disabled:opacity-50"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  {exportingXlsx ? "Exporting..." : "Download .XLSX"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-lg space-y-2">
                <div className="font-semibold text-violet-400">Slide Deck Outline</div>
                <div className="space-y-2">
                  {data.slides.map((s, idx) => (
                    <div key={idx} className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                      <div className="font-medium text-white">Slide {idx + 1}: {s.title}</div>
                      <ul className="text-[11px] text-slate-400 mt-1 space-y-0.5">
                        {s.bullets.map((b, bIdx) => (
                          <li key={bIdx}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-lg space-y-2">
                <div className="font-semibold text-emerald-400">Spreadsheet Preview</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px]">
                    <thead className="text-slate-400 border-b border-slate-800">
                      <tr>
                        {data.sheetColumns.slice(0, 3).map((col, cIdx) => (
                          <th key={cIdx} className="pb-1">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40 text-slate-300">
                      {data.sheetRows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          <td className="py-1 font-medium">{String(row["Module"])}</td>
                          <td className="py-1 text-emerald-400">{String(row["Status"])}</td>
                          <td className="py-1 text-slate-400">{String(row["Engine"])}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
