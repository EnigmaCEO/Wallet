"use client";

import { useState } from "react";

import { InsightPanel } from "@/components/wallet/insight-panel";
import { PortfolioSummaryCard } from "@/components/wallet/portfolio-summary-card";
import { PortfolioTable } from "@/components/wallet/portfolio-table";
import { RecommendedActionCard } from "@/components/wallet/recommended-action-card";
import type {
  ActionItem,
  ActivityItem,
  Holding,
  OnboardingResponse,
  PortfolioActionMode,
  PortfolioInsight,
  WalletQuickActionId,
  WalletQuickAction,
  WalletSummary,
} from "@/types/demo";

type WalletTab = "portfolio" | "activity" | "actions";

type WalletOverviewConsoleProps = {
  summary: WalletSummary;
  holdings: Holding[];
  quickActions: WalletQuickAction[];
  actions: ActionItem[];
  activity: ActivityItem[];
  profile: OnboardingResponse;
  actionMode: PortfolioActionMode;
  insight: PortfolioInsight;
};

export function WalletOverviewConsole({
  summary,
  holdings,
  quickActions,
  actions,
  activity,
  profile,
  actionMode,
  insight,
}: WalletOverviewConsoleProps) {
  const [activeTab, setActiveTab] = useState<WalletTab>("portfolio");
  const [activeQuickActionId, setActiveQuickActionId] =
    useState<WalletQuickActionId>(quickActions[0]?.id ?? "receive");

  const primaryAction =
    actions.find((action) => action.mode === actionMode) ?? actions[0];

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
