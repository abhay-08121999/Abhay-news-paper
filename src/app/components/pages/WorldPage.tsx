import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Globe, AlertTriangle, ChevronRight } from "lucide-react";

function SectionHeader({ title, id, subtitle }: { title: string; id?: string; subtitle?: string }) {
  return (
    <div id={id} className="border-b-2 border-black pb-2 mb-4">
      <h2 className="uppercase tracking-wider">{title}</h2>
      {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}

const worldHero = {
  category: "WHITE HOUSE WATCH",
  title: "President Orders Sweeping Trade Negotiations with 15 Nations — Biggest Diplomatic Push in a Decade",
  excerpt:
    "A historic economic summit convenes at Camp David as the administration seeks to reshape global trade architecture, targeting $2 trillion in new bilateral agreements spanning Asia, Europe, and the Americas.",
  author: "Sagar Kumar",
  time: "1 hour ago",
  image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

const whiteHouseNews = [
  { id: 1, title: "Administration Proposes $500B Infrastructure Revival Act, Largest Since New Deal", time: "3 hrs ago", label: "Policy" },
  { id: 2, title: "White House Cybersecurity Advisor Warns of Elevated Nation-State Threat Level", time: "5 hrs ago", label: "Security" },
  { id: 3, title: "Executive Order Targets AI Chip Export Controls to Adversary Nations", time: "7 hrs ago", label: "Tech Policy" },
  { id: 4, title: "Treasury Department Issues New Sanctions on Russian Energy Sector", time: "9 hrs ago", label: "Sanctions" },
  { id: 5, title: "White House Council of Economic Advisors Raises GDP Forecast to 2.8%", time: "11 hrs ago", label: "Economy" },
  { id: 6, title: "President Nominates Former Fed Governor as Next Commerce Secretary", time: "13 hrs ago", label: "Appointments" },
];

const globalRegions = [
  {
    region: "Asia Pacific",
    stories: [
      { id: 1, title: "India-US Strategic Partnership Elevates to 'Comprehensive Global Alliance' Status", time: "2 hrs ago" },
      { id: 2, title: "China's PBOC Cuts Reserve Requirements to Boost Sluggish Property Market", time: "4 hrs ago" },
      { id: 3, title: "ASEAN Summit Agrees on New Regional Currency Swap Framework", time: "6 hrs ago" },
      { id: 4, title: "Japan Ramps Up Defense Budget to Record 2.3% of GDP", time: "8 hrs ago" },
    ],
  },
  {
    region: "Europe",
    stories: [
      { id: 1, title: "EU Announces €500B Defence and Security Investment Plan for 2026–2030", time: "3 hrs ago" },
      { id: 2, title: "Germany's New Government Unveils €200B Economic Modernisation Package", time: "5 hrs ago" },
      { id: 3, title: "NATO Summit Agrees to Expand Rapid Reaction Force to 500,000 Troops", time: "7 hrs ago" },
      { id: 4, title: "UK-EU Trade Deal Enters Final Ratification Stage After 3-Year Negotiation", time: "9 hrs ago" },
    ],
  },
  {
    region: "Middle East & Africa",
    stories: [
      { id: 1, title: "Saudi Arabia's Vision 2030 Surpasses Economic Diversification Targets by 40%", time: "4 hrs ago" },
      { id: 2, title: "UAE Launches World's First Carbon-Negative Industrial Free Zone", time: "6 hrs ago" },
      { id: 3, title: "African Continental Free Trade Area Reports $300B in Intra-Africa Trade", time: "8 hrs ago" },
      { id: 4, title: "Egypt's New Administrative Capital Becomes Hub for Global Tech Investment", time: "10 hrs ago" },
    ],
  },
  {
    region: "Americas",
    stories: [
      { id: 1, title: "Brazil's Lula Unveils Amazon Digital Economy Initiative Worth $80B", time: "3 hrs ago" },
      { id: 2, title: "Mexico Surpasses China as US's Largest Trading Partner for Third Consecutive Year", time: "5 hrs ago" },
      { id: 3, title: "Canada's AI Investment Fund Attracts $12B in International Capital", time: "7 hrs ago" },
      { id: 4, title: "G7 Leaders Agree on New Framework for Regulating Global AI Development", time: "9 hrs ago" },
    ],
  },
];

const geopoliticsAlerts = [
  { id: 1, severity: "high", title: "Taiwan Strait Tension Rises as China Conducts Military Exercises", region: "Asia Pacific" },
  { id: 2, severity: "medium", title: "Iran Nuclear Talks Stall Again; IAEA Calls for Emergency Session", region: "Middle East" },
  { id: 3, severity: "low", title: "South China Sea Territorial Dispute Referred to International Court", region: "Asia Pacific" },
  { id: 4, severity: "medium", title: "Sudan Peace Agreement Unravels as Conflict Spreads to New Regions", region: "Africa" },
];

const unResolutions = [
  { id: 1, title: "UN Security Council Passes Historic Resolution on AI Weapons Systems Governance", votes: "14–1" },
  { id: 2, title: "General Assembly Votes 187-2 for Global Plastic Treaty with Binding Targets", votes: "187–2" },
  { id: 3, title: "WHO Declares End to Global Health Emergency Framework for COVID-Related Viruses", votes: "Unanimous" },
];

const diplomacyTracker = [
  { country1: "USA", country2: "India", status: "Active", type: "Technology Partnership", date: "May 2026" },
  { country1: "EU", country2: "UK", status: "Finalizing", type: "Trade Agreement", date: "May 2026" },
  { country1: "China", country2: "Russia", status: "Signed", type: "Energy Deal", date: "Apr 2026" },
  { country1: "Brazil", country2: "EU", status: "Negotiating", type: "Mercosur Trade", date: "Mar 2026" },
  { country1: "Japan", country2: "S. Korea", status: "Active", type: "Security Pact", date: "Feb 2026" },
];

const severityColor: Record<string, string> = {
  high: "bg-red-100 text-red-700 border-red-200",
  medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  low: "bg-blue-50 text-blue-700 border-blue-200",
};

export function WorldPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Page title */}
      <div className="border-b-4 border-black mb-6 pb-2 flex items-start gap-3">
        <Globe size={24} className="mt-1 flex-shrink-0" />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Global Coverage</span>
          <h1 className="mt-0.5">World & Geopolitics</h1>
        </div>
      </div>

      {/* Hero + White House sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Hero */}
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={worldHero.image}
                alt={worldHero.title}
                className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{worldHero.category}</span>
            <h1 className="mt-2 leading-tight">{worldHero.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{worldHero.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {worldHero.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {worldHero.time}</span>
            </div>
          </div>
        </div>

        {/* White House Watch */}
        <div>
          <div className="bg-gray-900 text-white rounded p-4">
            <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-300 uppercase tracking-widest">White House Watch</span>
            </div>
            <div className="divide-y divide-gray-700">
              {whiteHouseNews.map((item) => (
                <div key={item.id} className="py-2.5 group cursor-pointer">
                  <span className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded mb-1 inline-block">
                    {item.label}
                  </span>
                  <p className="text-sm text-gray-200 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </p>
                  <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Clock size={10} /> {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Geopolitics alerts */}
      <div className="mb-8">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
          <AlertTriangle size={16} className="text-red-600" />
          <h2 className="uppercase tracking-wider">Geopolitical Risk Monitor</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {geopoliticsAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`border rounded p-3 flex items-start gap-3 ${severityColor[alert.severity]}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle size={14} />
              </div>
              <div>
                <p className="text-sm leading-snug">{alert.title}</p>
                <span className="text-xs opacity-70 mt-1 block">{alert.region} · {alert.severity.toUpperCase()} risk</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional news 2x2 grid */}
      <div className="mb-8">
        <SectionHeader title="Regional Coverage" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {globalRegions.map((region) => (
            <div key={region.region}>
              <div className="flex items-center gap-2 mb-3">
                <Globe size={14} className="text-gray-400" />
                <h3 className="uppercase tracking-wider text-sm">{region.region}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {region.stories.map((s) => (
                  <div key={s.id} className="py-2.5 group cursor-pointer">
                    <p className="text-sm leading-snug group-hover:text-red-600 transition-colors">{s.title}</p>
                    <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} /> {s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UN + Diplomacy tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* UN resolutions */}
        <div>
          <SectionHeader title="UN & International Bodies" />
          <div className="flex flex-col gap-3">
            {unResolutions.map((r) => (
              <div key={r.id} className="border border-gray-200 rounded p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm leading-snug">{r.title}</p>
                  <span className="text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap flex-shrink-0">
                    {r.votes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diplomacy tracker */}
        <div>
          <SectionHeader title="Diplomacy Tracker" subtitle="Active negotiations & agreements" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-xs text-gray-500 font-normal">Parties</th>
                  <th className="text-left py-2 text-xs text-gray-500 font-normal">Type</th>
                  <th className="text-right py-2 text-xs text-gray-500 font-normal">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {diplomacyTracker.map((d, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-2.5 text-sm">
                      {d.country1} — {d.country2}
                    </td>
                    <td className="py-2.5 text-xs text-gray-500">{d.type}</td>
                    <td className="py-2.5 text-right">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          d.status === "Signed"
                            ? "bg-green-100 text-green-700"
                            : d.status === "Active"
                            ? "bg-blue-100 text-blue-700"
                            : d.status === "Finalizing"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
