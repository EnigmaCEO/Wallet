import Link from "next/link";

import { BrandMark } from "@/components/shared/brand-mark";

export function MarketingFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-xl text-sm leading-6 text-text-muted">
            Sagitta Wallet is a premium crypto wallet concept built around guided
            portfolio decisions, not just access to assets.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/65">
          <Link href="/start" className="transition hover:text-white">
            Start onboarding
          </Link>
          <Link href="/wallet" className="transition hover:text-white">
            Demo wallet
          </Link>
          <Link href="/wallet/reports" className="transition hover:text-white">
            Monthly report
          </Link>
        </div>
      </div>
    </footer>
  );
}
