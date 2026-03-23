"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { buttonClassName } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import { cx } from "@/lib/utils";
import type { WalletQuickAction, WalletQuickActionId } from "@/types/demo";

type QuickWalletActionsProps = {
  actions: WalletQuickAction[];
  embedded?: boolean;
};

const iconMap: Record<WalletQuickActionId, string> = {
  receive: "R",
  send: "S",
  swap: "X",
  deposit: "D",
};

export function QuickWalletActions({
  actions,
  embedded = false,
}: QuickWalletActionsProps) {
  const [activeActionId, setActiveActionId] = useState<WalletQuickActionId>(
    actions[0]?.id ?? "receive",
  );
  const [feedback, setFeedback] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeAction = useMemo(
    () =>
      actions.find((action) => action.id === activeActionId) ??
      actions[0],
    [actions, activeActionId],
  );

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

  const content = (
    <div className="space-y-5">
      {embedded ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-sm text-white/64">
            Familiar wallet controls, kept inside the same guided workspace.
          </p>
          <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-indigo-100/55">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
            Familiar behavior, demo-safe
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
              Everyday wallet controls
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white">
              Familiar wallet actions, ready when needed.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/62">
              Receive, send, swap, or fund the wallet while Sagitta keeps the
              guidance layer intact.
            </p>
          </div>

          <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-indigo-100/55">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
            Familiar behavior, demo-safe
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
                "rounded-[22px] border px-4 py-4 text-left transition duration-200",
                isActive
                  ? "border-indigo-300/24 bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(15,23,42,0.74))] shadow-[0_0_30px_rgba(129,140,248,0.12)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.06]",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-primary-soft text-sm font-semibold text-indigo-100">
                  {iconMap[action.id]}
                </div>
                <span
                  className={cx(
                    "rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em]",
                    isActive
                      ? "bg-indigo-300/14 text-indigo-100"
                      : "bg-white/[0.06] text-white/52",
                  )}
                >
                  {isActive ? "Selected" : "Ready"}
                </span>
              </div>

              <p className="mt-4 font-display text-xl font-semibold text-white">
                {action.label}
              </p>
              <p className="mt-1 text-sm text-white/56">{action.hint}</p>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
            Selected action
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            {activeAction.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">
            {activeAction.description}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {activeAction.details.map((detail) => (
              <div
                key={`${activeAction.id}-${detail.label}`}
                className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-white/58">{activeAction.note}</p>
        </div>

        <div className="rounded-[24px] border border-indigo-300/16 bg-[linear-gradient(180deg,rgba(165,180,252,0.08),rgba(15,23,42,0.88))] p-5 shadow-[0_0_34px_rgba(129,140,248,0.08)]">
          <p className="text-xs uppercase tracking-[0.24em] text-indigo-100/72">
            Demo response
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-white">
            {activeAction.status}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/64">
            {feedback ??
              "Run the control once to show the kind of response a familiar wallet action would produce."}
          </p>

          <button
            type="button"
            onClick={handleSimulate}
            className={buttonClassName(
              "secondary",
              "mt-6 w-full justify-center border-indigo-300/20 bg-white/[0.08] hover:border-indigo-300/28 hover:bg-white/[0.12]",
            )}
          >
            {activeAction.primaryCta}
          </button>

          <p className="mt-4 text-sm text-indigo-100/58">
            These controls stay mocked while the wallet still behaves like a
            familiar product.
          </p>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <SurfaceCard className="space-y-5 border-white/10 bg-white/[0.04] p-5 sm:p-6">
      {content}
    </SurfaceCard>
  );
}
