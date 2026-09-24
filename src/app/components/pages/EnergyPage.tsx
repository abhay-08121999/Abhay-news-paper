import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock } from "lucide-react";

import Ener1Img from "../../../imports/Energy1.png";
import Ener2Img from "../../../imports/Energy2.png";
import Ener3Img from "../../../imports/Energy3.png";

/* =========================================================
   HERO DATA
========================================================= */

const hero = {
  category: "CLEAN ENERGY TRANSITION",
  title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally",
  excerpt:
    "The insatiable power appetite of AI data centers is generating a policy crisis that is reverberating from Ireland to Indiana. Multiple governments that had committed to rapid renewable energy transitions are finding themselves reversing or delaying coal and gas plant retirements to ensure grid stability in the face of surging demand. In the United States, the Department of Energy has authorized emergency grid reliability protocols in five states where data center construction is outpacing transmission infrastructure deployment. Technology companies — led by Microsoft, Google, Amazon, and a growing cohort of AI infrastructure firms — have publicly committed to 100% clean energy procurement. However, the sheer scale of new compute capacity being built is stretching the practical limits of current renewable energy availability, forcing uncomfortable compromises between decarbonization targets and operational reliability.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  briefing: "BRIEFING 041",
  image: Ener1Img,
};

const hero1 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "JP Morgan: Energy Resiliency Now a National Security Imperative",
  excerpt:
    "A joint assessment by JP Morgan's Climate Advisory and Security and Resiliency teams concludes that energy resiliency and diversified energy mix have become essential components of national security strategy. The report, featuring contributions from Dr. Sarah Kapnick and security lead Michael Johnson, argues that the convergence of AI-driven demand growth with geopolitical supply chain risks has elevated grid security from a utility management issue to a strategic priority for heads of state. The analysis identifies dealmaking in power generation, storage, and transmission as the most active M&A subsector within energy in 2026, as utilities, industrial companies, and sovereign wealth funds compete for assets that provide reliable, resilient power generation capacity.",
  author: "Sagar Kumar",
  time: "May 2026",
  image: Ener2Img,
};

const hero2 = {
  category: "CLEAN ENERGY TRANSITION",
  title: "China's Dominant Position in Clean Tech Supply Chains Creates New Risk Calculus",
  excerpt:
    "China's commanding position across clean technology supply chains — spanning solar panels, battery storage, green hydrogen production equipment, and electric vehicle components — continues to shape global deployment trajectories while generating strategic risk for Western economies. S&P Global's Energy Horizons 2026 report identifies this dynamic as a key variable in the outcome of the US-China AI and clean energy race. Western governments are responding through the combination of tariffs, domestic manufacturing incentives, and allied reshoring initiatives. The U.S. Inflation Reduction Act has catalyzed over $300 billion in clean energy commitments, while the European Union's Net-Zero Industry Act is accelerating its own manufacturing base for critical clean technologies. However, analysts note that China's cost advantages in key components are likely to persist for the remainder of this decade.",
  author: "Sagar Kumar",
  time: "May 2026",
  image: Ener3Img,
};

/* =========================================================
   ENERGY PRICES
========================================================= */

const energyPrices = [
  {
    commodity: "CRUDE OIL (WTI)",
    price: "$78.45",
    unit: "/bbl",
    change: "-1.23%",
    up: false,
  },
  {
    commodity: "BRENT CRUDE",
    price: "$82.31",
    unit: "/bbl",
    change: "-1.05%",
    up: false,
  },
  {
    commodity: "NATURAL GAS (HH)",
    price: "$2.87",
    unit: "/MMBtu",
    change: "+0.78%",
    up: true,
  },
  {
    commodity: "EUROPEAN TTF GAS",
    price: "€28.40",
    unit: "/MWh",
    change: "+1.23%",
    up: true,
  },
  {
    commodity: "COAL (NEWCASTLE)",
    price: "$124.50",
    unit: "/t",
    change: "-2.10%",
    up: false,
  },
  {
    commodity: "EU CARBON CREDITS",
    price: "€68.20",
    unit: "/t",
    change: "+3.40%",
    up: true,
  },
  {
    commodity: "URANIUM",
    price: "$92.75",
    unit: "/lb",
    change: "+0.50%",
    up: true,
  },
];

/* =========================================================
   RENEWABLE STORIES
========================================================= */

const renewableStories = [
  {
    id: 1,
    title:
      "India's Adani Green Commissions World's Largest Single Solar Plant at 10 GW",
    time: "1 hr ago",
    image:
      "https://images.unsplash.com/photo-1760433116983-76021bd32307?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title:
      "Offshore Wind Auction in UK Draws $45B in Investment — Record for Any Energy Sector",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title:
      "China Completes First Commercial Fusion Power Reactor — 50-Year Dream Becomes Reality",
    time: "6 hrs ago",
    image:
      "https://images.unsplash.com/photo-1760553120312-2821bf54e767?w=400&h=250&fit=crop",
  },
];

/* =========================================================
   DISPATCH GROUPS
========================================================= */

const dispatchGroups = [
  {
    code: "CRUDE",
    title: "Oil & Gas",
    stories: [
      {
        id: 1,
        title:
          "Saudi Aramco cuts capex by $12B as peak oil demand moves closer",
        time: "2 hrs ago",
      },
      {
        id: 2,
        title:
          "Chevron and ExxonMobil join forces in $50B Permian Basin megadeal",
        time: "4 hrs ago",
      },
      {
        id: 3,
        title:
          "Russia's Arctic LNG 2 project faces new equipment shortfall after sanctions tighten",
        time: "6 hrs ago",
      },
      {
        id: 4,
        title:
          "OPEC+ compliance rate falls to 87% as Nigeria and Iraq exceed quotas",
        time: "8 hrs ago",
      },
    ],
  },
  {
    code: "ATOM",
    title: "Nuclear Power",
    stories: [
      {
        id: 1,
        title:
          "Three new SMR (small modular reactor) designs win NRC approval in the US",
        time: "3 hrs ago",
      },
      {
        id: 2,
        title:
          "UK government approves Wylfa nuclear plant restart with £20B guarantee",
        time: "5 hrs ago",
      },
      {
        id: 3,
        title:
          "India signs agreement with France to build 6 pressurized water reactors",
        time: "7 hrs ago",
      },
    ],
  },
  {
    code: "REG",
    title: "Policy & Regulation",
    stories: [
      {
        id: 1,
        title:
          "Ohio suspends a major data-center tax incentive after AI infrastructure costs surge",
        time: "Just now",
      },
      {
        id: 2,
        title:
          "US IRA clean energy tax credits spur $850B in new investment since 2022",
        time: "1 hr ago",
      },
      {
        id: 3,
        title:
          "EU carbon border tax takes full effect — imports now priced on emissions",
        time: "3 hrs ago",
      },
      {
        id: 4,
        title:
          "G7 energy ministers agree to phase out coal by 2035 in landmark accord",
        time: "5 hrs ago",
      },
      {
        id: 5,
        title:
          "India sets world record: 500 GW renewable capacity target 3 years ahead of schedule",
        time: "7 hrs ago",
      },
    ],
  },
];

/* =========================================================
   INDUSTRY SNAPSHOT
========================================================= */

const snapshot = [
  {
    label: "Cleantech Investment Needed (5 Yrs)",
    value: "USD 5–8 Trillion (AI infrastructure + enabling systems)",
  },
  {
    label: "US IRA Clean Energy Commitments",
    value: "Over USD 300 Billion catalyzed since 2022",
  },
  {
    label: "EU Net-Zero Industry Act",
    value: "Accelerating European clean tech manufacturing",
  },
  {
    label: "Power Demand Driver",
    value: "AI data centers forcing grid policy reversals globally",
  },
  {
    label: "Top Energy Deal Type (2026)",
    value: "Power generation, storage, and transmission assets",
  },
];

/* =========================================================
   ENERGY MARKET REPORT
========================================================= */

const energyReportGroups = [
  {
    code: "OIL",
    title: "Oil Market Volatility",
    points: [
      "July 2026 was one of the most volatile months for crude oil in recent memory, driven by the U.S.–Iran conflict, Strait of Hormuz shipping attacks, and Houthi strikes on Saudi tankers.",
      "U.S. crude oil production is forecast at a record 13.83 million barrels per day in 2026.",
    ],
  },
  {
    code: "GAS",
    title: "Natural Gas",
    points: [
      "U.S. marketed natural gas production is projected to hit a record 122.5 Bcf/d in 2026 (+3.4% YoY), driven by the Permian and Haynesville regions.",
      "Henry Hub spot prices are forecast to average $2.87/MMBtu in Q3 2026, down 50 cents from the July STEO, due to reduced LNG feedgas demand and robust production.",
    ],
  },
  {
    code: "PWR",
    title: "Power & Renewables",
    points: [
      "Solar, hydropower, and wind generation grew by 21%, 9%, and 6% respectively in H1 2026 vs. H1 2025.",
      "Natural gas-fired electricity generation increased 2% in H1 2026 and is forecast to rise further in 2027 as gas prices remain relatively low.",
    ],
    growth: [
      { label: "Solar", value: 21 },
      { label: "Hydropower", value: 9 },
      { label: "Wind", value: 6 },
      { label: "Gas-fired", value: 2 },
    ],
  },
];

const energyReportStats = [
  { value: "13.83M", label: "US crude output, bbl/d (2026F)" },
  { value: "122.5", label: "US gas output, Bcf/d (2026F)" },
  { value: "$2.87", label: "Henry Hub, /MMBtu (Q3 2026F)" },
  { value: "+21%", label: "Solar generation growth, H1 YoY" },
  { value: "+9%", label: "Hydropower growth, H1 YoY" },
  { value: "+6%", label: "Wind growth, H1 YoY" },
];

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-5 flex items-center justify-between border-b-2 border-[#17140F] pb-2.5">
      <h2 className="font-bold text-[14px] text-[#17140F] md:text-[15px]">
        {title}
      </h2>

      {note && (
        <span className="text-[9px] uppercase tracking-[0.15em] text-[#8A887F]">
          {note}
        </span>
      )}
    </div>
  );
}

/* =========================================================
   STORY META
========================================================= */

function StoryMeta({
  author = "Sagar Kumar",
  time,
}: {
  author?: string;
  time: string;
}) {
  return (
    <div className="mt-3 flex items-center gap-3 text-[10px] text-[#8A887F]">
      <span>By {author}</span>

      <span className="h-1 w-1 rounded-full bg-[#C9C5BB]" />

      <span className="flex items-center gap-1">
        <Clock size={10} />
        {time}
      </span>
    </div>
  );
}

/* =========================================================
   ADVERTISEMENT BANNER
========================================================= */

function AdvertisementBanner({
  children = "Advertisement Space",
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mb-5 flex h-[72px] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#102B32] via-[#1D414A] to-[#315B69] sm:h-[82px]">
      <div className="text-center text-white">
        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#55B5CE] sm:text-[9px]">
          GOOGLE ADSENSE
        </p>

        <p className="mt-1 text-[12px] font-semibold sm:text-[14px]">
          {children}
        </p>

        <p className="mt-0.5 text-[8px] text-[#8BBBC6]">
          728 × 90 • Leaderboard
        </p>
      </div>

      <span className="absolute right-1 top-1 bg-white/70 px-1 text-[7px] text-gray-500">
        Advertisement
      </span>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export function EnergyPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FAFAF7] text-[#17140F]">
      <div className="w-full px-4 py-5 sm:px-6 md:px-8 md:py-7 lg:px-10 xl:px-12 2xl:px-16">

        {/* ===================================================
            PAGE TITLE
        =================================================== */}

        <header className="mb-8 border-t-[3px] border-[#D92323] pb-5 pt-4">
          <h1 className="font-serif text-[32px] font-bold leading-none tracking-tight sm:text-[38px] md:text-[42px] lg:text-[46px]">
            Energy
          </h1>

          <p className="mt-2 text-[12px] text-[#77736B] sm:text-[13px]">
            Oil &amp; gas, renewables, nuclear, and the global energy transition.
          </p>
        </header>

        {/* ===================================================
            TOP ADVERTISEMENT
        =================================================== */}

        <AdvertisementBanner />

        {/* ===================================================
            HERO AREA
        =================================================== */}

        <section className="mb-12 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,3.3fr)_300px] xl:gap-7">

          {/* MAIN HERO */}

          <article className="group min-w-0 cursor-pointer">
            <div className="overflow-hidden rounded-lg bg-[#E8E5DD]">
              <ImageWithFallback
                src={hero.image}
                alt={hero.title}
                className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:h-[350px] md:h-[430px] lg:h-[500px] xl:h-[520px]"
              />
            </div>

            <div className="mt-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#B8752E] sm:text-[10px]">
                {hero.category}
              </span>

              <h2 className="mt-1.5 font-serif text-[24px] font-bold leading-[1.05] tracking-tight transition-colors duration-200 group-hover:text-[#B8752E] sm:text-[30px] md:text-[35px] lg:text-[38px] xl:text-[40px]">
                {hero.title}
              </h2>

              <p className="mt-3 max-w-5xl text-[12px] leading-[1.6] text-[#66625A] sm:text-[13px] md:text-[14px]">
                {hero.excerpt}
              </p>

              <StoryMeta time={hero.time} />
            </div>
          </article>

          {/* RIGHT SIDEBAR */}

          <aside className="min-w-0">

            {/* SPONSORED CONTENT */}

            <div className="mb-4 rounded-md border border-[#E3DED1] bg-[#F8F4E8] p-2">
              <div className="mb-2 text-[7px] uppercase tracking-widest text-[#8A887F]">
                Sponsored Content
              </div>

              <div className="flex h-[145px] items-center justify-center bg-[#111A3A] text-center sm:h-[170px] xl:h-[185px]">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-[#E4C94C]">
                    Featured Partner
                  </p>

                  <p className="mt-2 text-[12px] font-semibold text-white">
                    Your Ad Here
                  </p>

                  <p className="mt-1 text-[8px] text-gray-300">
                    Reach 2M+ business readers
                  </p>
                </div>
              </div>
            </div>

            {/* MORE STORIES */}

            <SectionHeader title="More Stories" />

            <div className="divide-y divide-[#DED9CE]">
              {renewableStories.map((story) => (
                <article
                  key={story.id}
                  className="group flex cursor-pointer gap-3 py-3 first:pt-0"
                >
                  <div className="h-[60px] w-[82px] shrink-0 overflow-hidden rounded-md bg-gray-200">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="text-[7px] font-bold uppercase text-[#B8752E]">
                      Energy
                    </span>

                    <h3 className="mt-0.5 text-[11px] font-bold leading-[1.25] transition-colors group-hover:text-[#B8752E] sm:text-[12px]">
                      {story.title}
                    </h3>

                    <span className="mt-1 block text-[8px] text-[#99958B]">
                      {story.time}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {/* ===================================================
            LATEST ENERGY NEWS
        =================================================== */}

        <section className="mb-10">
          <SectionHeader title="Latest Energy News" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">

            {renewableStories.map((story) => (
              <article
                key={`renewable-${story.id}`}
                className="group cursor-pointer overflow-hidden rounded-md border border-[#E2DED5] bg-white transition-shadow duration-300 hover:shadow-md"
              >
                <div className="h-[180px] overflow-hidden bg-gray-100 sm:h-[190px] md:h-[205px]">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-3.5">
                  <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#B8752E]">
                    Renewable Energy
                  </span>

                  <h3 className="mt-1.5 font-serif text-[16px] font-bold leading-[1.15] transition-colors group-hover:text-[#B8752E] sm:text-[17px]">
                    {story.title}
                  </h3>

                  <div className="mt-2.5 flex items-center gap-1.5 text-[9px] text-[#99958B]">
                    <Clock size={9} />
                    {story.time}
                  </div>
                </div>
              </article>
            ))}

            {/* HERO 1 */}

            <article className="group cursor-pointer overflow-hidden rounded-md border border-[#E2DED5] bg-white transition-shadow duration-300 hover:shadow-md">
              <div className="h-[180px] overflow-hidden bg-gray-100 sm:h-[190px] md:h-[205px]">
                <ImageWithFallback
                  src={hero1.image}
                  alt={hero1.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-3.5">
                <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#B8752E]">
                  {hero1.category}
                </span>

                <h3 className="mt-1.5 font-serif text-[16px] font-bold leading-[1.15] transition-colors group-hover:text-[#B8752E] sm:text-[17px]">
                  {hero1.title}
                </h3>

                <StoryMeta time={hero1.time} />
              </div>
            </article>

            {/* HERO 2 */}

            <article className="group cursor-pointer overflow-hidden rounded-md border border-[#E2DED5] bg-white transition-shadow duration-300 hover:shadow-md">
              <div className="h-[180px] overflow-hidden bg-gray-100 sm:h-[190px] md:h-[205px]">
                <ImageWithFallback
                  src={hero2.image}
                  alt={hero2.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-3.5">
                <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-[#B8752E]">
                  {hero2.category}
                </span>

                <h3 className="mt-1.5 font-serif text-[16px] font-bold leading-[1.15] transition-colors group-hover:text-[#B8752E] sm:text-[17px]">
                  {hero2.title}
                </h3>

                <StoryMeta time={hero2.time} />
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================
            SECOND ADVERTISEMENT
        =================================================== */}

        <AdvertisementBanner>
          Business Solutions | Powered by The Pride Times
        </AdvertisementBanner>

        {/* ===================================================
            SPONSORSHIP
        =================================================== */}

        <section className="mb-8 rounded-md border border-[#E6E1D7] bg-[#F5F3EE] p-4 sm:p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="border border-[#DED9CE] bg-white px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-[#8A887F]">
              Sponsorship
            </span>

            <span className="text-[9px] text-[#9A968D]">
              Presented by our partners
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Global Finance Summit 2026",
              "Tech Leaders Forum",
              "Energy Transition Conference",
              "AI & Business World",
            ].map((title) => (
              <div
                key={title}
                className="flex h-[90px] flex-col items-center justify-center rounded-md border border-[#E4DFD6] bg-white text-center"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-50">
                  <span className="text-[11px] text-[#D92323]">✦</span>
                </div>

                <p className="text-[9px] font-bold text-[#17140F]">
                  {title}
                </p>

                <p className="mt-1 text-[7px] text-[#99958B]">
                  Sponsored Event
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            ENERGY MARKET REPORT
        =================================================== */}

        <section className="mb-10">
          <SectionHeader
            title="Energy Market Report"
            note="July 2026 Wrap"
          />

          <p className="mb-4 text-[9px] uppercase tracking-[0.14em] text-[#8A887F]">
            2.2 &nbsp; Energy
          </p>

          {/* KEY FIGURES */}

          <div className="mb-6 w-full overflow-x-auto border border-[#D9D4C7] bg-white">
            <div className="flex min-w-[850px]">
              {energyReportStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 px-4 py-4 ${
                    index > 0 ? "border-l border-[#D9D4C7]" : ""
                  }`}
                >
                  <p className="font-mono text-xl font-semibold text-[#B8752E] md:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[8px] uppercase leading-tight tracking-wide text-[#8A887F]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {energyReportGroups.map((group) => (
              <div
                key={group.code}
                className="border border-[#D9D4C7] bg-white"
              >
                <div className="flex items-center gap-2 border-b border-[#D9D4C7] px-4 py-3">
                  <span className="font-mono text-[10px] font-bold text-[#B8752E]">
                    {group.code}
                  </span>

                  <span className="text-[#AAA69D]">—</span>

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.1em]">
                    {group.title}
                  </h3>
                </div>

                <div className="p-4">
                  {group.points.map((point, index) => (
                    <div
                      key={index}
                      className="mb-3 flex gap-2 last:mb-0"
                    >
                      <span className="mt-1 text-[9px] text-[#B8752E]">
                        ▪
                      </span>

                      <p className="text-[12px] leading-[1.55] text-[#55534C]">
                        {point}
                      </p>
                    </div>
                  ))}

                  {group.growth && (
                    <div className="mt-3 border-t border-[#E5E1D8] pt-3">
                      <p className="mb-2 text-[8px] uppercase tracking-wide text-[#8A887F]">
                        Generation growth, H1 2026 vs. H1 2025
                      </p>

                      {group.growth.map((growth) => (
                        <div
                          key={growth.label}
                          className="mb-2 flex items-center gap-2"
                        >
                          <span className="w-[65px] text-[9px] text-[#66625A]">
                            {growth.label}
                          </span>

                          <div className="h-1.5 flex-1 overflow-hidden bg-[#EEEAE1]">
                            <div
                              className="h-full bg-[#B8752E]"
                              style={{
                                width: `${(growth.value / 21) * 100}%`,
                              }}
                            />
                          </div>

                          <span className="w-7 text-right font-mono text-[9px] text-[#B8752E]">
                            +{growth.value}%
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            INDUSTRY SNAPSHOT + SECONDARY HERO
        =================================================== */}

        <section className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* SECONDARY HERO */}

          <article className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <ImageWithFallback
                src={hero2.image}
                alt={hero2.title}
                className="h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:h-[350px] lg:h-[400px]"
              />
            </div>

            <span className="mt-3 block text-[9px] font-bold uppercase tracking-[0.14em] text-[#B8752E]">
              {hero2.category}
            </span>

            <h2 className="mt-1.5 font-serif text-[23px] font-bold leading-[1.1] transition-colors group-hover:text-[#B8752E] sm:text-[28px]">
              {hero2.title}
            </h2>

            <p className="mt-2.5 text-[12px] leading-[1.6] text-[#66625A] sm:text-[13px]">
              {hero2.excerpt}
            </p>

            <StoryMeta time={hero2.time} />
          </article>

          {/* SNAPSHOT */}

          <div>
            <SectionHeader title="Industry Snapshot" />

            <div>
              {snapshot.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-2 border-b border-[#D9D4C7] py-4 sm:grid-cols-[40%_1fr] sm:gap-5 ${
                    index === 0 ? "border-t border-[#D9D4C7]" : ""
                  }`}
                >
                  <span className="text-[9px] font-bold uppercase tracking-wide text-[#B8752E]">
                    {row.label}
                  </span>

                  <span className="text-[12px] leading-snug text-[#17140F] sm:text-[13px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* ENERGY PRICES */}

            <div className="mt-8">
              <SectionHeader title="Energy Prices" />

              <div className="border border-[#D9D4C7] bg-[#17140F] text-[#EDE9DD]">
                {energyPrices.map((energy) => (
                  <div
                    key={energy.commodity}
                    className="flex items-center justify-between gap-3 border-b border-[#3A3934] px-3 py-2.5 last:border-b-0"
                  >
                    <span className="font-mono text-[8px] text-[#B8B4A8] sm:text-[9px]">
                      {energy.commodity}
                    </span>

                    <div className="flex shrink-0 items-center gap-2">
                      <span className="font-mono text-[10px]">
                        {energy.price}
                        <span className="text-[#8A887F]">
                          {energy.unit}
                        </span>
                      </span>

                      <span
                        className={`font-mono text-[8px] ${
                          energy.up
                            ? "text-emerald-400"
                            : "text-red-400"
                        }`}
                      >
                        {energy.up ? "▲" : "▼"} {energy.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTOR DISPATCHES
        =================================================== */}

        <section className="mb-10">
          <SectionHeader title="Sector Dispatches" />

          <div className="grid grid-cols-1 divide-y divide-[#D9D4C7] md:grid-cols-3 md:divide-x md:divide-y-0">
            {dispatchGroups.map((group) => (
              <div
                key={group.code}
                className="py-5 md:px-6 md:py-0 first:md:pl-0 last:md:pr-0"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-[#B8752E]">
                    {group.code}
                  </span>

                  <span className="text-[#AAA69D]">—</span>

                  <h3 className="text-[10px] font-bold uppercase tracking-[0.1em]">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.stories.map((story) => (
                    <article
                      key={story.id}
                      className="group cursor-pointer"
                    >
                      <p className="text-[12px] leading-[1.45] transition-colors group-hover:text-[#B8752E] sm:text-[13px]">
                        {story.title}
                      </p>

                      <span className="mt-1.5 flex items-center gap-1 text-[8px] uppercase tracking-wide text-[#8A887F]">
                        <Clock size={9} />
                        {story.time}
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================
            NEWSLETTER
        =================================================== */}

        <section className="mb-2 w-full rounded-md bg-[#071C30] px-5 py-8 text-center sm:px-8 sm:py-9">
          <h2 className="font-serif text-[22px] font-bold text-white sm:text-[26px]">
            Stay Ahead with The Pride Times
          </h2>

          <p className="mt-1 text-[10px] text-gray-300 sm:text-[11px]">
            Daily briefings on Energy delivered to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-5 flex max-w-[480px] flex-col justify-center gap-2 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-sm border border-[#385067] bg-[#20374B] px-3 text-[11px] text-white outline-none placeholder:text-gray-400 focus:border-[#B8752E]"
            />

            <button
              type="submit"
              className="h-10 rounded-sm bg-[#E31B23] px-5 text-[10px] font-bold text-white transition-colors hover:bg-[#C8171E]"
            >
              Subscribe Free
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}
