import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;

  /**
   * These props are kept for compatibility with existing pages.
   * Advertisement rendering has been completely removed.
   */
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
  topBanner?: boolean;
}

export function PageLayout({
  children,
  showLeftSidebar: _showLeftSidebar = false,
  showRightSidebar: _showRightSidebar = false,
  topBanner: _topBanner = false,
}: PageLayoutProps) {
  return (
    <div className="w-full min-h-screen">
      <main className="w-full min-w-0">
        {children}
      </main>
    </div>
  );
}
