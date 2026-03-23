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
    summaryTitle: string;
    summaryBody: string;
    headerTitle: string;
    headerDescription: string;
    headerBadge: string;
  }
> = {
  allocation: {
    headline: "Generate a portfolio mix.",
    description:
      "The service uses the onboarding profile and returns a readable starter allocation.",
    urgencyNote: "New capital is ready to be deployed into a clearer starting mix.",
    process: [
      "Reads your profile.",
      "Builds a starter mix.",
      "Explains each position.",
    ],
    creditRequirement: "1 guided allocation credit required",
    marketNote: "Based on current market conditions",
    freshnessNote: "Last evaluated recently",
    ctaLabel: "Generate My Allocation Plan",
    loadingLabel: "Generating your allocation plan...",
    ctaNote: "Review and confirm changes before execution.",
    previewTitle: "See how your starting mix could look.",
    previewDescription:
      "Before you run it, here is the kind of portfolio structure the service is likely to build.",
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
    summaryTitle: "Core majors anchor the mix.",
    summaryBody: "Balanced growth, clear anchors, and dry powder left over.",
    headerTitle: "Allocation service",
    headerDescription:
      "Create a starting mix through an approved Selun x402 service.",
    headerBadge: "Selun x402",
  },
  rebalance: {
    headline: "Run a rebalance plan.",
    description:
      "The service reviews current holdings, compares them against your profile, and returns a clearer target mix.",
    urgencyNote: "Recent changes have created new optimization opportunities.",
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
    summaryTitle: "Core majors stay anchored while drift gets corrected.",
    summaryBody:
      "Balanced growth, tighter sizing, and cash preserved for flexibility.",
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
    reason:
      "Acts as the portfolio anchor with strong liquidity and broad market leadership.",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    percentage: 25,
    reason:
      "Adds ecosystem depth and durable utility exposure across major on-chain activity.",
  },
  {
    symbol: "SOL",
    name: "Solana",
    percentage: 15,
    reason:
      "Introduces higher-upside ecosystem exposure while staying sized below the core majors.",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    percentage: 10,
    reason:
      "Provides utility-driven infrastructure exposure tied to real protocol demand.",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    percentage: 15,
    reason:
      "Preserves flexibility for entries, rebalancing, and stability during volatility.",
  },
];

export const selunExecutionNote =
  "Execution remains mocked in this demo.";
