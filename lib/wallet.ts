import type { Holding, PortfolioActionMode } from "@/types/demo";

const stableSymbols = new Set(["USDC", "USDT", "DAI", "USDS", "FDUSD", "PYUSD"]);

export function getPortfolioActionMode(
  holdings: Holding[],
): PortfolioActionMode {
  const activeHoldings = holdings.filter((holding) => holding.value > 0);

  if (activeHoldings.length === 0) {
    return "allocation";
  }

  return activeHoldings.every((holding) => stableSymbols.has(holding.symbol))
    ? "allocation"
    : "rebalance";
}
