"use client";

import { cx } from "@/lib/utils";
import type { PerformanceRange } from "@/types/demo";

const performanceRanges: PerformanceRange[] = ["1D", "1M", "YTD", "1Y"];

type PerformanceRangeSelectorProps = {
  activeRange: PerformanceRange;
  onChange: (range: PerformanceRange) => void;
};

export function PerformanceRangeSelector({
  activeRange,
  onChange,
}: PerformanceRangeSelectorProps) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-black/15 p-1">
      {performanceRanges.map((range) => (
        <button
          key={range}
          type="button"
          onClick={() => onChange(range)}
          className={cx(
            "rounded-full px-3.5 py-2 text-sm font-semibold transition",
            activeRange === range
              ? "bg-primary-soft text-indigo-100"
              : "text-white/52 hover:text-white/78",
          )}
        >
          {range}
        </button>
      ))}
    </div>
  );
}

