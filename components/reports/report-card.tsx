import { ButtonLink } from "@/components/shared/button-link";
import type { ReportSection } from "@/types/demo";
import { Badge } from "@/components/shared/badge";
import { SurfaceCard } from "@/components/shared/surface-card";
import { cx } from "@/lib/utils";

export function ReportCard({
  title,
  metric,
  summary,
  note,
  kind = "default",
  actions,
}: ReportSection) {
  const isNextSteps = kind === "next-steps";

  return (
    <SurfaceCard
      className={cx(
        "h-full space-y-4 p-5",
        isNextSteps &&
          "border-indigo-300/22 bg-[linear-gradient(180deg,rgba(99,102,241,0.16),rgba(15,23,42,0.84))] shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_44px_rgba(129,140,248,0.12)]",
      )}
    >
      {isNextSteps ? (
        <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
          What to do next
        </p>
      ) : null}
      <Badge tone={isNextSteps ? "accent" : "default"}>{metric}</Badge>
      <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-7 text-white/72">{summary}</p>
      <p className="text-sm leading-6 text-text-muted">{note}</p>
      {actions?.length ? (
        <div className="flex flex-wrap gap-3 pt-1">
          {actions.map((action) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              variant="secondary"
              className="px-4 py-2.5 hover:shadow-[0_12px_30px_rgba(129,140,248,0.12)]"
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </SurfaceCard>
  );
}

