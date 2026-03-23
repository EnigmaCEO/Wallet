import type {
  OnboardingField,
  OnboardingQuestion,
  OnboardingResponse,
} from "@/types/demo";

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "objective",
    prompt: "What are you trying to achieve?",
    description: "Choose the posture you want Sagitta to optimize for.",
    options: [
      {
        label: "Growth",
        hint: "Lean into upside.",
      },
      {
        label: "Stability",
        hint: "Keep it steadier.",
      },
      {
        label: "Yield",
        hint: "Favor productive assets.",
      },
      {
        label: "Exploration",
        hint: "Stay flexible.",
      },
    ],
  },
  {
    id: "horizon",
    prompt: "What best describes your time horizon?",
    description: "This sets how patient the starting plan should feel.",
    options: [
      {
        label: "Short term",
        hint: "Move faster.",
      },
      {
        label: "Medium term",
        hint: "Balanced pace.",
      },
      {
        label: "Long term",
        hint: "Build patiently.",
      },
    ],
  },
  {
    id: "risk",
    prompt: "What is your risk comfort?",
    description: "This sets how concentrated the portfolio can get.",
    options: [
      {
        label: "Conservative",
        hint: "More buffer.",
      },
      {
        label: "Balanced",
        hint: "Middle ground.",
      },
      {
        label: "Aggressive",
        hint: "Higher conviction.",
      },
    ],
  },
  {
    id: "startMode",
    prompt: "How would you like to start?",
    description: "Pick a direct start or a guided mix.",
    options: [
      {
        label: "Buy a token directly",
        hint: "Start with one asset.",
      },
      {
        label: "Guided allocation",
        hint: "Start with a full mix.",
      },
    ],
  },
];

export const mockOnboardingResponses: OnboardingResponse = {
  objective: "Growth",
  horizon: "Long term",
  risk: "Balanced",
  startMode: "Guided allocation",
};

export const onboardingPersonalizationPoints = [
  "Sagitta tunes your starting posture.",
  "The wallet changes what it surfaces first.",
];

const selectionFeedbackByField: Record<OnboardingField, Record<string, string>> = {
  objective: {
    Growth: "Growth selected - focusing on long-term upside.",
    Stability: "Stability selected - leaning toward steadier performance.",
    Yield: "Yield selected - emphasizing productive assets.",
    Exploration: "Exploration selected - keeping room for new opportunities.",
  },
  horizon: {
    "Short term": "Short term selected - staying nimble.",
    "Medium term": "Medium term selected - balancing patience and flexibility.",
    "Long term": "Long term selected - building with longer conviction.",
  },
  risk: {
    Conservative: "Conservative selected - protecting downside first.",
    Balanced: "Balanced selected - keeping risk in the middle.",
    Aggressive: "Aggressive selected - accepting more volatility for upside.",
  },
  startMode: {
    "Buy a token directly":
      "Direct buy selected - starting with a single position.",
    "Guided allocation":
      "Guided allocation selected - starting with a full portfolio mix.",
  },
};

const objectivePreviewByValue: Record<string, string> = {
  Growth: "Built for long-term growth with higher-upside exposure.",
  Stability: "Built for steadier performance with lower-volatility exposure.",
  Yield: "Built to emphasize productive assets and recurring yield potential.",
  Exploration: "Built for emerging ecosystems with higher-conviction upside.",
};

const riskPreviewByValue: Record<string, string> = {
  Conservative: "Risk remains more defensive.",
  Balanced: "Risk remains balanced across core positions.",
  Aggressive: "Risk remains tilted toward higher-conviction upside.",
};

const horizonPreviewByValue: Record<string, string> = {
  "Short term": "The strategy stays nimble.",
  "Medium term": "The strategy balances patience and flexibility.",
  "Long term": "The strategy is designed to compound over time.",
};

const startModePreviewByValue: Record<string, string> = {
  "Buy a token directly": "You can begin with one asset and build from there.",
  "Guided allocation": "A guided allocation gives you the clearest starting point.",
};

export function getGoalProfileSummary(
  profile: Partial<OnboardingResponse> = mockOnboardingResponses,
) {
  const objective = profile.objective ?? mockOnboardingResponses.objective;
  const horizon = profile.horizon ?? mockOnboardingResponses.horizon;
  const risk = profile.risk ?? mockOnboardingResponses.risk;
  const startMode = profile.startMode ?? mockOnboardingResponses.startMode;
  const startPhrase =
    startMode === "Buy a token directly"
      ? "Start with a direct buy."
      : "Start with a guided mix.";

  return `Built for ${objective.toLowerCase()}, ${risk.toLowerCase()} risk, and the ${horizon.toLowerCase()}. ${startPhrase}`;
}

export function getSelectionFeedback(
  field: OnboardingField,
  value?: string,
) {
  if (!value) {
    return "";
  }

  return selectionFeedbackByField[field][value] ?? "";
}

export function getOnboardingPreviewSummary(
  profile: Partial<OnboardingResponse> = mockOnboardingResponses,
) {
  const objective = profile.objective ?? mockOnboardingResponses.objective;

  return objectivePreviewByValue[objective] ?? objectivePreviewByValue.Growth;
}

export function getOnboardingPreviewDetail(
  profile: Partial<OnboardingResponse> = mockOnboardingResponses,
) {
  const risk = profile.risk ?? mockOnboardingResponses.risk;
  const horizon = profile.horizon ?? mockOnboardingResponses.horizon;
  const startMode = profile.startMode ?? mockOnboardingResponses.startMode;

  const riskText = riskPreviewByValue[risk] ?? riskPreviewByValue.Balanced;
  const horizonText =
    horizonPreviewByValue[horizon] ?? horizonPreviewByValue["Long term"];
  const startModeText =
    startModePreviewByValue[startMode] ??
    startModePreviewByValue["Guided allocation"];

  return `${riskText} ${horizonText} ${startModeText}`;
}

export function getRecommendedStartModeMessage(
  profile: Partial<OnboardingResponse> = mockOnboardingResponses,
) {
  const startMode = profile.startMode ?? mockOnboardingResponses.startMode;

  if (startMode === "Buy a token directly") {
    return "You can start with a direct buy, but guided allocation is still the recommended path for this profile.";
  }

  return "Recommended: Start with a guided allocation based on your profile.";
}
