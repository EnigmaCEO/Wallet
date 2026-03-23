import type { MonthlyReport } from "@/types/demo";

export const monthlyReport: MonthlyReport = {
  month: "March 2026",
  performance: 6.8,
  previousPerformance: 4.2,
  assessment: "On track",
  behavior:
    "The portfolio remained balanced while capturing upside from SOL.",
  postureChange: "Risk posture unchanged",
  allocationChange: "Exposure to SOL increased",
  highlights: [
    "SOL was the strongest contributor this month.",
    "BTC and ETH continued to anchor the core.",
    "USDC remained available for the next guided move.",
  ],
  insights: [
    "The mix stayed aligned with the original long-term growth goal.",
    "Fresh capital can still favor majors plus one selective add.",
    "A rebalance would tighten sizing before adding more beta.",
  ],
  sections: [
    {
      title: "Performance Overview",
      metric: "+6.8%",
      summary:
        "Returns improved as SOL and ETH added upside without forcing a posture change.",
      note: "Up from +4.2% last month.",
    },
    {
      title: "Risk Posture",
      metric: "Balanced",
      summary:
        "Cash and majors kept the portfolio aligned with a long-term growth mandate.",
      note: "Risk posture unchanged.",
    },
    {
      title: "Allocation Changes",
      metric: "SOL +5%",
      summary:
        "Recent market strength pushed SOL above its earlier sizing and created a cleaner case for review.",
      note: "Exposure to SOL increased.",
    },
    {
      title: "Suggested Next Steps",
      kind: "next-steps",
      metric: "3 actions",
      summary:
        "Use this report to review allocation, run a rebalance plan, and research the next selective add.",
      note: "Move from check-in to action with context.",
      actions: [
        {
          label: "Review allocation",
          href: "/wallet",
        },
        {
          label: "Run rebalance plan",
          href: "/wallet/selun",
        },
        {
          label: "Research new position",
          href: "/wallet/research",
        },
      ],
    },
  ],
};
