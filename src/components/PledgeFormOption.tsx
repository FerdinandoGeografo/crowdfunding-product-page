import { useId } from "react";
import { cn } from "cn";
import type { PledgeOption } from "../models/product.interface";
import { formatCurrency } from "../utils/format";
import { Card } from "@/components/ui/card";
import { RadioGroupItem } from "@/components/ui/radio-group";
import PledgeAmountInput from "./PledgeAmountInput";
import ProductUnits from "./ProductUnits";

interface PledgeFormOptionProps {
  option: PledgeOption;
  selected: boolean;
}

export default function PledgeFormOption({
  option,
  selected,
}: PledgeFormOptionProps) {
  const { id, name, description } = option;
  const isOutStock = option.kind === "paid" && option.unitsLeft === 0;
  const textId = useId();
  const detailIds =
    option.kind === "paid"
      ? `${textId}-pledge ${textId}-units ${textId}-description`
      : `${textId}-description`;

  return (
    <Card
      className={cn(
        "inset-ring-shade-300 pt-6 sm:pt-8",
        selected && "outline-primary-500 outline-2 -outline-offset-2",
        isOutStock && "opacity-50",
      )}
    >
      <label
        className={cn(
          "grid grid-cols-[24px_1fr] grid-rows-[minmax(17px,auto)_minmax(17px,auto)] gap-x-4 gap-y-2 px-6 sm:grid-cols-[24px_auto_auto_1fr] sm:grid-rows-[auto_auto] sm:items-center sm:gap-y-4.25 sm:px-7 sm:pb-8",
          selected ? "pb-6" : "pb-8",
          !isOutStock && "group/option cursor-pointer",
        )}
      >
        <RadioGroupItem
          value={id}
          disabled={isOutStock}
          aria-labelledby={`${textId}-name`}
          aria-describedby={detailIds}
          className="group-hover/option:border-primary-500 row-start-1 row-end-3 self-center sm:mt-0.5 sm:self-start"
        />

        <span
          id={`${textId}-name`}
          className={cn(
            "group-hover/option:text-primary-500 text-sm leading-4.25 font-bold transition-colors duration-300 sm:ml-2 sm:text-base sm:leading-5",
            option.kind === "free" &&
              "row-span-2 self-center sm:row-span-1 sm:self-auto",
          )}
        >
          {name}
        </span>

        {option.kind === "paid" && (
          <>
            <span
              id={`${textId}-pledge`}
              className={cn(
                "text-primary-500 text-sm leading-4.25 sm:text-base sm:leading-5",
                selected ? "font-bold" : "font-medium",
              )}
            >
              Pledge {formatCurrency(option.baseAmount)} or more
            </span>
            <span
              id={`${textId}-units`}
              className="order-1 mt-4 ml-auto flex items-center sm:order-0 sm:mt-0 sm:h-5"
            >
              <ProductUnits unitsLeft={option.unitsLeft} />
            </span>
          </>
        )}

        <span
          id={`${textId}-description`}
          className="col-start-1 -col-end-1 mt-4 text-sm leading-6 text-neutral-500 sm:col-start-2 sm:mt-0 sm:ml-2 sm:text-[15px] sm:leading-7"
        >
          {description}
        </span>
      </label>

      {selected && <PledgeAmountInput option={option} />}
    </Card>
  );
}
