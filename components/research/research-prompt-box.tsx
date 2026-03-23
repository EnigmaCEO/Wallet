"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import {
  getMockResearchAnswer,
  researchPrompts,
} from "@/data/research";
import { buttonClassName } from "@/components/shared/button-link";
import { Badge } from "@/components/shared/badge";
import { SurfaceCard } from "@/components/shared/surface-card";

export function ResearchPromptBox() {
  const [query, setQuery] = useState(researchPrompts[0]);
  const [answer, setAnswer] = useState(getMockResearchAnswer(researchPrompts[0]));
  const [isLoading, setIsLoading] = useState(false);
  const [reportQueued, setReportQueued] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!query.trim() || isLoading) {
      return;
    }

    setIsLoading(true);
    setReportQueued(false);

    window.setTimeout(() => {
      setAnswer(getMockResearchAnswer(query));
      setIsLoading(false);
    }, 1200);
  };

  return (
    <SurfaceCard className="space-y-6">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">Research assistant</Badge>
          <p className="text-sm text-indigo-100/68">
            Updated using recent market signals
          </p>
        </div>
        <h2 className="font-display text-3xl font-semibold text-white">
          Ask about a token or compare two assets.
        </h2>
        <p className="text-sm leading-6 text-white/60">
          Research should help you decide what to do with your portfolio next.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          rows={3}
          className="w-full rounded-[24px] border border-white/10 bg-black/20 px-5 py-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-indigo-300/24"
          placeholder="What do you want to understand about the market?"
        />

        <div className="flex flex-wrap gap-2">
          {researchPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => setQuery(prompt)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-white/18 hover:text-white"
            >
              {prompt}
            </button>
          ))}
        </div>
        <button type="submit" className={buttonClassName("primary")}>
          {isLoading ? "Analyzing..." : "Get Insight"}
        </button>
      </form>

      {isLoading ? (
        <div className="space-y-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          {["Scanning current market framing", "Drafting a human-readable answer"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
              >
                <p className="text-sm text-white/75">{item}</p>
                <span className="h-2 w-2 rounded-full bg-indigo-200 animate-pulse" />
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="space-y-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
                Answer
              </p>
              {answer.modeLabel ? (
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-indigo-100/72">
                  {answer.modeLabel}
                </p>
              ) : null}
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                {answer.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="positive">{`Confidence: ${answer.confidence}`}</Badge>
              <Badge tone="accent">{`Market stance: ${answer.stance}`}</Badge>
            </div>
          </div>

          <p className="inline-flex items-center gap-2 text-sm text-indigo-100/72">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
            {answer.liveSignal}
          </p>

          <p className="text-sm leading-7 text-white/72">{answer.summary}</p>

          <div className="space-y-3">
            {answer.keyPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-200" />
                <p className="text-sm leading-6 text-white/75">{point}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 rounded-[22px] border border-white/8 bg-black/20 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted">
                Impact on your portfolio
              </p>
              <h4 className="mt-2 font-display text-xl font-semibold text-white">
                Portfolio impact
              </h4>
            </div>

            <div className="space-y-3 rounded-[18px] border border-indigo-300/10 bg-indigo-300/[0.03] p-3">
              {answer.portfolioImpact.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-200" />
                  <p className="text-sm leading-6 text-white/75">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/wallet/selun"
              className={buttonClassName(
                "primary",
                "px-6 py-3.5 shadow-[0_0_52px_rgba(129,140,248,0.34)] hover:-translate-y-1 hover:shadow-[0_0_64px_rgba(165,180,252,0.42)]",
              )}
            >
              {answer.portfolioCta}
            </Link>
            <button
              type="button"
              onClick={() => setReportQueued(true)}
              className={buttonClassName("secondary")}
            >
              {answer.detailCta}
            </button>
            <p className="w-full text-sm leading-6 text-white/58">
              This will adjust your allocation before execution.
            </p>
            {reportQueued ? (
              <p className="text-sm leading-6 text-text-muted">
                Report queued for the demo flow.
              </p>
            ) : null}
          </div>
        </div>
      )}
    </SurfaceCard>
  );
}

