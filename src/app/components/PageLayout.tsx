import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
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
    <div className="flex flex-col w-full min-h-screen">
      <div className="w-full px-4 py-2">
        <main className="w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
