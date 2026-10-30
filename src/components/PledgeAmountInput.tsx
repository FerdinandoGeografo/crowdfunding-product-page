import { Button } from "@/components/button";
import { Field, FieldLabel } from "@/components/field";
import { Input } from "@/components/input";
import type { PledgeOption } from "../models/product.interface";

interface PledgeAmountInputProps {
  option: PledgeOption;
  amount: string;
  onAmountChange: (amount: string) => void;
}

export default function PledgeAmountInput({
  option,
  amount,
  onAmountChange,
}: PledgeAmountInputProps) {
  return (
    // This panel renders inside the radio group, which would treat arrow keys
    // as "select another reward". Keep them for the number input instead.
    <Field
      onKeyDown={(e) => {
        if (e.key.startsWith("Arrow")) e.stopPropagation();
      }}
      className="border-t-shade-300 flex-wrap items-center justify-center gap-4 border-t px-6 py-6 sm:justify-end sm:px-0"
    >
      {option.kind === "paid" && (
        <>
          <FieldLabel
            htmlFor="pledge-value"
            className="w-full text-center sm:mr-auto sm:w-auto sm:text-left"
          >
            Enter your pledge
          </FieldLabel>

          <div className="relative">
            <span className="text-shade-700 absolute top-1/2 left-6 -translate-y-1/2 text-sm leading-4.25 font-bold">
              $
            </span>
            <Input
              id="pledge-value"
              type="number"
              inputMode="numeric"
              required
              min={option.baseAmount}
              value={amount}
              onChange={(e) => onAmountChange(e.target.value)}
              className="max-w-25 pr-2 pl-10"
            />
          </div>
        </>
      )}

      <Button type="submit" className="px-6">
        <span>Continue</span>
      </Button>
    </Field>
  );
}
