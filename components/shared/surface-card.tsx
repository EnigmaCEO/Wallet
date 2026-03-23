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
        "rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(8,14,30,0.9))] p-6 shadow-[0_24px_80px_rgba(3,7,18,0.45)] backdrop-blur",
        accent &&
          "border-sky-300/18 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(8,14,30,0.9))] shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_36px_rgba(59,130,246,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
