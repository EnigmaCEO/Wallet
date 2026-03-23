import { HeroSection } from "@/components/marketing/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SurfaceCard } from "@/components/shared/surface-card";
import {
  capabilityCards,
  experienceColumns,
  howSagittaWorks,
  whyWalletsFail,
} from "@/data/marketing";

export default function LandingPage() {
  return (
    <div className="space-y-24 pb-16">
      <HeroSection />

      <section id="why-wallets-fail" className="space-y-10">
        <SectionHeading
          eyebrow="Why current wallets fail new users"
          title="Normal wallets give access. Sagitta gives guidance."
          description="The gap is not access. It is direction."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {whyWalletsFail.map((item) => (
            <SurfaceCard key={item.title} className="h-full space-y-4">
              <h3 className="font-display text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-text-muted">
                {item.description}
              </p>
              {item.detail ? (
                <p className="text-sm font-medium text-indigo-100">{item.detail}</p>
              ) : null}
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section id="how-sagitta-works" className="space-y-10">
        <SectionHeading
          eyebrow="How Sagitta works"
          title="A guided wallet journey from setup to action."
        />

        <div className="grid gap-4 xl:grid-cols-4">
          {howSagittaWorks.map((step) => (
            <SurfaceCard key={step.step} className="h-full space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-100/80">
                Step {step.step}
              </p>
              <h3 className="font-display text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-7 text-text-muted">
                {step.description}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section id="wallet-agent" className="space-y-10">
        <SectionHeading
          eyebrow="Your wallet comes with an agent"
          title="Agent-native underneath. Consumer-friendly on the surface."
          description="The intelligence is built in. The interface stays simple."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {experienceColumns.map((column) => (
            <SurfaceCard key={column.title} className="space-y-5">
              <h3 className="font-display text-2xl font-semibold text-white">
                {column.title}
              </h3>

              <div className="space-y-3">
                {column.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-200" />
                    <p className="text-sm leading-6 text-white/75">{bullet}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </section>

      <section id="capabilities" className="space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="A smarter crypto wallet that can grow into a real platform."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {capabilityCards.map((item) => (
            <SurfaceCard key={item.title} className="h-full space-y-4 p-5">
              <h3 className="font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-text-muted">
                {item.description}
              </p>
            </SurfaceCard>
          ))}
        </div>
      </section>
    </div>
  );
}

