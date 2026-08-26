import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Zap, TrendingUp, TrendingDown } from "lucide-react";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";
import Ener1Img from "../../../imports/Energy1.png";
import Ener2Img from "../../../imports/Energy2.png";
import Ener3Img from "../../../imports/Energy3.png";

function SH({ title }: { title: string }) {
  return (
    <div className="border-b-2 border-black pb-2 mb-4">
      <h2 className="uppercase tracking-wider">{title}</h2>
    </div>
  );
}

const hero = {
  category: "CLEAN ENERGY TRANSITION",
  title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally ",
  excerpt: "The insatiable power appetite of AI data centers is generating a policy crisis that is reverberating from Ireland to Indiana. Multiple governments that had committed to rapid renewable energy transitions are finding themselves reversing or delaying coal and gas plant retirements to ensure grid stability in the face of surging demand. In the United States, the Department of Energy has authorized emergency grid reliability protocols in five states where data center construction is outpacing transmission infrastructure deployment.Technology companies — led by Microsoft, Google, Amazon, and a growing cohort of AI infrastructure firms — have publicly committed to 100% clean energy procurement. However, the sheer scale of new compute capacity being built is stretching the practical limits of current renewable energy availability, forcing uncomfortable compromises between decarbonization targets and operational reliability.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Ener1Img,
};
const hero1 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "JP Morgan: Energy Resiliency Now a National Security Imperative  ",
  excerpt: "A joint assessment by JP Morgan's Climate Advisory and Security and Resiliency teams concludes that energy resiliency and diversified energy mix have become essential components of national security strategy. The report, featuring contributions from Dr. Sarah Kapnick and security lead Michael Johnson, argues that the convergence of AI-driven demand growth with geopolitical supply chain risks has elevated grid security from a utility management issue to a strategic priority for heads of state. The analysis identifies dealmaking in power generation, storage, and transmission as the most active M&A subsector within energy in 2026, as utilities, industrial companies, and sovereign wealth funds compete for assets that provide reliable, resilient power generation capacity. ",
  author: "Sagar Kumar",
  time: "May 2026",
  image: Ener2Img,
};
const hero2 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "China's Dominant Position in Clean Tech Supply Chains Creates New Risk Calculus ",
  excerpt: "China's commanding position across clean technology supply chains — spanning solar panels, battery storage, green hydrogen production equipment, and electric vehicle components — continues to shape global deployment trajectories while generating strategic risk for Western economies. S&P Global's Energy Horizons 2026 report identifies this dynamic as a key variable in the outcome of the US-China AI and clean energy race.Western governments are responding through the combination of tariffs, domestic manufacturing incentives, and allied reshoring initiatives. The U.S. Inflation Reduction Act has catalyzed over $300 billion in clean energy commitments, while the European Union's Net-Zero Industry Act is accelerating its own manufacturing base for critical clean technologies. However, analysts note that China's cost advantages in key components are likely to persist for the remainder of this decade. ",
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

export function EnergyPage() {
  return (
    <div className="py-6 max-w-7xl mx-auto px-4">
      {/* Page header */}
      <div className="border-b-4 border-black mb-8 pb-3 flex items-center gap-3">
        <Zap size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Power & Resources</span>
          <h1 className="mt-0.5">Energy & Natural Resources</h1>
        </div>
      </div>

      {/* Hero + prices + quote */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback
              src={hero.image}
              alt={hero.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
          <h3 className="mt-2 leading-tight">{hero.title}</h3>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Energy prices */}
          <div>
            <SH title="Energy Prices Live" />
            <div className="divide-y divide-gray-100">
              {energyPrices.map((e) => (
                <div key={e.commodity} className="py-1.5 flex items-center justify-between">
                  <span className="text-xs text-gray-700">{e.commodity}</span>
                  <div className="text-right">
                    <p className="text-xs">{e.price}</p>
                    <p className={`text-xs flex items-center justify-end gap-1 ${e.up ? "text-green-600" : "text-red-600"}`}>
                      {e.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}{e.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote block */}
          <div className="border border-gray-700 bg-slate-200 flex">
            <div className="w-2 border-r border-gray-700 bg-slate-300 shrink-0" />
            <div className="p-4">
              <p className="italic text-sm leading-relaxed text-gray-900">
                "AI-driven load growth, grid bottlenecks, cleantech market fragmentation, and geopolitics are redefining the terms of progress in 2026's energy landscape."
              </p>
              <p className="mt-2 font-bold text-gray-900 text-sm">
                — S&P Global Energy Horizons Top Trends 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary hero 1 */}
      <div className="mb-10 group cursor-pointer">
        <div className="relative overflow-hidden rounded mb-4">
          <ImageWithFallback
            src={hero1.image}
            alt={hero1.title}
            className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <span className="text-xs text-red-600 uppercase tracking-wider">{hero1.category}</span>
        <h3 className="mt-2 leading-tight">{hero1.title}</h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{hero1.excerpt}</p>
        <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
          <span>By {hero1.author}</span>
          <span className="flex items-center gap-1"><Clock size={10} /> {hero1.time}</span>
        </div>
      </div>

      {/* Secondary hero 2 + industry table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-start">
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded mb-3">
            <ImageWithFallback
              src={hero2.image}
              alt={hero2.title}
              className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero2.category}</span>
          <h3 className="mt-2 leading-tight">{hero2.title}</h3>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{hero2.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <span>By {hero2.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} /> {hero2.time}</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              <tr>
                <td className="w-1/3 bg-slate-200 font-bold p-3 border border-gray-300">
                  Cleantech Investment Needed (5 Yrs)
                </td>
                <td className="p-3 border border-gray-300">
                  USD 5–8 Trillion (AI infrastructure + enabling systems)
                </td>
              </tr>
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  US IRA Clean Energy Commitments
                </td>
                <td className="p-3 border border-gray-300">
                  Over USD 300 Billion catalyzed since 2022
                </td>
              </tr>
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  EU Net-Zero Industry Act
                </td>
                <td className="p-3 border border-gray-300">
                  Accelerating European clean tech manufacturing
                </td>
              </tr>
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  Power Demand Driver
                </td>
                <td className="p-3 border border-gray-300">
                  AI data centers forcing grid policy reversals globally
                </td>
              </tr>
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  Top Energy Deal Type (2026)
                </td>
                <td className="p-3 border border-gray-300">
                  Power generation, storage, and transmission assets
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Renewables */}
      <div className="mb-10">
        <SH title="Renewable Energy" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renewableStories.map((s) => (
            <div key={s.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded mb-3">
                <ImageWithFallback
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="leading-snug group-hover:text-red-600 transition-colors">{s.title}</h3>
              <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsored */}
      <div className="mb-10">
        <SponsoredArticleCard
          headline="BP's Net Zero 2030 Strategy: How the Oil Major is Reinventing Itself for the Energy Transition"
          excerpt="BP has committed $60B to clean energy through 2030 while maintaining profitable hydrocarbons. How the company is navigating the world's most consequential transition."
          advertiser="BP plc"
          category="SPONSORED · ENERGY"
          readTime={8}
          image="https://images.unsplash.com/photo-1760433116983-76021bd32307?w=800&h=400&fit=crop"
          link="#"
          disclosureText="Paid content by BP. Does not reflect editorial opinion of The Pride Times."
        />
      </div>

      {/* Oil/Gas + Nuclear + Policy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <SH title="Oil & Gas" />
          <div className="divide-y divide-gray-100">
            {oilGasNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Nuclear Power" />
          <div className="divide-y divide-gray-100">
            {nuclearNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Policy & Regulation" />
          <div className="divide-y divide-gray-100">
            {policyNews.map((n) => (
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
