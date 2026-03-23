import { Badge } from "@/components/shared/badge";
import { ButtonLink } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";

const heroSignals = [
  {
    label: "Profile",
    value: "Growth / Balanced",
  },
  {
    label: "Next action",
    value: "Open services",
  },
  {
    label: "Report",
    value: "Monthly ready",
  },
];

const heroJourney = [
  {
    step: "01",
    title: "Profile",
    detail: "Goals, horizon, risk.",
  },
  {
    step: "02",
    title: "Fund",
    detail: "Deposit when ready.",
  },
  {
    step: "03",
    title: "Execute",
    detail: "Services, research, reports.",
  },
];

export function HeroSection() {
  return (
    <section className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
      <div className="space-y-8">
        <div className="space-y-5">
          <Badge tone="accent">Your wallet comes with guidance</Badge>
          <h1 className="text-balance font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Crypto wallets give you assets. Sagitta gives you a strategy.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-text-muted">
            A smarter crypto wallet built around goals, not guesswork.
          </p>
          <p className="max-w-3xl text-sm leading-7 text-indigo-100/72 sm:text-base">
            As AI agents begin executing decisions across the internet, wallets
            need to evolve from storage to strategy.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/wallet">View Demo</ButtonLink>
          <ButtonLink href="/start" variant="secondary">
            Get Started
          </ButtonLink>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
            Demo flow
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroJourney.map((item) => (
              <div
                key={item.step}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-indigo-100/72">
                  Step {item.step}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SurfaceCard accent className="relative overflow-hidden p-7 sm:p-8">
        <div className="glow-pulse absolute right-10 top-6 h-28 w-28 rounded-full bg-indigo-300/12 blur-3xl" />

        <div className="relative space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
                Live Demo Preview
              </p>
              <h2 className="font-display text-2xl font-semibold text-white">
                A wallet that feels informed before the first action.
              </h2>
            </div>
            <Badge>Demo data</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text-muted">Portfolio stance</p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                Balanced growth
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">Goal-aligned from the start.</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text-muted">Next best action</p>
              <p className="mt-3 font-display text-2xl font-semibold text-white">
                Generate first allocation
              </p>
              <p className="mt-3 text-sm leading-6 text-white/65">Start with a plan.</p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-display text-xl font-semibold text-white">
                Guidance layer active
              </p>
              <Badge tone="positive">Ready</Badge>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SurfaceCard>
    </section>
  );
}

