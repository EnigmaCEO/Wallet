"use client";

import { useState } from "react";

import { InsightPanel } from "@/components/wallet/insight-panel";
import { PortfolioSummaryCard } from "@/components/wallet/portfolio-summary-card";
import { PortfolioTable } from "@/components/wallet/portfolio-table";
import { RecommendedActionCard } from "@/components/wallet/recommended-action-card";
import type {
  ActivityItem,
  Holding,
  OnboardingResponse,
  PortfolioInsight,
  WalletQuickActionId,
  WalletQuickAction,
  WalletSummary,
  ActionItem,
} from "@/types/demo";

type WalletTab = "portfolio" | "activity" | "actions";

type WalletOverviewConsoleProps = {
  summary: WalletSummary;
  holdings: Holding[];
  quickActions: WalletQuickAction[];
  activity: ActivityItem[];
  profile: OnboardingResponse;
  insight: PortfolioInsight;
  primaryAction: ActionItem;
};

export function WalletOverviewConsole({
  summary,
  holdings,
  quickActions,
  activity,
  profile,
  insight,
  primaryAction,
}: WalletOverviewConsoleProps) {
  const [activeTab, setActiveTab] = useState<WalletTab>("portfolio");
  const [activeQuickActionId, setActiveQuickActionId] =
    useState<WalletQuickActionId>(quickActions[0]?.id ?? "receive");

  const handleQuickActionSelect = (actionId: WalletQuickActionId) => {
    setActiveQuickActionId(actionId);
    setActiveTab("actions");
  };

  return (
    <div className="space-y-8 lg:space-y-10">
      <InsightPanel
        title={insight.title}
        meta={insight.meta}
        primaryMessage={insight.primaryMessage}
        secondaryMessage={insight.secondaryMessage}
        ctaLabel={insight.ctaLabel}
        ctaHref={insight.ctaHref}
      />

      <section className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
        <PortfolioSummaryCard
          summary={summary}
          profile={profile}
          quickActions={quickActions}
          activeQuickActionId={activeQuickActionId}
          onQuickActionSelect={handleQuickActionSelect}
        />
        <RecommendedActionCard action={primaryAction} />
      </section>

      <PortfolioTable
        activeTab={activeTab}
        onTabChange={setActiveTab}
        holdings={holdings}
        activity={activity}
        quickActions={quickActions}
        activeQuickActionId={activeQuickActionId}
        onQuickActionSelect={setActiveQuickActionId}
      />
    </div>
  );
}
