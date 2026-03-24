import Link from "next/link";

import { marketingNavigation } from "@/data/navigation";
import { BrandMark } from "@/components/shared/brand-mark";
import { ButtonLink } from "@/components/shared/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-3 z-30 pt-3 sm:top-4 sm:pt-4">
      <div className="rounded-[24px] border border-white/10 bg-surface/90 px-4 py-3 shadow-[0_24px_80px_rgba(3,7,18,0.42)] backdrop-blur sm:rounded-[28px] sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
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

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
              <ButtonLink href="/wallet" className="w-full px-4 py-2.5 sm:w-auto">
                View Demo
              </ButtonLink>
              <ButtonLink
                href="/start"
                variant="secondary"
                className="w-full px-4 py-2.5 sm:w-auto"
              >
                Get Started
              </ButtonLink>
            </div>
          </div>

          <nav
            aria-label="Marketing sections"
            className="flex flex-wrap gap-2 lg:hidden"
          >
            {marketingNavigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/70 transition hover:border-white/18 hover:bg-white/[0.08] hover:text-white"
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
