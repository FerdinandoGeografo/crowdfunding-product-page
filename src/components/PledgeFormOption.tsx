import { useId, type ReactNode } from "react";
import { cn } from "cn";
import type { PledgeOption } from "../models/product.interface";
import { formatCurrency } from "../utils/format";
import { Card } from "@/components/card";
import { RadioGroupItem } from "@/components/radio-group";
import ProductUnits from "./ProductUnits";

interface PledgeFormOptionProps {
  option: PledgeOption;
  selected: boolean;
  children: ReactNode;
}

export default function PledgeFormOption({
  option,
  selected,
  children,
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
        "border-shade-300 pt-6 sm:px-7 sm:pt-8",
        selected && "border-primary-500 inset-ring-primary-500 inset-ring",
        isOutStock && "opacity-50",
      )}
    >
      <label
        className={cn(
          "grid grid-cols-[24px_1fr] grid-rows-[auto_auto_auto_auto] gap-x-4 gap-y-2 px-6 pb-8 sm:grid-cols-[24px_auto_auto_1fr] sm:grid-rows-[auto_auto] sm:items-center sm:gap-y-4.25 sm:px-0",
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
          className="group-hover/option:text-primary-500 text-sm leading-4.25 font-bold transition-colors duration-300 sm:mt-0 sm:ml-2 sm:text-lg sm:leading-5"
        >
          {name}
        </span>

        {option.kind === "paid" && (
          <>
            <span
              id={`${textId}-pledge`}
              className={cn(
                "text-primary-500 text-sm leading-4.25 sm:text-lg sm:leading-5",
                selected ? "font-bold" : "font-medium",
              )}
            >
              Pledge {formatCurrency(option.baseAmount)} or more
            </span>
            <span
              id={`${textId}-units`}
              className="order-1 mt-4 ml-auto sm:order-0 sm:mt-0"
            >
              <ProductUnits unitsLeft={option.unitsLeft} size="medium" />
            </span>
          </>
        )}

        <span
          id={`${textId}-description`}
          className="col-start-1 -col-end-1 mt-4 text-sm leading-6 text-neutral-500 sm:col-start-2 sm:mt-0 sm:text-[15px] sm:leading-7"
        >
          {description}
        </span>
      </label>

      {selected && children}
    </Card>
  );
}
