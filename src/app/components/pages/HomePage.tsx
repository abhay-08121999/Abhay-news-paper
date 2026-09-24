import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Play,
} from "lucide-react";

import HeroImg from "../../../imports/heroimage.png";
import InsImg from "../../../imports/Insightimage.png";
import LN3Img from "../../../imports/LN3image.png";
import LN4Img from "../../../imports/LN4image.png";
import EdipickImg from "../../../imports/Edipickimage.png";
import Pt30Img from "../../../imports/pt30image.png";
import Ln1Img from "../../../imports/Ln1.png";

import { getQuotes } from "../../../services/marketApi";
import { TimeAgo } from "../../utils/timeAgo";

/* =========================================================
   TYPES
========================================================= */

type NewsItem = {
  id: number;
  hot: boolean;
  title: string;
  publishedAt: string;
  image: string;
  link: string;
};

type MarketItem = {
  symbol: string;
  value: string | number;
  change: string;
  up: boolean;
};

/* =========================================================
   HERO / LEAD STORY
========================================================= */

const heroStory = {
  category: "TOP STORY",
  title:
    "Derivatives Trading in India Sinks Most Since 2024 as Taxes Bite",
  excerpt:
    "India's derivatives trading activity has fallen sharply as tax changes weigh on the market, according to Bloomberg News.",
  image: HeroImg,
  link: "/markets",
};

/* =========================================================
   MAJOR STORIES
========================================================= */

const centerStories = [
  {
    id: 1,
    tag: "MARKETS",
    title:
      "Indian Small-Caps Rally 21% From March Lows to Enter Bull Market",
    excerpt:
      "Indian small-cap stocks have climbed 21% from their March lows, pushing the segment into a bull market as domestic investor risk appetite improves.",
    publishedAt: "2026-09-22T06:00:00Z",
    image: LN4Img,
    link: "/markets",
  },
  {
    id: 2,
    tag: "BUSINESS",
    title:
      "India's Prospects Bright but Tax Rules a Worry, JPMorgan CEO Dimon Says",
    excerpt:
      "JPMorgan CEO Jamie Dimon said India's long-term prospects remain strong while pointing to tax rules, regulation and policy uncertainty as concerns for investors.",
    publishedAt: "2026-09-22T11:26:00Z",
    image: InsImg,
    link: "/business-news",
  },
];

/* =========================================================
   VIDEO FEATURE
========================================================= */

const videoFeature = {
  title:
    "Alibaba Unveils AI Chip to Drive Global Data Centre Buildout",
  image: HeroImg,
  link: "/technology",
};

/* =========================================================
   LATEST NEWS TABS
========================================================= */

const latestNewsTabs = [
  "All",
  "Markets",
  "Finance",
  "Business",
  "Technology",
  "Energy",
  "More",
];

/* =========================================================
   LATEST NEWS DATA
========================================================= */

const latestNewsData: Record<string, NewsItem[]> = {
  All: [
    {
      id: 1,
      hot: true,
      title:
        "Derivatives Trading in India Sinks Most Since 2024 as Taxes Bite",
      publishedAt: "2026-09-22T10:00:00Z",
      image: Ln1Img,
      link: "/markets",
    },
    {
      id: 2,
      hot: true,
      title:
        "Standstill in India Gold Imports Drags On, Threatens Supply",
      publishedAt: "2026-09-22T08:00:00Z",
      image: HeroImg,
      link: "/markets",
    },
    {
      id: 3,
      hot: false,
      title:
        "Modi, Lam Meet as India and Vietnam Deepen AI, Defense Ties",
      publishedAt: "2026-09-22T07:00:00Z",
      image: LN3Img,
      link: "/business-news",
    },
    {
      id: 4,
      hot: false,
      title:
        "Indian Small-Caps Rally 21% From March Lows to Enter Bull Market",
      publishedAt: "2026-09-22T06:00:00Z",
      image: LN4Img,
      link: "/markets",
    },
    {
      id: 5,
      hot: true,
      title:
        "Sebi Taps AI in Growing Fight Against Market Manipulation and Fraud",
      publishedAt: "2026-09-22T09:24:00Z",
      image: Ln1Img,
      link: "/markets",
    },
  ],

  Markets: [
    {
      id: 1,
      hot: true,
      title:
        "Derivatives Trading in India Sinks Most Since 2024 as Taxes Bite",
      publishedAt: "2026-09-22T10:00:00Z",
      image: HeroImg,
      link: "/markets",
    },
    {
      id: 2,
      hot: false,
      title:
        "Indian Small-Caps Rally 21% From March Lows to Enter Bull Market",
      publishedAt: "2026-09-22T06:00:00Z",
      image: InsImg,
      link: "/markets",
    },
    {
      id: 3,
      hot: false,
      title:
        "Asia's Beaten-Up Currencies Gain Traction After Defensive Moves",
      publishedAt: "2026-09-22T04:00:00Z",
      image: LN3Img,
      link: "/markets",
    },
    {
      id: 4,
      hot: false,
      title:
        "Stocks Rally, Brent Below $100 as Iran Hopes Mount",
      publishedAt: "2026-09-22T02:00:00Z",
      image: LN4Img,
      link: "/markets",
    },
  ],

  Finance: [
    {
      id: 1,
      hot: true,
      title:
        "India's Prospects Bright but Tax Rules a Worry, JPMorgan CEO Dimon Says",
      publishedAt: "2026-09-22T11:26:00Z",
      image: HeroImg,
      link: "/finance",
    },
    {
      id: 2,
      hot: false,
      title:
        "India Clears Loan Guarantee Plan as War Hurts Firms, Airlines",
      publishedAt: "2026-09-21T22:00:00Z",
      image: InsImg,
      link: "/finance",
    },
    {
      id: 3,
      hot: false,
      title:
        "JPMorgan's Dimon Backs Chandrasekaran, Warns Tata Rift Could Hit Investment",
      publishedAt: "2026-09-22T08:36:00Z",
      image: LN3Img,
      link: "/finance",
    },
    {
      id: 4,
      hot: false,
      title:
        "Standstill in India Gold Imports Drags On, Threatens Supply",
      publishedAt: "2026-09-22T08:00:00Z",
      image: LN4Img,
      link: "/finance",
    },
  ],

  Business: [
    {
      id: 1,
      hot: true,
      title:
        "India's Prospects Bright but Tax Rules a Worry, JPMorgan CEO Dimon Says",
      publishedAt: "2026-09-22T11:26:00Z",
      image: HeroImg,
      link: "/business-news",
    },
    {
      id: 2,
      hot: false,
      title:
        "Berger Paints Ramps Up Expansion to Fend Off Birla Opus, JSW Dulux",
      publishedAt: "2026-09-22T09:23:00Z",
      image: InsImg,
      link: "/business-news",
    },
    {
      id: 3,
      hot: false,
      title:
        "JPMorgan's Dimon Backs Chandrasekaran, Warns Tata Rift Could Hit Investment",
      publishedAt: "2026-09-22T08:36:00Z",
      image: LN3Img,
      link: "/business-news",
    },
    {
      id: 4,
      hot: false,
      title:
        "Factory Floor or Family Office? India's Rich Youngsters Alarm Elders",
      publishedAt: "2026-09-22T09:10:00Z",
      image: LN4Img,
      link: "/business-news",
    },
  ],

  Technology: [
    {
      id: 1,
      hot: true,
      title:
        "Alibaba Unveils AI Chip to Drive Global Data Centre Buildout",
      publishedAt: "2026-09-22T09:08:00Z",
      image: Ln1Img,
      link: "/technology",
    },
    {
      id: 2,
      hot: true,
      title:
        "Microsoft's Satya Nadella to Join OpenAI, Nvidia Leaders at Trump-Xi Dinner",
      publishedAt: "2026-09-22T08:08:00Z",
      image: HeroImg,
      link: "/technology",
    },
    {
      id: 3,
      hot: false,
      title:
        "Sebi Taps AI in Growing Fight Against Market Manipulation and Fraud",
      publishedAt: "2026-09-22T09:24:00Z",
      image: InsImg,
      link: "/technology",
    },
    {
      id: 4,
      hot: false,
      title:
        "Alibaba Targets 20 Gigawatts of Global Data Centre Capacity by 2032",
      publishedAt: "2026-09-22T09:08:00Z",
      image: LN3Img,
      link: "/technology",
    },
    {
      id: 5,
      hot: false,
      title:
        "India and Vietnam Deepen AI and Defense Ties as Leaders Meet",
      publishedAt: "2026-09-22T07:00:00Z",
      image: LN4Img,
      link: "/technology",
    },
  ],

  Energy: [
    {
      id: 1,
      hot: true,
      title:
        "Stocks Rally, Brent Below $100 as Iran Hopes Mount",
      publishedAt: "2026-09-22T02:00:00Z",
      image: LN4Img,
      link: "/energy",
    },
    {
      id: 2,
      hot: false,
      title:
        "India Clears Loan Guarantee Plan as War Hurts Firms, Airlines",
      publishedAt: "2026-09-21T22:00:00Z",
      image: HeroImg,
      link: "/energy",
    },
    {
      id: 3,
      hot: false,
      title:
        "India's ReNew Energy Trims Solar Output Due to Grid Constraints",
      publishedAt: "2026-09-22T00:00:00Z",
      image: InsImg,
      link: "/energy",
    },
    {
      id: 4,
      hot: false,
      title:
        "Gold and Silver Surge on Iran War Optimism, Weaker Dollar",
      publishedAt: "2026-09-22T01:00:00Z",
      image: LN3Img,
      link: "/energy",
    },
  ],

  More: [
    {
      id: 1,
      hot: false,
      title:
        "Modi, Lam Meet as India and Vietnam Deepen AI, Defense Ties",
      publishedAt: "2026-09-22T07:00:00Z",
      image: LN3Img,
      link: "/business-news",
    },
    {
      id: 2,
      hot: false,
      title:
        "Factory Floor or Family Office? India's Rich Youngsters Alarm Elders",
      publishedAt: "2026-09-22T09:10:00Z",
      image: HeroImg,
      link: "/business-news",
    },
    {
      id: 3,
      hot: false,
      title:
        "India's ReNew Energy Trims Solar Output Due to Grid Constraints",
      publishedAt: "2026-09-22T00:00:00Z",
      image: InsImg,
      link: "/energy",
    },
    {
      id: 4,
      hot: false,
      title:
        "Sebi Taps AI in Growing Fight Against Market Manipulation and Fraud",
      publishedAt: "2026-09-22T09:24:00Z",
      image: LN4Img,
      link: "/technology",
    },
  ],
};

/* =========================================================
   EDITOR'S PICKS
========================================================= */

const editorsPicks = [
  {
    id: 1,
    category: "MARKETS",
    title:
      "Sebi Taps AI in Growing Fight Against Market Manipulation and Fraud",
    excerpt:
      "India's markets regulator is expanding its use of artificial intelligence to detect manipulation and fraud as trading volumes and data complexity rise across exchanges.",
    publishedAt: "2026-09-22T09:24:00Z",
    image: EdipickImg,
    link: "/markets",
  },
  {
    id: 2,
    category: "WORLD",
    title:
      "Modi, Lam Meet as India and Vietnam Deepen AI, Defense Ties",
    excerpt:
      "Indian and Vietnamese leaders met to deepen cooperation on artificial intelligence and defense as the two countries expand their strategic partnership.",
    publishedAt: "2026-09-22T07:00:00Z",
    image: LN3Img,
    link: "/business-news",
  },
  {
    id: 3,
    category: "FINANCE",
    title:
      "JPMorgan's Dimon Backs Chandrasekaran, Warns Tata Rift Could Hit Investment",
    excerpt:
      "JPMorgan CEO Jamie Dimon voiced support for Tata Sons chairman N. Chandrasekaran while warning that boardroom tensions at the conglomerate could weigh on investor confidence.",
    publishedAt: "2026-09-22T08:36:00Z",
    image: Ln1Img,
    link: "/finance",
  },
];

/* =========================================================
   MAGAZINE
========================================================= */

const magazinePreview = {
  title: "The AI Revolution",
  subtitle:
    "Reshaping business, economies, technology, and the future of work.",
  image: Pt30Img,
};

/* =========================================================
   PRIDE TIMES 30
========================================================= */

const prideTimes30 = [
  {
    rank: 1,
    name: "Jensen Huang",
    company: "Nvidia",
    sector:
      "Defining the AI infrastructure era through accelerated computing and robotics.",
  },
  {
    rank: 2,
    name: "Satya Nadella",
    company: "Microsoft",
    sector:
      "Leading enterprise AI adoption and large-scale digital transformation.",
  },
  {
    rank: 3,
    name: "Sundar Pichai",
    company: "Alphabet / Google",
    sector:
      "Driving AI integration across search, cloud, and emerging technologies.",
  },
  {
    rank: 4,
    name: "Elon Musk",
    company: "Tesla / SpaceX / X",
    sector:
      "Expanding technology initiatives across energy, space, transportation, and AI.",
  },
  {
    rank: 5,
    name: "Sam Altman",
    company: "OpenAI",
    sector:
      "Shaping the development and deployment of frontier artificial intelligence.",
  },
  {
    rank: 6,
    name: "Andy Jassy",
    company: "Amazon",
    sector:
      "Scaling AWS and cloud infrastructure for the next generation of AI workloads.",
  },
  {
    rank: 7,
    name: "Lisa Su",
    company: "AMD",
    sector:
      "Expanding competitive AI computing capabilities across CPUs and GPUs.",
  },
  {
    rank: 8,
    name: "C.C. Wei",
    company: "TSMC",
    sector:
      "Leading advanced semiconductor manufacturing for the global technology industry.",
  },
  {
    rank: 9,
    name: "Alex Karp",
    company: "Palantir",
    sector:
      "Expanding enterprise AI and data platforms across commercial and government markets.",
  },
  {
    rank: 10,
    name: "Mary Barra",
    company: "General Motors",
    sector:
      "Navigating the transformation of the automotive industry through electrification and technology.",
  },
];

/* =========================================================
   CHANGE CHIP
========================================================= */

function ChangeChip({
  change,
  up,
}: {
  change: string;
  up: boolean;
}) {
  return (
    <span
      className={`text-[10px] font-semibold tabular-nums flex items-center gap-1 ${
        up ? "text-green-600" : "text-red-600"
      }`}
    >
      {up ? (
        <TrendingUp size={10} strokeWidth={2.25} />
      ) : (
        <TrendingDown size={10} strokeWidth={2.25} />
      )}

      {change}
    </span>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  link,
  linkText = "View All",
}: {
  title: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b-2
        border-black
        pb-2.5
        mb-5
      "
    >
      <h2
        className="
          text-[12px]
          font-bold
          uppercase
          tracking-[0.16em]
        "
      >
        {title}
      </h2>

      {link && (
        <Link
          to={link}
          className="
            text-[9px]
            font-semibold
            text-red-600
            flex
            items-center
            gap-1
          "
        >
          {linkText}
          <ArrowRight size={9} />
        </Link>
      )}
    </div>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export function HomePage() {
  const [activeMarketTab, setActiveMarketTab] =
    useState<"Indices" | "Crypto">("Indices");

  const [activeNewsTab, setActiveNewsTab] = useState("All");

  const [marketSnapshotData, setMarketSnapshotData] = useState<
    Record<string, MarketItem[]>
  >({
    Indices: [],
    Crypto: [],
  });

  /* =======================================================
     MARKET DATA
  ======================================================= */

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const data = await getQuotes();

        setMarketSnapshotData({
          Indices: data.indices.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: item.change,
            up: item.up,
          })),

          Crypto: data.crypto.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: item.change,
            up: item.up,
          })),
        });
      } catch (error) {
        console.error("Market API Error:", error);
      }
    };

    loadMarketData();
  }, []);

  /* =======================================================
     SELECTED NEWS
  ======================================================= */

  const selectedNews =
    latestNewsData[activeNewsTab] || latestNewsData.All;

  const latestStories = selectedNews.slice(0, 5);

  // Sidebar ticker: sitewide reverse-chron feed, de-duplicated across
  // tabs by title and filtered to exclude whatever is already shown
  // as the Hero/Major/Video stories above, so the same headline
  // doesn't render twice on the page.
  const featuredTitles = new Set([
    heroStory.title,
    centerStories[0].title,
    centerStories[1].title,
    videoFeature.title,
  ]);

  const sidebarNews = Array.from(
    new Map(
      Object.values(latestNewsData)
        .flat()
        .map((item) => [item.title, item])
    ).values()
  )
    .filter((item) => !featuredTitles.has(item.title))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="pt-4 md:pt-6 pb-16">

          {/* =================================================
              TOP STORIES / NEWSROOM LEAD
          ================================================= */}

          <section
            className="
              pb-8
              mb-8
              border-b
              border-gray-300
            "
          >
            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[1.15fr_1fr_0.85fr]
                gap-5
                lg:gap-6
              "
            >

              {/* LEAD STORY */}

              <Link
                to={heroStory.link}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-lg
                  border
                  border-gray-200
                  min-h-[430px]
                  lg:min-h-[500px]
                  bg-black
                "
              >
                <ImageWithFallback
                  src={heroStory.image}
                  alt={heroStory.title}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.04]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/35
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    bg-red-600
                    text-white
                    px-3
                    py-1
                    text-[9px]
                    font-bold
                    tracking-[0.16em]
                    uppercase
                    rounded-[2px]
                  "
                >
                  {heroStory.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h1
                    className="
                      font-serif
                      text-2xl
                      md:text-[30px]
                      lg:text-[34px]
                      font-bold
                      leading-[1.08]
                      text-white
                    "
                  >
                    {heroStory.title}
                  </h1>

                  <p
                    className="
                      text-[12px]
                      md:text-[13px]
                      text-gray-200
                      leading-[1.6]
                      mt-3
                      line-clamp-3
                    "
                  >
                    {heroStory.excerpt}
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      font-bold
                      text-white
                      uppercase
                      tracking-wide
                      mt-4
                      border-b
                      border-white/60
                      pb-1
                    "
                  >
                    Read Full Story
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>

              {/* MAJOR COVERAGE */}

              <div className="min-w-0">
                <div className="mb-4">
                  <span
                    className="
                      block
                      text-[9px]
                      font-bold
                      text-red-600
                      uppercase
                      tracking-[0.15em]
                      mb-2
                    "
                  >
                    {centerStories[0].tag}
                  </span>

                  <Link
                    to={centerStories[0].link}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={centerStories[0].image}
                        alt={centerStories[0].title}
                        className="
                          w-full
                          h-[220px]
                          md:h-[250px]
                          object-cover
                          rounded-lg
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                        "
                      />
                    </div>

                    <h2
                      className="
                        font-serif
                        text-xl
                        md:text-2xl
                        font-bold
                        leading-[1.15]
                        mt-3
                        text-gray-950
                        group-hover:text-red-600
                        transition-colors
                      "
                    >
                      {centerStories[0].title}
                    </h2>

                    <p
                      className="
                        text-[12px]
                        text-gray-600
                        mt-2
                        leading-[1.6]
                        line-clamp-3
                      "
                    >
                      {centerStories[0].excerpt}
                    </p>
                  </Link>
                </div>

                {/* SECOND MAJOR STORY */}

                <Link
                  to={centerStories[1].link}
                  className="
                    group
                    flex
                    gap-3
                    pt-4
                    border-t
                    border-gray-200
                  "
                >
                  <div
                    className="
                      shrink-0
                      w-[105px]
                      h-[75px]
                      overflow-hidden
                      rounded-md
                    "
                  >
                    <ImageWithFallback
                      src={centerStories[1].image}
                      alt={centerStories[1].title}
                      className="
                        w-full
                        h-full
                        object-cover
                        rounded-md
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        text-red-600
                        uppercase
                        tracking-[0.14em]
                      "
                    >
                      {centerStories[1].tag}
                    </span>

                    <h3
                      className="
                        text-[13px]
                        font-bold
                        leading-[1.35]
                        mt-1
                        text-gray-900
                        group-hover:text-red-600
                        transition-colors
                        line-clamp-2
                      "
                    >
                      {centerStories[1].title}
                    </h3>

                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        text-gray-400
                        mt-2
                      "
                    >
                      <Clock size={9} />
                      <TimeAgo iso={centerStories[1].publishedAt} />
                    </span>
                  </div>
                </Link>

                {/* MARKET CONTEXT */}

                <div className="mt-5 border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                      "
                    >
                      Market Snapshot
                    </h3>

                    <div className="flex gap-3">
                      {(["Indices", "Crypto"] as const).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveMarketTab(tab)}
                          className={`
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-wide
                            ${
                              activeMarketTab === tab
                                ? "text-red-600"
                                : "text-gray-400 hover:text-gray-700"
                            }
                          `}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {(marketSnapshotData[activeMarketTab] || [])
                      .slice(0, 4)
                      .map((market) => (
                        <div
                          key={market.symbol}
                          className="
                            py-2
                            flex
                            items-center
                            justify-between
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-semibold
                              text-gray-800
                            "
                          >
                            {market.symbol}
                          </span>

                          <div className="flex items-center gap-3">
                            <span
                              className="
                                text-[10px]
                                text-gray-500
                                tabular-nums
                              "
                            >
                              {market.value}
                            </span>

                            <ChangeChip
                              change={market.change}
                              up={market.up}
                            />
                          </div>
                        </div>
                      ))}
                  </div>

                  <Link
                    to="/markets"
                    className="
                      mt-2
                      text-[9px]
                      font-bold
                      text-red-600
                      flex
                      items-center
                      gap-1
                      uppercase
                      tracking-wide
                      w-fit
                    "
                  >
                    View All Markets
                    <ArrowRight size={9} />
                  </Link>
                </div>
              </div>

              {/* RIGHT NEWSROOM COLUMN */}

              <aside className="min-w-0">
                {/* VIDEO */}

                <div className="pb-5 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-serif text-lg font-bold">
                      Today's Videos
                    </h2>

                    <button
                      type="button"
                      className="
                        border
                        border-gray-300
                        rounded-full
                        px-3
                        py-1
                        text-[9px]
                        font-medium
                        hover:border-gray-500
                        transition-colors
                      "
                    >
                      Explore More
                    </button>
                  </div>

                  <Link
                    to={videoFeature.link}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={videoFeature.image}
                        alt={videoFeature.title}
                        className="
                          w-full
                          h-[175px]
                          object-cover
                          rounded-lg
                          transition-transform
                          duration-700
                          group-hover:scale-[1.03]
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          bg-black/10
                          group-hover:bg-black/25
                          transition-colors
                        "
                      >
                        <div
                          className="
                            w-11
                            h-11
                            rounded-full
                            bg-white/95
                            flex
                            items-center
                            justify-center
                            shadow-md
                          "
                        >
                          <Play
                            size={16}
                            fill="black"
                            className="text-black ml-0.5"
                          />
                        </div>
                      </div>
                    </div>

                    <h3
                      className="
                        text-[13px]
                        font-semibold
                        leading-[1.4]
                        mt-2.5
                        text-gray-900
                        group-hover:text-red-600
                        transition-colors
                      "
                    >
                      {videoFeature.title}
                    </h3>
                  </Link>
                </div>

                {/* LATEST NEWS STREAM */}

                <div className="pt-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-gray-200
                      pb-2
                      mb-1
                    "
                  >
                    <h2
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-red-600
                      "
                    >
                      Latest News
                    </h2>

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-wide
                        text-gray-400
                      "
                    >
                      Newsroom
                    </span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {sidebarNews.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                        className="
                          group
                          block
                          py-3
                        "
                      >
                        <div className="flex gap-3">
                          <span
                            className="
                              shrink-0
                              text-[9px]
                              font-semibold
                              text-red-600
                              w-[45px]
                            "
                          >
                            <TimeAgo iso={item.publishedAt} />
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-medium
                              leading-[1.4]
                              text-gray-800
                              group-hover:text-red-600
                              transition-colors
                            "
                          >
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* =================================================
              LATEST BUSINESS NEWS
          ================================================= */}

          <section className="mb-10">
            <SectionHeader
              title="Latest Business News"
              link="/business-news"
            />

            {/* NEWSROOM FILTER */}

            <div
              className="
                flex
                items-center
                gap-5
                overflow-x-auto
                no-scrollbar
                border-b
                border-gray-200
                pb-3
                mb-1
              "
            >
              {latestNewsTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveNewsTab(tab)}
                  className={`
                    text-[10px]
                    font-semibold
                    whitespace-nowrap
                    uppercase
                    tracking-wide
                    transition-colors
                    ${
                      activeNewsTab === tab
                        ? "text-red-600"
                        : "text-gray-400 hover:text-gray-700"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* CHRONOLOGICAL NEWS STREAM */}

            <div className="divide-y divide-gray-200">
              {latestStories.map((story, index) => (
                <Link
                  key={story.id}
                  to={story.link}
                  className="
                    group
                    grid
                    grid-cols-[55px_95px_1fr]
                    md:grid-cols-[65px_130px_1fr]
                    gap-3
                    md:gap-5
                    py-4
                    items-center
                  "
                >
                  <div
                    className="
                      text-[9px]
                      font-semibold
                      text-gray-400
                      tabular-nums
                    "
                  >
                    <TimeAgo iso={story.publishedAt} />
                  </div>

                  <div
                    className="
                      h-[60px]
                      md:h-[72px]
                      overflow-hidden
                      rounded-md
                    "
                  >
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          ${
                            story.hot
                              ? "text-red-600"
                              : "text-gray-400"
                          }
                        `}
                      >
                        {story.hot ? "Breaking" : "Latest"}
                      </span>

                      <span className="text-[8px] text-gray-300">
                        •
                      </span>

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-gray-400
                        "
                      >
                        {activeNewsTab === "All"
                          ? "Business"
                          : activeNewsTab}
                      </span>
                    </div>

                    <h3
                      className="
                        font-serif
                        text-base
                        md:text-lg
                        font-bold
                        leading-[1.25]
                        text-gray-900
                        group-hover:text-red-600
                        transition-colors
                      "
                    >
                      {story.title}
                    </h3>
                  </div>

                  <span className="hidden">{index}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* =================================================
              EDITORIAL PICKS + MAGAZINE
          ================================================= */}

          <section
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.7fr_0.8fr]
              gap-7
              mb-12
            "
          >
            {/* EDITOR'S PICKS */}

            <div>
              <SectionHeader
                title="Editor's Picks"
                link="/leadership"
              />

              <div className="divide-y divide-gray-200">
                {editorsPicks.map((pick) => (
                  <Link
                    key={pick.id}
                    to={pick.link}
                    className="
                      group
                      grid
                      grid-cols-[120px_1fr]
                      sm:grid-cols-[155px_1fr]
                      gap-4
                      py-4
                    "
                  >
                    <div
                      className="
                        w-full
                        h-[80px]
                        sm:h-[100px]
                        overflow-hidden
                        rounded-md
                      "
                    >
                      <ImageWithFallback
                        src={pick.image}
                        alt={pick.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          rounded-md
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>

                    <div className="min-w-0">
                      <span
                        className="
                          text-[8px]
                          font-bold
                          text-red-600
                          uppercase
                          tracking-[0.14em]
                        "
                      >
                        {pick.category}
                      </span>

                      <h3
                        className="
                          font-serif
                          text-base
                          md:text-lg
                          font-bold
                          leading-[1.2]
                          mt-1
                          text-gray-900
                          group-hover:text-red-600
                          transition-colors
                        "
                      >
                        {pick.title}
                      </h3>

                      <p
                        className="
                          hidden
                          sm:block
                          text-[10px]
                          text-gray-500
                          leading-[1.5]
                          mt-1
                          line-clamp-2
                        "
                      >
                        {pick.excerpt}
                      </p>

                      <span
                        className="
                          flex
                          items-center
                          gap-1
                          text-[9px]
                          text-gray-400
                          mt-1.5
                        "
                      >
                        <Clock size={8} />
                        <TimeAgo iso={pick.publishedAt} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* MAGAZINE */}

            <div>
              <SectionHeader
                title="Magazine"
                link="/magazine"
              />

              <Link
                to="/magazine"
                className="
                  group
                  block
                  overflow-hidden
                  rounded-md
                  bg-black
                "
              >
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={magazinePreview.image}
                    alt={magazinePreview.title}
                    className="
                      w-full
                      h-[210px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                <div className="p-4">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-gray-500
                    "
                  >
                    Pride Times Magazine
                  </span>

                  <h3
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-white
                      mt-1
                    "
                  >
                    {magazinePreview.title}
                  </h3>

                  <p
                    className="
                      text-[11px]
                      text-gray-400
                      leading-[1.5]
                      mt-1.5
                    "
                  >
                    {magazinePreview.subtitle}
                  </p>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      border-b
                      border-white/50
                      pb-1
                      mt-4
                    "
                  >
                    Read Digital Edition
                    <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* =================================================
              PRIDE TIMES 30
          ================================================= */}

          <section>
            <SectionHeader
              title="Pride Times 30 — Leaders to Watch in 2026"
              link="/billionaires"
              linkText="Full List"
            />

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
              "
            >
              {prideTimes30.map((leader) => (
                <div
                  key={leader.rank}
                  className="
                    flex
                    items-start
                    gap-4
                    p-4
                    border
                    border-gray-200
                    rounded-md
                    hover:border-gray-300
                    transition-colors
                  "
                >
                  <span
                    className="
                      font-serif
                      text-2xl
                      font-bold
                      text-gray-200
                      tabular-nums
                      shrink-0
                      w-8
                    "
                  >
                    {String(leader.rank).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[13px]
                        font-bold
                        text-gray-900
                      "
                    >
                      {leader.name}

                      <span className="font-normal text-gray-400">
                        {" "}
                        · {leader.company}
                      </span>
                    </p>

                    <p
                      className="
                        text-[10px]
                        text-gray-500
                        leading-[1.5]
                        mt-1
                      "
                    >
                      {leader.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* =====================================================
          LOCAL PAGE UTILITIES
      ===================================================== */}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(227, 27, 35, 0.12);
          color: inherit;
        }
      `}</style>
    </div>
  );
}
