import type { ApprovedX402Service, X402Endpoint } from "@/types/demo";

export const x402LaneContent = {
  eyebrow: "Approved x402 network",
  title: "Selun powers the first live endpoints.",
  description:
    "Services, Research, and Reports start as approved Selun x402 endpoints inside Sagitta. As the wallet expands, other approved x402 services can slot into the same guided surface without changing the user experience.",
  controlTitle: "Control model",
  controlValue: "Approved services only",
  controlNote:
    "Sagitta exposes new services only after they clear approval and policy review.",
  expansionTitle: "The wallet expands into a service network.",
  expansionDescription:
    "Sagitta can expand from Selun into other approved x402 lanes for deployment, protection, and monitoring while keeping the same guided controls.",
  expansionNote: "Approved services appear here once they are cleared for use.",
};

export const liveX402Endpoints: X402Endpoint[] = [
  {
    title: "Services",
    href: "/wallet/selun",
    provider: "Selun",
    summary:
      "Runs guided allocation and rebalance workflows for portfolio decisions that are ready for review.",
    surface: "Allocation + rebalance",
    output: "Portfolio plan before execution",
    ctaLabel: "Simulate outcome",
    activeCtaLabel: "See execution flow",
  },
  {
    title: "Research",
    href: "/wallet/research",
    provider: "Selun",
    summary:
      "Turns token and market questions into portfolio-aware insight with clear stance and impact framing.",
    surface: "Portfolio research",
    output: "Insight, confidence, and allocation impact",
    ctaLabel: "Explore service",
    activeCtaLabel: "View how it works",
  },
  {
    title: "Reports",
    href: "/wallet/reports",
    provider: "Selun",
    summary:
      "Delivers monthly portfolio check-ins with assessment, changes over time, and direct next-step shortcuts.",
    surface: "Performance reporting",
    output: "Monthly brief with action shortcuts",
    ctaLabel: "View how it works",
    activeCtaLabel: "View how it works",
  },
];

export const approvedX402Services: ApprovedX402Service[] = [
  {
    title: "Vault deposit",
    provider: "Approved provider",
    category: "Capital deployment",
    summary:
      "Route idle USDC into approved vault strategies once your posture and policy lane allow it.",
    status: "Approved next",
  },
  {
    title: "Reserve insurance",
    provider: "Approved provider",
    category: "Risk protection",
    summary:
      "Add coverage options when a strategy or position needs an extra protection layer.",
    status: "Approved next",
  },
  {
    title: "NFT yield tracking",
    provider: "Approved provider",
    category: "Position monitoring",
    summary:
      "Bring NFT yield, liquidity, and floor signals into the same decision surface as the rest of the wallet.",
    status: "Approved next",
  },
  {
    title: "Tax-aware exits",
    provider: "Approved provider",
    category: "Execution planning",
    summary:
      "Evaluate tax-sensitive sell paths before a rebalance or exit is confirmed.",
    status: "Approved next",
  },
];
