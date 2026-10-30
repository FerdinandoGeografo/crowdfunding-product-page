const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function formatNumber(value: number) {
  return numberFormatter.format(value);
}
