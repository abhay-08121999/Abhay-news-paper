import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Instagram,
  User,
} from "lucide-react";
import { Link } from "react-router";

/* X Icon (Twitter) */
function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Section header — serif title + gray subtitle */
function SH({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-2xl md:text-[28px] leading-snug text-gray-950">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}

/* Simple ad placeholder, matching the site's inline ad units */
function AdSlot({ label = "728 × 90 · Leaderboard" }: { label?: string }) {
  return (
    <div className="relative bg-gradient-to-br from-slate-800 to-teal-900 text-white text-center py-8 px-4 mb-12 rounded-[2px]">
      <span className="absolute top-2 right-3 text-[10px] text-gray-400 uppercase tracking-wide">Advertisement</span>
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-1">Google AdSense</p>
      <p className="font-semibold">Advertisement Space</p>
      <p className="text-xs text-sky-300/80 mt-1">{label}</p>
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const currentEdition = {
  issue: "Latest Issue — Q3 2026",
  eyebrow: "Current Edition",
  title: "The AI Revolution",
  subtitle: "Reshaping Business, Economies & the Future of Work",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
};

const allEditions = [
  {
    quarter: "Q3 2026",
    title: "The AI Revolution",
    desc: "Reshaping Business, Economies & the Future of Work",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
  {
    quarter: "Q2 2026",
    title: "Leading the Future",
    desc: "Global Business Transformation in the Digital Age",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
  },
  {
    quarter: "Q1 2026",
    title: "Green Economy",
    desc: "The $50 Trillion Energy Transition Opportunity",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
  },
  {
    quarter: "Q4 2025",
    title: "Asia Rising",
    desc: "The New Centers of Global Economic Power",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
  },
  {
    quarter: "Q3 2025",
    title: "Fintech Disruption",
    desc: "How Digital Finance is Rewriting Every Rule",
    image: "https://images.unsplash.com/photo-1679583721525-658d164e609b?auto=format&fit=crop&w=600&q=80",
  },
  {
    quarter: "Q2 2025",
    title: "Healthcare 2030",
    desc: "The Biotech Innovations That Will Define Our Lifespan",
    image: "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?auto=format&fit=crop&w=600&q=80",
  },
];

const leaderProfiles = [
  { rank: 1, name: "Jensen Huang", company: "NVIDIA Corporation", edition: "Q3 2026 — AI Infrastructure Edition", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" },
  { rank: 2, name: "Sam Altman", company: "OpenAI", edition: "Q2 2026 — AGI Edition", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=500&q=80" },
  { rank: 3, name: "Mukesh Ambani", company: "Reliance Industries", edition: "Q1 2026 — Green Energy Edition", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80" },
  { rank: 4, name: "Sundar Pichai", company: "Alphabet / Google", edition: "Q2 2026 — Search & AI Edition", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80" },
  { rank: 5, name: "Satya Nadella", company: "Microsoft", edition: "Q1 2026 — Cloud & Copilot Edition", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80" },
  { rank: 6, name: "Elon Musk", company: "Tesla / SpaceX / xAI", edition: "Q3 2026 — Space & EV Edition", image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=500&q=80" },
  { rank: 7, name: "Tim Cook", company: "Apple Inc.", edition: "Q2 2026 — Apple Intelligence Edition", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80" },
  { rank: 8, name: "Larry Fink", company: "BlackRock", edition: "Q1 2026 — Asset Management Edition", image: "https://images.unsplash.com/photo-1679583721525-658d164e609b?auto=format&fit=crop&w=500&q=80" },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export function MagazinePage() {
  return (
    <div className="w-full bg-white text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* ===================================
            PAGE HEADER
        ==================================== */}
        <header className="border-b-2 border-red-600 pb-5 mb-10">
          <h1 className="font-serif text-3xl md:text-[40px] leading-tight">The Pride Times Magazine</h1>
          <p className="text-gray-500 text-sm md:text-[15px] mt-1.5">
            Authoritative journalism and deep analysis from the world's leading business publication.
          </p>
        </header>

        {/* ===================================
            AD SLOT
        ==================================== */}
        <AdSlot />

        {/* ===================================
            CURRENT EDITION HERO
        ==================================== */}
        <Link
          to="/magazine/current"
          className="group grid grid-cols-1 md:grid-cols-2 mb-16 border border-gray-900 overflow-hidden rounded-[2px]"
        >
          <div className="relative overflow-hidden bg-black">
            <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-[2px]">
              {currentEdition.issue}
            </span>
            <ImageWithFallback
              src={currentEdition.image}
              alt={currentEdition.title}
              className="w-full h-64 md:h-[420px] object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>

          <div className="bg-black text-white p-8 md:p-10 flex flex-col justify-center relative">
            <div className="absolute top-6 right-6 hidden md:flex items-center gap-3 text-gray-400">
              <XIcon size={16} />
              <Instagram size={16} />
            </div>

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-500 mb-3">
              {currentEdition.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-[42px] leading-[1.1] mb-3">{currentEdition.title}</h2>
            <p className="text-gray-400 text-sm md:text-base mb-7 max-w-md">{currentEdition.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-red-600 group-hover:bg-red-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded-[2px]">
                Read Digital Edition →
              </span>
              <span className="border border-gray-600 group-hover:border-gray-400 text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded-[2px]">
                Subscribe for Print
              </span>
            </div>
          </div>
        </Link>

        {/* ===================================
            ALL EDITIONS
        ==================================== */}
        <section className="mb-16">
          <SH title="All Editions" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {allEditions.map((ed) => (
              <div key={ed.quarter} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2px] mb-3 aspect-[3/4]">
                  <ImageWithFallback
                    src={ed.image}
                    alt={ed.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] font-bold text-red-600 uppercase tracking-[0.12em]">{ed.quarter}</p>
                <p className="text-sm font-semibold mt-0.5 group-hover:text-red-600 transition-colors">{ed.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{ed.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================
            LEADER COVER PROFILES
        ==================================== */}
        <section className="mb-14">
          <SH
            title="Leader Cover Profiles"
            subtitle="Exclusive magazine cover features on global business leaders"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leaderProfiles.map((p) => (
              <div key={p.rank} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2px] aspect-[4/5] bg-black">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40" />

                  <span className="absolute top-2.5 left-2.5 bg-black/60 text-white text-[9px] font-bold uppercase tracking-[0.14em] px-2 py-1 rounded-[2px]">
                    Pride Times Magazine
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-[2px]">
                    #{p.rank}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gray-700 border border-white/30 flex items-center justify-center flex-shrink-0">
                      <User size={16} className="text-gray-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{p.name}</p>
                      <p className="text-gray-300 text-xs truncate">{p.company}</p>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 uppercase tracking-wide">{p.edition}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================
            AD SLOT 2
        ==================================== */}
        <div className="bg-amber-50 border border-amber-200 text-center py-6 px-4 mb-10 rounded-[2px] relative">
          <span className="absolute top-2 right-3 text-[10px] text-gray-400 uppercase tracking-wide">Ad</span>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 mb-1">
            The Pride Times Digital — Full Archive Access
          </p>
          <p className="font-semibold text-gray-900">Your Ad Here</p>
          <p className="text-xs text-gray-500 mt-1">Reach 2M+ business readers</p>
        </div>

        {/* ===================================
            SUBSCRIBE CTA
        ==================================== */}
        <section className="bg-[#0b1a30] text-white text-center p-8 md:p-12 rounded-[2px]">
          <h2 className="font-serif text-2xl md:text-[32px] mb-3">Subscribe to The Pride Times</h2>
          <p className="text-gray-400 text-sm md:text-base mb-7 max-w-xl mx-auto">
            Get unlimited access to every edition, exclusive leader profiles, and in-depth analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/login"
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 text-sm font-semibold transition-colors rounded-[2px]"
            >
              Subscribe — Free Trial
            </Link>
            <Link
              to="/magazine"
              className="border border-gray-500 hover:border-gray-300 text-white px-7 py-3 text-sm font-semibold transition-colors rounded-[2px]"
            >
              Browse Digital Edition
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
