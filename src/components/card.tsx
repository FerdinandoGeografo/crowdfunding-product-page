import * as React from "react";
import { cn } from "cn";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      // Inset ring instead of border, so the outline takes no space.
      className={cn(
        "inset-ring-shade-200 rounded-lg bg-white inset-ring",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
