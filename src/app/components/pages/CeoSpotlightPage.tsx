
import { Clock, Users, Award, Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";
import CeospotImg from "../../../imports/Ceospot.png";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "CEO Spotlight",
  title: "Tilman Fertitta: Building America's Largest Integrated Entertainment Empire  ",
  excerpt:"Few executives have demonstrated the appetite for bold, large-scale deal-making that characterizes Tilman Fertitta's approach to business in 2026. The chairman and CEO of Fertitta Entertainment, whose holdings already include the Golden Nugget casino brand and the Houston Rockets, has staked a $17.6 billion claim on Caesars Entertainment — a move that would transform him into the undisputed titan of American gaming and hospitality.Fertitta's strategy reflects a conviction that integrated entertainment — combining casino gaming, luxury hotels, fine dining, sports, and live entertainment — represents the most defensible and scalable model in the leisure economy. Analysts tracking the deal note that Fertitta's operating track record gives him credibility with both regulators and capital markets in executing complex integration programs.  ",
  author: "Sagar Kumar",
  time: "May 2026",
  image: CeospotImg,
};

const ceoInterviews = [
  {
    id: 1,
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    company: "Microsoft",
    quote: "The next decade will be defined by how organizations use AI to augment human capability. Every tool we build is a collaboration engine.",
    topic: "AI Strategy & the Future of Work",
    duration: "35 min read",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Indra Nooyi",
    title: "Former CEO, PepsiCo / Board Director",
    company: "PepsiCo",
    quote: "Sustainable business is not charity. The companies that will win in the next 20 years are those that embed purpose into their P&L.",
    topic: "Sustainable Leadership & Stakeholder Capitalism",
    duration: "28 min read",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Jensen Huang",
    title: "CEO, NVIDIA",
    company: "NVIDIA",
    quote: "We are not a chip company. We are the engine of the AI industrial revolution. The opportunity is larger than the internet, cloud, and mobile combined.",
    topic: "NVIDIA's AI Supremacy & the Chip Wars",
    duration: "42 min read",
    image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=400&h=300&fit=crop",
  },
];

const womenLeaders = [
  { name: "Mary Barra", title: "CEO, General Motors", achievement: "Led GM's transformation to world's #3 EV maker", rank: 1 },
  { name: "Jane Fraser", title: "CEO, Citigroup", achievement: "Completed landmark $20B organizational transformation", rank: 2 },
  { name: "Gita Gopinath", title: "First Deputy MD, IMF", achievement: "Architect of IMF's post-pandemic recovery strategy", rank: 3 },
  { name: "Sunita Williams", title: "NASA Astronaut / Engineer", achievement: "Led India-US Space Cooperation Framework", rank: 4 },
  { name: "Nirmala Sitharaman", title: "Finance Minister, India", achievement: "Delivered India's largest infrastructure budget at ₹11.1T", rank: 5 },
];

const leadershipOpinions = [
  { id: 1, author: "Sagar Kumar", title: "On AI and Investing: Why I Still Trust Human Judgment Over Algorithms", time: "1 day ago" },
  { id: 2, author: "Sagar Kumar", title: "The Debt Cycle Is Approaching Its Peak — And Leaders Must Prepare Now", time: "2 days ago" },
  { id: 3, author: "Sagar Kumar", title: "Why AGI Will Arrive Before 2030 — And Why That's Not Something to Fear", time: "3 days ago" },
  { id: 4, author: "Sagar Kumar", title: "India's Moment Has Arrived — The Next 25 Years Belong to Us", time: "4 days ago" },
];

const executiveMoves = [
  { id: 1, person: "Bob Iger", move: "Returns as Disney CEO for third term after activist investor pressure", time: "3 hrs ago" },
  { id: 2, person: "Christine Lagarde", move: "ECB President announces departure — 3 candidates shortlisted for successor", time: "5 hrs ago" },
  { id: 3, person: "Shantanu Narayen", move: "Adobe CEO receives $42M pay package after record year", time: "7 hrs ago" },
  { id: 4, person: "Arvind Krishna", move: "IBM CEO announces strategic review of $60B consulting division", time: "9 hrs ago" },
  { id: 5, person: "Brian Chesky", move: "Airbnb CEO launches $1B share buyback, hints at hospitality expansion", time: "11 hrs ago" },
];

const pt30Features = [
  { rank: 1, name: "Jensen Huang ", insight: "Defining the AI infrastructure era at COMPUTEX 2026. " },
  { rank: 2, name: "Satya Nadella", insight: "Leading ethical AI adoption and enterprise digital transformation. " },
  { rank: 3, name: "Sundar Pichai ", insight: "Driving AI integration across search, cloud, and automotive tech. " },
];

export function CeoSpotlightPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Users size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Executive Intelligence</span>
          <h1 className="mt-0.5">CEO Spotlight</h1>
        </div>
      </div>

       {/* Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
              <div className="lg:col-span-2">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded mb-4">
        <ImageWithFallback
          src={hero.image}
          alt={hero.title}
          className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent " />
      </div>
                  <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
                  <h1 className="mt-2 leading-tight">{hero.title}</h1>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed ">{hero.excerpt}</p>
                  </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>By {hero.author}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {hero.time}</span>
                  </div>
                </div>

      {/* CEO interviews */}
      <div className="mb-8">
        <SH title="Exclusive CEO Interviews" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ceoInterviews.map((c) => (
            <div key={c.id} className="group cursor-pointer border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
              <div className="overflow-hidden">
                <ImageWithFallback src={c.image} alt={c.name} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="text-xs text-red-600 uppercase tracking-wider">{c.topic}</p>
                <h3 className="mt-1 leading-snug">{c.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{c.title}</p>
                <blockquote className="text-xs text-gray-600 italic border-l-2 border-red-600 pl-2 line-clamp-3">
                  "{c.quote}"
                </blockquote>
                <button className="mt-3 text-xs text-red-600 flex items-center gap-1 hover:underline">
                  Read Full Interview <ChevronRight size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PT30 Leadership Insights */}
      <div className="mb-8 bg-black text-white rounded p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award size={16} className="text-yellow-400" />
          <h2 className="text-sm uppercase tracking-wider text-yellow-400">Pride Times 30 — Leadership Profiles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pt30Features.map((p) => (
            <div key={p.rank} className="border border-gray-700 rounded p-4">
              <span className="text-xs text-gray-500">#{p.rank} PT30</span>
              <h3 className="text-white mt-1">{p.name}</h3>
              <p className="text-gray-400 text-xs mt-1">{p.insight}</p>
              <button className="mt-3 text-xs text-yellow-400 hover:underline flex items-center gap-1">
                Full Profile <ChevronRight size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <SponsoredArticleCard
        headline="McKinsey: The Leadership Capabilities That Separate High-Performing CEOs from the Rest"
        excerpt="Our analysis of 2,500 CEOs across 70 countries identifies six capabilities that consistently distinguish leaders who deliver above-average shareholder returns over 10+ year tenures."
        advertiser="McKinsey & Company"
        category="SPONSORED · LEADERSHIP"
        readTime={9}
        image="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&h=400&fit=crop"
        link="#"
        disclosureText="Paid content by McKinsey & Company. Does not reflect editorial opinion."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
        {/* Women in Leadership */}
        <div>
          <SH title="Women in Leadership" />
          <div className="flex flex-col gap-3">
            {womenLeaders.map((w) => (
              <div key={w.rank} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-xs text-gray-400 w-4 flex-shrink-0">{w.rank}</span>
                <div>
                  <p className="text-sm">{w.name}</p>
                  <p className="text-xs text-gray-500">{w.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{w.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opinions */}
        <div>
          <SH title="Leadership Opinion" />
          <div className="divide-y divide-gray-100">
            {leadershipOpinions.map((o) => (
              <div key={o.id} className="py-2.5 group cursor-pointer">
                <p className="text-xs text-gray-500 uppercase tracking-wider">{o.author}</p>
                <p className="text-sm group-hover:text-red-600 transition-colors mt-0.5">{o.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{o.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive moves */}
        <div>
          <SH title="Executive Moves" />
          <div className="divide-y divide-gray-100">
            {executiveMoves.map((m) => (
              <div key={m.id} className="py-2.5 group cursor-pointer">
                <p className="text-xs text-gray-700 uppercase tracking-wider">{m.person}</p>
                <p className="text-sm group-hover:text-red-600 transition-colors mt-0.5">{m.move}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{m.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

