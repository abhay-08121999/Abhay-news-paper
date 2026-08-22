import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Download, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import CVImg from "../../../imports/Coverstory.png";


const hero = {
  category: "Deal Tracker",
  title: "Deal Activity Snapshot: May 25 – June 3, 2026   ",
  excerpt:"The last 10 days of May and opening days of June 2026 saw a sustained wave of high-value corporate transactions, spanning gaming, financial services, homebuilding, technology, industrial software, and insurance. Below is a comprehensive tracker of the most significant confirmed deals across all sectors during this period.  ",
  author: "Sagar Kumar",
  time: "May-June 2026",
  image: CVImg,
};

const covers = [
  { month: "May 2026", headline: "The AI Economy: How Artificial Intelligence is Reshaping Global GDP", subhead: "Plus: World Billionaires · India's Rise · Green Energy Revolution", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=400&h=550&fit=crop", current: true, path: "/technology" },
  { month: "April 2026", headline: "India Rising: The New Superpower Transforming Global Business Dynamics", subhead: "Exclusive CEO Interviews · Markets Special · Leadership 100", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?w=400&h=550&fit=crop&crop=top", current: false, path: "/finance" },
  { month: "March 2026", headline: "Healthcare 2030: The Biotech Revolution Saving Millions of Lives", subhead: "CRISPR · AI Diagnostics · Pharma Rankings · Hospital Innovation", image: "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?w=400&h=550&fit=crop", current: false, path: "/healthcare" },
  { month: "February 2026", headline: "The Electric Future: How EVs Are Rewriting the Rules of Mobility", subhead: "Battery Breakthrough · Charging Infrastructure · Auto Rankings", image: "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?w=400&h=550&fit=crop", current: false, path: "/manufacturing" },
  { month: "January 2026", headline: "2026 Outlook: The Trends That Will Define the Global Economy", subhead: "Economic Forecasts · Sector Winners · Key Risks · CEO Survey", image: "https://images.unsplash.com/photo-1679583721525-658d164e609b?w=400&h=550&fit=crop", current: false, path: "/finance" },
  { month: "December 2025", headline: "Person of the Year: The Leaders Who Shaped 2025", subhead: "Annual Awards · 50 Leaders to Watch · Year in Review", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=400&h=550&fit=crop", current: false, path: "/leadership" },
];

const dailyStories = [
  { id: 1, time: "6:00 AM IST", title: "Morning Market Brief: Asia Opens Mixed, Shanghai Up 1.2%", category: "Markets" },
  { id: 2, time: "7:30 AM IST", title: "The Pride Times Daily Cover: AI Investment Supercycle Begins", category: "Technology" },
  { id: 3, time: "9:00 AM IST", title: "India Open: RBI Rate Decision Day — Markets Hold Breath", category: "India" },
  { id: 4, time: "12:00 PM IST", title: "Midday Brief: Europe Stocks Up on ECB Signals", category: "Finance" },
  { id: 5, time: "3:30 PM IST", title: "US Pre-Market: Futures Point to Record High Open", category: "Markets" },
  { id: 6, time: "6:00 PM IST", title: "Evening Digest: Today's Top 10 Business Stories", category: "All" },
];

export function CoverStoriesPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Mergers & Acquisitions</span>
        <h1 className="mt-0.5">GLOBAL M&A TRACKER</h1>
      </div>

      {/* Hero */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                    <div className="lg:col-span-2">
                      <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded mb-4">
              <ImageWithFallback
                src={hero.image}
                alt={hero.title}
                className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent " />
            </div>
                        <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
                        <h1 className="mt-2 leading-tight">{hero.title}</h1>
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed ">{hero.excerpt}</p>
                        </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                          <span>By {hero.author}</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {hero.time}</span>
                        </div>
                      </div>

                      {/* Recent M&A Deals Table */}
<div className="mt-4 mb-8 overflow-x-auto">

  <table className="w-full border border-gray-300 text-sm">
    <thead>
      <tr className="bg-[#0b2344] text-white">
        <th className="px-4 py-3 text-left">Date</th>
        <th className="px-4 py-3 text-left">Acquirer</th>
        <th className="px-4 py-3 text-left">Target</th>
        <th className="px-4 py-3 text-left">Value</th>
        <th className="px-4 py-3 text-left">Sector</th>
      </tr>
    </thead>

    <tbody>
      {[
        ["Jun 1", "Berkshire Hathaway", "Taylor Morrison Home", "$6.8B", "Real Estate / Homebuilding"],
        ["May 30", "AIG", "Everest Insurance (Colombia)", "Undisclosed", "Insurance / LatAm"],
        ["May 29", "Fertitta Entertainment", "Caesars Entertainment", "$17.6B", "Gaming & Hospitality"],
        ["May 29", "Scotiabank", "Maple Financial Group", "Undisclosed", "Banking & Wealth Mgmt"],
        ["May 28", "Autodesk", "MaintainX", "Undisclosed", "Industrial Software"],
        ["May 28", "GlobalFoundries", "Synopsys Processor IP", "Undisclosed", "Semiconductors / AI"],
        ["May 27", "CordenPharma", "Undisclosed CDMO Target", "Undisclosed", "Pharma Manufacturing"],
        ["May 26", "Laurentide Controls", "C. Latendresse Inc.", "Undisclosed", "Industrial Controls"],
        ["Ongoing", "SoftBank Group", "European Data Center Assets", "Multi-Bn", "AI Infrastructure"],
        ["Q2 2026", "ProCap Financial", "CFO Silvia Inc.", "Undisclosed", "Agentic Finance / AI"],
      ].map((row, index) => (
        <tr
          key={index}
          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <td className="border border-gray-300 px-4 py-3">{row[0]}</td>
          <td className="border border-gray-300 px-4 py-3">{row[1]}</td>
          <td className="border border-gray-300 px-4 py-3">{row[2]}</td>
          <td className="border border-gray-300 px-4 py-3">{row[3]}</td>
          <td className="border border-gray-300 px-4 py-3">{row[4]}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Key Themes in Recent M&A Activity */}
<div className="mt-8 mb-8">
  <h2 className="text-xl font-bold mb-4">
    Key Themes in Recent M&A Activity
  </h2>

  <ol className="list-decimal pl-7 space-y-3 text-[16px] leading-relaxed text-gray-900">
    <li>
      AI-driven consolidation continues to dominate technology and
      semiconductor deal flow, with acquirers seeking to build end-to-end
      stacks from chip design to application layer.
    </li>

    <li>
      Financial services deal-making is accelerating as banks and insurers
      seek scale, geographic diversification, and wealth management capability
      ahead of anticipated regulatory changes.
    </li>

    <li>
      Gaming and hospitality mega-deals signal private capital confidence in
      the durability of integrated entertainment spending despite
      macroeconomic uncertainty.
    </li>

    <li>
      Industrial software acquisitions reflect manufacturers' growing demand
      for connected operations platforms that unify design, build, and
      maintain workflows.
    </li>
  </ol>

  {/* Quote Box */}
  <div className="mt-10 border border-gray-400 bg-slate-100 flex">
    <div className="w-8 bg-blue-100 border-r border-gray-400"></div>

    <div className="p-5">
      <blockquote className="italic text-sm leading-relaxed text-gray-900">
        “Approximately one-third of the 100 largest corporate M&A
        transactions in 2025 cited AI as part of their strategic rationale —
        with Technology, Manufacturing, and Power the most active
        AI-referencing sectors.”
      </blockquote>

      <p className="mt-2 font-bold text-sl">
        — PwC Global M&A Industry Trends 2026
      </p>
    </div>
  </div>
</div>

      {/* Daily cover schedule */}
      <div className="bg-gray-900 text-white rounded p-5 mb-8">
        <h2 className="text-sm uppercase tracking-wider text-gray-300 mb-4">Today's Cover Story Schedule — May 22, 2026</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {dailyStories.map((s) => (
            <div key={s.id} className="border border-gray-700 rounded p-3 hover:border-gray-500 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2 mb-1">
                <Clock size={10} className="text-gray-400" />
                <span className="text-xs text-gray-400">{s.time}</span>
                <span className="text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded ml-auto">{s.category}</span>
              </div>
              <p className="text-sm text-gray-200 group-hover:text-white transition-colors leading-snug">{s.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Magazine covers grid */}
      <div className="mb-8">
        <div className="border-b-2 border-black pb-2 mb-5">
          <h2 className="uppercase tracking-wider">Magazine Covers Archive</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {covers.map((cover) => (
            <Link key={cover.month} to={cover.path} className="group">
              <div className="relative overflow-hidden rounded shadow-md mb-2">
                <ImageWithFallback
                  src={cover.image}
                  alt={cover.month}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {cover.current && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                    CURRENT
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs flex items-center gap-1">
                      <BookOpen size={10} /> Read Issue
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{cover.month}</p>
              <p className="text-xs leading-snug mt-0.5 group-hover:text-red-600 transition-colors">{cover.headline}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Current issue feature */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-200 rounded p-6">
        <div>
          <span className="text-xs text-red-600 uppercase tracking-wider">Current Issue Deep Dive</span>
          <h2 className="mt-2 leading-snug">{covers[0].headline}</h2>
          <p className="text-gray-500 text-sm mt-2 mb-4">{covers[0].subhead}</p>
          <ul className="flex flex-col gap-2 mb-5">
            {["The $2 Trillion AI Investment Wave", "Which Sectors Win and Which Get Disrupted", "How to Position Your Portfolio", "The Human Capital Challenge", "Government Policy and AI Governance"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <ChevronRight size={12} className="text-red-600 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-gray-800 transition-colors flex items-center gap-2">
              <BookOpen size={14} /> Read Online
            </button>
            <button className="border border-gray-300 text-sm px-5 py-2 rounded hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download size={14} /> Download
            </button>
          </div>
        </div>
        <div>
          <ImageWithFallback src={covers[0].image} alt={covers[0].headline} className="w-full h-72 object-cover rounded shadow-lg" />
        </div>
      </div>
    </div>
  );
}
