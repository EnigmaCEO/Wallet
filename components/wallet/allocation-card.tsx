import type { AllocationRecommendation } from "@/types/demo";

export function AllocationCard({
  symbol,
  name,
  percentage,
  reason,
}: AllocationRecommendation) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            {symbol}
          </p>
          <p className="text-sm text-text-muted">{name}</p>
        </div>

        <div className="rounded-full border border-indigo-300/20 bg-primary-soft px-3 py-1 text-sm font-semibold text-indigo-100">
          {percentage}%
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#c7d2fe,#818cf8)]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-4 text-sm leading-6 text-white/72">{reason}</p>
    </div>
  );
}

