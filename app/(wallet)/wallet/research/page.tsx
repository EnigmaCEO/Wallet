import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/shared/badge";
import { ResearchPromptBox } from "@/components/research/research-prompt-box";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Token research"
        title="Understand an asset before acting."
        description="Portfolio research delivered through an approved Selun x402 endpoint."
        actions={
          <div className="flex flex-wrap gap-3">
            <Badge tone="accent">Selun x402 endpoint</Badge>
            <Badge>Approved research lane</Badge>
          </div>
        }
      />

      <ResearchPromptBox />
    </div>
  );
}
