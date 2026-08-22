import { Clock, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "WHITE HOUSE WATCH",
  title: "President Signs Executive Order Establishing $500B National AI Infrastructure Fund — Largest Government Tech Investment in US History",
  excerpt: "The order establishes a bipartisan National AI Commission, mandates AI integration across all federal agencies within 24 months, and creates tax incentives for AI R&D investment. Congress is expected to approve the funding package in a separate vote.",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const administrationActions = [
  { id: 1, type: "EXECUTIVE ORDER", title: "EO 14298: National AI Infrastructure Investment and Governance Framework", date: "May 22, 2026", impact: "High" },
  { id: 2, type: "STATEMENT", title: "White House Issues Statement on Cybersecurity Breach of Federal Systems", date: "May 21, 2026", impact: "High" },
  { id: 3, type: "TRADE POLICY", title: "USTR Announces New Tariff Framework for Semiconductor Imports from China", date: "May 20, 2026", impact: "High" },
  { id: 4, type: "APPOINTMENT", title: "Senate Confirms New Treasury Secretary in 78-21 Vote", date: "May 19, 2026", impact: "Medium" },
  { id: 5, type: "PRESS BRIEFING", title: "Press Secretary: No Recession Expected Despite Q1 GDP Miss", date: "May 18, 2026", impact: "Medium" },
];

const policyTrackers = [
  { policy: "AI Governance Bill", status: "In Committee", progress: 65, chamber: "Senate" },
  { policy: "$500B Infrastructure Fund", status: "Executive Order Signed", progress: 100, chamber: "White House" },
  { policy: "CHIPS Act Extension", status: "Floor Vote Pending", progress: 85, chamber: "House" },
  { policy: "Financial Regulation Reform", status: "Subcommittee Markup", progress: 40, chamber: "Senate" },
  { policy: "Clean Energy Tax Credits 2.0", status: "Conference Committee", progress: 90, chamber: "Both" },
];

const economicData = [
  { metric: "GDP Growth (Q1 2026)", value: "2.8%", prev: "3.1%", delta: "-0.3%" },
  { metric: "Unemployment Rate", value: "3.6%", prev: "3.8%", delta: "-0.2%" },
  { metric: "Core Inflation (CPI)", value: "2.1%", prev: "2.4%", delta: "-0.3%" },
  { metric: "Federal Funds Rate", value: "4.75%", prev: "5.25%", delta: "-0.50%" },
  { metric: "10Y Treasury Yield", value: "4.32%", prev: "4.27%", delta: "+0.05%" },
  { metric: "Federal Deficit (FY2026)", value: "$1.87T", prev: "$1.69T", delta: "+$180B" },
];

const latestNews = [
  { id: 1, title: "White House Cybersecurity Advisor Raises Threat Level to 'Elevated' After Grid Breach", time: "1 hr ago" },
  { id: 2, title: "Administration Begins Formal Trade Negotiations with 15 Nations Simultaneously", time: "3 hrs ago" },
  { id: 3, title: "President Orders Review of All Federal Contracts with Companies Having Ties to China", time: "5 hrs ago" },
  { id: 4, title: "NSC Convenes Emergency Meeting Over Escalating Situation in South China Sea", time: "7 hrs ago" },
  { id: 5, title: "White House Budget Office Projects $2.1T Deficit for FY2027 — Markets React Negatively", time: "9 hrs ago" },
  { id: 6, title: "President Meets with Top 20 CEOs to Discuss AI Job Displacement Solutions", time: "11 hrs ago" },
];

const impactColor: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-yellow-50 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

export function WhiteHouseWatchPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500 uppercase tracking-widest">Live Coverage</span>
        </div>
        <h1 className="mt-0.5">White House Watch</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero.image} alt={hero.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
          <h1 className="mt-2 leading-tight">{hero.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>

        {/* Policy tracker */}
        <div>
          <SH title="Policy Tracker" />
          <div className="flex flex-col gap-3">
            {policyTrackers.map((p) => (
              <div key={p.policy} className="border border-gray-200 rounded p-3">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm leading-snug">{p.policy}</p>
                  <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">{p.chamber}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{p.status}</p>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-black h-1.5 rounded-full" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Administration actions */}
      <div className="mb-8">
        <SH title="Administration Actions" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Type</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Action</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Date</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {administrationActions.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="py-2.5 text-xs text-gray-500 whitespace-nowrap">{a.type}</td>
                  <td className="py-2.5 group-hover:text-red-600 transition-colors">{a.title}</td>
                  <td className="py-2.5 text-xs text-gray-400 hidden md:table-cell">{a.date}</td>
                  <td className="py-2.5 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded ${impactColor[a.impact]}`}>{a.impact}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Economic dashboard + latest news */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Key Economic Indicators" />
          <div className="divide-y divide-gray-100">
            {economicData.map((e) => (
              <div key={e.metric} className="py-2.5 flex items-center justify-between">
                <p className="text-sm">{e.metric}</p>
                <div className="text-right">
                  <p className="text-sm">{e.value}</p>
                  <p className={`text-xs ${e.delta.startsWith("-") ? "text-green-600" : "text-red-600"}`}>{e.delta} vs prev</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Latest from the White House" />
          <div className="divide-y divide-gray-100">
            {latestNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
