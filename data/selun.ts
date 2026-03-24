import type { AllocationRecommendation, PortfolioActionMode } from "@/types/demo";

export const selunContent: Record<
  PortfolioActionMode,
  {
    headline: string;
    description: string;
    urgencyNote: string;
    process: string[];
    creditRequirement: string;
    marketNote: string;
    freshnessNote: string;
    ctaLabel: string;
    loadingLabel: string;
    ctaNote: string;
    previewTitle: string;
    previewDescription: string;
    previewConfidenceLine: string;
    previewChanges: string[];
    previewOutcomes: string[];
    loadingSteps: string[];
    executionSignals: string[];
    summaryTitle: string;
    summaryBody: string;
    nextStepTitle: string;
    nextStepDescription: string;
    primaryFollowUpLabel: string;
    primaryFollowUpHref: string;
    secondaryFollowUpLabel: string;
    secondaryFollowUpHref: string;
    headerTitle: string;
    headerDescription: string;
    headerBadge: string;
  }
> = {
  allocation: {
    headline: "Generate a portfolio mix.",
    description:
      "Start with a $10,000 guided allocation based on your profile and let Selun turn funded USDC into a readable starting portfolio.",
    urgencyNote: "The first $10,000 is funded and ready for guided deployment.",
    process: [
      "Reads your profile.",
      "Builds a starter mix.",
      "Explains each position.",
    ],
    creditRequirement: "1 guided allocation credit required",
    marketNote: "Based on current market conditions",
    freshnessNote: "Last evaluated recently",
    ctaLabel: "Generate My Starting Portfolio",
    loadingLabel: "Generating your starting portfolio...",
    ctaNote: "Review and confirm changes before execution.",
    previewTitle: "See how your 10,000 USDC could be deployed.",
    previewDescription:
      "Before you run it, here is the kind of portfolio structure the service is likely to build from the funded balance.",
    previewConfidenceLine:
      "Based on your current strategy and market conditions",
    previewChanges: [
      "Anchor the mix with BTC and ETH.",
      "Introduce a measured higher-upside ecosystem sleeve.",
      "Keep dry powder available for flexibility.",
    ],
    previewOutcomes: [
      "Improved diversification across core sectors",
      "Stronger alignment with your long-term posture",
      "Maintained alignment with your risk profile",
    ],
    loadingSteps: [
      "Reading goal profile",
      "Sizing core assets",
      "Drafting rationale",
    ],
    executionSignals: [
      "Requesting service",
      "Payment authorized",
      "Allocation generated",
    ],
    summaryTitle: "Core majors anchor the mix.",
    summaryBody: "Balanced growth, clear anchors, and dry powder left over.",
    nextStepTitle: "Next step: learn the mix.",
    nextStepDescription:
      "Understand why each asset is in the new portfolio before you make the next move.",
    primaryFollowUpLabel: "Learn My Holdings",
    primaryFollowUpHref: "/wallet/research",
    secondaryFollowUpLabel: "View Portfolio",
    secondaryFollowUpHref: "/wallet",
    headerTitle: "Allocation service",
    headerDescription:
      "Create a starting mix through an approved Selun x402 service.",
    headerBadge: "Selun x402",
  },
  rebalance: {
    headline: "Run a rebalance plan.",
    description:
      "The service reviews the recently created mix, compares it against your profile, and returns a clearer target posture.",
    urgencyNote: "The first allocation is live, and recent changes can now be reviewed against target posture.",
    process: [
      "Reads current positions.",
      "Measures drift from target posture.",
      "Explains the suggested changes.",
    ],
    creditRequirement: "1 guided rebalance credit required",
    marketNote: "Based on current market conditions",
    freshnessNote: "Last evaluated recently",
    ctaLabel: "Generate My Rebalance Plan",
    loadingLabel: "Generating your rebalance plan...",
    ctaNote: "Review and confirm changes before execution.",
    previewTitle: "See how your portfolio could improve.",
    previewDescription:
      "Before you run it, here is a preview of the kind of changes the service is likely to recommend.",
    previewConfidenceLine:
      "Based on your current strategy and market conditions",
    previewChanges: [
      "Reduce BTC from 35% to 30%.",
      "Increase SOL from 15% to 20%.",
      "Add exposure to emerging assets.",
    ],
    previewOutcomes: [
      "Improved diversification across key sectors",
      "Stronger long-term growth positioning",
      "Maintained alignment with your risk profile",
    ],
    loadingSteps: [
      "Reading current positions",
      "Comparing current mix to target posture",
      "Drafting rebalance rationale",
    ],
    executionSignals: [
      "Requesting service",
      "Payment authorized",
      "Rebalance generated",
    ],
    summaryTitle: "Core majors stay anchored while drift gets corrected.",
    summaryBody:
      "Balanced growth, tighter sizing, and cash preserved for flexibility.",
    nextStepTitle: "Next step: review the updated posture.",
    nextStepDescription:
      "Return to the wallet to inspect the mix, or research a position before the next change.",
    primaryFollowUpLabel: "Review Portfolio",
    primaryFollowUpHref: "/wallet",
    secondaryFollowUpLabel: "Research a Position",
    secondaryFollowUpHref: "/wallet/research",
    headerTitle: "Rebalance service",
    headerDescription:
      "Adjust your current mix through an approved Selun x402 service.",
    headerBadge: "Selun x402",
  },
};

export const selunAllocation: AllocationRecommendation[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    percentage: 35,
    reason: "Portfolio anchor and primary store-of-value position.",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    percentage: 25,
    reason: "Core ecosystem position with broad utility across on-chain activity.",
  },
  {
    symbol: "SOL",
    name: "Solana",
    percentage: 15,
    reason: "Primary upside driver in the portfolio.",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    percentage: 10,
    reason: "Utility-driven infrastructure sleeve tied to protocol demand.",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    percentage: 15,
    reason: "Liquidity reserve for flexibility, rebalancing, and defense.",
  },
];

export const selunExecutionNote =
  "Execution remains mocked in this demo.";
