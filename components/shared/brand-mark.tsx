import Image from "next/image";
import Link from "next/link";

import { cx } from "@/lib/utils";

type BrandMarkProps = {
  href?: string;
  className?: string;
};

export function BrandMark({ href = "/", className }: BrandMarkProps) {
  return (
    <Link href={href} className={cx("group inline-flex items-center gap-3", className)}>
      <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-indigo-300/20 bg-primary-soft shadow-[0_0_32px_rgba(129,140,248,0.18)]">
        <span className="glow-pulse absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(165,180,252,0.28),transparent_58%)]" />
        <Image
          src="/icon.png"
          alt="Sagitta logo"
          width={44}
          height={44}
          className="relative h-full w-full object-cover"
          priority
        />
      </span>

      <span className="flex flex-col">
        <span className="text-[0.65rem] uppercase tracking-[0.32em] text-text-muted">
          Sagitta
        </span>
        <span className="font-display text-lg font-medium text-white transition group-hover:text-indigo-100">
          Wallet
        </span>
      </span>
    </Link>
  );
}
