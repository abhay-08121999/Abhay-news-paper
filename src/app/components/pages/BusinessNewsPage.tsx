import { Clock, Briefcase, TrendingUp, TrendingDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";

function SH({ title }: { title: string }) {
  return <h2 className="pt-bizweek-section-title">{title}</h2>;
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
    <div className="py-6 pt-bizweek-page">
      <div className="pt-bizweek-masthead flex items-center gap-3">
        <Briefcase size={22} />
        <div>
          <span className="pt-bizweek-eyebrow">Corporate Intelligence</span>
          <h1 className="pt-bizweek-masthead-title">Business News</h1>
        </div>
      </div>

      <div className="pt-bizweek-hero group cursor-pointer">
        <div className="pt-bizweek-hero-image-wrap">
          <ImageWithFallback src={hero.image} alt={hero.title} className="pt-bizweek-hero-image" />
        </div>
        <div>
          <span className="pt-bizweek-hero-category">{hero.category}</span>
          <h1 className="pt-bizweek-hero-title">{hero.title}</h1>
          <p className="pt-bizweek-hero-excerpt">{hero.excerpt}</p>
          <div className="pt-bizweek-hero-byline flex items-center gap-3">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>
      </div>

      {/* Earnings */}
      <div className="mb-10">
        <SH title="Earnings Season" />
        <div className="pt-bizweek-table-wrap">
          <table className="pt-bizweek-table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="pt-num">EPS</th>
                <th className="pt-num">vs Est.</th>
                <th className="pt-num hidden sm:table-cell">Revenue</th>
                <th className="pt-num">Result</th>
              </tr>
            </thead>
            <tbody>
              {earningsNews.map((e) => (
                <tr key={e.ticker}>
                  <td>{e.company} <span className="pt-bizweek-table-ticker">({e.ticker})</span></td>
                  <td className="pt-num">{e.eps}</td>
                  <td className={`pt-num pt-bizweek-delta ${e.status === "BEAT" ? "up" : "down"}`}>{e.beat}</td>
                  <td className="pt-num hidden sm:table-cell pt-bizweek-table-sector">{e.revenue}</td>
                  <td className="pt-num">
                    <span className={`pt-bizweek-tag ${e.status === "BEAT" ? "pt-beat" : "pt-miss"}`}>{e.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* M&A */}
      <div className="mb-10">
        <SH title="M&A Tracker" />
        <div className="pt-bizweek-table-wrap">
          <table className="pt-bizweek-table">
            <thead>
              <tr>
                <th>Acquirer</th>
                <th>Target</th>
                <th className="pt-num">Value</th>
                <th className="hidden md:table-cell">Sector</th>
                <th className="pt-num">Status</th>
              </tr>
            </thead>
            <tbody>
              {maDeals.map((d) => (
                <tr key={d.id}>
                  <td>{d.acquirer}</td>
                  <td className="pt-bizweek-table-sector">{d.target}</td>
                  <td className="pt-num" style={{ fontWeight: 700 }}>{d.value}</td>
                  <td className="hidden md:table-cell pt-bizweek-table-sector">{d.sector}</td>
                  <td className="pt-num">
                    <span className={`pt-bizweek-tag ${d.status === "Closed" ? "pt-closed" : d.status === "Announced" ? "pt-announced" : "pt-pending"}`}>{d.status}</span>
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

      <div className="pt-bizweek-list-grid mt-8">
        <div>
          <SH title="Corporate News" />
          <div>
            {corporateNews.map((n) => (
              <div key={n.id} className="pt-bizweek-list-item cursor-pointer">
                <span className="pt-bizweek-list-category">{n.category}</span>
                <p className="pt-bizweek-list-headline">{n.title}</p>
                <span className="pt-bizweek-list-time"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Startups & Venture" />
          <div>
            {startupNews.map((n) => (
              <div key={n.id} className="pt-bizweek-list-item cursor-pointer">
                <p className="pt-bizweek-list-headline">{n.title}</p>
                <span className="pt-bizweek-list-time"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
