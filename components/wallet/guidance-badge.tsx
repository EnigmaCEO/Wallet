import { Badge } from "@/components/shared/badge";
import { TooltipWrapper } from "@/components/wallet/tooltip-wrapper";

export function GuidanceBadge() {
  return (
    <TooltipWrapper
      content="Your portfolio is being actively guided based on your goals and market conditions."
      align="right"
    >
      <Badge tone="positive" className="cursor-default">
        Guidance Active
      </Badge>
    </TooltipWrapper>
  );
}
