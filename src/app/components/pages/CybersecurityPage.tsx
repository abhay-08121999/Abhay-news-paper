import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, Shield, AlertTriangle, Lock, Eye, Server, ChevronRight } from "lucide-react";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";
import CS2Img from "../../../imports/CS2.png";
import CS3Img from "../../../imports/CS3.png";


function SH({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="border-b-2 border-black pb-2 mb-4">
      <h2 className="uppercase tracking-wider">{title}</h2>
    </div>
  );
}

const hero = {
  category: "CYBER THREAT INTELLIGENCE",
  title: "PwC 2026 Global Digital Trust Insights: Enterprises Escalate Defense Spending ",
  excerpt: "PwC's 2026 Global Digital Trust Insights survey, conducted across 3,887 business and technology executives in 72 countries, reveals that cybersecurity has risen to the top tier of board-level concerns across every major industry. The survey found that financial services (21%), industrial manufacturing (21%), and technology, media and telecom (19%) sectors represent the highest concentration of respondents, underscoring the cross-sector urgency of the digital trust imperative.The findings highlight that AI-driven attack methods are prompting accelerated investment in both preventive and detection-oriented security frameworks. Executives report that the attack surface has expanded dramatically with the proliferation of generative AI tools inside enterprises — as every AI integration creates a new potential entry point for adversarial prompt injection, data exfiltration, and credential harvesting. ",
  author: "Sagar Kumar",
  time: "30 April 2026",
  image: "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  };

const hero1 = {
  category: "CYBER THREAT INTELLIGENCE",
  title: "KPMG: AI-Dominated Business Environments Raise Security Stakes  ",
  excerpt: "KPMG's Global Tech Report 2026, drawing on responses from 2,500 technology executives across 27 countries, identifies cybersecurity as the foundational prerequisite for realizing the full value of AI investment. The report warns that organizations rushing to scale AI deployments are outpacing their security frameworks, creating dangerous gaps between innovation velocity and risk management maturity.Notably, 50% of surveyed executives reported expectations of reaching top technology maturity in 2026, yet a significant share acknowledged that tech debt, cost pressures, and talent shortages remain the principal barriers. Security teams are being asked to simultaneously defend legacy systems while architecting protections for AI-native infrastructure — a dual mandate that is straining capacity across most enterprise IT organizations.  ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: CS2Img,
};

const hero2 = {
  category: "CYBER THREAT INTELLIGENCE",
  title: "KPMG: AI-Dominated Business Environments Raise Security Stakes  ",
  excerpt: "KPMG's Global Tech Report 2026, drawing on responses from 2,500 technology executives across 27 countries, identifies cybersecurity as the foundational prerequisite for realizing the full value of AI investment. The report warns that organizations rushing to scale AI deployments are outpacing their security frameworks, creating dangerous gaps between innovation velocity and risk management maturity.Notably, 50% of surveyed executives reported expectations of reaching top technology maturity in 2026, yet a significant share acknowledged that tech debt, cost pressures, and talent shortages remain the principal barriers. Security teams are being asked to simultaneously defend legacy systems while architecting protections for AI-native infrastructure — a dual mandate that is straining capacity across most enterprise IT organizations.  ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: CS3Img,
};

const threatAlerts = [
  { id: 1, severity: "CRITICAL", title: "CVE-2026-1247: Zero-Day in OpenSSL Affects 400M Servers Worldwide", time: "2 hrs ago" },
  { id: 2, severity: "HIGH", title: "BlackCat Ransomware Group Targets Healthcare Organizations in 12 Countries", time: "4 hrs ago" },
  { id: 3, severity: "HIGH", title: "Lazarus Group Steals $340M from Crypto Exchange Using Novel Smart Contract Exploit", time: "6 hrs ago" },
  { id: 4, severity: "MEDIUM", title: "Phishing Campaign Impersonating IMF Emails Targets G20 Finance Ministries", time: "8 hrs ago" },
  { id: 5, severity: "MEDIUM", title: "New Android Spyware Found in 230 Apps on Google Play Store", time: "10 hrs ago" },
];

const threatColor: Record<string, string> = {
  CRITICAL: "bg-red-600 text-white",
  HIGH: "bg-orange-500 text-white",
  MEDIUM: "bg-yellow-500 text-black",
  LOW: "bg-blue-500 text-white",
};

const stories = [
  { id: 1, category: "RANSOMWARE", title: "LockBit 4.0 Launches Unprecedented Attack on UK National Health Service Systems", time: "3 hrs ago", image: "https://images.unsplash.com/photo-1768839722988-91767bb82b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 2, category: "AI SECURITY", title: "GPT-7 Used to Generate Undetectable Phishing Emails at Scale — New Research", time: "5 hrs ago", image: "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 3, category: "DATA BREACH", title: "1.4 Billion User Records Exposed in Major Social Media Platform Breach", time: "7 hrs ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: 4, category: "AI SYSTEMS", title: "Hackers exploit AI-powered customer support systems and breach Amazon's One Medical, exposing sensitive healthcare records.", time: "Just now", image: "https://images.unsplash.com/photo-1768839722988-91767bb82b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

const defenseNews = [
  { id: 1, title: "Pentagon's Cyber Command Gets $8.7B Budget Increase for FY2027", time: "2 hrs ago" },
  { id: 2, title: "EU's Cyber Solidarity Act Creates €1.1B Emergency Cyber Response Fund", time: "4 hrs ago" },
  { id: 3, title: "India's CERT-In Mandates 6-Hour Breach Notification for All Critical Infrastructure", time: "6 hrs ago" },
  { id: 4, title: "NATO Activates Article 5 Cyber Defense Clause for First Time in History", time: "8 hrs ago" },
  { id: 5, title: "Australia Bans All Chinese Technology from Government Networks by 2027", time: "10 hrs ago" },
];

const marketData = [
  { company: "CrowdStrike", ticker: "CRWD", price: "$342.50", change: "+4.2%", up: true },
  { company: "Palo Alto Networks", ticker: "PANW", price: "$287.30", change: "+2.8%", up: true },
  { company: "Fortinet", ticker: "FTNT", price: "$76.90", change: "+1.9%", up: true },
  { company: "Zscaler", ticker: "ZS", price: "$198.40", change: "+3.5%", up: true },
  { company: "SentinelOne", ticker: "S", price: "$29.80", change: "-0.8%", up: false },
];

export function CybersecurityPage() {
  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2 flex items-center gap-3">
        <Shield size={22} />
        <div>
          <span className="text-xs text-gray-500 uppercase tracking-widest">Security Intelligence</span>
          <h1 className="mt-0.5">Cybersecurity</h1>
        </div>
      </div>

      {/* Hero */}
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
            <span className="flex items-center gap-1"><Clock size={10} /> {hero.time}</span>
          </div>
        </div>

        {/* Threat alerts */}
        <div>
          <div className="border-b-2 border-black pb-2 mb-3 flex items-center gap-2">
            <AlertTriangle size={14} className="text-red-600" />
            <h2 className="uppercase tracking-wider">Live Threat Alerts</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {threatAlerts.map((a) => (
              <div key={a.id} className="py-2.5 group cursor-pointer">
                <span className={`text-xs px-1.5 py-0.5 rounded ${threatColor[a.severity]}`}>{a.severity}</span>
                <p className="text-sm leading-snug mt-1 group-hover:text-red-600 transition-colors">{a.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-0">
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

               <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-0">
        <div className="lg:col-span-42">
<div className="mt-8 overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 text-sm">
    <tbody>
      <tr>
        <td className=" p-3 border border-gray-300">
          AI-Assisted Phishing 
        </td>
        <td className="p-3 border border-gray-300">
          MFA Enforcement 
        </td>
        <td className="p-3 border border-gray-300">
          Data Breach / Ransom  
        </td>
        <td className="p-3 border border-gray-300">
          Immediate  
        </td>
      </tr>

      <tr>
        <td className="bg-slate-200  p-3 border border-gray-300">
          SaaS Credential Theft 
        </td>
        <td className="bg-slate-200 p-3 border border-gray-300">
          Access Privilege Review 
        </td>
         <td className="bg-slate-200 p-3 border border-gray-300">
          IP / Client Data Loss 
        </td>
         <td className="bg-slate-200 p-3 border border-gray-300">
          24–48 Hours 
        </td>
      </tr>

      <tr>
        <td className="p-3 border border-gray-300">
          Ransomware-as-a-Service 
        </td>
        <td className="p-3 border border-gray-300">
          Endpoint Protection + Backup 
        </td>
        <td className="p-3 border border-gray-300">
          Business Continuity  
        </td>
        <td className="p-3 border border-gray-300">
          Ongoing 
        </td>
      </tr>

      <tr>
        <td className="bg-slate-200  p-3 border border-gray-300">
          Vendor/Supply Chain Attack 
        </td>
        <td className="bg-slate-200 p-3 border border-gray-300">
          Third-Party Risk Audits 
        </td>
        <td className="bg-slate-200 p-3 border border-gray-300">
          Regulatory Exposure 
        </td>
        <td className="bg-slate-200 p-3 border border-gray-300">
          Quarterly  
        </td>
      </tr>

      <tr>
        <td className=" p-3 border border-gray-300">
          Prompt Injection (AI Models) 
        </td>
        <td className="p-3 border border-gray-300">
          AI Security Layer / WAF 
        </td>
        <td className="p-3 border border-gray-300">
          Data Manipulation 
        </td>
        <td className="p-3 border border-gray-300">
          Emerging Priority 
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>
</div>

      {/* Feature stories */}
      <div className="mb-8">
        <SH title="Latest Cyber Incidents" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stories.map((s) => (
            <div key={s.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded mb-3">
                <ImageWithFallback src={s.image} alt={s.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-xs text-red-600 uppercase tracking-wider">{s.category}</span>
              <h3 className="mt-1 leading-snug group-hover:text-red-600 transition-colors">{s.title}</h3>
              <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsored */}
      <SponsoredArticleCard
        headline="Palo Alto Networks: The Architecture of Zero-Trust Security in 2026"
        excerpt="How the industry's leading NGFW platform is protecting 85,000 enterprises against next-generation threats using AI-powered threat intelligence and automated response."
        advertiser="Palo Alto Networks"
        category="SPONSORED · CYBERSECURITY"
        readTime={6}
        image="https://images.unsplash.com/photo-1768839721176-2fa91fdce725?w=800&h=400&fit=crop"
        link="#"
        disclosureText="Paid content by Palo Alto Networks. Does not reflect editorial opinion of The Pride Times."
      />

      {/* Defense news + Cyber market */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <SH title="Policy & Defense" />
          <div className="divide-y divide-gray-100">
            {defenseNews.map((n) => (
              <div key={n.id} className="py-2.5 group cursor-pointer">
                <p className="text-sm group-hover:text-red-600 transition-colors">{n.title}</p>
                <span className="text-xs text-gray-400 flex items-center gap-1 mt-1"><Clock size={10} />{n.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SH title="Cyber Stocks" />
          <div className="divide-y divide-gray-100">
            {marketData.map((m) => (
              <div key={m.ticker} className="py-2.5 flex items-center justify-between">
                <div>
                  <p className="text-sm">{m.company}</p>
                  <p className="text-xs text-gray-400">{m.ticker}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{m.price}</p>
                  <p className={`text-xs ${m.up ? "text-green-600" : "text-red-600"}`}>{m.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
