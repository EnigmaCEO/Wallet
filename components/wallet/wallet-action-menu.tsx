"use client";

import Link from "next/link";
import { useState } from "react";

import type { ActionItem } from "@/types/demo";
import { cx } from "@/lib/utils";

type WalletActionMenuProps = {
  actions: ActionItem[];
};

export function WalletActionMenu({ actions }: WalletActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/78 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
      >
        Service lane
        <span className={cx("text-xs transition", isOpen && "rotate-180")}>v</span>
      </button>

      {isOpen ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-30 w-72 rounded-[24px] border border-white/10 bg-surface-strong p-3 shadow-[0_24px_80px_rgba(3,7,18,0.55)] backdrop-blur">
          <div className="space-y-1">
            {actions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-[18px] border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.05]"
              >
                {action.eyebrow ? (
                  <p className="text-[0.64rem] uppercase tracking-[0.24em] text-text-muted">
                    {action.eyebrow}
                  </p>
                ) : null}
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {action.title}
                </p>
                {action.description ? (
                  <p className="mt-1 text-sm text-white/60">{action.description}</p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
