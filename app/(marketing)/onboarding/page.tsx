import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";
import { Badge } from "@/components/shared/badge";

export default function OnboardingPage() {
  return (
    <div className="space-y-6 py-6 lg:space-y-7 lg:py-8">
      <div className="max-w-3xl space-y-3">
        <Badge tone="accent">Guided onboarding</Badge>
        <h1 className="text-balance font-display text-4xl font-semibold text-white sm:text-[3.25rem]">
          Let&apos;s shape your first portfolio experience.
        </h1>
        <p className="text-base leading-7 text-text-muted sm:text-lg">
          A few fast questions. Then the wallet takes shape.
        </p>
      </div>

      <OnboardingFlow />
    </div>
  );
}
