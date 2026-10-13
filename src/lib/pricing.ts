/** Discount applied to monthly prices when billed yearly. */
export const YEARLY_DISCOUNT = 0.2;

/** Per-month price shown for a plan, rounded to whole dollars. */
export function getMonthlyPrice(monthly: number, yearly: boolean) {
  return yearly ? Math.round(monthly * (1 - YEARLY_DISCOUNT)) : monthly;
}

/** Billing note shown under a plan's price. */
export function getBillingNote(monthly: number, yearly: boolean) {
  if (monthly === 0) return "Free forever";
  return yearly ? `Billed $${getMonthlyPrice(monthly, true) * 12} yearly` : "Billed monthly";
}
