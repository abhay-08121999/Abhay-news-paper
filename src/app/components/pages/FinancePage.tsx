import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, ChevronRight, TrendingUp, TrendingDown, BarChart2, DollarSign, Globe, Briefcase } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import InsImg from "../../../imports/Insightimage.png";
import LN4Img from "../../../imports/LN4image.png";
import FIN3Img from "../../../imports/FIN3.png";
import FIN4Img from "../../../imports/FIN4.png";
import FIN5Img from "../../../imports/FIN5.png";

function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
      <h2 className="uppercase tracking-wider">{title}</h2>
    </div>
  );
}

const spData = [
  { date: "Jan", value: 4800 },
  { date: "Feb", value: 4950 },
  { date: "Mar", value: 5100 },
  { date: "Apr", value: 5050 },
  { date: "May", value: 5400 },
  { date: "Jun", value: 5350 },
  { date: "Jul", value: 5600 },
  { date: "Aug", value: 5750 },
  { date: "Sep", value: 5650 },
  { date: "Oct", value: 5800 },
  { date: "Nov", value: 5750 },
  { date: "Dec", value: 5892 },
];

const fullMarkets = [
  { symbol: "DOW JONES", value: "42,318.45", change: "+0.82%", pts: "+343.89", up: true },
  { symbol: "S&P 500", value: "5,892.31", change: "+1.14%", pts: "+66.43", up: true },
  { symbol: "NASDAQ COMPOSITE", value: "19,245.78", change: "+1.56%", pts: "+296.12", up: true },
  { symbol: "RUSSELL 2000", value: "2,134.56", change: "+0.45%", pts: "+9.56", up: true },
  { symbol: "NIFTY 50", value: "24,678.90", change: "-0.34%", pts: "-84.21", up: false },
  { symbol: "BSE SENSEX", value: "81,245.60", change: "-0.21%", pts: "-170.61", up: false },
  { symbol: "FTSE 100", value: "8,456.23", change: "+0.67%", pts: "+56.23", up: true },
  { symbol: "DAX (Germany)", value: "19,134.55", change: "+0.43%", pts: "+81.88", up: true },
  { symbol: "CAC 40 (France)", value: "7,823.45", change: "+0.31%", pts: "+24.22", up: true },
  { symbol: "NIKKEI 225", value: "39,876.34", change: "-0.55%", pts: "-219.32", up: false },
  { symbol: "HANG SENG", value: "18,456.78", change: "+2.13%", pts: "+383.56", up: true },
  { symbol: "SHANGHAI COMP", value: "3,187.45", change: "+0.89%", pts: "+28.12", up: true },
  { symbol: "CRUDE OIL (WTI)", value: "$78.45", change: "-1.23%", pts: "-0.97", up: false },
  { symbol: "BRENT CRUDE", value: "$82.31", change: "-1.05%", pts: "-0.87", up: false },
  { symbol: "GOLD", value: "$2,345.60", change: "+0.89%", pts: "+20.71", up: true },
  { symbol: "SILVER", value: "$29.87", change: "+1.23%", pts: "+0.36", up: true },
  { symbol: "BITCOIN", value: "$67,234.50", change: "+3.45%", pts: "+2,237", up: true },
  { symbol: "ETHEREUM", value: "$3,456.78", change: "+2.87%", pts: "+96.54", up: true },
  { symbol: "EUR/USD", value: "1.0876", change: "-0.12%", pts: "-0.001", up: false },
  { symbol: "USD/JPY", value: "149.34", change: "+0.34%", pts: "+0.51", up: true },
  { symbol: "US 10Y YIELD", value: "4.32%", change: "+0.05%", pts: "+0.05", up: true },
  { symbol: "US 2Y YIELD", value: "4.87%", change: "+0.03%", pts: "+0.03", up: true },
];

const financeHero = {
  category: "GLOBAL ECONOMY",
  title: "U.S. Equity Markets Rally on Strong Manufacturing Data ",
  excerpt:
    "U.S. equity markets extended a recovery rally into the first week of June, driven by stronger-than-expected domestic factory data and a continued surge in technology stocks. The ISM Manufacturing Index reached 54 for May, up 1.3 points from April's reading and exceeding the consensus Dow Jones estimate of 53.2. New orders rose 2.7 points to 56.8, while imports jumped to 53. The energy sector was the only other S&P 500 segment to finish in the green alongside technology on June 1.The performance underscores the resilience of U.S. corporate earnings despite ongoing global trade uncertainties and evolving tariff structures. Investors have rotated capital into sectors with strong AI and infrastructure exposure, with Nvidia, Microsoft, and a cluster of data center-linked names leading the rally. ",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: InsImg,
};

const financeHero1 = {
  category: "GLOBAL ECONOMY",
  title: "Berkshire Hathaway Acquires Home Builder Taylor Morrison for $6.8 Billion  ",
  excerpt:
    "Warren Buffett's Berkshire Hathaway has agreed to acquire Taylor Morrison Home Corporation in an all-cash deal valued at approximately $6.8 billion, marking the conglomerate's most significant real estate bet in years. The transaction reflects Berkshire's conviction that U.S. housing demand — particularly in the sunbelt and suburban markets — will remain structurally robust amid ongoing population growth and undersupply.Taylor Morrison operates in 11 states and is among the top 10 homebuilders in the United States by revenue. Berkshire's acquisition is expected to close in the second half of 2026, subject to regulatory approvals.  ",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: LN4Img,
};
const financeHero2 = {
  category: "GLOBAL ECONOMY",
  title: "Fertitta Entertainment to Acquire Caesars Entertainment for $17.6 Billion  ",
  excerpt:
    "Tilman Fertitta's Fertitta Entertainment has announced a landmark agreement to acquire Caesars Entertainment in a deal valued at approximately $17.6 billion, inclusive of Caesars' existing debt. The transaction is one of the largest in the gaming and hospitality sector in recent memory and would create a dominant force in the North American integrated resort industry.Fertitta, whose portfolio includes the Golden Nugget casino chain and the Houston Rockets NBA franchise, has long targeted Caesars as a strategic acquisition. The deal is expected to face scrutiny from gaming regulators in multiple states as well as the Federal Trade Commission, though analysts believe the transaction structure has been designed to address antitrust concerns. ",
  author: "Sagar Kumar",
    time: "2 hours ago",
  image: FIN3Img,
};
const financeHero3 = {
  category: "GLOBAL ECONOMY",
  title: "Scotiabank to Acquire Maple Financial in Wealth Expansion Play  ",
  excerpt:
    "Canada's Bank of Nova Scotia (Scotiabank) has entered a definitive agreement to acquire Maple Financial Group, a Toronto-based wealth and capital markets firm. The acquisition advances Scotiabank's strategic goal of deepening its domestic wealth management franchise after several years of international retrenchment. The combined business is expected to deliver meaningful cross-selling opportunities across Scotiabank's eight million-plus Canadian retail and commercial clients. ",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: FIN4Img,
};
const financeHero4 = {
  category: "GLOBAL ECONOMY",
  title: "AIG Moves to Acquire Everest Insurance Operations in Colombia",
  excerpt:
    "American International Group has announced an agreement to acquire Everest Group's insurance operations in Colombia, extending AIG's presence in Latin America's growing insurance market. The move follows AIG's earlier acquisition of strategic stakes in Convex Group and Onex Corporation, reflecting a broader strategy to diversify revenue streams through specialty and alternative investment channels.  ",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: FIN5Img,
};

const businessStories = [
  {
    id: 1,
    category: "MERGERS & ACQUISITIONS",
    title: "Amazon Acquires Nuclear Energy Company for $12B to Power AWS Data Centers",
    time: "1 hr ago",
    image: "https://images.unsplash.com/photo-1679583721525-658d164e609b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    category: "BANKING",
    title: "JPMorgan Reports Record $18.2B Quarterly Profit as Trading Revenue Surges",
    time: "3 hrs ago",
    image: "https://images.unsplash.com/photo-1648275913341-7973ae7bc9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const leadershipStories = [
  { id: 1, name: "Satya Nadella", title: "Microsoft CEO", quote: "AI will generate more value than the industrial revolution in a shorter time frame.", action: "Read Full Interview" },
  { id: 2, name: "Mary Barra", title: "General Motors CEO", quote: "We're not just building cars anymore — we're building the future of mobility and energy.", action: "Read Full Interview" },
  { id: 3, name: "Sundar Pichai", title: "Alphabet CEO", quote: "The AI opportunity is bigger than the internet, mobile, and cloud combined.", action: "Read Full Interview" },
];

const economyTopics = [
  { id: 1, title: "ECB raises rates amid renewed inflation concerns as AI infrastructure spending keeps market volatility elevated.", time: "Just now" },
  { id: 2, title: "Fed Holds Rates at 4.75% — Markets Price in Three Cuts by Year-End", time: "2 hrs ago" },
  { id: 3, title: "US Inflation Falls to 2.1%, Lowest Level Since Pre-Pandemic Era", time: "4 hrs ago" },
  { id: 3, title: "China's GDP Growth Hits 5.1% in Q1, Beats Consensus Estimate", time: "5 hrs ago" },
  { id: 4, title: "India's Foreign Exchange Reserves Cross $700 Billion for First Time", time: "6 hrs ago" },
  { id: 5, title: "Eurozone Manufacturing PMI Rebounds to 52.4, Signaling Recovery", time: "8 hrs ago" },
  { id: 6, title: "ASEAN Trade Volume Sets Record at $4.2 Trillion in 2025", time: "10 hrs ago" },
];

export function FinancePage() {
  return (
    <main className="max-w-screen-xl mx-auto px-3 sm:px-4 py-4 md:py-6">
      {/* Page title */}
      <div className="border-b-4 border-black mb-6 pb-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Markets & Business</span>
        <h1 className="mt-0.5">Finance & Business News</h1>
      </div>

      {/* Quick market badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { icon: BarChart2, label: "Markets", color: "bg-blue-50 text-blue-700" },
          { icon: DollarSign, label: "Economy", color: "bg-green-50 text-green-700" },
          { icon: Globe, label: "Global Trade", color: "bg-purple-50 text-purple-700" },
          { icon: Briefcase, label: "Corporate News", color: "bg-orange-50 text-orange-700" },
        ].map(({ icon: Icon, label, color }) => (
          <span key={label} className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${color}`}>
            <Icon size={12} /> {label}
          </span>
        ))}
      </div>

      {/* Hero + market table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={financeHero.image}
                alt={financeHero.title}
                className="w-full h-52 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{financeHero.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 text-xl md:text-3xl leading-tight">{financeHero.title}</h1>
            <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">{financeHero.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {financeHero.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {financeHero.time}</span>
            </div>
          </div>
          </div>
          </div>
        </div>
        

        {/* S&P chart */}
        <div>
          <div className="border border-gray-200 rounded p-3 md:p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">S&P 500</p>
                <p className="text-xl">5,892.31</p>
              </div>
              <span className="text-green-600 text-sm flex items-center gap-1">
                <TrendingUp size={14} /> +1.14%
              </span>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={spData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 9 }} />
                <YAxis tick={{ fontSize: 9 }} domain={["dataMin - 200", "dataMax + 100"]} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-2 text-center">12-Month Performance (2025–2026)</p>
          </div>
        </div>
      </div>
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={financeHero1.image}
                alt={financeHero1.title}
                className="w-full h-52 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{financeHero1.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 leading-tight">{financeHero1.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{financeHero1.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {financeHero1.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {financeHero1.time}</span>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
       


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={financeHero2.image}
                alt={financeHero2.title}
                className="w-full h-52 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{financeHero2.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 leading-tight">{financeHero2.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{financeHero2.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {financeHero2.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {financeHero2.time}</span>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
    

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={financeHero3.image}
                alt={financeHero3.title}
                className="w-full h-52 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{financeHero3.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 leading-tight">{financeHero3.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{financeHero3.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {financeHero3.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {financeHero3.time}</span>
            </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-42">
          <div className="mt-4 border border-gray-700 bg-slate-200 flex flex-col md:flex-row">
<div className="h-3 md:h-auto md:w-24 border-b md:border-b-0 md:border-r border-gray-700 bg-slate-300"></div>

  <div className="p-2 md:p-3">
    <p className="italic text-sm leading-relaxed text-gray-900">
      "M&A is reopening, but unevenly. Capital is increasingly flowing across industrials, financial services, energy, and health into businesses positioned at the intersection of innovation, scale, and long-term growth." 
    </p>

    <p className="mt-2 font-bold text-gray-900">
      — PwC Global M&A Trends 2026 
    </p>
  </div>
  </div>
  </div>
  </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={financeHero4.image}
                alt={financeHero4.title}
                className="w-full h-52 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{financeHero4.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 leading-tight">{financeHero4.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{financeHero4.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {financeHero4.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {financeHero4.time}</span>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>

      {/* Full markets table */}
      <div className="mb-8" id="markets">
        <SectionHeader title="Global Markets Overview" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Index / Asset</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Price</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Change</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fullMarkets.map((m) => (
                <tr key={m.symbol} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2.5 text-sm">{m.symbol}</td>
                  <td className="py-2.5 text-right">{m.value}</td>
                  <td className="py-2.5 text-right">
                    <span className={`flex items-center justify-end gap-1 ${m.up ? "text-green-600" : "text-red-600"}`}>
                      {m.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {m.change}
                    </span>
                  </td>
                  <td className={`py-2.5 text-right hidden sm:table-cell ${m.up ? "text-green-600" : "text-red-600"}`}>
                    {m.pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Business stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {businessStories.map((s) => (
          <div key={s.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-3">
              <ImageWithFallback
                src={s.image}
                alt={s.title}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{s.category}</span>
            <h3 className="mt-1 group-hover:text-red-600 transition-colors leading-snug">{s.title}</h3>
            <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} /> {s.time}</span>
          </div>
        ))}
      </div>

      {/* Economy + Leadership two column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Economy news */}
        <div>
          <SectionHeader title="Economy & Policy" />
          <div className="divide-y divide-gray-100">
            {economyTopics.map((item) => (
              <div key={item.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors leading-snug">{item.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} /> {item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership interviews */}
        <div id="leadership">
          <SectionHeader title="Leadership Voices" />
          <div className="flex flex-col gap-4">
            {leadershipStories.map((l) => (
              <div key={l.id} className="border border-gray-200 rounded p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-gray-600">{l.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{l.name}</p>
                    <p className="text-xs text-gray-500">{l.title}</p>
                  </div>
                </div>
                <blockquote className="border-l-2 border-red-600 pl-3 mt-3 text-sm text-gray-600 italic">
                  "{l.quote}"
                </blockquote>
                <button className="mt-2 text-xs text-red-600 hover:underline">{l.action}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad placeholder */}
      <div className="border border-dashed border-gray-300 rounded h-20 flex items-center justify-center text-gray-400 text-sm mb-4">
        Advertisement
      </div>
    </main>
  );
}
