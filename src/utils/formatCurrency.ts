export interface FormatCurrencyOptions {
  currency?: string;
  locale?: string;
}

export function formatCurrency(amount: number, options: FormatCurrencyOptions) {
  const { locale = "ru-RU", currency = "RUB" } = options;

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  return formatter.format(amount / 100);
}
