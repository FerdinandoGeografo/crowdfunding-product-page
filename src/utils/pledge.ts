import type { PledgeOption } from "../models/product.interface";

/** A paid pledge needs stock left and at least the reward's base amount. */
export function isValidPledge(option: PledgeOption, amount: number) {
  if (!Number.isFinite(amount) || amount < 0) return false;
  if (option.kind === "free") return true;
  return option.unitsLeft > 0 && amount >= option.baseAmount;
}
