"use client";

import { WalletOverviewConsole } from "@/components/wallet/wallet-overview-console";
import { getWalletDemoData } from "@/data/wallet";
import { useDemoWalletState } from "@/components/wallet/use-demo-wallet-state";

export function WalletPageClient() {
  const demoState = useDemoWalletState();
  const walletData = getWalletDemoData(demoState);

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
            {demoState.stage === "allocated"
              ? "Your first 10,000 is live and ready to understand."
              : "10,000 USDC is funded and ready for the first move."}
          </p>
          {demoState.stage === "allocated" ? (
            <p className="mt-2 text-sm text-indigo-100/62">
              Your portfolio is now active and evolving. Last allocation executed
              2 minutes ago.
            </p>
          ) : null}
        </div>
      </div>

      <WalletOverviewConsole
        summary={walletData.summary}
        holdings={walletData.holdings}
        quickActions={walletData.quickActions}
        activity={walletData.activity}
        profile={walletData.profile}
        insight={walletData.insight}
        primaryAction={walletData.primaryAction}
      />
    </div>
  );
}
