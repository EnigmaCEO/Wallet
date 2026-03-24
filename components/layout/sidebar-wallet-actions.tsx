"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { buttonClassName } from "@/components/shared/button-link";
import { getWalletDemoData } from "@/data/wallet";
import { useDemoWalletState } from "@/components/wallet/use-demo-wallet-state";
import { cx } from "@/lib/utils";
import type { WalletQuickActionId } from "@/types/demo";

const iconMap: Record<WalletQuickActionId, string> = {
  allocate: "A",
  send: "S",
  receive: "R",
  fund: "F",
};

const sidebarSummaryMap: Record<WalletQuickActionId, string> = {
  allocate: "Route new capital into Selun.",
  receive: "Copy the wallet address to receive assets.",
  send: "Stage a transfer review.",
  fund: "Bring fresh USDC into the wallet.",
};

export function SidebarWalletActions() {
  const demoState = useDemoWalletState();
  const actions = useMemo(
    () => getWalletDemoData(demoState).quickActions,
    [demoState],
  );
  const [activeActionId, setActiveActionId] =
    useState<WalletQuickActionId>("allocate");
  const [feedback, setFeedback] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeAction =
    actions.find((action) => action.id === activeActionId) ?? actions[0] ?? null;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!activeAction) {
    return null;
  }

  const handleSimulate = () => {
    setFeedback(activeAction.feedback);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setFeedback(null);
    }, 2200);
  };

  return (
    <div className="space-y-3 border-t border-white/10 pt-4">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
          Actions
        </p>
      </div>

      <div className="space-y-1.5">
        {actions.map((action) => {
          const isActive = action.id === activeAction.id;

          return (
            <button
              key={action.id}
              type="button"
              onClick={() => {
                setActiveActionId(action.id);
                setFeedback(null);
              }}
              className={cx(
                "flex w-full items-center gap-3 rounded-[18px] border px-4 py-2.5 text-left transition",
                isActive
                  ? "border-indigo-300/20 bg-[linear-gradient(180deg,rgba(99,102,241,0.14),rgba(15,23,42,0.78))] text-white shadow-[0_0_26px_rgba(129,140,248,0.1)]"
                  : "border-transparent text-white/66 hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
              )}
            >
              <span
                className={cx(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border text-xs font-semibold",
                  isActive
                    ? "border-indigo-300/24 bg-primary-soft text-indigo-100"
                    : "border-white/10 bg-white/[0.04] text-white/64",
                )}
              >
                {iconMap[action.id]}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{action.label}</p>
                <p className="mt-0.5 text-[0.72rem] text-white/40">
                  {action.id === "allocate"
                    ? "Selun"
                    : action.id === "fund"
                      ? "USDC"
                      : action.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3.5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
              Current action
            </p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
              {activeAction.label}
            </h3>
          </div>
          <span className="rounded-full bg-indigo-300/14 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-indigo-100">
            Ready
          </span>
        </div>

        <p className="mt-2.5 text-sm leading-6 text-white/60">
          {feedback ?? sidebarSummaryMap[activeAction.id]}
        </p>

        <button
          type="button"
          onClick={handleSimulate}
          className={buttonClassName(
            "secondary",
            "mt-3 w-full justify-center border-indigo-300/20 bg-white/[0.08] py-2.5 hover:border-indigo-300/28 hover:bg-white/[0.12]",
          )}
        >
          {activeAction.primaryCta}
        </button>
      </div>
    </div>
  );
}
