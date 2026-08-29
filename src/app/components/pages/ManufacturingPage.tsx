import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Factory } from "lucide-react";
import Manu1Img from "../../../imports/Manu1.png";
import Manu2Img from "../../../imports/Manu2.png";
import Manu3Img from "../../../imports/Manu3.png";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "INDUSTRY 4.0",
  title: "ISM Manufacturing Index Hits 54 in May — Strongest Reading in 14 Months ",
  excerpt: "The Institute for Supply Management's Manufacturing Index reached 54 in May 2026, beating the consensus Dow Jones forecast of 53.2 and rising 1.3 points from April. The reading, which measures the share of manufacturing companies reporting business expansion, confirms that U.S. factory activity is accelerating into the second quarter of 2026 on the back of strong new orders and improved employment conditions.New orders surged 2.7 points to 56.8, while imports rose a corresponding 2.7 points to 53, signaling both domestic demand strength and a willingness among manufacturers to restock inventories. Employment within the manufacturing sector also improved, rising 2.2 points, though at 48.6 the gauge remains just below the 50-point expansion threshold, indicating that hiring growth has not yet fully recovered from earlier contractions. ",
  author: "Sagar Kumar",
  time: "1 June 2026",
  image: Manu1Img,
};
const hero1 = {
  category: "INDUSTRY 4.0",
  title: "Autodesk to Acquire MaintainX, Advancing Unified Operations Platform  ",
  excerpt: "Autodesk has announced the acquisition of MaintainX, a leading computerized maintenance management system (CMMS) platform, in a move that advances the design software giant's push toward a unified platform connecting design, construction, and operations workflows. The deal reflects growing demand from industrial manufacturers for software that integrates asset maintenance intelligence with the design and build data that modern factories generate throughout the product lifecycle.MaintainX has built a strong presence among mid-market industrial customers, with particular traction in food and beverage, pharmaceuticals, and heavy manufacturing. Autodesk's distribution network and enterprise relationships are expected to accelerate the platform's penetration into large-scale manufacturing environments globally.  ",
  author: "Sagar Kumar",
  time: "28 May 2026",
  image: Manu2Img,
};
const hero2 = {
  category: "INDUSTRY 4.0",
  title: "Robotics and Automation Reshaping Factory Floor Economics ",
  excerpt: "The integration of AI-powered robotics onto factory floors is accelerating faster than many manufacturers anticipated at the start of the decade. GlobalFoundries' completed acquisition of Synopsys' Processor IP Solutions Business — focused on Physical AI — signals the intensifying competition to embed intelligence directly into the silicon that powers industrial automation equipment.Industry analysts tracking automation deployment note that collaborative robots (cobots) are now economically viable for tasks that previously required human dexterity, including wire harness assembly, small-component placement, and quality inspection. The ROI threshold for robotic deployment has fallen from an average of 4 years in 2020 to approximately 18 months in 2026, driven by software improvements, sensor cost reductions, and the availability of pre-trained models tailored to industrial settings.  ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: Manu3Img,
};
const autoStories = [
  { id: 5, title: "Manufacturing executives say Iran conflict and Middle East tensions are inflating supply-chain costs across transportation-equipment networks.", time: "Just now" },
  { id: 6, title: "GM supplier Dauch workers ratify a contract while 5,000 Lockheed Martin IAM employees approve a new labor deal.", time: "Just now" },
  { id: 7, title: "Major food processor plans at least 2,000 layoffs as it closes a Pennsylvania beef plant and restructures Pilgrim's Pride operations.", time: "Just now" },
  { id: 1, title: "Toyota Launches All-Solid-State Battery EV — 800-Mile Range, 10-Minute Charge at $35,000 Price Point", time: "1 hr ago" },
  { id: 2, title: "Volkswagen's Wolfsburg Plant Becomes World's First Carbon-Neutral Auto Factory", time: "3 hrs ago" },
  { id: 3, title: "Tesla Cybertruck 2.0 with 750-Mile Range Begins Production at Gigafactory Texas", time: "5 hrs ago" },
  { id: 4, title: "Tata Motors Claims Top Spot in Indian EV Market with 38% Share", time: "7 hrs ago" },
];

const roboticsStories = [
  { id: 5, title: "Neura raises capital to scale humanoid and industrial robot manufacturing, deployment, and training infrastructure.", time: "Just now" },
  { id: 1, title: "Boston Dynamics Humanoid Atlas Now Assembles Complex Electronics at Honda Plant", time: "2 hrs ago" },
  { id: 2, title: "Foxconn Replaces 200,000 Workers with AI-Guided Robotic Arms in 18 Months", time: "4 hrs ago" },
  { id: 3, title: "ABB's New Collaborative Robot Wins Safety Certification for Human-Facing Assembly Lines", time: "6 hrs ago" },
  { id: 4, title: "Amazon's Manufacturing Robotics Division Files 400+ Patents in a Single Quarter", time: "8 hrs ago" },
];

const aeroDefense = [
  { id: 1, title: "Airbus A321neo Backlog Hits 3,800 Units — Production Ramp-Up Challenges Supply Chain", time: "3 hrs ago" },
  { id: 2, title: "SpaceX's Starship Manufacturing Factory Achieves 10x Lower Cost Per Ton of Payload", time: "5 hrs ago" },
  { id: 3, title: "India's HAL Tejas MkII Fighter Production Order Worth $9.4B Signed", time: "7 hrs ago" },
  { id: 4, title: "Defense contractor Rheinmetall invests $41M across six U.S. manufacturing facilities to expand capacity and strengthen supply-chain resilience.", time: "Just now" },
];

const semiconductors = [
  { id: 1, title: "U.S. manufacturing commitments hit $1.765T through June, led by Apple, Micron, IBM, and TSMC as AI infrastructure capex accelerates.", time: "Just now" },
  { id: 2, title: "CHIPS Act awards Powerex a Pennsylvania plant expansion and signals federal support for Coherent's Texas facility funding.", time: "Just now" },
  { id: 3, title: "TSMC's Arizona Fab Begins 2nm Production — First Advanced Chip Made Outside Taiwan", time: "1 hr ago" },
  { id: 4, title: "Samsung Announces $45B Investment to Build Next-Gen Memory Fab in Texas", time: "4 hrs ago" },
  { id: 5, title: "Intel's Foundry Business Wins $10B US Military Chip Contract", time: "6 hrs ago" },
  { id: 6, title: "Global Chip Shortage Officially Over as Supply Glut Now Developing — Prices Fall 40%", time: "8 hrs ago" },
];

const mfgIndex = [
  { country: "USA (ISM PMI)", value: "54.2", status: "Expanding" },
  { country: "Germany (Manufacturing PMI)", value: "52.4", status: "Expanding" },
  { country: "China (Caixin PMI)", value: "51.8", status: "Expanding" },
  { country: "India (Manufacturing PMI)", value: "58.9", status: "Strong Growth" },
  { country: "Japan (Manufacturing PMI)", value: "49.7", status: "Contracting" },
  { country: "UK (Manufacturing PMI)", value: "50.3", status: "Flat" },
];

export function ManufacturingPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Factory size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Industry & Production</span>
          <h1 className="mt-0.5">Manufacturing & Industry</h1>
        </div>
      </div>

        {/* Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
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
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-42">
                  <h1 className="mt-2 leading-tight">{hero.title}</h1>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed ">{hero.excerpt}</p>
                  </div>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                    <span>By {hero.author}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {hero.time}</span>
                  </div>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
              <div className="lg:col-span-42">
                <div className="mt-4 border border-gray-700 bg-slate-200 flex">
        <div className="w-25 border-r border-gray-700 bg-slate-300"></div>
      
        <div className="p-2 md:p-3">
          <p className="italic text-sm leading-relaxed text-gray-900">
           "Last year was about managing disruptions. Right now, it's about redesigning your global network." 
          </p>
      
          <p className="mt-2 font-bold text-gray-900">
            — Abe Eshkenazi, CEO, Association for Supply Chain Management 
          </p>
        </div>
        </div>
        </div>
        </div>
              </div>



        {/* PMI Index */}
        <div>
          <SH title="Manufacturing PMI" />
          <div className="divide-y divide-gray-100">
            {mfgIndex.map((m) => (
              <div key={m.country} className="py-2.5 flex items-center justify-between">
                <p className="text-sm">{m.country}</p>
                <div className="text-right">
                  <p className="text-sm">{m.value}</p>
                  <p className={`text-xs ${parseFloat(m.value) > 50 ? "text-green-600" : "text-red-600"}`}>{m.status}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">PMI above 50 = expansion. Data: May 2026.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        <div className="lg:col-span-2">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded mb-4">
  <ImageWithFallback
    src={hero1.image}
    alt={hero1.title}
    className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent " />
</div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{hero1.category}</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-42">
            <h1 className="mt-2 leading-tight">{hero1.title}</h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed ">{hero1.excerpt}</p>
            </div>
            </div>
            <div className="flex items-center gap-3 mt-0 text-xs text-gray-400">
              <span>By {hero1.author}</span>
              <span className="flex items-center gap-1"><Clock size={10} /> {hero1.time}</span>
            </div>
          </div>
        </div>
        </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                <div className="lg:col-span-2">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded mb-2">
          <ImageWithFallback
            src={hero2.image}
            alt={hero2.title}
            className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent " />
        </div>
                    <span className="text-xs text-red-600 uppercase tracking-wider">{hero2.category}</span>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-42">
                    <h1 className="mt-2 leading-tight">{hero2.title}</h1>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed ">{hero2.excerpt}</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                      <span>By {hero2.author}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {hero2.time}</span>
                    </div>
                  </div>
                </div>
                {/* Industry Statistics Table */}
                
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
                <div className="lg:col-span-42">
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              <tr>
                <td className="w-1/3 bg-slate-200 font-bold p-3 border border-gray-300">
                  ISM Manufacturing Index (May) 
                </td>
                <td className="p-3 border border-gray-300">
                  54.0 — above consensus of 53.2 (CNBC / ISM) 
                </td>
              </tr>
        
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  New Orders Sub-Index 
                </td>
                <td className="p-3 border border-gray-300">
                  56.8 (+2.7 points from April) 
                </td>
              </tr>
        
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  Manufacturing M&A (2025) 
                </td>
                <td className="p-3 border border-gray-300">
                  11 megadeals — ranked 3rd globally (PwC) 
                </td>
              </tr>
        
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  AI Mentioned in Deals 
                </td>
                <td className="p-3 border border-gray-300">
                  Most frequently cited in Technology and Manufacturing 
                </td>
              </tr>
        
              <tr>
                <td className="bg-slate-200 font-bold p-3 border border-gray-300">
                  Cobot ROI Threshold 
                </td>
                <td className="p-3 border border-gray-300">
                  Reduced from 4 years (2020) to ~18 months (2026) 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        </div>
                </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Automotive & EV" />
          <div className="divide-y divide-gray-100">
            {autoStories.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Robotics & Automation" />
          <div className="divide-y divide-gray-100">
            {roboticsStories.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SponsoredArticleCard
        headline="Siemens Digital Industries: The Factory of the Future is Here — and It's Saving 30% on Energy Costs"
        excerpt="How Siemens' Digital Twin technology and Industrial IoT platform are helping manufacturers eliminate waste, predict failures, and optimize production in real time."
        advertiser="Siemens AG"
        category="SPONSORED · MANUFACTURING"
        readTime={6}
        image="https://images.unsplash.com/photo-1760553120312-2821bf54e767?w=800&h=400&fit=crop"
        link="#"
        disclosureText="Paid content by Siemens. Does not reflect editorial opinion of The Pride Times."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Semiconductors & Electronics" />
          <div className="divide-y divide-gray-100">
            {semiconductors.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Aerospace & Defense" />
          <div className="divide-y divide-gray-100">
            {aeroDefense.map((n) => (
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
