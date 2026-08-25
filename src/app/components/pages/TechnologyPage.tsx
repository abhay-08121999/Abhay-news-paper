import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, ChevronRight, ArrowRight, Shield, Cpu, Zap, Heart, Factory, Building2, Truck } from "lucide-react";
import HeroImg from "../../../imports/heroimage.png";
import Hero1Img from "../../../imports/Techheroimage.png";
import Hero2Img from "../../../imports/hero1image.png";

/* ------------------------------------------------------------------ */
/*  Shared bits — styled to read like a wire-service tech section:    */
/*  hairline rules, small-caps eyebrows, tight leading, red accent.   */
/* ------------------------------------------------------------------ */

function SectionHeader({ title, link }: { title: string; link?: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-5">
      <h2 className="text-base font-bold uppercase tracking-wide">{title}</h2>
      {link && (
        <a href={link} className="text-xs font-semibold text-red-600 hover:underline flex items-center gap-1">
          See All <ChevronRight size={12} />
        </a>
      )}
    </div>
  );
}

function SmallStoryList({ stories }: { stories: Array<{ id: number; title: string; time: string }> }) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {stories.map((s) => (
        <div key={s.id} className="py-3 group cursor-pointer flex items-start gap-3">
          <span className="text-[11px] text-gray-400 uppercase tracking-wide whitespace-nowrap pt-0.5 w-16 shrink-0">
            {s.time}
          </span>
          <p className="text-sm leading-snug group-hover:text-red-600 transition-colors">{s.title}</p>
        </div>
      ))}
    </div>
  );
}

/* Uniform card used for the 4-across "wire" grids (Explainers / AI / etc.) */
function StoryCard({ image, title, excerpt, time }: { image: string; title: string; excerpt?: string; time: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-2.5 aspect-[4/3]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-sm font-bold leading-snug group-hover:text-red-600 transition-colors">{title}</h3>
      {excerpt && <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">{excerpt}</p>}
      <span className="text-[11px] text-gray-400 flex items-center gap-1 mt-2">
        <Clock size={10} /> {time}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Content (unchanged)                                               */
/* ------------------------------------------------------------------ */

const techHero = {
  category: "ARTIFICIAL INTELLIGENCE",
  title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push  ",
  excerpt:"Nvidia has announced an ambitious collaboration with humanoid robot manufacturers across the United States, Europe, and South Korea, expanding its already well-established relationship with China's Unitree. The chipmaker's shares climbed approximately 6% during the June 1 session, bringing its year-to-date gains to roughly 20%. The move signals Nvidia's determined pivot from GPU sales to powering the physical AI economy — a strategy that positions the company at the intersection of software, semiconductors, and robotics manufacturing.Chief Executive Jensen Huang described the initiative as central to Nvidia's next decade of growth, noting that intelligent robots require the same kind of dense compute that large language models demand, but with the added requirement of real-time sensor processing and sub-millisecond decision loops. The company's Isaac robotics platform, combined with its Blackwell GPU architecture, is expected to serve as the backbone for humanoid factories from Seoul to Stuttgart. ",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: HeroImg,
};

const techHero1 = {
  category: "ARTIFICIAL INTELLIGENCE",
  title: "Intel Attempts Inference-Chip Comeback as AI Compute Wars Intensify ",
  excerpt:"Intel has unveiled a renewed push into the inference accelerator market, positioning its next-generation Gaudi chips as a cost-effective alternative for enterprises deploying large-scale AI models at inference time. Analysts remain cautious about Intel's ability to reclaim lost ground from Nvidia, but note that the inference segment — distinct from the training market dominated by Nvidia's H100 and Blackwell lines — offers a viable path for differentiation.The inference chip market is projected to grow substantially as corporations move beyond pilot AI programs into full-scale production deployment. Industry figures suggest that by 2027, inference workloads will represent over 60% of all AI compute spend, making it the largest single growth lever in the semiconductor space.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Hero1Img,
};
const techHero2 = {
  category: "ARTIFICIAL INTELLIGENCE",
  title: "SoftBank Bets Big on European Data Centers  ",
  excerpt:"Japan's SoftBank Group has committed to a massive European data center investment, aligning its capital with the continent's growing appetite for AI compute infrastructure. The initiative forms part of SoftBank's broader strategy to build an end-to-end AI stack that encompasses hardware, connectivity, and application layers across key markets.The move follows SoftBank's landmark agreement to acquire a strategic interest in a leading data center operator in the first half of 2026. European Union officials have welcomed the investment, though regulators in Brussels are reviewing data sovereignty implications as American and Japanese hyperscalers expand their European footprint. ",
  author: "Sagar Kumar",
  time: "30 May 2026",
  image: Hero2Img,
};
const techCategories = [
  { icon: Cpu, label: "AI & Machine Learning", color: "bg-blue-50 text-blue-700" },
  { icon: Shield, label: "Cybersecurity", color: "bg-red-50 text-red-700" },
  { icon: Zap, label: "Energy Tech", color: "bg-yellow-50 text-yellow-700" },
  { icon: Heart, label: "HealthTech", color: "bg-green-50 text-green-700" },
  { icon: Factory, label: "Manufacturing", color: "bg-orange-50 text-orange-700" },
  { icon: Building2, label: "Smart Cities", color: "bg-purple-50 text-purple-700" },
  { icon: Truck, label: "Supply Chain", color: "bg-teal-50 text-teal-700" },
];

const aiStories = [
  {
    id: 5,
    title: "SpaceX prices IPO at $135 per share, raising $75B at a $1.77T valuation in the largest IPO ever.",
    excerpt: "The share listing positions SpaceX among the world’s five largest companies while underscoring investor appetite for AI infrastructure and space-tech capital.",
    time: "Just now",
    image: "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "SpaceX agrees to acquire AI coding startup Cursor for $60B, folding the asset into xAI.",
    excerpt: "The all-stock deal is expected to close in Q3 2026 and signals a major move into coding agents for the company riding its record IPO.",
    time: "Just now",
    image: "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "Anthropic surpasses OpenAI with a $30B run rate and prepares a confidential IPO filing.",
    excerpt: "Industry trackers say enterprise API and agentic product usage have driven the company’s revenue to new heights.",
    time: "Just now",
    image: "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "Nvidia unveils the RTX Spark Superchip at Computex, pairing Blackwell RTX graphics with Grace CPU for AI PCs.",
    excerpt: "The new chip is designed to bring data-center-caliber AI power to desktops and workstations, expanding Nvidia’s full-stack grip.",
    time: "Just now",
    image: "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 1,
    title: "NVIDIA's Blackwell Ultra GPU Delivers 40x Speed Boost for LLM Training",
    excerpt: "The new architecture fundamentally changes what's possible in real-time AI inference at scale.",
    time: "2 hrs ago",
    image: "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZpZW50JTIwdGVjaG5vbG9neSUyMGluZm92YXRpb24lMjBkaWdpdGFsJTIwZnV0dXJlfGVufDF8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Google DeepMind Achieves Breakthrough in Protein Structure Prediction for Drug Discovery",
    excerpt: "AlphaFold 4 identifies drug candidates for diseases that have resisted treatment for decades.",
    time: "4 hrs ago",
    image: "https://images.unsplash.com/photo-1769839271832-cfd7a1f6854f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Microsoft's AI-Powered Copilot Now Manages 60% of Enterprise Software Workflows",
    excerpt: "Productivity data from 500 Fortune companies reveals dramatic efficiency improvements.",
    time: "6 hrs ago",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNwbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const cyberStories = [
  { id: 5, title: "Florida sues OpenAI and Sam Altman, alleging ChatGPT caused harm as regulators warn growth is being prioritized over safety.", time: "Just now" },
  { id: 6, title: "White House pressure reportedly pulled back Anthropic's most capable models amid concerns over high-risk AI systems.", time: "Just now" },
  { id: 1, title: "Zero-Day Exploit Threatens 2 Billion Android Devices Globally", time: "3 hrs ago" },
  { id: 2, title: "US CISA Issues Emergency Directive After Critical Infrastructure Breach", time: "5 hrs ago" },
  { id: 3, title: "Quantum Encryption Startup Raises $400M Series C to Secure Financial Networks", time: "7 hrs ago" },
  { id: 4, title: "Ransomware Attacks Hit Record High in Q1 2026, Costing Enterprises $12B", time: "9 hrs ago" },
];

const energyStories = [
  { id: 4, title: "Ohio suspends a major data-center tax incentive after AI infrastructure costs surge, deepening grid and community pushback.", time: "Just now" },
  { id: 5, title: "Analysts say 30-50% of planned U.S. AI data centers may miss 2026 timelines or be canceled over transformer shortages, grid delays, and local opposition.", time: "Just now" },
  { id: 1, title: "Global Solar Capacity Crosses 5 Terawatts — a Historic Milestone for Clean Energy", time: "2 hrs ago" },
  { id: 2, title: "Hydrogen Fuel Cell Trucks Begin Commercial Operations on Trans-European Routes", time: "4 hrs ago" },
  { id: 3, title: "Saudi Arabia's NEOM Project Reveals 100% Renewable Powered Megacity Grid", time: "6 hrs ago" },
];

const healthcareStories = [
  { id: 1, title: "CRISPR Gene Editing Achieves 98% Success Rate in Clinical Trials for Sickle Cell Disease", time: "1 hr ago" },
  { id: 2, title: "AI Diagnostics Platform Outperforms Radiologists in Early Cancer Detection Study", time: "3 hrs ago" },
  { id: 3, title: "WHO Declares End to Decade-Long Battle with Antibiotic-Resistant Superbugs", time: "8 hrs ago" },
];

const manufacturingStories = [
  { id: 4, title: "DriveNets raises $410M backed by AMD to expand software-defined networking for AI data centers.", time: "Just now" },
  { id: 1, title: "Tesla's Gigafactory India Begins Production of Next-Gen 4680 Battery Cells", time: "2 hrs ago" },
  { id: 2, title: "3D-Printed Steel Bridges Deploy in Rotterdam, Cutting Construction Costs by 65%", time: "5 hrs ago" },
  { id: 3, title: "South Korea's Hyundai Robotics Ships 50,000 Humanoid Factory Workers Globally", time: "7 hrs ago" },
];

const smartCityStories = [
  { id: 1, title: "Dubai's Digital Twin City Platform Reduces Emergency Response Times by 40%", time: "3 hrs ago" },
  { id: 2, title: "Tokyo Smart Traffic System Eliminates Rush Hour Congestion in Pilot District", time: "6 hrs ago" },
  { id: 3, title: "Copenhagen Becomes First Carbon-Negative Capital City Through Smart Grid Innovations", time: "9 hrs ago" },
];

const supplyChainStories = [
  { id: 1, title: "Manufacturers Rebuild Supply Chains Around Unified Data, AI Scenario Modeling and Supplier Collaboration", time: "Just now" },
  { id: 2, title: "91% of Mid-Market Manufacturers Use Generative AI in Supply-Chain Operations, but Operating Models Lag", time: "15 min ago" },
  { id: 3, title: "Tanker Traffic Through the Strait of Hormuz Jumps After US-Iran Shipping Lane Reopening Deal", time: "1 hr ago" },
  { id: 4, title: "Cargo Volumes Are Normalizing in 2026 After Companies Frontloaded Goods Ahead of New Tariffs", time: "2 hrs ago" },
  { id: 5, title: "Rising Corporate Debt Pushes Companies to Stress-Test Suppliers and Diversify Fragile Logistics Corridors", time: "3 hrs ago" },
  { id: 6, title: "ISG Launches a Study of Service Providers Supporting Manufacturers Through Supply-Chain Restructuring", time: "4 hrs ago" },
];

const innovationFeature = {
  title: "Innovation of the Year: Solid-State Batteries Set to Transform Electric Mobility",
  excerpt: "After decades of promise, solid-state battery technology has finally crossed the threshold of commercial viability. Toyota's new QuantumBattery delivers 800 miles of range, charges in 8 minutes, and lasts 20 years — fundamentally altering the economics of electric vehicles and grid storage alike.",
  author: "Sagar Kumar",
  image: "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function TechnologyPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-6">
      {/* Page title + subnav tabs (Bloomberg-style: title, then a thin row of section tabs) */}
      <div className="mb-6">
        <span className="text-[11px] text-gray-500 uppercase tracking-widest">Coverage</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-0.5 mb-3">Technology</h1>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-b border-gray-200 py-2.5">
          {techCategories.map(({ icon: Icon, label }, i) => (
            <button
              key={label}
              className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-wide transition-colors hover:text-red-600 ${
                i === 0 ? "text-black font-bold" : "text-gray-500"
              }`}
            >
              <Icon size={12} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Hero: main story (2/3) + sidebar rail (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={techHero.image}
                alt={techHero.title}
                className="w-full h-72 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{techHero.category}</span>
            <h1 className="text-2xl lg:text-3xl font-bold mt-2 leading-tight group-hover:text-red-600 transition-colors">
              {techHero.title}
            </h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{techHero.excerpt}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
              <span>By {techHero.author}</span>
              <span className="flex items-center gap-1">
                <Clock size={10} /> {techHero.time}
              </span>
            </div>
          </div>

          {/* Pull quote — styled as a bordered wire-service blockquote */}
          <div className="mt-6 border-l-4 border-black bg-gray-50 p-4">
            <p className="italic text-sm leading-relaxed text-gray-900">
              "The move from model hype to infrastructure reality is now defining
              where the AI industry places its bets — chips, power grids, data
              centers, robotics, satellites, and government access controls."
            </p>
            <p className="mt-2 text-xs font-bold text-gray-900 uppercase tracking-wide">
              — Tech Startups Global Analysis, June 2026
            </p>
          </div>
        </div>

        {/* Sidebar rail */}
        <div className="flex flex-col gap-4">
          <div className="bg-black text-white p-4">
            <span className="text-[11px] text-yellow-400 uppercase tracking-wider font-bold">Innovation of the Year</span>
            <div className="overflow-hidden mt-3 mb-3">
              <ImageWithFallback
                src={innovationFeature.image}
                alt="Innovation Feature"
                className="w-full h-36 object-cover"
              />
            </div>
            <h3 className="text-white text-base font-bold leading-snug">{innovationFeature.title}</h3>
            <p className="text-gray-400 text-xs mt-2 line-clamp-3">{innovationFeature.excerpt}</p>
            <button className="mt-3 text-xs text-yellow-400 font-bold flex items-center gap-1 hover:underline">
              Read Deep Dive <ArrowRight size={12} />
            </button>
          </div>

          {/* Industry statistics — condensed sidebar table */}
          <div className="border border-gray-200">
            <div className="bg-gray-900 text-white text-[11px] uppercase tracking-wider font-bold px-3 py-2">
              Industry Snapshot
            </div>
            <table className="w-full text-xs">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="font-bold p-2.5 w-2/5 align-top">Global IT Spend (2025)</td>
                  <td className="p-2.5 text-gray-600">USD 5.43 Trillion (Gartner / StartUs Insights estimate)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="font-bold p-2.5 align-top">AI Market (Agentic AI by 2034)</td>
                  <td className="p-2.5 text-gray-600">USD 103.28 Billion at 40%+ CAGR</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="font-bold p-2.5 align-top">Cybersecurity Growth Rate</td>
                  <td className="p-2.5 text-gray-600">12.2% annually, toward USD 377B by 2028</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="font-bold p-2.5 align-top">Semiconductor CapEx by 2030</td>
                  <td className="p-2.5 text-gray-600">~USD 1 Trillion in fabrication globally</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="font-bold p-2.5 align-top">IoT Connected Devices (2030)</td>
                  <td className="p-2.5 text-gray-600">Projected 40 Billion devices</td>
                </tr>
                <tr>
                  <td className="font-bold p-2.5 align-top">Tech M&amp;A Megadeals (2025)</td>
                  <td className="p-2.5 text-gray-600">26 deals — highest of any sector (PwC)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Secondary features: two headline stories side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-3">
            <ImageWithFallback
              src={techHero1.image}
              alt={techHero1.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{techHero1.category}</span>
          <h2 className="text-xl font-bold mt-2 leading-tight group-hover:text-red-600 transition-colors">
            {techHero1.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{techHero1.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <span>By {techHero1.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={10} /> {techHero1.time}
            </span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="overflow-hidden mb-3">
            <ImageWithFallback
              src={techHero2.image}
              alt={techHero2.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{techHero2.category}</span>
          <h2 className="text-xl font-bold mt-2 leading-tight group-hover:text-red-600 transition-colors">
            {techHero2.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{techHero2.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <span>By {techHero2.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={10} /> {techHero2.time}
            </span>
          </div>
        </div>
      </div>

      {/* AI & Machine Learning — 4-across wire grid */}
      <div className="mb-10" id="innovation">
        <SectionHeader title="AI & Machine Learning" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {aiStories.map((s) => (
            <StoryCard key={s.id} image={s.image} title={s.title} excerpt={s.excerpt} time={s.time} />
          ))}
        </div>
      </div>

      {/* Cybersecurity + Energy — hairline list columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
        <div id="cybersecurity">
          <SectionHeader title="Cybersecurity" />
          <SmallStoryList stories={cyberStories} />
        </div>
        <div id="energy">
          <SectionHeader title="Energy Technology" />
          <SmallStoryList stories={energyStories} />
        </div>
      </div>

      {/* Healthcare */}
      <div className="mb-10" id="healthcare">
        <SectionHeader title="Healthcare & BioTech" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766315746079-215ff5115e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBob3NwaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc5Mzg1OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthcare"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-bold leading-snug group-hover:text-red-600 transition-colors">
              {healthcareStories[0].title}
            </h3>
          </div>
          <div>
            <SmallStoryList stories={healthcareStories.slice(1)} />
            <div className="mt-4 border border-gray-200 border-l-4 border-l-red-600 p-3">
              <p className="text-[11px] text-red-600 font-bold uppercase tracking-wider">Market Insight</p>
              <p className="text-sm mt-1">
                Global healthcare AI market projected to reach $187B by 2030, growing at 37% CAGR.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing + Smart Cities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10">
        <div id="manufacturing">
          <SectionHeader title="Manufacturing & Industry 4.0" />
          <div className="overflow-hidden mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760553120312-2821bf54e767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Manufacturing"
              className="w-full h-40 object-cover"
            />
          </div>
          <SmallStoryList stories={manufacturingStories} />
        </div>
        <div id="smart-cities">
          <SectionHeader title="Smart Cities" />
          <div className="overflow-hidden mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Smart City"
              className="w-full h-40 object-cover"
            />
          </div>
          <SmallStoryList stories={smartCityStories} />
        </div>
      </div>

      {/* Supply Chain */}
      <div className="mb-8" id="supply-chain">
        <SectionHeader title="Supply Chain & Logistics" />
        <SmallStoryList stories={supplyChainStories} />
      </div>
    </main>
  );
}
