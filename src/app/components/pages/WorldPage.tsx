import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Globe, AlertTriangle } from "lucide-react";

function SectionHeader({ title, id, subtitle }: { title: string; id?: string; subtitle?: string }) {
  return (
    <div id={id} className="flex items-end justify-between border-b-2 border-black pb-2.5 mb-5">
      <div>
        <h2 className="uppercase tracking-[0.15em] text-sm font-semibold">{title}</h2>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <span className="hidden sm:block h-px flex-1 max-w-16 bg-gray-200 ml-4 mb-1.5" />
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
  image:
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
  high: "bg-red-50 text-red-700 border-red-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  low: "bg-sky-50 text-sky-700 border-sky-200",
};

const severityDot: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-sky-500",
};

const statusColor: Record<string, string> = {
  Signed: "bg-emerald-100 text-emerald-700",
  Active: "bg-sky-100 text-sky-700",
  Finalizing: "bg-amber-100 text-amber-700",
};

export function WorldPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      {/* Page title */}
      <div className="border-b-4 border-black mb-12 pb-4 flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 shadow-sm">
          <Globe size={17} className="text-red-500" />
        </div>
        <div>
          <span className="text-xs text-red-600 uppercase tracking-[0.22em] font-semibold">Global Coverage</span>
          <h1 className="mt-0.5 font-serif tracking-tight">World &amp; Geopolitics</h1>
        </div>
      </div>

      {/* Hero + White House sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        {/* Hero */}
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded-sm mb-5 shadow-sm ring-1 ring-black/5">
            <ImageWithFallback
              src={worldHero.image}
              alt={worldHero.title}
              className="w-full h-72 lg:h-96 object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider font-semibold">{worldHero.category}</span>
          <h3 className="mt-2.5 leading-tight font-serif text-2xl md:text-3xl group-hover:text-red-700 transition-colors duration-300">
            {worldHero.title}
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{worldHero.excerpt}</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
            <span className="font-medium text-gray-500">By {worldHero.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1">
              <Clock size={10} /> {worldHero.time}
            </span>
          </div>
        </div>

        {/* White House Watch */}
        <div>
          <div className="bg-slate-950 text-white rounded-sm overflow-hidden shadow-md ring-1 ring-black/10">
            <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-white/10">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-300 uppercase tracking-[0.15em] font-semibold">
                White House Watch
              </span>
            </div>
            <div className="divide-y divide-white/5 px-4">
              {whiteHouseNews.map((item) => (
                <div key={item.id} className="py-3 group cursor-pointer">
                  <span className="text-[10px] bg-white/10 text-slate-300 px-1.5 py-0.5 rounded-sm mb-1.5 inline-block uppercase tracking-wide font-medium">
                    {item.label}
                  </span>
                  <p className="text-sm text-slate-200 leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </p>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1.5">
                    <Clock size={10} /> {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-3" />
          </div>
        </div>
      </div>

      {/* Geopolitics alerts */}
      <div className="mb-14">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-5">
          <AlertTriangle size={15} className="text-red-600" />
          <h2 className="uppercase tracking-[0.15em] text-sm font-semibold">Geopolitical Risk Monitor</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {geopoliticsAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`border rounded-sm p-4 flex items-start gap-3 transition-shadow hover:shadow-sm ${
                severityColor[alert.severity]
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${severityDot[alert.severity]}`} />
              <div>
                <p className="text-sm leading-snug text-gray-900">{alert.title}</p>
                <span className="text-xs opacity-70 mt-1.5 block tracking-wide">
                  {alert.region} · {alert.severity.toUpperCase()} risk
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional news 2x2 grid */}
      <div className="mb-14">
        <SectionHeader title="Regional Coverage" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
          {globalRegions.map((region) => (
            <div key={region.region}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                <Globe size={13} className="text-gray-400" />
                <h3 className="uppercase tracking-[0.12em] text-xs font-semibold text-gray-700">{region.region}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {region.stories.map((s) => (
                  <div
                    key={s.id}
                    className="py-3 pl-3 -ml-3 border-l-2 border-l-transparent hover:border-l-red-500 hover:bg-red-50/40 transition-all duration-200 group cursor-pointer rounded-r-sm"
                  >
                    <p className="text-sm leading-snug text-gray-900 group-hover:text-red-700 transition-colors">
                      {s.title}
                    </p>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-1.5 tracking-wide">
                      <Clock size={10} /> {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UN + Diplomacy tracker */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6">
        {/* UN resolutions */}
        <div>
          <SectionHeader title="UN & International Bodies" />
          <div className="flex flex-col gap-3.5">
            {unResolutions.map((r) => (
              <div
                key={r.id}
                className="border border-gray-200 rounded-sm p-4 hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm leading-snug text-gray-900">{r.title}</p>
                  <span className="text-xs bg-black text-white px-2.5 py-1 rounded-sm whitespace-nowrap shrink-0 font-mono tabular-nums">
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
          <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-slate-50">
                  <th className="text-left py-2.5 px-4 text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    Parties
                  </th>
                  <th className="text-left py-2.5 px-3 text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    Type
                  </th>
                  <th className="text-right py-2.5 px-4 text-xs text-gray-500 font-semibold uppercase tracking-wide">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {diplomacyTracker.map((d, i) => (
                  <tr key={i} className="hover:bg-amber-50/30 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-900 font-medium">
                      {d.country1} — {d.country2}
                    </td>
                    <td className="py-3 px-3 text-xs text-gray-500">{d.type}</td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-sm font-medium ${
                          statusColor[d.status] ?? "bg-gray-100 text-gray-600"
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
    </main>
  );
}
