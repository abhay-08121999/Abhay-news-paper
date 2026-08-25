import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  ChevronRight,
  ArrowRight,
  Shield,
  Cpu,
  Zap,
  Heart,
  Factory,
  Building2,
  Truck,
} from "lucide-react";

import HeroImg from "../../../imports/heroimage.png";
import Hero1Img from "../../../imports/Techheroimage.png";
import Hero2Img from "../../../imports/hero1image.png";

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div className="flex items-center justify-between border-t border-b border-black py-2 mb-4">
      <h2 className="text-[13px] md:text-[14px] font-bold uppercase tracking-wide text-black">
        {title}
      </h2>

      {link && (
        <a
          href={link}
          className="text-[10px] uppercase tracking-wide text-gray-500 hover:text-black flex items-center gap-1"
        >
          See All
          <ChevronRight size={11} />
        </a>
      )}
    </div>
  );
}

/* =========================================================
   HERO STORIES
========================================================= */

const techHero = {
  category: "ARTIFICIAL INTELLIGENCE",
  title:
    "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push  ",
  excerpt:
    "Nvidia has announced an ambitious collaboration with humanoid robot manufacturers across the United States, Europe, and South Korea, expanding its already well-established relationship with China's Unitree. The chipmaker's shares climbed approximately 6% during the June 1 session, bringing its year-to-date gains to roughly 20%. The move signals Nvidia's determined pivot from GPU sales to powering the physical AI economy — a strategy that positions the company at the intersection of software, semiconductors, and robotics manufacturing.Chief Executive Jensen Huang described the initiative as central to Nvidia's next decade of growth, noting that intelligent robots require the same kind of dense compute that large language models demand, but with the added requirement of real-time sensor processing and sub-millisecond decision loops. The company's Isaac robotics platform, combined with its Blackwell GPU architecture, is expected to serve as the backbone for humanoid factories from Seoul to Stuttgart. ",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: HeroImg,
};

const techHero1 = {
  category: "ARTIFICIAL INTELLIGENCE",
  title:
    "Intel Attempts Inference-Chip Comeback as AI Compute Wars Intensify ",
  excerpt:
    "Intel has unveiled a renewed push into the inference accelerator market, positioning its next-generation Gaudi chips as a cost-effective alternative for enterprises deploying large-scale AI models at inference time. Analysts remain cautious about Intel's ability to reclaim lost ground from Nvidia, but note that the inference segment — distinct from the training market dominated by Nvidia's H100 and Blackwell lines — offers a viable path for differentiation.The inference chip market is projected to grow substantially as corporations move beyond pilot AI programs into full-scale production deployment. Industry figures suggest that by 2027, inference workloads will represent over 60% of all AI compute spend, making it the largest single growth lever in the semiconductor space.",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Hero1Img,
};

const techHero2 = {
  category: "ARTIFICIAL INTELLIGENCE",
  title: "SoftBank Bets Big on European Data Centers  ",
  excerpt:
    "Japan's SoftBank Group has committed to a massive European data center investment, aligning its capital with the continent's growing appetite for AI compute infrastructure. The initiative forms part of SoftBank's broader strategy to build an end-to-end AI stack that encompasses hardware, connectivity, and application layers across key markets.The move follows SoftBank's landmark agreement to acquire a strategic interest in a leading data center operator in the first half of 2026. European Union officials have welcomed the investment, though regulators in Brussels are reviewing data sovereignty implications as American and Japanese hyperscalers expand their European footprint. ",
  author: "Sagar Kumar",
  time: "30 May 2026",
  image: Hero2Img,
};

/* =========================================================
   CATEGORIES
========================================================= */

const techCategories = [
  {
    icon: Cpu,
    label: "AI & Machine Learning",
    color: "text-gray-700",
  },
  {
    icon: Shield,
    label: "Cybersecurity",
    color: "text-gray-700",
  },
  {
    icon: Zap,
    label: "Energy Tech",
    color: "text-gray-700",
  },
  {
    icon: Heart,
    label: "HealthTech",
    color: "text-gray-700",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    color: "text-gray-700",
  },
  {
    icon: Building2,
    label: "Smart Cities",
    color: "text-gray-700",
  },
  {
    icon: Truck,
    label: "Supply Chain",
    color: "text-gray-700",
  },
];

/* =========================================================
   AI STORIES
========================================================= */

const aiStories = [
  {
    id: 5,
    title:
      "SpaceX prices IPO at $135 per share, raising $75B at a $1.77T valuation in the largest IPO ever.",
    excerpt:
      "The share listing positions SpaceX among the world’s five largest companies while underscoring investor appetite for AI infrastructure and space-tech capital.",
    time: "Just now",
    image:
      "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title:
      "SpaceX agrees to acquire AI coding startup Cursor for $60B, folding the asset into xAI.",
    excerpt:
      "The all-stock deal is expected to close in Q3 2026 and signals a major move into coding agents for the company riding its record IPO.",
    time: "Just now",
    image:
      "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title:
      "Anthropic surpasses OpenAI with a $30B run rate and prepares a confidential IPO filing.",
    excerpt:
      "Industry trackers say enterprise API and agentic product usage have driven the company’s revenue to new heights.",
    time: "Just now",
    image:
      "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title:
      "Nvidia unveils the RTX Spark Superchip at Computex, pairing Blackwell RTX graphics with Grace CPU for AI PCs.",
    excerpt:
      "The new chip is designed to bring data-center-caliber AI power to desktops and workstations, expanding Nvidia’s full-stack grip.",
    time: "Just now",
    image:
      "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 1,
    title:
      "NVIDIA's Blackwell Ultra GPU Delivers 40x Speed Boost for LLM Training",
    excerpt:
      "The new architecture fundamentally changes what's possible in real-time AI inference at scale.",
    time: "2 hrs ago",
    image:
      "https://images.unsplash.com/photo-1775797231060-431c478767ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title:
      "Google DeepMind Achieves Breakthrough in Protein Structure Prediction for Drug Discovery",
    excerpt:
      "AlphaFold 4 identifies drug candidates for diseases that have resisted treatment for decades.",
    time: "4 hrs ago",
    image:
      "https://images.unsplash.com/photo-1769839271832-cfd7a1f6854f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title:
      "Microsoft's AI-Powered Copilot Now Manages 60% of Enterprise Software Workflows",
    excerpt:
      "Productivity data from 500 Fortune companies reveals dramatic efficiency improvements.",
    time: "6 hrs ago",
    image:
      "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

/* =========================================================
   OTHER STORIES
========================================================= */

const cyberStories = [
  {
    id: 5,
    title:
      "Florida sues OpenAI and Sam Altman, alleging ChatGPT caused harm as regulators warn growth is being prioritized over safety.",
    time: "Just now",
  },
  {
    id: 6,
    title:
      "White House pressure reportedly pulled back Anthropic's most capable models amid concerns over high-risk AI systems.",
    time: "Just now",
  },
  {
    id: 1,
    title: "Zero-Day Exploit Threatens 2 Billion Android Devices Globally",
    time: "3 hrs ago",
  },
  {
    id: 2,
    title:
      "US CISA Issues Emergency Directive After Critical Infrastructure Breach",
    time: "5 hrs ago",
  },
  {
    id: 3,
    title:
      "Quantum Encryption Startup Raises $400M Series C to Secure Financial Networks",
    time: "7 hrs ago",
  },
  {
    id: 4,
    title:
      "Ransomware Attacks Hit Record High in Q1 2026, Costing Enterprises $12B",
    time: "9 hrs ago",
  },
];

const energyStories = [
  {
    id: 4,
    title:
      "Ohio suspends a major data-center tax incentive after AI infrastructure costs surge, deepening grid and community pushback.",
    time: "Just now",
  },
  {
    id: 5,
    title:
      "Analysts say 30-50% of planned U.S. AI data centers may miss 2026 timelines or be canceled over transformer shortages, grid delays, and local opposition.",
    time: "Just now",
  },
  {
    id: 1,
    title:
      "Global Solar Capacity Crosses 5 Terawatts — a Historic Milestone for Clean Energy",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "Hydrogen Fuel Cell Trucks Begin Commercial Operations on Trans-European Routes",
    time: "4 hrs ago",
  },
  {
    id: 3,
    title:
      "Saudi Arabia's NEOM Project Reveals 100% Renewable Powered Megacity Grid",
    time: "6 hrs ago",
  },
];

const healthcareStories = [
  {
    id: 1,
    title:
      "CRISPR Gene Editing Achieves 98% Success Rate in Clinical Trials for Sickle Cell Disease",
    time: "1 hr ago",
  },
  {
    id: 2,
    title:
      "AI Diagnostics Platform Outperforms Radiologists in Early Cancer Detection Study",
    time: "3 hrs ago",
  },
  {
    id: 3,
    title:
      "WHO Declares End to Decade-Long Battle with Antibiotic-Resistant Superbugs",
    time: "8 hrs ago",
  },
];

const manufacturingStories = [
  {
    id: 4,
    title:
      "DriveNets raises $410M backed by AMD to expand software-defined networking for AI data centers.",
    time: "Just now",
  },
  {
    id: 1,
    title:
      "Tesla's Gigafactory India Begins Production of Next-Gen 4680 Battery Cells",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "3D-Printed Steel Bridges Deploy in Rotterdam, Cutting Construction Costs by 65%",
    time: "5 hrs ago",
  },
  {
    id: 3,
    title:
      "South Korea's Hyundai Robotics Ships 50,000 Humanoid Factory Workers Globally",
    time: "7 hrs ago",
  },
];

const smartCityStories = [
  {
    id: 1,
    title:
      "Dubai's Digital Twin City Platform Reduces Emergency Response Times by 40%",
    time: "3 hrs ago",
  },
  {
    id: 2,
    title:
      "Tokyo Smart Traffic System Eliminates Rush Hour Congestion in Pilot District",
    time: "6 hrs ago",
  },
  {
    id: 3,
    title:
      "Copenhagen Becomes First Carbon-Negative Capital City Through Smart Grid Innovations",
    time: "9 hrs ago",
  },
];

const supplyChainStories = [
  {
    id: 1,
    title:
      "Manufacturers Rebuild Supply Chains Around Unified Data, AI Scenario Modeling and Supplier Collaboration",
    time: "Just now",
  },
  {
    id: 2,
    title:
      "91% of Mid-Market Manufacturers Use Generative AI in Supply-Chain Operations, but Operating Models Lag",
    time: "15 min ago",
  },
  {
    id: 3,
    title:
      "Tanker Traffic Through the Strait of Hormuz Jumps After US-Iran Shipping Lane Reopening Deal",
    time: "1 hr ago",
  },
  {
    id: 4,
    title:
      "Cargo Volumes Are Normalizing in 2026 After Companies Frontloaded Goods Ahead of New Tariffs",
    time: "2 hrs ago",
  },
  {
    id: 5,
    title:
      "Rising Corporate Debt Pushes Companies to Stress-Test Suppliers and Diversify Fragile Logistics Corridors",
    time: "3 hrs ago",
  },
  {
    id: 6,
    title:
      "ISG Launches a Study of Service Providers Supporting Manufacturers Through Supply-Chain Restructuring",
    time: "4 hrs ago",
  },
];

/* =========================================================
   INNOVATION FEATURE
========================================================= */

const innovationFeature = {
  title:
    "Innovation of the Year: Solid-State Batteries Set to Transform Electric Mobility",
  excerpt:
    "After decades of promise, solid-state battery technology has finally crossed the threshold of commercial viability. Toyota's new QuantumBattery delivers 800 miles of range, charges in 8 minutes, and lasts 20 years — fundamentally altering the economics of electric vehicles and grid storage alike.",
  author: "Sagar Kumar",
  image:
    "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
};

/* =========================================================
   SMALL STORY LIST
========================================================= */

function SmallStoryList({
  stories,
}: {
  stories: Array<{
    id: number;
    title: string;
    time: string;
  }>;
}) {
  return (
    <div>
      {stories.map((s) => (
        <div
          key={s.id}
          className="py-3 border-b border-gray-200 cursor-pointer group"
        >
          <p className="text-[13px] md:text-[14px] font-semibold leading-snug text-gray-900 group-hover:underline">
            {s.title}
          </p>

          <span className="text-[10px] text-gray-500 flex items-center gap-1 mt-1.5">
            <Clock size={9} />
            {s.time}
          </span>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   TECHNOLOGY PAGE
========================================================= */

export function TechnologyPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">

        {/* =================================================
            PAGE TITLE
        ================================================= */}

        <div className="pt-7 md:pt-9 pb-3 border-b border-black">
          <h1 className="font-serif text-[34px] md:text-[42px] lg:text-[48px] font-bold leading-none tracking-tight">
            Technology
          </h1>
        </div>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <nav className="border-b border-gray-300 py-2.5 mb-5">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap">
            {techCategories.map(
              ({ icon: Icon, label, color }) => (
                <button
                  key={label}
                  className={`flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-wide ${color} hover:text-black transition-colors`}
                >
                  <Icon size={11} />
                  {label}
                </button>
              )
            )}
          </div>
        </nav>

        {/* =================================================
            TOP NEWS GRID
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_300px] border-b border-gray-300">

          {/* MAIN STORY */}

          <article className="lg:pr-4 lg:border-r border-gray-300 pb-5">
            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={techHero.image}
                alt={techHero.title}
                className="w-full h-[230px] md:h-[270px] object-cover"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-wider text-red-700">
              {techHero.category}
            </span>

            <h2 className="font-serif text-[22px] md:text-[25px] font-bold leading-[1.05] mt-1.5 hover:underline cursor-pointer">
              {techHero.title}
            </h2>

            <p className="text-[12px] leading-relaxed text-gray-600 mt-2">
              {techHero.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
              <span>By {techHero.author}</span>
              <span className="flex items-center gap-1">
                <Clock size={9} />
                {techHero.time}
              </span>
            </div>
          </article>

          {/* SECOND STORY */}

          <article className="lg:px-4 py-5 lg:py-0 border-t lg:border-t-0 border-gray-300">
            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={techHero1.image}
                alt={techHero1.title}
                className="w-full h-[210px] md:h-[240px] object-cover"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-wider text-red-700">
              {techHero1.category}
            </span>

            <h2 className="font-serif text-[20px] md:text-[23px] font-bold leading-[1.08] mt-1.5 hover:underline cursor-pointer">
              {techHero1.title}
            </h2>

            <p className="text-[12px] leading-relaxed text-gray-600 mt-2">
              {techHero1.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
              <span>By {techHero1.author}</span>
              <span className="flex items-center gap-1">
                <Clock size={9} />
                {techHero1.time}
              </span>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}

          <aside className="lg:border-l border-gray-300 lg:pl-4 pt-5 lg:pt-0">

            {/* Innovation */}

            <div className="border border-gray-300 p-3">
              <div className="flex items-center justify-between border-b border-black pb-2 mb-3">
                <span className="text-[9px] font-bold uppercase tracking-wider">
                  Innovation
                </span>

                <ArrowRight size={11} />
              </div>

              <div className="overflow-hidden mb-3">
                <ImageWithFallback
                  src={innovationFeature.image}
                  alt={innovationFeature.title}
                  className="w-full h-[125px] object-cover"
                />
              </div>

              <h3 className="font-serif text-[16px] font-bold leading-tight">
                {innovationFeature.title}
              </h3>

              <p className="text-[10px] text-gray-500 leading-relaxed mt-2 line-clamp-5">
                {innovationFeature.excerpt}
              </p>

              <button className="mt-3 text-[9px] font-bold uppercase tracking-wide flex items-center gap-1 hover:underline">
                Read Deep Dive
                <ArrowRight size={10} />
              </button>
            </div>

            {/* Quote */}

            <div className="mt-4 border-t border-b border-gray-300 py-3">
              <p className="font-serif italic text-[12px] leading-relaxed">
                "The move from model hype to infrastructure reality is now
                defining where the AI industry places its bets — chips, power
                grids, data centers, robotics, satellites, and government
                access controls."
              </p>

              <p className="text-[9px] font-bold mt-2">
                — Tech Startups Global Analysis, June 2026
              </p>
            </div>
          </aside>
        </section>

        {/* =================================================
            THIRD FEATURE
        ================================================= */}

        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300">

          <article className="md:pr-4 py-5 md:border-r border-gray-300">
            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={techHero2.image}
                alt={techHero2.title}
                className="w-full h-[220px] object-cover"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-wider text-red-700">
              {techHero2.category}
            </span>

            <h2 className="font-serif text-[21px] md:text-[24px] font-bold leading-tight mt-1.5 hover:underline cursor-pointer">
              {techHero2.title}
            </h2>

            <p className="text-[12px] leading-relaxed text-gray-600 mt-2">
              {techHero2.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
              <span>By {techHero2.author}</span>

              <span className="flex items-center gap-1">
                <Clock size={9} />
                {techHero2.time}
              </span>
            </div>
          </article>

          {/* INDUSTRY STATISTICS */}

          <div className="md:pl-4 py-5">
            <div className="border-t border-black">
              <div className="py-2 border-b border-gray-300">
                <h3 className="text-[12px] font-bold uppercase tracking-wide">
                  Industry Statistics
                </h3>
              </div>

              <div className="text-[11px]">
                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    Global IT Spend (2025)
                  </div>
                  <div className="py-2">
                    USD 5.43 Trillion (Gartner / StartUs Insights estimate)
                  </div>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    AI Market (Agentic AI by 2034)
                  </div>
                  <div className="py-2">
                    USD 103.28 Billion at 40%+ CAGR
                  </div>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    Cybersecurity Growth Rate
                  </div>
                  <div className="py-2">
                    12.2% annually, toward USD 377B by 2028
                  </div>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    Semiconductor CapEx by 2030
                  </div>
                  <div className="py-2">
                    ~USD 1 Trillion in fabrication globally
                  </div>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    IoT Connected Devices (2030)
                  </div>
                  <div className="py-2">
                    Projected 40 Billion devices
                  </div>
                </div>

                <div className="grid grid-cols-[42%_58%] border-b border-gray-200">
                  <div className="font-bold py-2 pr-2">
                    Tech M&amp;A Megadeals (2025)
                  </div>
                  <div className="py-2">
                    26 deals — highest of any sector (PwC)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            AI & MACHINE LEARNING
        ================================================= */}

        <section className="py-6" id="innovation">
          <SectionHeader title="AI & Machine Learning" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {aiStories.map((s) => (
              <article
                key={s.id}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-2">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[125px] md:h-[145px] object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                <h3 className="font-serif text-[13px] md:text-[14px] font-bold leading-tight group-hover:underline">
                  {s.title}
                </h3>

                <p className="text-[10px] text-gray-500 mt-1 leading-relaxed line-clamp-3">
                  {s.excerpt}
                </p>

                <span className="text-[9px] text-gray-400 flex items-center gap-1 mt-2">
                  <Clock size={8} />
                  {s.time}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* =================================================
            CYBERSECURITY + ENERGY
        ================================================= */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-300 pt-5 mb-7">

          <div id="cybersecurity">
            <SectionHeader title="Cybersecurity" />
            <SmallStoryList stories={cyberStories} />
          </div>

          <div id="energy">
            <SectionHeader title="Energy Technology" />
            <SmallStoryList stories={energyStories} />
          </div>

        </section>

        {/* =================================================
            HEALTHCARE
        ================================================= */}

        <section className="mb-7" id="healthcare">
          <SectionHeader title="Healthcare & BioTech" />

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6">

            <article className="group cursor-pointer">
              <div className="overflow-hidden mb-3">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1766315746079-215ff5115e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBob3NwaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc5Mzg1OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare"
                  className="w-full h-[220px] object-cover group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>

              <h3 className="font-serif text-[18px] md:text-[21px] font-bold leading-tight group-hover:underline">
                {healthcareStories[0].title}
              </h3>
            </article>

            <div>
              <SmallStoryList
                stories={healthcareStories.slice(1)}
              />

              <div className="mt-4 border-t border-b border-gray-300 py-3">
                <p className="text-[9px] font-bold uppercase tracking-wide">
                  Market Insight
                </p>

                <p className="text-[12px] mt-1 leading-relaxed">
                  Global healthcare AI market projected to reach $187B by 2030,
                  growing at 37% CAGR.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =================================================
            MANUFACTURING + SMART CITIES
        ================================================= */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-300 pt-5 mb-7">

          <div id="manufacturing">
            <SectionHeader title="Manufacturing & Industry 4.0" />

            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760553120312-2821bf54e767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing"
                className="w-full h-[170px] object-cover"
              />
            </div>

            <SmallStoryList stories={manufacturingStories} />
          </div>

          <div id="smart-cities">
            <SectionHeader title="Smart Cities" />

            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Smart City"
                className="w-full h-[170px] object-cover"
              />
            </div>

            <SmallStoryList stories={smartCityStories} />
          </div>

        </section>

        {/* =================================================
            SUPPLY CHAIN
        ================================================= */}

        <section
          className="mb-10 border-t border-gray-300 pt-5"
          id="supply-chain"
        >
          <SectionHeader title="Supply Chain & Logistics" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <SmallStoryList
              stories={supplyChainStories.slice(0, 3)}
            />

            <SmallStoryList
              stories={supplyChainStories.slice(3)}
            />
          </div>
        </section>

      </div>
    </main>
  );
}
