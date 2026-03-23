import { SurfaceCard } from "@/components/shared/surface-card";
import type { ActionItem, OnboardingResponse } from "@/types/demo";

type WalletStatusCardsProps = {
  profile: OnboardingResponse;
  action: ActionItem;
};

function formatStrategyTitle(profile: OnboardingResponse) {
  return `${profile.risk} ${profile.objective}`;
}

function formatStrategyMeta(profile: OnboardingResponse) {
  return `${profile.horizon} posture`;
}

export function WalletStatusCards({
  profile,
  action,
}: WalletStatusCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
      <SurfaceCard className="border-white/10 bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(15,23,42,0.86))] p-5 shadow-[0_18px_60px_rgba(3,7,18,0.32)]">
        <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
          Strategy
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white">
          {formatStrategyTitle(profile)}
        </h3>
        <p className="mt-2 text-sm text-white/62">{formatStrategyMeta(profile)}</p>
      </SurfaceCard>

      <SurfaceCard className="border-indigo-300/18 bg-[linear-gradient(180deg,rgba(99,102,241,0.18),rgba(15,23,42,0.9))] p-5 shadow-[0_18px_60px_rgba(3,7,18,0.34),0_0_28px_rgba(129,140,248,0.1)]">
        <p className="text-xs uppercase tracking-[0.24em] text-indigo-100/72">
          Guidance active
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white">
          {action.title}
        </h3>
        <p className="mt-2 text-sm text-white/62">
          {action.marketNote ?? "Updated for current conditions"}
        </p>
      </SurfaceCard>
    </div>
  );
}
