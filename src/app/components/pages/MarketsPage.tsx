import { TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar, Cell } from "recharts";
import { useState, useEffect } from "react";
import { getQuotes } from "../../../services/marketApi";

function SH({ title }: { title: string }) {
  return <h2 className="pt-markets-section-title">{title}</h2>;
}

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

function MarketTable({ data, cols }: { data: Record<string, string | boolean>[]; cols: string[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="pt-market-table-head">
            {cols
              .filter((col) => col !== "up")
              .map((col) => (
                <th
                  key={col}
                  className={`py-2 px-2 text-left ${col === "change" ? "text-right" : ""}`}
                >
                  {col}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="pt-market-table-row">
              {cols
                .filter((col) => col !== "up")
                .map((col) => (
                  <td
                    key={col}
                    className={`text-sm ${
                      col === "change"
                        ? (row.up ? "text-[var(--pt-success)]" : "text-[var(--pt-danger)]") + " text-right font-semibold"
                        : col === "name" || col === "pair" || col === "bond"
                        ? "font-medium"
                        : ""
                    }`}
                  >
                    {col === "change" ? (
                      <span className="inline-flex items-center justify-end gap-1">
                        {row.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {String(row[col])}
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
    </div>
  );
}

export function MarketsPage() {
  const [activeTab, setActiveTab] = useState("indices");
  const [marketData, setMarketData] = useState({
    indices: [],
    crypto: [],
  });

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

  if (loading) {
    return (
      <div className="pt-markets-loading">
        <BarChart2 size={22} className="mx-auto mb-3 opacity-40" />
        Loading market data&hellip;
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Header */}
      <div className="pt-markets-header flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center flex-shrink-0">
          <BarChart2 size={18} />
        </div>
        <div>
          <p className="pt-markets-eyebrow">Real-Time Data</p>
          <h1 className="pt-markets-title">Global Markets</h1>
        </div>
        <span className="ml-auto pt-live-badge flex items-center gap-2">
          <span className="pt-live-dot" /> Live
        </span>
      </div>

      {/* Sub-nav — quick jump links to the sections below, Bloomberg-style */}
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-6 -mt-2">
        <a href="#sectors" className="text-xs text-gray-500 hover:text-red-600 transition-colors">Overview</a>
        <a href="#sectors" className="text-xs text-gray-500 hover:text-red-600 transition-colors">Sector Performance</a>
        <button
          onClick={() => {
            setActiveTab("indices");
            document.getElementById("markets-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="text-xs text-gray-500 hover:text-red-600 transition-colors"
        >
          Global Indices
        </button>
        <button
          onClick={() => {
            setActiveTab("crypto");
            document.getElementById("markets-table")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="text-xs text-gray-500 hover:text-red-600 transition-colors"
        >
          Cryptocurrency
        </button>
      </div>

      {/* Quick overview — compact "stock box" strip (primary/full-size version,
          since this is the dedicated Markets hub; the Finance page uses the
          smaller pt-stock-box-compact variant of the same component style) */}
      <div className="pt-stock-box mb-8">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {marketData.indices.map((idx: any) => (
            <div key={idx.name} className="pt-index-card pt-index-card-compact flex-shrink-0">
              <p className="pt-index-card-name">{idx.name}</p>
              <p className="pt-index-card-value">{idx.value}</p>
              <span className={`pt-index-card-change ${idx.up ? "up" : "down"}`}>
                {idx.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {idx.change} ({idx.pts})
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" id="sectors">
        <div className="pt-chart-panel">
          <p className="pt-chart-panel-title">S&amp;P 500 — Today</p>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={spChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: "#777" }} axisLine={{ stroke: "#e2e2e2" }} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#777" }} domain={[5800, 5900]} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e2e2" }} />
              <Line type="monotone" dataKey="value" stroke="#00c875" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="pt-chart-panel">
          <p className="pt-chart-panel-title">Sector Performance Today (%)</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={sectorData} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 11, fill: "#777" }} axisLine={{ stroke: "#e2e2e2" }} tickLine={false} />
              <YAxis dataKey="sector" type="category" tick={{ fontSize: 11, fill: "#333" }} width={62} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e2e2" }} />
              <Bar dataKey="change" radius={[0, 4, 4, 0]}>
                {sectorData.map((entry, i) => (
                  <Cell key={i} fill={entry.change >= 0 ? "#00c875" : "#e31b23"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="pt-markets-tabs flex gap-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pt-markets-tab ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="pt-markets-table-panel" id="markets-table">
        {activeTab === "indices" && (
          <div>
            <SH title="Global Stock Indices" />
            <MarketTable data={marketData.indices as any} cols={["name", "value", "change", "up"]} />
          </div>
        )}
        {activeTab === "crypto" && (
          <div>
            <SH title="Cryptocurrency" />
            <MarketTable data={marketData.crypto as any} cols={["name", "value", "change", "up"]} />
          </div>
        )}
      </div>
    </div>
  );
}
