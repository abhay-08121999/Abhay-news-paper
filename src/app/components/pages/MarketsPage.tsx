import { BarChart2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Cell } from "recharts";
import { useState, useEffect } from "react";
import { getQuotes } from "../../../services/marketApi";

/* Same publication system as WorldPage / EnergyPage / WhiteHouseWatchPage:
   paper #FAFAF7  ink #17140F  ink-soft #55534C  rule #D9D4C7  wire (live) #A32F26
   Markets gets its own register — a terminal console bolted into the paper page,
   because live numeric feeds read differently from prose and deserve to look like it. */

const spChartData = [
  { time: "9am", value: 5820 }, { time: "10am", value: 5845 }, { time: "11am", value: 5830 },
  { time: "12pm", value: 5855 }, { time: "1pm", value: 5848 }, { time: "2pm", value: 5870 },
  { time: "3pm", value: 5880 }, { time: "4pm", value: 5892 },
];

const sectorData = [
  { sector: "Tech", change: 2.1 }, { sector: "Finance", change: 1.4 }, { sector: "Health", change: 0.8 },
  { sector: "Energy", change: -1.2 }, { sector: "Retail", change: 0.6 }, { sector: "Utilities", change: -0.3 },
  { sector: "Materials", change: 1.8 }, { sector: "Industrial", change: 0.9 },
];

const UP = "#34D399";
const DOWN = "#C1523F";

function MarketTable({ data, cols }: { data: Record<string, string | boolean>[]; cols: string[] }) {
  const visibleCols = cols.filter((c) => c !== "up");
  return (
    <table className="w-full text-sm border-collapse font-mono">
      <thead>
        <tr className="text-[10px] uppercase tracking-wider text-[#8A887F]">
          {visibleCols.map((col) => (
            <th key={col} className={`text-left font-normal py-2 ${col === "change" ? "text-right" : ""}`}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t border-white/10 hover:bg-white/[0.03] transition-colors">
            {visibleCols.map((col) => (
              <td
                key={col}
                className={`py-2.5 text-[13px] ${
                  col === "change"
                    ? "text-right font-semibold tabular-nums"
                    : col === "name" || col === "pair" || col === "bond"
                    ? "font-semibold text-[#EDE9DD]"
                    : "text-[#B8B4A8] tabular-nums"
                }`}
                style={col === "change" ? { color: row.up ? UP : DOWN } : undefined}
              >
                {col === "change" ? (
                  <span className="inline-flex items-center justify-end gap-1">
                    {row.up ? "▲" : "▼"} {String(row[col])}
                  </span>
                ) : typeof row[col] !== "boolean" ? (
                  String(row[col])
                ) : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function MarketsPage() {
  const [activeTab, setActiveTab] = useState("indices");
  const [marketData, setMarketData] = useState({ indices: [], crypto: [] });
  const [loading, setLoading] = useState(true);
  const tabs = ["indices", "crypto"];

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getQuotes();
        setMarketData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#FAFAF7] text-[#17140F]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Masthead ───────────────────────────────────────── */}
        <div className="flex items-baseline justify-between border-t-[3px] border-b border-[#17140F] py-2 mb-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#55534C]">
          <span className="flex items-center gap-2 font-semibold text-[#17140F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A32F26] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A32F26]" />
            </span>
            Real-Time Data
          </span>
          <span>Terminal Feed &middot; Refreshes every 30s</span>
        </div>
        <div className="border-b-4 border-[#17140F] pb-5 mb-8">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Global Markets</h1>
        </div>

        {/* ── Quick jump ─────────────────────────────────────── */}
        <div className="flex flex-wrap gap-x-6 gap-y-1.5 mb-8 text-[11px] uppercase tracking-wide">
          <a href="#sectors" className="text-[#55534C] hover:text-[#A32F26] transition-colors">Overview</a>
          <a href="#sectors" className="text-[#55534C] hover:text-[#A32F26] transition-colors">Sector Performance</a>
          <button
            onClick={() => {
              setActiveTab("indices");
              document.getElementById("markets-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-[#55534C] hover:text-[#A32F26] transition-colors"
          >
            Global Indices
          </button>
          <button
            onClick={() => {
              setActiveTab("crypto");
              document.getElementById("markets-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-[#55534C] hover:text-[#A32F26] transition-colors"
          >
            Cryptocurrency
          </button>
        </div>

        {/* ── Terminal console ───────────────────────────────── */}
        <div className="bg-[#17140F] text-[#EDE9DD] border border-[#17140F]">
          {/* Console chrome */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-dashed border-[#55534C]">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C1523F]" />
                <span className="w-2 h-2 rounded-full bg-[#B8752E]" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#EDE9DD]/80">
                Market Terminal
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#A32F26] flex items-center gap-1.5">
              <BarChart2 size={11} /> LIVE
            </span>
          </div>

          {loading ? (
            <div className="py-16 text-center font-mono text-xs text-[#8A887F] uppercase tracking-widest">
              <BarChart2 size={20} className="mx-auto mb-3 opacity-40" />
              Loading market data&hellip;
            </div>
          ) : (
            <>
              {/* Index strip */}
              <div className="flex items-stretch gap-0 overflow-x-auto scrollbar-hide border-b border-dashed border-[#55534C]">
                {marketData.indices.map((idx: any, i: number) => (
                  <div
                    key={idx.name}
                    className={`flex-shrink-0 px-5 py-3.5 font-mono ${i > 0 ? "border-l border-[#3A3934]" : ""}`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-[#8A887F]">{idx.name}</p>
                    <p className="text-sm text-[#EDE9DD] mt-0.5 tabular-nums">{idx.value}</p>
                    <span
                      className="text-[11px] tabular-nums flex items-center gap-1 mt-0.5"
                      style={{ color: idx.up ? UP : DOWN }}
                    >
                      {idx.up ? "▲" : "▼"} {idx.change} ({idx.pts})
                    </span>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dashed divide-[#55534C]" id="sectors">
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A887F] mb-2">S&amp;P 500 — Today</p>
                  <ResponsiveContainer width="100%" height={170}>
                    <LineChart data={spChartData}>
                      <CartesianGrid strokeDasharray="2 4" stroke="#3A3934" vertical={false} />
                      <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#8A887F" }} axisLine={{ stroke: "#3A3934" }} tickLine={false} />
                      <YAxis tick={{ fontSize: 10, fill: "#8A887F" }} domain={[5800, 5900]} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 0, border: "1px solid #3A3934", background: "#17140F", color: "#EDE9DD" }}
                      />
                      <Line type="monotone" dataKey="value" stroke={UP} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#8A887F] mb-2">Sector Performance Today (%)</p>
                  <ResponsiveContainer width="100%" height={170}>
                    <BarChart data={sectorData} layout="vertical">
                      <XAxis type="number" tick={{ fontSize: 10, fill: "#8A887F" }} axisLine={{ stroke: "#3A3934" }} tickLine={false} />
                      <YAxis dataKey="sector" type="category" tick={{ fontSize: 10, fill: "#B8B4A8" }} width={58} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ fontSize: 11, borderRadius: 0, border: "1px solid #3A3934", background: "#17140F", color: "#EDE9DD" }}
                      />
                      <Bar dataKey="change" radius={0}>
                        {sectorData.map((entry, i) => (
                          <Cell key={i} fill={entry.change >= 0 ? UP : DOWN} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 px-4 pt-3 border-t border-dashed border-[#55534C]">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono text-[10px] uppercase tracking-wider px-3 py-2 transition-colors ${
                      activeTab === tab
                        ? "text-[#EDE9DD] border-b-2 border-[#A32F26]"
                        : "text-[#8A887F] border-b-2 border-transparent hover:text-[#B8B4A8]"
                    }`}
                  >
                    &gt; {tab}
                  </button>
                ))}
              </div>

              <div className="px-4 pb-4" id="markets-table">
                {activeTab === "indices" && (
                  <MarketTable data={marketData.indices as any} cols={["name", "value", "change", "up"]} />
                )}
                {activeTab === "crypto" && (
                  <MarketTable data={marketData.crypto as any} cols={["name", "value", "change", "up"]} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
