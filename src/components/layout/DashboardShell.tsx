"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileTabBar from "./MobileTabBar";
import LearningModeProvider from "@/components/learning/LearningModeProvider";
import LearningModeGate from "@/components/learning/LearningModeGate";
import type { Profile } from "@/types/database";
import type { LearningMode } from "@/lib/learning-mode";

export default function DashboardShell({
  profile,
  initialLearningMode,
  children,
}: {
  profile: Profile;
  initialLearningMode: LearningMode | null;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isPlayer = pathname.startsWith("/player");

  useEffect(() => {
    document.body.classList.toggle("nav-open", sidebarOpen);
    return () => document.body.classList.remove("nav-open");
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <LearningModeProvider userId={profile.id} initialMode={initialLearningMode}>
      <div className={`dashboard-layout${isPlayer ? " is-player" : ""}`}>
        <Sidebar
          profile={profile}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="dashboard-main">
          <Topbar profile={profile} onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
          <div className="dashboard-main-inner">{children}</div>
        </main>
        <MobileTabBar profile={profile} />
      </div>
      <LearningModeGate />
    </LearningModeProvider>
  );
}
