import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, ChevronRight, ShieldAlert, Zap, LockKeyhole, ServerCrash } from "lucide-react";
import { PrideTimesAd } from "../AdSenseSlots";

/* =========================================================
   ARTICLE ROUTING
========================================================= */

function cyberArticlePath(id: string) {
  return `/article/${id}`;
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="flex items-center justify-between border-b-2 border-[#17140F] pb-2.5 mb-5"
    >
      <h2 className="font-serif text-[21px] md:text-[24px] font-bold text-[#17140F]">
        {title}
      </h2>

      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
        Cyber Desk
        <ChevronRight size={12} />
      </span>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

const hero = {
  category: "CYBER THREAT INTELLIGENCE",
  title:
    "AI Accelerates Cyber Threats as Organizations Face a 48-Hour Patching Window",
  excerpt:
    "Cyber threats have escalated in sophistication and frequency in 2026 as artificial intelligence accelerates both offensive and defensive capabilities. Attackers are increasingly using AI to identify vulnerabilities and weaponize weaknesses faster, forcing organizations to compress the time between disclosure, validation and remediation.",
  author: "The Pride Times Editorial Desk",
  time: "September 2026",
  image:
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85",
};

/* =========================================================
   FEATURED SECONDARY STORIES
========================================================= */

const featuredStories = [
  {
    id: "cybersecurity-48-hour-patching",
    category: "PATCH MANAGEMENT",
    title:
      "The 48-Hour Security Clock: Why Critical Vulnerabilities Are Becoming an Operational Deadline",
    excerpt:
      "Security teams are under increasing pressure to move from vulnerability discovery to remediation within approximately 48 hours for critical flaws.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cybersecurity-power-sector-risk",
    category: "CRITICAL INFRASTRUCTURE",
    title:
      "Power, Utilities and Manufacturing Move Higher on the Cyber Risk Agenda",
    excerpt:
      "Energy systems and industrial infrastructure are becoming increasingly important targets as geopolitical tensions reshape the threat landscape.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
  },
];

/* =========================================================
   THREAT ALERTS
========================================================= */

const threatAlerts = [
  {
    id: "cybersecurity-48-hour-patching",
    severity: "CRITICAL",
    title:
      "Organizations face an increasingly compressed window to patch critical vulnerabilities",
    time: "Today",
  },
  {
    id: "cybersecurity-ai-offensive-defense",
    severity: "CRITICAL",
    title:
      "AI is accelerating both offensive cyber operations and automated defensive response",
    time: "Today",
  },
  {
    id: "cybersecurity-energy-sector",
    severity: "HIGH",
    title:
      "Cybersecurity spending in the global energy sector continues to expand",
    time: "Today",
  },
  {
    id: "cybersecurity-power-sector-risk",
    severity: "HIGH",
    title:
      "Power infrastructure emerges as a strategically important cybersecurity target",
    time: "Today",
  },
  {
    id: "cybersecurity-critical-infrastructure",
    severity: "HIGH",
    title:
      "Utilities, grids and industrial systems face elevated critical-infrastructure risk",
    time: "Today",
  },
];

/* =========================================================
   LATEST CYBERSECURITY STORIES
========================================================= */

const stories = [
  {
    id: "cybersecurity-ai-offensive-defense",
    category: "AI SECURITY",
    title:
      "AI Is Accelerating Both Offensive and Defensive Cybersecurity Capabilities",
    excerpt:
      "Artificial intelligence is changing the speed at which attackers discover weaknesses while also giving defenders new tools for detection, triage and response.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cybersecurity-48-hour-patching",
    category: "VULNERABILITY MANAGEMENT",
    title:
      "The 48-Hour Patching Window Is Becoming a New Cybersecurity Operating Standard",
    excerpt:
      "Organizations are increasingly being pushed toward rapid remediation as attackers reduce the time between vulnerability discovery and exploitation.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cybersecurity-energy-sector",
    category: "ENERGY SECURITY",
    title:
      "Global Energy Cybersecurity Market Expands as Critical Infrastructure Risk Rises",
    excerpt:
      "Energy companies are increasing security investment as power generation, transmission and operational technology systems become increasingly connected.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cybersecurity-critical-infrastructure",
    category: "CRITICAL INFRASTRUCTURE",
    title:
      "Utilities, Grids and Manufacturing Face Elevated State-Sponsored Cyber Risk",
    excerpt:
      "The cybersecurity challenge is expanding beyond corporate networks into physical infrastructure that supports economies and essential services.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cybersecurity-thailand-manufacturing",
    category: "MANUFACTURING",
    title:
      "Manufacturers in Southeast Asia Put Cybersecurity Alongside AI and Digitalization",
    excerpt:
      "Industrial companies are increasingly treating cybersecurity as a core part of digital transformation rather than a separate IT function.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cybersecurity-regulatory-trends",
    category: "REGULATION",
    title:
      "Governments Accelerate Critical-Infrastructure Cybersecurity Requirements",
    excerpt:
      "The combination of AI-enabled attacks and infrastructure exposure is increasing pressure for updated national cybersecurity frameworks.",
    time: "Today",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
  },
];

/* =========================================================
   AI & NATIONAL INFRASTRUCTURE
========================================================= */

const aiInfraStories = [
  {
    id: "cybersecurity-ai-offensive-defense",
    title:
      "AI-assisted attackers can automate vulnerability research, reconnaissance and parts of exploit development, compressing the defensive response cycle.",
    time: "Today",
  },
  {
    id: "cybersecurity-48-hour-patching",
    title:
      "The move toward a 48-hour remediation window is changing how enterprises prioritize vulnerability management and emergency patching.",
    time: "Today",
  },
  {
    id: "cybersecurity-energy-sector",
    title:
      "Energy companies are increasing cyber investment as operational technology becomes more connected to enterprise and cloud environments.",
    time: "Today",
  },
  {
    id: "cybersecurity-power-sector-risk",
    title:
      "Power-sector infrastructure is strategically exposed because disruption can create consequences beyond conventional data loss.",
    time: "Today",
  },
  {
    id: "cybersecurity-critical-infrastructure",
    title:
      "Critical infrastructure operators are strengthening segmentation, monitoring and incident-response capabilities against sophisticated threats.",
    time: "Today",
  },
];

/* =========================================================
   ZERO TRUST
========================================================= */

const zeroTrustNote = {
  title: "Zero-Trust Implication: Reduce the Blast Radius",
  body:
    "As AI tools and automated systems receive broader access to enterprise data and applications, identity and authorization become increasingly important control points. Security architectures are moving toward least-privilege access, segmented environments, continuous monitoring, strong authentication and explicit approval for high-impact actions.",
};

/* =========================================================
   SECURITY RESPONSE MATRIX
========================================================= */

const responseMatrix = [
  {
    threat: "AI-Assisted Vulnerability Exploitation",
    control: "Continuous Exposure Monitoring",
    risk: "Rapid Compromise",
    cadence: "Immediate",
  },
  {
    threat: "Critical Software Vulnerability",
    control: "Emergency Patch Management",
    risk: "Remote Code Execution",
    cadence: "≤ 48 Hours",
  },
  {
    threat: "AI-Assisted Phishing",
    control: "MFA + Email Security",
    risk: "Credential Theft",
    cadence: "Immediate",
  },
  {
    threat: "Critical Infrastructure Attack",
    control: "Network Segmentation",
    risk: "Operational Disruption",
    cadence: "Continuous",
  },
  {
    threat: "Supply-Chain Compromise",
    control: "Third-Party Risk Monitoring",
    risk: "Systemic Exposure",
    cadence: "Continuous",
  },
  {
    threat: "AI Model / Prompt Attack",
    control: "AI Security Layer + Guardrails",
    risk: "Data Manipulation",
    cadence: "Emerging Priority",
  },
];

/* =========================================================
   REGULATORY / DEFENSE NEWS
========================================================= */

const defenseNews = [
  {
    id: "cybersecurity-regulatory-trends",
    title:
      "Governments accelerate critical-infrastructure cybersecurity requirements as digital risks expand",
    time: "Today",
  },
  {
    id: "cybersecurity-critical-infrastructure",
    title:
      "Utilities and industrial operators strengthen defenses against sophisticated infrastructure attacks",
    time: "Today",
  },
  {
    id: "cybersecurity-ai-offensive-defense",
    title:
      "AI-driven offensive capabilities push governments and enterprises toward new security frameworks",
    time: "Today",
  },
  {
    id: "cybersecurity-energy-sector",
    title:
      "Energy-sector cybersecurity becomes a larger strategic priority as operational technology expands",
    time: "Today",
  },
];

/* =========================================================
   CYBERSECURITY MARKET DATA
========================================================= */

const marketData = [
  {
    company: "Palo Alto Networks",
    ticker: "PANW",
    price: "Cybersecurity",
    change: "Security Platforms",
    up: true,
  },
  {
    company: "CrowdStrike",
    ticker: "CRWD",
    price: "Cybersecurity",
    change: "Endpoint Security",
    up: true,
  },
  {
    company: "Fortinet",
    ticker: "FTNT",
    price: "Cybersecurity",
    change: "Network Security",
    up: true,
  },
  {
    company: "Cloudflare",
    ticker: "NET",
    price: "Cybersecurity",
    change: "Cloud / Network Security",
    up: true,
  },
];

/* =========================================================
   SPONSORSHIP
========================================================= */

const sponsorships = [
  "Cybersecurity Leadership Summit",
  "AI Security Forum",
  "Global Digital Trust Conference",
  "Enterprise Risk Roundtable",
];

/* =========================================================
   PAGE
========================================================= */

export function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F7] text-[#17140F]">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-3 py-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-red-600">
                THE PRIDE TIMES
              </p>

              <h1 className="mt-1 font-serif text-[32px] md:text-[42px] font-bold leading-none tracking-tight">
                Cybersecurity
              </h1>

              <p className="mt-2 max-w-3xl text-[11px] md:text-[12px] leading-[1.6] text-gray-500">
                Cyber threat intelligence, AI security, critical infrastructure
                protection, vulnerability management and the evolving global
                cybersecurity landscape.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-gray-400">
                Cybersecurity Desk
              </p>

              <p className="mt-1 text-[11px] font-semibold text-gray-700">
                The Pride Times Editorial Desk
              </p>
            </div>

          </div>

        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* =================================================
            TOP ADSENSE
        ================================================= */}

        <div className="my-5 md:my-7">
          <PrideTimesAd variant="first" />
        </div>

        {/* =================================================
            HERO + SIDEBAR
        ================================================= */}

        <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,3.25fr)_minmax(280px,1fr)] gap-5 lg:gap-7 mt-4 md:mt-6">

          {/* HERO */}

          <Link
            to={cyberArticlePath("cybersecurity-ai-offensive-defense")}
            className="group block cursor-pointer"
          >

            <div className="overflow-hidden rounded-lg bg-gray-100">

              <ImageWithFallback
                src={hero.image}
                alt={hero.title}
                className="w-full h-[260px] sm:h-[350px] md:h-[440px] lg:h-[500px] xl:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />

            </div>

            <div className="pt-3">

              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.14em] text-red-600">
                {hero.category}
              </span>

              <h2 className="mt-1.5 font-serif text-[25px] sm:text-[29px] md:text-[33px] lg:text-[36px] xl:text-[38px] font-bold leading-[1.08] tracking-tight text-[#17140F] group-hover:text-red-600 transition-colors">
                {hero.title}
              </h2>

              <p className="mt-2.5 text-[12px] md:text-[13px] lg:text-[14px] leading-[1.6] text-[#66625D] max-w-[1100px]">
                {hero.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-[10px] text-gray-400">

                <span className="font-medium text-gray-500">
                  By {hero.author}
                </span>

                <span className="h-3 w-px bg-gray-300" />

                <span className="flex items-center gap-1.5">
                  <Clock size={9} />
                  {hero.time}
                </span>

              </div>

            </div>

          </Link>

          {/* SIDEBAR */}

          <aside className="xl:border-l xl:border-gray-300 xl:pl-6">

            <div className="border border-gray-200 rounded-md overflow-hidden mb-5">

              <div className="px-3 py-2 bg-[#F7F4EC]">
                <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Security Brief
                </span>
              </div>

              <div className="p-4 bg-white">

                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert size={17} className="text-red-600" />

                  <span className="text-[11px] font-bold uppercase tracking-wide">
                    48-Hour Security Clock
                  </span>
                </div>

                <p className="text-[10px] leading-[1.6] text-gray-600">
                  Critical vulnerabilities are increasingly being treated as
                  urgent operational events. Security teams are shortening
                  remediation cycles as attackers automate discovery and
                  exploitation.
                </p>

                <Link
                  to={cyberArticlePath("cybersecurity-48-hour-patching")}
                  className="inline-flex items-center gap-1 mt-3 text-[9px] font-bold uppercase tracking-wider text-red-600 hover:text-red-700"
                >
                  Read the full analysis
                  <ChevronRight size={10} />
                </Link>

              </div>

            </div>

            {/* MORE STORIES */}

            <div className="border-b-2 border-[#17140F] pb-2 mb-1">

              <h3 className="font-bold text-[14px] uppercase tracking-wide">
                Threat Alerts
              </h3>

            </div>

            <div className="divide-y divide-gray-200">

              {threatAlerts.slice(0, 4).map((story) => (

                <Link
                  key={story.id}
                  to={cyberArticlePath(story.id)}
                  className="block py-3 group cursor-pointer"
                >

                  <span
                    className={`inline-block text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 ${
                      story.severity === "CRITICAL"
                        ? "bg-red-600 text-white"
                        : story.severity === "HIGH"
                        ? "bg-orange-500 text-white"
                        : "bg-amber-400 text-black"
                    }`}
                  >
                    {story.severity}
                  </span>

                  <h4 className="mt-1.5 text-[11px] md:text-[12px] font-bold leading-[1.35] text-gray-900 group-hover:text-red-600 transition-colors">
                    {story.title}
                  </h4>

                  <span className="flex items-center gap-1 mt-1 text-[8px] text-gray-400">
                    <Clock size={8} />
                    {story.time}
                  </span>

                </Link>

              ))}

            </div>

          </aside>

        </section>

        {/* =================================================
            FEATURED SECONDARY STORIES
        ================================================= */}

        <section className="mt-10">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {featuredStories.map((story) => (

              <Link
                key={story.id}
                to={cyberArticlePath(story.id)}
                className="group grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-4 border-t-2 border-black pt-3"
              >

                <div className="overflow-hidden rounded-md bg-gray-100 h-[150px] sm:h-[125px]">

                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                </div>

                <div>

                  <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-red-600">
                    {story.category}
                  </span>

                  <h3 className="mt-1.5 font-serif text-[17px] md:text-[19px] font-bold leading-[1.2] group-hover:text-red-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[11px] leading-[1.55] text-gray-500">
                    {story.excerpt}
                  </p>

                  <span className="flex items-center gap-1 mt-2 text-[8px] text-gray-400">
                    <Clock size={8} />
                    {story.time}
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* =================================================
            LATEST CYBERSECURITY NEWS
        ================================================= */}

        <section className="mt-12 md:mt-14">

          <SectionHeader title="Latest Cybersecurity News" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-7 gap-y-8">

            {stories.map((story) => (

              <Link
                key={story.id}
                to={cyberArticlePath(story.id)}
                className="block group cursor-pointer"
              >

                <div className="overflow-hidden rounded-md bg-gray-100">

                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[180px] sm:h-[190px] md:h-[205px] lg:h-[215px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                </div>

                <div className="pt-2.5">

                  <span className="text-[8px] font-bold uppercase tracking-[0.13em] text-red-600">
                    {story.category}
                  </span>

                  <h3 className="mt-1.5 font-serif text-[17px] md:text-[18px] font-bold leading-[1.18] text-[#17140F] group-hover:text-red-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[11px] leading-[1.55] text-gray-500">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center gap-1.5 mt-2 text-[9px] text-gray-400">
                    <Clock size={8} />
                    {story.time}
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* =================================================
            SECOND ADSENSE
        ================================================= */}

        <div className="my-10 md:my-12">
          <PrideTimesAd variant="second" />
        </div>

        {/* =================================================
            SECURITY LANDSCAPE
        ================================================= */}

        <section className="border-t-2 border-black pt-8 mb-12">

          <SectionHeader title="The 2026 Cybersecurity Landscape" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="border border-gray-200 bg-white rounded-md p-5">

              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center mb-3">
                <Zap size={17} className="text-red-600" />
              </div>

              <h3 className="font-serif text-[17px] font-bold">
                Faster Attacks
              </h3>

              <p className="mt-2 text-[11px] leading-[1.65] text-gray-600">
                AI is helping attackers automate reconnaissance, vulnerability
                discovery, social engineering and other parts of offensive
                operations.
              </p>

            </div>

            <div className="border border-gray-200 bg-white rounded-md p-5">

              <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                <ServerCrash size={17} className="text-orange-600" />
              </div>

              <h3 className="font-serif text-[17px] font-bold">
                Infrastructure Exposure
              </h3>

              <p className="mt-2 text-[11px] leading-[1.65] text-gray-600">
                Utilities, energy systems, manufacturing networks and other
                operational technology environments face increasing exposure
                as digital connectivity expands.
              </p>

            </div>

            <div className="border border-gray-200 bg-white rounded-md p-5">

              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                <LockKeyhole size={17} className="text-blue-700" />
              </div>

              <h3 className="font-serif text-[17px] font-bold">
                Defensive Acceleration
              </h3>

              <p className="mt-2 text-[11px] leading-[1.65] text-gray-600">
                Security teams are responding with automated detection,
                identity controls, segmentation, vulnerability intelligence and
                faster incident response.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            AI & NATIONAL INFRASTRUCTURE
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-8 md:gap-10 border-t-2 border-black pt-8 mb-12">

          <div>

            <SectionHeader title="AI & National Infrastructure" />

            <div className="divide-y divide-gray-200">

              {aiInfraStories.map((story) => (

                <Link
                  key={story.id}
                  to={cyberArticlePath(story.id)}
                  className="block py-4 first:pt-0 group cursor-pointer"
                >

                  <p className="text-[13px] md:text-[14px] font-semibold leading-[1.5] text-gray-900 group-hover:text-red-600 transition-colors">
                    {story.title}
                  </p>

                  <span className="flex items-center gap-1.5 mt-1.5 text-[9px] text-gray-400">
                    <Clock size={8} />
                    {story.time}
                  </span>

                </Link>

              ))}

            </div>

          </div>

          {/* ZERO TRUST */}

          <aside className="lg:border-l lg:border-gray-300 lg:pl-7">

            <div className="border-b-2 border-black pb-2 mb-4">

              <h3 className="font-bold text-[13px] uppercase tracking-wide">
                Zero-Trust Watch
              </h3>

            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-md p-5">

              <h4 className="font-bold text-[13px] leading-[1.35]">
                {zeroTrustNote.title}
              </h4>

              <p className="text-[12px] leading-[1.65] text-gray-600 mt-3">
                {zeroTrustNote.body}
              </p>

            </div>

            <Link
              to={cyberArticlePath("cybersecurity-critical-infrastructure")}
              className="mt-4 block border border-gray-200 bg-white rounded-md p-4 group"
            >

              <span className="text-[8px] uppercase font-bold tracking-wider text-red-600">
                Critical Infrastructure
              </span>

              <p className="mt-1 text-[11px] font-bold leading-[1.4] group-hover:text-red-600">
                Explore the changing cyber risk landscape for utilities,
                manufacturing and power infrastructure.
              </p>

            </Link>

          </aside>

        </section>

        {/* =================================================
            THIRD ADSENSE
        ================================================= */}

        <div className="my-10 md:my-12">
          <PrideTimesAd variant="third" />
        </div>

        {/* =================================================
            SECURITY RESPONSE
        ================================================= */}

        <section className="mb-12">

          <SectionHeader title="Security Response" />

          <div className="overflow-x-auto border border-gray-200 rounded-md">

            <table className="w-full min-w-[760px] border-collapse">

              <thead>

                <tr className="border-b-2 border-black">

                  <th className="text-left px-4 py-3 text-[9px] uppercase tracking-wider text-gray-400">
                    Threat
                  </th>

                  <th className="text-left px-3 py-3 text-[9px] uppercase tracking-wider text-gray-400">
                    Control
                  </th>

                  <th className="text-left px-3 py-3 text-[9px] uppercase tracking-wider text-gray-400">
                    Risk
                  </th>

                  <th className="text-right px-4 py-3 text-[9px] uppercase tracking-wider text-gray-400">
                    Response
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-gray-100">

                {responseMatrix.map((item) => (

                  <tr
                    key={item.threat}
                    className="hover:bg-gray-50 transition-colors"
                  >

                    <td className="px-4 py-3.5 text-[12px] font-semibold">
                      {item.threat}
                    </td>

                    <td className="px-3 py-3.5 text-[12px] text-gray-600">
                      {item.control}
                    </td>

                    <td className="px-3 py-3.5 text-[11px] text-gray-500">
                      {item.risk}
                    </td>

                    <td className="px-4 py-3.5 text-right">

                      <span
                        className={`inline-block rounded px-2 py-1 text-[9px] font-bold uppercase ${
                          item.cadence.includes("48")
                            ? "bg-red-50 text-red-700"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.cadence}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* =================================================
            POLICY + CYBERSECURITY MARKET
        ================================================= */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 border-t-2 border-black pt-8 mb-12">

          {/* POLICY */}

          <div>

            <SectionHeader title="Policy & Regulatory Trends" />

            <div className="divide-y divide-gray-200">

              {defenseNews.map((item) => (

                <Link
                  key={item.id}
                  to={cyberArticlePath(item.id)}
                  className="block py-4 first:pt-0 group cursor-pointer"
                >

                  <h3 className="text-[13px] md:text-[14px] font-semibold leading-[1.45] group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <span className="flex items-center gap-1.5 mt-1.5 text-[9px] text-gray-400">
                    <Clock size={8} />
                    {item.time}
                  </span>

                </Link>

              ))}

            </div>

          </div>

          {/* CYBERSECURITY COMPANIES */}

          <div>

            <SectionHeader title="Cybersecurity Companies" />

            <div className="divide-y divide-gray-200">

              {marketData.map((stock) => (

                <div
                  key={stock.ticker}
                  className="py-4 first:pt-0 flex items-center justify-between"
                >

                  <div>

                    <p className="text-[13px] md:text-[14px] font-semibold">
                      {stock.company}
                    </p>

                    <p className="text-[9px] text-gray-400 uppercase tracking-wider mt-0.5">
                      {stock.ticker}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[10px] font-semibold text-gray-700">
                      {stock.price}
                    </p>

                    <p
                      className={`text-[9px] font-bold mt-0.5 ${
                        stock.up
                          ? "text-green-700"
                          : "text-red-600"
                      }`}
                    >
                      {stock.change}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            ENERGY SECURITY FEATURE
        ================================================= */}

        <section className="border-t-2 border-black pt-8 mb-12">

          <SectionHeader title="Energy & Industrial Cybersecurity" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-7">

            <Link
              to={cyberArticlePath("cybersecurity-energy-sector")}
              className="group"
            >

              <div className="overflow-hidden rounded-lg bg-gray-100">

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85"
                  alt="Energy infrastructure cybersecurity"
                  className="w-full h-[250px] md:h-[330px] object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />

              </div>

              <span className="block mt-3 text-[8px] font-bold uppercase tracking-[0.14em] text-red-600">
                ENERGY SECURITY
              </span>

              <h3 className="mt-1.5 font-serif text-[23px] md:text-[28px] font-bold leading-[1.12] group-hover:text-red-600 transition-colors">
                Global Energy Cybersecurity Becomes a Larger Strategic Priority
              </h3>

              <p className="mt-2 text-[11px] md:text-[12px] leading-[1.6] text-gray-600">
                Energy infrastructure is increasingly connected across
                enterprise networks, operational technology and remote
                environments. That connectivity creates new defensive
                requirements for utilities, generation facilities and grid
                operators.
              </p>

            </Link>

            <div className="space-y-4">

              <Link
                to={cyberArticlePath("cybersecurity-power-sector-risk")}
                className="block border-b border-gray-200 pb-4 group"
              >

                <span className="text-[8px] uppercase font-bold tracking-wider text-red-600">
                  POWER SECTOR
                </span>

                <h4 className="mt-1.5 text-[14px] md:text-[15px] font-bold leading-[1.35] group-hover:text-red-600">
                  Power Infrastructure Emerges as a Strategically Important
                  Cybersecurity Target
                </h4>

                <p className="mt-2 text-[10px] leading-[1.55] text-gray-500">
                  Cyber disruption in power systems can create consequences
                  that extend beyond conventional data loss and into physical
                  operations and essential services.
                </p>

              </Link>

              <Link
                to={cyberArticlePath("cybersecurity-thailand-manufacturing")}
                className="block border-b border-gray-200 pb-4 group"
              >

                <span className="text-[8px] uppercase font-bold tracking-wider text-red-600">
                  MANUFACTURING
                </span>

                <h4 className="mt-1.5 text-[14px] md:text-[15px] font-bold leading-[1.35] group-hover:text-red-600">
                  Southeast Asian Manufacturers Put Cybersecurity Beside AI
                  and Digitalization
                </h4>

                <p className="mt-2 text-[10px] leading-[1.55] text-gray-500">
                  Industrial organizations are increasingly treating security
                  as a core requirement of modernization programs.
                </p>

              </Link>

              <Link
                to={cyberArticlePath("cybersecurity-critical-infrastructure")}
                className="block group"
              >

                <span className="text-[8px] uppercase font-bold tracking-wider text-red-600">
                  INFRASTRUCTURE
                </span>

                <h4 className="mt-1.5 text-[14px] md:text-[15px] font-bold leading-[1.35] group-hover:text-red-600">
                  Critical Infrastructure Operators Increase Focus on
                  Segmentation and Incident Response
                </h4>

              </Link>

            </div>

          </div>

        </section>

        {/* =================================================
            FOURTH ADSENSE
        ================================================= */}

        <div className="my-10 md:my-12">
          <PrideTimesAd variant="fourth" />
        </div>

        {/* =================================================
            REGULATORY TRENDS
        ================================================= */}

        <section className="mb-12">

          <div className="bg-[#071A2D] rounded-lg p-6 md:p-9 text-white">

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

              <div className="max-w-3xl">

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-red-400">
                  REGULATORY TRENDS
                </span>

                <h2 className="mt-2 font-serif text-[24px] md:text-[31px] font-bold leading-[1.12]">
                  Governments Accelerate Critical-Infrastructure Cybersecurity
                  Frameworks
                </h2>

                <p className="mt-3 text-[11px] md:text-[12px] leading-[1.7] text-gray-300">
                  The intersection of artificial intelligence, cyber offense
                  and critical infrastructure is creating pressure for
                  governments to update cybersecurity requirements. Operators
                  are increasingly expected to maintain stronger visibility,
                  incident-response processes, identity controls and
                  resilience measures.
                </p>

                <Link
                  to={cyberArticlePath("cybersecurity-regulatory-trends")}
                  className="inline-flex items-center gap-1.5 mt-5 text-[9px] font-bold uppercase tracking-wider text-white border-b border-red-500 pb-1 hover:text-red-400"
                >
                  Read the regulatory analysis
                  <ChevronRight size={11} />
                </Link>

              </div>

              <div className="lg:w-[280px] border border-white/10 rounded-md p-5 bg-white/5">

                <p className="text-[8px] uppercase tracking-[0.16em] text-gray-400 font-bold">
                  Cybersecurity Priorities
                </p>

                <div className="mt-4 space-y-3">

                  <div>
                    <p className="text-[11px] font-semibold">
                      Faster remediation
                    </p>
                    <p className="text-[9px] text-gray-400">
                      Compress vulnerability response windows
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold">
                      Infrastructure resilience
                    </p>
                    <p className="text-[9px] text-gray-400">
                      Protect operational technology environments
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold">
                      AI security
                    </p>
                    <p className="text-[9px] text-gray-400">
                      Govern AI-enabled offensive and defensive systems
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            SPONSORSHIP
        ================================================= */}

        <section className="bg-[#F7F7F5] rounded-lg border border-gray-100 p-4 md:p-5 mb-10">

          <div className="mb-4">

            <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-gray-500 border border-gray-200 bg-white px-2 py-1 rounded-sm">
              Sponsorship
            </span>

            <span className="ml-2 text-[9px] text-gray-400">
              Presented by our partners
            </span>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

            {sponsorships.map((item) => (

              <div
                key={item}
                className="bg-white border border-gray-200 rounded-md min-h-[90px] flex flex-col items-center justify-center text-center px-3"
              >

                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-2">

                  <span className="text-red-500 text-sm font-bold">
                    ✦
                  </span>

                </div>

                <p className="text-[10px] md:text-[11px] font-bold text-gray-900">
                  {item}
                </p>

                <p className="text-[8px] text-gray-400 mt-1">
                  Sponsored Event
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <section className="bg-[#071A2D] rounded-lg px-5 sm:px-8 md:px-12 py-9 md:py-10 text-center mb-14">

          <h2 className="font-serif text-[24px] md:text-[28px] font-bold text-white">
            Stay Ahead with The Pride Times
          </h2>

          <p className="text-[11px] md:text-[12px] text-gray-300 mt-2">
            Daily cybersecurity intelligence, infrastructure risk and AI
            security briefings delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-2 mt-5 max-w-[520px] mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-md border border-white/10 bg-white/10 px-3 text-[11px] text-white placeholder:text-gray-400 outline-none focus:border-red-500"
            />

            <button className="h-10 px-5 rounded-md bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold transition-colors">
              Subscribe Free
            </button>

          </div>

        </section>

      </div>

    </main>
  );
}

export default CybersecurityPage;
