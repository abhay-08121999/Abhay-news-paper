tsx
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  Building2,
  Wifi,
  Leaf,
  Car,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";

import Smartc1Img from "../../../imports/Smartc1.png";
import Smartc2Img from "../../../imports/Smartc2.png";
import Smartc3Img from "../../../imports/Smartc3.png";
import Smartc4Img from "../../../imports/Smartc4.png";

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-5">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
        <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.14em] text-gray-900">
          {title}
        </h2>
      </div>

      <ArrowUpRight size={16} className="text-gray-400" />
    </div>
  );
}

/* =========================================================
   ARTICLE METADATA
========================================================= */

function ArticleMeta({
  author,
  time,
}: {
  author: string;
  time: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-gray-200 text-xs text-gray-400">
      <span className="font-medium text-gray-500">By {author}</span>

      <span className="flex items-center gap-1">
        <Clock size={11} />
        {time}
      </span>
    </div>
  );
}

/* =========================================================
   ARTICLE CARD
========================================================= */

function ArticleCard({
  data,
  large = false,
}: {
  data: {
    category: string;
    title: string;
    excerpt: string;
    author: string;
    time: string;
    image: string;
  };
  large?: boolean;
}) {
  return (
    <article className="group cursor-pointer">
      <div
        className={`relative overflow-hidden bg-gray-100 rounded-sm ${
          large ? "h-72 md:h-[430px]" : "h-60 md:h-72"
        }`}
      >
        <ImageWithFallback
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

        <span className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em]">
          {data.category}
        </span>
      </div>

      <div className="pt-4">
        <h2
          className={`font-serif font-bold leading-tight text-gray-950 transition-colors duration-200 group-hover:text-red-600 ${
            large
              ? "text-2xl md:text-4xl"
              : "text-xl md:text-2xl"
          }`}
        >
          {data.title}
        </h2>

        <p
          className={`mt-3 text-gray-600 leading-relaxed ${
            large
              ? "text-sm md:text-base line-clamp-5"
              : "text-sm line-clamp-4"
          }`}
        >
          {data.excerpt}
        </p>

        <ArticleMeta author={data.author} time={data.time} />
      </div>
    </article>
  );
}

/* =========================================================
   DATA
========================================================= */

const hero = {
  category: "URBAN FUTURES",
  title:
    "Smart Cities Market on Track for $873 Billion Valuation — Momentum Continues in 2026",
  excerpt:
    "The global Smart Cities market, projected to reach $873.7 billion by the end of 2026 based on a compound annual growth rate of 13.8% from a $457 billion base in 2021, is demonstrating strong momentum across transportation, utilities, public safety, and digital governance segments. The smart transportation sub-segment continues to command the fastest growth rate, driven by urban mobility platforms, autonomous vehicle infrastructure, and integrated traffic management systems. The energy component of smart utilities holds the largest individual market share, reflecting significant investment in smart metering, distributed grid management, and real-time demand response systems. Cities across Asia-Pacific — including Singapore, Seoul, and Tokyo — continue to lead in deployment maturity, while European and North American cities accelerate their own smart infrastructure programs under national industrial strategy frameworks.",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc1Img,
};

const hero1 = {
  category: "URBAN FUTURES",
  title:
    "Suffolk Technologies Backs Built-World Startups Through Smart City Incubator",
  excerpt:
    "Suffolk Technologies, the venture arm of construction giant Suffolk, has launched a new cohort of its built-world incubator program, targeting early-stage startups operating at the intersection of construction technology, smart buildings, and urban infrastructure. The program offers $150,000 in initial funding structured as a post-money SAFE in exchange for 4.5% equity, alongside access to Suffolk's network of over 400 industry advisors and major construction project sites. Focus areas for the current cohort include cognitive city systems, health system resilience within the built environment, water and energy system optimization, circular economy applications, and coastal climate resilience infrastructure.",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc2Img,
};

const hero2 = {
  category: "URBAN FUTURES",
  title:
    "De Nora Industrial Innovation Program Opens Global Applications",
  excerpt:
    "Italy's De Nora has opened a global call for startup applications to its industrial innovation program, offering up to EUR 50,000 per venture through a SAFE-based financing structure. The program targets startups working on industrial operations redesign, manufacturing optimization, automation, health and safety technology, and resource use optimization. Applications close June 20, 2026.",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc3Img,
};

const hero3 = {
  category: "URBAN FUTURES",
  title:
    "Smart Public Safety: AI-Driven Urban Security Systems Gain Adoption",
  excerpt:
    "AI-powered public safety platforms — encompassing gunshot detection, smart surveillance, and emergency response optimization — are seeing accelerated adoption across major metropolitan areas. Cities that have deployed integrated safety intelligence platforms report measurable reductions in emergency response times and improvements in crime pattern analysis. Civil liberties organizations are intensifying scrutiny of automated facial recognition and predictive policing tools, pushing cities toward governance frameworks that establish transparency requirements, audit mechanisms, and community oversight boards.",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc4Img,
};

/* =========================================================
   CITY RANKINGS
========================================================= */

const cityRankings = [
  {
    rank: 1,
    city: "Singapore",
    score: 98.4,
    population: "5.8M",
    tag: "Digital Leader",
  },
  {
    rank: 2,
    city: "Copenhagen",
    score: 96.7,
    population: "0.8M",
    tag: "Green Capital",
  },
  {
    rank: 3,
    city: "Tokyo",
    score: 95.2,
    population: "14M",
    tag: "Mobility Pioneer",
  },
  {
    rank: 4,
    city: "Amsterdam",
    score: 93.8,
    population: "0.9M",
    tag: "Bike + Tech",
  },
  {
    rank: 5,
    city: "Seoul",
    score: 92.4,
    population: "10M",
    tag: "5G Leader",
  },
  {
    rank: 6,
    city: "Dubai",
    score: 91.3,
    population: "3.4M",
    tag: "AI Hub",
  },
  {
    rank: 7,
    city: "Bangalore",
    score: 87.6,
    population: "13M",
    tag: "Tech Ecosystem",
  },
];

/* =========================================================
   NEWS DATA
========================================================= */

const govTechNews = [
  {
    id: 1,
    title:
      "IMD Smart City Index 2026 finds governance, transparency and infrastructure now matter more than tech deployment; Zurich holds top rank for a seventh year, with Oslo, Geneva, London and Copenhagen following and Dubai leading non-European cities.",
    time: "Just now",
  },
  {
    id: 2,
    title:
      "Southeast Asia's first Smart City Expo opens in Kuala Lumpur, highlighting Malaysia's move into AI-powered urban innovation.",
    time: "Just now",
  },
  {
    id: 3,
    title:
      "U.S. local governments face a July 13 deadline to apply for up to $3M in federal grants for automated permitting and building-code systems.",
    time: "Just now",
  },
  {
    id: 4,
    title:
      "London Climate Week hosts the SmartCitiesWorld Summit 2026, convening leaders on climate resilience, infrastructure and digital transformation.",
    time: "1 hr ago",
  },
  {
    id: 5,
    title:
      "London Climate Week smart city summit spotlights AI-enabled governance, climate resilience and digital trust in urban planning.",
    time: "2 hrs ago",
  },
  {
    id: 6,
    title:
      "Estonia's E-Government Platform Licensed to 47 Countries — Digital Democracy Goes Global",
    time: "2 hrs ago",
  },
  {
    id: 7,
    title:
      "India's DigiCity Initiative Connects 500 Cities with Real-Time Data Dashboard",
    time: "4 hrs ago",
  },
  {
    id: 8,
    title:
      "Barcelona's 22@ Innovation District Attracts €12B in Tech Investment in 2025",
    time: "6 hrs ago",
  },
  {
    id: 9,
    title:
      "Tokyo Integrates AI Traffic Management Across All 23 Wards — Congestion Down 35%",
    time: "8 hrs ago",
  },
];

const mobilityNews = [
  {
    id: 1,
    title:
      "Miami-Dade Aviation Department begins testing an air-traffic management system ahead of future air-taxi operations.",
    time: "Just now",
  },
  {
    id: 2,
    title:
      "Waymo's Autonomous Taxi Fleet Hits 10 Million Rides Without a Single Fault-Injury Accident",
    time: "1 hr ago",
  },
  {
    id: 3,
    title:
      "Dubai Hyperloop Link to Abu Dhabi Breaks Ground — 12-Minute Commute by 2030",
    time: "3 hrs ago",
  },
  {
    id: 4,
    title:
      "Paris Electric Bus Network Fully Complete — 2,400 Zero-Emission Buses in Service",
    time: "5 hrs ago",
  },
  {
    id: 5,
    title:
      "Berlin Unveils On-Demand Autonomous Shuttle Grid — First in Europe",
    time: "7 hrs ago",
  },
];

const sustainabilityNews = [
  {
    id: 1,
    title:
      "A federal judge calls the termination of a $2.8B Environmental and Climate Justice Block Grant program arbitrary and capricious, leaving city climate-resilience funding uncertain.",
    time: "Just now",
  },
  {
    id: 2,
    title:
      "More than three-quarters of cities studied saw pedestrian fatality rates rise over five years, even as federal safety programs face funding risks.",
    time: "Just now",
  },
  {
    id: 3,
    title:
      "100 Cities Achieve Carbon Neutrality by 2026 — 3 Years Ahead of Paris Agreement Target",
    time: "2 hrs ago",
  },
  {
    id: 4,
    title:
      "Singapore's Green Plan 2030 Turns 20% of Rooftops Into Urban Farms",
    time: "4 hrs ago",
  },
  {
    id: 5,
    title:
      "Nairobi Becomes Africa's First Smart Water Grid City with 98% Loss Reduction",
    time: "6 hrs ago",
  },
];

/* =========================================================
   FEATURE CARDS
========================================================= */

const features = [
  {
    icon: Wifi,
    title: "5G & Connectivity",
    news:
      "54 Cities Now Have 100% 5G Coverage — 1,200 More Launching by 2027",
  },
  {
    icon: Leaf,
    title: "Green Infrastructure",
    news:
      "Urban Tree Coverage Laws Passed in EU: 30% of City Space Must Be Green by 2035",
  },
  {
    icon: Car,
    title: "Autonomous Mobility",
    news:
      "Self-Driving Deliveries Now Account for 12% of Last-Mile Logistics in 8 Cities",
  },
  {
    icon: BarChart2,
    title: "Data & IoT",
    news:
      "Global Smart City Sensor Network Surpasses 50 Billion Connected Devices",
  },
];

/* =========================================================
   NEWS COLUMN
========================================================= */

function NewsColumn({
  title,
  items,
}: {
  title: string;
  items: { id: number; title: string; time: string }[];
}) {
  return (
    <section>
      <SectionHeader title={title} />

      <div className="divide-y divide-gray-200">
        {items.map((item, index) => (
          <article
            key={`${title}-${item.id}-${index}`}
            className="group py-4 cursor-pointer"
          >
            <h3 className="text-sm md:text-[15px] leading-snug font-medium text-gray-900 group-hover:text-red-600 transition-colors">
              {item.title}
            </h3>

            <div className="flex items-center gap-1 mt-2 text-[11px] text-gray-400">
              <Clock size={10} />
              <span>{item.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export function SmartCitiesPage() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <header className="border-b-4 border-black pb-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shrink-0">
              <Building2 size={19} />
            </div>

            <div>
              <p className="text-[11px] md:text-xs text-red-600 font-bold uppercase tracking-[0.2em]">
                Urban Intelligence
              </p>

              <h1 className="mt-1 text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-950">
                Smart Cities & Urban Innovation
              </h1>
            </div>
          </div>
        </header>

        {/* =================================================
            HERO SECTION
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Main story */}

          <div className="lg:col-span-2">
            <ArticleCard data={hero} large />
          </div>

          {/* City rankings */}

          <aside className="lg:border-l lg:border-gray-200 lg:pl-7">
            <SectionHeader title="Smart City Index 2026" />

            <div className="divide-y divide-gray-200">
              {cityRankings.map((city) => (
                <div
                  key={city.rank}
                  className="group flex items-center gap-3 py-3.5"
                >
                  <span className="w-6 text-sm font-serif font-bold text-gray-400">
                    {String(city.rank).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors">
                      {city.city}
                    </p>

                    <p className="text-[11px] text-gray-400 mt-0.5">
                      {city.tag} · Pop: {city.population}
                    </p>
                  </div>

                  <span className="font-mono text-sm font-bold text-green-600">
                    {city.score}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 px-3 py-2.5 bg-gray-50 border border-gray-200">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Scores reflect digital infrastructure, mobility,
                sustainability, governance and urban innovation.
              </p>
            </div>
          </aside>
        </section>

        {/* =================================================
            SECONDARY FEATURE STORIES
        ================================================= */}

        <section className="mb-12">
          <SectionHeader title="Urban Innovation" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            <ArticleCard data={hero1} />

            <ArticleCard data={hero2} />

            <ArticleCard data={hero3} />

          </div>
        </section>

        {/* =================================================
            FEATURE STRIP
        ================================================= */}

        <section className="mb-12">
          <SectionHeader title="Smart City Technologies" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">

            {features.map(({ icon: Icon, title, news }, index) => (
              <article
                key={title}
                className={`group p-5 md:p-6 bg-white hover:bg-gray-50 transition-colors ${
                  index !== features.length - 1
                    ? "border-b sm:border-b-0 lg:border-r border-gray-200"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r lg:border-r"
                    : ""
                }`}
              >
                <div className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full mb-4 group-hover:bg-red-50 transition-colors">
                  <Icon
                    size={17}
                    className="text-gray-500 group-hover:text-red-600 transition-colors"
                  />
                </div>

                <p className="text-[10px] text-red-600 font-bold uppercase tracking-[0.14em]">
                  {title}
                </p>

                <h3 className="mt-2 text-sm font-semibold leading-snug text-gray-900 group-hover:text-red-600 transition-colors">
                  {news}
                </h3>
              </article>
            ))}

          </div>
        </section>

        {/* =================================================
            NEWS COLUMNS
        ================================================= */}

        <section className="border-t-2 border-black pt-7">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

            <NewsColumn
              title="GovTech & Digital Services"
              items={govTechNews}
            />

            <NewsColumn
              title="Mobility & Transport"
              items={mobilityNews}
            />

            <NewsColumn
              title="Green & Sustainable Cities"
              items={sustainabilityNews}
            />

          </div>

        </section>

        {/* =================================================
            BOTTOM EDITORIAL NOTE
        ================================================= */}

        <div className="mt-12 pt-5 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-gray-500">
              The Pride Times · Urban Futures
            </p>

            <p className="text-xs text-gray-400">
              Smart Cities & Urban Innovation · June 2026
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

