import { ExternalLink, MessageCircle, Star, MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

// ── Generic Sidebar Ad Box ────────────────────────────────────
interface SidebarAdProps {
  image: string;
  title: string;
  description?: string;
  cta?: string;
  link?: string;
  size?: "300x250" | "300x600";
}

export function SidebarAd({ image, title, description, cta = "Learn More", link = "#", size = "300x250" }: SidebarAdProps) {
  const height = size === "300x600" ? "h-80" : "h-48";
  return (
    <div className="border border-gray-200 rounded overflow-hidden bg-white">
      <p className="text-xs text-gray-400 text-center py-1 border-b border-gray-100">Advertisement</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <ImageWithFallback src={image} alt={title} className={`w-full ${height} object-cover`} />
        <div className="p-3">
          <p className="text-sm leading-snug">{title}</p>
          {description && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>}
          <button className="mt-2 w-full bg-black text-white text-xs py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center gap-1">
            {cta} <ExternalLink size={10} />
          </button>
        </div>
      </a>
    </div>
  );
}

// ── WhatsApp Promo Button ────────────────────────────────────
interface WhatsAppAdProps {
  businessName: string;
  description: string;
  phone: string;
  message: string;
  badgeText?: string;
}

export function WhatsAppAd({ businessName, description, phone, message, badgeText }: WhatsAppAdProps) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const link = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="border border-green-200 bg-green-50 rounded overflow-hidden">
      <p className="text-xs text-gray-400 text-center py-1 border-b border-green-100">Promotion</p>
      <div className="p-3">
        <div className="flex items-start gap-2 mb-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle size={14} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">{businessName}</p>
            {badgeText && (
              <span className="text-xs bg-green-600 text-white px-1.5 py-0.5 rounded">
                {badgeText}
              </span>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-600 mb-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs py-2.5 rounded transition-colors w-full"
        >
          <MessageCircle size={14} />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

// ── Featured Listing ─────────────────────────────────────────
interface FeaturedListingProps {
  businessName: string;
  tagline: string;
  description: string;
  website: string;
  category: string;
  location: string;
  rating?: number;
  reviewCount?: number;
  badge: "featured" | "sponsored" | "partner" | "premium";
}

const badgeStyles: Record<string, string> = {
  featured: "bg-yellow-100 text-yellow-700",
  sponsored: "bg-blue-100 text-blue-700",
  partner: "bg-purple-100 text-purple-700",
  premium: "bg-black text-white",
};

export function FeaturedListingAd({
  businessName,
  tagline,
  description,
  website,
  category,
  location,
  rating,
  reviewCount,
  badge,
}: FeaturedListingProps) {
  return (
    <div className="border border-gray-200 rounded bg-white overflow-hidden">
      <div className="bg-gray-900 text-white px-3 py-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider">Featured Listing</span>
        <span className={`text-xs px-2 py-0.5 rounded ${badgeStyles[badge]}`}>
          {badge.charAt(0).toUpperCase() + badge.slice(1)}
        </span>
      </div>
      <div className="p-3">
        <h4 className="text-sm">{businessName}</h4>
        <p className="text-xs text-gray-500 italic mb-2">{tagline}</p>
        <p className="text-xs text-gray-600 line-clamp-3 mb-3">{description}</p>
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapPin size={10} /> {location}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="text-gray-400">#</span> {category}
          </div>
          {rating && (
            <div className="flex items-center gap-1.5 text-xs">
              <Star size={10} className="text-yellow-500 fill-yellow-500" />
              <span>{rating} ({reviewCount?.toLocaleString()} reviews)</span>
            </div>
          )}
        </div>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

// ── Small AdSense Placeholder ─────────────────────────────────
export function SidebarAdSense({ slot }: { slot: string }) {
  return (
    <div className="border border-dashed border-gray-300 bg-gray-50 rounded flex flex-col items-center justify-center py-8 gap-1">
      <span className="text-gray-300 text-xs">AdSense</span>
      <span className="text-gray-300 text-xs">300×250</span>
      <span className="text-gray-300 text-xs">Slot: {slot}</span>
    </div>
  );
}

// ── Video Promo ───────────────────────────────────────────────
interface VideoAdProps {
  thumbnail: string;
  title: string;
  advertiser: string;
  cta: string;
  link: string;
}

export function VideoAdWidget({ thumbnail, title, advertiser, cta, link }: VideoAdProps) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden bg-white">
      <p className="text-xs text-gray-400 text-center py-1 border-b border-gray-100">Sponsored Video</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="relative">
          <ImageWithFallback src={thumbnail} alt={title} className="w-full h-40 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
              <div className="w-0 h-0 border-l-[14px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
            Ad
          </div>
        </div>
        <div className="p-3">
          <p className="text-xs text-gray-500">{advertiser}</p>
          <p className="text-sm leading-snug mt-0.5">{title}</p>
          <button className="mt-2 w-full border border-gray-300 text-xs py-1.5 rounded hover:bg-gray-50 transition-colors">
            {cta}
          </button>
        </div>
      </a>
    </div>
  );
}
