import { ReportCard } from "@/components/reports/report-card";
import { Badge } from "@/components/shared/badge";
import { ButtonLink } from "@/components/shared/button-link";
import { PageHeader } from "@/components/shared/page-header";
import { SurfaceCard } from "@/components/shared/surface-card";
import { monthlyReport } from "@/data/reports";
import { formatPercent } from "@/lib/utils";

export default function ReportsPage() {
  const nextStepsSection = monthlyReport.sections.find(
    (section) => section.kind === "next-steps",
  );
  const otherSections = monthlyReport.sections.filter(
    (section) => section.kind !== "next-steps",
  );

  return (
    <div className="space-y-9">
      <PageHeader
        eyebrow="Monthly reports"
        title="A monthly brief for performance and posture."
        description="Your portfolio check-in delivered through an approved Selun x402 endpoint."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">Selun x402 endpoint</Badge>
            <ButtonLink href="/wallet/research" variant="secondary">
              Ask for deeper research
            </ButtonLink>
          </div>
        }
      />

      <section>
        <SurfaceCard
          accent
          className="space-y-7 border-indigo-300/22 shadow-[0_24px_80px_rgba(3,7,18,0.45),0_0_36px_rgba(129,140,248,0.08)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">Summary</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white">
                {monthlyReport.month}
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="status-pulse rounded-full border border-emerald-300/18 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                {`Assessment: ${monthlyReport.assessment}`}
              </div>
              <div className="shimmer-chip rounded-full border border-indigo-300/20 bg-primary-soft px-4 py-2 text-sm font-semibold text-indigo-100">
                {formatPercent(monthlyReport.performance)}
              </div>
            </div>
          </div>

          <p className="text-sm leading-7 text-white/75">{monthlyReport.behavior}</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                Change vs last month
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {`Up from ${formatPercent(monthlyReport.previousPerformance)} last month`}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                Risk posture
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {monthlyReport.postureChange}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                Allocation shift
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {monthlyReport.allocationChange}
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
                Highlights
              </p>
              {monthlyReport.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-200" />
                  <p className="text-sm leading-6 text-white/75">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-text-muted">
                System view
              </p>
              {monthlyReport.insights.map((insight) => (
                <div
                  key={insight}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm leading-6 text-white/75">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </section>

      {nextStepsSection ? (
        <section>
          <ReportCard {...nextStepsSection} />
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {otherSections.map((section) => (
          <ReportCard key={section.title} {...section} />
        ))}
      </section>
    </div>
  );
}

