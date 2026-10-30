import { useId } from "react";
import type { PaidPledgeOption } from "../models/product.interface";
import { formatCurrency } from "../utils/format";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import useModal from "../hooks/useModal";
import ProductUnits from "./ProductUnits";

interface RewardCardProps {
  option: PaidPledgeOption;
}

export default function RewardCard({
  option: { id, baseAmount, unitsLeft, description, name },
}: RewardCardProps) {
  const { openBackProject } = useModal();
  const isOutStock = unitsLeft === 0;
  const nameId = useId();

  return (
    <li>
      <Card
        className={`border-shade-300 flex flex-col gap-6 px-8 pt-8 pb-8 sm:pt-9.5 ${isOutStock ? "opacity-50" : ""}`}
      >
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 id={nameId} className="text-lg leading-5.5 font-bold text-black">
            {name}
          </h3>
          <p className="text-primary-500 text-[15px] leading-4.5 font-medium">
            Pledge {formatCurrency(baseAmount)} or more
          </p>
        </div>
        <p className="text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-7.5">
          {description}
        </p>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <ProductUnits unitsLeft={unitsLeft} size="large" />

          <Button
            disabled={isOutStock}
            aria-describedby={nameId}
            className="px-8"
            onClick={() => openBackProject(id)}
          >
            <span>{isOutStock ? "Out of stock" : "Select Reward"}</span>
          </Button>
        </div>
      </Card>
    </li>
  );
}
