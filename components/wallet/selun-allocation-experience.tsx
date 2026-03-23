"use client";

import { useState } from "react";

import { selunAllocation, selunContent, selunExecutionNote } from "@/data/selun";
import { buttonClassName } from "@/components/shared/button-link";
import { Badge } from "@/components/shared/badge";
import { SurfaceCard } from "@/components/shared/surface-card";
import { AllocationCard } from "@/components/wallet/allocation-card";
import type { OnboardingResponse, PortfolioActionMode } from "@/types/demo";

type SelunAllocationExperienceProps = {
  profile: OnboardingResponse;
  mode: PortfolioActionMode;
};

export function SelunAllocationExperience({
  profile,
  mode,
}: SelunAllocationExperienceProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "complete">("idle");
  const content = selunContent[mode];

  const handleGenerate = () => {
    if (status === "loading") {
      return;
    }

    setStatus("loading");

    window.setTimeout(() => {
      setStatus("complete");
    }, 1800);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
      <div className="space-y-6">
        <SurfaceCard accent className="space-y-5">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-white">
              {content.headline}
            </h2>
            <p className="text-sm leading-7 text-white/75">
              {content.description}
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-indigo-100/78">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
              {content.urgencyNote}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {content.process.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-white">
                {content.creditRequirement}
              </p>
              <Badge tone="accent">{content.freshnessNote}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              {content.marketNote}
            </p>
          </div>

          <button
            type="button"
            onClick={handleGenerate}
            className={buttonClassName(
              "primary",
              "w-full shadow-[0_0_46px_rgba(129,140,248,0.28)] hover:-translate-y-0.5 hover:shadow-[0_0_58px_rgba(165,180,252,0.34)]",
            )}
          >
            {status === "loading" ? content.loadingLabel : content.ctaLabel}
          </button>

          <div className="space-y-2">
            <p className="text-sm leading-6 text-white/62">{content.ctaNote}</p>
            <p className="text-sm leading-6 text-text-muted">{selunExecutionNote}</p>
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
            Current profile
          </p>

          <div className="flex flex-wrap gap-2">
            {Object.values(profile).map((value) => (
              <div
                key={value}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
              >
                {value}
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <div className="space-y-6">
        {status === "idle" ? (
          <SurfaceCard className="space-y-7">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
                Preview
              </p>
              <h3 className="font-display text-3xl font-semibold text-white">
                {content.previewTitle}
              </h3>
              <p className="max-w-2xl text-sm leading-7 text-white/72">
                {content.previewDescription}
              </p>
              <p className="text-sm text-indigo-100/68">
                {content.previewConfidenceLine}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
                  Projected Changes
                </p>
                <div className="mt-4 space-y-3">
                  {content.previewChanges.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
                  Expected Outcome
                </p>
                <div className="mt-4 space-y-3">
                  {content.previewOutcomes.map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-3 text-sm text-white/78"
                    >
                      <span className="h-2 w-2 rounded-full bg-indigo-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SurfaceCard>
        ) : null}

        {status === "loading" ? (
          <SurfaceCard className="space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
              Building recommendation
            </p>
            <div className="space-y-3">
              {content.loadingSteps.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-white">{item}</p>
                    <span className="h-2 w-2 rounded-full bg-indigo-200 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
        ) : null}

        {status === "complete" ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {selunAllocation.map((item) => (
                <AllocationCard key={item.symbol} {...item} />
              ))}
            </div>

            <SurfaceCard className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
                    Recommendation summary
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {content.summaryTitle}
                  </h3>
                </div>
                <Badge tone="positive">Ready for execution later</Badge>
              </div>

              <p className="text-sm leading-7 text-white/72">
                {content.summaryBody}
              </p>
            </SurfaceCard>
          </>
        ) : null}
      </div>
    </div>
  );
}

