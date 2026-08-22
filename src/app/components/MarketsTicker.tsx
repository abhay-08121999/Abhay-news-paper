import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { TrendingUp, TrendingDown, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { getQuotes } from "../../services/marketApi";

/* Dropdown categories for the "Top Securities" panel.
   Linked to the existing /markets route — no new routes are introduced. */
const securitiesCategories = [
  "Stocks",
  "Indices",
  "Commodities",
  "Forex",
  "Crypto",
  "Mutual Funds",
  "ETFs",
  "Government Bonds",
  "Global Markets",
];

interface TickerCard {
  symbol: string;
  value: string;
  change: number;
}

export function MarketsTicker() {
  const [cards, setCards] = useState<TickerCard[]>([]);
  const [showSecurities, setShowSecurities] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getQuotes();

        // Map real API data into Bloomberg-style cards.
        // No hardcoded values — everything comes from tickerData.
        const tickerData: TickerCard[] = [
          ...data.usIndices.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: Number(String(item.change).replace("%", "")),
          })),
          ...data.crypto.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: Number(String(item.change).replace("%", "")),
          })),
          ...data.commodities.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: Number(String(item.change).replace("%", "")),
          })),
          ...data.indianIndices.map((item: any) => ({
            symbol: item.name,
            value: item.value,
            change: Number(String(item.change).replace("%", "")),
          })),
        ];

        setCards(tickerData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();

    const interval = setInterval(loadData, 60000);

    return () => clearInterval(interval);
  }, []);

  // Close the dropdown after a few seconds, matching the rest of the header's dropdown behavior
  useEffect(() => {
    if (!showSecurities) return;
    const timer = setTimeout(() => setShowSecurities(false), 6000);
    return () => clearTimeout(timer);
  }, [showSecurities]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 220 + 16; // card width + gap
    el.scrollBy({ left: direction === "left" ? -amount * 2 : amount * 2, behavior: "smooth" });
  };

  // ── Continuous auto-scroll (Bloomberg-style moving ticker) ──
  // Cards are duplicated in the render below so the strip can loop
  // seamlessly: once we've scrolled past the first copy, we silently
  // snap back to 0 and keep going, so it never appears to jump or stop.
  useEffect(() => {
    if (cards.length === 0) return;

    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // px per frame — slow, readable, Bloomberg-style drift

    const step = () => {
      if (el && !isPausedRef.current) {
        const halfway = el.scrollWidth / 2;
        if (el.scrollLeft >= halfway) {
          el.scrollLeft -= halfway;
        } else {
          el.scrollLeft += speed;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cards]);

  const pauseAutoScroll = () => {
    isPausedRef.current = true;
  };
  const resumeAutoScroll = () => {
    isPausedRef.current = false;
  };

  return (
    <div className="pt-securities-bar w-full">
      <div className="pt-container flex items-stretch">
        {/* ── Top Securities dropdown trigger ── */}
        <div className="relative flex-shrink-0">
          <button
            className="pt-securities-btn flex items-center gap-1.5 h-full"
            onClick={() => setShowSecurities(!showSecurities)}
            aria-expanded={showSecurities}
          >
            Top Securities
            <ChevronDown size={14} className={`transition-transform ${showSecurities ? "rotate-180" : ""}`} />
          </button>

          {showSecurities && (
            <div className="pt-securities-dropdown absolute left-0 top-full mt-2 py-2 z-50">
              {securitiesCategories.map((category) => (
                <Link
                  key={category}
                  to="/markets"
                  className="block px-4 py-2.5"
                  onClick={() => setShowSecurities(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ── Continuously auto-scrolling market cards ── */}
        <div
          className="relative flex items-center flex-1 min-w-0 pl-3 gap-2"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          <button
            className="pt-securities-scroll-arrow hidden sm:flex items-center justify-center"
            onClick={() => {
              pauseAutoScroll();
              scrollByAmount("left");
            }}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide py-2 flex-1"
            onTouchStart={pauseAutoScroll}
            onTouchEnd={resumeAutoScroll}
          >
            {/* Cards are rendered twice back-to-back so the auto-scroll
                loop can snap from the end of the first copy to the start
                of the second without any visible jump. */}
            {[...cards, ...cards].map((card, i) => (
              <div key={`${card.symbol}-${i}`} className="pt-market-card flex flex-col justify-center flex-shrink-0">
                <span className="text-[11px] text-gray-400 font-medium truncate">{card.symbol}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">{card.value}</span>
                  <span
                    className={`flex items-center gap-0.5 text-xs font-medium ${
                      card.change >= 0 ? "pt-market-card-positive" : "pt-market-card-negative"
                    }`}
                  >
                    {card.change >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {card.change >= 0 ? "+" : ""}
                    {card.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            className="pt-securities-scroll-arrow hidden sm:flex items-center justify-center"
            onClick={() => {
              pauseAutoScroll();
              scrollByAmount("right");
            }}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}