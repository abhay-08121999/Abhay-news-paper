import { Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";

/* =========================================================
   SECTION HEADER
========================================================= */

function SH({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-5">
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-600 shrink-0" />
        <h2 className="text-[13px] md:text-sm font-bold uppercase tracking-[0.16em] text-gray-900">
          {title}
        </h2>
      </div>

      <button className="text-[11px] font-semibold text-gray-400 hover:text-red-600 transition-colors flex items-center gap-1">
        See All
      </button>
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const featured = [
  {
    id: 1,
    category: "COVER STORY",
    title:
      "The AI Economy: How Artificial Intelligence is Reshaping Global GDP and Rewriting the Rules of Competitive Advantage",
    excerpt:
      "From Silicon Valley to Shenzhen, every sector is being transformed by AI. Pride Times investigates the winners, the losers, and the trillion-dollar stakes.",
    author: "Sagar Kumar",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=800&h=500&fit=crop",
    path: "/technology",
  },
  {
    id: 2,
    category: "DEEP DIVE",
    title:
      "India's $5 Trillion Dream: Can the World's Fastest-Growing Economy Sustain Its Momentum Through 2030?",
    excerpt:
      "Prime Minister Modi's economic ambition is unprecedented. Pride Times examines the infrastructure gap, the talent pipeline, and the geopolitical tailwinds and headwinds.",
    author: "Sagar Kumar",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?w=800&h=500&fit=crop",
    path: "/finance",
  },
  {
    id: 3,
    category: "INVESTIGATION",
    title:
      "The Cybersecurity Crisis Hidden in Plain Sight: How Nation-State Hackers Are Penetrating the World's Critical Infrastructure",
    excerpt:
      "A 14-month investigation reveals that power grids, water systems, and financial networks in 40+ countries have been silently compromised by state-sponsored actors.",
    author: "Sagar Kumar",
    time: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?w=800&h=500&fit=crop",
    path: "/cybersecurity",
  },
];

const editorPicks = [
  {
    id: 1,
    category: "LEADERSHIP",
    title:
      "How Satya Nadella Transformed Microsoft from 'Dying Giant' to World's Most Valuable AI Company",
    time: "3 days ago",
    path: "/leadership",
  },
  {
    id: 2,
    category: "ENERGY",
    title:
      "The Solar Revolution: How One Technology Disrupted the Energy Sector Faster Than Any Technology in History",
    time: "4 days ago",
    path: "/energy",
  },
  {
    id: 3,
    category: "BILLIONAIRES",
    title:
      "Inside the Mind of Elon Musk: What Drives the World's Richest Man and Most Consequential CEO",
    time: "5 days ago",
    path: "/billionaires",
  },
  {
    id: 4,
    category: "HEALTHCARE",
    title:
      "The End of Disease? How mRNA Technology is Opening the Door to Universal Cancer Vaccines by 2030",
    time: "6 days ago",
    path: "/healthcare",
  },
  {
    id: 5,
    category: "SMART CITIES",
    title:
      "The City of the Future Is Already Here — If You Know Where to Look",
    time: "1 week ago",
    path: "/smart-cities",
  },
];

/* =========================================================
   SPONSORED CONTENT
========================================================= */

const sponsoredItems = [
  {
    title: "Global Finance Summit 2026",
    subtitle: "Sponsored Event",
  },
  {
    title: "Tech Leaders Forum",
    subtitle: "Sponsored Event",
  },
  {
    title: "Energy Transition Conference",
    subtitle: "Sponsored Event",
  },
  {
    title: "AI & Business World",
    subtitle: "Sponsored Event",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export function FeaturedPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 antialiased">
      {/* =====================================================
          FULL WIDTH PAGE CONTAINER
      ===================================================== */}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-11 xl:px-12 2xl:px-16">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <header className="pt-7 md:pt-8 pb-4">
          <div className="border-t-[3px] border-red-600 pt-4 md:pt-5">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

              <div>
                <h1 className="font-serif text-[30px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold tracking-tight leading-none text-gray-950">
                  Cover Stories
                </h1>

                <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500">
                  Our signature long-form investigations and magazine cover
                  features.
                </p>
              </div>

              <span className="hidden md:block text-[10px] font-medium text-gray-400 uppercase tracking-[0.14em]">
                {featured.length + editorPicks.length} Stories
              </span>
            </div>
          </div>
        </header>

        {/* =================================================
            TOP ADVERTISEMENT
        ================================================= */}

        <div className="w-full h-[72px] sm:h-[78px] md:h-[90px] bg-[#12303a] mb-5 md:mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white">
            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              GOOGLE ADSENSE
            </p>

            <p className="text-[12px] sm:text-sm md:text-[15px] font-semibold mt-1">
              Advertisement Space
            </p>

            <p className="text-[8px] sm:text-[9px] text-cyan-200 mt-1">
              728 × 90 • Leaderboard
            </p>
          </div>

          <span className="absolute right-1 top-1 text-[7px] text-gray-300">
            Advertisement
          </span>
        </div>

        {/* =================================================
            MAIN COVER STORY + SPONSORED SIDEBAR
        ================================================= */}

        <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,3fr)_280px] gap-6 xl:gap-8 mb-8 md:mb-10">

          {/* =========================
              MAIN STORY
          ========================= */}

          <Link
            to={featured[0].path}
            className="group block min-w-0"
          >
            <div className="overflow-hidden rounded-[4px] bg-gray-100">
              <ImageWithFallback
                src={featured[0].image}
                alt={featured[0].title}
                className="
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  md:h-[390px]
                  lg:h-[440px]
                  xl:h-[470px]
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.025]
                "
              />
            </div>

            <div className="mt-3">
              <span className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase tracking-[0.15em]">
                {featured[0].category}
              </span>

              <h2
                className="
                  mt-1.5
                  font-serif
                  text-[25px]
                  sm:text-[29px]
                  md:text-[34px]
                  lg:text-[38px]
                  xl:text-[40px]
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-gray-950
                  group-hover:text-red-600
                  transition-colors
                "
              >
                {featured[0].title}
              </h2>

              <p className="mt-2.5 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-[1.65] text-gray-600 max-w-5xl">
                {featured[0].excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3 pt-3 border-t border-gray-200 text-[10px] md:text-[11px] text-gray-400">
                <span className="font-medium text-gray-500">
                  By {featured[0].author}
                </span>

                <span className="h-3 w-px bg-gray-300" />

                <span className="flex items-center gap-1.5">
                  <Clock size={10} strokeWidth={2.25} />
                  {featured[0].time}
                </span>
              </div>
            </div>
          </Link>

          {/* =========================
              SIDEBAR
          ========================= */}

          <aside className="hidden xl:block">

            {/* Sponsored Box */}

            <div className="border border-gray-200 rounded-[4px] overflow-hidden">
              <div className="px-2 py-1.5 bg-[#f7f4e9] text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                Sponsored Content
              </div>

              <div className="h-[170px] bg-[#121a3b] flex items-center justify-center text-center px-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-300">
                    Featured Partner
                  </p>

                  <p className="text-sm font-bold text-white mt-2">
                    Your Ad Here
                  </p>

                  <p className="text-[9px] text-gray-300 mt-1">
                    Reach 2M+ business readers
                  </p>
                </div>
              </div>
            </div>

            {/* More Stories */}

            <div className="mt-5">
              <h3 className="border-b-2 border-black pb-2 text-[12px] font-bold uppercase tracking-[0.12em]">
                More Stories
              </h3>

              <div className="divide-y divide-gray-200">

                {featured.slice(1).map((story) => (
                  <Link
                    key={story.id}
                    to={story.path}
                    className="flex gap-3 py-3 group"
                  >
                    <div className="w-[72px] h-[55px] shrink-0 overflow-hidden rounded-[3px] bg-gray-100">
                      <ImageWithFallback
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="text-[7px] font-bold text-red-600 uppercase tracking-wide">
                        {story.category}
                      </span>

                      <p className="text-[10px] leading-[1.3] font-bold mt-1 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                        {story.title}
                      </p>
                    </div>
                  </Link>
                ))}

              </div>
            </div>
          </aside>
        </section>

        {/* =================================================
            LATEST COVER STORIES
        ================================================= */}

        <section className="border-t border-gray-900 pt-3 mb-8 md:mb-10">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] md:text-[14px] font-bold text-gray-900">
              Latest Cover Stories News
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

            {featured.map((story) => (
              <Link
                key={story.id}
                to={story.path}
                className="group border border-gray-200 rounded-[5px] overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="
                      w-full
                      h-[175px]
                      sm:h-[185px]
                      md:h-[200px]
                      lg:h-[210px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                <div className="p-3.5 md:p-4">

                  <span className="text-[8px] md:text-[9px] font-bold text-red-600 uppercase tracking-[0.14em]">
                    {story.category}
                  </span>

                  <h3 className="mt-1.5 font-serif text-[15px] md:text-[17px] font-bold leading-[1.18] text-gray-950 group-hover:text-red-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-2 text-[11px] md:text-[12px] text-gray-500 leading-[1.55] line-clamp-3">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">

                    <span className="text-[9px] text-gray-400">
                      By {story.author}
                    </span>

                    <span className="text-[9px] text-gray-400 flex items-center gap-1">
                      <Clock size={9} />
                      {story.time}
                    </span>

                  </div>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* =================================================
            SECOND ADVERTISEMENT
        ================================================= */}

        <div className="w-full h-[72px] sm:h-[78px] md:h-[88px] bg-[#12303a] mb-6 md:mb-8 flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white">

            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300">
              GOOGLE ADSENSE
            </p>

            <p className="text-[12px] sm:text-sm md:text-[14px] font-semibold mt-1">
              Business Solutions | Powered by The Pride Times
            </p>

            <p className="text-[8px] sm:text-[9px] text-cyan-200 mt-1">
              728 × 90 • Leaderboard
            </p>

          </div>

          <span className="absolute right-1 top-1 text-[7px] text-gray-300">
            Advertisement
          </span>
        </div>

        {/* =================================================
            SPONSORSHIP
        ================================================= */}

        <section className="bg-gray-50 border border-gray-100 rounded-[5px] p-4 sm:p-5 md:p-6 mb-8 md:mb-10">

          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 border border-gray-200 rounded-[3px] text-[7px] font-bold uppercase tracking-[0.12em] text-gray-400 bg-white">
              Sponsorship
            </span>

            <span className="text-[9px] text-gray-400">
              Presented by our partners
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

            {sponsoredItems.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[4px]
                  min-h-[100px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-3
                  py-4
                "
              >

                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-2">
                  <span className="text-red-600 text-sm">✦</span>
                </div>

                <p className="text-[10px] md:text-[11px] font-bold text-gray-900">
                  {item.title}
                </p>

                <p className="text-[8px] text-gray-400 mt-1">
                  {item.subtitle}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* =================================================
            EDITOR'S PICKS
        ================================================= */}

        <section className="border-t-2 border-black pt-4 md:pt-5 mb-10 md:mb-12">

          <SH title="Editor's Picks" />

          <div className="divide-y divide-gray-200">

            {editorPicks.map((p, i) => (
              <Link
                key={p.id}
                to={p.path}
                className="
                  flex
                  items-center
                  gap-4
                  md:gap-5
                  py-4
                  md:py-5
                  first:pt-0
                  group
                "
              >

                <span className="
                  text-xl
                  md:text-2xl
                  font-serif
                  font-bold
                  text-gray-200
                  tabular-nums
                  shrink-0
                  group-hover:text-red-100
                  transition-colors
                  w-8
                  md:w-10
                ">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">

                  <span className="text-[9px] md:text-[10px] font-bold text-red-600 uppercase tracking-[0.14em]">
                    {p.category}
                  </span>

                  <p className="text-[12px] md:text-[14px] leading-[1.5] text-gray-800 mt-1 group-hover:text-red-600 transition-colors">
                    {p.title}
                  </p>

                </div>

                <span className="
                  hidden
                  sm:flex
                  text-[9px]
                  md:text-[10px]
                  uppercase
                  tracking-wide
                  text-gray-400
                  shrink-0
                  items-center
                  gap-1.5
                ">
                  <Clock size={9} strokeWidth={2.25} />
                  {p.time}
                </span>

              </Link>
            ))}

          </div>
        </section>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <section className="w-full bg-[#071a2d] rounded-[5px] px-5 sm:px-8 md:px-10 py-8 md:py-10 mb-10 md:mb-14">

          <div className="max-w-2xl mx-auto text-center">

            <h2 className="font-serif text-xl sm:text-2xl md:text-[26px] font-bold text-white">
              Stay Ahead with The Pride Times
            </h2>

            <p className="text-[10px] sm:text-[11px] text-gray-300 mt-2">
              Daily briefings on Cover Stories delivered to your inbox.
            </p>

            <div className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              justify-center
              gap-2
              mt-5
              max-w-xl
              mx-auto
            ">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  min-w-0
                  h-10
                  px-3
                  rounded-[3px]
                  border
                  border-gray-600
                  bg-[#1c3348]
                  text-white
                  placeholder:text-gray-400
                  text-xs
                  outline-none
                  focus:border-red-500
                "
              />

              <button
                type="button"
                className="
                  h-10
                  px-5
                  rounded-[3px]
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  text-[11px]
                  font-bold
                  transition-colors
                "
              >
                Subscribe Free
              </button>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
