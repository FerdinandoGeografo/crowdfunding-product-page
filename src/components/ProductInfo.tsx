import useProduct from "../hooks/useProduct";
import { formatCurrency, formatNumber } from "../utils/format";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import DataBox from "./DataBox";

export default function ProductInfo() {
  const {
    product: { amountBacked, totalAmount, totalBackers, daysLeft },
  } = useProduct();
  const backedLabel = `of ${formatCurrency(totalAmount)} backed`;

  return (
    <Card className="flex flex-col items-center gap-8 px-6 pt-8 pb-10 sm:items-start sm:gap-9.25 sm:px-11.75 sm:pt-12.25 sm:pb-12.25">
      <div className="grid gap-6 divide-shade-300 sm:grid-cols-[179px_180px_1fr] sm:gap-11.75 sm:divide-x">
        <DataBox value={formatCurrency(amountBacked)} label={backedLabel} />
        <span className="mx-auto h-px w-20 bg-shade-300 sm:hidden" />
        <DataBox value={formatNumber(totalBackers)} label="total backers" />
        <span className="mx-auto h-px w-20 bg-shade-300 sm:hidden" />
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
