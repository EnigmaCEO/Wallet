import Link from "next/link";

import { marketingNavigation } from "@/data/navigation";
import { BrandMark } from "@/components/shared/brand-mark";
import { ButtonLink } from "@/components/shared/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-30 pt-4">
      <div className="rounded-[28px] border border-white/10 bg-surface/90 px-5 py-4 shadow-[0_24px_80px_rgba(3,7,18,0.42)] backdrop-blur">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <BrandMark />

            <nav className="hidden items-center gap-6 lg:flex">
              {marketingNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/wallet">View Demo</ButtonLink>
              <ButtonLink href="/start" variant="secondary">
                Get Started
              </ButtonLink>
            </div>
          </div>

          <nav
            aria-label="Marketing sections"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
          >
            {marketingNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
