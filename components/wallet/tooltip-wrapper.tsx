import { cx } from "@/lib/utils";

type TooltipWrapperProps = {
  children: React.ReactNode;
  content: string;
  align?: "left" | "right";
  className?: string;
  panelClassName?: string;
};

export function TooltipWrapper({
  children,
  content,
  align = "left",
  className,
  panelClassName,
}: TooltipWrapperProps) {
  return (
    <div className={cx("group relative", className)}>
      {children}

      <div
        className={cx(
          "pointer-events-none absolute top-[calc(100%+0.6rem)] z-20 w-72 rounded-[20px] border border-white/10 bg-surface-strong p-4 text-sm leading-6 text-white/75 opacity-0 shadow-[0_24px_80px_rgba(3,7,18,0.55)] transition duration-200 translate-y-1 scale-[0.98] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100",
          align === "right" ? "right-0" : "left-0",
          panelClassName,
        )}
      >
        {content}
      </div>
    </div>
  );
}
