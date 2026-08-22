import { Clock, Truck, Package, Globe, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import SC1Img from "../../../imports/SC1.png";
import SC2Img from "../../../imports/SC2.png";
import SC3Img from "../../../imports/SC3.png";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "GLOBAL TRADE",
  title: "2026: The Year of Supply Chain Network Redesign ",
  excerpt: "Abe Eshkenazi, CEO of the Association for Supply Chain Management, captured the prevailing sentiment across the industry in a June 2026 interview: 'Last year was about managing disruptions. Right now, it's about redesigning your global network.' This shift from reactive crisis management to proactive structural reconfiguration defines the supply chain agenda for the year ahead.Companies across manufacturing, healthcare, consumer goods, and technology are actively reassessing their geographic footprints, supplier concentrations, and inventory strategies. The proliferation of tariffs, the fragmentation of trade blocs, and the persistent threat of climate-related disruption are collectively driving a new approach to supply chain resilience that prioritizes redundancy, near-shoring, and digital transparency over pure cost optimization. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: SC1Img,
};

const hero1 = {
  category: "GLOBAL TRADE",
  title: "Healthcare Supply Chains Face Inflation and Shortage Dual Pressure  ",
  excerpt: "Procurement executives managing hospital supply chains face a particularly acute version of the broader supply chain challenge in 2026. Vizient's analysis forecasts 2.58% inflation in medical and surgical supplies for the full year, while simultaneous shortages in oncology drugs, contrast media, and critical surgical components strain operational resilience.The supply chain challenge in healthcare is further complicated by the long qualification cycles for medical device components, which make rapid supplier substitution difficult. Industry working groups are exploring legislative pathways to require minimum domestic inventory buffers for essential medical supplies, mirroring frameworks already enacted for pharmaceuticals in several countries following COVID-19.  ",
  author: "Sagar Kumar",
  time: "Jan-June 2026",
  image: SC2Img,
};
const hero2 = {
  category: "GLOBAL TRADE",
  title: "Tariff Volatility and Trade Policy Uncertainty Continue to Drive Hedging Behavior  ",
  excerpt: "Ongoing tariff policy uncertainty under the current U.S. administration continues to generate hedging behavior among global manufacturers and logistics companies. Firms with significant U.S.-China supply chain exposure report dedicating significant management bandwidth to scenario planning for tariff escalation, while simultaneously building alternative sourcing relationships in Vietnam, India, Mexico, and Eastern Europe.Eversheds Sutherland's Global Supply Chain Horizons report from January 2026 flagged a wave of new legal requirements affecting global supply chains, including enhanced due diligence obligations, forced labor compliance mandates, and environmental traceability requirements that are reshaping supplier selection and audit frameworks across the EU, US, and UK. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: SC3Img,
};
const disruptions = [
  { id: 1, severity: "HIGH", route: "Red Sea / Suez Canal", issue: "Houthi attacks force continued Cape of Good Hope rerouting — adds 14 days transit", impact: "+$2.4B weekly cost" },
  { id: 2, severity: "MEDIUM", route: "Taiwan Strait", issue: "Military exercises cause vessel diversion and insurance premium spike", impact: "+15% freight rates" },
  { id: 3, severity: "LOW", route: "Panama Canal", issue: "Water levels normalized — full capacity restored after drought-related restrictions", impact: "Fully Resolved" },
];

const freightRates = [
  { route: "Shanghai → Rotterdam", rate: "$2,840/40ft", change: "+8.3%", up: true },
  { route: "Shanghai → Los Angeles", rate: "$3,120/40ft", change: "+12.1%", up: true },
  { route: "Rotterdam → New York", rate: "$1,450/40ft", change: "-2.1%", up: false },
  { route: "Mumbai → Dubai", rate: "$380/40ft", change: "+1.4%", up: true },
  { route: "Singapore → Sydney", rate: "$890/40ft", change: "+3.7%", up: true },
];

const logisticsNews = [
  { id: 1, title: "Strait of Hormuz reopening deal eases shipping bottlenecks even as global supply chains remain on edge from tariff, debt and AI-capex pressure.", time: "Just now" },
  { id: 2, title: "FedEx AI Routing Cuts Delivery Times by 23% — Saves $1.8B Annually in Fuel", time: "1 hr ago" },
  { id: 3, title: "DHL Deploys 10,000 Electric Vans Across European Last-Mile Delivery Network", time: "3 hrs ago" },
  { id: 3, title: "Amazon Air Expands Autonomous Drone Delivery to 500 US Cities", time: "5 hrs ago" },
  { id: 4, title: "Maersk Launches AI-Powered Carbon Tracking for All Container Shipments", time: "7 hrs ago" },
];

const reshoring = [
  { id: 1, title: "Apple Moves 40% of iPhone Production to India — TSMC Chennai Plant Now Operational", time: "2 hrs ago" },
  { id: 2, title: "US CHIPS Act Funds 14 New Semiconductor Fabs — $280B Investment Secured", time: "4 hrs ago" },
  { id: 3, title: "Volkswagen Shifts Battery Supply Chain to Europe — Ends Chinese Dependency by 2028", time: "6 hrs ago" },
  { id: 4, title: "Mexico Becomes World's #1 Manufacturing Destination for US-Bound Consumer Goods", time: "8 hrs ago" },
];

const severityColor: Record<string, string> = {
  HIGH: "bg-red-100 text-red-700",
  MEDIUM: "bg-yellow-50 text-yellow-700",
  LOW: "bg-green-50 text-green-700",
};

export function SupplyChainPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Truck size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Logistics & Trade</span>
          <h1 className="mt-0.5">Supply Chain & Global Trade</h1>
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

        {/* Freight rates */}
        <div>
          <SH title="Ocean Freight Rates" />
          <div className="divide-y divide-gray-100">
            {freightRates.map((f) => (
              <div key={f.route} className="py-2">
                <p className="text-xs text-gray-700">{f.route}</p>
                <div className="flex items-center justify-between mt-0.5">
                  <p className="text-sm">{f.rate}</p>
                  <p className={`text-xs ${f.up ? "text-red-600" : "text-green-600"}`}>{f.change}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Source: Freightos Baltic Index. May 22, 2026.</p>
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

      {/* Disruption alerts */}
      <div className="mb-8">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
          <AlertTriangle size={14} className="text-red-600" />
          <h2 className="uppercase tracking-wider">Supply Chain Disruption Monitor</h2>
        </div>
        <div className="flex flex-col gap-3">
          {disruptions.map((d) => (
            <div key={d.id} className={`border rounded p-4 ${severityColor[d.severity]} border-current/20`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-1.5 py-0.5 rounded bg-current/10`}>{d.severity}</span>
                    <span className="text-sm font-medium">{d.route}</span>
                  </div>
                  <p className="text-xs">{d.issue}</p>
                </div>
                <span className="text-xs whitespace-nowrap font-medium">{d.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Logistics & Technology" />
          <div className="divide-y divide-gray-100">
            {logisticsNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Reshoring & Nearshoring" />
          <div className="divide-y divide-gray-100">
            {reshoring.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
