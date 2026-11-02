import * as React from "react";
import { cn } from "cn";

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="field"
      className={cn("flex", className)}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="field-label"
      className={cn("text-sm leading-7 text-neutral-500 sm:text-md", className)}
      {...props}
    />
  );
}

export { Field, FieldLabel };
