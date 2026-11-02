import * as React from "react";
import { cn } from "cn";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "rounded-lg bg-white inset-ring inset-ring-shade-200",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
