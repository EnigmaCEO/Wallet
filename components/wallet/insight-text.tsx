import { cx } from "@/lib/utils";

type InsightTextProps = {
  children: React.ReactNode;
  subtle?: boolean;
  className?: string;
};

export function InsightText({
  children,
  subtle = false,
  className,
}: InsightTextProps) {
  return (
    <p
      className={cx(
        "text-sm leading-7",
        subtle ? "text-white/58" : "text-white/78",
        className,
      )}
    >
      {children}
    </p>
  );
}
