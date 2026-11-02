import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cn } from "cn";

function Toggle({ className, ...props }: TogglePrimitive.Props) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(
        "group/toggle inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-shade-100 pt-4.25 pb-4.75 leading-5 font-bold text-neutral-500 outline-hidden transition-all duration-300 select-none focus-visible:ring-2 focus-visible:ring-primary-800 focus-visible:ring-offset-2 aria-pressed:bg-primary-50 aria-pressed:text-primary-800 aria-pressed:hover:text-primary-500",
        className,
      )}
      {...props}
    />
  );
}

export { Toggle };
