import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Zap, TrendingUp, TrendingDown, Radio } from "lucide-react";
import Ener1Img from "../../../imports/Energy1.png";
import Ener2Img from "../../../imports/Energy2.png";
import Ener3Img from "../../../imports/Energy3.png";

function SH({ title, accent = "amber" }: { title: string; accent?: "amber" | "sky" | "slate" }) {
  const dot = {
    amber: "bg-amber-500",
    sky: "bg-sky-500",
    slate: "bg-slate-500",
  }[accent];
  return (
    <div className="flex items-center gap-2 border-b-2 border-black pb-2.5 mb-5">
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      <h2 className="uppercase tracking-[0.15em] text-sm font-semibold">{title}</h2>
    </div>
  );
}

const hero = {
  category: "CLEAN ENERGY TRANSITION",
  title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally ",
  excerpt: "The insatiable power appetite of AI data centers is generating a policy crisis that is reverberating from Ireland to Indiana. Multiple governments that had committed to rapid renewable energy transitions are finding themselves reversing or delaying coal and gas plant retirements to ensure grid stability in the face of surging demand. In the United States, the Department of Energy has authorized emergency grid reliability protocols in five states where data center construction is outpacing transmission infrastructure deployment. Technology companies — led by Microsoft, Google, Amazon, and a growing cohort of AI infrastructure firms — have publicly committed to 100% clean energy procurement. However, the sheer scale of new compute capacity being built is stretching the practical limits of current renewable energy availability, forcing uncomfortable compromises between decarbonization targets and operational reliability.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Ener1Img,
};
const hero1 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "JP Morgan: Energy Resiliency Now a National Security Imperative",
  excerpt: "A joint assessment by JP Morgan's Climate Advisory and Security and Resiliency teams concludes that energy resiliency and diversified energy mix have become essential components of national security strategy. The report, featuring contributions from Dr. Sarah Kapnick and security lead Michael Johnson, argues that the convergence of AI-driven demand growth with geopolitical supply chain risks has elevated grid security from a utility management issue to a strategic priority for heads of state. The analysis identifies dealmaking in power generation, storage, and transmission as the most active M&A subsector within energy in 2026, as utilities, industrial companies, and sovereign wealth funds compete for assets that provide reliable, resilient power generation capacity.",
  author: "Sagar Kumar",
  time: "May 2026",
  image: Ener2Img,
};
const hero2 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "China's Dominant Position in Clean Tech Supply Chains Creates New Risk Calculus",
  excerpt: "China's commanding position across clean technology supply chains — spanning solar panels, battery storage, green hydrogen production equipment, and electric vehicle components — continues to shape global deployment trajectories while generating strategic risk for Western economies. S&P Global's Energy Horizons 2026 report identifies this dynamic as a key variable in the outcome of the US-China AI and clean energy race. Western governments are responding through the combination of tariffs, domestic manufacturing incentives, and allied reshoring initiatives. The U.S. Inflation Reduction Act has catalyzed over $300 billion in clean energy commitments, while the European Union's Net-Zero Industry Act is accelerating its own manufacturing base for critical clean technologies. However, analysts note that China's cost advantages in key components are likely to persist for the remainder of this decade.",
  author: "Sagar Kumar",
  time: "May 2026",
  image: Ener3Img,
};

const energyPrices = [
  { commodity: "Crude Oil (WTI)", price: "$78.45/bbl", change: "-1.23%", up: false },
  { commodity: "Brent Crude", price: "$82.31/bbl", change: "-1.05%", up: false },
  { commodity: "Natural Gas (Henry Hub)", price: "$2.87/MMBtu", change: "+0.78%", up: true },
  { commodity: "European TTF Gas", price: "€28.40/MWh", change: "+1.23%", up: true },
  { commodity: "Coal (Newcastle)", price: "$124.50/t", change: "-2.10%", up: false },
  { commodity: "EU Carbon Credits", price: "€68.20/t", change: "+3.40%", up: true },
  { commodity: "Uranium", price: "$92.75/lb", change: "+0.50%", up: true },
];

const renewableStories = [
  { id: 1, title: "India's Adani Green Commissions World's Largest Single Solar Plant at 10 GW", time: "1 hr ago", image: "https://images.unsplash.com/photo-1760433116983-76021bd32307?w=400&h=250&fit=crop" },
  { id: 2, title: "Offshore Wind Auction in UK Draws $45B in Investment — Record for Any Energy Sector", time: "3 hrs ago", image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=400&h=250&fit=crop" },
  { id: 3, title: "China Completes First Commercial Fusion Power Reactor — 50-Year Dream Becomes Reality", time: "6 hrs ago", image: "https://images.unsplash.com/photo-1760553120312-2821bf54e767?w=400&h=250&fit=crop" },
];

const oilGasNews = [
  { id: 1, title: "Saudi Aramco Cuts Capex by $12B as Peak Oil Demand Moves Closer", time: "2 hrs ago" },
  { id: 2, title: "Chevron and ExxonMobil Join Forces in $50B Permian Basin Megadeal", time: "4 hrs ago" },
  { id: 3, title: "Russia's Arctic LNG 2 Project Faces New Equipment Shortfall After Sanctions Tighten", time: "6 hrs ago" },
  { id: 4, title: "OPEC+ Compliance Rate Falls to 87% as Nigeria and Iraq Exceed Quotas", time: "8 hrs ago" },
];

const nuclearNews = [
  { id: 1, title: "Three New SMR (Small Modular Reactor) Designs Win NRC Approval in the US", time: "3 hrs ago" },
  { id: 2, title: "UK Government Approves Wylfa Nuclear Plant Restart With £20B Guarantee", time: "5 hrs ago" },
  { id: 3, title: "India Signs Agreement with France to Build 6 Pressurized Water Reactors", time: "7 hrs ago" },
];

const policyNews = [
  { id: 1, title: "Ohio suspends a major data-center tax incentive after AI infrastructure costs surge, intensifying grid policy tensions.", time: "Just now" },
  { id: 2, title: "US IRA Clean Energy Tax Credits Spur $850B in New Investment Since 2022", time: "1 hr ago" },
  { id: 3, title: "EU Carbon Border Tax Takes Full Effect — Imports Now Priced on Emissions", time: "3 hrs ago" },
  { id: 4, title: "G7 Energy Ministers Agree to Phase Out Coal by 2035 in Landmark Accord", time: "5 hrs ago" },
  { id: 5, title: "India Sets World Record: 500 GW Renewable Capacity Target 3 Years Ahead of Schedule", time: "7 hrs ago" },
];

const snapshot = [
  { label: "Cleantech Investment Needed (5 Yrs)", value: "USD 5–8 Trillion (AI infrastructure + enabling systems)" },
  { label: "US IRA Clean Energy Commitments", value: "Over USD 300 Billion catalyzed since 2022" },
  { label: "EU Net-Zero Industry Act", value: "Accelerating European clean tech manufacturing" },
  { label: "Power Demand Driver", value: "AI data centers forcing grid policy reversals globally" },
  { label: "Top Energy Deal Type (2026)", value: "Power generation, storage, and transmission assets" },
];

function NewsColumn({
  title,
  accent,
  items,
}: {
  title: string;
  accent: "amber" | "sky" | "slate";
  items: { id: number; title: string; time: string }[];
}) {
  const border = {
    amber: "border-l-amber-500",
    sky: "border-l-sky-500",
    slate: "border-l-slate-500",
  }[accent];
  return (
    <div>
      <SH title={title} accent={accent} />
      <div className="divide-y divide-gray-100">
        {items.map((n) => (
          <div
            key={n.id}
            className={`py-3.5 pl-3 -ml-3 border-l-2 border-l-transparent hover:${border} hover:bg-gray-50/60 transition-colors duration-200 group cursor-pointer`}
          >
            <p className="text-sm leading-snug group-hover:text-amber-700 transition-colors">{n.title}</p>
            <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">
              <Clock size={10} />
              {n.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EnergyPage() {
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Page header */}
      <div className="border-b-4 border-black mb-12 pb-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
          <Zap size={16} className="text-amber-400" fill="currentColor" />
        </div>
        <div>
          <span className="text-xs text-amber-700 uppercase tracking-[0.2em] font-semibold">Power &amp; Resources</span>
          <h1 className="mt-0.5 font-serif">Energy &amp; Natural Resources</h1>
        </div>
      </div>

      {/* Hero + prices + quote */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded-sm mb-5">
            <ImageWithFallback
              src={hero.image}
              alt={hero.title}
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <span className="text-xs text-amber-700 uppercase tracking-wider font-semibold">{hero.category}</span>
          <h3 className="mt-2.5 leading-tight font-serif text-2xl md:text-3xl group-hover:text-amber-700 transition-colors">
            {hero.title}
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-gray-400 border-t border-gray-100 pt-3">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          {/* Energy prices — ticker treatment */}
          <div className="bg-slate-950 rounded-sm overflow-hidden shadow-sm">
            <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-white/10">
              <Radio size={12} className="text-amber-400 animate-pulse" />
              <h2 className="uppercase tracking-[0.15em] text-xs font-semibold text-white">Energy Prices Live</h2>
            </div>
            <div className="divide-y divide-white/5 px-4">
              {energyPrices.map((e) => (
                <div key={e.commodity} className="py-2.5 flex items-center justify-between">
                  <span className="text-xs text-slate-300">{e.commodity}</span>
                  <div className="text-right">
                    <p className="text-xs font-mono text-white tabular-nums">{e.price}</p>
                    <p
                      className={`text-xs font-mono flex items-center justify-end gap-1 tabular-nums mt-0.5 ${
                        e.up ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {e.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                      {e.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-3" />
          </div>

          {/* Quote block */}
          <div className="relative border border-slate-300 bg-slate-50 pl-6 pr-5 py-5 rounded-sm">
            <span className="absolute left-2.5 top-1.5 text-4xl leading-none text-amber-500/40 font-serif select-none">
              &ldquo;
            </span>
            <p className="italic text-sm leading-relaxed text-gray-900 relative">
              AI-driven load growth, grid bottlenecks, cleantech market fragmentation, and geopolitics are redefining
              the terms of progress in 2026&rsquo;s energy landscape.
            </p>
            <p className="mt-3.5 font-semibold text-gray-900 text-xs uppercase tracking-wide">
              — S&amp;P Global Energy Horizons Top Trends 2026
            </p>
          </div>
        </div>
      </div>

      {/* Secondary hero 1 */}
      <div className="mb-14 group cursor-pointer">
        <div className="relative overflow-hidden rounded-sm mb-4">
          <ImageWithFallback
            src={hero1.image}
            alt={hero1.title}
            className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <span className="absolute bottom-4 left-4 text-xs text-white bg-amber-600 px-2.5 py-1 uppercase tracking-wider font-semibold rounded-sm">
            {hero1.category}
          </span>
        </div>
        <h3 className="mt-2 leading-tight font-serif text-2xl md:text-3xl group-hover:text-amber-700 transition-colors">
          {hero1.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">{hero1.excerpt}</p>
        <div className="flex items-center gap-3 mt-3.5 text-xs text-gray-400 border-t border-gray-100 pt-3">
          <span>By {hero1.author}</span>
          <span className="flex items-center gap-1"><Clock size={10} /> {hero1.time}</span>
        </div>
      </div>

      {/* Secondary hero 2 + industry snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-start">
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-sm mb-3.5">
            <ImageWithFallback
              src={hero2.image}
              alt={hero2.title}
              className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs text-white bg-amber-600 px-2.5 py-1 uppercase tracking-wider font-semibold rounded-sm">
              {hero2.category}
            </span>
          </div>
          <h3 className="mt-2 leading-tight font-serif text-2xl md:text-3xl group-hover:text-amber-700 transition-colors">
            {hero2.title}
          </h3>
          <p className="text-gray-600 text-sm mt-2.5 leading-relaxed">{hero2.excerpt}</p>
          <div className="flex items-center gap-3 mt-3.5 text-xs text-gray-400 border-t border-gray-100 pt-3">
            <span>By {hero2.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {hero2.time}</span>
          </div>
        </div>

        <div className="border border-gray-300 rounded-sm overflow-hidden self-stretch shadow-sm">
          <div className="bg-black px-4 py-3">
            <h2 className="uppercase tracking-[0.15em] text-xs font-semibold text-white">Industry Snapshot</h2>
          </div>
          {snapshot.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-4 py-4 ${
                i % 2 === 1 ? "bg-slate-50" : "bg-white"
              } ${i !== snapshot.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-700 sm:w-2/5 shrink-0">
                {row.label}
              </span>
              <span className="text-sm text-gray-800">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Renewables */}
      <div className="mb-14">
        <SH title="Renewable Energy" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {renewableStories.map((s) => (
            <div key={s.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-3 relative">
                <ImageWithFallback
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <span className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
              </div>
              <h3 className="leading-snug group-hover:text-amber-700 transition-colors">{s.title}</h3>
              <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                <Clock size={10} />
                {s.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Oil/Gas + Nuclear + Policy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 pt-2 border-t-2 border-black">
        <NewsColumn title="Oil & Gas" accent="amber" items={oilGasNews} />
        <NewsColumn title="Nuclear Power" accent="sky" items={nuclearNews} />
        <NewsColumn title="Policy & Regulation" accent="slate" items={policyNews} />
      </div>
    </div>
  );
}
