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
    <div className="flex min-h-0 items-start py-8 sm:py-10 lg:min-h-[calc(100vh-14rem)] lg:items-center lg:py-12">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
        <div className="space-y-5 sm:space-y-6">
          <Badge tone="accent">Onboarding entry</Badge>
          <h1 className="max-w-[10ch] font-display text-[2.9rem] leading-[0.94] font-semibold text-white sm:max-w-none sm:text-5xl">
            Start with a wallet that actually guides you.
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
            No confusion. Just clear direction from your first deposit.
          </p>
        </div>

        <SurfaceCard accent className="space-y-5 p-5 sm:space-y-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
              Setup preview
            </p>
            <h2 className="font-display text-[2rem] font-semibold text-white sm:text-3xl">
              Three steps. No clutter.
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {setupSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-3 rounded-[22px] border border-white/10 bg-black/20 p-4 sm:gap-4 sm:rounded-[24px] sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-primary-soft font-display text-base font-semibold text-indigo-100 sm:h-11 sm:w-11 sm:text-lg">
                  {index + 1}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
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

          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href="/onboarding" className="w-full sm:w-auto">
              Set Up My Wallet
            </ButtonLink>
            <ButtonLink href="/" variant="secondary" className="w-full sm:w-auto">
              Back to landing
            </ButtonLink>
          </div>
        </SurfaceCard>
      </div>
    </div>
  );
}

