const locale = window.navigator.userLanguage || window.navigator.language;

export function toReadableStocked(value) {
  if (value === null || value === undefined) {
    return value;
  }
  if (typeof value !== 'boolean') {
    return value;
  }
  return value === true ? 'In Stock' : 'Out of stock';
}

export function toCurrency(value) {
  if (!value) {
    return value;
  }

  if (typeof value !== 'number' && typeof value !== 'string') {
    return value;
  }

  const rawValue = parseFloat(value);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(rawValue);
}

export function toPercentage(value) {
  if (!value) {
    return value;
  }

  if (typeof value !== 'number') {
    return value;
  }
  return new Intl.NumberFormat(locale, {
    style: 'percent',
  }).format(value);
}
