import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/shared/badge";
import { SelunAllocationExperience } from "@/components/wallet/selun-allocation-experience";
import { X402NetworkPanel } from "@/components/wallet/x402-network-panel";
import { mockOnboardingResponses } from "@/data/onboarding";
import { holdings } from "@/data/wallet";
import { selunContent } from "@/data/selun";
import { getPortfolioActionMode } from "@/lib/wallet";

export default function SelunPage() {
  const mode = getPortfolioActionMode(holdings);
  const content = selunContent[mode];

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

      <SelunAllocationExperience profile={mockOnboardingResponses} mode={mode} />
      <X402NetworkPanel activeHref="/wallet/selun" />
    </div>
  );
}
