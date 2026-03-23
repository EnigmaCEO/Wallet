import { ButtonLink } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import { cx } from "@/lib/utils";
import type { ActivityItem } from "@/types/demo";

type RecentActivityPanelProps = {
  activity: ActivityItem[];
  onViewAll?: () => void;
};

const activityToneMap = {
  insight: "bg-indigo-400/12 text-indigo-100",
  allocation: "bg-violet-300/12 text-violet-100",
  deposit: "bg-emerald-400/12 text-emerald-100",
  report: "bg-white/10 text-white/75",
} as const;

export function RecentActivityPanel({
  activity,
  onViewAll,
}: RecentActivityPanelProps) {
  const previewItems = activity.slice(0, 3);

  return (
    <SurfaceCard className="space-y-5 border-white/10 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(15,23,42,0.88))] p-5 shadow-[0_18px_60px_rgba(3,7,18,0.34)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
            Recent activity
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white">
            Activity
          </h2>
        </div>

        {onViewAll ? (
          <button
            type="button"
            onClick={onViewAll}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/72 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
          >
            View all
          </button>
        ) : (
          <ButtonLink href="/wallet/reports" variant="secondary">
            View all
          </ButtonLink>
        )}
      </div>

      <div className="space-y-3">
        {previewItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span
                className={cx(
                  "rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
                  activityToneMap[item.type],
                )}
              >
                {item.type}
              </span>
              <span className="text-sm text-text-muted">{item.timestamp}</span>
            </div>

            <p className="mt-4 font-display text-xl font-semibold text-white">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/60">{item.detail}</p>
          </div>
        ))}
      </div>

      <ButtonLink href="/wallet/reports" className="w-full">
        View Next Actions
      </ButtonLink>
    </SurfaceCard>
  );
}
