import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      data-slot="input"
      className={cn(
        "h-12 appearance-none rounded-full border border-shade-300 leading-4.25 font-bold text-black caret-primary-500 outline-hidden transition-all duration-300 hover:border-primary-500 focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
