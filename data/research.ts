import type { ResearchAnswer } from "@/types/demo";

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

export function getMockResearchAnswer(query: string) {
  const normalizedQuery = query.toLowerCase();

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
    normalizedQuery.startsWith("sol")
  ) {
    return researchLibrary.solana;
  }

  if (normalizedQuery.includes("link")) {
    return researchLibrary.link;
  }

  return researchLibrary.default;
}
