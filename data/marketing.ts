import type {
  ExperienceColumn,
  HowItWorksStep,
  MarketingCard,
} from "@/types/demo";

export const whyWalletsFail: MarketingCard[] = [
  {
    title: "Access without guidance",
    description: "Most wallets stop at access.",
    detail: "Users still need a plan.",
  },
  {
    title: "Research is fragmented",
    description: "Users piece together conviction from too many places.",
    detail: "Clarity gets lost.",
  },
  {
    title: "Good habits never get built",
    description: "There is rarely a clear posture or follow-up loop.",
    detail: "Momentum fades fast.",
  },
];

export const howSagittaWorks: HowItWorksStep[] = [
  {
    step: "01",
    title: "Create your account",
    description: "Wallet and guidance are prepared automatically.",
  },
  {
    step: "02",
    title: "Set your direction",
    description: "Pick goal, horizon, and risk.",
  },
  {
    step: "03",
    title: "Receive guided actions",
    description: "See next actions, allocations, and research.",
  },
  {
    step: "04",
    title: "Stay aligned over time",
    description: "Monthly reports keep the plan on track.",
  },
];

export const experienceColumns: ExperienceColumn[] = [
  {
    title: "Behind the scenes",
    bullets: [
      "Wallet, automation, and paid actions live underneath one surface.",
      "Future protocol actions can plug into the same flow.",
    ],
  },
  {
    title: "What users feel",
    bullets: [
      "A wallet that knows where to start.",
      "Clear guidance without protocol jargon.",
    ],
  },
];

export const capabilityCards: MarketingCard[] = [
  {
    title: "Goal-based allocation",
    description: "Turn goals into a starting portfolio.",
  },
  {
    title: "Guided portfolio setup",
    description: "Start with direction, not a blank screen.",
  },
  {
    title: "Monthly performance reports",
    description: "Show what changed and what to do next.",
  },
  {
    title: "Portfolio-aware market intelligence",
    description: "Help users understand assets in the context of portfolio decisions.",
  },
  {
    title: "Agent-native x402 execution",
    description:
      "Execute portfolio actions through agent-native x402 services.",
  },
];
