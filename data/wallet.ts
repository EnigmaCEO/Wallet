import { defaultDemoWalletState } from "@/lib/demo-wallet";
import { getPortfolioActionMode } from "@/lib/wallet";
import type {
  ActionItem,
  ActivityItem,
  DemoWalletState,
  Holding,
  PortfolioActionMode,
  PortfolioInsight,
  WalletQuickAction,
  WalletSummary,
} from "@/types/demo";

type WalletDemoData = {
  summary: WalletSummary;
  holdings: Holding[];
  quickActions: WalletQuickAction[];
  activity: ActivityItem[];
  profile: DemoWalletState["profile"];
  actionMode: PortfolioActionMode;
  insight: PortfolioInsight;
  primaryAction: ActionItem;
};

const allocationBlueprint = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    allocation: 35,
    thesis: "Core store of value",
    why: "BTC anchors the portfolio with liquidity, resilience, and long-term conviction.",
    price: 84000,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    allocation: 25,
    thesis: "Smart contract platform",
    why: "ETH adds broad ecosystem exposure and durable utility across on-chain activity.",
    price: 3200,
  },
  {
    symbol: "SOL",
    name: "Solana",
    allocation: 15,
    thesis: "High-speed ecosystem exposure",
    why: "SOL adds faster-moving ecosystem upside while staying sized below the core majors.",
    price: 140,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    allocation: 10,
    thesis: "Infrastructure and oracle exposure",
    why: "LINK brings utility-driven infrastructure exposure tied to data and oracle demand.",
    price: 15.5,
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    allocation: 15,
    thesis: "Liquidity and optionality",
    why: "USDC keeps capital available for follow-on entries, paid services, and defense during volatility.",
    price: 1,
  },
] as const;

function roundCurrency(value: number) {
  return Math.round(value);
}

function formatTokenAmount(symbol: string, units: number) {
  if (symbol === "USDC") {
    return `${Math.round(units).toLocaleString("en-US")} USDC`;
  }

  const maximumFractionDigits = units >= 10 ? 2 : 4;

  return `${units.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  })} ${symbol}`;
}

function createAllocationHoldings(totalValue: number): Holding[] {
  return allocationBlueprint.map((asset) => {
    const value = roundCurrency((totalValue * asset.allocation) / 100);
    const units = value / asset.price;

    return {
      symbol: asset.symbol,
      name: asset.name,
      allocation: asset.allocation,
      amount: formatTokenAmount(asset.symbol, units),
      value,
      change24h:
        asset.symbol === "BTC"
          ? 1.4
          : asset.symbol === "ETH"
            ? 1.8
            : asset.symbol === "SOL"
              ? 2.6
              : asset.symbol === "LINK"
                ? 1.1
                : 0,
      thesis: asset.thesis,
      why: asset.why,
    };
  });
}

function createFundedHoldings(totalValue: number): Holding[] {
  return [
    {
      symbol: "USDC",
      name: "USD Coin",
      allocation: 100,
      amount: `${Math.round(totalValue).toLocaleString("en-US")} USDC`,
      value: roundCurrency(totalValue),
      change24h: 0,
      thesis: "Fresh capital ready to deploy",
      why: "USDC keeps the first 10,000 liquid so the next move can be a direct token purchase or a guided allocation.",
    },
  ];
}

function createPerformanceByStage(
  stage: DemoWalletState["stage"],
): WalletSummary["performanceByRange"] {
  if (stage === "allocated") {
    return {
      "1D": {
        label: "Daily",
        percent: 1.1,
        profitLoss: 110,
        context: "Since yesterday",
      },
      "1M": {
        label: "Monthly",
        percent: 1.8,
        profitLoss: 180,
        context: "Since allocation completed",
      },
      YTD: {
        label: "Year to date",
        percent: 1.8,
        profitLoss: 180,
        context: "Since onboarding",
      },
      "1Y": {
        label: "Annual",
        percent: 1.8,
        profitLoss: 180,
        context: "Since first funding",
      },
    };
  }

  return {
    "1D": {
      label: "Daily",
      percent: 0,
      profitLoss: 0,
      context: "Funding completed today",
    },
    "1M": {
      label: "Monthly",
      percent: 0,
      profitLoss: 0,
      context: "Awaiting first action",
    },
    YTD: {
      label: "Year to date",
      percent: 0,
      profitLoss: 0,
      context: "No portfolio changes yet",
    },
    "1Y": {
      label: "Annual",
      percent: 0,
      profitLoss: 0,
      context: "New wallet",
    },
  };
}

function createWalletSummary(
  state: DemoWalletState,
  holdings: Holding[],
): WalletSummary {
  const totalValue =
    state.stage === "allocated" ? roundCurrency(state.fundingAmount * 1.018) : state.fundingAmount;
  const stableHolding = holdings.find((holding) => holding.symbol === "USDC");

  return {
    totalValue,
    availableCash: stableHolding?.value ?? 0,
    defaultPerformanceRange: "1M",
    performanceByRange: createPerformanceByStage(state.stage),
  };
}

const buyTokenAction: ActionItem = {
  eyebrow: "Execution",
  title: "Buy token",
  description: "Use the funded USDC balance to open a first position when you are ready.",
  supportingText:
    "Research can help compare assets before the first buy is placed.",
  executionHint: "Ready to route capital into a first asset purchase.",
  marketNote: "Direct start selected during onboarding",
  href: "/wallet/research",
  cta: "Research first buy",
};

const allocationAction: ActionItem = {
  eyebrow: "Portfolio",
  mode: "allocation",
  title: "Allocation",
  description: "Turn funded USDC into a goal-aligned starting mix through Selun.",
  supportingText:
    "This takes the first 10,000 and sizes it against the profile chosen during onboarding.",
  executionHint: "Ready to execute using intelligent services.",
  marketNote: "Fresh funding staged today",
  href: "/wallet/selun",
  cta: "Generate Allocation",
};

const rebalanceAction: ActionItem = {
  eyebrow: "Portfolio",
  mode: "rebalance",
  title: "Rebalance",
  description: "Adjust the current mix as the portfolio drifts away from target posture.",
  supportingText:
    "This keeps the portfolio aligned as positions move and new opportunities appear.",
  executionHint: "Ready to execute using intelligent services.",
  marketNote: "Updated based on recent market changes",
  href: "/wallet/selun",
  cta: "Rebalance My Portfolio",
};

const learnHoldingsAction: ActionItem = {
  eyebrow: "Research",
  title: "Learn your holdings",
  description: "Understand why each asset is in the new mix before making the next change.",
  supportingText:
    "Research can explain role, risk, and where each position fits inside the portfolio.",
  executionHint: "Ready to open portfolio-aware research through Selun.",
  marketNote: "Allocation completed recently",
  href: "/wallet/research",
  cta: "Learn this mix",
};

const reportAction: ActionItem = {
  eyebrow: "Reporting",
  title: "View Monthly Report",
  description: "Review posture and next steps.",
  href: "/wallet/reports",
  cta: "View report",
};

export const guidedActions: ActionItem[] = [
  buyTokenAction,
  allocationAction,
  rebalanceAction,
  learnHoldingsAction,
  reportAction,
];

function createPortfolioInsight(state: DemoWalletState): PortfolioInsight {
  if (state.stage === "allocated") {
    return {
      title: "Allocation complete",
      meta: "Based on your completed first mix",
      primaryMessage:
        "Your first Selun allocation is live and aligned with the profile you selected.",
      secondaryMessage:
        "Learn what each asset does before you make the next portfolio change.",
      ctaLabel: "Understand this portfolio",
      ctaHref: "/wallet/research",
    };
  }

  return {
    title: "Funding complete",
    meta: "10,000 USDC staged",
    primaryMessage:
      "The wallet is funded and ready for its first portfolio decision.",
    secondaryMessage:
      "Use Selun to build the opening mix, or keep the USDC ready for a direct token purchase.",
    ctaLabel: "Generate Allocation",
    ctaHref: "/wallet/selun",
  };
}

function createRecentActivity(state: DemoWalletState): ActivityItem[] {
  if (state.stage === "allocated") {
    return [
      {
        title: "Wallet funded",
        detail: "10,000 USDC received and cleared for deployment.",
        timestamp: "Today at 9:10 AM",
        type: "deposit",
      },
      {
        title: "Selun allocation completed",
        detail: "The first 10,000 was allocated across five positions.",
        timestamp: "Today at 9:14 AM",
        type: "allocation",
      },
      {
        title: "Research lane ready",
        detail: "Learn why each asset is in the new mix before adjusting it.",
        timestamp: "Today at 9:18 AM",
        type: "insight",
      },
      {
        title: "Monthly brief queued",
        detail: "The next report will reflect the new strategy baseline.",
        timestamp: "Today at 9:23 AM",
        type: "report",
      },
    ];
  }

  return [
    {
      title: "Wallet funded",
      detail: "10,000 USDC received and ready for the first move.",
      timestamp: "Today at 9:10 AM",
      type: "deposit",
    },
    {
      title: "Direct start selected",
      detail: "Capital stays in USDC until the first token is chosen.",
      timestamp: "Today at 9:13 AM",
      type: "insight",
    },
    {
      title: "Allocation lane ready",
      detail: "Selun can turn the 10,000 USDC balance into a starting mix at any time.",
      timestamp: "Today at 9:17 AM",
      type: "allocation",
    },
    {
      title: "Monthly brief queued",
      detail: "Reporting will begin after the first portfolio action.",
      timestamp: "Today at 9:23 AM",
      type: "report",
    },
  ];
}

function createQuickActions(state: DemoWalletState): WalletQuickAction[] {
  const allocationActionCard: WalletQuickAction =
    state.stage === "allocated"
      ? {
          id: "allocate",
          label: "Allocate",
          hint: "Add new capital",
          title: "Add more capital to the mix",
          description:
            "Stage another USDC funding event and let Selun fold it into the current portfolio.",
          status: "Additional capital lane open",
          note: "New money can still enter through the same guided allocation flow without breaking the portfolio story.",
          primaryCta: "Stage New Allocation",
          feedback: "New capital staged for Selun to extend the current mix.",
          details: [
            {
              label: "Source",
              value: "Linked bank",
            },
            {
              label: "Settlement",
              value: "Same day",
            },
            {
              label: "Funding asset",
              value: "USDC",
            },
            {
              label: "Next step",
              value: "Selun extends the current mix",
            },
          ],
        }
      : {
          id: "allocate",
          label: "Allocate",
          hint: "Deploy funded USDC",
          title: "Allocate the first 10,000 USDC",
          description:
            "Move the funded balance straight into Selun so the wallet starts with a full portfolio instead of idle cash.",
          status: "10,000 USDC ready",
          note: "This routes fresh capital straight into Selun instead of stopping at a generic deposit screen.",
          primaryCta: "Allocate 10,000 USDC",
          feedback: "10,000 USDC staged for Selun allocation.",
          details: [
            {
              label: "Source",
              value: "Linked bank",
            },
            {
              label: "Settlement",
              value: "Same day",
            },
            {
              label: "Funding asset",
              value: "USDC",
            },
            {
              label: "Next step",
              value: "Selun builds the starting mix",
            },
          ],
        };

  return [
    {
      id: "receive",
      label: "Receive",
      hint: "Share wallet details",
      title: "Receive assets",
      description:
        "Use the wallet address to receive supported assets into Sagitta before taking the next guided step.",
      status: "Wallet address active",
      note: "Incoming transfers appear after network confirmation in this demo.",
      primaryCta: "Copy Address",
      feedback: "Deposit address copied. Ready to receive funds.",
      details: [
        {
          label: "Network",
          value: "Base mainnet",
        },
        {
          label: "Address",
          value: "0x78B2...21E3",
        },
        {
          label: "Supports",
          value: "ETH, USDC, approved tokens",
        },
        {
          label: "Visibility",
          value: "Portfolio updates on receipt",
        },
      ],
    },
    {
      id: "send",
      label: "Send",
      hint: "Move capital out",
      title: "Review a send",
      description:
        "Stage a transfer out of the wallet to simulate a normal send flow before execution.",
      status: "Transfer review ready",
      note: "This demo stops at review and does not broadcast transactions.",
      primaryCta: "Review Send",
      feedback: "Send review prepared for 2,500 USDC to saved contact.",
      details: [
        {
          label: "Asset",
          value: "USDC",
        },
        {
          label: "Amount",
          value: "$2,500",
        },
        {
          label: "Destination",
          value: "Treasury contact",
        },
        {
          label: "Network fee",
          value: "$0.18 est.",
        },
      ],
    },
    {
      id: "swap",
      label: "Swap",
      hint: "Preview a trade",
      title: "Preview a swap",
      description:
        "Model a simple token swap so the wallet still feels ready for day-to-day adjustments.",
      status: "Quote available",
      note: "Rates, route, and slippage are mocked for the investor demo.",
      primaryCta: "Preview Swap",
      feedback: "Swap preview ready: 5,000 USDC into 1.58 ETH.",
      details: [
        {
          label: "From",
          value: "5,000 USDC",
        },
        {
          label: "To",
          value: "ETH",
        },
        {
          label: "Est. received",
          value: "1.58 ETH",
        },
        {
          label: "Slippage",
          value: "0.50% max",
        },
      ],
    },
    allocationActionCard,
  ];
}

function getPrimaryAction(state: DemoWalletState): ActionItem {
  return state.stage === "allocated" ? learnHoldingsAction : allocationAction;
}

export function getWalletDemoData(state: DemoWalletState): WalletDemoData {
  const totalValue =
    state.stage === "allocated" ? roundCurrency(state.fundingAmount * 1.018) : state.fundingAmount;
  const holdings =
    state.stage === "allocated"
      ? createAllocationHoldings(totalValue)
      : createFundedHoldings(state.fundingAmount);
  const actionMode = getPortfolioActionMode(holdings);

  return {
    summary: createWalletSummary(state, holdings),
    holdings,
    quickActions: createQuickActions(state),
    activity: createRecentActivity(state),
    profile: state.profile,
    actionMode,
    insight: createPortfolioInsight(state),
    primaryAction: getPrimaryAction(state),
  };
}

const defaultWalletDemo = getWalletDemoData(defaultDemoWalletState);

export const walletSummary = defaultWalletDemo.summary;
export const holdings = defaultWalletDemo.holdings;
export const walletQuickActions = defaultWalletDemo.quickActions;
export const recentActivity = defaultWalletDemo.activity;
export const portfolioInsights: Record<PortfolioActionMode, PortfolioInsight> = {
  allocation: createPortfolioInsight({
    ...defaultDemoWalletState,
    stage: "funded",
  }),
  rebalance: createPortfolioInsight({
    ...defaultDemoWalletState,
    stage: "allocated",
  }),
};
