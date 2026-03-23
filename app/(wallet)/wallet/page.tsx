import { ButtonLink } from "@/components/shared/button-link";
import { WalletOverviewConsole } from "@/components/wallet/wallet-overview-console";
import { mockOnboardingResponses } from "@/data/onboarding";
import {
  guidedActions,
  holdings,
  portfolioInsights,
  recentActivity,
  walletQuickActions,
  walletSummary,
} from "@/data/wallet";
import { getPortfolioActionMode } from "@/lib/wallet";

export default function WalletPage() {
  const actionMode = getPortfolioActionMode(holdings);

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
            Overview
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-white sm:text-5xl">
            Portfolio Overview
          </h1>
          <p className="mt-3 text-base text-white/62 sm:text-lg">
            Aligned with your goals and risk profile
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 lg:items-end">
          <ButtonLink
            href="/wallet/research"
            variant="secondary"
            className="self-start border-indigo-300/16 bg-white/[0.08] shadow-[0_0_28px_rgba(129,140,248,0.08)] lg:self-auto"
          >
            Ask Anything About Your Portfolio
          </ButtonLink>
          <p className="max-w-xs text-sm text-white/52 lg:text-right">
            Get insights, comparisons, and explanations instantly
          </p>
        </div>
      </div>

      <WalletOverviewConsole
        summary={walletSummary}
        holdings={holdings}
        quickActions={walletQuickActions}
        actions={guidedActions}
        activity={recentActivity}
        profile={mockOnboardingResponses}
        actionMode={actionMode}
        insight={portfolioInsights[actionMode]}
      />
    </div>
  );
}

