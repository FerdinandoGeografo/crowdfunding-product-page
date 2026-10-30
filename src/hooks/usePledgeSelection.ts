import { useState } from "react";
import type { PledgeOption } from "../models/product.interface";

// Kept as a string so the amount field can be cleared while typing.
function getBaseAmount(option?: PledgeOption) {
  return option?.kind === "paid" ? String(option.baseAmount) : "";
}

export default function usePledgeSelection(initialOption?: PledgeOption) {
  const [selectedId, setSelectedId] = useState(initialOption?.id ?? null);
  const [amount, setAmount] = useState(getBaseAmount(initialOption));

  const select = (option: PledgeOption) => {
    setSelectedId(option.id);
    setAmount(getBaseAmount(option));
  };

  return { selectedId, amount, setAmount, select };
}
