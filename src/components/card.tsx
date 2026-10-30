import * as React from "react";
import { cn } from "cn";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("border-shade-200 rounded-lg border bg-white", className)}
      {...props}
    />
  );
}

export { Card };
