import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";

/*
 * Top Securities mega-menu
 * Only navigation categories are displayed.
 * No live stock/market values are shown in the dropdown.
 */

const securitiesColumns = [
  {
    title: "MARKETS",
    items: [
      "Stocks",
      "Indices",
      "Commodities",
    ],
  },
  {
    title: "INVESTMENTS",
    items: [
      "Forex",
      "Crypto",
      "Mutual Funds",
    ],
  },
  {
    title: "GLOBAL",
    items: [
      "ETFs",
      "Government Bonds",
      "Global Markets",
    ],
  },
];

export function MarketsTicker() {
  const [showSecurities, setShowSecurities] = useState(false);

  return (
    <div className="pt-securities-bar w-full">
      <div className="pt-container">

        {/* =====================================================
            TOP SECURITIES NAVIGATION
            ===================================================== */}

        <div className="relative">

          <button
            type="button"
            className="pt-securities-btn flex items-center gap-1.5"
            onClick={() => setShowSecurities(!showSecurities)}
            aria-expanded={showSecurities}
            aria-haspopup="true"
          >
            <span>Top Securities</span>

            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                showSecurities ? "rotate-180" : ""
              }`}
            />
          </button>


          {/* =====================================================
              TOP SECURITIES MEGA MENU
              ===================================================== */}

          {showSecurities && (
            <div className="pt-securities-mega-menu">

              <div className="pt-securities-menu-inner">

                {securitiesColumns.map((column) => (
                  <div
                    key={column.title}
                    className="pt-securities-column"
                  >

                    {/* Column Heading */}
                    <h3 className="pt-securities-column-title">
                      {column.title}
                    </h3>

                    {/* Navigation Links */}
                    <div className="pt-securities-links">

                      {column.items.map((item) => (
                        <Link
                          key={item}
                          to="/markets"
                          className="pt-securities-link"
                          onClick={() => setShowSecurities(false)}
                        >
                          {item}
                        </Link>
                      ))}

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
CSS for the New Top Securities Menu

Replace the existing Top Securities-related CSS with:

/* =========================================================
   TOP SECURITIES BAR
   ========================================================= */

.pt-securities-bar {
  position: relative;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  z-index: 100;
}

.pt-securities-bar .pt-container {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}


/* =========================================================
   TOP SECURITIES BUTTON
   ========================================================= */

.pt-securities-btn {
  height: 46px;
  padding: 0 16px;

  background: transparent;
  border: none;

  color: #1f2937;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.pt-securities-btn:hover {
  color: #000000;
  background: #f8f8f8;
}


/* =========================================================
   MEGA MENU
   ========================================================= */

.pt-securities-mega-menu {
  position: absolute;

  top: 100%;
  left: 0;

  width: 720px;

  background: #000000;

  border-top: 1px solid #222222;

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.22);

  z-index: 9999;
}


/* =========================================================
   MENU INNER CONTAINER
   ========================================================= */

.pt-securities-menu-inner {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  column-gap: 55px;

  padding: 28px 30px 30px;
}


/* =========================================================
   COLUMN
   ========================================================= */

.pt-securities-column {
  min-width: 0;
}


/* =========================================================
   COLUMN TITLE
   ========================================================= */

.pt-securities-column-title {
  margin: 0 0 18px;

  color: #ffffff;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  font-size: 15px;

  line-height: 1.2;

  font-weight: 700;

  letter-spacing: 0.2px;
}


/* =========================================================
   LINKS
   ========================================================= */

.pt-securities-links {
  display: flex;

  flex-direction: column;

  gap: 14px;
}


.pt-securities-link {
  display: block;

  color: #8fa8c2;

  text-decoration: none;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

  font-size: 13px;

  line-height: 1.4;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}


.pt-securities-link:hover {
  color: #ffffff;

  transform: translateX(2px);
}


/* =========================================================
   DESKTOP CONTAINER
   ========================================================= */

@media (min-width: 1200px) {

  .pt-securities-bar .pt-container {
    padding-left: 50px;
    padding-right: 50px;
  }

}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 991px) {

  .pt-securities-mega-menu {
    width: 600px;
  }

  .pt-securities-menu-inner {
    column-gap: 30px;

    padding: 24px;
  }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767px) {

  .pt-securities-mega-menu {
    width: calc(100vw - 24px);

    left: 0;
  }

  .pt-securities-menu-inner {
    grid-template-columns: 1fr;

    row-gap: 24px;

    padding: 22px;
  }

  .pt-securities-column-title {
    margin-bottom: 10px;

    font-size: 13px;
  }

  .pt-securities-links {
    gap: 10px;
  }

  .pt-securities-link {
    font-size: 12px;
  }

}
