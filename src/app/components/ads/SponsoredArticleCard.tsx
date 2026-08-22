import { ExternalLink, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface SponsoredArticleCardProps {
  headline: string;
  excerpt: string;
  advertiser: string;
  category: string;
  readTime: number;
  image: string;
  link: string;
  disclosureText: string;
  compact?: boolean;
}

export function SponsoredArticleCard({
  headline,
  excerpt,
  advertiser,
  category,
  readTime,
  image,
  link,
  disclosureText,
  compact = false,
}: SponsoredArticleCardProps) {
  if (compact) {
    return (
      <div className="border border-gray-200 rounded overflow-hidden bg-gray-50">
        <div className="flex items-center justify-between px-3 py-1.5 bg-gray-100 border-b border-gray-200">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Sponsored Content</span>
          <span className="text-xs text-gray-400">{advertiser}</span>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex gap-3 p-3 group hover:bg-gray-100 transition-colors">
          <ImageWithFallback src={image} alt={headline} className="w-20 h-16 object-cover rounded flex-shrink-0" />
          <div>
            <span className="text-xs text-red-600 uppercase tracking-wider">{category}</span>
            <h4 className="text-sm leading-snug mt-0.5 group-hover:text-red-600 transition-colors line-clamp-2">{headline}</h4>
            <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
              <Clock size={10} /> {readTime} min read
            </span>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded overflow-hidden bg-gray-50 my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full" />
          <span className="text-xs text-gray-500 uppercase tracking-wider">Sponsored Content</span>
        </div>
        <span className="text-xs text-gray-400">by {advertiser}</span>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <ImageWithFallback src={image} alt={headline} className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="text-xs text-red-600 uppercase tracking-wider">{category}</span>
          <h3 className="mt-1 leading-snug group-hover:text-red-600 transition-colors">{headline}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock size={10} /> {readTime} min read
            </span>
            <span className="text-xs text-red-600 flex items-center gap-1">
              Read Full Article <ExternalLink size={10} />
            </span>
          </div>
        </div>
      </a>
      <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
        <p className="text-xs text-gray-400 leading-relaxed">{disclosureText}</p>
      </div>
    </div>
  );
}
