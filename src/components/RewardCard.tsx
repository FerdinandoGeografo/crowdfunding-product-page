import { useId } from "react";
import { cn } from "cn";
import type { PaidPledgeOption } from "../models/product.interface";
import { formatMinimumPledge } from "../utils/format";
import { isOutOfStock } from "../utils/pledge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useModal from "../hooks/useModal";
import ProductUnits from "./ProductUnits";

interface RewardCardProps {
  option: PaidPledgeOption;
}

export default function RewardCard({ option }: RewardCardProps) {
  const { id, baseAmount, unitsLeft, description, name } = option;
  const { openBackProject } = useModal();
  const outOfStock = isOutOfStock(option);
  const nameId = useId();

  return (
    <li>
      <Card
        className={cn(
          "inset-ring-shade-300 flex flex-col gap-6 p-6 sm:px-8 sm:pt-9.5 sm:pb-8",
          outOfStock && "opacity-50",
        )}
      >
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3
            id={nameId}
            className="text-sm leading-4.25 font-bold text-black sm:text-lg sm:leading-5.5"
          >
            {name}
          </h3>
          <p className="text-primary-500 text-sm leading-4.25 font-medium sm:text-[15px] sm:leading-4.5">
            {formatMinimumPledge(baseAmount)}
          </p>
        </div>
        <p className="text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-7.5">
          {description}
        </p>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ProductUnits unitsLeft={unitsLeft} size="large" />

          <Button
            disabled={outOfStock}
            focusableWhenDisabled
            aria-describedby={nameId}
            className="px-8"
            onClick={(e) => openBackProject(e.currentTarget, id)}
          >
            <span>{outOfStock ? "Out of stock" : "Select Reward"}</span>
          </Button>
        </div>
      </Card>
    </li>
  );
}
