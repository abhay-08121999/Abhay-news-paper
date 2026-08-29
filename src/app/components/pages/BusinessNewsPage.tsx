import { Clock, Briefcase, TrendingUp, TrendingDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "CORPORATE STRATEGY",
  title: "The Great Corporate AI Arms Race: How Fortune 500 Companies Are Spending $2.3 Trillion to Win the Intelligence Economy",
  excerpt: "Microsoft, Google, Amazon, Meta and Apple have collectively committed $2.3 trillion in AI investment through 2030. Every sector — from banking to retail, healthcare to manufacturing — is being redrawn. The companies that win this race will dominate the 21st century economy.",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const maDeals = [
  { id: 1, acquirer: "Amazon", target: "NuScale Power", value: "$12B", sector: "Nuclear Energy", status: "Announced" },
  { id: 2, acquirer: "Microsoft", target: "IonQ", value: "$8.7B", sector: "Quantum Computing", status: "Pending" },
  { id: 3, acquirer: "BlackRock", target: "Global Infrastructure Partners", value: "$12.5B", sector: "Infrastructure", status: "Closed" },
  { id: 4, acquirer: "JPMorgan", target: "First Republic (Assets)", value: "$10.6B", sector: "Banking", status: "Closed" },
  { id: 5, acquirer: "Reliance", target: "Disney India", value: "$8.5B", sector: "Media / Streaming", status: "Closed" },
];

const earningsNews = [
  { id: 1, company: "Apple", ticker: "AAPL", eps: "$2.45", beat: "+12%", revenue: "$98.3B", status: "BEAT" },
  { id: 2, company: "Microsoft", ticker: "MSFT", eps: "$3.12", beat: "+8%", revenue: "$71.2B", status: "BEAT" },
  { id: 3, company: "Alphabet", ticker: "GOOGL", eps: "$2.89", beat: "+15%", revenue: "$88.3B", status: "BEAT" },
  { id: 4, company: "Meta", ticker: "META", eps: "$6.43", beat: "+23%", revenue: "$41.5B", status: "BEAT" },
  { id: 5, company: "Amazon", ticker: "AMZN", eps: "$1.91", beat: "+5%", revenue: "$187.8B", status: "BEAT" },
  { id: 6, company: "Intel", ticker: "INTC", eps: "$0.18", beat: "-8%", revenue: "$12.4B", status: "MISS" },
];

const corporateNews = [
  { id: 1, title: "LVMH Posts €21B Revenue — Luxury Demand Defies Global Economic Uncertainty", time: "1 hr ago", category: "LUXURY" },
  { id: 2, title: "Walmart Launches AI-Powered Supply Chain Platform — 50,000 Suppliers Enrolled", time: "2 hrs ago", category: "RETAIL" },
  { id: 3, title: "Saudi Aramco Overtakes Apple as World's Most Profitable Company in Q1 2026", time: "3 hrs ago", category: "ENERGY" },
  { id: 4, title: "Boeing's 737 MAX Returns to Full Delivery Schedule After 18-Month Production Fix", time: "4 hrs ago", category: "AEROSPACE" },
  { id: 5, title: "Reliance Jio Surpasses 500 Million Subscribers — World's Largest Telecom by Users", time: "5 hrs ago", category: "TELECOM" },
  { id: 6, title: "Goldman Sachs CEO David Solomon Takes Personal Pay Cut After Criticism of $30B Losses", time: "6 hrs ago", category: "BANKING" },
];

const startupNews = [
  { id: 1, title: "Anthropic Raises $4B Series E at $40B Valuation — AI Safety Startup Now Among World's Most Valuable", time: "2 hrs ago" },
  { id: 2, title: "Indian SaaS Startup Freshworks Acquires Two US Companies in $1.2B Deal", time: "4 hrs ago" },
  { id: 3, title: "Rapido Raises $250M as India's Bike-Taxi Market Explodes to 50M Monthly Rides", time: "6 hrs ago" },
  { id: 4, title: "SpaceX Valuation Hits $350B — Overtakes Boeing and Airbus Combined", time: "8 hrs ago" },
];

export function BusinessNewsPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Briefcase size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Corporate Intelligence</span>
          <h1 className="mt-0.5">Business News</h1>
        </div>
      </div>

      <div className="group cursor-pointer mb-8">
        <div className="overflow-hidden rounded mb-4">
          <ImageWithFallback src={hero.image} alt={hero.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
        <h1 className="mt-2 leading-tight">{hero.title}</h1>
        <p className="text-gray-600 text-sm mt-2">{hero.excerpt}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
          <span>By {hero.author}</span>
          <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
        </div>
      </div>

      {/* Earnings */}
      <div className="mb-8">
        <SH title="Earnings Season" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Company</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">EPS</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">vs Est.</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">Revenue</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {earningsNews.map((e) => (
                <tr key={e.ticker} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2.5">{e.company} <span className="text-gray-400">({e.ticker})</span></td>
                  <td className="py-2.5 text-right">{e.eps}</td>
                  <td className={`py-2.5 text-right text-xs ${e.status === "BEAT" ? "text-green-600" : "text-red-600"}`}>{e.beat}</td>
                  <td className="py-2.5 text-right hidden sm:table-cell text-gray-600">{e.revenue}</td>
                  <td className="py-2.5 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded ${e.status === "BEAT" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{e.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* M&A */}
      <div className="mb-8">
        <SH title="M&A Tracker" />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Acquirer</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Target</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Value</th>
                <th className="text-left py-2 pl-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Sector</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {maDeals.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-2.5">{d.acquirer}</td>
                  <td className="py-2.5 text-gray-600">{d.target}</td>
                  <td className="py-2.5 text-right font-medium">{d.value}</td>
                  <td className="py-2.5 pl-4 text-gray-500 text-xs hidden md:table-cell">{d.sector}</td>
                  <td className="py-2.5 text-right">
                    <span className={`text-xs px-2 py-0.5 rounded ${d.status === "Closed" ? "bg-green-100 text-green-700" : d.status === "Announced" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>{d.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <SponsoredArticleCard
        headline="Goldman Sachs: Why the Next 5 Years Will Be the Golden Age for Corporate M&A Activity"
        excerpt="Rising cash balances, AI-driven synergies, and a favorable rate environment are setting the stage for a record M&A supercycle. Goldman's investment banking team explains the opportunity."
        advertiser="Goldman Sachs"
        category="SPONSORED · BUSINESS"
        readTime={7}
        image="https://images.unsplash.com/photo-1778406466505-6129d0555557?w=800&h=400&fit=crop"
        link="#"
        disclosureText="Paid content by Goldman Sachs. Not editorial content."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Corporate News" />
          <div className="divide-y divide-gray-100">
            {corporateNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <span className="text-xs text-red-600 uppercase tracking-wider">{n.category}</span>
                <p className="text-sm group-hover:text-red-600 transition-colors mt-0.5">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Startups & Venture" />
          <div className="divide-y divide-gray-100">
            {startupNews.map((n) => (
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
