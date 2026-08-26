import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
  Building2,
  Globe2,
  DollarSign,
} from "lucide-react";

function SectionHeader({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
      <h2 className="text-sm font-bold uppercase tracking-widest">
        {title}
      </h2>

      {link && (
        <a
          href={link}
          className="text-xs text-red-600 hover:underline flex items-center gap-1"
        >
          See All <ChevronRight size={12} />
        </a>
      )}
    </div>
  );
}

const hero = {
  category: "BILLIONAIRES",
  title:
    "The World's Richest People Are Reshaping Technology, Finance and Global Industry",
  excerpt:
    "The world's wealthiest entrepreneurs and investors continue to expand their influence across technology, finance, energy, manufacturing and emerging industries. Their companies are driving some of the largest transformations in the global economy.",
  author: "Sagar Kumar",
  time: "June 2026",
  image:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
};

const heroStories = [
  {
    id: 1,
    category: "TECHNOLOGY",
    title:
      "Technology Billionaires Increase Investments in Artificial Intelligence and Advanced Computing",
    excerpt:
      "The technology sector remains a major source of new billionaire wealth as artificial intelligence and computing infrastructure attract unprecedented investment.",
    time: "2 hrs ago",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    category: "FINANCE",
    title:
      "Global Investors Expand Their Fortunes as Markets Enter a New Era",
    excerpt:
      "Large investment firms and private capital networks continue to shape global markets and corporate strategy.",
    time: "4 hrs ago",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
  },
];

const billionaireStories = [
  {
    id: 1,
    title:
      "AI Infrastructure Becomes the New Battleground for the World's Wealthiest Entrepreneurs",
    time: "1 hr ago",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title:
      "Private Capital Continues to Flow Into Data Centers, Semiconductors and Energy",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title:
      "Luxury Brands and Consumer Companies Become Major Wealth-Creation Engines",
    time: "5 hrs ago",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  },
];

const wealthNews = [
  {
    id: 1,
    title:
      "Technology founders remain among the fastest-growing sources of new billionaire wealth",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "Family offices increase allocations toward artificial intelligence and private markets",
    time: "4 hrs ago",
  },
  {
    id: 3,
    title:
      "Global investors turn toward infrastructure as AI demand increases electricity consumption",
    time: "6 hrs ago",
  },
  {
    id: 4,
    title:
      "Private equity firms accelerate investments in healthcare and industrial technology",
    time: "8 hrs ago",
  },
  {
    id: 5,
    title:
      "New generation of entrepreneurs creates fortunes through software and AI companies",
    time: "10 hrs ago",
  },
];

const wealthStats = [
  {
    label: "Technology Wealth",
    value: "$8.2T",
    change: "+12.4%",
  },
  {
    label: "Private Markets",
    value: "$4.7T",
    change: "+8.6%",
  },
  {
    label: "Global Billionaires",
    value: "3,100+",
    change: "+6.1%",
  },
  {
    label: "AI Investments",
    value: "$620B",
    change: "+21.8%",
  },
];

const industries = [
  {
    icon: TrendingUp,
    title: "Technology",
    text: "Artificial intelligence, cloud computing, semiconductors and software.",
  },
  {
    icon: DollarSign,
    title: "Finance",
    text: "Private equity, asset management, venture capital and global markets.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    text: "Commercial property, infrastructure and large-scale development.",
  },
  {
    icon: Globe2,
    title: "Global Industry",
    text: "Energy, manufacturing, transportation and international commerce.",
  },
];

function SmallStoryList({
  stories,
}: {
  stories: Array<{ id: number; title: string; time: string }>;
}) {
  return (
    <div className="divide-y divide-gray-200">
      {stories.map((story) => (
        <div
          key={story.id}
          className="py-3 group cursor-pointer"
        >
          <p className="text-sm leading-snug group-hover:text-red-600 transition-colors">
            {story.title}
          </p>

          <span className="text-xs text-gray-400 flex items-center gap-1 mt-1.5">
            <Clock size={10} />
            {story.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export function BillionairesPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 md:px-6 py-6 bg-white">

      {/* PAGE HEADER */}
      <div className="border-b-4 border-black pb-3 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
              Wealth & Influence
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-1">
              Billionaires
            </h1>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              Global Wealth
            </p>
            <p className="text-sm font-semibold">
              Markets · Technology · Power
            </p>
          </div>
        </div>
      </div>

      {/* TOP MARKET / WEALTH BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-black mb-7">
        {wealthStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`p-3 md:p-4 ${
              index !== wealthStats.length - 1
                ? "border-r border-gray-300"
                : ""
            }`}
          >
            <p className="text-[10px] uppercase tracking-widest text-gray-500">
              {stat.label}
            </p>

            <div className="flex items-end justify-between mt-1">
              <p className="text-lg md:text-xl font-bold">
                {stat.value}
              </p>

              <span className="text-xs text-green-600 font-medium">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* MAIN STORY */}
        <article className="lg:col-span-2 group cursor-pointer">

          <div className="relative overflow-hidden mb-4">
            <ImageWithFallback
              src={hero.image}
              alt={hero.title}
              className="w-full h-[300px] md:h-[430px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <span className="text-[11px] text-red-600 uppercase tracking-[0.15em] font-semibold">
            {hero.category}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2 group-hover:text-red-700 transition-colors">
            {hero.title}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3 max-w-4xl">
            {hero.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
            <span>By {hero.author}</span>

            <span className="flex items-center gap-1">
              <Clock size={11} />
              {hero.time}
            </span>
          </div>
        </article>

        {/* SIDE STORIES */}
        <aside className="border-l-0 lg:border-l border-gray-300 lg:pl-5">

          <SectionHeader title="Wealth Briefing" />

          <div className="space-y-5">
            {heroStories.map((story) => (
              <article
                key={story.id}
                className="group cursor-pointer border-b border-gray-200 pb-5"
              >
                <div className="overflow-hidden mb-3">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-36 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <span className="text-[10px] text-red-600 uppercase tracking-widest font-semibold">
                  {story.category}
                </span>

                <h3 className="text-lg font-bold leading-snug mt-1 group-hover:text-red-600 transition-colors">
                  {story.title}
                </h3>

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {story.excerpt}
                </p>

                <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-2">
                  <Clock size={10} />
                  {story.time}
                </span>
              </article>
            ))}
          </div>
        </aside>
      </div>

      {/* DIVIDER */}
      <div className="border-t-4 border-black mb-8" />

      {/* FEATURE STORIES */}
      <section className="mb-9">
        <SectionHeader
          title="Billionaire Economy"
          link="#billionaire-economy"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {billionaireStories.map((story) => (
            <article
              key={story.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-3">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-44 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <h3 className="text-lg font-bold leading-snug group-hover:text-red-600 transition-colors">
                {story.title}
              </h3>

              <span className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                <Clock size={10} />
                {story.time}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* WEALTH NEWS + INDUSTRIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">

        {/* WEALTH NEWS */}
        <section>
          <SectionHeader title="Latest Wealth News" />

          <SmallStoryList stories={wealthNews} />
        </section>

        {/* INDUSTRIES */}
        <section>
          <SectionHeader title="Where Billionaire Wealth Is Moving" />

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-gray-300">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="p-4 border-r border-b border-gray-300 group hover:bg-gray-50 transition-colors"
                >
                  <Icon
                    size={20}
                    className="mb-3 text-gray-700"
                  />

                  <h3 className="font-bold text-base">
                    {industry.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {industry.text}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-red-600 mt-3">
                    Explore
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* GLOBAL WEALTH TABLE */}
      <section className="mb-9">
        <SectionHeader title="Global Wealth Snapshot" />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-y-2 border-black text-left">
                <th className="p-3 font-bold uppercase text-[11px] tracking-wider">
                  Sector
                </th>

                <th className="p-3 font-bold uppercase text-[11px] tracking-wider">
                  Wealth Concentration
                </th>

                <th className="p-3 font-bold uppercase text-[11px] tracking-wider">
                  Growth
                </th>

                <th className="p-3 font-bold uppercase text-[11px] tracking-wider">
                  Outlook
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-3 font-semibold">
                  Technology
                </td>
                <td className="p-3">
                  AI, Cloud & Semiconductors
                </td>
                <td className="p-3 text-green-600">
                  +12.4%
                </td>
                <td className="p-3">
                  Strong
                </td>
              </tr>

              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="p-3 font-semibold">
                  Finance
                </td>
                <td className="p-3">
                  Investment & Private Capital
                </td>
                <td className="p-3 text-green-600">
                  +8.6%
                </td>
                <td className="p-3">
                  Positive
                </td>
              </tr>

              <tr className="border-b border-gray-300">
                <td className="p-3 font-semibold">
                  Energy
                </td>
                <td className="p-3">
                  Power & Infrastructure
                </td>
                <td className="p-3 text-green-600">
                  +10.2%
                </td>
                <td className="p-3">
                  Expanding
                </td>
              </tr>

              <tr className="border-b border-gray-300 bg-gray-50">
                <td className="p-3 font-semibold">
                  Healthcare
                </td>
                <td className="p-3">
                  Biotechnology & Pharmaceuticals
                </td>
                <td className="p-3 text-green-600">
                  +7.8%
                </td>
                <td className="p-3">
                  Growing
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BOTTOM FEATURE */}
      <section className="border-t-4 border-black pt-5 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2">
            <span className="text-[10px] uppercase tracking-[0.18em] text-red-600 font-bold">
              The Big Picture
            </span>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-2">
              Wealth Is Increasingly Connected to Technology, Infrastructure and Global Capital
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mt-3 max-w-3xl">
              The concentration of wealth among technology founders,
              investors and industrial leaders reflects the growing
              importance of digital infrastructure, artificial intelligence,
              energy and global capital markets.
            </p>
          </div>

          <div className="border-l-0 md:border-l border-gray-300 md:pl-5">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              Market Focus
            </p>

            <p className="text-xl font-bold mt-1">
              Technology & AI
            </p>

            <p className="text-xs text-gray-500 mt-2">
              The largest new sources of wealth continue to emerge from
              companies building the infrastructure for the next generation
              of computing.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
