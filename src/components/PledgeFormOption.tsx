import type { ReactNode } from "react";
import type { PledgeOption } from "../models/product.interface";
import { formatCurrency } from "../utils/format";
import Card from "./Card";
import ProductUnits from "./ProductUnits";

interface PledgeFormOptionProps {
  option: PledgeOption;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}

export default function PledgeFormOption({
  option,
  selected,
  onSelect,
  children,
}: PledgeFormOptionProps) {
  const { id, name, description } = option;
  const isOutStock = option.kind === "paid" && option.unitsLeft === 0;

  return (
    <label htmlFor={id} className="group">
      <input
        disabled={isOutStock}
        className="peer sr-only"
        type="radio"
        id={id}
        name="pledge-option"
        value={name}
        checked={selected}
        onChange={onSelect}
      />

      <Card
        className={`border-shade-300 peer-checked:border-primary-500 pt-6 peer-checked:border-2 sm:px-7 sm:pt-8 ${isOutStock ? "opacity-50" : ""}`}
      >
        <div className="grid grid-cols-[24px_1fr] grid-rows-[auto_auto_auto_auto] gap-x-4 gap-y-2 px-6 pb-8 sm:grid-cols-[24px_auto_auto_1fr] sm:grid-rows-[auto_auto] sm:items-center sm:gap-y-4.25 sm:px-0">
          <span className="border-shade-300 group-has-hover:border-primary-500 row-start-1 row-end-3 flex size-6 shrink-0 items-center justify-center self-center rounded-full border transition-colors duration-300 sm:mt-0.5 sm:self-start">
            <span className="bg-primary-500 size-3 scale-0 rounded-full transition-transform duration-300 group-has-checked:scale-100"></span>
          </span>

          <p className="group-has-hover:text-primary-500 text-sm leading-4.25 font-bold transition-colors duration-300 sm:mt-0 sm:ml-2 sm:text-lg sm:leading-5">
            {name}
          </p>

          {option.kind === "paid" && (
            <>
              <p
                className={`text-primary-500 cursor-pointer text-sm leading-4.25 sm:text-lg sm:leading-5 ${selected ? "font-bold" : "font-medium"}`}
              >
                Pledge {formatCurrency(option.baseAmount)} or more
              </p>
              <div className="order-1 mt-4 ml-auto sm:order-0 sm:mt-0">
                <ProductUnits unitsLeft={option.unitsLeft} size="medium" />
              </div>
            </>
          )}

          <p className="col-start-1 -col-end-1 mt-4 text-sm leading-6 text-neutral-500 sm:col-start-2 sm:mt-0 sm:text-[15px] sm:leading-7">
            {description}
          </p>
        </div>

        {selected && children}
      </Card>
    </label>
  );
}
