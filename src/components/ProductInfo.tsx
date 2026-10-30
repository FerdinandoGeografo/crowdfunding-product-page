import useProduct from "../hooks/useProduct";
import { formatCurrency, formatNumber } from "../utils/format";
import { Card } from "@/components/card";
import { Progress } from "@/components/progress";
import DataBox from "./DataBox";

export default function ProductInfo() {
  const {
    product: { amountBacked, totalAmount, totalBackers, daysLeft },
  } = useProduct();
  const backedLabel = `of ${formatCurrency(totalAmount)} backed`;

  return (
    <Card className="flex flex-col items-center gap-8 px-6 pt-8 pb-10 sm:items-start sm:gap-9.25 sm:px-11.75 sm:pt-11.75 sm:pb-12">
      <div className="divide-shade-300 grid grid-rows-[auto_auto_auto] gap-6 divide-y sm:grid-cols-[179px_180px_1fr] sm:grid-rows-1 sm:gap-11.75 sm:divide-x sm:divide-y-0">
        <DataBox value={formatCurrency(amountBacked)} label={backedLabel} />
        <DataBox value={formatNumber(totalBackers)} label="total backers" />
        <DataBox value={formatNumber(daysLeft)} label="days left" />
      </div>

      <Progress
        aria-label="Funding progress"
        value={amountBacked}
        max={totalAmount}
        getAriaValueText={() =>
          `${formatCurrency(amountBacked)} ${backedLabel}`
        }
      />
    </Card>
  );
}
