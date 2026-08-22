import { ImageWithFallback } from "../figma/ImageWithFallback";
import { TrendingUp, TrendingDown, Globe, Flag, Award, Star } from "lucide-react";

function SectionHeader({ title, id, subtitle }: { title: string; id?: string; subtitle?: string }) {
  return (
    <div id={id} className="border-b-2 border-black pb-2 mb-4">
      <h2 className="uppercase tracking-wider text-2xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}

const worldBillionaires = [
  { rank: 1, name: "Elon Musk", wealth: "$312.4B", company: "Tesla, SpaceX, xAI", country: "USA", change: "+2.1%", up: true, industry: "Technology / Aerospace" },
  { rank: 2, name: "Jeff Bezos", wealth: "$218.7B", company: "Amazon, Blue Origin", country: "USA", change: "+0.8%", up: true, industry: "E-Commerce / Space" },
  { rank: 3, name: "Jensen Huang", wealth: "$187.2B", company: "NVIDIA", country: "USA", change: "+5.3%", up: true, industry: "Semiconductors / AI" },
  { rank: 4, name: "Mark Zuckerberg", wealth: "$176.5B", company: "Meta Platforms", country: "USA", change: "+1.2%", up: true, industry: "Social Media / AI" },
  { rank: 5, name: "Larry Ellison", wealth: "$165.8B", company: "Oracle", country: "USA", change: "+3.7%", up: true, industry: "Enterprise Software" },
  { rank: 6, name: "Bill Gates", wealth: "$143.2B", company: "Microsoft / BG Foundation", country: "USA", change: "+0.4%", up: true, industry: "Technology" },
  { rank: 7, name: "Warren Buffett", wealth: "$138.9B", company: "Berkshire Hathaway", country: "USA", change: "+0.2%", up: true, industry: "Diversified" },
  { rank: 8, name: "Larry Page", wealth: "$131.4B", company: "Alphabet / Google", country: "USA", change: "-0.3%", up: false, industry: "Technology" },
  { rank: 9, name: "Sergey Brin", wealth: "$128.7B", company: "Alphabet / Google", country: "USA", change: "-0.3%", up: false, industry: "Technology" },
  { rank: 10, name: "Steve Ballmer", wealth: "$122.3B", company: "Microsoft / LA Clippers", country: "USA", change: "+1.8%", up: true, industry: "Technology" },
  { rank: 11, name: "Mukesh Ambani", wealth: "$112.1B", company: "Reliance Industries", country: "India", change: "+0.5%", up: true, industry: "Diversified / Telecom" },
  { rank: 12, name: "Gautam Adani", wealth: "$98.7B", company: "Adani Group", country: "India", change: "+1.3%", up: true, industry: "Infrastructure / Energy" },
  { rank: 13, name: "Carlos Slim", wealth: "$94.2B", company: "América Móvil", country: "Mexico", change: "-0.7%", up: false, industry: "Telecom" },
  { rank: 14, name: "François Bettencourt Meyers", wealth: "$89.6B", company: "L'Oréal", country: "France", change: "+0.9%", up: true, industry: "Consumer Goods" },
  { rank: 15, name: "Bernard Arnault", wealth: "$87.3B", company: "LVMH", country: "France", change: "-1.2%", up: false, industry: "Luxury Goods" },
];

const pt30List = [
  { rank: 1, name: "Jensen Huang ", title: "Nvidia ", category: "Defining the AI infrastructure era at COMPUTEX 2026 " },
  { rank: 2, name: "Satya Nadella ", title: "Microsoft ", category: "Leading ethical AI adoption and enterprise digital transformation " },
  { rank: 3, name: "Sundar Pichai ",  title: "Alphabet / Google ", category: "Driving AI integration across search, cloud, and automotive tech " },
  { rank: 4, name: "Elon Musk ", title: "Tesla / SpaceX / X ", category: "Disrupting energy, space, and AI; SpaceX IPO on the horizon " },
  { rank: 5, name: "Sam Altman ", title: "OpenAI", category: "Shaping the frontier of large language models and AGI research " },
  { rank: 6, name: "Andy Jassy ", title: "Amazon ", category: "Scaling AWS as AI's preferred cloud infrastructure partner " },
  { rank: 7, name: "Lisa Su ",  title: "AMD", category: "Challenging Nvidia's AI chip dominance with competitive GPU roadmap " },
  { rank: 8, name: "CC Wei ",  title: "TSMC", category: "Controlling the world's most advanced semiconductor manufacturing " },
  { rank: 9, name: "Alex Karp ", title: "Palantir ", category: "Surging 6 places in IMD rankings on AI and defense demand " },
  { rank: 10, name: "Mary Barra ", title: "General Motors" , category: "Navigating EV transition amid battery supply chain pressures "},
];

const indiaRichest = [
  { rank: 1, name: "Mukesh Ambani", wealth: "₹9,35,000 Cr", company: "Reliance Industries", sector: "Energy / Telecom", change: "+0.5%" },
  { rank: 2, name: "Gautam Adani", wealth: "₹8,23,000 Cr", company: "Adani Group", sector: "Infrastructure", change: "+1.3%" },
  { rank: 3, name: "Shiv Nadar", wealth: "₹3,45,000 Cr", company: "HCL Technologies", sector: "IT Services", change: "+2.1%" },
  { rank: 4, name: "Cyrus Poonawalla", wealth: "₹2,89,000 Cr", company: "Serum Institute", sector: "Pharma / Biotech", change: "+4.7%" },
  { rank: 5, name: "Savitri Jindal", wealth: "₹2,67,000 Cr", company: "JSW Steel", sector: "Steel / Infrastructure", change: "-0.8%" },
  { rank: 6, name: "Kumar Mangalam Birla", wealth: "₹2,34,000 Cr", company: "Aditya Birla Group", sector: "Diversified", change: "+0.3%" },
  { rank: 7, name: "Dilip Shanghvi", wealth: "₹2,12,000 Cr", company: "Sun Pharma", sector: "Pharmaceuticals", change: "+1.9%" },
  { rank: 8, name: "Radha Kishan Damani", wealth: "₹1,98,000 Cr", company: "DMart / Avenue Supermarts", sector: "Retail", change: "+0.6%" },
  { rank: 9, name: "Sunil Mittal", wealth: "₹1,76,000 Cr", company: "Bharti Airtel", sector: "Telecom", change: "+2.3%" },
  { rank: 10, name: "Azim Premji", wealth: "₹1,54,000 Cr", company: "Wipro", sector: "IT Services", change: "+1.1%" },
];

const billionaireNews = [
  { id: 1, title: "Elon Musk Adds $15B to Net Worth in Single Day After Tesla Earnings Beat", time: "2 hrs ago" },
  { id: 2, title: "Gautam Adani's Green Energy Division Secures $7.5B International Funding", time: "4 hrs ago" },
  { id: 3, title: "Jeff Bezos Commits $5B to Ocean Conservation Through Bezos Earth Fund", time: "6 hrs ago" },
  { id: 4, title: "Mark Zuckerberg Becomes Third Person to Hold $175B+ Net Worth", time: "8 hrs ago" },
  { id: 5, title: "Warren Buffett's Berkshire Hathaway Reveals $45B Mystery Investment", time: "10 hrs ago" },
];

const risingBillionaires = [
  { name: "Jensen Huang", company: "NVIDIA", wealth: "$187B", growth: "+$89B YTD", story: "AI chip demand drives historic wealth creation" },
  { name: "Sam Altman", company: "OpenAI", wealth: "$28B", growth: "+$22B YTD", story: "ChatGPT revenue surpasses $10B annually" },
  { name: "Cyrus Poonawalla", company: "Serum Institute", wealth: "$21B", growth: "+$8B YTD", story: "Global vaccine demand powers pharma empire" },
];

export function BillionairesPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Page title */}
      <div className="border-b-4 border-black mb-6 pb-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Exclusive Rankings</span>
        <h1 className="mt-0.5">Billionaires & Wealth Intelligence</h1>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "World's Billionaires", value: "2,781", sub: "as of May 2026" },
          { label: "Combined Wealth", value: "$14.2T", sub: "all billionaires" },
          { label: "New Billionaires (2026)", value: "+187", sub: "year to date" },
          { label: "Biggest Gainer YTD", value: "Jensen Huang", sub: "+$89B in 2026" },
        ].map((stat) => (
          <div key={stat.label} className="border border-gray-200 rounded p-4 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-xl mt-1">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* World's Billionaires list */}
      <div className="mb-8" id="world">
        <SectionHeader
          title="World's Billionaires"
          subtitle="Real-time net worth estimates. Updated daily. All figures in USD."
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 px-1 text-xs text-gray-500 font-normal uppercase tracking-wider w-8">#</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Name</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Net Worth</th>
                <th className="text-left py-2 pl-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Company</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Country</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Today</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {worldBillionaires.map((b) => (
                <tr key={b.rank} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="py-3 px-1 text-gray-400 text-xs">{b.rank}</td>
                  <td className="py-3">
                    <p className="group-hover:text-red-600 transition-colors">{b.name}</p>
                    <p className="text-xs text-gray-400 hidden sm:block">{b.industry}</p>
                  </td>
                  <td className="py-3 text-right font-medium">{b.wealth}</td>
                  <td className="py-3 pl-4 text-gray-600 hidden md:table-cell text-sm">{b.company}</td>
                  <td className="py-3 text-gray-600 hidden lg:table-cell text-sm">{b.country}</td>
                  <td className="py-3 text-right">
                    <span className={`flex items-center justify-end gap-0.5 text-xs ${b.up ? "text-green-600" : "text-red-600"}`}>
                      {b.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      {b.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-2">Showing top 15 of 2,781 billionaires. Updated: May 21, 2026 05:00 UTC</p>
        </div>
      </div>

      {/* PT30 + Rising Stars side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* PT30 */}
        <div className="lg:col-span-2" id="pt30">
          <SectionHeader
            title="🏆  PRIDE TIMES 30 — LEADERS TO WATCH IN 2026 "
            subtitle="The Pride Times 30 recognizes thirty global leaders across business, technology, and innovation who are defining the direction of the global economy this year. This edition highlights ten names at the forefront: "
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider w-8">#</th>
                  <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Name</th>
                  <th className="text-left px-18 py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">Organization</th>
                  <th className="text-left px-4  py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Why They Matter </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pt30List.map((p) => (
                  <tr key={p.rank} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                    <td className="py-2.5 text-gray-900 text-xs">{p.rank}</td>
                   <td className="py-2.5">
  <p className="group-hover:text-red-600 transition-colors">
    {p.name}
  </p>

  {/* Mobile View */}
  <div className="sm:hidden mt-1">
    <p className="text-xs text-gray-600">
      {p.title}
    </p>

    <p className="text-xs text-gray-400 mt-1">
      {p.category}
    </p>
  </div>
</td>
                    <td className="px-18 py-2.5 text-left hidden sm:table-cell text-sm">{p.title}</td>
                    <td className="px-4 py-2.5 text-left hidden sm:table-cell text-sm">{p.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rising Billionaires */}
        <div>
          <SectionHeader title="Fastest Growing" subtitle="Biggest wealth gains in 2026" />
          <div className="flex flex-col gap-4">
            {risingBillionaires.map((r) => (
              <div key={r.name} className="border border-gray-200 rounded p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Star size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.company}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm">{r.wealth}</span>
                  <span className="text-green-600 text-xs font-medium">{r.growth}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{r.story}</p>
              </div>
            ))}

            {/* Billionaire news */}
            <div className="border-t-2 border-black pt-4 mt-2">
              <h3 className="text-sm uppercase tracking-wider mb-3">Wealth News</h3>
              <div className="divide-y divide-gray-100">
                {billionaireNews.slice(0, 4).map((item) => (
                  <div key={item.id} className="py-2 group cursor-pointer">
                    <p className="text-xs leading-snug group-hover:text-red-600 transition-colors">{item.title}</p>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* India's Richest */}
      <div className="mb-8" id="india">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
          <Flag size={16} className="text-orange-600" />
          <h2 className="uppercase tracking-wider">India's Richest</h2>
          <span className="text-xs text-gray-500 ml-2">Top 10 as of May 2026</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider w-8">#</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Name</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Net Worth (INR)</th>
                <th className="text-left py-2 pl-4 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Company</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Sector</th>
                <th className="text-right py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {indiaRichest.map((b) => (
                <tr key={b.rank} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="py-2.5 text-gray-400 text-xs">{b.rank}</td>
                  <td className="py-2.5 group-hover:text-red-600 transition-colors">{b.name}</td>
                  <td className="py-2.5 text-right font-medium">{b.wealth}</td>
                  <td className="py-2.5 pl-4 text-gray-600 hidden md:table-cell text-sm">{b.company}</td>
                  <td className="py-2.5 text-gray-600 hidden lg:table-cell text-sm">{b.sector}</td>
                  <td className={`py-2.5 text-right text-xs ${b.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {b.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
