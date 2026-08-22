import { ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface AdBannerProps {
  image: string;
  title: string;
  cta?: string;
  link?: string;
  label?: string;
  onClose?: () => void;
  variant?: "top" | "bottom" | "inline";
}

export function AdBanner({
  image,
  title,
  cta = "Learn More",
  link = "#",
  label = "Advertisement",
  onClose,
  variant = "inline",
}: AdBannerProps) {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className={`relative w-full bg-gray-50 border border-gray-200 overflow-hidden ${
      variant === "top" ? "rounded-b" : "rounded"
    }`}>
      <div className="absolute top-1 left-2 z-10">
        <span className="text-gray-400 text-xs">{label}</span>
      </div>
      {onClose && (
        <button
          className="absolute top-1 right-2 z-10 text-gray-400 hover:text-gray-700"
          onClick={() => { setClosed(true); onClose(); }}
          aria-label="Close ad"
        >
          <X size={14} />
        </button>
      )}
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="relative">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-20 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-white text-sm truncate max-w-xs">{title}</p>
            <span className="bg-white text-black text-xs px-3 py-1 rounded flex items-center gap-1 whitespace-nowrap">
              {cta} <ExternalLink size={10} />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-xs text-gray-700 truncate">{title}</p>
          <span className="text-xs text-red-600 flex items-center gap-1 whitespace-nowrap">
            {cta} <ExternalLink size={10} />
          </span>
        </div>
      </a>
    </div>
  );
}

export function GoogleAdSensePlaceholder({ slot, format = "auto" }: { slot: string; format?: string }) {
  return (
    <div className="w-full bg-gray-100 border border-dashed border-gray-300 rounded flex flex-col items-center justify-center py-6 gap-1">
      <span className="text-gray-400 text-xs uppercase tracking-wider">Google AdSense</span>
      <span className="text-gray-300 text-xs">Slot: {slot} · Format: {format}</span>
      <span className="text-gray-300 text-xs">Replace with &lt;ins class="adsbygoogle" /&gt;</span>
    </div>
  );
}
