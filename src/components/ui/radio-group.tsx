import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "cn";

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full border border-shade-300 outline-hidden transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2 data-disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        keepMounted
        data-slot="radio-group-indicator"
        className="size-3 scale-0 rounded-full bg-primary-500 transition-transform duration-300 data-checked:scale-100"
      />
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
