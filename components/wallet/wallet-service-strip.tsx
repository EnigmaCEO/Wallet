import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { ButtonLink, buttonClassName } from "@/components/shared/button-link";
import { SurfaceCard } from "@/components/shared/surface-card";
import type { ActionItem, PortfolioActionMode } from "@/types/demo";

type WalletServiceStripProps = {
  actions: ActionItem[];
  actionMode: PortfolioActionMode;
};

type ServiceCard = {
  label: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
  status: string;
};

function buildServiceCards(
  actions: ActionItem[],
  actionMode: PortfolioActionMode,
): ServiceCard[] {
  const primaryAction =
    actions.find((action) => action.mode === actionMode) ?? actions[0];
  const researchAction =
    actions.find((action) => action.href === "/wallet/research") ?? actions[0];
  const reportAction =
    actions.find((action) => action.href === "/wallet/reports") ?? actions[0];

  return [
    {
      label: "Selun x402 execution",
      title: primaryAction.title,
      summary:
        primaryAction.supportingText ??
        primaryAction.description,
      href: primaryAction.href,
      cta: primaryAction.cta,
      status: primaryAction.marketNote ?? "Updated recently",
    },
    {
      label: "Selun x402 research",
      title: "Research",
      summary:
        "Use portfolio-aware research to compare assets before changing exposure.",
      href: researchAction.href,
      cta: "Open research",
      status: "Insight lane live",
    },
    {
      label: "Selun x402 reporting",
      title: "Reports",
      summary:
        "Review monthly posture, changes over time, and suggested next steps in one place.",
      href: reportAction.href,
      cta: "Open reports",
      status: "Assessment lane live",
    },
  ];
}

export function WalletServiceStrip({
  actions,
  actionMode,
}: WalletServiceStripProps) {
  const serviceCards = buildServiceCards(actions, actionMode);

  return (
    <SurfaceCard className="space-y-6 border-indigo-300/14 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),rgba(15,23,42,0.86))] p-5 shadow-[0_18px_60px_rgba(3,7,18,0.34)] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-indigo-100/72">
            Approved x402 services
          </p>
          <h2 className="font-display text-3xl font-semibold text-white">
            Your capital is actively managed through x402 services.
          </h2>
        </div>

        <ButtonLink href="/wallet/selun" variant="secondary">
          View all services
        </ButtonLink>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className="flex h-full flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-indigo-300/20 hover:bg-white/[0.05]"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.24em] text-indigo-100/72">
                  {card.label}
                </p>
                <Badge tone="accent">Live</Badge>
              </div>

              <div>
                <h3 className="font-display text-3xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {card.summary}
                </p>
              </div>

              <p className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-indigo-100/55">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
                {card.status}
              </p>
            </div>

            <Link
              href={card.href}
              className={buttonClassName(
                "secondary",
                "mt-5 w-full justify-center border-white/10 bg-white/[0.06] hover:border-indigo-300/20",
              )}
            >
              {card.cta}
            </Link>
          </div>
        ))}
      </div>
    </SurfaceCard>
  );
}
