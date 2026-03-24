export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export type MarketingCard = {
  title: string;
  description: string;
  detail?: string;
};

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export type ExperienceColumn = {
  title: string;
  bullets: string[];
};

export type OnboardingField =
  | "objective"
  | "horizon"
  | "risk"
  | "startMode";

export type OnboardingResponse = Record<OnboardingField, string>;

export type DemoWalletStage = "funded" | "allocated";

export type DemoWalletState = {
  profile: OnboardingResponse;
  fundingAmount: number;
  fundingAsset: "USDC";
  stage: DemoWalletStage;
  updatedAt: string;
};

export type OnboardingOption = {
  label: string;
  hint: string;
};

export type OnboardingQuestion = {
  id: OnboardingField;
  prompt: string;
  description: string;
  options: OnboardingOption[];
};

export type WalletSummary = {
  totalValue: number;
  availableCash: number;
  defaultPerformanceRange: PerformanceRange;
  performanceByRange: Record<PerformanceRange, PerformanceSnapshot>;
};

export type PerformanceRange = "1D" | "1M" | "YTD" | "1Y";

export type PerformanceSnapshot = {
  label: string;
  percent: number;
  profitLoss: number;
  context?: string;
};

export type PortfolioActionMode = "allocation" | "rebalance";

export type PortfolioInsight = {
  title: string;
  meta?: string;
  primaryMessage: string;
  secondaryMessage?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Holding = {
  symbol: string;
  name: string;
  allocation: number;
  amount: string;
  value: number;
  change24h: number;
  thesis: string;
  why: string;
};

export type ActionItem = {
  eyebrow?: string;
  mode?: PortfolioActionMode;
  title: string;
  description: string;
  supportingText?: string;
  executionHint?: string;
  marketNote?: string;
  href: string;
  cta: string;
};

export type ActivityItem = {
  title: string;
  detail: string;
  timestamp: string;
  type: "insight" | "deposit" | "allocation" | "report";
};

export type AllocationRecommendation = {
  symbol: string;
  name: string;
  percentage: number;
  reason: string;
};

export type ResearchAnswer = {
  prompt: string;
  title: string;
  summary: string;
  keyPoints: string[];
  confidence: string;
  stance: string;
  liveSignal: string;
  modeLabel?: string;
  portfolioImpact: string[];
  detailCta: string;
  portfolioCta: string;
};

export type ReportSection = {
  title: string;
  summary: string;
  metric: string;
  note: string;
  kind?: "default" | "next-steps";
  actions?: Array<{
    label: string;
    href: string;
  }>;
};

export type MonthlyReport = {
  month: string;
  performance: number;
  previousPerformance: number;
  assessment: string;
  behavior: string;
  postureChange: string;
  allocationChange: string;
  highlights: string[];
  insights: string[];
  sections: ReportSection[];
};

export type X402Endpoint = {
  title: string;
  href: string;
  provider: string;
  summary: string;
  surface: string;
  output: string;
  ctaLabel: string;
  activeCtaLabel?: string;
};

export type ApprovedX402Service = {
  title: string;
  provider: string;
  category: string;
  summary: string;
  status: string;
};

export type WalletQuickActionId = "receive" | "send" | "fund" | "allocate";

export type WalletQuickActionDetail = {
  label: string;
  value: string;
};

export type WalletQuickAction = {
  id: WalletQuickActionId;
  label: string;
  hint: string;
  title: string;
  description: string;
  status: string;
  note: string;
  primaryCta: string;
  feedback: string;
  details: WalletQuickActionDetail[];
};
