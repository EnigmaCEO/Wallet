import { ButtonLink } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import { InsightText } from "@/components/wallet/insight-text";

type InsightPanelProps = {
  title: string;
  meta?: string;
  primaryMessage: string;
  secondaryMessage?: string;
  ctaLabel: string;
  ctaHref: string;
};

export function InsightPanel({
  title,
  meta,
  primaryMessage,
  secondaryMessage,
  ctaLabel,
  ctaHref,
}: InsightPanelProps) {
  return (
    <SurfaceCard className="border-indigo-300/14 bg-[linear-gradient(180deg,rgba(165,180,252,0.08),rgba(15,23,42,0.82))] px-5 py-5 sm:px-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">
              {title}
            </p>
            {meta ? (
              <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-indigo-100/55">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
                {meta}
              </p>
            ) : null}
          </div>
          <InsightText>{primaryMessage}</InsightText>
          {secondaryMessage ? (
            <InsightText subtle>{secondaryMessage}</InsightText>
          ) : null}
        </div>

        <ButtonLink
          href={ctaHref}
          variant="secondary"
          className="self-start border-indigo-300/16 bg-white/[0.08]"
        >
          {ctaLabel}
        </ButtonLink>
      </div>
    </SurfaceCard>
  );
}

