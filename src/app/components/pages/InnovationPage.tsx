import { Clock, Lightbulb, Rocket, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "INNOVATION OF THE YEAR",
  title: "Solid-State Batteries Cross the Commercialization Threshold — Toyota's QuantumBattery Changes Everything",
  excerpt: "After decades of laboratory promise, Toyota's solid-state QuantumBattery enters mass production: 800-mile EV range, 8-minute fast charge, 20-year lifespan, and 40% lower cost than lithium-ion. The technology will reshape energy storage, electric vehicles, and grid infrastructure simultaneously.",
  author: "Sagar Kumar",
  time: "4 hours ago",
  image: "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

const innovationAwards = [
  { rank: 1, category: "Energy Storage", innovation: "Toyota QuantumBattery", company: "Toyota Motor Corp", impact: "Transforms EV economics globally" },
  { rank: 2, category: "AI / Computing", innovation: "NVIDIA Blackwell Ultra GPU", company: "NVIDIA", impact: "40x speed gain for LLM training" },
  { rank: 3, category: "Biotechnology", innovation: "mRNA Universal Cancer Vaccine", company: "BioNTech / Moderna", impact: "94% efficacy across 6 cancer types" },
  { rank: 4, category: "Space Tech", innovation: "Starship Full Reusability", company: "SpaceX", impact: "Reduces launch cost 100x" },
  { rank: 5, category: "Agriculture", innovation: "Precision Fermentation Protein", company: "Impossible Foods", impact: "Eliminates 90% of land use for protein" },
];

const startupWatch = [
  { name: "Isomorphic Labs", focus: "AI Drug Discovery", funding: "$600M Series B", stage: "Growth", country: "UK" },
  { name: "Commonwealth Fusion", focus: "Compact Fusion Energy", funding: "$1.8B raised", stage: "Pre-revenue", country: "USA" },
  { name: "Orbital Composites", focus: "In-Space Manufacturing", funding: "$120M Series A", stage: "Early", country: "USA" },
  { name: "Syngenta Digital", focus: "AI Precision Agriculture", funding: "$350M", stage: "Growth", country: "Switzerland" },
  { name: "Niramai", focus: "AI Breast Cancer Screening", funding: "$45M", stage: "Early", country: "India" },
];

const researchBreakthroughs = [
  { id: 1, institution: "MIT", title: "Room-Temperature Superconductor Verified in Independent Tests — Nobel Prize Likely", time: "2 hrs ago" },
  { id: 2, institution: "Stanford", title: "AI Model Predicts Climate Change Tipping Points 10 Years in Advance with 87% Accuracy", time: "4 hrs ago" },
  { id: 3, institution: "IISc Bangalore", title: "Indian Researchers Develop World's Most Efficient Solar Cell at 47.1% Efficiency", time: "6 hrs ago" },
  { id: 4, institution: "Oxford", title: "Quantum Computer Solves 50-Year-Old Protein Folding Problem in 3 Seconds", time: "8 hrs ago" },
];

const techTrends = [
  { trend: "Agentic AI", desc: "AI systems that plan, execute, and self-correct across complex multi-step workflows", growth: "+340% YoY adoption" },
  { trend: "Spatial Computing", desc: "Merging physical and digital worlds through AR/VR/MR platforms", growth: "+127% YoY adoption" },
  { trend: "Synthetic Biology", desc: "Programming living organisms for medicine, materials, and food production", growth: "+89% YoY funding" },
  { trend: "Neuromorphic Chips", desc: "Brain-inspired computing that delivers AI at 1000x lower power consumption", growth: "+210% YoY research" },
];

export function InnovationPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Lightbulb size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Future Intelligence</span>
          <h1 className="mt-0.5">Innovation & Emerging Technology</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero.image} alt={hero.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
          <h1 className="mt-2 leading-tight">{hero.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>

        {/* Emerging trends */}
        <div>
          <SH title="Emerging Tech Trends" />
          <div className="flex flex-col gap-3">
            {techTrends.map((t) => (
              <div key={t.trend} className="border border-gray-200 rounded p-3 hover:shadow-md transition-shadow cursor-pointer">
                <p className="text-sm">{t.trend}</p>
                <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                <p className="text-xs text-green-600 mt-1">{t.growth}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Innovation awards */}
      <div className="mb-8">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <h2 className="uppercase tracking-wider">Pride Times Innovation Awards 2026</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider w-8">#</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider">Innovation</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden lg:table-cell">Company</th>
                <th className="text-left py-2 text-xs text-gray-500 font-normal uppercase tracking-wider hidden sm:table-cell">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {innovationAwards.map((a) => (
                <tr key={a.rank} className="hover:bg-gray-50 transition-colors group cursor-pointer">
                  <td className="py-2.5 text-gray-400 text-xs">{a.rank}</td>
                  <td className="py-2.5 group-hover:text-red-600 transition-colors">{a.innovation}</td>
                  <td className="py-2.5 text-gray-500 text-xs hidden md:table-cell">{a.category}</td>
                  <td className="py-2.5 text-gray-500 text-xs hidden lg:table-cell">{a.company}</td>
                  <td className="py-2.5 text-xs text-gray-600 hidden sm:table-cell">{a.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Startup watch */}
        <div>
          <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
            <Rocket size={14} />
            <h2 className="uppercase tracking-wider">Startup Watch</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {startupWatch.map((s) => (
              <div key={s.name} className="py-2.5 group cursor-pointer">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm">{s.name}</p>
                    <p className="text-xs text-gray-500">{s.focus} · {s.country}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-green-600">{s.funding}</p>
                    <p className="text-xs text-gray-400">{s.stage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research breakthroughs */}
        <div>
          <SH title="Research Breakthroughs" />
          <div className="divide-y divide-gray-100">
            {researchBreakthroughs.map((r) => (
              <div key={r.id} className="py-2.5 group cursor-pointer">
                <span className="text-xs text-red-600 uppercase tracking-wider">{r.institution}</span>
                <p className="text-sm group-hover:text-red-600 transition-colors mt-0.5">{r.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
