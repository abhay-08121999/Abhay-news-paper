
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Factory, TrendingUp, Cpu, Plane, Car, Bot } from "lucide-react";

import Manu1Img from "../../../imports/Manu1.png";
import Manu2Img from "../../../imports/Manu2.png";
import Manu3Img from "../../../imports/Manu3.png";

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5 border-b-2 border-black pb-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-[0.12em] text-gray-950">
          {title}
        </h2>

        {subtitle && (
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.16em] text-gray-500">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

function StoryMeta({
  author,
  time,
}: {
  author: string;
  time: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-200 pt-3 text-[11px] uppercase tracking-wide text-gray-400">
      <span>By {author}</span>

      <span className="flex items-center gap-1.5">
        <Clock size={11} />
        {time}
      </span>
    </div>
  );
}

function StoryCard({
  image,
  category,
  title,
  excerpt,
  author,
  time,
  large = false,
}: {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  large?: boolean;
}) {
  return (
    <article className="group cursor-pointer">
      <div
        className={`relative mb-4 overflow-hidden bg-gray-100 ${
          large ? "h-72 md:h-[430px]" : "h-64 md:h-72"
        }`}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <span className="absolute bottom-4 left-4 bg-red-700 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          {category}
        </span>
      </div>

      <h3
        className={`font-serif font-bold leading-tight text-gray-950 transition-colors duration-200 group-hover:text-red-700 ${
          large
            ? "text-2xl md:text-3xl lg:text-4xl"
            : "text-xl md:text-2xl"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-3 leading-relaxed text-gray-600 ${
          large ? "text-sm md:text-base" : "text-sm"
        }`}
      >
        {excerpt}
      </p>

      <StoryMeta author={author} time={time} />
    </article>
  );
}

function NewsList({
  items,
  accent = "red",
}: {
  items: { id: number; title: string; time: string }[];
  accent?: "red" | "gray";
}) {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <article
          key={`${item.id}-${index}`}
          className="group cursor-pointer border-l-2 border-transparent py-4 pl-4 transition-all duration-200 hover:border-red-600 hover:bg-gray-50"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 min-w-[22px] font-serif text-xs font-bold text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3
                className={`text-sm font-medium leading-relaxed transition-colors ${
                  accent === "red"
                    ? "group-hover:text-red-700"
                    : "group-hover:text-gray-700"
                }`}
              >
                {item.title}
              </h3>

              <span className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-gray-400">
                <Clock size={10} />
                {item.time}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

const hero = {
  category: "Industry 4.0",
  title:
    "ISM Manufacturing Index Hits 54 in May — Strongest Reading in 14 Months",
  excerpt:
    "The Institute for Supply Management's Manufacturing Index reached 54 in May 2026, beating the consensus Dow Jones forecast of 53.2 and rising 1.3 points from April. The reading, which measures the share of manufacturing companies reporting business expansion, confirms that U.S. factory activity is accelerating into the second quarter of 2026 on the back of strong new orders and improved employment conditions.New orders surged 2.7 points to 56.8, while imports rose a corresponding 2.7 points to 53, signaling both domestic demand strength and a willingness among manufacturers to restock inventories. Employment within the manufacturing sector also improved, rising 2.2 points, though at 48.6 the gauge remains just below the 50-point expansion threshold, indicating that hiring growth has not yet fully recovered from earlier contractions.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Manu1Img,
};

const hero1 = {
  category: "Industry 4.0",
  title:
    "Autodesk to Acquire MaintainX, Advancing Unified Operations Platform",
  excerpt:
    "Autodesk has announced the acquisition of MaintainX, a leading computerized maintenance management system (CMMS) platform, in a move that advances the design software giant's push toward a unified platform connecting design, construction, and operations workflows. The deal reflects growing demand from industrial manufacturers for software that integrates asset maintenance intelligence with the design and build data that modern factories generate throughout the product lifecycle.MaintainX has built a strong presence among mid-market industrial customers, with particular traction in food and beverage, pharmaceuticals, and heavy manufacturing. Autodesk's distribution network and enterprise relationships are expected to accelerate the platform's penetration into large-scale manufacturing environments globally.",
  author: "Sagar Kumar",
  time: "28 May 2026",
  image: Manu2Img,
};

const hero2 = {
  category: "Industry 4.0",
  title: "Robotics and Automation Reshaping Factory Floor Economics",
  excerpt:
    "The integration of AI-powered robotics onto factory floors is accelerating faster than many manufacturers anticipated at the start of the decade. GlobalFoundries' completed acquisition of Synopsys' Processor IP Solutions Business — focused on Physical AI — signals the intensifying competition to embed intelligence directly into the silicon that powers industrial automation equipment.Industry analysts tracking automation deployment note that collaborative robots (cobots) are now economically viable for tasks that previously required human dexterity, including wire harness assembly, small-component placement, and quality inspection. The ROI threshold for robotic deployment has fallen from an average of 4 years in 2020 to approximately 18 months in 2026, driven by software improvements, sensor cost reductions, and the availability of pre-trained models tailored to industrial settings.",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Manu3Img,
};

const autoStories = [
  {
    id: 5,
    title:
      "Manufacturing executives say Iran conflict and Middle East tensions are inflating supply-chain costs across transportation-equipment networks.",
    time: "Just now",
  },
  {
    id: 6,
    title:
      "GM supplier Dauch workers ratify a contract while 5,000 Lockheed Martin IAM employees approve a new labor deal.",
    time: "Just now",
  },
  {
    id: 7,
    title:
      "Major food processor plans at least 2,000 layoffs as it closes a Pennsylvania beef plant and restructures Pilgrim's Pride operations.",
    time: "Just now",
  },
  {
    id: 1,
    title:
      "Toyota Launches All-Solid-State Battery EV — 800-Mile Range, 10-Minute Charge at $35,000 Price Point",
    time: "1 hr ago",
  },
  {
    id: 2,
    title:
      "Volkswagen's Wolfsburg Plant Becomes World's First Carbon-Neutral Auto Factory",
    time: "3 hrs ago",
  },
  {
    id: 3,
    title:
      "Tesla Cybertruck 2.0 with 750-Mile Range Begins Production at Gigafactory Texas",
    time: "5 hrs ago",
  },
  {
    id: 4,
    title:
      "Tata Motors Claims Top Spot in Indian EV Market with 38% Share",
    time: "7 hrs ago",
  },
];

const roboticsStories = [
  {
    id: 5,
    title:
      "Neura raises capital to scale humanoid and industrial robot manufacturing, deployment, and training infrastructure.",
    time: "Just now",
  },
  {
    id: 1,
    title:
      "Boston Dynamics Humanoid Atlas Now Assembles Complex Electronics at Honda Plant",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "Foxconn Replaces 200,000 Workers with AI-Guided Robotic Arms in 18 Months",
    time: "4 hrs ago",
  },
  {
    id: 3,
    title:
      "ABB's New Collaborative Robot Wins Safety Certification for Human-Facing Assembly Lines",
    time: "6 hrs ago",
  },
  {
    id: 4,
    title:
      "Amazon's Manufacturing Robotics Division Files 400+ Patents in a Single Quarter",
    time: "8 hrs ago",
  },
];

const aeroDefense = [
  {
    id: 1,
    title:
      "Airbus A321neo Backlog Hits 3,800 Units — Production Ramp-Up Challenges Supply Chain",
    time: "3 hrs ago",
  },
  {
    id: 2,
    title:
      "SpaceX's Starship Manufacturing Factory Achieves 10x Lower Cost Per Ton of Payload",
    time: "5 hrs ago",
  },
  {
    id: 3,
    title:
      "India's HAL Tejas MkII Fighter Production Order Worth $9.4B Signed",
    time: "7 hrs ago",
  },
  {
    id: 4,
    title:
      "Defense contractor Rheinmetall invests $41M across six U.S. manufacturing facilities to expand capacity and strengthen supply-chain resilience.",
    time: "Just now",
  },
];

const semiconductors = [
  {
    id: 1,
    title:
      "U.S. manufacturing commitments hit $1.765T through June, led by Apple, Micron, IBM, and TSMC as AI infrastructure capex accelerates.",
    time: "Just now",
  },
  {
    id: 2,
    title:
      "CHIPS Act awards Powerex a Pennsylvania plant expansion and signals federal support for Coherent's Texas facility funding.",
    time: "Just now",
  },
  {
    id: 3,
    title:
      "TSMC's Arizona Fab Begins 2nm Production — First Advanced Chip Made Outside Taiwan",
    time: "1 hr ago",
  },
  {
    id: 4,
    title:
      "Samsung Announces $45B Investment to Build Next-Gen Memory Fab in Texas",
    time: "4 hrs ago",
  },
  {
    id: 5,
    title:
      "Intel's Foundry Business Wins $10B US Military Chip Contract",
    time: "6 hrs ago",
  },
  {
    id: 6,
    title:
      "Global Chip Shortage Officially Over as Supply Glut Now Developing — Prices Fall 40%",
    time: "8 hrs ago",
  },
];

const mfgIndex = [
  {
    country: "USA (ISM PMI)",
    value: "54.2",
    status: "Expanding",
  },
  {
    country: "Germany (Manufacturing PMI)",
    value: "52.4",
    status: "Expanding",
  },
  {
    country: "China (Caixin PMI)",
    value: "51.8",
    status: "Expanding",
  },
  {
    country: "India (Manufacturing PMI)",
    value: "58.9",
    status: "Strong Growth",
  },
  {
    country: "Japan (Manufacturing PMI)",
    value: "49.7",
    status: "Contracting",
  },
  {
    country: "UK (Manufacturing PMI)",
    value: "50.3",
    status: "Flat",
  },
];

export function ManufacturingPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        {/* =========================================================
            PAGE HEADER
        ========================================================== */}
        <header className="mb-8 border-b-4 border-black pb-5 md:mb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <Factory size={20} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-700 sm:text-xs">
                  Industry & Production
                </p>

                <h1 className="mt-1 font-serif text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                  Manufacturing & Industry
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
              <TrendingUp size={14} />
              Industry 4.0
            </div>
          </div>
        </header>

        {/* =========================================================
            HERO + PMI
        ========================================================== */}
        <section className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Hero */}
          <div className="lg:col-span-2">
            <StoryCard
              image={hero.image}
              category={hero.category}
              title={hero.title}
              excerpt={hero.excerpt}
              author={hero.author}
              time={hero.time}
              large
            />
          </div>

          {/* PMI PANEL */}
          <aside className="h-fit border border-gray-200 bg-gray-50">
            <div className="border-b-4 border-black bg-white px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-700">
                    Global Indicators
                  </p>

                  <h2 className="mt-1 font-serif text-xl font-bold">
                    Manufacturing PMI
                  </h2>
                </div>

                <Factory size={20} className="text-gray-400" />
              </div>
            </div>

            <div className="px-5">
              {mfgIndex.map((item) => {
                const expanding = parseFloat(item.value) >= 50;

                return (
                  <div
                    key={item.country}
                    className="flex items-center justify-between border-b border-gray-200 py-4 last:border-b-0"
                  >
                    <div className="pr-3">
                      <p className="text-xs font-medium leading-snug text-gray-800">
                        {item.country}
                      </p>

                      <p
                        className={`mt-1 text-[10px] uppercase tracking-wide ${
                          expanding
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        {item.status}
                      </p>
                    </div>

                    <p className="font-mono text-lg font-bold tabular-nums text-gray-950">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-200 bg-white px-5 py-3">
              <p className="text-[10px] leading-relaxed text-gray-400">
                PMI above 50 = expansion. Data: May 2026.
              </p>
            </div>
          </aside>
        </section>

        {/* =========================================================
            EDITORIAL QUOTE
        ========================================================== */}
        <section className="mb-12 border-y-2 border-black py-7">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[100px_1fr]">
            <div className="hidden h-20 w-full bg-gray-100 md:block">
              <div className="flex h-full items-center justify-center">
                <Factory size={30} className="text-gray-400" />
              </div>
            </div>

            <div>
              <p className="font-serif text-xl italic leading-relaxed text-gray-800 md:text-2xl">
                "Last year was about managing disruptions. Right now, it's
                about redesigning your global network."
              </p>

              <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                — Abe Eshkenazi, CEO, Association for Supply Chain Management
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            FEATURE STORY
        ========================================================== */}
        <section className="mb-12">
          <SectionHeader
            title="Featured Industry Story"
            subtitle="Manufacturing Intelligence"
          />

          <StoryCard
            image={hero1.image}
            category={hero1.category}
            title={hero1.title}
            excerpt={hero1.excerpt}
            author={hero1.author}
            time={hero1.time}
            large
          />
        </section>

        {/* =========================================================
            SECONDARY STORIES
        ========================================================== */}
        <section className="mb-12 grid grid-cols-1 gap-8 border-b border-gray-200 pb-12 lg:grid-cols-2">
          <StoryCard
            image={hero2.image}
            category={hero2.category}
            title={hero2.title}
            excerpt={hero2.excerpt}
            author={hero2.author}
            time={hero2.time}
          />

          <div className="border-t border-gray-200 pt-8 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <StoryCard
              image={hero3.image}
              category={hero3.category}
              title={hero3.title}
              excerpt={hero3.excerpt}
              author={hero3.author}
              time={hero3.time}
            />
          </div>
        </section>

        {/* =========================================================
            INDUSTRY STATISTICS
        ========================================================== */}
        <section className="mb-12">
          <SectionHeader
            title="Industry Statistics"
            subtitle="Key Manufacturing Data"
          />

          <div className="overflow-hidden border border-gray-300">
            <div className="hidden grid-cols-3 bg-gray-950 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white md:grid">
              <div>Indicator</div>
              <div className="col-span-2">Latest Reading</div>
            </div>

            <div>
              <div className="grid grid-cols-1 border-b border-gray-300 md:grid-cols-3">
                <div className="bg-gray-100 p-4 font-bold text-gray-900">
                  ISM Manufacturing Index (May)
                </div>

                <div className="p-4 text-sm text-gray-700 md:col-span-2">
                  54.0 — above consensus of 53.2 (CNBC / ISM)
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-gray-300 md:grid-cols-3">
                <div className="bg-gray-100 p-4 font-bold text-gray-900">
                  New Orders Sub-Index
                </div>

                <div className="p-4 text-sm text-gray-700 md:col-span-2">
                  56.8 (+2.7 points from April)
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-gray-300 md:grid-cols-3">
                <div className="bg-gray-100 p-4 font-bold text-gray-900">
                  Manufacturing M&A (2025)
                </div>

                <div className="p-4 text-sm text-gray-700 md:col-span-2">
                  11 megadeals — ranked 3rd globally (PwC)
                </div>
              </div>

              <div className="grid grid-cols-1 border-b border-gray-300 md:grid-cols-3">
                <div className="bg-gray-100 p-4 font-bold text-gray-900">
                  AI Mentioned in Deals
                </div>

                <div className="p-4 text-sm text-gray-700 md:col-span-2">
                  Most frequently cited in Technology and Manufacturing
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gray-100 p-4 font-bold text-gray-900">
                  Cobot ROI Threshold
                </div>

                <div className="p-4 text-sm text-gray-700 md:col-span-2">
                  Reduced from 4 years (2020) to ~18 months (2026)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            AUTOMOTIVE + ROBOTICS
        ========================================================== */}
        <section className="mb-12 grid grid-cols-1 gap-10 border-t-2 border-black pt-6 md:grid-cols-2">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Car size={19} className="text-red-700" />
              <SectionHeader title="Automotive & EV" />
            </div>

            <NewsList items={autoStories} />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Bot size={19} className="text-red-700" />
              <SectionHeader title="Robotics & Automation" />
            </div>

            <NewsList items={roboticsStories} />
          </div>
        </section>

        {/* =========================================================
            SEMICONDUCTORS + AEROSPACE
        ========================================================== */}
        <section className="grid grid-cols-1 gap-10 border-t-2 border-black pt-6 md:grid-cols-2">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Cpu size={19} className="text-red-700" />
              <SectionHeader title="Semiconductors & Electronics" />
            </div>

            <NewsList items={semiconductors} />
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Plane size={19} className="text-red-700" />
              <SectionHeader title="Aerospace & Defense" />
            </div>

            <NewsList items={aeroDefense} />
          </div>
        </section>

        {/* =========================================================
            BOTTOM EDITORIAL BAR
        ========================================================== */}
        <section className="mt-12 border-y-2 border-black py-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
              The Pride Times · Manufacturing & Industry
            </p>

            <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400">
              Industry 4.0 · Production · Automation · Supply Chain
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

