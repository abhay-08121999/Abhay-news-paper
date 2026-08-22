import { TrendingUp, TrendingDown, BarChart2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from "recharts";
import { useState , useEffect } from "react";
import { getQuotes } from "../../../services/marketApi";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}
{/*
const indices = [
  //{ name: "S&P 500", value: "5,892.31", change: "+1.14%", pts: "+66.43", up: true },
  //{ name: "DOW JONES", value: "42,318.45", change: "+0.82%", pts: "+343.89", up: true },
  //{ name: "NASDAQ", value: "19,245.78", change: "+1.56%", pts: "+296.12", up: true },
  //{ name: "RUSSELL 2000", value: "2,134.56", change: "+0.45%", pts: "+9.56", up: true },
  //{ name: "VIX (Fear Index)", value: "14.23", change: "-5.21%", pts: "-0.78", up: false },
  //{ name: "NIFTY 50", value: "24,678.90", change: "-0.34%", pts: "-84.21", up: false },
  //{ name: "SENSEX", value: "81,245.60", change: "-0.21%", pts: "-170.61", up: false },
  //{ name: "FTSE 100", value: "8,456.23", change: "+0.67%", pts: "+56.23", up: true },
  ////{ name: "DAX", value: "19,134.55", change: "+0.43%", pts: "+81.88", up: true },
  //{ name: "NIKKEI 225", value: "39,876.34", change: "-0.55%", pts: "-219.32", up: false },
  //{ name: "HANG SENG", value: "18,456.78", change: "+2.13%", pts: "+383.56", up: true },
];

const commodities = [
  { name: "Crude Oil (WTI)", value: "$78.45", change: "-1.23%", up: false },
  { name: "Brent Crude", value: "$82.31", change: "-1.05%", up: false },
  { name: "Natural Gas", value: "$2.87", change: "+0.78%", up: true },
  { name: "Gold", value: "$2,345.60", change: "+0.89%", up: true },
  { name: "Silver", value: "$29.87", change: "+1.23%", up: true },
  { name: "Copper", value: "$4.56", change: "+0.34%", up: true },
  { name: "Wheat", value: "$5.43/bu", change: "-0.45%", up: false },
];

const crypto = [
  //{ name: "Bitcoin (BTC)", value: "$67,234", change: "+3.45%", up: true },
  //{ name: "Ethereum (ETH)", value: "$3,456", change: "+2.87%", up: true },
  //{ name: "BNB", value: "$598", change: "+1.23%", up: true },
  //{ name: "Solana (SOL)", value: "$167", change: "+4.56%", up: true },
  //{ name: "XRP", value: "$0.856", change: "-0.78%", up: false },
];

const forex = [
  { pair: "EUR/USD", value: "1.0876", change: "-0.12%", up: false },
  { pair: "GBP/USD", value: "1.2734", change: "+0.08%", up: true },
  { pair: "USD/JPY", value: "149.34", change: "+0.34%", up: true },
  { pair: "USD/INR", value: "83.45", change: "-0.12%", up: false },
  { pair: "USD/CNY", value: "7.24", change: "+0.08%", up: true },
  { pair: "AUD/USD", value: "0.6543", change: "+0.23%", up: true },
];

const bonds = [
  { bond: "US 2Y Treasury", yield: "4.87%", change: "+0.03%", up: true },
  { bond: "US 10Y Treasury", yield: "4.32%", change: "+0.05%", up: true },
  { bond: "US 30Y Treasury", yield: "4.58%", change: "+0.04%", up: true },
  { bond: "UK 10Y Gilt", yield: "4.12%", change: "+0.02%", up: true },
  { bond: "Germany 10Y Bund", yield: "2.34%", change: "-0.01%", up: false },
  { bond: "India 10Y G-Sec", yield: "6.87%", change: "-0.03%", up: false },
];
*/}

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
        <tbody className="divide-y divide-gray-100">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              {cols.map((col) => (
                <td key={col} className={`py-2 ${col === "change" ? (row.up ? "text-green-600" : "text-red-600") + " text-right text-xs" : col === cols[cols.length - 2] ? "text-right" : ""}`}>
                  {col === "change" ? (
                    <span className="flex items-center justify-end gap-0.5">
                      {row.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                      {String(row[col])}
                    </span>
                  ) : typeof row[col] !== "boolean" ? String(row[col]) : null}
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
    //forex: [],
  });

  const [loading, setLoading] = useState(true);
  const tabs = ["indices", //"commodities", 
  "crypto",
  // "forex", "bonds"
];
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
    <div className="py-10 text-center">
      Loading market data...
    </div>
  );
}
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <BarChart2 size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Real-Time Data</span>
          <h1 className="mt-0.5">Global Markets</h1>
        </div>
        <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live
        </span>
      </div>

      {/* Quick overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {marketData.indices.map((idx: any) => (
          <div key={idx.name} className="border border-gray-200 rounded p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{idx.name}</p>
            <p className="text-lg mt-0.5">{idx.value}</p>
            <p className={`text-xs flex items-center gap-0.5 mt-0.5 ${idx.up ? "text-green-600" : "text-red-600"}`}>
              {idx.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {idx.change} ({idx.pts})
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 rounded p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">S&P 500 — Today</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={spChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} domain={[5800, 5900]} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="border border-gray-200 rounded p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Sector Performance Today (%)</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={sectorData} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis dataKey="sector" type="category" tick={{ fontSize: 10 }} width={55} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Bar dataKey="change" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-1 mb-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xs px-4 py-2 rounded whitespace-nowrap capitalize transition-colors ${
              activeTab === tab ? "bg-black text-white" : "border border-gray-300 text-gray-600 hover:border-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-gray-200 rounded p-4">
        {activeTab === "indices" && (
          <div>
            <SH title="Global Stock Indices" />
            <MarketTable
  data={marketData.indices as any}
  cols={["name", "value", "change", "up"]}
/>
          </div>
        )}
        {activeTab === "commodities" && (
          <div>
            <SH title="Commodities" />
           {/* <MarketTable data={commodities as any} cols={["name", "value", "change", "up"]} />*/}
          </div>
        )}
        {activeTab === "crypto" && (
          <div>
            <SH title="Cryptocurrency" />
            <MarketTable data={marketData.crypto as any} cols={["name", "value", "change", "up"]} />
          </div>
        )}
        {activeTab === "forex" && (
          <div>
            <SH title="Foreign Exchange" />
            {/*<MarketTable data={forex as any} cols={["pair", "value", "change", "up"]} />*/}
          </div>
        )}
        {activeTab === "bonds" && (
          <div>
            <SH title="Government Bonds & Yields" />

            {/*<MarketTable data={bonds as any} cols={["bond", "yield", "change", "up"]} />*/}
          </div>
        )}
      </div>
    </div>
  );
}

