import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { SurfaceCard } from "@/components/shared/surface-card";
import { buttonClassName } from "@/components/shared/button-link";
import type { ActionItem } from "@/types/demo";

type RecommendedActionCardProps = {
  action: ActionItem;
};

export function RecommendedActionCard({
  action,
}: RecommendedActionCardProps) {
  return (
    <SurfaceCard className="flex h-full flex-col justify-between gap-6 border-indigo-300/18 bg-[linear-gradient(180deg,rgba(99,102,241,0.14),rgba(15,23,42,0.94))] p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_44px_rgba(129,140,248,0.12)]">
      <div className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
              Guidance active
            </p>
            <h2 className="font-display text-3xl font-semibold text-white">
              {action.title}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">Selun x402</Badge>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm leading-7 text-white/72">{action.description}</p>
          {action.supportingText ? (
            <p className="max-w-sm text-sm leading-6 text-white/56">
              {action.supportingText}
            </p>
          ) : null}
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white/72">Execution</p>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-200">
            x402 ready
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-text-muted">
          {action.executionHint ?? "Ready to execute using intelligent services."}
        </p>
      </div>

      <div className="space-y-4">
        {action.marketNote ? (
          <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-indigo-100/55">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
            {action.marketNote}
          </p>
        ) : null}

        <Link
          href={action.href}
          className={buttonClassName(
            "primary",
            "w-full shadow-[0_0_46px_rgba(129,140,248,0.3)] hover:shadow-[0_0_58px_rgba(165,180,252,0.38)]",
          )}
        >
          {action.cta}
        </Link>
      </div>
    </SurfaceCard>
  );
}

