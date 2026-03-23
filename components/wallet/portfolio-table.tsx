import type {
  ActivityItem,
  Holding,
  WalletQuickAction,
  WalletQuickActionId,
} from "@/types/demo";
import { SurfaceCard } from "@/components/shared/surface-card";
import { QuickWalletActions } from "@/components/wallet/quick-wallet-actions";
import { TooltipWrapper } from "@/components/wallet/tooltip-wrapper";
import { cx, formatCurrency } from "@/lib/utils";

type PortfolioTableProps = {
  activeTab: "portfolio" | "activity" | "actions";
  onTabChange: (tab: "portfolio" | "activity" | "actions") => void;
  holdings: Holding[];
  activity: ActivityItem[];
  quickActions: WalletQuickAction[];
  activeQuickActionId: WalletQuickActionId;
  onQuickActionSelect: (id: WalletQuickActionId) => void;
};

const tabs = [
  { id: "portfolio", label: "Portfolio" },
  { id: "actions", label: "Actions" },
  { id: "activity", label: "Activity" },
] as const;

const activityToneMap = {
  insight: "bg-indigo-400/12 text-indigo-100",
  allocation: "bg-violet-300/12 text-violet-100",
  deposit: "bg-emerald-400/12 text-emerald-100",
  report: "bg-white/10 text-white/75",
} as const;

export function PortfolioTable({
  activeTab,
  onTabChange,
  holdings,
  activity,
  quickActions,
  activeQuickActionId,
  onQuickActionSelect,
}: PortfolioTableProps) {
  return (
    <SurfaceCard className="overflow-hidden p-0">
      <div className="flex flex-col gap-5 border-b border-white/10 px-5 py-6 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
            Capital allocation
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white">
            {activeTab === "portfolio"
              ? "Portfolio positions"
              : activeTab === "actions"
                ? "Wallet controls"
                : "Recent Activity"}
          </h2>
          <p className="mt-2 text-sm text-white/60">
            {activeTab === "portfolio"
              ? "Current positions, exposure, and the role each asset plays in your strategy."
              : activeTab === "actions"
                ? "Familiar wallet controls kept inside the same guided workspace."
                : "The latest updates shaping your portfolio decisions."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={cx(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                activeTab === tab.id
                  ? "bg-[linear-gradient(180deg,rgba(99,102,241,0.18),rgba(79,70,229,0.16))] text-indigo-100 shadow-[0_0_22px_rgba(129,140,248,0.08)]"
                  : "bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {activeTab === "portfolio" ? (
          <div className="space-y-3">
            <div className="hidden grid-cols-[minmax(0,1fr)_96px_132px_132px] gap-4 px-4 text-xs uppercase tracking-[0.22em] text-text-muted md:grid">
              <span>Asset</span>
              <span className="text-right">Allocation</span>
              <span className="text-right">Amount</span>
              <span className="text-right">Value</span>
            </div>

            <div className="space-y-3">
              {holdings.map((holding) => (
                <div
                  key={holding.symbol}
                  className="grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[minmax(0,1fr)_96px_132px_132px] md:items-center"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-primary-soft font-display text-sm font-semibold text-indigo-100">
                      {holding.symbol}
                    </div>

                    <div className="min-w-0">
                      <p className="font-display text-lg font-semibold text-white">
                        {holding.name}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <p className="text-sm text-white/55">{holding.thesis}</p>
                        <TooltipWrapper
                          content={holding.why}
                          panelClassName="w-64"
                          className="hidden md:block"
                        >
                          <button
                            type="button"
                            title={holding.why}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/55 transition duration-200 hover:border-indigo-300/30 hover:bg-indigo-300/10 hover:text-indigo-100"
                          >
                            ?
                          </button>
                        </TooltipWrapper>
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-sm font-semibold text-white">
                    {holding.allocation}%
                  </div>
                  <div className="text-right text-sm font-semibold whitespace-nowrap text-white">
                    {holding.amount}
                  </div>
                  <div className="text-right text-sm font-semibold whitespace-nowrap text-white">
                    {formatCurrency(holding.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "actions" ? (
          <QuickWalletActions
            actions={quickActions}
            embedded
            activeActionId={activeQuickActionId}
            onSelectAction={onQuickActionSelect}
          />
        ) : null}

        {activeTab === "activity" ? (
          <div className="space-y-3">
            {activity.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${activityToneMap[item.type]}`}
                    >
                      {item.type}
                    </span>
                    <span className="text-sm text-text-muted">{item.timestamp}</span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </SurfaceCard>
  );
}

