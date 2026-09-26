import { useNavigate } from "react-router";
import { Clock, Globe, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

/* =========================================================
   WORLD & GEOPOLITICS PAGE
   Editorial structure:
   Lead Story
   → Major Stories
   → Supporting Coverage + Newsroom
   → Latest News Index
   → Advertisement
   → Sponsored Events
   → Newsletter
========================================================= */

const articleIds: Record<string, string> = {
  "Saudi Crown Prince to Meet French Premier in Paris on Monday": "world-saudi-crown-prince-paris",
  "NATO Deploys 50,000 Additional Troops Along Eastern Flank": "world-nato-eastern-flank",
  "South China Sea: Philippines and US Begin Joint Naval Patrols": "world-south-china-sea-patrols",
  "UN Security Council Passes Historic AI Governance Resolution": "world-un-ai-governance-resolution",
  "Iran Nuclear Talks Resume in Vienna: Deal Framework Emerging": "world-iran-nuclear-talks-vienna",
  "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push": "world-nvidia-humanoid-robots",
  "Alphabet Plans $80B Stock Offering to Fund AI Data-Center Expansion": "world-alphabet-ai-data-centers",
  "Quantum Computing Reaches Commercial Milestone: 1,000-Qubit Processor Achieved": "world-quantum-1000-qubit",
  "Apple Intelligence: iOS 21 Introduces Real-Time AI Translation Across 87 Languages": "world-apple-ai-translation",
  "Meta's LLaMA 4 Surpasses GPT-5 in Enterprise Benchmark Tests": "world-meta-llama4-enterprise",
  "SpaceX Starlink Gen 3 Delivers 1 Gbps to 50 Million New Users Globally": "world-starlink-gen3-global"
};

const articlePath = (title: string) =>
  `/article/${articleIds[title] || "world-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/g, "")}`;

/* =========================================================
   TYPES
========================================================= */

type Story = {
  id: number;
  category: string;
  title: string;
  excerpt?: string;
  time: string;
  image?: string;
  tag?: string;
};

/* =========================================================
   HERO DATA
========================================================= */

const worldHero = {
  category: "WORLD & GEOPOLITICS",
  title:
    "Saudi Crown Prince to Meet French Premier in Paris on Monday",
  excerpt:
    "High-stakes bilateral talks expected to cover energy cooperation, defense contracts, and the Kingdom's Vision 2030 investment partnership with European firms.",
  author: "Sagar Kumar",
  date: "September 15, 2026",
  time: "17 min ago",
  image:
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1400&auto=format&fit=crop&q=85",
};

/* =========================================================
   MAJOR STORIES
========================================================= */

const moreStories: Story[] = [
  {
    id: 1,
    category: "WORLD & GEOPOLITICS",
    title:
      "NATO Deploys 50,000 Additional Troops Along Eastern Flank",
    time: "25 min ago",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "WORLD & GEOPOLITICS",
    title:
      "South China Sea: Philippines and US Begin Joint Naval Patrols",
    time: "1 hr ago",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "WORLD & GEOPOLITICS",
    title:
      "UN Security Council Passes Historic AI Governance Resolution",
    time: "2 hrs ago",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    category: "WORLD & GEOPOLITICS",
    title:
      "Iran Nuclear Talks Resume in Vienna: Deal Framework Emerging",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&auto=format&fit=crop&q=80",
  },
];

/* =========================================================
   LATEST NEWS
========================================================= */

const latestNews: Story[] = [
  {
    id: 1,
    category: "TECHNOLOGY",
    tag: "HOT",
    title:
      "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push",
    excerpt:
      "Nvidia has announced an ambitious collaboration with humanoid robot manufacturers across the United States, Europe, and Southeast Asia.",
    time: "12 min ago",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    tag: "HOT",
    title:
      "Alphabet Plans $80B Stock Offering to Fund AI Data-Center Expansion",
    excerpt:
      "Hyperscaler capex tops $700B while grid, water and community pushback intensifies across key markets.",
    time: "35 min ago",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 3,
    category: "TECHNOLOGY",
    title:
      "Quantum Computing Reaches Commercial Milestone: 1,000-Qubit Processor Achieved",
    excerpt:
      "IBM and Google jointly announce stable 1,000-qubit processors, marking a watershed moment for enterprise quantum computing.",
    time: "2 hr ago",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 4,
    category: "TECHNOLOGY",
    title:
      "Apple Intelligence: iOS 21 Introduces Real-Time AI Translation Across 87 Languages",
    excerpt:
      "Apple's most ambitious software update rewrites the rules of personal AI, integrating on-device translation and generative intelligence.",
    time: "3 hr ago",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 5,
    category: "TECHNOLOGY",
    title:
      "Meta's LLaMA 4 Surpasses GPT-5 in Enterprise Benchmark Tests",
    excerpt:
      "Open-source AI takes center stage as Meta's latest model outperforms proprietary systems in enterprise reasoning tests.",
    time: "5 hr ago",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&auto=format&fit=crop&q=85",
  },
  {
    id: 6,
    category: "TECHNOLOGY",
    title:
      "SpaceX Starlink Gen 3 Delivers 1 Gbps to 50 Million New Users Globally",
    excerpt:
      "The latest satellite constellation expansion brings high-speed internet to remote regions across Africa, South Asia, and Latin America.",
    time: "6 hr ago",
    image:
      "https://images.unsplash.com/photo-1517976547714-720226b864c1?w=700&auto=format&fit=crop&q=85",
  },
];

/* =========================================================
   SPONSORED EVENTS
========================================================= */

const sponsoredEvents = [
  "Global Finance Summit 2026",
  "Tech Leaders Forum",
  "Energy Transition Conference",
  "AI & Business World",
];

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between border-b-2 border-black ${
        compact ? "pb-2 mb-3" : "pb-2.5 mb-5"
      }`}
    >
      <h2
        className={`font-bold uppercase tracking-[0.07em] text-[#17140F] ${
          compact
            ? "text-[11px] md:text-[12px]"
            : "text-[13px] md:text-[15px]"
        }`}
      >
        {title}
      </h2>

      <span className="hidden sm:block text-[8px] uppercase tracking-[0.16em] text-gray-400">
        The Pride Times
      </span>
    </div>
  );
}

/* =========================================================
   ADVERTISEMENT
========================================================= */

function Advertisement({
  label = "Advertisement Space",
}: {
  label?: string;
}) {
  return (
    <div className="relative w-full h-[90px] md:h-[92px] bg-gradient-to-r from-[#0c252d] via-[#173943] to-[#28596a] overflow-hidden flex items-center justify-center my-5">
      <span className="absolute top-1 right-1 text-[6px] md:text-[7px] bg-white/80 text-gray-500 px-1.5 py-0.5">
        Advertisement
      </span>

      <div className="h-full flex flex-col items-center justify-center text-center">
        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#52a8cf]">
          GOOGLE ADSENSE
        </span>

        <span className="mt-1 text-[13px] md:text-sm font-semibold text-white">
          {label}
        </span>

        <span className="mt-1 text-[8px] md:text-[9px] text-[#8ebdce]">
          728 × 90 · Leaderboard
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   STORY META
========================================================= */

function StoryMeta({
  time,
  author = "Sagar Kumar",
}: {
  time: string;
  author?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 mt-3 text-[8px] text-gray-400">
      <span>By {author}</span>

      <span className="text-gray-300">•</span>

      <span className="flex items-center gap-1">
        <Clock size={9} />
        {time}
      </span>
    </div>
  );
}

/* =========================================================
   SPONSORED CONTENT
========================================================= */

function SponsoredCard() {
  return (
    <aside className="border border-[#e5dfd0] bg-[#fffdf7] overflow-hidden rounded-[4px]">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-gray-400">
          Sponsored Content
        </span>

        <span className="text-[7px] text-gray-400">Ad</span>
      </div>

      <div className="mx-3 mb-3 h-[175px] md:h-[190px] bg-[#151a39] flex flex-col items-center justify-center text-center">
        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-yellow-400">
          Featured Partner
        </span>

        <span className="mt-2 text-white text-sm font-semibold">
          Your Ad Here
        </span>

        <span className="mt-1 text-[9px] text-gray-300">
          Reach 2M+ business readers
        </span>
      </div>
    </aside>
  );
}

/* =========================================================
   MORE STORIES
========================================================= */

function MoreStories() {
  const navigate = useNavigate();
  return (
    <div className="mt-5">
      <SectionHeader title="More World Coverage" compact />

      {moreStories.map((story) => (
        <article
          key={story.id}
          onClick={() => navigate(articlePath(story.title))}
          className="flex gap-3 py-2.5 border-b border-gray-200 group cursor-pointer"
        >
          <div className="w-[62px] h-[50px] shrink-0 overflow-hidden rounded-[3px] bg-gray-100">
            <ImageWithFallback
              src={story.image}
              alt={story.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[7px] uppercase font-bold tracking-wide text-red-600 mb-0.5">
              {story.category}
            </p>

            <h4 className="text-[10px] md:text-[11px] font-semibold leading-[1.2] text-[#17140F] group-hover:text-red-600 transition-colors">
              {story.title}
            </h4>

            <span className="text-[8px] text-gray-400 mt-1 block">
              {story.time}
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}

/* =========================================================
   MAJOR STORY CARD
========================================================= */

function MajorStoryCard({ story }: { story: Story }) {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(articlePath(story.title))}
    className="group cursor-pointer">
      <div className="relative h-[185px] md:h-[220px] overflow-hidden rounded-[4px] bg-gray-100">
        <ImageWithFallback
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      <div className="pt-3">
        <span className="text-[7px] md:text-[8px] uppercase tracking-wide font-bold text-red-600">
          {story.category}
        </span>

        <h3 className="font-serif text-[17px] md:text-[20px] font-bold leading-[1.12] mt-1 text-[#17140F] group-hover:text-red-600 transition-colors">
          {story.title}
        </h3>

        <StoryMeta time={story.time} />
      </div>
    </article>
  );
}

/* =========================================================
   SUPPORTING STORY
========================================================= */

function SupportingStory({ story }: { story: Story }) {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(articlePath(story.title))}
    className="group cursor-pointer border-b border-gray-200 pb-4">
      <div className="flex gap-3">
        <div className="w-[105px] h-[78px] md:w-[125px] md:h-[88px] shrink-0 overflow-hidden rounded-[3px] bg-gray-100">
          <ImageWithFallback
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        <div className="min-w-0">
          <span className="text-[7px] uppercase tracking-wide font-bold text-red-600">
            {story.category}
          </span>

          <h3 className="font-serif text-[12px] md:text-[14px] font-bold leading-[1.2] mt-1 text-[#17140F] group-hover:text-red-600 transition-colors">
            {story.title}
          </h3>

          {story.excerpt && (
            <p className="text-[9px] md:text-[10px] text-gray-500 leading-[1.4] mt-1 line-clamp-2">
              {story.excerpt}
            </p>
          )}

          <div className="flex items-center gap-1 text-[8px] text-gray-400 mt-1.5">
            <Clock size={8} />
            {story.time}
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   NEWSROOM STREAM
========================================================= */

function NewsroomStream() {
  const navigate = useNavigate();
  const newsroom = [
    ...moreStories.map((story) => ({
      category: story.category,
      title: story.title,
      time: story.time,
    })),
    ...latestNews.map((story) => ({
      category: story.category,
      title: story.title,
      time: story.time,
    })),
  ];

  return (
    <aside className="border-l-0 lg:border-l lg:border-gray-300 lg:pl-5">
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-1">
        <h2 className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.08em]">
          Newsroom
        </h2>

        <span className="text-[7px] uppercase tracking-widest text-gray-400">
          Latest
        </span>
      </div>

      {newsroom.map((story, index) => (
        <article
          key={`${story.title}-${index}`}
          onClick={() => navigate(articlePath(story.title))}
          className="py-3 border-b border-gray-200 group cursor-pointer"
        >
          <div className="flex items-start gap-2">
            <span className="text-[8px] font-mono text-gray-300 pt-0.5 w-4 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="text-[7px] uppercase tracking-wide font-bold text-red-600">
                {story.category}
              </p>

              <h3 className="text-[10px] md:text-[11px] font-bold leading-[1.3] mt-0.5 text-[#17140F] group-hover:text-red-600 transition-colors">
                {story.title}
              </h3>

              <div className="flex items-center gap-1 mt-1 text-[8px] text-gray-400">
                <Clock size={8} />
                {story.time}
              </div>
            </div>
          </div>
        </article>
      ))}
    </aside>
  );
}

/* =========================================================
   NEWS CARD
========================================================= */

function NewsCard({ story }: { story: Story }) {
  const navigate = useNavigate();
  return (
    <article onClick={() => navigate(articlePath(story.title))}
    className="group border border-gray-200 rounded-[5px] overflow-hidden bg-white cursor-pointer hover:shadow-md transition-shadow duration-300">
      <div className="relative h-[150px] sm:h-[165px] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={story.image || ""}
          alt={story.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-wide text-red-600">
            {story.category}
          </span>

          {story.tag && (
            <span className="bg-red-500 text-white px-1.5 py-0.5 rounded-[2px] text-[6px] md:text-[7px] font-bold uppercase">
              {story.tag}
            </span>
          )}
        </div>

        <h3 className="font-serif text-[13px] md:text-[14px] font-bold leading-[1.2] text-[#17140F] group-hover:text-red-600 transition-colors">
          {story.title}
        </h3>

        {story.excerpt && (
          <p className="mt-1.5 text-[9px] md:text-[10px] text-gray-500 leading-[1.4] line-clamp-2">
            {story.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
          <span className="text-[8px] text-gray-400">
            By Sagar Kumar
          </span>

          <span className="flex items-center gap-1 text-[8px] text-gray-400">
            <Clock size={8} />
            {story.time}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   SPONSORED EVENTS
========================================================= */

function SponsoredEvents() {
  return (
    <section className="bg-[#f8f8f8] rounded-[5px] p-4 md:p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="border border-gray-300 rounded-[3px] px-2 py-1 text-[7px] font-bold uppercase tracking-wide text-gray-400">
          Sponsorship
        </span>

        <span className="text-[8px] text-gray-400">
          Presented by our partners
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {sponsoredEvents.map((event) => (
          <div
            key={event}
            className="bg-white border border-gray-200 rounded-[4px] min-h-[92px] flex flex-col items-center justify-center text-center px-3 py-3"
          >
            <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center mb-2">
              <Globe
                size={13}
                className="text-red-500"
                strokeWidth={2}
              />
            </div>

            <h3 className="text-[9px] font-bold text-gray-800">
              {event}
            </h3>

            <span className="text-[7px] text-gray-400 mt-1">
              Sponsored Event
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   NEWSLETTER
========================================================= */

function Newsletter() {
  return (
    <section className="bg-[#061a2d] rounded-[5px] px-5 py-7 md:py-8 text-center text-white">
      <p className="text-[8px] uppercase tracking-[0.2em] text-red-400 font-bold">
        Global Briefing
      </p>

      <h2 className="font-serif text-xl md:text-2xl font-bold mt-2">
        Stay Ahead with The Pride Times
      </h2>

      <p className="text-[10px] md:text-[11px] text-gray-400 mt-1.5">
        Daily briefings on World &amp; Geopolitics delivered to your inbox.
      </p>

      <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2.5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-[190px] md:w-[210px] h-9 px-3 rounded-[3px] bg-[#20364a] border border-[#33495b] text-[10px] text-white placeholder:text-gray-400 outline-none focus:border-gray-400"
        />

        <button className="h-9 px-5 bg-[#e31b23] hover:bg-[#c9151c] text-white text-[10px] font-bold rounded-[3px] transition-colors">
          Subscribe Free
        </button>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export function WorldPage() {
  const navigate = useNavigate();
  return (
    <main className="w-full bg-white text-[#17140F] antialiased">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-11 xl:px-14 py-5 md:py-7">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <header className="border-t-[3px] border-[#e31b23] pt-4 mb-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-[8px] uppercase tracking-[0.18em] font-bold text-red-600 mb-1">
                International Affairs · Diplomacy · Security
              </p>

              <h1 className="font-serif text-[29px] md:text-[37px] lg:text-[40px] font-bold leading-none tracking-tight">
                World &amp; Geopolitics
              </h1>

              <p className="text-[10px] md:text-xs text-gray-500 mt-2 max-w-3xl">
                International relations, security, diplomacy, and global
                power dynamics.
              </p>
            </div>

            <div className="hidden md:block text-right">
              <p className="text-[8px] uppercase tracking-[0.18em] text-gray-400">
                Global Desk
              </p>

              <p className="text-[9px] text-gray-500 mt-1">
                World · Diplomacy · Security
              </p>
            </div>
          </div>
        </header>

        {/* =================================================
            TOP AD
        ================================================= */}

        <Advertisement />

        {/* =================================================
            LEAD EDITORIAL PACKAGE
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px] gap-5 lg:gap-7 mb-9">

          {/* LEAD STORY */}

          <article onClick={() => navigate(articlePath(worldHero.title))} className="group cursor-pointer min-w-0">
            <div className="relative overflow-hidden rounded-[5px] bg-gray-100 h-[255px] sm:h-[340px] md:h-[400px] lg:h-[410px]">
              <ImageWithFallback
                src={worldHero.image}
                alt={worldHero.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wide text-red-600">
                  {worldHero.category}
                </span>

                <span className="text-[7px] bg-red-600 text-white px-1.5 py-0.5 rounded-sm font-bold uppercase">
                  Lead
                </span>
              </div>

              <h2 className="font-serif text-[27px] md:text-[34px] lg:text-[39px] font-bold leading-[1.05] tracking-tight mt-2 text-[#17140F] group-hover:text-red-600 transition-colors">
                {worldHero.title}
              </h2>

              <p className="text-[11px] md:text-[13px] text-gray-500 leading-[1.55] mt-2 max-w-[1000px]">
                {worldHero.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3 pt-2.5 border-t border-gray-200 text-[8px] md:text-[9px] text-gray-400">
                <span>By {worldHero.author}</span>

                <span>•</span>

                <span>{worldHero.date}</span>

                <span>•</span>

                <span className="flex items-center gap-1">
                  <Clock size={9} />
                  {worldHero.time}
                </span>
              </div>
            </div>
          </article>

          {/* EDITORIAL RAIL */}

          <aside className="border-t-2 lg:border-t-0 lg:border-l border-black lg:pl-5">
            <SponsoredCard />

            <MoreStories />
          </aside>
        </section>

        {/* =================================================
            MAJOR WORLD STORIES
        ================================================= */}

        <section className="border-t-2 border-black pt-5 mb-9">
          <SectionHeader title="Major World & Geopolitics Stories" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {moreStories.map((story) => (
              <MajorStoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>

        {/* =================================================
            SUPPORTING COVERAGE + NEWSROOM
        ================================================= */}

        <section className="border-t-2 border-black pt-5 mb-9">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2.1fr)_minmax(280px,1fr)] gap-7">

            {/* SUPPORTING COVERAGE */}

            <div>
              <SectionHeader title="Global Coverage" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {moreStories.slice(0, 4).map((story) => (
                  <SupportingStory
                    key={story.id}
                    story={story}
                  />
                ))}
              </div>
            </div>

            {/* NEWSROOM */}

            <NewsroomStream />
          </div>
        </section>

        {/* =================================================
            LATEST NEWS INDEX
        ================================================= */}

        <section className="border-t-2 border-black pt-5 mb-9">
          <SectionHeader title="Latest Global News" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestNews.map((story) => (
              <NewsCard
                key={story.id}
                story={story}
              />
            ))}
          </div>
        </section>

        {/* =================================================
            SECOND AD
        ================================================= */}

        <Advertisement label="Business Solutions | Powered by The Pride Times" />

        {/* =================================================
            SPONSORED EVENTS
        ================================================= */}

        <section className="mb-8">
          <SponsoredEvents />
        </section>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <div className="mb-8">
          <Newsletter />
        </div>

        {/* =================================================
            BOTTOM EDITORIAL BAR
        ================================================= */}

        <footer className="pt-4 border-t border-gray-300 flex flex-col sm:flex-row justify-between gap-2 text-[8px] md:text-[9px] uppercase tracking-[0.14em] text-gray-400">
          <span>World &amp; Geopolitics</span>

          <span className="flex items-center gap-1">
            Diplomacy · Security · International Affairs · Global Business
            <ChevronRight size={10} />
          </span>
        </footer>
      </div>
    </main>
  );
}
