import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";
import { Globe, ArrowRight, MapPin } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   ABOUT US — uses the site's existing design tokens
   (pt-red #e31b23, pt-navy #071a2d, pt-black #111111,
   Times New Roman masthead, Arial body) rather than a new
   palette, since this page lives inside the same publication.
───────────────────────────────────────────────────────── */

const milestones = [
  { year: "2014", text: "Founded in London as a weekly print briefing for institutional investors." },
  { year: "2016", text: "Digital edition launches; first international bureau opens in Singapore." },
  { year: "2019", text: "Crosses 500,000 monthly readers; expands into broadcast with Pride Times Live." },
  { year: "2022", text: "Named Business Publication of the Year by the Global Press Institute." },
  { year: "2024", text: "Reaches 2 million global readers across 120 countries." },
  { year: "2026", text: "Launches the Pride Times 30 leadership index; newsroom grows to 40 bureaus." },
];

const principles = [
  { title: "Independence", text: "Our journalism answers to readers, not to advertisers or shareholders." },
  { title: "Accuracy first", text: "We correct our mistakes in public, and as fast as we made them." },
  { title: "A global lens", text: "We report from where the story is, not from where it's convenient." },
  { title: "Plain language", text: "Complex markets and policy, explained without jargon." },
  { title: "On the record", text: "Every claim is sourced. Every source is checked." },
];

const leadership = [
  {
    name: "Elena Marchetti",
    role: "Editor-in-Chief",
    bio: "Twenty years covering global markets, from the 2008 crisis to the AI capital boom.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "David Okonkwo",
    role: "Managing Editor, Markets",
    bio: "Formerly a derivatives desk analyst; now leads our markets and finance coverage.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "Priya Raghunathan",
    role: "Head of Global Bureaus",
    bio: "Oversees reporting across our 40 international bureaus and correspondent network.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "Marcus Lindqvist",
    role: "Chief Technology Officer",
    bio: "Builds the data infrastructure behind our live markets and research tools.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
];

const bureaus = ["London", "New York", "Singapore", "Mumbai", "Dubai", "Nairobi", "São Paulo", "Tokyo"];

export function AboutUsPage() {
  return (
    <main className="bg-white text-[#111111]">
      <div className="pt-container py-10">

        {/* ── Masthead strip ─────────────────────────────── */}
        <div className="flex items-baseline justify-between border-t-[3px] border-b border-[#111111] py-2 mb-10 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#555555]">
          <span className="flex items-center gap-2 font-semibold text-[#111111]">
            <Globe size={12} /> About The Pride Times
          </span>
          <span>Founded 2014 · Independently Owned</span>
        </div>

        {/* ── Hero statement ─────────────────────────────── */}
        <section className="mb-16 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#111111]">
            We report on the decisions that move the world's money.
          </h1>
          <p className="text-[#555555] text-base sm:text-lg mt-6 leading-relaxed max-w-2xl">
            The Pride Times is an independent newsroom covering markets, technology,
            and the leaders shaping the global economy — read in over 120 countries,
            written by journalists who answer only to their readers.
          </p>
        </section>

        {/* ── Mission, drop cap ───────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 mb-16 border-t border-[#e2e2e2] pt-10">
          <div>
            <p className="text-[#3A3934] text-base leading-relaxed max-w-2xl
                          first-letter:font-serif first-letter:text-6xl first-letter:font-bold
                          first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1">
              Founded in 2014, we set out to cover business news the way markets actually
              move — globally, quickly, and without deference to any single government or
              boardroom. What began as a weekly briefing for institutional investors is now
              a daily publication read by executives, policymakers, and investors across
              six continents. We remain privately held, which means our reporting is
              accountable to readers rather than quarterly earnings.
            </p>
          </div>
          <div className="overflow-hidden rounded-md border border-[#e2e2e2]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80"
              alt="The Pride Times newsroom"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
        </section>

        {/* ── By the numbers ─────────────────────────────── */}
        <div className="pt-stats-banner pt-section mb-16">
          <div className="pt-stats-grid">
            {[
              { label: "Founded", value: "2014" },
              { label: "Global Readers", value: "2M+" },
              { label: "Countries Covered", value: "120+" },
              { label: "Newsroom Bureaus", value: "40" },
            ].map((stat) => (
              <div key={stat.label} className="pt-stat-item text-center">
                <div className="text-white text-xl sm:text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-300 text-[11px] uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ────────────────────────────────────── */}
        <section className="mb-16">
          <div className="border-b-2 border-[#111111] pb-2 mb-8">
            <h2 className="uppercase tracking-[0.16em] text-sm font-semibold">Our History</h2>
          </div>
          <div className="flex flex-col">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 py-4 border-t border-[#e2e2e2] first:border-t-0">
                <span className="font-serif text-xl text-[#e31b23] w-16 shrink-0">{m.year}</span>
                <p className="text-sm sm:text-[15px] text-[#3A3934] leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Principles ──────────────────────────────────── */}
        <section className="mb-16">
          <div className="border-b-2 border-[#111111] pb-2 mb-8">
            <h2 className="uppercase tracking-[0.16em] text-sm font-semibold">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {principles.map((p) => (
              <div key={p.title} className="py-4 border-t border-[#e2e2e2]">
                <h3 className="font-serif text-lg text-[#111111] mb-1.5">{p.title}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Leadership ──────────────────────────────────── */}
        <section className="mb-16">
          <div className="border-b-2 border-[#111111] pb-2 mb-8">
            <h2 className="uppercase tracking-[0.16em] text-sm font-semibold">Newsroom Leadership</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person) => (
              <div key={person.name}>
                <div className="overflow-hidden rounded-md mb-3 aspect-[4/5]">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[#111111]">{person.name}</h3>
                <p className="text-xs text-[#e31b23] uppercase tracking-wide mt-0.5">{person.role}</p>
                <p className="text-xs text-[#555555] mt-2 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Global bureaus ──────────────────────────────── */}
        <section className="mb-16">
          <div className="border-b-2 border-[#111111] pb-2 mb-6 flex items-center gap-2">
            <MapPin size={16} className="text-[#e31b23]" />
            <h2 className="uppercase tracking-[0.16em] text-sm font-semibold">Global Bureaus</h2>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {bureaus.map((city, i) => (
              <span key={city} className="text-sm text-[#3A3934] flex items-center gap-6">
                {city}
                {i < bureaus.length - 1 && <span className="text-[#D9D4C7]">/</span>}
              </span>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="border border-[#e2e2e2] rounded-md p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl text-[#111111]">Join the newsroom</h2>
            <p className="text-sm text-[#555555] mt-1.5 max-w-md">
              We're always looking for reporters, analysts, and engineers who want to
              cover the story before it's obvious.
            </p>
          </div>
          <Link
            to="/careers"
            className="pt-subscribe-btn inline-flex items-center gap-2 whitespace-nowrap"
          >
            View open roles <ArrowRight size={14} />
          </Link>
        </section>

      </div>
    </main>
  );
}
