import { Clock, Zap, ChevronRight, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const allBreakingNews = [
  { id: 1, category: "FINANCE", title: "Federal Reserve Announces Surprise 50bps Rate Cut — Biggest in 4 Years", time: "3 min ago", hot: true, priority: "BREAKING", path: "/finance" },
  { id: 2, category: "TECHNOLOGY", title: "OpenAI Launches GPT-5 — Claims Surpasses PhD-Level Performance on All Academic Benchmarks", time: "12 min ago", hot: true, priority: "BREAKING", path: "/technology" },
  { id: 3, category: "WORLD", title: "G20 Emergency Summit Called as Three Major Conflicts Converge", time: "18 min ago", hot: true, priority: "URGENT", path: "/world" },
  { id: 4, category: "MARKETS", title: "S&P 500 Surges 3.2% After Fed Cut — Biggest Single-Day Rally of 2026", time: "24 min ago", hot: true, priority: "BREAKING", path: "/finance" },
  { id: 5, category: "INDIA", title: "RBI Follows Fed with 25bps Cut — Sensex Up 1,400 Points", time: "31 min ago", hot: false, priority: "URGENT", path: "/finance" },
  { id: 6, category: "TECHNOLOGY", title: "Apple Announces 'Reality Pro 2' AR Headset — Ships in 60 Days at $2,499", time: "45 min ago", hot: false, priority: "URGENT", path: "/technology" },
  { id: 7, category: "ENERGY", title: "OPEC+ Emergency Meeting Called — Oil Falls 4% on Demand Fears", time: "52 min ago", hot: false, priority: "URGENT", path: "/energy" },
  { id: 8, category: "CYBERSECURITY", title: "Critical Infrastructure Breach Hits US Power Grid — FBI, CISA Respond", time: "1 hr ago", hot: false, priority: "BREAKING", path: "/cybersecurity" },
  { id: 9, category: "BILLIONAIRES", title: "Jensen Huang's Net Worth Crosses $200 Billion — Joins Ultra-Exclusive Club", time: "1 hr ago", hot: false, priority: "NEWS", path: "/billionaires" },
  { id: 10, category: "HEALTHCARE", title: "WHO Declares New MPOX Strain Public Health Emergency — 14 Countries Affected", time: "1 hr ago", hot: false, priority: "URGENT", path: "/healthcare" },
  { id: 11, category: "MANUFACTURING", title: "TSMC Arizona Fab Achieves 2nm Production Milestone — First Outside Taiwan", time: "2 hrs ago", hot: false, priority: "NEWS", path: "/manufacturing" },
  { id: 12, category: "SUPPLY CHAIN", title: "Red Sea Hostilities Intensify — Container Rates Jump 18% Overnight", time: "2 hrs ago", hot: false, priority: "URGENT", path: "/supply-chain" },
  { id: 13, category: "WORLD", title: "India-Pakistan Border Tensions Ease After US-Brokered Ceasefire Agreement", time: "2 hrs ago", hot: false, priority: "BREAKING", path: "/world" },
  { id: 14, category: "SMART CITIES", title: "Dubai's AI-Powered City Brain Prevents Major Infrastructure Failure Automatically", time: "3 hrs ago", hot: false, priority: "NEWS", path: "/smart-cities" },
  { id: 15, category: "FINANCE", title: "Goldman Sachs Reports $23.4B Record Quarter — Beats All Analyst Estimates", time: "3 hrs ago", hot: false, priority: "NEWS", path: "/finance" },
  { id: 16, category: "TECHNOLOGY", title: "Meta Acquires Quantum Computing Startup IonQ for $8.7B", time: "3 hrs ago", hot: false, priority: "NEWS", path: "/technology" },
  { id: 17, category: "ENERGY", title: "Germany Restarts Three Nuclear Plants Amid Energy Crisis Concerns", time: "4 hrs ago", hot: false, priority: "URGENT", path: "/energy" },
  { id: 18, category: "BILLIONAIRES", title: "Mukesh Ambani Opens World's Largest Retail Mall in Mumbai — 4.5M Sq Ft", time: "4 hrs ago", hot: false, priority: "NEWS", path: "/billionaires" },
  { id: 19, category: "HEALTHCARE", title: "Pfizer's Universal Flu Vaccine Shows 91% Efficacy Across All Strains — Huge Commercial Potential", time: "4 hrs ago", hot: false, priority: "NEWS", path: "/healthcare" },
  { id: 20, category: "WORLD", title: "EU Parliament Votes 523-87 to Admit Ukraine as Full Member State", time: "5 hrs ago", hot: false, priority: "BREAKING", path: "/world" },
];

const priorityColor: Record<string, string> = {
  BREAKING: "bg-red-600 text-white",
  URGENT: "bg-orange-500 text-white",
  NEWS: "bg-gray-800 text-white",
};

export function BreakingNewsPage() {
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setTicker((t) => (t + 1) % allBreakingNews.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="py-6">
      {/* Live indicator */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-4 border-black">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
          <Zap size={18} className="text-red-600" />
        </div>
        <div>
          <h1 className="text-2xl leading-tight">Breaking News</h1>
          <p className="text-xs text-gray-500">Live updates · Refreshing automatically · May 22, 2026</p>
        </div>
        <span className="ml-auto text-xs bg-red-600 text-white px-3 py-1 rounded animate-pulse">LIVE</span>
      </div>

      {/* Top 3 featured breaking stories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {allBreakingNews.slice(0, 3).map((item) => (
          <Link key={item.id} to={item.path} className="border-l-4 border-red-600 pl-4 group">
            <span className={`text-xs px-2 py-0.5 rounded ${priorityColor[item.priority]}`}>{item.priority}</span>
            <h3 className="mt-2 leading-snug group-hover:text-red-600 transition-colors">{item.title}</h3>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
              <span className="uppercase tracking-wider">{item.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={10} />{item.time}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Full feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border-b border-gray-200 pb-2 mb-4 flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-wider">All Breaking Stories</h2>
            <span className="text-xs text-gray-400">{allBreakingNews.length} stories</span>
          </div>
          <div className="divide-y divide-gray-100">
            {allBreakingNews.map((item) => (
              <Link key={item.id} to={item.path} className="flex items-start gap-3 py-3 group hover:bg-gray-50 px-1 rounded transition-colors -mx-1">
                <span className={`text-xs px-1.5 py-0.5 rounded whitespace-nowrap flex-shrink-0 mt-0.5 ${priorityColor[item.priority]}`}>
                  {item.priority}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm leading-snug group-hover:text-red-600 transition-colors">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <span className="text-red-600 uppercase tracking-wider">{item.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={10} />{item.time}</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-gray-300 flex-shrink-0 mt-1 group-hover:text-red-600 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Live ticker sidebar */}
        <div>
          <div className="bg-black text-white rounded p-4 sticky top-20">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-wider">News Ticker</span>
            </div>
            <div className="min-h-24 mb-4">
              <span className={`text-xs px-1.5 py-0.5 rounded ${priorityColor[allBreakingNews[ticker].priority]}`}>
                {allBreakingNews[ticker].priority}
              </span>
              <p className="text-sm text-white mt-2 leading-snug">{allBreakingNews[ticker].title}</p>
              <span className="text-xs text-gray-400 mt-2 block">{allBreakingNews[ticker].time}</span>
            </div>
            <div className="flex gap-1 mb-4">
              {allBreakingNews.slice(0, 8).map((_, i) => (
                <div key={i} className={`h-0.5 flex-1 rounded ${i === ticker % 8 ? "bg-red-600" : "bg-gray-700"}`} />
              ))}
            </div>
            <div className="border-t border-gray-700 pt-3">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Trending Topics</p>
              <div className="flex flex-wrap gap-1.5">
                {["Fed Cut", "AI Wars", "OPEC", "Ukraine EU", "NVIDIA", "Red Sea", "RBI"].map((t) => (
                  <span key={t} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                    <TrendingUp size={8} className="inline mr-1" />{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
