import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Building2, Wifi, Leaf, Car, BarChart2 } from "lucide-react";
import Smartc1Img from "../../../imports/Smartc1.png";
import Smartc2Img from "../../../imports/Smartc2.png";
import Smartc3Img from "../../../imports/Smartc3.png";
import Smartc4Img from "../../../imports/Smartc4.png";


function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "URBAN FUTURES",
  title: "Smart Cities Market on Track for $873 Billion Valuation — Momentum Continues in 2026 ",
  excerpt: "The global Smart Cities market, projected to reach $873.7 billion by the end of 2026 based on a compound annual growth rate of 13.8% from a $457 billion base in 2021, is demonstrating strong momentum across transportation, utilities, public safety, and digital governance segments. The smart transportation sub-segment continues to command the fastest growth rate, driven by urban mobility platforms, autonomous vehicle infrastructure, and integrated traffic management systems.The energy component of smart utilities holds the largest individual market share, reflecting significant investment in smart metering, distributed grid management, and real-time demand response systems. Cities across Asia-Pacific — including Singapore, Seoul, and Tokyo — continue to lead in deployment maturity, while European and North American cities accelerate their own smart infrastructure programs under national industrial strategy frameworks. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc1Img,
};
const hero1 = {
  category: "URBAN FUTURES",
  title: "Suffolk Technologies Backs Built-World Startups Through Smart City Incubator  ",
  excerpt: "Suffolk Technologies, the venture arm of construction giant Suffolk, has launched a new cohort of its built-world incubator program, targeting early-stage startups operating at the intersection of construction technology, smart buildings, and urban infrastructure. The program offers $150,000 in initial funding structured as a post-money SAFE in exchange for 4.5% equity, alongside access to Suffolk's network of over 400 industry advisors and major construction project sites.Focus areas for the current cohort include cognitive city systems, health system resilience within the built environment, water and energy system optimization, circular economy applications, and coastal climate resilience infrastructure. Eligible startups must have at least one full-time founder and a working prototype — signaling a preference for ventures with demonstrated technical feasibility. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc2Img,
};
const hero2 = {
  category: "URBAN FUTURES",
  title: "De Nora Industrial Innovation Program Opens Global Applications  ",
  excerpt: "Italy's De Nora has opened a global call for startup applications to its industrial innovation program, offering up to EUR 50,000 per venture through a SAFE-based financing structure. The program targets startups working on industrial operations redesign, manufacturing optimization, automation, health and safety technology, and resource use optimization. Applications close June 20, 2026. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc3Img,
};
const hero3 = {
  category: "URBAN FUTURES",
  title: "Smart Public Safety: AI-Driven Urban Security Systems Gain Adoption  ",
  excerpt: "AI-powered public safety platforms — encompassing gunshot detection, smart surveillance, and emergency response optimization — are seeing accelerated adoption across major metropolitan areas. Cities that have deployed integrated safety intelligence platforms report measurable reductions in emergency response times and improvements in crime pattern analysis that have enabled more effective preventive policing strategies.Civil liberties organizations are intensifying scrutiny of automated facial recognition and predictive policing tools, pushing cities toward governance frameworks that establish transparency requirements, audit mechanisms, and community oversight boards. Several European cities have opted for privacy-first architectures that anonymize identity data at the point of collection, maintaining analytical utility while limiting civil liberty concerns. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Smartc4Img,
};

const cityRankings = [
  { rank: 1, city: "Singapore", score: 98.4, population: "5.8M", tag: "Digital Leader" },
  { rank: 2, city: "Copenhagen", score: 96.7, population: "0.8M", tag: "Green Capital" },
  { rank: 3, city: "Tokyo", score: 95.2, population: "14M", tag: "Mobility Pioneer" },
  { rank: 4, city: "Amsterdam", score: 93.8, population: "0.9M", tag: "Bike + Tech" },
  { rank: 5, city: "Seoul", score: 92.4, population: "10M", tag: "5G Leader" },
  { rank: 6, city: "Dubai", score: 91.3, population: "3.4M", tag: "AI Hub" },
  { rank: 7, city: "Bangalore", score: 87.6, population: "13M", tag: "Tech Ecosystem" },
];

const govTechNews = [
  { id: 1, title: "IMD Smart City Index 2026 finds governance, transparency and infrastructure now matter more than tech deployment; Zurich holds top rank for a seventh year, with Oslo, Geneva, London and Copenhagen following and Dubai leading non-European cities.", time: "Just now" },
  { id: 2, title: "Southeast Asia's first Smart City Expo opens in Kuala Lumpur, highlighting Malaysia's move into AI-powered urban innovation.", time: "Just now" },
  { id: 3, title: "U.S. local governments face a July 13 deadline to apply for up to $3M in federal grants for automated permitting and building-code systems.", time: "Just now" },
  { id: 4, title: "London Climate Week hosts the SmartCitiesWorld Summit 2026, convening leaders on climate resilience, infrastructure and digital transformation.", time: "1 hr ago" },
  { id: 5, title: "London Climate Week smart city summit spotlights AI-enabled governance, climate resilience and digital trust in urban planning.", time: "2 hrs ago" },
  { id: 6, title: "Estonia's E-Government Platform Licensed to 47 Countries — Digital Democracy Goes Global", time: "2 hrs ago" },
  { id: 7, title: "India's DigiCity Initiative Connects 500 Cities with Real-Time Data Dashboard", time: "4 hrs ago" },
  { id: 8, title: "Barcelona's 22@ Innovation District Attracts €12B in Tech Investment in 2025", time: "6 hrs ago" },
  { id: 9, title: "Tokyo Integrates AI Traffic Management Across All 23 Wards — Congestion Down 35%", time: "8 hrs ago" },
];

const mobilityNews = [
  { id: 1, title: "Miami-Dade Aviation Department begins testing an air-traffic management system ahead of future air-taxi operations.", time: "Just now" },
  { id: 2, title: "Waymo's Autonomous Taxi Fleet Hits 10 Million Rides Without a Single Fault-Injury Accident", time: "1 hr ago" },
  { id: 3, title: "Dubai Hyperloop Link to Abu Dhabi Breaks Ground — 12-Minute Commute by 2030", time: "3 hrs ago" },
  { id: 4, title: "Paris Electric Bus Network Fully Complete — 2,400 Zero-Emission Buses in Service", time: "5 hrs ago" },
  { id: 5, title: "Berlin Unveils On-Demand Autonomous Shuttle Grid — First in Europe", time: "7 hrs ago" },
];

const sustainabilityNews = [
  { id: 1, title: "A federal judge calls the termination of a $2.8B Environmental and Climate Justice Block Grant program arbitrary and capricious, leaving city climate-resilience funding uncertain.", time: "Just now" },
  { id: 2, title: "More than three-quarters of cities studied saw pedestrian fatality rates rise over five years, even as federal safety programs face funding risks.", time: "Just now" },
  { id: 3, title: "100 Cities Achieve Carbon Neutrality by 2026 — 3 Years Ahead of Paris Agreement Target", time: "2 hrs ago" },
  { id: 4, title: "Singapore's Green Plan 2030 Turns 20% of Rooftops Into Urban Farms", time: "4 hrs ago" },
  { id: 5, title: "Nairobi Becomes Africa's First Smart Water Grid City with 98% Loss Reduction", time: "6 hrs ago" },
];

const features = [
  { icon: Wifi, title: "5G & Connectivity", news: "54 Cities Now Have 100% 5G Coverage — 1,200 More Launching by 2027" },
  { icon: Leaf, title: "Green Infrastructure", news: "Urban Tree Coverage Laws Passed in EU: 30% of City Space Must Be Green by 2035" },
  { icon: Car, title: "Autonomous Mobility", news: "Self-Driving Deliveries Now Account for 12% of Last-Mile Logistics in 8 Cities" },
  { icon: BarChart2, title: "Data & IoT", news: "Global Smart City Sensor Network Surpasses 50 Billion Connected Devices" },
];

export function SmartCitiesPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Building2 size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Urban Intelligence</span>
          <h1 className="mt-0.5">Smart Cities & Urban Innovation</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero.image} alt={hero.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42 group cursor-pointer">
          <h1 className="mt-2 leading-tight">{hero.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>
        </div>
        </div>

        {/* City rankings */}
        <div>
          <SH title="Smart City Index 2026" />
          <div className="divide-y divide-gray-100">
            {cityRankings.map((c) => (
              <div key={c.rank} className="py-0 flex items-center gap-3">
                <span className="text-xs text-gray-400 w-4">{c.rank}</span>
                <div className="flex-1">
                  <p className="text-sm">{c.city}</p>
                  <p className="text-xs text-gray-400">{c.tag} · Pop: {c.population}</p>
                </div>
                <span className="text-xs text-green-600">{c.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero1.image} alt={hero1.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero1.category}</span>
          <h1 className="mt-2 leading-tight">{hero1.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero1.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero1.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero1.time}</span>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero2.image} alt={hero2.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero2.category}</span>
          <h1 className="mt-2 leading-tight">{hero2.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero2.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero2.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero2.time}</span>
          </div>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero3.image} alt={hero3.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero3.category}</span>
          <h1 className="mt-2 leading-tight">{hero3.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero3.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero3.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero3.time}</span>
          </div>
        </div>
        </div>

      {/* Feature boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {features.map(({ icon: Icon, title, news }) => (
          <div key={title} className="border border-gray-200 rounded p-3 hover:shadow-md transition-shadow">
            <Icon size={16} className="text-gray-400 mb-2" />
            <p className="text-xs text-red-600 uppercase tracking-wider mb-1">{title}</p>
            <p className="text-xs text-gray-700 leading-snug">{news}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <SH title="GovTech & Digital Services" />
          <div className="divide-y divide-gray-100">
            {govTechNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Mobility & Transport" />
          <div className="divide-y divide-gray-100">
            {mobilityNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Green & Sustainable Cities" />
          <div className="divide-y divide-gray-100">
            {sustainabilityNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SponsoredArticleCard
        headline="Huawei Smart City: How AI-Powered Urban Brains are Transforming 200 Cities Across 40 Countries"
        excerpt="Huawei's smart city platform processes 500TB of urban data daily — from traffic signals to air quality sensors — delivering real-time optimization that saves cities billions in operational costs."
        advertiser="Huawei Technologies"
        category="SPONSORED · SMART CITIES"
        readTime={5}
        image="https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?w=800&h=400&fit=crop"
        link="#"
        disclosureText="Paid content by Huawei. Does not reflect editorial opinion of The Pride Times."
      />
    </div>
  );
}
