import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Heart, Activity } from "lucide-react";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";
import HC1Img from "../../../imports/HC1.png";
import HC2Img from "../../../imports/HC2.png";
import HC3Img from "../../../imports/HC3.png";
import HC4Img from "../../../imports/HC4.png";

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}

const hero = {
  category: "MEDICAL BREAKTHROUGH",
  title: "Global Health Financing Under Structural Transformation in 2026 ",
  excerpt: "The 2026 JP Morgan Healthcare Conference set the tone for a year defined by structural transformation in global health financing. Industry leaders at the conference emphasized that success in Asian and African healthcare markets requires investment across the full health ecosystem — regulatory alignment, financing pathways, supply chain readiness, workforce capacity, and digital infrastructure — rather than relying on individual product launches or point-solution deployments.The Bay Area Global Health Alliance's synthesis of 40 major health trend reports identifies aid contraction as structural rather than cyclical. Traditional donor-driven growth is giving way to domestic resource mobilization, co-financing frameworks, and blended capital structures. Development finance institutions, private equity, and philanthropic foundations are increasingly filling the gaps left by shrinking bilateral health aid programs. ",
  author: "Sagar Kumar",
  time: "Feb-June 2026",
  image: HC1Img,
};
const hero1 = {
  category: "MEDICAL BREAKTHROUGH",
  title: "Implementation Disruption and Supply Chain Delays Challenge LMICs  ",
  excerpt: "Frontline health organizations across low- and middle-income countries (LMICs) have reported significant implementation gaps stemming from rapid aid restructuring and funding shifts. The disruptions have translated into supply chain delays for essential medicines and medical devices, workforce instability, and strategic planning uncertainty — with researchers projecting measurable mortality consequences in under-resourced settings if the gaps are not addressed within the current fiscal year.The crisis is prompting a rethinking of global health supply chain architecture. Agencies including WHO and UNICEF are exploring regional manufacturing partnerships and advance purchase commitments to reduce dependence on single-source suppliers, particularly for vaccines, diagnostics, and essential surgical supplies. ",
  author: "Sagar Kumar",
  time: "May 2026",
  image: HC2Img,
};
const hero2 = {
  category: "MEDICAL BREAKTHROUGH",
  title: "Medical Supply Inflation Expected to Reach 2.58% in 2026  ",
  excerpt: "Vizient's State of the Healthcare Industry 2026 report, updated in January, projects that inflation in medical and surgical supplies will reach a full-year rate of 2.58% — a forecast the firm maintained into mid-year based on sustained volatility in global trade conditions and supply chain disruptions. Hospital procurement executives are being advised to diversify supplier bases, accelerate contract negotiations for high-utilization categories, and invest in demand-sensing analytics to reduce wasteful emergency purchasing. The inflation pressure is compounded by ongoing shortages in key therapeutic categories, including oncology drugs, antibiotics, and contrast media for medical imaging. The FDA and equivalent regulatory agencies in Europe and Asia-Pacific have accelerated drug shortage notifications, but sourcing challenges persist in categories reliant on a small number of active pharmaceutical ingredient producers.  ",
  author: "Sagar Kumar",
  time: "Jan-June 2026",
  image: HC3Img,
};
const hero3 = {
  category: "MEDICAL BREAKTHROUGH",
  title: "AI in Healthcare: Transforming Diagnostics and Clinical Workflows ",
  excerpt: "KPMG's 2026 Global Tech Report devotes a dedicated section to healthcare technology, noting that transforming healthcare through technology, insight, and action remains one of the most consequential application domains for AI. Clinical decision support systems, AI-assisted radiology, genomic analysis, and administrative automation are generating measurable efficiency gains across health systems that have successfully scaled these tools beyond pilot programs.The challenge, as noted by multiple healthcare CIOs at industry conferences, lies in interoperability. The vast majority of health data remains siloed in incompatible legacy systems, limiting the ability of AI models to access the breadth of clinical context needed for reliable performance. Investment in data governance frameworks, electronic health record modernization, and federated learning architectures is expected to dominate digital health capital allocation through 2028. ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: HC4Img,
};
const breakthroughs = [
  { id: 1, title: "CRISPR 3.0 Corrects Hearing Loss Mutation in 92% of Clinical Trial Patients", time: "2 hrs ago", category: "GENE THERAPY" },
  { id: 2, title: "AI System Detects Alzheimer's Disease 15 Years Before Symptoms Appear with 89% Accuracy", time: "4 hrs ago", category: "AI DIAGNOSTICS" },
  { id: 3, title: "Lab-Grown Kidney Successfully Transplanted Into Human — World First", time: "7 hrs ago", category: "ORGAN BIOENGINEERING" },
];

const pharmaNews = [
  { id: 1, title: "Novo Nordisk's Ozempic 2.0 Shows 24% Weight Loss in Phase 3 Trials — Analysts See $50B Revenue", time: "3 hrs ago" },
  { id: 2, title: "Pfizer Acquires Indian Biotech Serum BioSciences for $4.2B to Expand Generic Biosimilars", time: "5 hrs ago" },
  { id: 3, title: "FDA Fast-Tracks 12 AI-Assisted Drug Discovery Compounds Simultaneously", time: "7 hrs ago" },
  { id: 4, title: "Johnson & Johnson Spins Off MedTech Division as $90B Listed Company", time: "9 hrs ago" },
];

const healthTechStories = [
  { id: 1, title: "Joint Commission launches Responsible Use of AI in Healthcare certification to govern model safety, data bias, and oversight.", time: "Just now" },
  { id: 2, title: "Apple Watch Series 11 Receives FDA Clearance for Non-Invasive Blood Glucose Monitoring", time: "2 hrs ago" },
  { id: 3, title: "Boston Dynamics' Surgical Robot Completes 10,000th Autonomous Procedure", time: "4 hrs ago" },
  { id: 3, title: "Digital Therapeutics Market Hits $15B as Apps Prove Clinically Equivalent to Medication", time: "6 hrs ago" },
  { id: 4, title: "India's Apollo Hospitals Deploys AI-Powered Radiology Across 70 Hospitals", time: "8 hrs ago" },
];

const globalHealthNews = [
  { id: 1, title: "WHO Declares Malaria Elimination in 5 More African Nations — 20 Years Ahead of Target", time: "1 hr ago" },
  { id: 2, title: "Universal Health Coverage Reaches 5.8 Billion People — Up from 3.4B in 2015", time: "3 hrs ago" },
  { id: 3, title: "Antibiotic Resistance Could Kill 50M Annually by 2050 — UN Emergency Session Called", time: "5 hrs ago" },
  { id: 4, title: "India's Ayushman Bharat Expands to Cover 1 Billion Citizens with Comprehensive Health Insurance", time: "7 hrs ago" },
];

const healthcareStocks = [
  { company: "UnitedHealth Group", ticker: "UNH", price: "$567.20", change: "+1.8%", up: true },
  { company: "Johnson & Johnson", ticker: "JNJ", price: "$156.40", change: "+0.5%", up: true },
  { company: "Novo Nordisk", ticker: "NVO", price: "$124.70", change: "+5.2%", up: true },
  { company: "Abbott Labs", ticker: "ABT", price: "$123.90", change: "+2.1%", up: true },
  { company: "Moderna", ticker: "MRNA", price: "$89.30", change: "+7.4%", up: true },
];

export function HealthcarePage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Heart size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Medicine & BioTech</span>
          <h1 className="mt-0.5">Healthcare & Life Sciences</h1>
        </div>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="overflow-hidden rounded mb-4">
            <ImageWithFallback src={hero.image} alt={hero.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="text-xs text-red-600 uppercase tracking-wider">{hero.category}</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2">
        <div className="lg:col-span-42">
          <h1 className="mt-2 leading-tight">{hero.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{hero.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
            <span>By {hero.author}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{hero.time}</span>
          </div>
        </div>
        </div>
        </div>


        {/* Healthcare stocks */}
        <div>
          <SH title="Healthcare Stocks" />
          <div className="divide-y divide-gray-100">
            {healthcareStocks.map((s) => (
              <div key={s.ticker} className="py-2.5 flex items-center justify-between">
                <div>
                  <p className="text-sm">{s.company}</p>
                  <p className="text-xs text-gray-400">{s.ticker}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{s.price}</p>
                  <p className={`text-xs ${s.up ? "text-green-600" : "text-red-600"}`}>{s.change}</p>
                </div>
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

      {/* Breakthroughs */}
      <div className="mb-8">
        <SH title="Medical Breakthroughs" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {breakthroughs.map((b) => (
            <div key={b.id} className="border border-gray-200 rounded p-4 hover:shadow-md transition-shadow cursor-pointer group">
              <span className="text-xs text-red-600 uppercase tracking-wider">{b.category}</span>
              <h3 className="mt-1 leading-snug group-hover:text-red-600 transition-colors">{b.title}</h3>
              <span className="text-xs text-gray-400 flex items-center gap-1 mt-2"><Clock size={10} />{b.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsored */}
      <SponsoredArticleCard
        headline="Roche Diagnostics: How Precision Medicine is Cutting Cancer Treatment Costs by 40%"
        excerpt="Companion diagnostics identify which patients will respond to which treatments — eliminating trial and error, improving outcomes, and dramatically reducing the cost of cancer care at scale."
        advertiser="Roche Diagnostics"
        category="SPONSORED · HEALTHCARE"
        readTime={7}
        image="https://images.unsplash.com/photo-1770836037423-d48c88ec60b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
        link="#"
        disclosureText="Paid content by Roche Diagnostics. Does not reflect editorial opinion of The Pride Times."
      />

      {/* Pharma + HealthTech + Global */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <SH title="Pharma & Biotech" />
          <div className="divide-y divide-gray-100">
            {pharmaNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="HealthTech & Digital" />
          <div className="divide-y divide-gray-100">
            {healthTechStories.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Global Health" />
          <div className="divide-y divide-gray-100">
            {globalHealthNews.map((n) => (
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
