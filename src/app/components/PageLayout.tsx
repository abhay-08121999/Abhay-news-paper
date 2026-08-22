import { ReactNode } from "react";
import {
  SidebarAd,
  WhatsAppAd,
  FeaturedListingAd,
  VideoAdWidget,
  SidebarAdSense,
} from "./ads/AdSidebar";
import { AdBanner } from "./ads/AdBanner";
import { SponsoredArticleCard } from "./ads/SponsoredArticleCard";

// Fixed ad data shown on all pages
const LEFT_ADS = [
  {
    type: "sidebar" as const,
    image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=300&h=250&fit=crop",
    title: "NVIDIA AI Summit 2026 — Register Now",
    description: "Join 50,000+ AI professionals at the world's largest AI conference.",
    cta: "Register Free",
    link: "#",
  },
];

const RIGHT_AD_CONTENT = {
  whatsapp: {
    businessName: "Bajaj Finserv",
    description: "Get instant business loans up to ₹50 Lakh. 48-hour approval. Minimal documentation.",
    phone: "919999999999",
    message: "Hi! I saw your ad on The Pride Times and I'm interested in business loans.",
    badgeText: "Instant Approval",
  },
  video: {
    thumbnail: "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?w=300&h=200&fit=crop",
    title: "Mahindra BE 6 — Future of Electric Mobility",
    advertiser: "Mahindra Group",
    cta: "Book Test Drive",
    link: "#",
  },
  listing: {
    businessName: "McKinsey & Company",
    tagline: "Act boldly. Deliver impact.",
    description: "McKinsey is a global management consulting firm trusted by 90% of Fortune 500 companies.",
    website: "https://www.mckinsey.com",
    category: "Strategy Consulting",
    location: "Global — 65+ Countries",
    rating: 4.9,
    reviewCount: 18230,
    badge: "featured" as const,
  },
  sponsored: {
    headline: "How Infosys Topaz AI Platform is Transforming Enterprise Operations",
    excerpt: "Infosys Topaz drives $1.2B in documented cost savings across 340+ enterprise deployments in 45 countries.",
    advertiser: "Infosys Limited",
    category: "SPONSORED · TECHNOLOGY",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=300&h=160&fit=crop",
    link: "#",
    disclosureText: "Paid content by Infosys. Does not reflect editorial opinion.",
  },
};

interface PageLayoutProps {
  children: ReactNode;
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
  topBanner?: boolean;
}

export function PageLayout({
  children,
  showLeftSidebar = true,
  showRightSidebar = true,
  topBanner = true,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col">
      {/* Top banner ad */}
      {topBanner && (
        <div className="w-full px-4 pt-4">
          <AdBanner
            image="https://images.unsplash.com/photo-1778406466505-6129d0555557?w=1200&h=80&fit=crop"
            title="HDFC Bank — Smart Banking for Smart Businesses | Open Account in 5 Minutes"
            cta="Open Account"
            link="#"
            variant="inline"
            onClose={() => {}}
          />
        </div>
      )}

      {/* Three-column layout */}
      <div className="w-full px-4 py-2 flex gap-4">
        {/* Left sidebar — desktop only */}
        {showLeftSidebar && (
          <aside className="hidden xl:flex flex-col gap-4 w-44 flex-shrink-0 pt-4">
            <div className="sticky top-20 flex flex-col gap-4">
              <SidebarAdSense slot="1122334455" />
              {LEFT_ADS.map((ad, i) => (
                <SidebarAd key={i} image={ad.image} title={ad.title} description={ad.description} cta={ad.cta} link={ad.link} />
              ))}
              <SidebarAdSense slot="1122334456" />
            </div>
          </aside>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">{children}</main>

        {/* Right sidebar */}
        {showRightSidebar && (
          <aside className="hidden lg:flex flex-col gap-4 w-72 flex-shrink-0 pt-4">
            <div className="sticky top-20 flex flex-col gap-4">
              {/* AdSense slot */}
              <SidebarAdSense slot="0987654321" />

              {/* WhatsApp promo */}
              <WhatsAppAd {...RIGHT_AD_CONTENT.whatsapp} />

              {/* Video ad */}
              <VideoAdWidget {...RIGHT_AD_CONTENT.video} />

              {/* Sponsored article compact */}
              <SponsoredArticleCard {...RIGHT_AD_CONTENT.sponsored} compact />

              {/* Featured listing */}
              <FeaturedListingAd {...RIGHT_AD_CONTENT.listing} />

              {/* Another AdSense slot */}
              <SidebarAdSense slot="0987654322" />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
