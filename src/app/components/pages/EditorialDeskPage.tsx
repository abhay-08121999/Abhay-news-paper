import { ArrowRight, ArrowUpRight, Clock3, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import HeroImg from "../../../imports/heroimage.png";
import InsightImg from "../../../imports/Insightimage.png";
import LeadImg from "../../../imports/Lead1.png";
import Ln3Img from "../../../imports/LN3image.png";
import TechImg from "../../../imports/Techheroimage.png";

export type EditorialSection =
  | "Markets"
  | "Business"
  | "International"
  | "Technology"
  | "Finance"
  | "Energy"
  | "Healthcare"
  | "Manufacturing"
  | "Innovation"
  | "Leadership"
  | "Startups"
  | "World"
  | "Cybersecurity"
  | "Smart Cities"
  | "Supply Chain"
  | "Featured"
  | "Breaking News"
  | "Cover Stories"
  | "CEO Spotlight"
  | "Billionaires";

type Story = {
  tag: string;
  title: string;
  summary: string;
  image: string;
  time: string;
  href: string;
};

const sectionContent: Record<EditorialSection, { dek: string; lead: Story; stories: Story[] }> = {
  Markets: {
    dek: "The numbers, signals and people moving capital across India and the world.",
    lead: { tag: "MARKET PULSE", title: "Investors Reprice the Next Phase of India’s Growth Story", summary: "Stocks, currencies and commodities are sending a more nuanced signal than the daily headline. Here is what the market is watching now.", image: HeroImg, time: "18 min ago", href: "/markets" },
    stories: [
      { tag: "EQUITIES", title: "Why breadth matters more than the headline index", summary: "A closer look at participation beneath the market rally.", image: InsightImg, time: "42 min ago", href: "/markets" },
      { tag: "CURRENCIES", title: "The rupee’s next test is playing out beyond the spot market", summary: "Trade flows and hedging demand are reshaping the currency conversation.", image: Ln3Img, time: "1 hr ago", href: "/markets" },
      { tag: "EXPLAINER", title: "What the latest rate signals mean for households", summary: "Borrowers, savers and businesses face different outcomes from the same policy path.", image: LeadImg, time: "2 hr ago", href: "/economics" },
    ],
  },
  Business: {
    dek: "The companies, leaders and industries defining the next business cycle.",
    lead: { tag: "BUSINESS", title: "India’s Next Enterprise Wave Is Being Built in Quiet Corridors", summary: "From industrial capacity to ambitious founders, the most important business stories are shifting from promise to execution.", image: LeadImg, time: "24 min ago", href: "/business-news" },
    stories: [
      { tag: "COMPANIES", title: "The boardroom questions behind India’s expansion plans", summary: "Capital discipline is becoming a competitive advantage.", image: HeroImg, time: "51 min ago", href: "/business-news" },
      { tag: "LEADERSHIP", title: "CEOs are trading certainty for optionality", summary: "Executives are building portfolios of bets instead of one grand forecast.", image: InsightImg, time: "1 hr ago", href: "/leadership" },
      { tag: "ANALYSIS", title: "What the next generation of family businesses wants", summary: "Succession, software and global ambition are rewriting the playbook.", image: Ln3Img, time: "3 hr ago", href: "/business-news" },
    ],
  },
  International: {
    dek: "The people, power and policies reshaping global business from an Indian vantage point.",
    lead: { tag: "GLOBAL VIEW", title: "A More Fragmented World Is Creating New Routes to Growth", summary: "Trade corridors, strategic capital and diplomatic realignment are changing how companies plan across borders.", image: HeroImg, time: "31 min ago", href: "/international-news" },
    stories: [
      { tag: "GEOPOLITICS", title: "The new map of economic influence", summary: "Partnerships now matter as much as proximity.", image: InsightImg, time: "1 hr ago", href: "/world" },
      { tag: "TRADE", title: "Why supply chains are becoming foreign policy", summary: "Procurement decisions now carry strategic weight.", image: Ln3Img, time: "2 hr ago", href: "/international-news" },
      { tag: "WORLD", title: "The capital cities where business confidence is moving", summary: "A field guide to the next set of global signals.", image: LeadImg, time: "4 hr ago", href: "/world" },
    ],
  },
  Technology: {
    dek: "The technologies, companies and ideas changing how the world works.",
    lead: { tag: "TECHNOLOGY", title: "The AI Buildout Has Entered Its Infrastructure Era", summary: "The next technology race is not only about models. It is about power, chips, data centres and the teams that can deploy them.", image: TechImg, time: "12 min ago", href: "/technology" },
    stories: [
      { tag: "AI", title: "The enterprise AI question is moving from ‘if’ to ‘where’", summary: "Leaders are measuring adoption by workflow, not demo.", image: InsightImg, time: "38 min ago", href: "/technology" },
      { tag: "DIGITAL", title: "India’s next software advantage may be operational", summary: "The companies winning are pairing automation with domain depth.", image: LeadImg, time: "1 hr ago", href: "/innovation" },
      { tag: "EXPLAINER", title: "What a trillion-dollar data centre buildout changes", summary: "Energy, land and talent are now technology constraints.", image: HeroImg, time: "2 hr ago", href: "/technology" },
    ],
  },
  Finance: {
    dek: "The institutions, instruments and decisions moving money through the economy.",
    lead: { tag: "FINANCE", title: "The New Financial Playbook Rewards Resilience Over Speed", summary: "Lenders and investors are placing a premium on durable cash flows as the cost of capital stays in focus.", image: InsightImg, time: "26 min ago", href: "/finance" },
    stories: [
      { tag: "BANKING", title: "Credit is growing. The more useful question is where", summary: "Sector-level demand offers a clearer signal than the headline total.", image: HeroImg, time: "1 hr ago", href: "/finance" },
      { tag: "INVESTING", title: "Why patient capital is back in the conversation", summary: "Long horizons are becoming a differentiator again.", image: LeadImg, time: "2 hr ago", href: "/markets" },
      { tag: "PERSONAL FINANCE", title: "The household balance sheet gets a closer read", summary: "Savings, leverage and income are moving in different directions.", image: Ln3Img, time: "3 hr ago", href: "/finance" },
    ],
  },
  Energy: {
    dek: "The transition, commodities and infrastructure behind the next energy economy.",
    lead: { tag: "ENERGY", title: "Power Has Become the Strategic Input Behind Every Growth Plan", summary: "From data centres to factories, reliable energy is now a boardroom issue — and a competitive edge.", image: HeroImg, time: "44 min ago", href: "/energy" },
    stories: [
      { tag: "TRANSITION", title: "The grid bottleneck is becoming the next energy story", summary: "Generation is scaling faster than connection capacity.", image: InsightImg, time: "1 hr ago", href: "/energy" },
      { tag: "COMMODITIES", title: "Oil’s volatility is changing the investment case", summary: "Markets are pricing both scarcity and substitution.", image: Ln3Img, time: "2 hr ago", href: "/energy" },
      { tag: "CLIMATE", title: "Why adaptation is now a balance-sheet issue", summary: "The cost of heat and floods is moving into mainstream planning.", image: LeadImg, time: "3 hr ago", href: "/economics" },
    ],
  },
  Healthcare: {
    dek: "The science, systems and companies changing how people live longer and better.",
    lead: { tag: "HEALTHCARE", title: "The Next Healthcare Shift Will Be Measured in Access", summary: "Technology is only half the story. Distribution, affordability and trust will decide who benefits.", image: InsightImg, time: "36 min ago", href: "/healthcare" },
    stories: [
      { tag: "BIOTECH", title: "The funding reset behind the next generation of therapies", summary: "Investors are looking for proof that science can scale.", image: HeroImg, time: "1 hr ago", href: "/healthcare" },
      { tag: "SYSTEMS", title: "Hospitals are becoming data businesses", summary: "The operating model is changing from volume to intelligence.", image: LeadImg, time: "2 hr ago", href: "/healthcare" },
      { tag: "INNOVATION", title: "The health-tech founders designing for the real world", summary: "The strongest products begin with a workflow, not a buzzword.", image: Ln3Img, time: "3 hr ago", href: "/innovation" },
    ],
  },
  Manufacturing: {
    dek: "The factories, supply chains and industrial bets shaping India’s productive capacity.",
    lead: { tag: "MANUFACTURING", title: "The Factory Floor Is Becoming India’s Most Important Story", summary: "New capacity is arriving alongside a sharper focus on skills, logistics and the economics of scale.", image: LeadImg, time: "29 min ago", href: "/manufacturing" },
    stories: [
      { tag: "SUPPLY CHAIN", title: "Resilience is now a design constraint", summary: "Companies are redesigning networks before the next disruption.", image: HeroImg, time: "1 hr ago", href: "/supply-chain" },
      { tag: "AUTOMATION", title: "Robotics is moving from showcase to shift schedule", summary: "Factories are measuring automation in uptime and yield.", image: TechImg, time: "2 hr ago", href: "/innovation" },
      { tag: "POLICY", title: "The industrial policy questions executives are asking", summary: "Incentives help, but execution determines who scales.", image: InsightImg, time: "4 hr ago", href: "/manufacturing" },
    ],
  },
  Innovation: {
    dek: "The ideas, products and founders turning difficult problems into new markets.",
    lead: { tag: "INNOVATION", title: "The Most Valuable Innovation Is Becoming More Practical", summary: "The frontier is moving from spectacle to systems that make businesses faster, safer and more useful.", image: TechImg, time: "22 min ago", href: "/innovation" },
    stories: [
      { tag: "STARTUPS", title: "Founders are building for the long adoption curve", summary: "The new startup advantage is distribution with patience.", image: LeadImg, time: "1 hr ago", href: "/startup-success" },
      { tag: "DESIGN", title: "Why the best products remove decisions", summary: "Good interfaces turn complexity into confidence.", image: InsightImg, time: "2 hr ago", href: "/innovation" },
      { tag: "RESEARCH", title: "The lab-to-market gap is getting smaller", summary: "New capital models are helping science travel further.", image: HeroImg, time: "3 hr ago", href: "/innovation" },
    ],
  },
  Leadership: {
    dek: "The decisions, cultures and leaders defining the modern organization.",
    lead: { tag: "LEADERSHIP", title: "The New Leadership Advantage Is Knowing What Not to Scale", summary: "In a noisy operating environment, judgment is becoming a measurable business capability.", image: LeadImg, time: "27 min ago", href: "/leadership" },
    stories: [
      { tag: "MANAGEMENT", title: "The companies making room for slower thinking", summary: "Better decisions often begin with better questions.", image: InsightImg, time: "1 hr ago", href: "/leadership" },
      { tag: "PEOPLE", title: "Talent strategy is now an operating system", summary: "Hiring, learning and retention are being designed together.", image: HeroImg, time: "2 hr ago", href: "/leadership" },
      { tag: "OPINION", title: "The case for ambition with guardrails", summary: "Execution improves when the boundary is clear.", image: Ln3Img, time: "4 hr ago", href: "/leadership" },
    ],
  },
  Startups: {
    dek: "The founders, products and funding decisions building tomorrow’s companies.",
    lead: { tag: "STARTUPS", title: "India’s Startup Story Is Moving Into Its Operating Chapter", summary: "The next winners will be defined by retention, margins and the ability to build enduring distribution.", image: TechImg, time: "33 min ago", href: "/startup-success" },
    stories: [
      { tag: "VENTURE", title: "What investors want to see after the first cheque", summary: "The conversation has moved from growth at any cost to evidence of repeatability.", image: LeadImg, time: "1 hr ago", href: "/startup-success" },
      { tag: "FOUNDERS", title: "The second-time founder advantage", summary: "Experience changes the questions before it changes the answers.", image: InsightImg, time: "2 hr ago", href: "/startup-success" },
      { tag: "MARKETS", title: "Why exit pathways are becoming more diverse", summary: "Strategic buyers, public markets and secondaries all matter.", image: HeroImg, time: "3 hr ago", href: "/markets" },
    ],
  },
  World: {
    dek: "The geopolitical shifts and human stories that redraw the world economy.",
    lead: { tag: "WORLD", title: "The Global Economy Is Learning to Live With Permanent Friction", summary: "Trade, technology and security are now inseparable from the outlook for growth.", image: HeroImg, time: "21 min ago", href: "/world" },
    stories: [
      { tag: "GEOPOLITICS", title: "The alliances being built around strategic capacity", summary: "Countries are competing through infrastructure as much as diplomacy.", image: InsightImg, time: "1 hr ago", href: "/world" },
      { tag: "POLITICS", title: "Policy uncertainty is changing investment behaviour", summary: "Companies are buying flexibility before they buy scale.", image: LeadImg, time: "2 hr ago", href: "/international-news" },
      { tag: "EXPLAINER", title: "Five signals for the next global cycle", summary: "A field guide to the data behind the headlines.", image: Ln3Img, time: "3 hr ago", href: "/economics" },
    ],
  },
  Cybersecurity: {
    dek: "The threats, technologies and decisions protecting the connected economy.",
    lead: { tag: "CYBERSECURITY", title: "Security Has Become a Growth Question", summary: "Companies are moving cybersecurity from a defensive budget line to a condition for trust, speed and scale.", image: TechImg, time: "49 min ago", href: "/cybersecurity" },
    stories: [
      { tag: "RISK", title: "The attack surface is now a supply-chain problem", summary: "Third parties are becoming the most important security conversation.", image: InsightImg, time: "1 hr ago", href: "/cybersecurity" },
      { tag: "POLICY", title: "Regulators are asking for resilience, not reassurance", summary: "The standard is shifting from compliance to continuity.", image: HeroImg, time: "2 hr ago", href: "/cybersecurity" },
      { tag: "AI", title: "The dual-use technology race inside the SOC", summary: "Defenders and attackers are learning the same tools.", image: LeadImg, time: "3 hr ago", href: "/technology" },
    ],
  },
  "Smart Cities": {
    dek: "The infrastructure, mobility and data shaping the future of urban life.",
    lead: { tag: "SMART CITIES", title: "The Next Urban Advantage Will Be Operational", summary: "Cities are moving beyond showcase projects toward the systems that make everyday life work better.", image: LeadImg, time: "54 min ago", href: "/smart-cities" },
    stories: [
      { tag: "MOBILITY", title: "The city is becoming a real-time coordination problem", summary: "Transport, energy and public services are increasingly connected.", image: HeroImg, time: "1 hr ago", href: "/smart-cities" },
      { tag: "INFRASTRUCTURE", title: "Why maintenance is the new innovation", summary: "Reliability is a technology story too.", image: InsightImg, time: "2 hr ago", href: "/smart-cities" },
      { tag: "CLIMATE", title: "The urban projects built for the next heat wave", summary: "Adaptation is becoming visible in the city budget.", image: Ln3Img, time: "4 hr ago", href: "/energy" },
    ],
  },
  "Supply Chain": {
    dek: "The logistics, procurement and trade routes behind the products people depend on.",
    lead: { tag: "SUPPLY CHAIN", title: "Resilience Has Become the New Definition of Efficiency", summary: "Companies are redesigning networks around visibility, optionality and the cost of being surprised.", image: HeroImg, time: "41 min ago", href: "/supply-chain" },
    stories: [
      { tag: "LOGISTICS", title: "The last mile is now a data problem", summary: "Routing intelligence is changing the economics of delivery.", image: InsightImg, time: "1 hr ago", href: "/supply-chain" },
      { tag: "TRADE", title: "What companies are learning from rerouted cargo", summary: "Flexibility has a price — and a payoff.", image: LeadImg, time: "2 hr ago", href: "/international-news" },
      { tag: "OPERATIONS", title: "The inventory reset reaches the factory floor", summary: "Buffers are back, but so is the pressure to move faster.", image: Ln3Img, time: "3 hr ago", href: "/manufacturing" },
    ],
  },
  Featured: {
    dek: "The stories worth slowing down for — reported, edited and built to last beyond the news cycle.",
    lead: { tag: "FEATURED", title: "The Businesses Building Through the Noise", summary: "A collection of ambitious people and companies making durable choices in a volatile year.", image: LeadImg, time: "Today", href: "/featured" },
    stories: [
      { tag: "PROFILE", title: "The operators behind the next wave", summary: "The details that separate a story from a slogan.", image: HeroImg, time: "Today", href: "/featured" },
      { tag: "FIELD NOTE", title: "What the factory floor can teach the boardroom", summary: "Execution is where strategy becomes visible.", image: InsightImg, time: "Yesterday", href: "/manufacturing" },
      { tag: "LONG READ", title: "The new geography of ambition", summary: "A closer look at where the next opportunities are forming.", image: Ln3Img, time: "Yesterday", href: "/world" },
    ],
  },
  "Breaking News": {
    dek: "The latest developments, updated with context as the story moves.",
    lead: { tag: "BREAKING NEWS", title: "What Happened Today — and Why It Matters Next", summary: "The essential update, the first verified signals and the questions still open.", image: HeroImg, time: "Live", href: "/breaking-news" },
    stories: [
      { tag: "LATEST", title: "The market reaction in three charts", summary: "What changed first, and what the next move may depend on.", image: InsightImg, time: "12 min ago", href: "/markets" },
      { tag: "CONTEXT", title: "The background behind the headline", summary: "A fast read on the forces already in motion.", image: LeadImg, time: "24 min ago", href: "/economics" },
      { tag: "EXPLAINER", title: "What to watch from here", summary: "The signals that could change the story.", image: Ln3Img, time: "38 min ago", href: "/world" },
    ],
  },
  "Cover Stories": {
    dek: "The people and ideas at the centre of the month’s biggest conversations.",
    lead: { tag: "COVER STORY", title: "The Builders of the Next India", summary: "Across industry, technology and culture, a new generation is turning scale into influence.", image: LeadImg, time: "This month", href: "/cover-stories" },
    stories: [
      { tag: "PROFILE", title: "The founder with a longer horizon", summary: "An intimate look at the work behind the ambition.", image: HeroImg, time: "This month", href: "/cover-stories" },
      { tag: "IDEAS", title: "The systems that will define the decade", summary: "Infrastructure, intelligence and trust are converging.", image: InsightImg, time: "This month", href: "/innovation" },
      { tag: "CULTURE", title: "What success looks like after scale", summary: "The personal choices inside public achievement.", image: Ln3Img, time: "This month", href: "/leadership" },
    ],
  },
  "CEO Spotlight": {
    dek: "Conversations with the leaders setting the pace for business, technology and society.",
    lead: { tag: "CEO SPOTLIGHT", title: "The Leaders Designing for a More Uncertain World", summary: "What the people at the top are changing in the operating model — and what they are keeping.", image: LeadImg, time: "Today", href: "/ceospotlight" },
    stories: [
      { tag: "CONVERSATION", title: "The case for building before the market asks", summary: "A leader on patience, pressure and product.", image: HeroImg, time: "Today", href: "/ceospotlight" },
      { tag: "STRATEGY", title: "Why optionality beats prediction", summary: "The decisions that keep a company ready.", image: InsightImg, time: "Yesterday", href: "/leadership" },
      { tag: "PEOPLE", title: "Culture as a competitive operating system", summary: "The habits that turn vision into movement.", image: Ln3Img, time: "Yesterday", href: "/ceospotlight" },
    ],
  },
  Billionaires: {
    dek: "The wealth, influence and decisions shaping the people at the top of the global economy.",
    lead: { tag: "WEALTH", title: "The New Billionaire Playbook Is About Influence, Not Just Ownership", summary: "Capital is moving into infrastructure, intelligence and the institutions that shape what comes next.", image: HeroImg, time: "45 min ago", href: "/billionaires" },
    stories: [
      { tag: "WEALTH", title: "Where the next fortunes are being built", summary: "The sectors attracting patient capital and public attention.", image: InsightImg, time: "1 hr ago", href: "/billionaires" },
      { tag: "PHILANTHROPY", title: "Giving is becoming a strategy question", summary: "Impact, identity and accountability now travel together.", image: LeadImg, time: "2 hr ago", href: "/billionaires" },
      { tag: "POWER", title: "The networks behind the headline names", summary: "Influence is often a group project.", image: Ln3Img, time: "3 hr ago", href: "/world" },
    ],
  },
};

function SectionRule({ children }: { children: string }) {
  return (
    <div className="pt-editorial-rule">
      <span className="pt-editorial-rule-dot" />
      <h2>{children}</h2>
      <div className="pt-editorial-rule-line" />
      <Link to="/featured">View all <ArrowRight size={13} /></Link>
    </div>
  );
}

function StoryMeta({ time }: { time: string }) {
  return <span className="pt-editorial-meta"><Clock3 size={12} /> {time}</span>;
}

export function EditorialDeskPage({ section }: { section: EditorialSection }) {
  const content = sectionContent[section];
  const lead = content.lead;

  return (
    <div className="pt-editorial-page">
      <main className="pt-container pt-editorial-shell">
        <header className="pt-editorial-heading">
          <div>
            <span className="pt-editorial-kicker">The Pride Times / News Desk</span>
            <h1>{section}</h1>
          </div>
          <p>{content.dek}</p>
        </header>

        <section className="pt-editorial-lead-grid" aria-label={`${section} top stories`}>
          <Link to={lead.href} className="pt-editorial-lead-card group">
            <ImageWithFallback src={lead.image} alt={lead.title} className="pt-editorial-lead-image" />
            <div className="pt-editorial-lead-shade" />
            <div className="pt-editorial-lead-copy">
              <span className="pt-editorial-tag">{lead.tag}</span>
              <h2>{lead.title}</h2>
              <p>{lead.summary}</p>
              <div className="pt-editorial-lead-footer"><StoryMeta time={lead.time} /><span className="pt-editorial-read">Read story <ArrowUpRight size={14} /></span></div>
            </div>
          </Link>
          <aside className="pt-editorial-latest">
            <SectionRule>Latest</SectionRule>
            <div className="pt-editorial-latest-list">
              {content.stories.map((story, index) => (
                <Link to={story.href} key={story.title} className="pt-editorial-latest-item group">
                  <span className="pt-editorial-index">0{index + 1}</span>
                  <div><span className="pt-editorial-tag">{story.tag}</span><h3>{story.title}</h3><StoryMeta time={story.time} /></div>
                </Link>
              ))}
            </div>
          </aside>
        </section>

        <section className="pt-editorial-section">
          <SectionRule>More from {section}</SectionRule>
          <div className="pt-editorial-card-grid">
            {content.stories.map((story) => (
              <Link to={story.href} key={`card-${story.title}`} className="pt-editorial-story-card group">
                <div className="pt-editorial-card-image-wrap"><ImageWithFallback src={story.image} alt={story.title} className="pt-editorial-card-image" /><span className="pt-editorial-card-arrow"><ArrowUpRight size={16} /></span></div>
                <div className="pt-editorial-card-copy"><span className="pt-editorial-tag">{story.tag}</span><h3>{story.title}</h3><p>{story.summary}</p><StoryMeta time={story.time} /></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pt-editorial-signal-grid">
          <div className="pt-editorial-signal-card">
            <div className="pt-editorial-signal-head"><span>Market signal</span><TrendingUp size={16} /></div>
            <strong>Context over noise.</strong>
            <p>Every story is built to answer the question behind the headline: what changes next?</p>
            <Link to="/economics">Explore Economics <ArrowRight size={13} /></Link>
          </div>
          <div className="pt-editorial-signal-card pt-editorial-signal-dark">
            <div className="pt-editorial-signal-head"><span>Watch / Listen</span><Play size={15} /></div>
            <strong>Go deeper with the desk.</strong>
            <p>Short explainers, interviews and visual stories from across The Pride Times.</p>
            <Link to="/magazine">Open Magazine <ArrowRight size={13} /></Link>
          </div>
        </section>
      </main>
    </div>
  );
}
