type OnboardingStepperProps = {
  steps: string[];
  activeStep: number;
};

export function OnboardingStepper({
  steps,
  activeStep,
}: OnboardingStepperProps) {
  const progress = (activeStep / steps.length) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-text-muted">
        <span>Profile setup</span>
        <span>{Math.min(activeStep, steps.length)}/{steps.length}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#c7d2fe,#818cf8)] transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-white/52">This takes less than a minute.</p>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const isActive = index + 1 <= activeStep;

          return (
            <div
              key={step}
              className={`rounded-2xl border px-3 py-2 text-sm transition ${
                isActive
                  ? "border-indigo-300/22 bg-primary-soft text-indigo-100"
                  : "border-white/10 bg-white/[0.03] text-white/55"
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}

