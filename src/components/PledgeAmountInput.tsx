import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/button";
import type { PledgeOption } from "../models/product.interface";

interface PledgeAmountInputProps {
  option: PledgeOption;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}

export default function PledgeAmountInput({
  option,
  amount,
  setAmount,
}: PledgeAmountInputProps) {
  const isFree = option.kind === "free";
  const isOutStock = !isFree && option.unitsLeft === 0;

  return (
    <div className="border-t-shade-300 flex flex-wrap items-center justify-center gap-4 border-t px-6 py-6 sm:justify-end sm:px-0">
      {!isFree && (
        <>
          <label
            htmlFor="pledge-value"
            className="text-sm leading-7 text-neutral-500 sm:mr-auto sm:text-[15px]"
          >
            Enter your pledge
          </label>

          <div className="relative">
            <span className="text-shade-700 absolute top-1/2 left-6 -translate-y-1/2 text-sm leading-4.25 font-bold">
              $
            </span>
            <input
              className="border-shade-300 hover:border-primary-500 focus:ring-primary-800 caret-primary-500 focus:border-primary-500 h-12 max-w-25 appearance-none rounded-full border pr-2 pl-10 leading-4.25 font-bold text-black outline-0 transition-all duration-300 focus:ring-2 focus:ring-offset-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              id="pledge-value"
              type="number"
              value={amount}
              required
              min={option.baseAmount}
              onChange={(e) =>
                setAmount(Number(e.target.value) || option.baseAmount)
              }
            />
          </div>
        </>
      )}

      <Button disabled={isOutStock} className="px-6" type="submit">
        <span>Continue</span>
      </Button>
    </div>
  );
}
