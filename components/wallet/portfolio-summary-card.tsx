"use client";

import { useState } from "react";

import { SurfaceCard } from "@/components/shared/surface-card";
import { PerformanceRangeSelector } from "@/components/wallet/performance-range-selector";
import { cx, formatCurrency, formatPercent, formatSignedCurrency } from "@/lib/utils";
import type {
  OnboardingResponse,
  PerformanceRange,
  WalletQuickAction,
  WalletQuickActionId,
  WalletSummary,
} from "@/types/demo";

type PortfolioSummaryCardProps = {
  summary: WalletSummary;
  profile: OnboardingResponse;
  quickActions: WalletQuickAction[];
  activeQuickActionId: WalletQuickActionId;
  onQuickActionSelect: (id: WalletQuickActionId) => void;
};

function formatHorizon(horizon: string) {
  return horizon.toLowerCase().replace(" term", "-term");
}

function formatStrategyTitle(profile: OnboardingResponse) {
  const objective = profile.objective.toLowerCase();
  const risk = profile.risk.toLowerCase();

  return `${risk.charAt(0).toUpperCase()}${risk.slice(1)} ${objective}`;
}

export function PortfolioSummaryCard({
  summary,
  profile,
  quickActions,
  activeQuickActionId,
  onQuickActionSelect,
}: PortfolioSummaryCardProps) {
  const [activeRange, setActiveRange] = useState<PerformanceRange>(
    summary.defaultPerformanceRange,
  );

  const objective = profile.objective.toLowerCase();
  const horizon = formatHorizon(profile.horizon);
  const performance = summary.performanceByRange[activeRange];
  const performanceTone =
    performance.percent >= 0 ? "text-emerald-300" : "text-rose-300";
  const stateSentence = `Goal-aligned for ${horizon} ${objective}.`;
  const strategyTitle = formatStrategyTitle(profile);
  const availableLabel =
    summary.availableCash === summary.totalValue
      ? "USDC ready for first action"
      : "USDC kept ready";
  const surfaceActions = [
    quickActions.find((action) => action.id === "allocate"),
    quickActions.find((action) => action.id === "fund"),
    quickActions.find((action) => action.id === "send"),
    quickActions.find((action) => action.id === "receive"),
  ].filter((action): action is WalletQuickAction => Boolean(action));

  return (
    <SurfaceCard
      accent
      className="border-indigo-300/18 bg-[linear-gradient(180deg,rgba(99,102,241,0.14),rgba(15,23,42,0.9))] p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_44px_rgba(129,140,248,0.1)] sm:p-7"
    >
      <div className="space-y-6">
        <div className="space-y-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">Balance</p>
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

            <div className="space-y-4 xl:max-w-xs">
              <div className="space-y-3">
                <p className="text-sm text-text-muted">Performance</p>
                <PerformanceRangeSelector
                  activeRange={activeRange}
                  onChange={setActiveRange}
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-text-muted">Strategy</p>
                <div className="flex flex-wrap items-center gap-3">
                  {[profile.objective, profile.horizon, profile.risk].map((value) => (
                    <div
                      key={value}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-sm text-white/72"
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[minmax(15rem,0.72fr)_minmax(0,1.28fr)]">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-text-muted">Available</p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                {formatCurrency(summary.availableCash)}
              </p>
              <p className="mt-2 text-sm text-white/58">{availableLabel}</p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-text-muted">Posture</p>
              <p className="mt-3 font-display text-2xl font-semibold text-white">
                {strategyTitle}
              </p>
              <p className="mt-2 text-sm text-white/62">{stateSentence}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 xl:hidden">
          {surfaceActions.map((action) => {
            const isActive = activeQuickActionId === action.id;

            return (
              <button
                key={action.id}
                type="button"
                onClick={() => onQuickActionSelect(action.id)}
                className={cx(
                  "inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200",
                  isActive
                    ? "border-indigo-300/24 bg-white text-slate-950 shadow-[0_0_26px_rgba(255,255,255,0.12)]"
                    : "border-white/10 bg-white/[0.05] text-white hover:border-white/18 hover:bg-white/[0.1]",
                )}
              >
                <span
                  className={cx(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                    isActive
                      ? "bg-slate-950/10 text-slate-950"
                      : "bg-primary-soft text-indigo-100",
                  )}
                >
                  {action.label.slice(0, 1)}
                </span>
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </SurfaceCard>
  );
}

