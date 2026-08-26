import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  Shield,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { SponsoredArticleCard } from "../ads/SponsoredArticleCard";
import CS2Img from "../../../imports/CS2.png";
import CS3Img from "../../../imports/CS3.png";

function SH({ title, id }: { title: string; id?: string }) {
  return (
    <div
      id={id}
      className="border-b border-black mb-3 pb-1.5 flex items-center justify-between"
    >
      <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-black">
        {title}
      </h2>

      <ChevronRight size={13} className="text-gray-500" />
    </div>
  );
}

const hero = {
  category: "CYBER THREAT INTELLIGENCE",
  title:
    "PwC 2026 Global Digital Trust Insights: Enterprises Escalate Defense Spending ",
  excerpt:
    "PwC's 2026 Global Digital Trust Insights survey, conducted across 3,887 business and technology executives in 72 countries, reveals that cybersecurity has risen to the top tier of board-level concerns across every major industry. The survey found that financial services (21%), industrial manufacturing (21%), and technology, media and telecom (19%) sectors represent the highest concentration of respondents, underscoring the cross-sector urgency of the digital trust imperative.The findings highlight that AI-driven attack methods are prompting accelerated investment in both preventive and detection-oriented security frameworks. Executives report that the attack surface has expanded dramatically with the proliferation of generative AI tools inside enterprises — as every AI integration creates a new potential entry point for adversarial prompt injection, data exfiltration, and credential harvesting. ",
  author: "Sagar Kumar",
  time: "30 April 2026",
  image:
    "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
};

const hero1 = {
  category: "CYBER THREAT INTELLIGENCE",
  title: "KPMG: AI-Dominated Business Environments Raise Security Stakes  ",
  excerpt:
    "KPMG's Global Tech Report 2026, drawing on responses from 2,500 technology executives across 27 countries, identifies cybersecurity as the foundational prerequisite for realizing the full value of AI investment. The report warns that organizations rushing to scale AI deployments are outpacing their security frameworks, creating dangerous gaps between innovation velocity and risk management maturity.Notably, 50% of surveyed executives reported expectations of reaching top technology maturity in 2026, yet a significant share acknowledged that tech debt, cost pressures, and talent shortages remain the principal barriers. Security teams are being asked to simultaneously defend legacy systems while architecting protections for AI-native infrastructure — a dual mandate that is straining capacity across most enterprise IT organizations.  ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: CS2Img,
};

const hero2 = {
  category: "CYBER THREAT INTELLIGENCE",
  title: "KPMG: AI-Dominated Business Environments Raise Security Stakes  ",
  excerpt:
    "KPMG's Global Tech Report 2026, drawing on responses from 2,500 technology executives across 27 countries, identifies cybersecurity as the foundational prerequisite for realizing the full value of AI investment. The report warns that organizations rushing to scale AI deployments are outpacing their security frameworks, creating dangerous gaps between innovation velocity and risk management maturity.Notably, 50% of surveyed executives reported expectations of reaching top technology maturity in 2026, yet a significant share acknowledged that tech debt, cost pressures, and talent shortages remain the principal barriers. Security teams are being asked to simultaneously defend legacy systems while architecting protections for AI-native infrastructure — a dual mandate that is straining capacity across most enterprise IT organizations.  ",
  author: "Sagar Kumar",
  time: "June 2026",
  image: CS3Img,
};

const threatAlerts = [
  {
    id: 1,
    severity: "CRITICAL",
    title:
      "CVE-2026-1247: Zero-Day in OpenSSL Affects 400M Servers Worldwide",
    time: "2 hrs ago",
  },
  {
    id: 2,
    severity: "HIGH",
    title:
      "BlackCat Ransomware Group Targets Healthcare Organizations in 12 Countries",
    time: "4 hrs ago",
  },
  {
    id: 3,
    severity: "HIGH",
    title:
      "Lazarus Group Steals $340M from Crypto Exchange Using Novel Smart Contract Exploit",
    time: "6 hrs ago",
  },
  {
    id: 4,
    severity: "MEDIUM",
    title:
      "Phishing Campaign Impersonating IMF Emails Targets G20 Finance Ministries",
    time: "8 hrs ago",
  },
  {
    id: 5,
    severity: "MEDIUM",
    title:
      "New Android Spyware Found in 230 Apps on Google Play Store",
    time: "10 hrs ago",
  },
];

const threatColor: Record<string, string> = {
  CRITICAL: "bg-red-600 text-white",
  HIGH: "bg-orange-500 text-white",
  MEDIUM: "bg-yellow-400 text-black",
  LOW: "bg-blue-500 text-white",
};

const stories = [
  {
    id: 1,
    category: "RANSOMWARE",
    title:
      "LockBit 4.0 Launches Unprecedented Attack on UK National Health Service Systems",
    time: "3 hrs ago",
    image:
      "https://images.unsplash.com/photo-1768839722988-91767bb82b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    category: "AI SECURITY",
    title:
      "GPT-7 Used to Generate Undetectable Phishing Emails at Scale — New Research",
    time: "5 hrs ago",
    image:
      "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    category: "DATA BREACH",
    title:
      "1.4 Billion User Records Exposed in Major Social Media Platform Breach",
    time: "7 hrs ago",
    image:
      "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    category: "AI SYSTEMS",
    title:
      "Hackers exploit AI-powered customer support systems and breach Amazon's One Medical, exposing sensitive healthcare records.",
    time: "Just now",
    image:
      "https://images.unsplash.com/photo-1768839722988-91767bb82b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const defenseNews = [
  {
    id: 1,
    title: "Pentagon's Cyber Command Gets $8.7B Budget Increase for FY2027",
    time: "2 hrs ago",
  },
  {
    id: 2,
    title:
      "EU's Cyber Solidarity Act Creates €1.1B Emergency Cyber Response Fund",
    time: "4 hrs ago",
  },
  {
    id: 3,
    title:
      "India's CERT-In Mandates 6-Hour Breach Notification for All Critical Infrastructure",
    time: "6 hrs ago",
  },
  {
    id: 4,
    title:
      "NATO Activates Article 5 Cyber Defense Clause for First Time in History",
    time: "8 hrs ago",
  },
  {
    id: 5,
    title:
      "Australia Bans All Chinese Technology from Government Networks by 2027",
    time: "10 hrs ago",
  },
];

const marketData = [
  {
    company: "CrowdStrike",
    ticker: "CRWD",
    price: "$342.50",
    change: "+4.2%",
    up: true,
  },
  {
    company: "Palo Alto Networks",
    ticker: "PANW",
    price: "$287.30",
    change: "+2.8%",
    up: true,
  },
  {
    company: "Fortinet",
    ticker: "FTNT",
    price: "$76.90",
    change: "+1.9%",
    up: true,
  },
  {
    company: "Zscaler",
    ticker: "ZS",
    price: "$198.40",
    change: "+3.5%",
    up: true,
  },
  {
    company: "SentinelOne",
    ticker: "S",
    price: "$29.80",
    change: "-0.8%",
    up: false,
  },
];

export function CybersecurityPage() {
  return (
    <main className="bg-white text-black w-full">
      <div className="max-w-[1180px] mx-auto px-4 md:px-6 lg:px-8 py-5">

        {/* =========================================================
            PAGE HEADER
        ========================================================= */}
        <header className="border-b-[3px] border-black pb-2 mb-5">
          <div className="flex items-center gap-2">
            <Shield size={21} strokeWidth={2} />

            <div>
              <span className="block text-[9px] uppercase tracking-[0.18em] text-gray-500">
                Security Intelligence
              </span>

              <h1 className="text-[30px] md:text-[38px] lg:text-[42px] font-bold leading-none tracking-[-0.04em]">
                Cybersecurity
              </h1>
            </div>
          </div>
        </header>

        {/* =========================================================
            TOP HERO AREA
        ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.9fr)] border-b border-gray-300 pb-6 mb-6">

          {/* MAIN HERO */}
          <article className="lg:pr-6 lg:border-r border-gray-300 group cursor-pointer">

            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={hero.image}
                alt={hero.title}
                className="w-full h-[270px] md:h-[340px] lg:h-[390px] object-cover group-hover:scale-[1.015] transition-transform duration-500"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
              {hero.category}
            </span>

            <h2 className="mt-1.5 text-[25px] md:text-[30px] lg:text-[34px] font-bold leading-[1.05] tracking-[-0.025em] group-hover:text-red-700 transition-colors">
              {hero.title}
            </h2>

            <p className="text-[13px] leading-[1.5] text-gray-600 mt-2 max-w-[850px]">
              {hero.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-3 text-[10px] text-gray-500">
              <span>By {hero.author}</span>

              <span className="flex items-center gap-1">
                <Clock size={10} />
                {hero.time}
              </span>
            </div>
          </article>

          {/* THREAT ALERT SIDEBAR */}
          <aside className="lg:pl-5 mt-6 lg:mt-0">

            <div className="border-b-2 border-black pb-1.5 mb-1 flex items-center gap-2">
              <AlertTriangle
                size={13}
                className="text-red-600"
              />

              <h2 className="text-[12px] font-bold uppercase tracking-[0.08em]">
                Live Threat Alerts
              </h2>
            </div>

            <div>
              {threatAlerts.map((a) => (
                <article
                  key={a.id}
                  className="py-3 border-b border-gray-200 group cursor-pointer"
                >
                  <span
                    className={`inline-block text-[8px] font-bold px-1.5 py-0.5 ${threatColor[a.severity]}`}
                  >
                    {a.severity}
                  </span>

                  <p className="text-[12px] leading-[1.3] font-semibold mt-1 group-hover:text-red-600 transition-colors">
                    {a.title}
                  </p>

                  <span className="text-[9px] text-gray-500 flex items-center gap-1 mt-1">
                    <Clock size={9} />
                    {a.time}
                  </span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {/* =========================================================
            SECONDARY FEATURE STORIES
        ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b border-gray-300 pb-6 mb-6">

          {/* HERO 1 */}
          <article className="group cursor-pointer border-b md:border-b-0 md:border-r border-gray-300 md:pr-5">

            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={hero1.image}
                alt={hero1.title}
                className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-[1.015] transition-transform duration-500"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
              {hero1.category}
            </span>

            <h2 className="text-[21px] md:text-[24px] font-bold leading-[1.08] tracking-[-0.02em] mt-1 group-hover:text-red-600 transition-colors">
              {hero1.title}
            </h2>

            <p className="text-[12px] text-gray-600 leading-[1.45] mt-2">
              {hero1.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-2 text-[9px] text-gray-500">
              <span>By {hero1.author}</span>

              <span className="flex items-center gap-1">
                <Clock size={9} />
                {hero1.time}
              </span>
            </div>
          </article>

          {/* HERO 2 */}
          <article className="group cursor-pointer">

            <div className="overflow-hidden mb-3">
              <ImageWithFallback
                src={hero2.image}
                alt={hero2.title}
                className="w-full h-[220px] md:h-[260px] object-cover group-hover:scale-[1.015] transition-transform duration-500"
              />
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
              {hero2.category}
            </span>

            <h2 className="text-[21px] md:text-[24px] font-bold leading-[1.08] tracking-[-0.02em] mt-1 group-hover:text-red-600 transition-colors">
              {hero2.title}
            </h2>

            <p className="text-[12px] text-gray-600 leading-[1.45] mt-2">
              {hero2.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-2 text-[9px] text-gray-500">
              <span>By {hero2.author}</span>

              <span className="flex items-center gap-1">
                <Clock size={9} />
                {hero2.time}
              </span>
            </div>
          </article>
        </section>

        {/* =========================================================
            CYBERSECURITY RISK MATRIX
        ========================================================= */}
        <section className="border-b border-gray-300 pb-6 mb-7">

          <SH title="Cyber Risk Response Matrix" />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11px] min-w-[650px]">

              <tbody>
                <tr className="bg-black text-white">
                  <td className="p-2.5 font-bold border border-gray-700">
                    Threat
                  </td>

                  <td className="p-2.5 font-bold border border-gray-700">
                    Recommended Defense
                  </td>

                  <td className="p-2.5 font-bold border border-gray-700">
                    Business Impact
                  </td>

                  <td className="p-2.5 font-bold border border-gray-700">
                    Response
                  </td>
                </tr>

                <tr>
                  <td className="p-2.5 border border-gray-300 font-semibold">
                    AI-Assisted Phishing
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    MFA Enforcement
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Data Breach / Ransom
                  </td>

                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Immediate
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-2.5 border border-gray-300 font-semibold">
                    SaaS Credential Theft
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Access Privilege Review
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    IP / Client Data Loss
                  </td>

                  <td className="p-2.5 border border-gray-300 font-semibold">
                    24–48 Hours
                  </td>
                </tr>

                <tr>
                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Ransomware-as-a-Service
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Endpoint Protection + Backup
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Business Continuity
                  </td>

                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Ongoing
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Vendor/Supply Chain Attack
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Third-Party Risk Audits
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Regulatory Exposure
                  </td>

                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Quarterly
                  </td>
                </tr>

                <tr>
                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Prompt Injection (AI Models)
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    AI Security Layer / WAF
                  </td>

                  <td className="p-2.5 border border-gray-300">
                    Data Manipulation
                  </td>

                  <td className="p-2.5 border border-gray-300 font-semibold">
                    Emerging Priority
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================
            LATEST CYBER INCIDENTS
        ========================================================= */}
        <section className="mb-8">

          <SH title="Latest Cyber Incidents" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {stories.map((s) => (
              <article
                key={s.id}
                className="group cursor-pointer border-b border-gray-200 pb-4"
              >

                <div className="overflow-hidden mb-2">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[145px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-red-600">
                  {s.category}
                </span>

                <h3 className="text-[14px] font-bold leading-[1.2] mt-1 group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>

                <span className="text-[9px] text-gray-500 flex items-center gap-1 mt-2">
                  <Clock size={9} />
                  {s.time}
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            SPONSORED ARTICLE
        ========================================================= */}
        <section className="border-t border-b border-gray-300 py-5 mb-7">
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
        </section>

        {/* =========================================================
            POLICY + STOCKS
        ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* POLICY */}
          <div>
            <SH title="Policy & Defense" />

            <div>
              {defenseNews.map((n) => (
                <article
                  key={n.id}
                  className="py-2.5 border-b border-gray-200 group cursor-pointer"
                >
                  <p className="text-[13px] font-semibold leading-[1.25] group-hover:text-red-600 transition-colors">
                    {n.title}
                  </p>

                  <span className="text-[9px] text-gray-500 flex items-center gap-1 mt-1">
                    <Clock size={9} />
                    {n.time}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* CYBER STOCKS */}
          <div>
            <SH title="Cyber Stocks" />

            <div className="border-t border-gray-300">

              {marketData.map((m) => (
                <div
                  key={m.ticker}
                  className="grid grid-cols-[1fr_auto_auto] gap-5 items-center py-2.5 border-b border-gray-200"
                >

                  <div>
                    <p className="text-[12px] font-semibold">
                      {m.company}
                    </p>

                    <p className="text-[9px] text-gray-500 uppercase">
                      {m.ticker}
                    </p>
                  </div>

                  <p className="text-[12px] font-semibold">
                    {m.price}
                  </p>

                  <p
                    className={`text-[11px] font-bold ${
                      m.up ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {m.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM EDITORIAL GRID
        ========================================================= */}
        <section className="border-t-[3px] border-black pt-3">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div>
              <span className="text-[8px] uppercase tracking-[0.15em] text-gray-500">
                Security
              </span>

              <p className="text-[11px] font-bold mt-1">
                Cyber Threat Intelligence
              </p>
            </div>

            <div>
              <span className="text-[8px] uppercase tracking-[0.15em] text-gray-500">
                Technology
              </span>

              <p className="text-[11px] font-bold mt-1">
                AI Security
              </p>
            </div>

            <div>
              <span className="text-[8px] uppercase tracking-[0.15em] text-gray-500">
                Markets
              </span>

              <p className="text-[11px] font-bold mt-1">
                Cybersecurity Stocks
              </p>
            </div>

            <div>
              <span className="text-[8px] uppercase tracking-[0.15em] text-gray-500">
                Policy
              </span>

              <p className="text-[11px] font-bold mt-1">
                Global Cyber Defense
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
