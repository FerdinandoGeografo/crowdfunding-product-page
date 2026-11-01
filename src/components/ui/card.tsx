import * as React from "react";
import { cn } from "cn";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "inset-ring-shade-200 rounded-lg bg-white inset-ring",
        className,
      )}
      {...props}
    />
  );
}

export { Card };
