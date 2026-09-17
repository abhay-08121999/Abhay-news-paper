import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  ArrowRight,
  Bell,
  ChevronRight,
  Clock,
  Search,
  User,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import HeroImg from "../../../imports/heroimage.png";
import InsImg from "../../../imports/Insightimage.png";
import LN3Img from "../../../imports/LN3image.png";
import LN4Img from "../../../imports/LN4image.png";
import EdipickImg from "../../../imports/Edipickimage.png";
import Pt30Img from "../../../imports/pt30image.png";
import Ln1Img from "../../../imports/Ln1.png";
import { getQuotes } from "../../../services/marketApi";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  { label: "Home", to: "/" },
  { label: "Markets", to: "/markets" },
  { label: "Business News", to: "/business-news" },
  { label: "International Business", to: "/international-business" },
  { label: "Startup Success", to: "/startup-success" },
  { label: "CEO Spotlight", to: "/ceospotlight" },
  { label: "Magazines", to: "/magazine" },
  { label: "Innovation", to: "/technology" },
];

/* =========================================================
   HERO CONTENT
========================================================= */

const heroStory = {
  category: "TECHNOLOGY",
  title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push",
  excerpt:
    "Nvidia has announced an ambitious collaboration with humanoid robot manufacturers across the United States, Europe, and South Korea, expanding its already well-established relationship with China's Unitree.",
  image: HeroImg,
  link: "/technology",
};

const marketStory = {
  category: "FINANCE",
  title: "U.S. Equity Markets Rally on Strong Manufacturing Data",
  excerpt:
    "U.S. equity markets extended a recovery rally into the first week of June, driven by stronger-than-expected domestic factory data and a continued surge in technology stocks.",
  image: InsImg,
  link: "/markets",
};

/* =========================================================
   LATEST STORIES
========================================================= */

const latestStories = [
  {
    category: "TECHNOLOGY",
    title: "Quantum Computing: The Next Leap in Human Innovation",
    time: "4 hrs ago",
    image: LN3Img,
    link: "/technology",
  },
  {
    category: "FINANCE",
    title: "U.S. Equity Markets Rally on Strong Manufacturing Data",
    time: "35 min ago",
    image: InsImg,
    link: "/markets",
  },
  {
    category: "ENERGY",
    title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally",
    time: "2 hrs ago",
    image: LN4Img,
    link: "/energy",
  },
  {
    category: "LEADERSHIP",
    title: "The Intelligence Age: How CEOs Are Navigating Transformation",
    time: "3 hrs ago",
    image: EdipickImg,
    link: "/ceospotlight",
  },
];

/* =========================================================
   EDITOR PICKS
========================================================= */

const editorPicks = [
  {
    category: "TECHNOLOGY",
    title:
      "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push",
    time: "12 min ago",
    image: Ln1Img,
    link: "/technology",
  },
  {
    category: "FINANCE",
    title: "U.S. Equity Markets Rally on Strong Manufacturing Data",
    time: "35 min ago",
    image: InsImg,
    link: "/markets",
  },
  {
    category: "TECHNOLOGY",
    title:
      "Nvidia's Blackwell Ultra GPU Delivers 40x Speed Boost for LLM Training",
    time: "2 hrs ago",
    image: LN3Img,
    link: "/technology",
  },
];

/* =========================================================
   WORLD / SECURITY
========================================================= */

const worldSecurityStories = [
  {
    category: "CYBERSECURITY",
    title:
      "PwC 2026 Global Digital Trust Insights: Enterprises Escalate Defense Spending",
    time: "25 min ago",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    link: "/cybersecurity",
  },
  {
    category: "CYBERSECURITY",
    title: "Zero-Day Vulnerability Raises Global Banking Protocol Concerns",
    time: "1 hr ago",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    link: "/cybersecurity",
  },
  {
    category: "WORLD & GEOPOLITICS",
    title:
      "Global Trade Corridors Face New Pressure as Supply Chains Rebalance",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85",
    link: "/international-business",
  },
  {
    category: "CYBERSECURITY",
    title:
      "AI-Powered Deception Forces Financial Institutions to Rethink Digital Trust",
    time: "4 hrs ago",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    link: "/cybersecurity",
  },
  {
    category: "WORLD & GEOPOLITICS",
    title:
      "Zero-Day Vulnerability in Global Banking Protocol Exposes New Risks",
    time: "6 hrs ago",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    link: "/international-business",
  },
  {
    category: "WORLD & GEOPOLITICS",
    title:
      "NATO Deploys 50,000 Additional Troops Along Eastern Flank",
    time: "45 min ago",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85",
    link: "/international-business",
  },
];

/* =========================================================
   LATEST RAIL
========================================================= */

const latestRail = [
  {
    category: "TECHNOLOGY",
    title:
      "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push",
    time: "12 min ago",
    link: "/technology",
  },
  {
    category: "TECHNOLOGY",
    title:
      "Alphabet Plans $80B Stock Offering to Fund AI Data-Center Expansion",
    time: "35 min ago",
    link: "/technology",
  },
  {
    category: "TECHNOLOGY",
    title: "Quantum Computing Reaches Commercial Milestone",
    time: "2 hr ago",
    link: "/technology",
  },
  {
    category: "BUSINESS",
    title: "U.S. Equity Markets Rally on Strong Manufacturing Data",
    time: "3 hr ago",
    link: "/markets",
  },
  {
    category: "ENERGY",
    title:
      "Data Centers and AI Workloads Force Energy Policy Reversals Globally",
    time: "4 hr ago",
    link: "/energy",
  },
];

/* =========================================================
   LEADERS
========================================================= */

const leaders = [
  {
    rank: 1,
    name: "Jensen Huang",
    company: "Nvidia",
    role: "AI Infrastructure",
  },
  {
    rank: 2,
    name: "Sam Altman",
    company: "OpenAI",
    role: "Frontier AI",
  },
];

/* =========================================================
   MARKET TYPES
========================================================= */

type Market = {
  label?: string;
  value?: string;
  change?: string;
  up?: boolean;
};

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  action,
  to = "#",
}: {
  title: string;
  action?: string;
  to?: string;
}) {
  return (
    <div className="home-section-header">
      <h2>{title}</h2>

      {action && (
        <Link to={to} className="home-see-all">
          {action}
          <ChevronRight size={12} />
        </Link>
      )}
    </div>
  );
}

/* =========================================================
   ADVERTISEMENT
========================================================= */

function AdBanner({
  children = "Advertisement Space",
}: {
  children?: string;
}) {
  return (
    <div className="home-ad-banner">
      <span className="home-ad-label">GOOGLE ADSENSE</span>

      <strong>{children}</strong>

      <small>728 × 90 • Leaderboard</small>
    </div>
  );
}

/* =========================================================
   STORY CARD
========================================================= */

function StoryCard({
  item,
  compact = false,
}: {
  item: {
    category: string;
    title: string;
    time: string;
    image: string;
    link: string;
  };
  compact?: boolean;
}) {
  return (
    <Link
      to={item.link}
      className={`home-story-card ${compact ? "compact" : ""}`}
    >
      <div className="home-story-image">
        <ImageWithFallback src={item.image} alt={item.title} />
      </div>

      <div className="home-story-body">
        <span className="home-category">{item.category}</span>

        <h3>{item.title}</h3>

        <span className="home-meta">
          <Clock size={10} />
          {item.time}
        </span>
      </div>
    </Link>
  );
}

/* =========================================================
   SMALL LIST
========================================================= */

function SmallList({
  items,
}: {
  items: {
    category: string;
    title: string;
    time: string;
    link: string;
  }[];
}) {
  return (
    <div className="home-small-list">
      {items.map((item, index) => (
        <Link
          to={item.link}
          key={`${item.title}-${index}`}
          className="home-small-item"
        >
          <span className="home-small-time">{item.time}</span>

          <div>
            <span className="home-category">{item.category}</span>

            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

export function HomePage() {
  const location = useLocation();

  const [tickerData, setTickerData] = useState<Market[]>([]);

  /* =======================================================
     MARKET API
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    const loadMarkets = async () => {
      try {
        const data = await getQuotes();

        const ticker: Market[] = [
          data.indices?.[0],
          data.indices?.[1],
          data.indices?.[2],

          data.crypto?.[0]
            ? {
                name: "BTC",
                value: data.crypto[0].value,
                change: data.crypto[0].change,
                up: data.crypto[0].up,
              }
            : null,

          data.crypto?.[1]
            ? {
                name: "ETH",
                value: data.crypto[1].value,
                change: data.crypto[1].change,
                up: data.crypto[1].up,
              }
            : null,
        ]
          .filter(Boolean)
          .map((m: any) => ({
            label: m.name,
            value: m.value,
            change: m.change,
            up: m.up,
          }));

        if (mounted) {
          setTickerData(ticker);
        }
      } catch (error) {
        console.error("Market API Error:", error);
      }
    };

    loadMarkets();

    const timer = window.setInterval(loadMarkets, 45000);

    return () => {
      mounted = false;
      window.clearInterval(timer);
    };
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="home-page">
      {/* =================================================
          BREAKING NEWS
      ================================================= */}

      <div className="home-breaking-wrap">
        <div className="home-container home-breaking">
          <span className="breaking-badge">BREAKING</span>

          <p>
            U.S. stocks open at strong levels as technology and manufacturing
            sectors continue to attract investor attention.
          </p>

          <span className="breaking-time">12 min ago</span>
        </div>
      </div>

      {/* =================================================
          BRAND HEADER
      ================================================= */}

      <header className="home-header">
        <div className="home-container">
          <div className="home-header-top">
            <span>{today}</span>

            <span>Jaipur Edition</span>

            <div className="home-header-actions">
              <button aria-label="Search">
                <Search size={14} />
                <span>Search</span>
              </button>

              <button aria-label="Notifications">
                <Bell size={14} />
              </button>

              <button aria-label="Sign in">
                <User size={14} />
                <span>Sign in</span>
              </button>

              <button className="home-subscribe">
                Subscribe
              </button>
            </div>
          </div>

          <Link to="/" className="home-masthead">
            <h1>
              THE <span>PRIDE</span> TIMES
            </h1>

            <p>
              THE GLOBAL VOICE OF INNOVATION, LEADERSHIP & SUCCESS
            </p>
          </Link>
        </div>
      </header>

      {/* =================================================
          SINGLE NAVBAR
          Removed the old secondary navbar.
      ================================================= */}

      <nav className="home-primary-nav">
        <div className="home-container nav-scroll">
          {navItems.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={active ? "active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* =================================================
          MARKET TICKER
      ================================================= */}

      <div className="home-ticker">
        <div className="home-container home-ticker-inner">
          <span className="ticker-menu">Markets</span>

          {tickerData.length > 0 ? (
            tickerData.map((item, index) => (
              <div
                className="ticker-item"
                key={`${item.label}-${index}`}
              >
                <b>{item.label}</b>

                <span>{item.value}</span>

                <em className={item.up ? "up" : "down"}>
                  {item.up ? "▲" : "▼"} {item.change}
                </em>
              </div>
            ))
          ) : (
            ["S&P 500", "NASDAQ", "DOW JONES", "BTC", "ETH"].map(
              (label) => (
                <div className="ticker-item" key={label}>
                  <b>{label}</b>
                  <span>—</span>
                  <em>Live</em>
                </div>
              ),
            )
          )}
        </div>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="home-container home-main">
        <AdBanner />

        {/* =================================================
            HERO
        ================================================= */}

        <section className="home-hero-grid">
          {/* LEFT */}
          <Link to={marketStory.link} className="home-top-story">
            <div className="home-top-story-image">
              <ImageWithFallback
                src={marketStory.image}
                alt={marketStory.title}
              />

              <span>TOP STORY</span>
            </div>

            <div className="home-top-story-content">
              <span className="home-category">
                {marketStory.category}
              </span>

              <h2>{marketStory.title}</h2>

              <p>{marketStory.excerpt}</p>

              <span className="home-read-button">
                Read Full Story
                <ArrowRight size={12} />
              </span>
            </div>
          </Link>

          {/* CENTER */}
          <Link
            to={heroStory.link}
            className="home-feature-story"
          >
            <div className="home-feature-image">
              <ImageWithFallback
                src={heroStory.image}
                alt={heroStory.title}
              />
            </div>

            <span className="home-category">
              {heroStory.category}
            </span>

            <h2>{heroStory.title}</h2>

            <p>{heroStory.excerpt}</p>

            <div className="home-related">
              <b>Related</b>

              <span>
                Nvidia and the next phase of AI infrastructure investment
              </span>
            </div>
          </Link>

          {/* RIGHT */}
          <aside className="home-right-rail">
            <div className="home-rail-title">
              <h2>Today's Videos</h2>

              <Link to="/magazine">Explore More</Link>
            </div>

            <Link
              to="/magazine"
              className="home-video-card"
            >
              <div className="home-video-image">
                <ImageWithFallback
                  src={Pt30Img}
                  alt="The Pride Times Magazine"
                />
              </div>

              <span className="home-video-duration">
                2:10
              </span>

              <div>
                <b>
                  The latest edition of The Pride Times is live
                </b>

                <small>
                  Leadership, technology and the forces reshaping
                  global business.
                </small>
              </div>
            </Link>

            <div className="home-latest-title">
              Latest
            </div>

            <SmallList items={latestRail} />
          </aside>
        </section>

        {/* =================================================
            LATEST STORIES
        ================================================= */}

        <section className="home-section">
          <SectionHeader
            title="Latest Stories"
            action="View All"
            to="/more"
          />

          <div className="home-four-grid">
            {latestStories.map((item) => (
              <StoryCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* =================================================
            AD
        ================================================= */}

        <AdBanner>
          Invest Smarter — The Pride Times Premium
        </AdBanner>

        {/* =================================================
            EDITOR'S PICKS + MAGAZINE
        ================================================= */}

        <section className="home-editor-layout">
          <div className="home-editors">
            <SectionHeader
              title="Editor's Picks"
              action="View All"
              to="/more"
            />

            <div className="home-editor-list">
              {editorPicks.map((item) => (
                <StoryCard
                  key={item.title}
                  item={item}
                  compact
                />
              ))}
            </div>
          </div>

          <aside className="home-side-column">
            <SectionHeader
              title="Magazine"
              action="View All"
              to="/magazine"
            />

            <Link
              to="/magazine"
              className="home-magazine-card"
            >
              <ImageWithFallback
                src={Pt30Img}
                alt="The AI Revolution"
              />

              <div>
                <span className="home-category">
                  PRIDE TIMES MAGAZINE
                </span>

                <h3>The AI Revolution</h3>

                <p>
                  Reshaping business, economies and the future of
                  work.
                </p>

                <span className="home-red-button">
                  Read Digital Edition →
                </span>
              </div>
            </Link>

            <SectionHeader
              title="Leader Spotlight"
              action="View All"
              to="/ceospotlight"
            />

            <div className="home-leader-list">
              {leaders.map((leader) => (
                <Link
                  to="/ceospotlight"
                  key={leader.rank}
                  className="home-leader"
                >
                  <span>
                    {String(leader.rank).padStart(2, "0")}
                  </span>

                  <div>
                    <strong>{leader.name}</strong>

                    <small>
                      {leader.company} · {leader.role}
                    </small>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        {/* =================================================
            WORLD SECURITY
        ================================================= */}

        <section className="home-section world-section">
          <SectionHeader
            title="World Security & Geopolitics"
            action="View All"
            to="/international-business"
          />

          <div className="home-three-grid">
            {worldSecurityStories.map((item) => (
              <StoryCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <section className="home-newsletter">
          <div>
            <h2>Stay Ahead with The Pride Times</h2>

            <p>
              Get daily briefings from the world's top business
              magazine.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button type="submit">
              Subscribe Free
            </button>
          </form>
        </section>

        <AdBanner>
          The Pride Times Premium — Deeper Analysis, Exclusive Access
        </AdBanner>
      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="home-footer">
        <div className="home-container">
          <div className="home-footer-main">
            <div className="home-footer-brand">
              <h2>
                THE <span>PRIDE TIMES</span>
              </h2>

              <p>
                THE GLOBAL VOICE OF INNOVATION, LEADERSHIP & SUCCESS
              </p>
            </div>

            <div>
              <h3>Explore</h3>

              <Link to="/markets">Markets</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/business-news">
                Business News
              </Link>
              <Link to="/energy">Energy</Link>
            </div>

            <div>
              <h3>Company</h3>

              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/privacy">Privacy</Link>
            </div>

            <div>
              <h3>Follow Us</h3>

              <span>
                Facebook · X · LinkedIn · Instagram · YouTube
              </span>
            </div>
          </div>

          <div className="home-footer-bottom">
            <span>
              © 2026 The Pride Times. All rights reserved.
            </span>

            <span>
              Privacy Policy · Terms of Use · Cookie Settings ·
              Accessibility
            </span>
          </div>
        </div>
      </footer>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --home-black: #050505;
          --home-red: #e31e24;
          --home-ink: #151515;
          --home-muted: #707070;
          --home-border: #dddddd;
          --home-soft: #f5f6f7;
          --home-green: #16a34a;
        }

        * {
          box-sizing: border-box;
        }

        .home-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: var(--home-ink);
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .home-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        /* =========================
           SCROLL NAV
        ========================= */

        .nav-scroll {
          display: flex;
          align-items: center;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .nav-scroll::-webkit-scrollbar {
          display: none;
        }

        /* =========================
           BREAKING BAR
        ========================= */

        .home-breaking-wrap {
          padding-top: 16px;
          background: #fff;
        }

        .home-breaking {
          min-height: 30px;
          background: #080808;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 10px;
          border-radius: 3px;
          font-size: 9px;
        }

        .breaking-badge {
          background: var(--home-red);
          padding: 4px 7px;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: .08em;
          flex: 0 0 auto;
        }

        .home-breaking p {
          margin: 0;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #eee;
        }

        .breaking-time {
          color: #888;
          white-space: nowrap;
          font-size: 7px;
        }

        /* =========================
           HEADER
        ========================= */

        .home-header {
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .home-header-top {
          min-height: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          font-size: 8px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .home-header-actions {
          display: flex;
          align
