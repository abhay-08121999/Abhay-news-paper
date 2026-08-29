
import { Clock, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-black pb-2 mb-5">
      <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.14em]">
        {title}
      </h2>
    </div>
  );
}

const hero = {
  category: "CORPORATE STRATEGY",
  title:
    "The Great Corporate AI Arms Race: How Fortune 500 Companies Are Spending $2.3 Trillion to Win the Intelligence Economy",
  excerpt:
    "Microsoft, Google, Amazon, Meta and Apple have collectively committed $2.3 trillion in AI investment through 2030. Every sector — from banking to retail, healthcare to manufacturing — is being redrawn. The companies that win this race will dominate the 21st century economy.",
  author: "Sagar Kumar",
  time: "2 hours ago",
  image:
    "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const maDeals = [
  {
    id: 1,
    acquirer: "Amazon",
    target: "NuScale Power",
    value: "$12B",
    sector: "Nuclear Energy",
    status: "Announced",
  },
  {
    id: 2,
    acquirer: "Microsoft",
    target: "IonQ",
    value: "$8.7B",
    sector: "Quantum Computing",
    status: "Pending",
  },
  {
    id: 3,
    acquirer: "BlackRock",
    target: "Global Infrastructure Partners",
    value: "$12.5B",
    sector: "Infrastructure",
    status: "Closed",
  },
  {
    id: 4,
    acquirer: "JPMorgan",
    target: "First Republic (Assets)",
    value: "$10.6B",
    sector: "Banking",
    status: "Closed",
  },
  {
    id: 5,
    acquirer: "Reliance",
    target: "Disney India",
    value: "$8.5B",
    sector: "Media / Streaming",
    status: "Closed",
  },
];

const earningsNews = [
  {
    id: 1,
    company: "Apple",
    ticker: "AAPL",
    eps: "$2.45",
    beat: "+12%",
    revenue: "$98.3B",
    status: "BEAT",
  },
  {
    id: 2,
    company: "Microsoft",
    ticker: "MSFT",
    eps: "$3.12",
    beat: "+8%",
    revenue: "$71.2B",
    status: "BEAT",
  },
  {
    id: 3,
    company: "Alphabet",
    ticker: "GOOGL",
    eps: "$2.89",
    beat: "+15%",
    revenue: "$88.3B",
    status: "BEAT",
  },
  {
    id: 4,
    company: "Meta",
    ticker: "META",
    eps: "$6.43",
    beat: "+23%",
    revenue: "$41.5B",
    status: "BEAT",
  },
  {
    id: 5,
    company: "Amazon",
    ticker: "AMZN",
    eps: "$1.91",
    beat: "+5%",
    revenue: "$187.8B",
    status: "BEAT",
  },
  {
    id: 6,
    company: "Intel",
    ticker: "INTC",
    eps: "$0.18",
    beat: "-8%",
    revenue: "$12.4B",
    status: "MISS",
  },
];

const corporateNews = [
  {
    id: 1,
    title:
      "LVMH Posts €21B Revenue — Luxury Demand Defies Global Economic Uncertainty",
    time: "1 hr ago",
    category: "LUXURY",
  },
  {
    id: 2,
    title:
      "Walmart Launches AI-Powered Supply Chain Platform — 50,000 Suppliers Enrolled",
    time: "2 hrs ago",
    category: "RETAIL",
  },
  {
    id: 3,
    title:
      "Saudi Aramco Overtakes Apple as World's Most Profitable Company in Q1 2026",
    time: "3 hrs ago",
    category: "ENERGY",
  },
  {
    id: 4,
    title:
      "Boeing's 737 MAX Returns to Full Delivery Schedule After 18-Month Production Fix",
    time: "4 hrs ago",
    category: "AEROSPACE",
  },
  {
    id: 5,
    title:
      "Reliance Jio Surpasses 500 Million Subscribers — World's Largest Telecom by Users",
    time: "5 hrs ago",
    category: "TELECOM",
  },
  {
    id: 6,
    title:
      "Goldman Sachs CEO David Solomon Takes Personal Pay Cut After Criticism of $30B Losses",
    time: "6 hrs ago",
    category: "BANKING",
  },
];

const startupNews = [
  {
    id: 1,
    title:
      "Anthropic Raises $4B Series E at $40B Valuation — AI Safety Startup Now Among World's Most Valuable",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "Indian SaaS Startup Freshworks Acquires Two US Companies in $1.2B Deal",
    time: "4 hrs ago",
  },
  {
    id: 3,
    title:
      "Rapido Raises $250M as India's Bike-Taxi Market Explodes to 50M Monthly Rides",
    time: "6 hrs ago",
  },
  {
    id: 4,
    title:
      "SpaceX Valuation Hits $350B — Overtakes Boeing and Airbus Combined",
    time: "8 hrs ago",
  },
];

export function BusinessNewsPage() {
  return (
    <div className="w-full py-6 md:py-8">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <header className="border-b-4 border-black pb-4 mb-7">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white">
            <Briefcase size={20} strokeWidth={2} />
          </div>

          <div>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Corporate Intelligence
            </p>

            <h1 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              Business News
            </h1>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO STORY
      ===================================================== */}
      <article className="group mb-10 cursor-pointer">
        <div className="overflow-hidden rounded-sm bg-gray-100">
          <ImageWithFallback
            src={hero.image}
            alt={hero.title}
            className="w-full h-[240px] sm:h-[320px] md:h-[390px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-5 max-w-5xl">
          <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] text-red-600">
            {hero.category}
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black leading-[1.05] tracking-tight group-hover:text-red-700 transition-colors">
            {hero.title}
          </h2>

          <p className="mt-4 max-w-4xl text-sm md:text-base lg:text-lg leading-relaxed text-gray-600">
            {hero.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
            <span className="font-medium text-gray-600">
              By {hero.author}
            </span>

            <span className="h-1 w-1 rounded-full bg-gray-300" />

            <span className="flex items-center gap-1">
              <Clock size={11} />
              {hero.time}
            </span>
          </div>
        </div>
      </article>

      {/* =====================================================
          EARNINGS
      ===================================================== */}
      <section className="mb-10">
        <SectionHeader title="Earnings Season" />

        <div className="overflow-x-auto border-t border-gray-100">
          <table className="w-full min-w-[650px] text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Company
                </th>

                <th className="px-3 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  EPS
                </th>

                <th className="px-3 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  vs Est.
                </th>

                <th className="px-3 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Revenue
                </th>

                <th className="py-3 pl-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Result
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {earningsNews.map((e) => (
                <tr
                  key={e.ticker}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="py-3 pr-4">
                    <span className="font-semibold">{e.company}</span>
                    <span className="ml-1 text-gray-400">
                      ({e.ticker})
                    </span>
                  </td>

                  <td className="px-3 py-3 text-right font-medium">
                    {e.eps}
                  </td>

                  <td
                    className={`px-3 py-3 text-right font-semibold ${
                      e.status === "BEAT"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {e.beat}
                  </td>

                  <td className="px-3 py-3 text-right text-gray-600">
                    {e.revenue}
                  </td>

                  <td className="py-3 pl-3 text-right">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${
                        e.status === "BEAT"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* =====================================================
          M&A TRACKER
      ===================================================== */}
      <section className="mb-10">
        <SectionHeader title="M&A Tracker" />

        <div className="overflow-x-auto border-t border-gray-100">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 pr-4 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Acquirer
                </th>

                <th className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Target
                </th>

                <th className="px-3 py-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Value
                </th>

                <th className="hidden px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-gray-500 md:table-cell">
                  Sector
                </th>

                <th className="py-3 pl-3 text-right text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {maDeals.map((d) => (
                <tr
                  key={d.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="py-3 pr-4 font-semibold">
                    {d.acquirer}
                  </td>

                  <td className="px-3 py-3 text-gray-600">
                    {d.target}
                  </td>

                  <td className="px-3 py-3 text-right font-semibold">
                    {d.value}
                  </td>

                  <td className="hidden px-3 py-3 text-xs text-gray-500 md:table-cell">
                    {d.sector}
                  </td>

                  <td className="py-3 pl-3 text-right">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${
                        d.status === "Closed"
                          ? "bg-green-50 text-green-700"
                          : d.status === "Announced"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-yellow-50 text-yellow-700"
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
      </section>

      {/* =====================================================
          CORPORATE + STARTUPS
      ===================================================== */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">

        {/* Corporate News */}
        <div>
          <SectionHeader title="Corporate News" />

          <div className="divide-y divide-gray-100">
            {corporateNews.map((n) => (
              <article
                key={n.id}
                className="group cursor-pointer py-4 first:pt-0"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">
                  {n.category}
                </span>

                <h3 className="mt-1 text-sm md:text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-red-700">
                  {n.title}
                </h3>

                <span className="mt-2 flex items-center gap-1 text-[11px] text-gray-400">
                  <Clock size={10} />
                  {n.time}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Startups */}
        <div>
          <SectionHeader title="Startups & Venture" />

          <div className="divide-y divide-gray-100">
            {startupNews.map((n) => (
              <article
                key={n.id}
                className="group cursor-pointer py-4 first:pt-0"
              >
                <h3 className="text-sm md:text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-red-700">
                  {n.title}
                </h3>

                <span className="mt-2 flex items-center gap-1 text-[11px] text-gray-400">
                  <Clock size={10} />
                  {n.time}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

