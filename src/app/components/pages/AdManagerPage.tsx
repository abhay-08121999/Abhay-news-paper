import { useState } from "react";
import {
  BarChart2, DollarSign, Eye, MousePointer, TrendingUp, TrendingDown,
  Plus, Edit2, Trash2, Pause, Play, CheckCircle, AlertCircle, Clock,
  ToggleLeft, ToggleRight, Settings, Filter, Download, RefreshCw,
  Globe, Smartphone, Monitor, Video, MessageCircle, Star, List
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

// ── Mock campaign data ────────────────────────────────────────────
const campaigns = [
  { id: "C001", name: "Reliance Industries Brand Awareness", advertiser: "Reliance Industries", budget: 25000, spent: 14320, startDate: "May 1, 2026", endDate: "May 31, 2026", status: "active" as const, type: "banner", impressions: 284500, clicks: 2132, ctr: 0.75, targeting: "India", pages: ["/", "/technology", "/finance"] },
  { id: "C002", name: "Infosys Topaz AI Platform", advertiser: "Infosys", budget: 12000, spent: 9840, startDate: "May 10, 2026", endDate: "May 25, 2026", status: "active" as const, type: "sponsored", impressions: 67200, clicks: 1344, ctr: 2.0, targeting: "Global", pages: ["/technology", "/innovation"] },
  { id: "C003", name: "HDFC Bank Digital Banking Q2", advertiser: "HDFC Bank", budget: 18000, spent: 18000, startDate: "Apr 15, 2026", endDate: "May 15, 2026", status: "expired" as const, type: "sidebar", impressions: 412000, clicks: 3090, ctr: 0.75, targeting: "India", pages: ["*"] },
  { id: "C004", name: "Microsoft Azure Cloud Solutions", advertiser: "Microsoft", budget: 30000, spent: 4200, startDate: "May 20, 2026", endDate: "Jun 20, 2026", status: "active" as const, type: "video", impressions: 31400, clicks: 943, ctr: 3.0, targeting: "Global", pages: ["/technology", "/cybersecurity"] },
  { id: "C005", name: "Goldman Sachs Wealth Management", advertiser: "Goldman Sachs", budget: 18500, spent: 6300, startDate: "May 15, 2026", endDate: "Jun 15, 2026", status: "active" as const, type: "sponsored", impressions: 42100, clicks: 842, ctr: 2.0, targeting: "Global", pages: ["/finance", "/billionaires"] },
  { id: "C006", name: "Bajaj Finserv WhatsApp Campaign", advertiser: "Bajaj Finserv", budget: 5000, spent: 1200, startDate: "May 18, 2026", endDate: "May 30, 2026", status: "paused" as const, type: "whatsapp", impressions: 8900, clicks: 267, ctr: 3.0, targeting: "India", pages: ["/finance", "/markets"] },
  { id: "C007", name: "Tata Group Brand Month", advertiser: "Tata Group", budget: 20000, spent: 0, startDate: "Jun 1, 2026", endDate: "Jun 30, 2026", status: "pending_review" as const, type: "banner", impressions: 0, clicks: 0, ctr: 0, targeting: "Global", pages: ["/", "/technology", "/manufacturing"] },
];

const revenueByDay = [
  { day: "May 15", adsense: 320, direct: 840, sponsored: 1200 },
  { day: "May 16", adsense: 295, direct: 920, sponsored: 1800 },
  { day: "May 17", adsense: 340, direct: 780, sponsored: 900 },
  { day: "May 18", adsense: 380, direct: 1100, sponsored: 2100 },
  { day: "May 19", adsense: 410, direct: 890, sponsored: 1600 },
  { day: "May 20", adsense: 355, direct: 1020, sponsored: 2400 },
  { day: "May 21", adsense: 430, direct: 1150, sponsored: 1950 },
  { day: "May 22", adsense: 290, direct: 980, sponsored: 2200 },
];

const revenueByChannel = [
  { name: "Direct Ads", value: 8420, color: "#111827" },
  { name: "Sponsored Content", value: 14200, color: "#dc2626" },
  { name: "Google AdSense", value: 2820, color: "#3b82f6" },
  { name: "Featured Listings", value: 3000, color: "#f59e0b" },
  { name: "Video Ads", value: 2100, color: "#10b981" },
];

const adSenseSlots = [
  { slot: "1234567890", name: "Homepage Top Banner", format: "Horizontal", position: "Header", impressions: 142300, rpm: "$2.14", status: "active" },
  { slot: "0987654321", name: "Article Sidebar Right", format: "Rectangle", position: "Sidebar Right", impressions: 98700, rpm: "$3.45", status: "active" },
  { slot: "1122334455", name: "Left Sidebar Vertical", format: "Vertical", position: "Sidebar Left", impressions: 54200, rpm: "$2.87", status: "active" },
  { slot: "5544332211", name: "In-Article Mid", format: "Fluid", position: "In-Article", impressions: 76100, rpm: "$4.12", status: "active" },
  { slot: "9988776655", name: "Footer Banner", format: "Horizontal", position: "Footer", impressions: 38900, rpm: "$1.23", status: "paused" },
];

const statusConfig: Record<string, { color: string; label: string; icon: React.ElementType }> = {
  active: { color: "bg-green-100 text-green-700", label: "Active", icon: CheckCircle },
  paused: { color: "bg-yellow-100 text-yellow-700", label: "Paused", icon: Pause },
  expired: { color: "bg-gray-100 text-gray-500", label: "Expired", icon: Clock },
  pending_review: { color: "bg-blue-100 text-blue-700", label: "Pending Review", icon: AlertCircle },
};

const typeIcon: Record<string, React.ElementType> = {
  banner: Monitor,
  sponsored: List,
  sidebar: Smartphone,
  video: Video,
  whatsapp: MessageCircle,
  featured: Star,
};

function StatCard({ label, value, sub, trend, trendUp }: { label: string; value: string; sub: string; trend?: string; trendUp?: boolean }) {
  return (
    <div className="border border-gray-200 rounded p-4">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-2xl mt-1">{value}</p>
      <div className="flex items-center gap-1 mt-1">
        <p className="text-xs text-gray-400">{sub}</p>
        {trend && (
          <span className={`text-xs flex items-center gap-0.5 ml-auto ${trendUp ? "text-green-600" : "text-red-600"}`}>
            {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />} {trend}
          </span>
        )}
      </div>
    </div>
  );
}

export function AdManagerPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "campaigns" | "adsense" | "settings">("overview");
  const [statusFilter, setStatusFilter] = useState("all");

  const totalRevenue = revenueByChannel.reduce((s, c) => s + c.value, 0);
  const totalImpressions = campaigns.reduce((s, c) => s + c.impressions, 0);
  const totalClicks = campaigns.reduce((s, c) => s + c.clicks, 0);
  const avgCTR = totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : "0.00";

  const filtered = statusFilter === "all" ? campaigns : campaigns.filter((c) => c.status === statusFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-black text-white px-6 py-3 flex items-center gap-3">
        <BarChart2 size={18} />
        <span className="tracking-wider text-sm uppercase">The Pride Times — Ads Manager</span>
        <span className="ml-auto text-xs text-gray-400">Publisher: ca-pub-YOUR_PUBLISHER_ID_HERE</span>
        <button className="text-xs border border-gray-600 px-3 py-1 rounded hover:border-gray-400 flex items-center gap-1 ml-2">
          <RefreshCw size={10} /> Refresh
        </button>
        <button className="text-xs bg-red-600 px-3 py-1 rounded hover:bg-red-700 flex items-center gap-1">
          <Plus size={10} /> New Campaign
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-gray-200">
          {(["overview", "campaigns", "adsense", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm px-5 py-2.5 capitalize transition-colors border-b-2 -mb-px ${
                activeTab === tab ? "border-black text-black" : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab === "adsense" ? "Google AdSense" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Overview Tab ───────────────────────────────────────── */}
        {activeTab === "overview" && (
          <div>
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard label="Total Revenue (May)" value={`$${totalRevenue.toLocaleString()}`} sub="vs $28,400 Apr" trend="+10.4%" trendUp />
              <StatCard label="Total Impressions" value={totalImpressions.toLocaleString()} sub="all campaigns" trend="+8.2%" trendUp />
              <StatCard label="Total Clicks" value={totalClicks.toLocaleString()} sub="all campaigns" trend="+12.1%" trendUp />
              <StatCard label="Avg. CTR" value={`${avgCTR}%`} sub="click-through rate" trend="+0.3%" trendUp />
            </div>

            {/* Revenue target progress */}
            <div className="bg-white border border-gray-200 rounded p-5 mb-6">
              <h3 className="text-sm uppercase tracking-wider mb-4">Monthly Revenue vs Target</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { channel: "AdSense", actual: 2820, target: 5000 },
                  { channel: "Direct", actual: 8420, target: 8000 },
                  { channel: "Sponsored", actual: 14200, target: 15000 },
                  { channel: "Featured", actual: 3000, target: 3000 },
                  { channel: "Video", actual: 2100, target: 2500 },
                ].map((r) => {
                  const pct = Math.min(100, Math.round((r.actual / r.target) * 100));
                  const over = r.actual >= r.target;
                  return (
                    <div key={r.channel}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-xs text-gray-600">{r.channel}</p>
                        <span className={`text-xs ${over ? "text-green-600" : "text-gray-500"}`}>{pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className={`h-2 rounded-full ${over ? "bg-green-500" : "bg-black"}`} style={{ width: `${pct}%` }} />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">${r.actual.toLocaleString()} / ${r.target.toLocaleString()}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
              <div className="lg:col-span-2 bg-white border border-gray-200 rounded p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Daily Revenue Breakdown — May 15–22</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={revenueByDay}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip contentStyle={{ fontSize: 11 }} />
                    <Bar dataKey="sponsored" stackId="a" fill="#dc2626" name="Sponsored" />
                    <Bar dataKey="direct" stackId="a" fill="#111827" name="Direct" />
                    <Bar dataKey="adsense" stackId="a" fill="#3b82f6" name="AdSense" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white border border-gray-200 rounded p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Revenue by Channel</p>
                <ResponsiveContainer width="100%" height={160}>
                  <PieChart>
                    <Pie data={revenueByChannel} dataKey="value" cx="50%" cy="50%" outerRadius={65} paddingAngle={2}>
                      {revenueByChannel.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} contentStyle={{ fontSize: 11 }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col gap-1.5 mt-2">
                  {revenueByChannel.map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: c.color }} />
                      <p className="text-xs text-gray-600 flex-1">{c.name}</p>
                      <p className="text-xs">${c.value.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Campaigns Tab ─────────────────────────────────────── */}
        {activeTab === "campaigns" && (
          <div>
            {/* Filter bar */}
            <div className="flex items-center gap-3 mb-5">
              <Filter size={14} className="text-gray-400" />
              <div className="flex gap-1">
                {["all", "active", "paused", "pending_review", "expired"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`text-xs px-3 py-1.5 rounded capitalize transition-colors ${
                      statusFilter === s ? "bg-black text-white" : "border border-gray-300 text-gray-600 hover:border-black"
                    }`}
                  >
                    {s === "pending_review" ? "Pending" : s}
                  </button>
                ))}
              </div>
              <button className="ml-auto text-xs border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 flex items-center gap-1">
                <Download size={10} /> Export CSV
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Campaign</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Type</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Budget</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Spent</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Impressions</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">CTR</th>
                    <th className="text-center py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Status</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((c) => {
                    const cfg = statusConfig[c.status];
                    const StatusIcon = cfg.icon;
                    const TypeIcon = typeIcon[c.type] || Monitor;
                    const budgetPct = c.budget > 0 ? Math.round((c.spent / c.budget) * 100) : 0;
                    return (
                      <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4">
                          <p className="text-sm leading-tight">{c.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{c.advertiser} · {c.targeting} · {c.startDate} – {c.endDate}</p>
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell">
                          <span className="flex items-center gap-1 text-xs text-gray-600 capitalize">
                            <TypeIcon size={12} /> {c.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right hidden lg:table-cell">
                          <p className="text-sm">${c.budget.toLocaleString()}</p>
                          <div className="w-16 ml-auto bg-gray-100 rounded-full h-1 mt-1">
                            <div className={`h-1 rounded-full ${budgetPct >= 90 ? "bg-red-500" : "bg-black"}`} style={{ width: `${budgetPct}%` }} />
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right hidden lg:table-cell">
                          <p className="text-sm">${c.spent.toLocaleString()}</p>
                          <p className="text-xs text-gray-400">{budgetPct}% used</p>
                        </td>
                        <td className="py-3 px-4 text-right hidden md:table-cell text-sm">{c.impressions.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right hidden sm:table-cell text-sm">{c.ctr.toFixed(2)}%</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded ${cfg.color}`}>
                            <StatusIcon size={10} /> {cfg.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1 text-gray-400 hover:text-black transition-colors" title="Edit">
                              <Edit2 size={13} />
                            </button>
                            {c.status === "active" ? (
                              <button className="p-1 text-gray-400 hover:text-yellow-600 transition-colors" title="Pause">
                                <Pause size={13} />
                              </button>
                            ) : c.status === "paused" ? (
                              <button className="p-1 text-gray-400 hover:text-green-600 transition-colors" title="Resume">
                                <Play size={13} />
                              </button>
                            ) : null}
                            <button className="p-1 text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Summary cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {[
                { label: "Active Campaigns", value: campaigns.filter(c => c.status === "active").length, color: "text-green-600" },
                { label: "Paused", value: campaigns.filter(c => c.status === "paused").length, color: "text-yellow-600" },
                { label: "Pending Review", value: campaigns.filter(c => c.status === "pending_review").length, color: "text-blue-600" },
                { label: "Expired", value: campaigns.filter(c => c.status === "expired").length, color: "text-gray-500" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-gray-200 rounded p-4 text-center">
                  <p className={`text-2xl ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AdSense Tab ────────────────────────────────────────── */}
        {activeTab === "adsense" && (
          <div>
            {/* Publisher ID banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-5 flex items-start gap-3">
              <AlertCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">Publisher ID not configured. Replace <code className="bg-yellow-100 px-1 rounded text-xs">ca-pub-YOUR_PUBLISHER_ID_HERE</code> in <code className="bg-yellow-100 px-1 rounded text-xs">backend/ads/adsConfig.ts</code> with your real AdSense publisher ID.</p>
                <a href="https://www.google.com/adsense/" target="_blank" rel="noreferrer" className="text-xs text-yellow-700 underline mt-1 inline-block">Register at Google AdSense →</a>
              </div>
            </div>

            {/* AdSense performance stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard label="Est. Earnings (May)" value="$2,820" sub="all ad units" trend="+18%" trendUp />
              <StatCard label="Total Impressions" value="410,200" sub="all slots" trend="+9%" trendUp />
              <StatCard label="Page RPM" value="$6.87" sub="revenue per 1k views" trend="+$0.43" trendUp />
              <StatCard label="Fill Rate" value="94.2%" sub="ad slots filled" trend="+1.2%" trendUp />
            </div>

            {/* AdSense slots table */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden mb-6">
              <div className="border-b border-gray-200 px-5 py-3 flex items-center justify-between">
                <h3 className="text-sm uppercase tracking-wider">Ad Unit Slots</h3>
                <button className="text-xs border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 flex items-center gap-1">
                  <Plus size={10} /> Add Slot
                </button>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Slot ID</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Name</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Format</th>
                    <th className="text-left py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Position</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Impressions</th>
                    <th className="text-right py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">RPM</th>
                    <th className="text-center py-3 px-4 text-xs text-gray-500 font-normal uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {adSenseSlots.map((slot) => (
                    <tr key={slot.slot} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-mono text-xs text-gray-500">{slot.slot}</td>
                      <td className="py-3 px-4 text-sm">{slot.name}</td>
                      <td className="py-3 px-4 text-xs text-gray-500 hidden md:table-cell">{slot.format}</td>
                      <td className="py-3 px-4 text-xs text-gray-500 hidden lg:table-cell">{slot.position}</td>
                      <td className="py-3 px-4 text-right text-sm">{slot.impressions.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right text-sm hidden sm:table-cell">{slot.rpm}</td>
                      <td className="py-3 px-4 text-center">
                        {slot.status === "active" ? (
                          <span className="inline-flex items-center gap-1 text-xs text-green-600">
                            <ToggleRight size={14} /> Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                            <ToggleLeft size={14} /> Paused
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Programmatic partners */}
            <div className="bg-white border border-gray-200 rounded p-5">
              <h3 className="text-sm uppercase tracking-wider mb-4">Header Bidding Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "AppNexus", param: "placementId", value: "YOUR_APPNEXUS_ID", status: "unconfigured" },
                  { name: "Rubicon", param: "accountId", value: "YOUR_RUBICON_ACCOUNT", status: "unconfigured" },
                  { name: "OpenX", param: "delDomain", value: "YOUR_OPENX_DOMAIN", status: "unconfigured" },
                  { name: "Amazon A9", param: "pubID", value: "YOUR_AMAZON_PUB_ID", status: "unconfigured" },
                ].map((p) => (
                  <div key={p.name} className="border border-dashed border-gray-300 rounded p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm">{p.name}</p>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Setup needed</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono">{p.param}:</p>
                    <p className="text-xs text-gray-500 font-mono truncate">{p.value}</p>
                    <button className="mt-2 text-xs text-red-600 hover:underline">Configure →</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Settings Tab ──────────────────────────────────────── */}
        {activeTab === "settings" && (
          <div className="max-w-2xl">
            <div className="bg-white border border-gray-200 rounded divide-y divide-gray-100">
              {[
                { label: "Show Ads to Premium Subscribers", desc: "When disabled, premium users see no ads", value: false },
                { label: "Lazy Load Ads Below the Fold", desc: "Improves page load speed by deferring off-screen ad loading", value: true },
                { label: "Require EU Cookie Consent", desc: "GDPR compliance — wait for consent before loading ads", value: true },
                { label: "Auto Ads (Google AdSense)", desc: "Let Google automatically place ads for optimal revenue", value: false },
                { label: "Header Bidding Enabled", desc: "Run real-time auctions with programmatic partners", value: true },
              ].map((setting) => (
                <div key={setting.label} className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-sm">{setting.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{setting.desc}</p>
                  </div>
                  <div className={`w-10 h-5 rounded-full relative cursor-pointer flex-shrink-0 ml-4 ${setting.value ? "bg-black" : "bg-gray-200"}`}>
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${setting.value ? "left-5" : "left-0.5"}`} />
                  </div>
                </div>
              ))}

              {/* Max ads per page */}
              <div className="p-4">
                <p className="text-sm mb-3">Maximum Ads Per Page</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Banner Ads", value: 2 },
                    { label: "Sidebar Ads", value: 2 },
                    { label: "In-Article Ads", value: 3 },
                    { label: "Sponsored Articles", value: 1 },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between border border-gray-200 rounded px-3 py-2">
                      <p className="text-xs text-gray-600">{s.label}</p>
                      <div className="flex items-center gap-2">
                        <button className="w-5 h-5 border border-gray-300 rounded text-xs hover:bg-gray-50">−</button>
                        <span className="text-sm w-4 text-center">{s.value}</span>
                        <button className="w-5 h-5 border border-gray-300 rounded text-xs hover:bg-gray-50">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floor price */}
              <div className="p-4">
                <p className="text-sm mb-1">Programmatic Floor Price (CPM)</p>
                <p className="text-xs text-gray-500 mb-2">Minimum bid price for programmatic ad auctions</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    defaultValue={0.50}
                    step={0.10}
                    className="border border-gray-300 rounded px-3 py-1.5 text-sm w-24 focus:outline-none focus:border-black"
                  />
                  <span className="text-xs text-gray-400">USD / 1000 impressions</span>
                </div>
              </div>
            </div>

            <button className="mt-4 bg-black text-white text-sm px-6 py-2.5 rounded hover:bg-gray-800 transition-colors flex items-center gap-2">
              <Settings size={14} /> Save Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
