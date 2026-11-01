import type { PledgeOption } from "../models/product.interface";

export function isOutOfStock(option: PledgeOption) {
  return option.kind === "paid" && option.unitsLeft <= 0;
}

export function isValidPledge(option: PledgeOption, amount: number) {
  if (!Number.isFinite(amount) || amount < 0) return false;
  if (option.kind === "free") return true;
  return !isOutOfStock(option) && amount >= option.baseAmount;
}
