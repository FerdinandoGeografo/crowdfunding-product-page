import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-bold outline-hidden transition-all duration-300 select-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-shade-500",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 px-10 text-white hover:bg-primary-800 focus-visible:ring-primary-800",
        secondary:
          "group bg-shade-100 text-neutral-500 focus-visible:ring-shade-700 sm:pr-6",
      },
      size: {
        medium: "h-12 pt-3.75 pb-4 text-sm leading-4.25",
        large: "h-14 pt-4.25 pb-4.75 leading-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
