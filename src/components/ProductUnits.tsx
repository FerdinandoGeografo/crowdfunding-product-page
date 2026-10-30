interface ProductUnitsProps {
  unitsLeft: number;
  size: "large" | "medium";
}

const PRODUCT_UNITS_SIZES: Record<ProductUnitsProps["size"], string> = {
  large: "text-[32px] leading-9.75",
  medium: "text-lg leading-5.5",
};

export default function ProductUnits({
  unitsLeft,
  size = "medium",
}: ProductUnitsProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${PRODUCT_UNITS_SIZES[size]} font-bold`}>
        {unitsLeft}
      </span>
      <span className="text-[15px] leading-4.5 text-neutral-500">left</span>
    </span>
  );
}
