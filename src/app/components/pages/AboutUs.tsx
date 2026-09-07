import { Link } from "react-router";
import { Crown } from "lucide-react";

const GOLD = "#C9A227";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "40+", label: "Countries Covered" },
  { value: "1.2M", label: "Monthly Readers" },
  { value: "24/7", label: "Newsroom Coverage" },
];

const values = [
  {
    title: "Editorial Independence",
    content:
      "Our reporting is never influenced by advertisers, sponsors, or outside interests. Every story is reported, edited, and published according to the same editorial standard, regardless of who it covers.",
  },
  {
    title: "Accuracy First",
    content:
      "We verify claims against primary sources before publishing, correct errors transparently, and clearly label analysis, opinion, and AI-assisted content so readers always know what they're reading.",
  },
  {
    title: "Global Perspective",
    content:
      "Markets, technology, and policy don't stop at borders. Our coverage spans international business, innovation, and leadership stories from newsrooms and correspondents around the world.",
  },
  {
    title: "Reader-First Design",
    content:
      "No intrusive ads, no clickbait, no paywalled surprises. We build our site around clarity and speed so the story is never harder to read than it needs to be.",
  },
];

const team = [
  { role: "Editor-in-Chief", desc: "Oversees editorial direction and standards across every desk." },
  { role: "Head of Business & Markets", desc: "Leads coverage of finance, markets, and corporate news." },
  { role: "Head of Technology & Innovation", desc: "Leads coverage of technology, cybersecurity, and smart cities." },
  { role: "Head of International Desk", desc: "Leads coverage of global business and international affairs." },
];

export function AboutUs() {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-[#C9A227] text-xs font-bold uppercase tracking-widest mb-2">About</div>
        <h1 className="font-black text-[#0B1D35] text-3xl mb-2">About The Pride Times</h1>
        <p className="text-[#374151] text-sm mt-4 leading-relaxed">
          The Pride Times is a global business and technology magazine covering markets, innovation, leadership,
          and international affairs. We combine original reporting, data-driven analysis, and AI-assisted
          coverage to help readers understand the stories shaping the global economy — clearly, quickly, and
          without spin.
        </p>
      </div>

      {/* Ornamental divider */}
      <div className="flex items-center justify-center gap-3 my-8">
        <span className="h-px flex-1" style={{ background: `linear-gradient(to right, transparent, ${GOLD}99)` }} />
        <Crown size={20} style={{ color: GOLD }} fill={GOLD} />
        <span className="h-px flex-1" style={{ background: `linear-gradient(to left, transparent, ${GOLD}99)` }} />
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="font-black text-[#0B1D35] text-2xl">{s.value}</div>
            <div className="text-[#64748B] text-xs uppercase tracking-wide mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="font-black text-[#0B1D35] text-base mb-3">Our Story</h2>
        <p className="text-[#374151] text-sm leading-relaxed">
          The Pride Times started as a small newsletter tracking business and technology news across emerging
          markets. As readership grew, so did our newsroom — expanding into dedicated desks for markets,
          cybersecurity, energy, healthcare, and international business. Today, we publish daily coverage
          across our website and editions for Asia, the Americas, Europe, and India, combining traditional
          reporting with modern tools to keep pace with a fast-moving global economy.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h2 className="font-black text-[#0B1D35] text-base mb-3">Our Mission</h2>
        <p className="text-[#374151] text-sm leading-relaxed">
          To deliver clear, accurate, and independent business journalism that helps professionals, founders,
          and decision-makers act with confidence — whatever market they operate in.
        </p>
      </div>

      {/* Values grid */}
      <div className="mb-6">
        <h2 className="font-black text-[#0B1D35] text-base mb-3">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-black text-[#0B1D35] text-sm mb-2">{v.title}</h3>
              <p className="text-[#374151] text-sm leading-relaxed">{v.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-6">
        <h2 className="font-black text-[#0B1D35] text-base mb-3">Leadership</h2>
        <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
          {team.map((t) => (
            <div key={t.role} className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <span className="font-black text-[#0B1D35] text-sm">{t.role}</span>
              <span className="text-[#64748B] text-sm">{t.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h2 className="font-black text-[#0B1D35] text-base mb-3">Get in Touch</h2>
        <p className="text-[#374151] text-sm leading-relaxed whitespace-pre-line">
          {`Have a story tip, press inquiry, or partnership idea? We'd like to hear from it.

Editorial: editorial@thepridetimes.com
Press & Partnerships: press@thepridetimes.com
General Inquiries: hello@thepridetimes.com
Postal address: The Pride Times, 1 Enterprise Plaza, New York, NY 10004`}
        </p>
      </div>

      {/* Footer links, consistent with other info pages */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/team" className="text-[#C9A227] text-sm hover:underline font-medium">Our Team</Link>
        <span className="text-[#94A3B8]">·</span>
        <Link to="/privacy" className="text-[#C9A227] text-sm hover:underline font-medium">Privacy Policy</Link>
        <span className="text-[#94A3B8]">·</span>
        <Link to="/terms" className="text-[#C9A227] text-sm hover:underline font-medium">Terms of Use</Link>
        <span className="text-[#94A3B8]">·</span>
        <Link to="/accessibility" className="text-[#C9A227] text-sm hover:underline font-medium">Accessibility</Link>
      </div>
    </div>
  );
}
