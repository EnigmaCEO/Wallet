"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { walletNavigation } from "@/data/navigation";
import { cx } from "@/lib/utils";

type WalletNavigationProps = {
  orientation?: "horizontal" | "vertical";
};

export function WalletNavigation({
  orientation = "horizontal",
}: WalletNavigationProps) {
  const pathname = usePathname();
  const isVertical = orientation === "vertical";

  return (
    <nav
      className={cx(
        isVertical ? "flex flex-col gap-1.5" : "flex flex-wrap gap-2",
      )}
    >
      {walletNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cx(
              isVertical
                ? "flex items-start gap-3 rounded-[22px] px-4 py-3 transition"
                : "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
              isVertical &&
                (isActive
                  ? "border border-indigo-300/18 bg-[linear-gradient(180deg,rgba(99,102,241,0.14),rgba(15,23,42,0.78))] text-white shadow-[0_0_28px_rgba(129,140,248,0.1)]"
                  : "border border-transparent text-white/64 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"),
              !isVertical &&
                (isActive
                  ? "bg-primary-soft text-indigo-100"
                  : "bg-white/[0.04] text-white/65 hover:bg-white/[0.08] hover:text-white"),
            )}
          >
            <span
              className={cx(
                "shrink-0 rounded-full",
                isVertical
                  ? isActive
                    ? "mt-1 h-2.5 w-2.5 bg-indigo-200"
                    : "mt-1 h-2 w-2 bg-white/18"
                  : isActive
                    ? "h-1.5 w-1.5 bg-indigo-200"
                    : "hidden",
              )}
            />
            <span className={cx("min-w-0", !isVertical && "text-sm")}>
              <span className="block font-medium">{item.label}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

