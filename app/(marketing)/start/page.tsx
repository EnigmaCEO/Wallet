import { ButtonLink } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import { Badge } from "@/components/shared/badge";

const setupSteps = [
  {
    title: "Create account",
    description: "Simple and familiar.",
  },
  {
    title: "Wallet is created",
    description: "Prepared automatically.",
  },
  {
    title: "Your portfolio guidance is activated",
    description: "Your portfolio starts adapting to your goals.",
    note: "Your portfolio stays aligned as conditions change.",
  },
];

export default function StartPage() {
  return (
    <div className="flex min-h-[calc(100vh-14rem)] items-center py-12">
      <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <Badge tone="accent">Onboarding entry</Badge>
          <h1 className="text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            Start with a wallet that actually guides you.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-text-muted">
            No confusion. Just clear direction from your first deposit.
          </p>
        </div>

        <SurfaceCard accent className="space-y-6 p-7 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
              Setup preview
            </p>
            <h2 className="font-display text-3xl font-semibold text-white">
              Three steps. No clutter.
            </h2>
          </div>

          <div className="space-y-4">
            {setupSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-[24px] border border-white/10 bg-black/20 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-primary-soft font-display text-lg font-semibold text-indigo-100">
                  {index + 1}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/72">
                    {step.description}
                  </p>
                  {"note" in step ? (
                    <p className="text-sm leading-6 text-indigo-100/72">
                      {step.note}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/onboarding">Set Up My Wallet</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to landing
            </ButtonLink>
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}

