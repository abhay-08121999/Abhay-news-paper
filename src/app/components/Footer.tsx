import { Link } from "react-router";
import { Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const footerSections = [
  {
    title: "Magazine",
    links: [
      { label: "Home", path: "/" },
      { label: "Technology", path: "/technology" },
      { label: "Finance", path: "/finance" },
      { label: "Billionaires", path: "/billionaires" },
      { label: "World", path: "/world" },
      { label: "Topics", path: "/featured" },
    ],
  },
  {
    title: "Rankings",
    links: [
      { label: "World's Billionaires", path: "/billionaires#world" },
      { label: "Pride Times 30", path: "/billionaires#pt30" },
      { label: "India's Richest", path: "/billionaires#india" },
      { label: "White House Watch", path: "/world" },
      { label: "Leadership 100", path: "/finance#leadership" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "#" },
      { label: "Advertise", path: "#" },
      { label: "Careers", path: "#" },
      { label: "Contact Us", path: "#" },
      { label: "Press Room", path: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/thepridetime", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/thepridetime", label: "Twitter/X" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/thepridetimes", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/thepridetime/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white mt-4">
      {/* Newsletter strip */}
      <div className="border-b border-gray-800 py-8">
        <div className="pt-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white">Stay Ahead of the News</h3>
            <p className="text-gray-400 text-sm mt-1">Get daily briefings from the world's top business magazine.</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded px-3 py-2 flex-1 md:w-72">
              <Mail size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white text-sm outline-none flex-1 placeholder-gray-500"
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="pt-container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="block mb-4">
              <span className="pt-logo text-2xl" style={{ color: "#ffffff" }}>
                THE <span className="pt-logo-accent">PRIDE</span> TIMES
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed">
              The world's leading source for business intelligence, technology coverage, and global financial news.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm mb-3 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-400 text-xs hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="pt-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} The Pride Times. All rights reserved. 
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="/Privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/Terms" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="/CookiePolicy" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
            <a href="/Accessibility" className="hover:text-gray-300 transition-colors">Accessibility</a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}