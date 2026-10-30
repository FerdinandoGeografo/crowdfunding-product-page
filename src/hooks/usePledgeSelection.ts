import { useState } from "react";
import type { PledgeOption } from "../models/product.interface";

export default function usePledgeSelection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [amount, setAmount] = useState(0);

  const select = (option: PledgeOption) => {
    setSelectedId(option.id);
    setAmount(option.kind === "paid" ? option.baseAmount : 0);
  };

  return { selectedId, amount, setAmount, select };
}
