import { cva, type VariantProps } from "class-variance-authority";

const unitsVariants = cva("font-bold", {
  variants: {
    size: {
      medium: "text-lg leading-5.5",
      large: "text-4xl leading-9.75",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface ProductUnitsProps extends VariantProps<typeof unitsVariants> {
  unitsLeft: number;
}

export default function ProductUnits({ unitsLeft, size }: ProductUnitsProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={unitsVariants({ size })}>{unitsLeft}</span>
      <span className="text-md leading-4.5 text-neutral-500">left</span>
    </span>
  );
}
