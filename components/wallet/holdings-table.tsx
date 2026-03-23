import type { Holding } from "@/types/demo";
import { cx, formatCurrency, formatPercent } from "@/lib/utils";

type HoldingsTableProps = {
  holdings: Holding[];
};

export function HoldingsTable({ holdings }: HoldingsTableProps) {
  return (
    <div className="space-y-3">
      <div className="hidden grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] gap-4 px-4 text-xs uppercase tracking-[0.22em] text-text-muted md:grid">
        <span>Asset</span>
        <span>Allocation</span>
        <span>Amount</span>
        <span>Value</span>
        <span>24h</span>
      </div>

      {holdings.map((holding) => (
        <div
          key={holding.symbol}
          className="grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))] md:items-center"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/20 bg-primary-soft font-display text-sm font-semibold text-indigo-100">
              {holding.symbol}
            </div>

            <div>
              <p className="font-display text-lg font-semibold text-white">
                {holding.name}
              </p>
              <p className="text-sm leading-6 text-text-muted">
                {holding.thesis}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted md:hidden">
              Allocation
            </p>
            <p className="text-sm font-semibold text-white">{holding.allocation}%</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted md:hidden">
              Amount
            </p>
            <p className="text-sm font-semibold text-white">{holding.amount}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted md:hidden">
              Value
            </p>
            <p className="text-sm font-semibold text-white">
              {formatCurrency(holding.value)}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-text-muted md:hidden">
              24h
            </p>
            <p
              className={cx(
                "text-sm font-semibold",
                holding.change24h >= 0 ? "text-emerald-300" : "text-rose-300",
              )}
            >
              {formatPercent(holding.change24h)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

