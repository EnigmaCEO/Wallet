import { cx, formatPercent } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  note?: string;
  trend?: number;
};

export function StatCard({ label, value, note, trend }: StatCardProps) {
  const trendClassName =
    typeof trend === "number"
      ? trend >= 0
        ? "text-emerald-300"
        : "text-rose-300"
      : "text-white/70";

  return (
    <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
      <p className="text-sm text-text-muted">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="font-display text-3xl font-semibold text-white">{value}</p>
        {typeof trend === "number" ? (
          <span className={cx("text-sm font-semibold", trendClassName)}>
            {formatPercent(trend)}
          </span>
        ) : null}
      </div>
      {note ? <p className="mt-3 text-sm leading-6 text-white/65">{note}</p> : null}
    </div>
  );
}
