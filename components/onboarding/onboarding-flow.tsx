"use client";

import Link from "next/link";
import { useState } from "react";

import {
  getGoalProfileSummary,
  getOnboardingPreviewDetail,
  getOnboardingPreviewSummary,
  getRecommendedStartModeMessage,
  getSelectionFeedback,
  onboardingQuestions,
} from "@/data/onboarding";
import { buttonClassName } from "@/components/shared/button-link";
import { OnboardingStepper } from "@/components/onboarding/onboarding-stepper";
import { GoalSelectionCard } from "@/components/onboarding/goal-selection-card";
import { SurfaceCard } from "@/components/shared/surface-card";
import type { OnboardingResponse } from "@/types/demo";

export function OnboardingFlow() {
  const [answers, setAnswers] = useState<Partial<OnboardingResponse>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const currentQuestion = onboardingQuestions[currentStep];
  const isFinalStep = currentQuestion.id === "startMode";
  const effectiveAnswers =
    isFinalStep && !answers.startMode
      ? { ...answers, startMode: "Guided allocation" }
      : answers;
  const currentSelection = effectiveAnswers[currentQuestion.id];
  const selectionFeedback = getSelectionFeedback(
    currentQuestion.id,
    currentSelection,
  );

  const handleSelect = (value: string) => {
    if (isAdvancing) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: value,
    }));

    if (isFinalStep) {
      return;
    }

    setIsAdvancing(true);

    window.setTimeout(() => {
      setCurrentStep((step) => step + 1);

      setIsAdvancing(false);
    }, 360);
  };

  const handleBack = () => {
    if (isAdvancing) {
      return;
    }

    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const activeStep = currentStep + 1;
  const profileSummary = getGoalProfileSummary(effectiveAnswers);
  const previewSummary = getOnboardingPreviewSummary(effectiveAnswers);
  const previewDetail = getOnboardingPreviewDetail(effectiveAnswers);
  const recommendedStartModeMessage =
    getRecommendedStartModeMessage(effectiveAnswers);

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[1.16fr_0.84fr]">
      <SurfaceCard className="space-y-4 p-5 sm:p-6">
        <OnboardingStepper
          steps={["Goal", "Horizon", "Risk", "Start"]}
          activeStep={activeStep}
        />

        <div className="flex min-h-7 flex-wrap gap-2">
          {onboardingQuestions.slice(0, currentStep).map((question) => {
            const answer = answers[question.id];

            if (!answer) {
              return null;
            }

            return (
              <div
                key={question.id}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75"
              >
                {answer}
              </div>
            );
          })}
        </div>

        <div
          className={`rounded-[24px] border p-5 ${
            isFinalStep
              ? "border-indigo-300/20 bg-[linear-gradient(180deg,rgba(99,102,241,0.14),rgba(15,23,42,0.82))] shadow-[0_0_30px_rgba(129,140,248,0.08)]"
              : "border-white/10 bg-black/20"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">{`Step ${activeStep}`}</p>
          {isFinalStep ? (
            <>
              <h2 className="mt-2.5 font-display text-3xl font-semibold text-white sm:text-[2.2rem]">
                Your strategy is ready.
              </h2>
              <p className="mt-2 text-base text-white/78">
                {currentQuestion.prompt}
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-100/78">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
                {recommendedStartModeMessage}
              </p>
            </>
          ) : (
            <>
              <h2 className="mt-2.5 font-display text-2xl font-semibold text-white sm:text-[2rem]">
                {currentQuestion.prompt}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-text-muted">
                {currentQuestion.description}
              </p>
              {selectionFeedback ? (
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-100/78">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
                  {selectionFeedback}
                </p>
              ) : null}
            </>
          )}
        </div>

        <div className="grid gap-2.5 md:grid-cols-2">
          {currentQuestion.options.map((option) => (
            <GoalSelectionCard
              key={option.label}
              label={option.label}
              hint={option.hint}
              selected={effectiveAnswers[currentQuestion.id] === option.label}
              disabled={isAdvancing}
              onSelect={() => handleSelect(option.label)}
            />
          ))}
        </div>

        {isFinalStep ? (
          <div className="space-y-3 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
            {selectionFeedback ? (
              <p className="inline-flex items-center gap-2 text-sm text-indigo-100/78">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
                {selectionFeedback}
              </p>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <Link href="/wallet" className={buttonClassName("primary")}>
                Start My Portfolio
              </Link>
              <button
                type="button"
                onClick={handleBack}
                className={buttonClassName("secondary")}
              >
                Back one step
              </button>
            </div>

            <p className="text-sm text-white/52">
              Takes less than a minute to get started.
            </p>
          </div>
        ) : null}
      </SurfaceCard>

      <div className="space-y-4">
        <SurfaceCard accent className="space-y-3 p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-indigo-100/80">Preview</p>
          <h3 className="font-display text-[1.75rem] font-semibold text-white">
            {isFinalStep ? "Your portfolio strategy is ready." : "The wallet is taking shape."}
          </h3>
          <p className="text-sm leading-6 text-white/78">
            {isFinalStep ? profileSummary : previewSummary}
          </p>
          <p className="text-sm leading-6 text-white/60">
            {isFinalStep ? "Designed to adapt as conditions change." : previewDetail}
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-indigo-100/68">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-200/75" />
            This will continue adapting as your goals evolve.
          </p>

          <div className="flex flex-wrap gap-2">
            {Object.values(effectiveAnswers).map((value) => (
              <div
                key={value}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-white/75"
              >
                {value}
              </div>
            ))}
          </div>
        </SurfaceCard>

        {currentStep > 0 && !isFinalStep ? (
          <button
            type="button"
            onClick={handleBack}
            className={buttonClassName("secondary", "w-full")}
          >
            Back one step
          </button>
        ) : null}
      </div>
    </div>
  );
}

