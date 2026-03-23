export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(
  value: number,
  maximumFractionDigits = 0,
  minimumFractionDigits = 0,
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);
}

export function formatSignedCurrency(
  value: number,
  maximumFractionDigits = 0,
  minimumFractionDigits = 0,
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay: "always",
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);
}

export function formatPercent(value: number) {
  const absoluteValue = Math.abs(value);

  return `${value >= 0 ? "+" : "-"}${absoluteValue.toFixed(1)}%`;
}
