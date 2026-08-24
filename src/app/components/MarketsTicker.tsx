import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

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

export function MarketsTicker() {
  const [showSecurities, setShowSecurities] = useState(false);

  // Close the dropdown after a few seconds, matching the rest of the header's dropdown behavior
  useEffect(() => {
    if (!showSecurities) return;
    const timer = setTimeout(() => setShowSecurities(false), 6000);
    return () => clearTimeout(timer);
  }, [showSecurities]);

  return (
    <div className="pt-securities-bar w-full">
      <div className="pt-container flex items-stretch">
        {/* ── Top Securities — plain navigation dropdown, no live market cards ── */}
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
      </div>
    </div>
  );
}
