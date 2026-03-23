import { cx } from "@/lib/utils";

type BadgeTone = "default" | "accent" | "positive";

const toneStyles: Record<BadgeTone, string> = {
  default: "border-white/12 bg-white/[0.06] text-white/75",
  accent:
    "border-sky-300/22 bg-[rgba(73,163,255,0.14)] text-sky-100 shadow-[0_0_18px_rgba(73,163,255,0.08)]",
  positive: "border-emerald-300/18 bg-emerald-400/10 text-emerald-200",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({
  children,
  tone = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
