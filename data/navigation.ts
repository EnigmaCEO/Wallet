import type { NavigationItem } from "@/types/demo";

export const marketingNavigation: NavigationItem[] = [
  {
    label: "Why Sagitta",
    href: "/#why-wallets-fail",
  },
  {
    label: "How It Works",
    href: "/#how-sagitta-works",
  },
  {
    label: "Capabilities",
    href: "/#capabilities",
  },
  {
    label: "Demo",
    href: "/wallet",
  },
];

export const walletNavigation: NavigationItem[] = [
  {
    label: "Overview",
    href: "/wallet",
    description: "Balance and portfolio",
  },
  {
    label: "Services",
    href: "/wallet/selun",
    description: "Approved x402 execution",
  },
  {
    label: "Research",
    href: "/wallet/research",
    description: "Portfolio-aware insight",
  },
  {
    label: "Reports",
    href: "/wallet/reports",
    description: "Monthly assessment",
  },
];
