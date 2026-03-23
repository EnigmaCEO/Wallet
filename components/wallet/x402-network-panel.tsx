import { Badge } from "@/components/shared/badge";
import { ButtonLink } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import {
  approvedX402Services,
  liveX402Endpoints,
  x402LaneContent,
} from "@/data/x402";
import { cx } from "@/lib/utils";

type X402NetworkPanelProps = {
  activeHref?: string;
};

export function X402NetworkPanel({ activeHref }: X402NetworkPanelProps) {
  return (
    <SurfaceCard
      accent
      className="space-y-8 border-indigo-300/20 shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_36px_rgba(129,140,248,0.08)]"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl space-y-4">
          <Badge tone="accent">{x402LaneContent.eyebrow}</Badge>
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-semibold text-white">
              {x402LaneContent.title}
            </h2>
            <p className="text-sm leading-7 text-white/74">
              {x402LaneContent.description}
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/20 px-5 py-4">
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
            {x402LaneContent.controlTitle}
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            {x402LaneContent.controlValue}
          </p>
          <p className="mt-2 text-sm leading-6 text-white/65">
            {x402LaneContent.controlNote}
          </p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {liveX402Endpoints.map((endpoint) => {
          const isActive = endpoint.href === activeHref;

          return (
            <div
              key={endpoint.title}
              className={cx(
                "flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-200",
                isActive &&
                  "border-indigo-300/24 bg-[linear-gradient(180deg,rgba(99,102,241,0.12),rgba(15,23,42,0.7))] shadow-[0_0_36px_rgba(129,140,248,0.12)]",
              )}
            >
              <div className="flex-1 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-indigo-100/72">
                      {`${endpoint.provider} x402`}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {endpoint.title}
                    </h3>
                  </div>
                  <Badge tone={isActive ? "accent" : "default"}>
                    {isActive ? "Current page" : "Live now"}
                  </Badge>
                </div>

                <p className="text-sm leading-7 text-white/72">
                  {endpoint.summary}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                      Wallet surface
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      {endpoint.surface}
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-white/10 bg-black/20 px-4 py-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                      Returns
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      {endpoint.output}
                    </p>
                  </div>
                </div>
              </div>

              <ButtonLink
                href={endpoint.href}
                variant="secondary"
                className="mt-5 w-full justify-center self-stretch"
              >
                {isActive
                  ? endpoint.activeCtaLabel ?? "Inspect service"
                  : endpoint.ctaLabel}
              </ButtonLink>
            </div>
          );
        })}
      </div>

      <div className="space-y-5 border-t border-white/10 pt-7">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
            Approved expansion
          </p>
          <h3 className="font-display text-2xl font-semibold text-white">
            {x402LaneContent.expansionTitle}
          </h3>
          <p className="max-w-3xl text-sm leading-7 text-white/72">
            {x402LaneContent.expansionDescription}
          </p>
          <p className="text-sm text-indigo-100/70">
            {x402LaneContent.expansionNote}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {approvedX402Services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">{service.title}</p>
                <Badge>{service.status}</Badge>
              </div>

              <div className="mt-4 flex-1 space-y-3">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                    Category
                  </p>
                  <p className="mt-2 text-sm text-white/74">{service.category}</p>
                </div>

                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-text-muted">
                    Provider lane
                  </p>
                  <p className="mt-2 text-sm text-white/74">{service.provider}</p>
                </div>

                <p className="text-sm leading-6 text-white/68">{service.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
