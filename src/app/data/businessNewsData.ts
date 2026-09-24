/* =========================================================
   BUSINESS NEWS — SHARED DATA
   Used by BusinessNewsPage and ArticleDetailPage so both
   read from a single source instead of duplicating content.
========================================================= */

export type BusinessArticle = {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  author?: string;
  time: string;
  image?: string;
};

export const hero: BusinessArticle = {
  id: "biz-hero",
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

export const maDeals = [
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

export const earningsNews = [
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

export const corporateNews: BusinessArticle[] = [
  {
    id: "biz-corp-1",
    category: "LUXURY",
    title:
      "LVMH Posts €21B Revenue — Luxury Demand Defies Global Economic Uncertainty",
    time: "1 hr ago",
  },
  {
    id: "biz-corp-2",
    category: "RETAIL",
    title:
      "Walmart Launches AI-Powered Supply Chain Platform — 50,000 Suppliers Enrolled",
    time: "2 hrs ago",
  },
  {
    id: "biz-corp-3",
    category: "ENERGY",
    title:
      "Saudi Aramco Overtakes Apple as World's Most Profitable Company in Q1 2026",
    time: "3 hrs ago",
  },
  {
    id: "biz-corp-4",
    category: "AEROSPACE",
    title:
      "Boeing's 737 MAX Returns to Full Delivery Schedule After 18-Month Production Fix",
    time: "4 hrs ago",
  },
  {
    id: "biz-corp-5",
    category: "TELECOM",
    title:
      "Reliance Jio Surpasses 500 Million Subscribers — World's Largest Telecom by Users",
    time: "5 hrs ago",
  },
  {
    id: "biz-corp-6",
    category: "BANKING",
    title:
      "Goldman Sachs CEO David Solomon Takes Personal Pay Cut After Criticism of $30B Losses",
    time: "6 hrs ago",
  },
];

export const startupNews: BusinessArticle[] = [
  {
    id: "biz-startup-1",
    category: "STARTUPS",
    title:
      "Anthropic Raises $4B Series E at $40B Valuation — AI Safety Startup Now Among World's Most Valuable",
    time: "2 hrs ago",
  },
  {
    id: "biz-startup-2",
    category: "STARTUPS",
    title:
      "Indian SaaS Startup Freshworks Acquires Two US Companies in $1.2B Deal",
    time: "4 hrs ago",
  },
  {
    id: "biz-startup-3",
    category: "STARTUPS",
    title:
      "Rapido Raises $250M as India's Bike-Taxi Market Explodes to 50M Monthly Rides",
    time: "6 hrs ago",
  },
  {
    id: "biz-startup-4",
    category: "STARTUPS",
    title:
      "SpaceX Valuation Hits $350B — Overtakes Boeing and Airbus Combined",
    time: "8 hrs ago",
  },
];

/* =========================================================
   COMBINED LOOKUP — every clickable Business News article,
   keyed by id, for the Article Detail page.
========================================================= */

export const businessArticles: BusinessArticle[] = [
  hero,
  ...corporateNews,
  ...startupNews,
];

export function getBusinessArticleById(
  id: string | undefined
): BusinessArticle | undefined {
  return businessArticles.find((a) => a.id === id);
}

export function getRelatedBusinessArticles(
  article: BusinessArticle,
  limit = 4
): BusinessArticle[] {
  return businessArticles
    .filter(
      (a) => a.id !== article.id && a.category === article.category
    )
    .slice(0, limit);
}
