import type {
  ActionItem,
  ActivityItem,
  Holding,
  PortfolioActionMode,
  PortfolioInsight,
  WalletQuickAction,
  WalletSummary,
} from "@/types/demo";

export const walletSummary: WalletSummary = {
  totalValue: 124830,
  availableCash: 18420,
  defaultPerformanceRange: "1M",
  performanceByRange: {
    "1D": {
      label: "Daily",
      percent: 1.2,
      profitLoss: 1480,
      context: "Since yesterday",
    },
    "1M": {
      label: "Monthly",
      percent: 8.4,
      profitLoss: 9670,
      context: "Since last rebalance",
    },
    YTD: {
      label: "Year to date",
      percent: 16.1,
      profitLoss: 17310,
      context: "Since January 1",
    },
    "1Y": {
      label: "Annual",
      percent: 27.6,
      profitLoss: 27040,
      context: "Trailing 12 months",
    },
  },
};

export const portfolioInsights: Record<PortfolioActionMode, PortfolioInsight> = {
  allocation: {
    title: "Portfolio Insight",
    meta: "Based on current market conditions",
    primaryMessage:
      "Idle capital is ready to be deployed into a long-term growth strategy with balanced risk exposure.",
    secondaryMessage:
      "Generating a starting mix can put stablecoin to work without drifting from your goals.",
    ctaLabel: "Generate Allocation",
    ctaHref: "/wallet/selun",
  },
  rebalance: {
    title: "Portfolio Insight",
    meta: "Based on current market conditions",
    primaryMessage:
      "Your portfolio is aligned for long-term growth with balanced risk exposure.",
    secondaryMessage:
      "Increasing exposure to emerging ecosystems could improve performance over time.",
    ctaLabel: "Review Rebalance",
    ctaHref: "/wallet/selun",
  },
};

export const holdings: Holding[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    allocation: 35,
    amount: "0.48 BTC",
    value: 43700,
    change24h: 1.8,
    thesis: "Core store of value",
    why: "BTC anchors the portfolio with liquidity, resilience, and long-term conviction.",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    allocation: 25,
    amount: "10.9 ETH",
    value: 31250,
    change24h: 2.1,
    thesis: "Smart contract platform",
    why: "ETH adds broad ecosystem exposure and durable utility across on-chain activity.",
  },
  {
    symbol: "SOL",
    name: "Solana",
    allocation: 15,
    amount: "131 SOL",
    value: 18220,
    change24h: 3.7,
    thesis: "High-speed ecosystem exposure",
    why: "SOL adds faster-moving ecosystem upside while staying sized below the core majors.",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    allocation: 10,
    amount: "722 LINK",
    value: 11660,
    change24h: -0.9,
    thesis: "Infrastructure and oracle exposure",
    why: "LINK brings utility-driven infrastructure exposure tied to data and oracle demand.",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    allocation: 15,
    amount: "20,000 USDC",
    value: 20000,
    change24h: 0,
    thesis: "Liquidity and optionality",
    why: "USDC keeps capital available for new entries, paid services, and defense during volatility.",
  },
];

export const guidedActions: ActionItem[] = [
  {
    eyebrow: "Execution",
    title: "Buy Token",
    description: "Open a first position.",
    href: "/wallet/research",
    cta: "Choose an asset",
  },
  {
    eyebrow: "Portfolio",
    mode: "allocation",
    title: "Allocation",
    description:
      "Build a starting portfolio for new deposits or stablecoin-only balances.",
    supportingText:
      "This turns idle cash into a goal-aligned starting mix without overcomplicating setup.",
    executionHint: "Ready to execute using intelligent services.",
    marketNote: "Updated based on recent market changes",
    href: "/wallet/selun",
    cta: "Generate Allocation",
  },
  {
    eyebrow: "Portfolio",
    mode: "rebalance",
    title: "Rebalance",
    description:
      "Adjust your existing portfolio based on your current goals and market conditions.",
    supportingText:
      "This helps keep your portfolio aligned as positions drift and new opportunities emerge.",
    executionHint: "Ready to execute using intelligent services.",
    marketNote: "Updated based on recent market changes",
    href: "/wallet/selun",
    cta: "Rebalance My Portfolio",
  },
  {
    eyebrow: "Research",
    title: "Ask About a Token",
    description: "Compare assets quickly.",
    href: "/wallet/research",
    cta: "Ask a question",
  },
  {
    eyebrow: "Reporting",
    title: "View Monthly Report",
    description: "Review posture and next steps.",
    href: "/wallet/reports",
    cta: "View report",
  },
];

export const recentActivity: ActivityItem[] = [
  {
    title: "Goal profile prepared",
    detail: "Growth, long term, balanced risk.",
    timestamp: "Today at 9:10 AM",
    type: "insight",
  },
  {
    title: "Rebalance service ready",
    detail: "Current holdings can be adjusted against target posture.",
    timestamp: "Today at 9:14 AM",
    type: "allocation",
  },
  {
    title: "USDC funding lane opened",
    detail: "Deposit flow ready.",
    timestamp: "Today at 9:18 AM",
    type: "deposit",
  },
  {
    title: "Monthly brief drafted",
    detail: "March report ready.",
    timestamp: "Today at 9:23 AM",
    type: "report",
  },
];

export const walletQuickActions: WalletQuickAction[] = [
  {
    id: "receive",
    label: "Receive",
    hint: "Share wallet details",
    title: "Receive assets",
    description:
      "Use your wallet address to receive supported assets into Sagitta before taking the next guided step.",
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
      "Model a simple token swap so the wallet feels ready for day-to-day portfolio adjustments.",
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
  {
    id: "deposit",
    label: "Deposit",
    hint: "Fund the wallet",
    title: "Open a deposit flow",
    description:
      "Simulate the funding step that gets new capital into the wallet before allocation or rebalancing.",
    status: "Funding lane open",
    note: "A normal wallet deposit flow can sit beside Sagitta guidance without changing the product story.",
    primaryCta: "Open Deposit Flow",
    feedback: "Deposit flow opened for USDC funding via linked account.",
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
        value: "Move into allocation",
      },
    ],
  },
];
