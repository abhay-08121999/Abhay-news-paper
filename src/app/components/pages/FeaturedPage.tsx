import { Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const featured = [
  { id: 1, category: "COVER STORY", title: "The AI Economy: How Artificial Intelligence is Reshaping Global GDP and Rewriting the Rules of Competitive Advantage", excerpt: "From Silicon Valley to Shenzhen, every sector is being transformed by AI. Pride Times investigates the winners, the losers, and the trillion-dollar stakes.", author: "Sagar Kumar", time: "Today", image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=800&h=500&fit=crop", path: "/technology" },
  { id: 2, category: "DEEP DIVE", title: "India's $5 Trillion Dream: Can the World's Fastest-Growing Economy Sustain Its Momentum Through 2030?", excerpt: "Prime Minister Modi's economic ambition is unprecedented. Pride Times examines the infrastructure gap, the talent pipeline, and the geopolitical tailwinds and headwinds.", author: "Sagar Kumar", time: "Yesterday", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?w=800&h=500&fit=crop", path: "/finance" },
  { id: 3, category: "INVESTIGATION", title: "The Cybersecurity Crisis Hidden in Plain Sight: How Nation-State Hackers Are Penetrating the World's Critical Infrastructure", excerpt: "A 14-month investigation reveals that power grids, water systems, and financial networks in 40+ countries have been silently compromised by state-sponsored actors.", author: "Sagar Kumar", time: "2 days ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?w=800&h=500&fit=crop", path: "/cybersecurity" },
];

const editorPicks = [
  { id: 1, category: "LEADERSHIP", title: "How Satya Nadella Transformed Microsoft from 'Dying Giant' to World's Most Valuable AI Company", time: "3 days ago", path: "/leadership" },
  { id: 2, category: "ENERGY", title: "The Solar Revolution: How One Technology Disrupted the Energy Sector Faster Than Any Technology in History", time: "4 days ago", path: "/energy" },
  { id: 3, category: "BILLIONAIRES", title: "Inside the Mind of Elon Musk: What Drives the World's Richest Man and Most Consequential CEO", time: "5 days ago", path: "/billionaires" },
  { id: 4, category: "HEALTHCARE", title: "The End of Disease? How mRNA Technology is Opening the Door to Universal Cancer Vaccines by 2030", time: "6 days ago", path: "/healthcare" },
  { id: 5, category: "SMART CITIES", title: "The City of the Future Is Already Here — If You Know Where to Look", time: "1 week ago", path: "/smart-cities" },
];

export function FeaturedPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Star size={22} className="text-yellow-500" />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Editor's Selection</span>
          <h1 className="mt-0.5">Featured Stories</h1>
        </div>
      </div>

      <div className="flex flex-col gap-8 mb-8">
        {featured.map((s, idx) => (
          <Link key={s.id} to={s.path} className={`group grid grid-cols-1 ${idx === 0 ? "" : "md:grid-cols-2"} gap-5`}>
            <div className="overflow-hidden rounded">
              <ImageWithFallback src={s.image} alt={s.title} className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${idx === 0 ? "h-72 md:h-96" : "h-48"}`} />
            </div>
            <div className={idx === 0 ? "md:col-span-1" : ""}>
              <span className="text-xs text-red-600 uppercase tracking-wider">{s.category}</span>
              <h2 className="mt-2 leading-snug group-hover:text-red-600 transition-colors">{s.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{s.excerpt}</p>
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                <span>By {s.author}</span>
                <span className="flex items-center gap-1"><Clock size={10} />{s.time}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <SH title="Editor's Picks" />
      <div className="divide-y divide-gray-100">
        {editorPicks.map((p) => (
          <Link key={p.id} to={p.path} className="flex items-center justify-between py-3 group">
            <div>
              <span className="text-xs text-red-600 uppercase tracking-wider">{p.category}</span>
              <p className="text-sm group-hover:text-red-600 transition-colors mt-0.5">{p.title}</p>
            </div>
            <span className="text-xs text-gray-400 flex-shrink-0 ml-4 flex items-center gap-1"><Clock size={10} />{p.time}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
