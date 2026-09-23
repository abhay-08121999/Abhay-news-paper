import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MarketsTicker } from "./components/MarketsTicker";
import { PageLayout } from "./components/PageLayout";

// ============================================================
// MAIN PAGES
// ============================================================

import { HomePage } from "./components/pages/HomePage";
import { TechnologyPage } from "./components/pages/TechnologyPage";
import { FinancePage } from "./components/pages/FinancePage";
import { BillionairesPage } from "./components/pages/BillionairesPage";
import { WorldPage } from "./components/pages/WorldPage";
import { InternationalNewsPage } from "./components/pages/InternationalNewsPage";
import { StartupSuccessPage } from "./components/pages/Startupsuccesspage";

import { CybersecurityPage } from "./components/pages/CybersecurityPage";
import { EnergyPage } from "./components/pages/EnergyPage";
import { HealthcarePage } from "./components/pages/HealthcarePage";
import { ManufacturingPage } from "./components/pages/ManufacturingPage";
import { SmartCitiesPage } from "./components/pages/SmartCitiesPage";
import { SupplyChainPage } from "./components/pages/SupplyChainPage";

import { FeaturedPage } from "./components/pages/FeaturedPage";
import { BreakingNewsPage } from "./components/pages/BreakingNewsPage";
import { MarketsPage } from "./components/pages/MarketsPage";
import { EconomicsPage } from "./components/pages/EconomicsPage";
import { EditorialDeskPage } from "./components/pages/EditorialDeskPage";
import { CoverStoriesPage } from "./components/pages/CoverStoriesPage";
import { WhiteHouseWatchPage } from "./components/pages/WhiteHouseWatchPage";
import { BusinessNewsPage } from "./components/pages/BusinessNewsPage";
import { LeadershipPage } from "./components/pages/LeadershipPage";
import { InnovationPage } from "./components/pages/InnovationPage";
import { MagazinePage } from "./components/pages/MagazinePage";
import { CeoSpotlightPage } from "./components/pages/CeoSpotlightPage";
import { AboutUsPage } from "./components/pages/AboutUsPage";

// ============================================================
// LEGAL / SYSTEM PAGES
// ============================================================

import { Privacy } from "./components/pages/Privacy";
import { Terms } from "./components/pages/Terms";
import { CookiePolicy } from "./components/pages/CookiePolicy";
import { Accessibility } from "./components/pages/Accessibility";
import { ResetPasswordPage } from "./components/pages/ResetPasswordPage";

// ============================================================
// AUTH PAGES
// ============================================================

import { LoginPage } from "./components/auth/LoginPage";
import { SignUpPage } from "./components/auth/SignUpPage";
import { DashboardPage } from "./components/auth/DashboardPage";

// ============================================================
// MAGAZINE LAYOUT
// Ads are disabled throughout the website.
// ============================================================

interface MagazineLayoutProps {
  children: React.ReactNode;
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
  topBanner?: boolean;
}

function MagazineLayout({
  children,
  showLeftSidebar = false,
  showRightSidebar = false,
  topBanner = false,
}: MagazineLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Website Header */}
      <Header />

      {/* Market ticker */}
      <MarketsTicker />

      {/* Main page content */}
      <PageLayout
        showLeftSidebar={showLeftSidebar}
        showRightSidebar={showRightSidebar}
        topBanner={topBanner}
      >
        {children}
      </PageLayout>

      {/* Website Footer */}
      <Footer />

    </div>
  );
}

// ============================================================
// APPLICATION
// ============================================================

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ==================================================
              AUTH / STANDALONE PAGES
              ================================================== */}

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/signup"
            element={<SignUpPage />}
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/reset-password"
            element={<ResetPasswordPage />}
          />

          {/* ==================================================
              LEGAL PAGES
              ================================================== */}

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/cookiepolicy"
            element={<CookiePolicy />}
          />

          <Route
            path="/accessibility"
            element={<Accessibility />}
          />

          {/* ==================================================
              HOME
              ================================================== */}

          <Route
            path="/"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <HomePage />
              </MagazineLayout>
            }
          />

          {/* ==================================================
              MAIN CATEGORY PAGES
              ================================================== */}

          <Route
            path="/technology"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Technology" />
              </MagazineLayout>
            }
          />

          <Route
            path="/finance"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Finance" />
              </MagazineLayout>
            }
          />

          <Route
            path="/billionaires"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Billionaires" />
              </MagazineLayout>
            }
          />

          <Route
            path="/world"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="World" />
              </MagazineLayout>
            }
          />

          <Route
            path="/international-news"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="International" />
              </MagazineLayout>
            }
          />

          <Route
            path="/startup-success"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Startups" />
              </MagazineLayout>
            }
          />

          {/* ==================================================
              HEADER CATEGORY PAGES
              ================================================== */}

          <Route
            path="/cybersecurity"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Cybersecurity" />
              </MagazineLayout>
            }
          />

          <Route
            path="/energy"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Energy" />
              </MagazineLayout>
            }
          />

          <Route
            path="/healthcare"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Healthcare" />
              </MagazineLayout>
            }
          />

          <Route
            path="/manufacturing"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Manufacturing" />
              </MagazineLayout>
            }
          />

          <Route
            path="/smart-cities"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Smart Cities" />
              </MagazineLayout>
            }
          />

          <Route
            path="/supply-chain"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Supply Chain" />
              </MagazineLayout>
            }
          />

          <Route
            path="/magazine"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <MagazinePage />
              </MagazineLayout>
            }
          />

          {/* ==================================================
              ADDITIONAL NEWS PAGES
              ================================================== */}

          <Route
            path="/featured"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Featured" />
              </MagazineLayout>
            }
          />

          <Route
            path="/breaking-news"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Breaking News" />
              </MagazineLayout>
            }
          />

          <Route
            path="/markets"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Markets" />
              </MagazineLayout>
            }
          />

          <Route
            path="/economics"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EconomicsPage />
              </MagazineLayout>
            }
          />

          <Route
            path="/cover-stories"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Cover Stories" />
              </MagazineLayout>
            }
          />

          <Route
            path="/white-house-watch"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <WhiteHouseWatchPage />
              </MagazineLayout>
            }
          />

          <Route
            path="/business-news"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Business" />
              </MagazineLayout>
            }
          />

          <Route
            path="/leadership"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Leadership" />
              </MagazineLayout>
            }
          />

          <Route
            path="/innovation"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Innovation" />
              </MagazineLayout>
            }
          />

          <Route
            path="/ceospotlight"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="CEO Spotlight" />
              </MagazineLayout>
            }
          />

          {/* ==================================================
              ABOUT US
              Standalone site-shell route.
              Does NOT use PageLayout.
              ================================================== */}

          <Route
            path="/about-us"
            element={
              <div className="min-h-screen bg-white flex flex-col">

                <Header />

                <MarketsTicker />

                <main className="flex-1">
                  <AboutUsPage />
                </main>

                <Footer />

              </div>
            }
          />

          {/* ==================================================
              MORE
              ================================================== */}

          <Route
            path="/more"
            element={
              <MagazineLayout
                showLeftSidebar={false}
                showRightSidebar={false}
                topBanner={false}
              >
                <EditorialDeskPage section="Featured" />
              </MagazineLayout>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
