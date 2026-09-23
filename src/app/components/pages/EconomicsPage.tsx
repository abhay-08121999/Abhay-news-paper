import { ArrowUpRight, BarChart3, CalendarDays, Clock3, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const leadStories = [
  {
    tag: "MONETARY POLICY",
    title: "RBI Holds Its Line as Growth Stays Firm and Inflation Cools",
    dek: "A closer look at the signals shaping India's next rate decision, from food prices to credit demand.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1400&auto=format&fit=crop&q=85",
  },
  {
    tag: "GLOBAL TRADE",
    title: "The New Trade Map Is Being Drawn in Supply Chains, Not Speeches",
    dek: "Manufacturers are quietly rewiring sourcing routes as tariffs, resilience and regional partnerships converge.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=900&auto=format&fit=crop&q=85",
  },
];

const briefs = [
  ["DATA WATCH", "Services activity points to another resilient quarter"],
  ["POLICY", "States turn to capex as revenue growth normalises"],
  ["CURRENCIES", "Rupee volatility eases as dollar demand resets"],
  ["CLIMATE", "Heat stress moves from weather story to balance-sheet risk"],
];

const calendar = [
  { date: "24 SEP", event: "India — Manufacturing PMI", time: "09:30 IST", tone: "high" },
  { date: "25 SEP", event: "US — New home sales", time: "19:30 IST", tone: "medium" },
  { date: "26 SEP", event: "Japan — Inflation reading", time: "05:00 IST", tone: "medium" },
  { date: "30 SEP", event: "India — Fiscal deficit update", time: "17:30 IST", tone: "high" },
];

const indicators = [
  { label: "NIFTY 50", value: "23,446.80", change: "+0.50%", up: true },
  { label: "USD / INR", value: "95.75", change: "+0.16%", up: true },
  { label: "BRENT CRUDE", value: "$100.09", change: "+0.85%", up: true },
  { label: "GOLD", value: "$4,309.27", change: "+1.18%", up: true },
];

function SectionRule({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-[#171717] pb-3 mb-5">
      <span className="h-2 w-2 rounded-full bg-[#e31b23]" />
      <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#171717]">{children}</h2>
      <div className="h-px flex-1 bg-[#dedbd3]" />
    </div>
  );
}

export function EconomicsPage() {
  return (
    <div className="pt-economics-page bg-[#f7f5ef] text-[#171717]">
      <main className="pt-container py-8 sm:py-12 lg:py-16">
        <header className="mb-9 border-b-4 border-[#171717] pb-6 sm:mb-12 sm:pb-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e31b23]">The Pride Times / Analysis Desk</p>
              <h1 className="font-serif text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[6.5rem]">Economics</h1>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#5d5a53] sm:text-right">The forces shaping money, markets, policy and the real economy — explained with context, not noise.</p>
          </div>
          <nav className="mt-7 flex max-w-full gap-5 overflow-x-auto whitespace-nowrap border-t border-[#dedbd3] pt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5d5a53]" aria-label="Economics sub-navigation">
            <a href="#top-stories" className="text-[#171717]">Top stories</a>
            <a href="#macro-pulse">Macro pulse</a>
            <a href="#calendar">Economic calendar</a>
            <a href="#briefs">Briefs</a>
          </nav>
        </header>

        <section id="top-stories" className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
          <Link to="/markets" className="group relative min-h-[390px] overflow-hidden bg-[#151515] sm:min-h-[520px]">
            <img src={leadStories[0].image} alt="City skyline and financial district" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff5a60]">{leadStories[0].tag}</span>
              <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-[1.02] text-white sm:text-5xl">{leadStories[0].title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75">{leadStories[0].dek}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Read analysis <ArrowUpRight size={14} /></span>
            </div>
          </Link>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Link to="/business-news" className="group flex min-h-[210px] flex-col justify-end border-b border-[#171717] bg-white p-5 sm:p-7 lg:min-h-0">
              <img src={leadStories[1].image} alt="Cargo containers at a port" className="mb-5 h-36 w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e31b23]">{leadStories[1].tag}</span>
              <h2 className="mt-2 font-serif text-2xl font-bold leading-[1.08] group-hover:text-[#e31b23]">{leadStories[1].title}</h2>
              <p className="mt-2 text-sm leading-5 text-[#5d5a53]">{leadStories[1].dek}</p>
            </Link>
            <div className="bg-[#171717] p-5 text-white sm:p-7">
              <div className="flex items-center justify-between border-b border-white/20 pb-3"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff5a60]">Editor&apos;s note</span><Clock3 size={15} className="text-white/50" /></div>
              <p className="mt-5 font-serif text-xl leading-tight">“The best economic story is rarely the loudest one. It is the one that changes what happens next.”</p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/50">Pride Times Economics Desk</p>
            </div>
          </div>
        </section>

        <section id="macro-pulse" className="mt-14 sm:mt-20">
          <SectionRule>Macro pulse</SectionRule>
          <div className="grid gap-px overflow-hidden border border-[#d6d2c9] bg-[#d6d2c9] sm:grid-cols-2 lg:grid-cols-4">
            {indicators.map((item) => (
              <div key={item.label} className="bg-[#f7f5ef] p-5 sm:p-6">
                <p className="text-[10px] font-bold tracking-[0.15em] text-[#77736b]">{item.label}</p>
                <p className="mt-3 font-mono text-2xl font-bold tracking-[-0.06em]">{item.value}</p>
                <span className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${item.up ? "text-[#15803d]" : "text-[#e31b23]"}`}>{item.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{item.change}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="calendar" className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionRule>Economic calendar</SectionRule>
            <p className="max-w-md text-3xl font-serif font-bold leading-[1.05] sm:text-4xl">The numbers to watch this week.</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#5d5a53]">A concise guide to the releases, policy signals and events most likely to move the conversation.</p>
            <button className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#e31b23] pb-2 text-[10px] font-bold uppercase tracking-[0.18em]">View full calendar <CalendarDays size={14} /></button>
          </div>
          <div className="divide-y divide-[#d6d2c9] border-y border-[#171717]">
            {calendar.map((item) => (
              <div key={item.event} className="grid grid-cols-[64px_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[88px_1fr_auto] sm:py-5">
                <span className="font-mono text-xs font-bold text-[#e31b23]">{item.date}</span>
                <div><p className="font-serif text-lg font-bold leading-tight sm:text-xl">{item.event}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#77736b]">{item.time}</p></div>
                <span className={`hidden text-[9px] font-bold uppercase tracking-[0.14em] sm:block ${item.tone === "high" ? "text-[#e31b23]" : "text-[#77736b]"}`}>{item.tone} impact</span>
              </div>
            ))}
          </div>
        </section>

        <section id="briefs" className="mt-14 sm:mt-20">
          <SectionRule>In brief</SectionRule>
          <div className="grid gap-x-8 divide-y divide-[#d6d2c9] sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            {briefs.map(([tag, title], index) => (
              <Link to="/business-news" key={title} className={`group flex gap-4 py-5 sm:px-6 ${index >= 2 ? "sm:border-t sm:border-[#d6d2c9]" : ""}`}>
                <span className="font-mono text-sm text-[#a19c92]">0{index + 1}</span>
                <span><span className="text-[10px] font-bold tracking-[0.18em] text-[#e31b23]">{tag}</span><span className="mt-2 block font-serif text-xl font-bold leading-[1.08] group-hover:text-[#e31b23]">{title}</span></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 bg-[#171717] p-6 text-white sm:mt-20 sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff5a60]">The Economics Briefing</p><h2 className="mt-2 max-w-2xl font-serif text-3xl font-bold leading-tight sm:text-4xl">One sharp read on the forces moving your world.</h2></div>
          <Link to="/signup" className="mt-6 inline-flex shrink-0 items-center gap-2 bg-[#e31b23] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:bg-white hover:text-[#171717] lg:mt-0">Subscribe to the briefing <ArrowUpRight size={14} /></Link>
        </section>
      </main>
    </div>
  );
}
