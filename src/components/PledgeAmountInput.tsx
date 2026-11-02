import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { PledgeOption } from "../models/product.interface";

interface PledgeAmountInputProps {
  option: PledgeOption;
  minimumId: string;
}

export default function PledgeAmountInput({
  option,
  minimumId,
}: PledgeAmountInputProps) {
  const inputId = useId();

  return (
    <Field
      aria-label={option.name}
      onKeyDown={(e) => {
        if (e.key.startsWith("Arrow")) e.stopPropagation();
      }}
      className="flex-wrap items-center justify-center gap-4 border-t border-t-shade-300 px-6 py-6 sm:justify-end sm:px-7"
    >
      {option.kind === "paid" && (
        <>
          <FieldLabel
            htmlFor={inputId}
            className="w-full text-center sm:mr-auto sm:w-auto sm:text-left"
          >
            Enter your pledge
          </FieldLabel>

          <div className="relative">
            <span className="absolute top-1/2 left-6 -translate-y-1/2 text-sm leading-4.25 font-bold text-shade-700">
              $
            </span>
            <Input
              id={inputId}
              name="amount"
              type="number"
              inputMode="numeric"
              required
              min={option.baseAmount}
              defaultValue={option.baseAmount}
              aria-describedby={minimumId}
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
