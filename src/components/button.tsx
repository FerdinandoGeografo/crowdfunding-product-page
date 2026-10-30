import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full bg-primary-500 px-10 font-bold text-white outline-hidden transition-all duration-300 select-none hover:bg-primary-800 focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-shade-500",
  {
    variants: {
      size: {
        medium: "h-12 pt-3.75 pb-4 text-sm leading-4.25",
        large: "h-14 pt-4.25 pb-4.75 leading-5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

function Button({
  className,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ size, className }))}
      {...props}
    />
  );
}

export { Button };
