import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  ArrowRight,
  Bell,
  ChevronRight,
  Clock,
  Search,
  TrendingDown,
  TrendingUp,
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
   DATA — existing Pride Times content/images
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

const secondaryNav = [
  { label: "Technology", to: "/technology" },
  { label: "Finance", to: "/finance" },
  { label: "Cybersecurity", to: "/cybersecurity" },
  { label: "Energy", to: "/energy" },
  { label: "Healthcare", to: "/healthcare" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Smart Cities", to: "/smart-cities" },
  { label: "Supply Chain", to: "/supply-chain" },
  { label: "Magazine", to: "/magazine" },
  { label: "More", to: "/more" },
];

const heroStory = {
  category: "TOP STORY",
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

const latestStories = [
  {
    category: "TECHNOLOGY",
    title:
      "Quantum Computing: The Next Leap in Human Innovation",
    time: "4 hrs ago",
    image: LN3Img,
    link: "/technology",
  },
  {
    category: "FINANCE",
    title:
      "U.S. Equity Markets Rally on Strong Manufacturing Data",
    time: "35 min ago",
    image: InsImg,
    link: "/markets",
  },
  {
    category: "ENERGY",
    title:
      "Data Centers and AI Workloads Force Energy Policy Reversals Globally",
    time: "2 hrs ago",
    image: LN4Img,
    link: "/energy",
  },
  {
    category: "LEADERSHIP",
    title:
      "The Intelligence Age: How CEOs Are Navigating Transformation",
    time: "3 hrs ago",
    image: EdipickImg,
    link: "/leadership",
  },
];

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
    title: "Nvidia's Blackwell Ultra GPU Delivers 40x Speed Boost for LLM Training",
    time: "2 hrs ago",
    image: LN3Img,
    link: "/technology",
  },
];

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

const prideTimes30 = [
  { rank: 1, name: "Jensen Huang", company: "Nvidia", role: "AI infrastructure" },
  { rank: 2, name: "Sam Altman", company: "OpenAI", role: "Frontier AI" },
];

const magazinePreview = {
  title: "The AI Revolution",
  subtitle: "Reshaping business, economies, and the future of work.",
  image: Pt30Img,
};

const videoPreview = {
  title: "The latest edition of The Pride Times is live",
  subtitle: "Leadership, technology and the forces reshaping global business.",
  image: Pt30Img,
};

type Market = {
  label?: string;
  value?: string;
  change?: string;
  up?: boolean;
};

/* =========================================================
   HELPERS
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
          {action} <ChevronRight size={12} />
        </Link>
      )}
    </div>
  );
}

function AdBanner({ children = "Advertisement Space" }: { children?: string }) {
  return (
    <div className="home-ad-banner">
      <span className="home-ad-label">GOOGLE ADSENSE</span>
      <strong>{children}</strong>
      <small>728 × 90 • Leaderboard</small>
    </div>
  );
}

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
    <Link to={item.link} className={`home-story-card ${compact ? "compact" : ""}`}>
      <div className="home-story-image">
        <ImageWithFallback src={item.image} alt={item.title} />
      </div>
      <div className="home-story-body">
        <span className="home-category">{item.category}</span>
        <h3>{item.title}</h3>
        <span className="home-meta">
          <Clock size={10} /> {item.time}
        </span>
      </div>
    </Link>
  );
}

function SmallList({
  items,
}: {
  items: { category: string; title: string; time: string; link: string }[];
}) {
  return (
    <div className="home-small-list">
      {items.map((item, index) => (
        <Link to={item.link} key={`${item.title}-${index}`} className="home-small-item">
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
   HOMEPAGE
========================================================= */

export function HomePage() {
  const location = useLocation();
  const [tickerData, setTickerData] = useState<Market[]>([]);

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

        if (mounted) setTickerData(ticker);
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
      {/* TOP BREAKING BAR */}
      <div className="home-breaking-wrap">
        <div className="home-container home-breaking">
          <span className="breaking-badge">BREAKING</span>
          <p>
            U.S. stocks open June at all-time highs. Nasdaq +8% since April end.
            S&P 500 consolidating. Oil retreating on Iran peace hopes.
          </p>
          <span className="breaking-time">12 min ago</span>
        </div>
      </div>

      {/* BRAND HEADER */}
      <header className="home-header">
        <div className="home-container">
          <div className="home-header-top">
            <span>{today}</span>
            <span>Jaipur Edition</span>
            <div className="home-header-actions">
              <button aria-label="Search">
                <Search size={14} /> <span>Search</span>
              </button>
              <button aria-label="Notifications">
                <Bell size={14} />
              </button>
              <button aria-label="Sign in">
                <User size={14} /> <span>Sign in</span>
              </button>
              <button className="home-subscribe">Subscribe</button>
            </div>
          </div>

          <Link to="/" className="home-masthead">
            <h1>
              THE <span>PRIDE</span> TIMES
            </h1>
            <p>THE GLOBAL VOICE OF INNOVATION, LEADERSHIP & SUCCESS</p>
          </Link>
        </div>
      </header>

      {/* PRIMARY NAV */}
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

      {/* LIVE MARKET TICKER */}
      <div className="home-ticker">
        <div className="home-container home-ticker-inner">
          <span className="ticker-menu">Menu⌄</span>
          {tickerData.length > 0
            ? tickerData.map((item, index) => (
                <div className="ticker-item" key={`${item.label}-${index}`}>
                  <b>{item.label}</b>
                  <span>{item.value}</span>
                  <em className={item.up ? "up" : "down"}>
                    {item.up ? "▲" : "▼"} {item.change}
                  </em>
                </div>
              ))
            : ["S&P 500", "NASDAQ", "DOW JONES", "BTC", "ETH"].map((label) => (
                <div className="ticker-item" key={label}>
                  <b>{label}</b>
                  <span>—</span>
                  <em>Live</em>
                </div>
              ))}
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div className="home-secondary-nav">
        <div className="home-container nav-scroll">
          {secondaryNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <main className="home-container home-main">
        {/* AD */}
        <AdBanner />

        {/* HERO THREE-COLUMN AREA */}
        <section className="home-hero-grid">
          {/* LEFT — TOP STORY */}
          <Link to="/markets" className="home-top-story">
            <div className="home-top-story-image">
              <ImageWithFallback
                src={marketStory.image}
                alt={marketStory.title}
              />
              <span>TOP STORY</span>
            </div>
            <div className="home-top-story-content">
              <span className="home-category">{marketStory.category}</span>
              <h2>{marketStory.title}</h2>
              <p>{marketStory.excerpt}</p>
              <span className="home-read-button">
                Read Full Story <ArrowRight size={12} />
              </span>
            </div>
          </Link>

          {/* CENTER — FEATURE */}
          <Link to={heroStory.link} className="home-feature-story">
            <div className="home-feature-image">
              <ImageWithFallback src={heroStory.image} alt={heroStory.title} />
            </div>
            <span className="home-category">{heroStory.category}</span>
            <h2>{heroStory.title}</h2>
            <p>{heroStory.excerpt}</p>
            <div className="home-related">
              <b>Related</b>
              <span>
                Nvidia and the next phase of AI infrastructure investment
              </span>
            </div>
          </Link>

          {/* RIGHT — VIDEOS + LATEST */}
          <aside className="home-right-rail">
            <div className="home-rail-title">
              <h2>Today's Videos</h2>
              <button>Explore More</button>
            </div>

            <Link to="/magazine" className="home-video-card">
              <ImageWithFallback src={videoPreview.image} alt={videoPreview.title} />
              <span className="home-video-duration">2:10</span>
              <div>
                <b>{videoPreview.title}</b>
                <small>{videoPreview.subtitle}</small>
              </div>
            </Link>

            <div className="home-latest-title">Latest</div>
            <SmallList
              items={[
                {
                  category: "TECHNOLOGY",
                  title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push",
                  time: "12 min ago",
                  link: "/technology",
                },
                {
                  category: "TECHNOLOGY",
                  title: "Alphabet Plans $80B Stock Offering to Fund AI Data-Center Expansion",
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
                  title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally",
                  time: "4 hr ago",
                  link: "/energy",
                },
              ]}
            />
          </aside>
        </section>

        {/* LATEST STORIES */}
        <section className="home-section">
          <SectionHeader title="Latest Stories" action="View All" to="/more" />
          <div className="home-four-grid">
            {latestStories.map((item) => (
              <StoryCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <AdBanner>Invest Smarter — The Pride Times Premium</AdBanner>

        {/* EDITOR'S PICKS + MAGAZINE + LEADERS */}
        <section className="home-editor-layout">
          <div className="home-editors">
            <SectionHeader title="Editor's Picks" action="View All" to="/ceospotlight" />
            <div className="home-editor-list">
              {editorPicks.map((item) => (
                <StoryCard key={item.title} item={item} compact />
              ))}
            </div>
          </div>

          <aside className="home-side-column">
            <SectionHeader title="Magazine" action="View All" to="/magazine" />
            <Link to="/magazine" className="home-magazine-card">
              <ImageWithFallback
                src={magazinePreview.image}
                alt={magazinePreview.title}
              />
              <div>
                <span className="home-category">PRIDE TIMES MAGAZINE</span>
                <h3>{magazinePreview.title}</h3>
                <p>{magazinePreview.subtitle}</p>
                <span className="home-red-button">Read Digital Edition →</span>
              </div>
            </Link>

            <SectionHeader title="Leader Spotlight" action="View All" to="/ceospotlight" />
            <div className="home-leader-list">
              {prideTimes30.map((leader) => (
                <Link to="/ceospotlight" key={leader.rank} className="home-leader">
                  <span>{String(leader.rank).padStart(2, "0")}</span>
                  <div>
                    <strong>{leader.name}</strong>
                    <small>{leader.company} · {leader.role}</small>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        {/* WORLD SECURITY & GEOPOLITICS */}
        <section className="home-section world-section">
          <SectionHeader
            title="World Security & Geopolitics"
            action="View All"
            to="/international-business"
          />

          <div className="home-three-grid">
            {worldSecurityStories.map((item) => (
              <StoryCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="home-newsletter">
          <div>
            <h2>Stay Ahead with The Pride Times</h2>
            <p>Get daily briefings from the world's top business magazine.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button>Subscribe Free</button>
          </form>
        </section>

        <AdBanner>The Pride Times Premium — Deeper Analysis, Exclusive Access</AdBanner>
      </main>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-container">
          <div className="home-footer-main">
            <div className="home-footer-brand">
              <h2>
                THE <span>PRIDE TIMES</span>
              </h2>
              <p>THE GLOBAL VOICE OF INNOVATION, LEADERSHIP & SUCCESS</p>
            </div>

            <div>
              <h3>Explore</h3>
              <Link to="/markets">Markets</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/business-news">Business News</Link>
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
              <span>Facebook · X · LinkedIn · Instagram · YouTube</span>
            </div>
          </div>

          <div className="home-footer-bottom">
            <span>© 2026 The Pride Times. All rights reserved.</span>
            <span>Privacy Policy · Terms of Use · Cookie Settings · Accessibility</span>
          </div>
        </div>
      </footer>

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

        .home-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: var(--home-ink);
          font-family: Arial, Helvetica, sans-serif;
        }

        .home-page *,
        .home-page *::before,
        .home-page *::after {
          box-sizing: border-box;
        }

        .home-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .nav-scroll {
          display: flex;
          align-items: center;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .nav-scroll::-webkit-scrollbar { display: none; }

        /* BREAKING */
        .home-breaking-wrap {
          padding-top: 18px;
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

        /* HEADER */
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
          align-items: center;
          gap: 13px;
        }

        .home-header-actions button {
          border: 0;
          background: transparent;
          font: inherit;
          color: inherit;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .home-header-actions button:hover { color: var(--home-red); }

        .home-header-actions .home-subscribe {
          background: var(--home-red);
          color: #fff;
          padding: 8px 14px;
          border-radius: 4px;
          font-weight: 800;
        }

        .home-masthead {
          display: block;
          text-align: left;
          text-decoration: none;
          padding: 8px 0 11px;
        }

        .home-masthead h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 5vw, 48px);
          line-height: .9;
          letter-spacing: -.055em;
          color: #111;
          font-weight: 900;
        }

        .home-masthead h1 span,
        .home-footer-brand h2 span {
          color: var(--home-red);
        }

        .home-masthead p {
          margin: 6px 0 0;
          font-size: 7px;
          color: #777;
          letter-spacing: .22em;
        }

        /* NAVIGATION */
        .home-primary-nav {
          background: var(--home-black);
          border-bottom: 1px solid #222;
        }

        .home-primary-nav .home-container {
          width: min(1180px, calc(100% - 32px));
        }

        .home-primary-nav a {
          position: relative;
          color: #f2f2f2;
          text-decoration: none;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          padding: 9px 12px;
          white-space: nowrap;
        }

        .home-primary-nav a::after {
          content: "";
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 0;
          height: 2px;
          background: var(--home-red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }

        .home-primary-nav a:hover::after,
        .home-primary-nav a.active::after {
          transform: scaleX(1);
        }

        /* TICKER */
        .home-ticker {
          background: #fff;
          border-bottom: 1px solid var(--home-border);
        }

        .home-ticker-inner {
          min-height: 38px;
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .home-ticker-inner::-webkit-scrollbar { display: none; }

        .ticker-menu {
          border: 1px solid #ddd;
          padding: 6px 10px;
          font-size: 8px;
          white-space: nowrap;
        }

        .ticker-item {
          min-width: 145px;
          height: 27px;
          display: flex;
          align-items: center;
          gap: 7px;
          background: #070707;
          color: #fff;
          padding: 0 9px;
          border-radius: 3px;
          white-space: nowrap;
          font-size: 8px;
        }

        .ticker-item b {
          color: #bbb;
          font-size: 7px;
          letter-spacing: .03em;
        }

        .ticker-item em {
          font-style: normal;
          font-size: 7px;
          font-weight: 700;
        }

        .ticker-item em.up { color: #2fd17c; }
        .ticker-item em.down { color: #ff5c66; }

        /* SECONDARY NAV */
        .home-secondary-nav {
          border-bottom: 1px solid #e3e3e3;
          background: #fff;
        }

        .home-secondary-nav a {
          color: #222;
          text-decoration: none;
          font-size: 8px;
          font-weight: 700;
          padding: 8px 13px;
          white-space: nowrap;
        }

        .home-secondary-nav a:hover { color: var(--home-red); }

        /* MAIN */
        .home-main {
          padding: 16px 0 45px;
        }

        /* ADS */
        .home-ad-banner {
          height: 70px;
          background: linear-gradient(90deg, #0b2028, #28576a);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          position: relative;
          overflow: hidden;
        }

        .home-ad-banner::after {
          content: "Advertisement";
          position: absolute;
          top: 3px;
          right: 6px;
          color: #999;
          background: #fff;
          font-size: 5px;
          padding: 2px 4px;
        }

        .home-ad-banner span {
          color: #67c5df;
          font-size: 6px;
          font-weight: 800;
          letter-spacing: .14em;
        }

        .home-ad-banner strong {
          font-size: 10px;
          margin-top: 2px;
        }

        .home-ad-banner small {
          color: #9db8c4;
          font-size: 6px;
          margin-top: 3px;
        }

        /* HERO */
        .home-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr .9fr;
          gap: 14px;
          align-items: start;
          border-bottom: 1px solid #111;
          padding-bottom: 20px;
        }

        .home-top-story,
        .home-feature-story,
        .home-video-card,
        .home-story-card,
        .home-magazine-card,
        .home-leader {
          text-decoration: none;
          color: inherit;
        }

        .home-top-story {
          background: #080808;
          color: #fff;
          border-radius: 6px;
          overflow: hidden;
          display: block;
        }

        .home-top-story-image {
          height: 245px;
          position: relative;
          overflow: hidden;
        }

        .home-top-story-image img,
        .home-feature-image img,
        .home-story-image img,
        .home-video-card img,
        .home-magazine-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }

        .home-top-story:hover img,
        .home-feature-story:hover img,
        .home-story-card:hover img,
        .home-video-card:hover img,
        .home-magazine-card:hover img {
          transform: scale(1.035);
        }

        .home-top-story-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,.78), transparent 55%);
        }

        .home-top-story-image span {
          position: absolute;
          z-index: 1;
          left: 12px;
          bottom: 12px;
          background: var(--home-red);
          color: #fff;
          font-size: 7px;
          font-weight: 800;
          padding: 5px 7px;
          letter-spacing: .08em;
        }

        .home-top-story-content {
          padding: 11px 12px 13px;
        }

        .home-category {
          display: inline-block;
          color: var(--home-red);
          font-size: 7px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .09em;
        }

        .home-top-story .home-category { color: #ff5a62; }

        .home-top-story h2 {
          margin: 5px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.02;
        }

        .home-top-story p {
          margin: 8px 0 12px;
          color: #bbb;
          font-size: 8px;
          line-height: 1.45;
        }

        .home-read-button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #111;
          background: #fff;
          padding: 6px 8px;
          border-radius: 3px;
          font-size: 7px;
          font-weight: 800;
        }

        .home-feature-story {
          min-width: 0;
          display: block;
        }

        .home-feature-image {
          height: 245px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .home-feature-story h2 {
          margin: 5px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          line-height: 1.02;
          letter-spacing: -.025em;
        }

        .home-feature-story p {
          color: #666;
          font-size: 9px;
          line-height: 1.5;
          margin: 8px 0;
        }

        .home-related {
          border: 1px solid #ddd;
          padding: 7px 9px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 8px;
        }

        .home-related b {
          color: #777;
          text-transform: uppercase;
          font-size: 6px;
          letter-spacing: .1em;
        }

        .home-right-rail {
          min-width: 0;
          border-left: 1px solid #ddd;
          padding-left: 12px;
        }

        .home-rail-title,
        .home-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 2px solid #111;
          border-bottom: 1px solid #111;
          padding: 6px 0;
          margin-bottom: 9px;
        }

        .home-rail-title h2,
        .home-section-header h2 {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          font-weight: 800;
        }

        .home-rail-title button {
          border: 1px solid #ddd;
          border-radius: 12px;
          background: #fff;
          padding: 4px 7px;
          font-size: 6px;
          cursor: pointer;
        }

        .home-video-card {
          display: block;
          position: relative;
          border-bottom: 1px solid #ddd;
          padding-bottom: 9px;
        }

        .home-video-card > div:first-of-type {
          height: 100px;
          overflow: hidden;
          position: relative;
        }

        .home-video-card img { position: absolute; inset: 0; }

        .home-video-duration {
          position: absolute;
          right: 6px;
          top: 78px;
          background: #111;
          color: #fff;
          padding: 3px 5px;
          font-size: 6px;
          z-index: 2;
        }

        .home-video-card > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-top: 5px;
        }

        .home-video-card b {
          font-size: 8px;
          line-height: 1.2;
        }

        .home-video-card small {
          color: #777;
          font-size: 6px;
          line-height: 1.3;
        }

        .home-latest-title {
          color: var(--home-red);
          font-weight: 900;
          font-size: 10px;
          margin: 9px 0 2px;
        }

        .home-small-list {
          display: flex;
          flex-direction: column;
        }

        .home-small-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 6px;
          padding: 6px 0;
          border-bottom: 1px solid #eee;
          text-decoration: none;
          color: inherit;
        }

        .home-small-time {
          color: var(--home-red);
          font-size: 6px;
          font-weight: 800;
          padding-top: 2px;
        }

        .home-small-item .home-category {
          font-size: 5px;
        }

        .home-small-item h3 {
          margin: 2px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 8px;
          line-height: 1.18;
        }

        /* SECTIONS */
        .home-section {
          margin-top: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #111;
        }

        .home-see-all {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          color: var(--home-red);
          text-decoration: none;
          font-size: 7px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .home-four-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .home-three-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .home-story-card {
          display: block;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
        }

        .home-story-image {
          height: 115px;
          overflow: hidden;
        }

        .home-story-body {
          padding: 8px;
        }

        .home-story-card h3 {
          margin: 4px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 11px;
          line-height: 1.13;
        }

        .home-meta {
          color: #888;
          font-size: 6px;
          display: flex;
          align-items: center;
          gap: 3px;
        }

        /* EDITORS */
        .home-editor-layout {
          display: grid;
          grid-template-columns: 1.75fr .85fr;
          gap: 15px;
          margin-top: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #111;
        }

        .home-editor-list {
          display: flex;
          flex-direction: column;
        }

        .home-story-card.compact {
          display: grid;
          grid-template-columns: 120px 1fr;
          border: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 0;
          padding: 8px 0;
        }

        .home-story-card.compact:first-child { padding-top: 0; }

        .home-story-card.compact .home-story-image {
          height: 72px;
        }

        .home-story-card.compact h3 {
          font-size: 10px;
          margin-top: 3px;
        }

        .home-story-card.compact .home-story-body {
          padding: 0 0 0 9px;
        }

        .home-side-column {
          border-left: 1px solid #ddd;
          padding-left: 14px;
        }

        .home-magazine-card {
          display: block;
          background: #080808;
          color: #fff;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 17px;
        }

        .home-magazine-card > img {
          height: 115px;
        }

        .home-magazine-card > div {
          padding: 9px;
        }

        .home-magazine-card .home-category { color: #ff5a62; }

        .home-magazine-card h3 {
          margin: 4px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
        }

        .home-magazine-card p {
          margin: 0 0 8px;
          color: #aaa;
          font-size: 7px;
          line-height: 1.35;
        }

        .home-red-button {
          display: inline-block;
          background: var(--home-red);
          padding: 5px 7px;
          color: #fff;
          font-size: 6px;
          font-weight: 800;
        }

        .home-leader-list {
          display: flex;
          flex-direction: column;
        }

        .home-leader {
          display: flex;
          align-items: center;
          gap: 9px;
          border-bottom: 1px solid #eee;
          padding: 7px 0;
        }

        .home-leader > span {
          font-family: Georgia, "Times New Roman", serif;
          color: var(--home-red);
          font-weight: 800;
          font-size: 15px;
        }

        .home-leader strong {
          display: block;
          font-size: 8px;
        }

        .home-leader small {
          color: #777;
          font-size: 6px;
        }

        /* WORLD */
        .world-section .home-story-image { height: 135px; }

        /* NEWSLETTER */
        .home-newsletter {
          margin: 24px 0;
          background: #071b2d;
          color: #fff;
          padding: 25px 28px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .home-newsletter h2 {
          margin: 0 0 5px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
        }

        .home-newsletter p {
          margin: 0;
          color: #aebdca;
          font-size: 8px;
        }

        .home-newsletter form {
          display: flex;
          gap: 6px;
        }

        .home-newsletter input {
          width: 220px;
          background: #19344b;
          color: #fff;
          border: 1px solid #38536a;
          border-radius: 4px;
          padding: 9px 10px;
          font-size: 8px;
          outline: none;
        }

        .home-newsletter button {
          border: 0;
          background: var(--home-red);
          color: #fff;
          border-radius: 4px;
          padding: 9px 12px;
          font-size: 8px;
          font-weight: 800;
          cursor: pointer;
        }

        /* FOOTER */
        .home-footer {
          background: #050505;
          color: #fff;
          padding: 28px 0 14px;
        }

        .home-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.3fr;
          gap: 35px;
          padding-bottom: 25px;
          border-bottom: 1px solid #222;
        }

        .home-footer-brand h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          letter-spacing: -.04em;
        }

        .home-footer-brand p {
          color: #777;
          font-size: 6px;
          letter-spacing: .18em;
          margin-top: 4px;
        }

        .home-footer h3 {
          margin: 0 0 8px;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .home-footer a,
        .home-footer span {
          display: block;
          color: #999;
          text-decoration: none;
          font-size: 7px;
          line-height: 1.8;
        }

        .home-footer a:hover { color: #fff; }

        .home-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 12px;
          color: #666;
          font-size: 6px;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .home-hero-grid {
            grid-template-columns: 1fr 1.3fr;
          }

          .home-right-rail {
            grid-column: 1 / -1;
            border-left: 0;
            border-top: 1px solid #ddd;
            padding: 14px 0 0;
          }

          .home-right-rail .home-small-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 15px;
          }

          .home-four-grid { grid-template-columns: repeat(2, 1fr); }
          .home-editor-layout { grid-template-columns: 1fr; }
          .home-side-column {
            border-left: 0;
            border-top: 1px solid #ddd;
            padding-left: 0;
            padding-top: 14px;
          }
        }

        @media (max-width: 700px) {
          .home-container {
            width: min(100% - 20px, 1180px);
          }

          .home-header-top > span:first-child {
            display: none;
          }

          .home-header-top {
            justify-content: flex-end;
          }

          .home-header-actions span {
            display: none;
          }

          .home-masthead {
            text-align: center;
          }

          .home-masthead h1 {
            font-size: 36px;
          }

          .home-hero-grid {
            grid-template-columns: 1fr;
          }

          .home-right-rail {
            grid-column: auto;
          }

          .home-feature-story h2 { font-size: 23px; }

          .home-four-grid,
          .home-three-grid {
            grid-template-columns: 1fr 1fr;
          }

          .home-newsletter {
            flex-direction: column;
            align-items: stretch;
          }

          .home-newsletter form {
            width: 100%;
          }

          .home-newsletter input {
            flex: 1;
            width: auto;
          }

          .home-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 22px;
          }

          .home-footer-bottom {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .home-breaking {
            font-size: 7px;
          }

          .breaking-time {
            display: none;
          }

          .home-four-grid,
          .home-three-grid {
            grid-template-columns: 1fr;
          }

          .home-story-image {
            height: 175px;
          }

          .world-section .home-story-image {
            height: 190px;
          }

          .home-story-card.compact {
            grid-template-columns: 92px 1fr;
          }

          .home-story-card.compact .home-story-image {
            height: 62px;
          }

          .home-right-rail .home-small-list {
            grid-template-columns: 1fr;
          }

          .home-footer-main {
            grid-template-columns: 1fr;
          }

          .home-newsletter form {
            flex-direction: column;
          }

          .home-newsletter input {
            width: 100%;
          }

          .home-ad-banner {
            height: 62px;
          }
        }
      `}</style>
    </div>
  );
}
