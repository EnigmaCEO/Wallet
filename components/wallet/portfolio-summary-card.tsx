"use client";

import { useState } from "react";

import { SurfaceCard } from "@/components/shared/surface-card";
import { PerformanceRangeSelector } from "@/components/wallet/performance-range-selector";
import { cx, formatCurrency, formatPercent, formatSignedCurrency } from "@/lib/utils";
import type {
  OnboardingResponse,
  PerformanceRange,
  WalletSummary,
} from "@/types/demo";

type PortfolioSummaryCardProps = {
  summary: WalletSummary;
  profile: OnboardingResponse;
};

function formatHorizon(horizon: string) {
  return horizon.toLowerCase().replace(" term", "-term");
}

export function PortfolioSummaryCard({
  summary,
  profile,
}: PortfolioSummaryCardProps) {
  const [activeRange, setActiveRange] = useState<PerformanceRange>(
    summary.defaultPerformanceRange,
  );

  const objective = profile.objective.toLowerCase();
  const risk = profile.risk.toLowerCase();
  const horizon = formatHorizon(profile.horizon);
  const performance = summary.performanceByRange[activeRange];
  const performanceTone =
    performance.percent >= 0 ? "text-emerald-300" : "text-rose-300";
  const stateSentence = `Your current allocation reflects a ${risk} ${horizon} ${objective} strategy.`;

  return (
    <SurfaceCard accent className="space-y-6 p-6 sm:p-7">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
              Portfolio summary
            </p>
            <p className="mt-4 text-sm text-white/62">Total Portfolio Value</p>
            <div className="mt-2 flex flex-wrap items-end gap-x-4 gap-y-2">
              <h2 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {formatCurrency(summary.totalValue)}
              </h2>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-white/38">
                {performance.label} P&amp;L
              </span>
              <span className={cx("text-sm font-semibold", performanceTone)}>
                {formatSignedCurrency(performance.profitLoss)}
              </span>
              <span className={cx("text-sm font-semibold", performanceTone)}>
                {formatPercent(performance.percent)}
              </span>
            </div>
            {performance.context ? (
              <p className="mt-2 text-xs text-white/38">{performance.context}</p>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <p className="text-sm text-text-muted">Performance</p>
              <PerformanceRangeSelector
                activeRange={activeRange}
                onChange={setActiveRange}
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-text-muted">Current strategy</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[profile.objective, profile.horizon, profile.risk].map((value) => (
                  <div
                    key={value}
                    className="inline-flex items-center gap-2 text-sm text-white/68"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/70" />
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-white/72">
          {stateSentence}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(15rem,0.74fr)_minmax(0,1.26fr)]">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-sm text-text-muted">Available to Invest</p>
          <p className="mt-3 font-display text-3xl font-semibold text-white">
            {formatCurrency(summary.availableCash)}
          </p>
          <p className="mt-2 text-sm text-white/58">USDC ready for new actions</p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-text-muted">Portfolio state</p>
          <p className="mt-3 font-display text-2xl font-semibold text-white">
            Balanced for long-term growth
          </p>
          <p className="mt-2 text-sm leading-6 text-white/62">
            Core assets anchor the portfolio while available cash keeps room to
            adapt.
          </p>
        </div>
      </div>
    </SurfaceCard>
  );
}

