"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { walletNavigation } from "@/data/navigation";
import { cx } from "@/lib/utils";

export function WalletNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap gap-2">
      {walletNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cx(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-primary-soft text-indigo-100"
                : "bg-white/[0.04] text-white/65 hover:bg-white/[0.08] hover:text-white",
            )}
          >
            {isActive ? (
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-200" />
            ) : null}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

