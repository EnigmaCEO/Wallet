import { cx } from "@/lib/utils";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function SurfaceCard({
  children,
  className,
  accent = false,
}: SurfaceCardProps) {
  return (
    <div
      className={cx(
        "rounded-[28px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45)] backdrop-blur",
        accent &&
          "border-indigo-300/18 bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(15,23,42,0.82))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
