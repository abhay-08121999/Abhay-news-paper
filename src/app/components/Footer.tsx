
import { Link } from "react-router";
import {
  Instagram,
  Youtube,
  Linkedin,
  ChevronUp,
} from "lucide-react";

import logoImg from "../../imports/logo.png";

const GOLD = "#D4A017";

/* X Icon */
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* Pinterest Icon */
function PinterestIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.086 3.163 9.421 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.09.375-.293 1.194-.333 1.361-.052.221-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378 0 0-.602 2.291-.748 2.853-.271 1.043-1.002 2.35-1.492 3.146 1.124.348 2.317.535 3.554.535 6.621 0 12.017-5.396 12.017-12.017C24.034 5.396 18.638 0 12.017 0z" />
    </svg>
  );
}

/* Facebook Icon */
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.507 17.523 2 12 2S2 6.507 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
    </svg>
  );
}

/* Social Links */
const socialLinks = [
  {
    icon: (s: number) => <FacebookIcon size={s} />,
    href: "https://www.facebook.com/thepridetime",
    label: "Facebook",
  },
  {
    icon: (s: number) => <Instagram size={s} />,
    href: "https://www.instagram.com/thepridetime/",
    label: "Instagram",
  },
  {
    icon: (s: number) => <XIcon size={s} />,
    href: "https://x.com/thepridetime",
    label: "X",
  },
  {
    icon: (s: number) => <Youtube size={s} />,
    href: "https://www.youtube.com/@thepridetime",
    label: "YouTube",
  },
  {
    icon: (s: number) => <PinterestIcon size={s} />,
    href: "https://www.pinterest.com/thepridetime/",
    label: "Pinterest",
  },
  {
    icon: (s: number) => <Linkedin size={s} />,
    href: "https://www.linkedin.com/company/thepridetimes",
    label: "LinkedIn",
  },
];

/* Footer Navigation Links */
const bottomLinks = [
  {
    label: "Team",
    path: "/team",
  },
  {
    label: "Privacy Policy",
    path: "/Privacy",
  },
  {
    label: "Terms Of Use",
    path: "/Terms",
  },
];

export function Footer() {
  return (
    <footer className="pt-footer">

      {/* Main Footer */}
      <div className="pt-footer-container">

        {/* Top Decorative Line */}
        <div className="pt-footer-top-line">

          <span className="pt-footer-line pt-footer-line-left" />

          <span className="pt-footer-diamond" />

          <span className="pt-footer-diamond" />

          <span className="pt-footer-line pt-footer-line-right" />

        </div>

        {/* Main Content */}
        <div className="pt-footer-content">

          {/* Brand Section */}
          <Link
            to="/"
            className="pt-footer-brand"
          >
            {/* Logo */}
            <img
              src={logoImg}
              alt="The Pride Times"
              className="pt-footer-logo"
            />

            {/* Logo Divider */}
            <span className="pt-footer-logo-divider" />

            {/* Brand Text */}
            <div className="pt-footer-brand-text">

              <div className="pt-footer-title">
                THE{" "}
                <span className="pt-footer-title-accent">
                  PRIDE
                </span>{" "}
                TIMES
              </div>

              <p className="pt-footer-tagline">
                Voices That Inspire. Stories That Matter.
              </p>

            </div>
          </Link>

          {/* Vertical Divider */}
          <span className="pt-footer-vertical-divider" />

          {/* Right Section */}
          <div className="pt-footer-right">

            {/* Social Buttons */}
            <div className="pt-footer-socials">

              {socialLinks.map(
                ({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-footer-social-button"
                  >
                    {icon(17)}
                  </a>
                )
              )}

            </div>

            {/* Navigation Links */}
            <div className="pt-footer-links">

              {bottomLinks.map((link, index) => (
                <span
                  key={link.label}
                  className="pt-footer-link-wrapper"
                >
                  <Link
                    to={link.path}
                    className="pt-footer-link"
                  >
                    {link.label}
                  </Link>

                  {index < bottomLinks.length - 1 && (
                    <span className="pt-footer-separator">
                      |
                    </span>
                  )}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-footer-copyright">

        <p>
          © {new Date().getFullYear()} The Pride Times.
          All rights reserved.
        </p>

      </div>

      {/* Back To Top */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "auto",
          })
        }
        aria-label="Back to top"
        className="pt-footer-back-top"
      >
        <ChevronUp size={20} />
      </button>

    </footer>
  );
}

