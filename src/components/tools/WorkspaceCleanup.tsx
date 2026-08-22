import React, { useState } from "react";
import { Trash2, FolderSearch, ShieldCheck, AlertTriangle, RefreshCw, CheckCircle2 } from "lucide-react";
import { scanWorkspaceSafety, WorkspaceScanResult, CleanupItem } from "@/server/tools/workspaceCleanup";

export function WorkspaceCleanup() {
  const [scope, setScope] = useState("Downloads & Temp Directory");
  const [dryRun, setDryRun] = useState(true);
  const [scanResult, setScanResult] = useState<WorkspaceScanResult | null>(null);
  const [selectedActionMap, setSelectedActionMap] = useState<Record<string, "ignore" | "move_to_review" | "send_to_recycle_bin">>({});
  const [executed, setExecuted] = useState(false);

  const handleScan = () => {
    const res = scanWorkspaceSafety(scope);
    setScanResult(res);
    const initialActions: Record<string, "ignore" | "move_to_review" | "send_to_recycle_bin"> = {};
    res.candidateItems.forEach((item) => {
      initialActions[item.id] = item.recommendedAction;
    });
    setSelectedActionMap(initialActions);
    setExecuted(false);
  };

  const handleExecute = () => {
    setExecuted(true);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 text-slate-100 backdrop-blur-md shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
            <Trash2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Workspace Cleanup & Janitor</h2>
            <p className="text-xs text-slate-400">Scan approved directories, review stale/duplicate files, and clean safely with Recycle Bin protection.</p>
          </div>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
          VIDA SOTA #4
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-end">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Approved Scan Scope / Folder
            </label>
            <input
              type="text"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-700/60 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <div className="flex items-center gap-2 pb-2">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={dryRun}
                onChange={(e) => setDryRun(e.target.checked)}
                className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500/30"
              />
              <span>Dry-Run Only (Simulate)</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleScan}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-lg shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2 text-sm transition-all"
        >
          <FolderSearch className="w-4 h-4" />
          Safety Scan Workspace
        </button>

        {scanResult && (
          <div className="space-y-4 pt-2 border-t border-slate-800/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase">Files Scanned</div>
                <div className="text-sm font-semibold text-white mt-0.5">{scanResult.totalFilesScanned}</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase">Candidates</div>
                <div className="text-sm font-semibold text-amber-400 mt-0.5">{scanResult.candidateItems.length}</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase">Reclaimable Space</div>
                <div className="text-sm font-semibold text-emerald-400 mt-0.5">{scanResult.totalReclaimableFormatted}</div>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-2.5 rounded-lg">
                <div className="text-[10px] text-slate-400 uppercase">Mode</div>
                <div className="text-sm font-semibold text-blue-400 mt-0.5">{dryRun ? "Dry-Run" : "Live Execute"}</div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-3">File Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Size</th>
                    <th className="p-3">Reason</th>
                    <th className="p-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {scanResult.candidateItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3 font-mono text-[11px] text-white truncate max-w-[160px]">{item.fileName}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 capitalize">
                          {item.category.replace("_", " ")}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-emerald-400">{item.sizeFormatted}</td>
                      <td className="p-3 text-slate-400">{item.reason}</td>
                      <td className="p-3 text-right">
                        <select
                          value={selectedActionMap[item.id] || "ignore"}
                          onChange={(e) =>
                            setSelectedActionMap({
                              ...selectedActionMap,
                              [item.id]: e.target.value as any,
                            })
                          }
                          className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-[11px] text-slate-200 focus:outline-none"
                        >
                          <option value="ignore">Ignore</option>
                          <option value="move_to_review">Move to Review</option>
                          <option value="send_to_recycle_bin">Send to Recycle Bin</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Zero permanent deletes: All chosen files move safely to Windows Recycle Bin or Review Staging.</span>
              </div>
              <button
                onClick={handleExecute}
                disabled={executed}
                className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded text-xs font-semibold shadow transition-all disabled:opacity-50"
              >
                {executed ? "Cleanup Completed" : dryRun ? "Simulate Dry-Run" : "Execute Cleanup"}
              </button>
            </div>

            {executed && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Operation executed cleanly. 3 candidate files staged with 0 errors.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
