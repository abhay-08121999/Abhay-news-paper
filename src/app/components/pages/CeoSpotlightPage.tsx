
import {
  Clock,
  Users,
  Award,
  ChevronRight,
  Quote,
  MessageSquare,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import CeospotImg from "../../../imports/Ceospot.png";

/* =========================================================
   SECTION HEADER
========================================================= */

function SH({
  title,
  icon: Icon,
}: {
  title: string;
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={14} className="text-gray-500" />}
        <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.18em]">
          {title}
        </h2>
      </div>

      <span className="hidden sm:block w-8 h-[2px] bg-red-600" />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

const hero = {
  category: "CEO SPOTLIGHT",
  title:
    "Tilman Fertitta: Building America's Largest Integrated Entertainment Empire",
  excerpt:
    "Few executives have demonstrated the appetite for bold, large-scale deal-making that characterizes Tilman Fertitta's approach to business in 2026. The chairman and CEO of Fertitta Entertainment, whose holdings already include the Golden Nugget casino brand and the Houston Rockets, has staked a $17.6 billion claim on Caesars Entertainment — a move that would transform him into the undisputed titan of American gaming and hospitality. Fertitta's strategy reflects a conviction that integrated entertainment — combining casino gaming, luxury hotels, fine dining, sports, and live entertainment — represents one of the most defensible and scalable models in the leisure economy.",
  author: "Sagar Kumar",
  time: "May 2026",
  image: CeospotImg,
};

/* =========================================================
   CEO INTERVIEWS
========================================================= */

const ceoInterviews = [
  {
    id: 1,
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    company: "Microsoft",
    quote:
      "The next decade will be defined by how organizations use AI to augment human capability. Every tool we build is a collaboration engine.",
    topic: "AI Strategy & The Future of Work",
    duration: "35 min read",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Indra Nooyi",
    title: "Former CEO, PepsiCo",
    company: "PepsiCo",
    quote:
      "Sustainable business is not charity. The companies that will win in the next 20 years are those that embed purpose into their P&L.",
    topic: "Sustainable Leadership",
    duration: "28 min read",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Jensen Huang",
    title: "CEO, NVIDIA",
    company: "NVIDIA",
    quote:
      "We are not a chip company. We are the engine of the AI industrial revolution.",
    topic: "AI Infrastructure & Chip Wars",
    duration: "42 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
];

/* =========================================================
   WOMEN IN LEADERSHIP
========================================================= */

const womenLeaders = [
  {
    name: "Mary Barra",
    title: "CEO, General Motors",
    achievement:
      "Leading GM's transition toward an electric and software-defined vehicle portfolio.",
    rank: 1,
  },
  {
    name: "Jane Fraser",
    title: "CEO, Citigroup",
    achievement:
      "Driving a major organizational transformation across Citigroup's global businesses.",
    rank: 2,
  },
  {
    name: "Gita Gopinath",
    title: "First Deputy Managing Director, IMF",
    achievement:
      "A leading voice on global economic policy, trade and financial stability.",
    rank: 3,
  },
  {
    name: "Sunita Williams",
    title: "NASA Astronaut / Engineer",
    achievement:
      "A prominent figure in human spaceflight, engineering and international space cooperation.",
    rank: 4,
  },
  {
    name: "Nirmala Sitharaman",
    title: "Finance Minister, India",
    achievement:
      "A central figure in India's fiscal policy and infrastructure investment strategy.",
    rank: 5,
  },
];

/* =========================================================
   LEADERSHIP OPINIONS
========================================================= */

const leadershipOpinions = [
  {
    id: 1,
    author: "Sagar Kumar",
    title:
      "On AI and Investing: Why I Still Trust Human Judgment Over Algorithms",
    time: "1 day ago",
  },
  {
    id: 2,
    author: "Sagar Kumar",
    title:
      "The Debt Cycle Is Approaching Its Peak — And Leaders Must Prepare Now",
    time: "2 days ago",
  },
  {
    id: 3,
    author: "Sagar Kumar",
    title:
      "Why AGI Will Arrive Before 2030 — And Why That's Not Something to Fear",
    time: "3 days ago",
  },
  {
    id: 4,
    author: "Sagar Kumar",
    title:
      "India's Moment Has Arrived — The Next 25 Years Belong to Us",
    time: "4 days ago",
  },
];

/* =========================================================
   EXECUTIVE MOVES
========================================================= */

const executiveMoves = [
  {
    id: 1,
    person: "Bob Iger",
    move:
      "Returns as Disney CEO for a third term after renewed shareholder pressure.",
    time: "3 hrs ago",
  },
  {
    id: 2,
    person: "Christine Lagarde",
    move:
      "ECB leadership transition draws attention as potential successors emerge.",
    time: "5 hrs ago",
  },
  {
    id: 3,
    person: "Shantanu Narayen",
    move:
      "Adobe CEO receives a major compensation package following a record year.",
    time: "7 hrs ago",
  },
  {
    id: 4,
    person: "Arvind Krishna",
    move:
      "IBM CEO outlines a strategic review of the company's consulting operations.",
    time: "9 hrs ago",
  },
  {
    id: 5,
    person: "Brian Chesky",
    move:
      "Airbnb CEO announces a large share buyback while signaling expansion plans.",
    time: "11 hrs ago",
  },
];

/* =========================================================
   PRIDE TIMES 30
========================================================= */

const pt30Features = [
  {
    rank: 1,
    name: "Jensen Huang",
    role: "NVIDIA",
    insight:
      "Defining the AI infrastructure era through accelerated computing, robotics and data-center innovation.",
  },
  {
    rank: 2,
    name: "Satya Nadella",
    role: "Microsoft",
    insight:
      "Leading enterprise AI adoption while reshaping Microsoft's cloud and productivity ecosystem.",
  },
  {
    rank: 3,
    name: "Sundar Pichai",
    role: "Alphabet",
    insight:
      "Driving AI integration across search, cloud, consumer products and emerging technology.",
  },
];

/* =========================================================
   SMALL STORY COMPONENT
========================================================= */

function StoryItem({
  title,
  time,
  author,
}: {
  title: string;
  time: string;
  author?: string;
}) {
  return (
    <article className="group py-4 border-b border-gray-200 last:border-b-0 cursor-pointer">
      <h3 className="font-serif text-sm md:text-[15px] font-bold leading-snug text-gray-900 group-hover:text-red-600 transition-colors">
        {title}
      </h3>

      <div className="flex items-center gap-3 mt-2 text-[10px] text-gray-400">
        {author && <span className="text-gray-600">{author}</span>}

        {author && (
          <span className="w-1 h-1 rounded-full bg-gray-300" />
        )}

        <span className="flex items-center gap-1">
          <Clock size={9} />
          {time}
        </span>
      </div>
    </article>
  );
}

/* =========================================================
   CEO SPOTLIGHT PAGE
========================================================= */

export function CeoSpotlightPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6 py-6 md:py-9">

        {/* =================================================
            PAGE MASTHEAD
        ================================================= */}

        <header className="border-b-4 border-black pb-4 mb-7">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white">
              <Users size={20} />
            </div>

            <div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Executive Intelligence
              </p>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight">
                CEO Spotlight
              </h1>
            </div>
          </div>
        </header>

        {/* =================================================
            EDITORIAL INTRO
        ================================================= */}

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-4 mb-7">
          <p className="text-xs md:text-sm text-gray-500 max-w-2xl leading-relaxed">
            Profiles, interviews and strategic insights from the executives
            shaping global business, technology and capital markets.
          </p>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
            <TrendingUp size={12} />
            Leadership Intelligence
          </div>
        </div>

        {/* =================================================
            HERO STORY
        ================================================= */}

        <section className="mb-12 pb-10 border-b border-gray-300">
          <article className="group cursor-pointer">

            <div className="relative overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={hero.image}
                alt={hero.title}
                className="w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

              <span className="absolute left-4 bottom-4 bg-red-600 text-white px-3 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em]">
                {hero.category}
              </span>
            </div>

            <div className="max-w-5xl mt-5">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.04] tracking-tight group-hover:text-red-600 transition-colors">
                {hero.title}
              </h2>

              <p className="mt-4 text-sm md:text-base lg:text-[17px] text-gray-600 leading-relaxed max-w-4xl">
                {hero.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-5 pt-4 border-t border-gray-200 text-xs text-gray-400">
                <span className="text-gray-700 font-medium">
                  By {hero.author}
                </span>

                <span className="w-1 h-1 rounded-full bg-gray-300" />

                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {hero.time}
                </span>
              </div>
            </div>
          </article>
        </section>

        {/* =================================================
            EXCLUSIVE CEO INTERVIEWS
        ================================================= */}

        <section className="mb-12">
          <SH title="Exclusive CEO Interviews" icon={Quote} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ceoInterviews.map((c) => (
              <article
                key={c.id}
                className="group border border-gray-200 hover:border-black transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={c.image}
                    alt={c.name}
                    className="w-full h-[210px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
                    {c.topic}
                  </span>

                  <h3 className="font-serif text-xl font-bold mt-2 leading-tight">
                    {c.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {c.title}
                  </p>

                  <blockquote className="relative mt-4 pl-4 border-l-2 border-red-600 text-sm italic text-gray-600 leading-relaxed flex-1">
                    <Quote
                      size={12}
                      className="absolute -left-[7px] -top-1 bg-white text-red-600"
                    />

                    {c.quote}
                  </blockquote>

                  <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-gray-100">
                    <span className="text-[10px] text-gray-400">
                      {c.duration}
                    </span>

                    <button className="text-[10px] font-bold uppercase tracking-wide text-red-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Interview
                      <ChevronRight size={11} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =================================================
            PT30 LEADERSHIP
        ================================================= */}

        <section className="mb-12 bg-black text-white">
          <div className="p-6 md:p-8">

            <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
              <div className="flex items-center gap-2">
                <Award size={17} className="text-yellow-400" />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    The Pride Times
                  </p>

                  <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.16em] text-yellow-400">
                    PT30 Leadership Profiles
                  </h2>
                </div>
              </div>

              <span className="text-[9px] uppercase tracking-widest text-gray-500">
                Executive Index
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pt30Features.map((p) => (
                <article
                  key={p.rank}
                  className="relative group border border-gray-800 p-5 overflow-hidden hover:border-yellow-400 transition-colors"
                >
                  <span className="absolute -right-2 -top-5 font-serif text-[90px] leading-none text-gray-900 select-none">
                    {String(p.rank).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="text-[9px] uppercase tracking-[0.18em] text-gray-500">
                      PT30 · {p.role}
                    </span>

                    <h3 className="font-serif text-xl font-bold mt-2">
                      {p.name}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed mt-3">
                      {p.insight}
                    </p>

                    <button className="mt-5 text-[10px] uppercase tracking-wide text-yellow-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Full Profile
                      <ChevronRight size={11} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            THREE COLUMN INTELLIGENCE SECTION
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* WOMEN IN LEADERSHIP */}

          <div>
            <SH title="Women in Leadership" icon={Users} />

            <div>
              {womenLeaders.map((w) => (
                <article
                  key={w.rank}
                  className="group flex gap-4 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 px-2 -mx-2 transition-colors"
                >
                  <span className="font-serif text-2xl text-gray-300 group-hover:text-red-600 w-7 shrink-0">
                    {w.rank}
                  </span>

                  <div>
                    <h3 className="font-serif text-sm font-bold leading-tight group-hover:text-red-600 transition-colors">
                      {w.name}
                    </h3>

                    <p className="text-[10px] text-gray-500 mt-1">
                      {w.title}
                    </p>

                    <p className="text-[11px] text-gray-600 leading-relaxed mt-2">
                      {w.achievement}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* LEADERSHIP OPINIONS */}

          <div>
            <SH title="Leadership Opinions" icon={MessageSquare} />

            <div>
              {leadershipOpinions.map((item) => (
                <StoryItem
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  time={item.time}
                />
              ))}
            </div>
          </div>

          {/* EXECUTIVE MOVES */}

          <div>
            <SH title="Executive Moves" icon={Briefcase} />

            <div>
              {executiveMoves.map((item) => (
                <article
                  key={item.id}
                  className="group py-4 border-b border-gray-200 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider shrink-0">
                      {item.person}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold leading-snug mt-1.5 group-hover:text-red-600 transition-colors">
                    {item.move}
                  </h3>

                  <span className="flex items-center gap-1 text-[10px] text-gray-400 mt-2">
                    <Clock size={9} />
                    {item.time}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            EXECUTIVE PRINCIPLES
        ================================================= */}

        <section className="border-t-2 border-black pt-5 mb-10">
          <SH title="Executive Intelligence" icon={TrendingUp} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <article className="border border-gray-200 p-5 hover:border-black transition-colors">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-600">
                01 · Strategy
              </span>

              <h3 className="font-serif text-xl font-bold mt-2">
                Build for the next decade
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed mt-3">
                The strongest executives balance immediate performance with
                long-term investments in people, technology and markets.
              </p>
            </article>

            <article className="border border-gray-200 p-5 hover:border-black transition-colors">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-600">
                02 · Technology
              </span>

              <h3 className="font-serif text-xl font-bold mt-2">
                Turn technology into advantage
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed mt-3">
                Technology leadership increasingly depends on translating
                emerging capabilities into measurable business outcomes.
              </p>
            </article>

            <article className="border border-gray-200 p-5 hover:border-black transition-colors">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-red-600">
                03 · Leadership
              </span>

              <h3 className="font-serif text-xl font-bold mt-2">
                Lead through uncertainty
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed mt-3">
                Resilient leaders create clarity during periods of economic,
                technological and organizational change.
              </p>
            </article>

          </div>
        </section>

        {/* =================================================
            FOOTER NOTE
        ================================================= */}

        <div className="border-t border-gray-300 pt-4 pb-3 flex flex-wrap justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-gray-400">
          <span>The Pride Times · CEO Spotlight</span>
          <span>Executive Intelligence Desk</span>
        </div>

      </div>
    </main>
  );
}

