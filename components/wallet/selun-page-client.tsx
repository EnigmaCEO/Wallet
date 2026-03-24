"use client";

import { useState } from "react";

import { Badge } from "@/components/shared/badge";
import { PageHeader } from "@/components/shared/page-header";
import { SelunAllocationExperience } from "@/components/wallet/selun-allocation-experience";
import { X402NetworkPanel } from "@/components/wallet/x402-network-panel";
import { selunContent } from "@/data/selun";
import { getWalletDemoData } from "@/data/wallet";
import { useDemoWalletState } from "@/components/wallet/use-demo-wallet-state";
import { markDemoWalletAllocated, saveDemoWalletStateToStorage } from "@/lib/demo-wallet";

export function SelunPageClient() {
  const demoState = useDemoWalletState();
  const walletData = getWalletDemoData(demoState);
  const [displayMode] = useState(walletData.actionMode);
  const content = selunContent[displayMode];

  const handleAllocationGenerated = () => {
    saveDemoWalletStateToStorage(markDemoWalletAllocated(demoState));
  };

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Services"
        title={content.headerTitle}
        description={content.headerDescription}
        actions={
          <div className="flex flex-wrap gap-3">
            <Badge tone="accent">{content.headerBadge}</Badge>
            <Badge>Approved service lane</Badge>
          </div>
        }
      />

      <SelunAllocationExperience
        profile={demoState.profile}
        mode={displayMode}
        onAllocationGenerated={handleAllocationGenerated}
      />
      <X402NetworkPanel activeHref="/wallet/selun" />
    </div>
  );
}
