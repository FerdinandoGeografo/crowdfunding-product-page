import { useState } from "react";
import type { PledgeOption } from "../models/product.interface";

function getBaseAmount(option?: PledgeOption) {
  return option?.kind === "paid" ? option.baseAmount : 0;
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
