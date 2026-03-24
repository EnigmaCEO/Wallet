import type { DemoWalletState, Holding, ResearchAnswer } from "@/types/demo";

export const researchPrompts = [
  "What is the current role of Solana in the market?",
  "Compare ETH and SOL",
  "Should I increase my exposure to SOL?",
  "Is LINK more utility-driven than hype-driven?",
];

const researchLibrary: Record<string, ResearchAnswer> = {
  solana: {
    prompt: researchPrompts[0],
    title: "Solana looks strongest when speed, user volume, and retail mindshare matter.",
    summary:
      "In the current market narrative, Solana is often treated as the high-throughput chain that captures momentum when users care about fast execution, active consumer apps, and visible ecosystem energy.",
    keyPoints: [
      "Its role is more offensive than defensive, so sizing matters.",
      "It tends to benefit when market appetite rotates toward beta and ecosystem growth.",
      "For a balanced portfolio, it often works best as a complementary position rather than the sole core holding.",
    ],
    confidence: "High",
    stance: "Growth-biased",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Could increase your exposure to high-growth ecosystems.",
      "Increases volatility at higher allocation sizes.",
      "Best used as a complementary position rather than a core anchor.",
    ],
    detailCta: "Generate a Solana report",
    portfolioCta: "Use in My Portfolio",
  },
  compare: {
    prompt: researchPrompts[1],
    title: "ETH offers depth and durability. SOL offers speed and upside sensitivity.",
    summary:
      "Ethereum is usually the steadier platform allocation because of ecosystem breadth and infrastructure depth, while Solana is often the faster-moving position that captures stronger upside when market sentiment improves.",
    keyPoints: [
      "ETH fits portfolios seeking a stronger core platform asset.",
      "SOL fits users willing to accept more volatility for potential acceleration.",
      "Holding both creates a cleaner barbell between durability and momentum.",
    ],
    confidence: "Medium",
    stance: "Neutral / Balanced",
    liveSignal: "Updated using recent market signals",
    modeLabel: "Comparison insight",
    portfolioImpact: [
      "Keeping both can improve diversification across platform exposure.",
      "ETH can stabilize the posture while SOL adds more upside sensitivity.",
      "Position sizing should match how much volatility your profile can absorb.",
    ],
    detailCta: "Generate a platform comparison",
    portfolioCta: "Apply to My Allocation",
  },
  solIncrease: {
    prompt: researchPrompts[2],
    title: "A larger SOL position makes most sense when you want more upside and can accept more volatility.",
    summary:
      "Increasing SOL can strengthen growth exposure, but it should usually be done as a measured sleeve rather than a dominant core position in a balanced portfolio.",
    keyPoints: [
      "An increase works best when the rest of the portfolio still has durable core anchors.",
      "SOL sizing should reflect conviction, liquidity needs, and your tolerance for faster drawdowns.",
      "The strongest case is usually incremental rather than aggressive resizing all at once.",
    ],
    confidence: "High",
    stance: "Growth-biased",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Could raise exposure to a faster-moving ecosystem with stronger upside potential.",
      "Increases short-term volatility at larger position sizes.",
      "Works best as a measured increase alongside existing core positions.",
    ],
    detailCta: "Generate a SOL sizing report",
    portfolioCta: "Use in My Portfolio",
  },
  link: {
    prompt: researchPrompts[3],
    title: "LINK screens as more utility-driven than purely hype-driven in this demo profile.",
    summary:
      "Chainlink usually gets framed around infrastructure demand, especially oracle and data services, which gives it a more utility-centered story than many narrative-only tokens.",
    keyPoints: [
      "Its strongest case comes from network usefulness rather than social momentum alone.",
      "That does not remove volatility, but it can improve the quality of the thesis.",
      "LINK often works as a smaller utility sleeve inside a broader portfolio.",
    ],
    confidence: "Medium",
    stance: "Utility-driven",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Can add infrastructure exposure without relying entirely on narrative momentum.",
      "Works better as a supporting sleeve than a primary portfolio driver.",
      "Improves diversification when paired with core majors and platform assets.",
    ],
    detailCta: "Generate a LINK utility report",
    portfolioCta: "Use in My Portfolio",
  },
  btc: {
    prompt: "Should BTC stay my largest position?",
    title: "BTC usually earns the largest slot when stability and portfolio anchoring matter most.",
    summary:
      "Bitcoin tends to stay the largest position when the goal is to keep the portfolio understandable, liquid, and resilient while other assets take on more specialized roles.",
    keyPoints: [
      "BTC works best as the anchor rather than the fastest-moving upside sleeve.",
      "Keeping it largest can reduce the chance that smaller ecosystem bets dominate the portfolio.",
      "A smaller BTC weight only makes sense when conviction in other assets clearly rises.",
    ],
    confidence: "High",
    stance: "Neutral / Balanced",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Supports a more stable core posture inside a balanced portfolio.",
      "Reduces the risk of over-concentrating in higher-volatility sleeves.",
      "Makes room for ETH, SOL, and LINK to play more specific supporting roles.",
    ],
    detailCta: "Generate a BTC sizing report",
    portfolioCta: "Apply to My Allocation",
  },
  usdc: {
    prompt: "What role does USDC play in this portfolio?",
    title: "USDC keeps the portfolio flexible instead of forcing every dollar into risk immediately.",
    summary:
      "The cash sleeve is there to preserve optionality, support rebalancing, and keep the next decision deliberate instead of reactive.",
    keyPoints: [
      "USDC lowers pressure to force every dollar into volatile positions immediately.",
      "It gives the portfolio room for follow-on buys, rebalancing, and paid services.",
      "Keeping some USDC can improve flexibility without breaking a growth-oriented strategy.",
    ],
    confidence: "High",
    stance: "Neutral / Balanced",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Improves flexibility for future entries and rebalancing.",
      "Reduces forced decision-making during volatile periods.",
      "Works best as a reserve sleeve rather than the entire portfolio for long.",
    ],
    detailCta: "Generate a USDC role report",
    portfolioCta: "Apply to My Allocation",
  },
  start: {
    prompt: "Should I start with a guided allocation or buy a token directly?",
    title: "Guided allocation is usually the clearest first move when the wallet is still fully in USDC.",
    summary:
      "A guided allocation creates an explainable starting mix from the funded balance, while a direct token purchase makes sense only when conviction in a single asset is already high.",
    keyPoints: [
      "Guided allocation gives the first 10,000 a full structure instead of one isolated bet.",
      "A direct token purchase works better when you already know which single position should come first.",
      "The cleaner path for most new users is usually to allocate first, then refine or research holdings from there.",
    ],
    confidence: "High",
    stance: "Neutral / Balanced",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Guided allocation improves diversification from the first move.",
      "A direct buy increases concentration and conviction risk immediately.",
      "The better choice depends on whether you want a starting mix or a single opening position.",
    ],
    detailCta: "Generate a starting-path report",
    portfolioCta: "Start My Allocation",
  },
  default: {
    prompt: "How does Sagitta frame the market right now?",
    title: "Sagitta looks for clarity first: core exposure, selective upside, and available cash.",
    summary:
      "When signal quality is mixed, the wallet should guide users toward understandable positioning rather than forcing constant activity.",
    keyPoints: [
      "Keep core assets visible and explain why they are there.",
      "Add smaller conviction bets only when the rationale is understandable.",
      "Maintain some cash so the next action stays optional rather than urgent.",
    ],
    confidence: "Medium",
    stance: "Neutral / Selective",
    liveSignal: "Updated using recent market signals",
    portfolioImpact: [
      "Supports clearer sizing decisions across core and satellite positions.",
      "Helps keep cash available for the next high-conviction move.",
      "Reduces the chance of forcing activity without a clear reason.",
    ],
    detailCta: "Generate a market posture report",
    portfolioCta: "Apply to My Allocation",
  },
};

export function getResearchPromptsForState(
  state: DemoWalletState,
  holdings: Holding[],
) {
  if (state.stage === "funded") {
    return [
      researchLibrary.start.prompt,
      "What should my first position be if I skip allocation?",
      researchLibrary.usdc.prompt,
      "How would BTC and ETH fit into a balanced starting portfolio?",
    ];
  }

  const focusSymbols = holdings
    .filter((holding) => holding.symbol !== "USDC")
    .slice(0, 3)
    .map((holding) => holding.symbol);

  const primaryGrowthSleeve = focusSymbols.includes("SOL") ? "SOL" : focusSymbols[1] ?? "ETH";

  return [
    `Why is ${primaryGrowthSleeve} in my portfolio?`,
    "How do ETH and SOL work together in my mix?",
    researchLibrary.btc.prompt,
    researchLibrary.usdc.prompt,
  ];
}

export function getPortfolioResearchContext(
  state: DemoWalletState,
  holdings: Holding[],
) {
  if (state.stage === "funded") {
    return {
      title: "Research the first portfolio decision.",
      description:
        "The wallet is still fully in USDC. Research should help decide how the first 10,000 gets deployed.",
      focusItems: [
        "USDC 100%",
        "First move pending",
        "Allocation vs direct buy",
      ],
    };
  }

  const focusItems = holdings
    .slice(0, 4)
    .map((holding) => `${holding.symbol} ${holding.allocation}%`);

  return {
    title: "Research the assets already in your mix.",
    description:
      "The first allocation is live. Use research to understand why each position is here and what should change next.",
    focusItems,
  };
}

export function getResearchContextLine(
  query: string,
  state: DemoWalletState,
  holdings: Holding[],
) {
  const normalizedQuery = query.toLowerCase();

  if (state.stage === "funded") {
    return "Context: the wallet is still 100% in USDC, so this research shapes the first deployment decision.";
  }

  if (normalizedQuery.includes("btc")) {
    const btcHolding = holdings.find((holding) => holding.symbol === "BTC");

    if (btcHolding) {
      return `Context: BTC is currently ${btcHolding.allocation}% of the portfolio and acts as the largest anchor position.`;
    }
  }

  if (normalizedQuery.includes("eth") && normalizedQuery.includes("sol")) {
    const ethHolding = holdings.find((holding) => holding.symbol === "ETH");
    const solHolding = holdings.find((holding) => holding.symbol === "SOL");

    if (ethHolding && solHolding) {
      return `Context: ETH is ${ethHolding.allocation}% of the mix and SOL is ${solHolding.allocation}%, so this compares the core platform sleeve against the higher-upside sleeve.`;
    }
  }

  if (normalizedQuery.includes("sol")) {
    const solHolding = holdings.find((holding) => holding.symbol === "SOL");

    if (solHolding) {
      return `Context: SOL is currently ${solHolding.allocation}% of the portfolio as the main growth sleeve.`;
    }
  }

  if (normalizedQuery.includes("usdc")) {
    const usdcHolding = holdings.find((holding) => holding.symbol === "USDC");

    if (usdcHolding) {
      return `Context: USDC is ${usdcHolding.allocation}% of the portfolio and keeps the next move flexible.`;
    }
  }

  const largestHolding = holdings[0];

  if (largestHolding) {
    return `Context: ${largestHolding.symbol} is currently the largest position, and this research should clarify how the rest of the mix supports it.`;
  }

  return "";
}

export function getMockResearchAnswer(query: string) {
  const normalizedQuery = query.toLowerCase();

  if (
    normalizedQuery.includes("guided allocation") ||
    normalizedQuery.includes("buy a token") ||
    normalizedQuery.includes("first position")
  ) {
    return researchLibrary.start;
  }

  if (
    normalizedQuery.includes("btc") &&
    (normalizedQuery.includes("largest") || normalizedQuery.includes("anchor"))
  ) {
    return researchLibrary.btc;
  }

  if (normalizedQuery.includes("usdc")) {
    return researchLibrary.usdc;
  }

  if (
    normalizedQuery.includes("compare") &&
    normalizedQuery.includes("eth") &&
    normalizedQuery.includes("sol")
  ) {
    return researchLibrary.compare;
  }

  if (
    normalizedQuery.includes("increase") &&
    (normalizedQuery.includes("sol") || normalizedQuery.includes("solana"))
  ) {
    return researchLibrary.solIncrease;
  }

  if (
    normalizedQuery.includes("solana") ||
    normalizedQuery.includes(" sol") ||
    normalizedQuery.startsWith("sol") ||
    normalizedQuery.includes("sol in my portfolio")
  ) {
    return researchLibrary.solana;
  }

  if (normalizedQuery.includes("link")) {
    return researchLibrary.link;
  }

  return researchLibrary.default;
}
