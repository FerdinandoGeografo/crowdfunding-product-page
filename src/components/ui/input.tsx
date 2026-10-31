import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "border-shade-300 caret-primary-500 hover:border-primary-500 focus-visible:border-primary-500 focus-visible:ring-primary-800 h-12 appearance-none rounded-full border leading-4.25 font-bold text-black outline-hidden transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
