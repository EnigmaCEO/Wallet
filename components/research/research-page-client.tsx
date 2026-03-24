"use client";

import { Badge } from "@/components/shared/badge";
import { PageHeader } from "@/components/shared/page-header";
import { ResearchPromptBox } from "@/components/research/research-prompt-box";
import { useDemoWalletState } from "@/components/wallet/use-demo-wallet-state";
import { getWalletDemoData } from "@/data/wallet";

export function ResearchPageClient() {
  const demoState = useDemoWalletState();
  const walletData = getWalletDemoData(demoState);
  const researchKey = `${demoState.stage}-${walletData.holdings
    .map((holding) => `${holding.symbol}-${holding.allocation}`)
    .join("_")}`;

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Token research"
        title="Asset Research"
        description={
          demoState.stage === "allocated"
            ? "Portfolio research centered on the assets already in your live mix."
            : "Portfolio research centered on how to deploy your funded USDC."
        }
        actions={
          <div className="flex flex-wrap gap-3">
            <Badge tone="accent">Selun x402 endpoint</Badge>
            <Badge>Approved research lane</Badge>
          </div>
        }
      />

      <ResearchPromptBox
        key={researchKey}
        demoState={demoState}
        holdings={walletData.holdings}
      />
    </div>
  );
}
