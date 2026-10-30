import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";
import Icon from "@/components/Icon";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  align = "center",
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  align?: "center" | "top";
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        data-slot="dialog-overlay"
        className="bg-shade-800 fixed inset-0 z-50 transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
      />
      <DialogPrimitive.Viewport
        data-slot="dialog-viewport"
        className="fixed inset-0 z-50 flex overflow-y-auto px-6 py-30 sm:py-46"
      >
        {/* Behind a nested dialog the popup only fades: closing from there
            still runs the scale transition, which keeps the backdrop
            mounted until its fade-out ends. */}
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className={cn(
            "relative mx-auto w-full max-w-full rounded-lg bg-white outline-hidden transition-[opacity,scale] duration-300 data-ending-style:scale-95 data-ending-style:opacity-0 data-nested-dialog-open:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none sm:w-max",
            align === "center" ? "my-auto" : "mb-auto origin-top",
            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              data-slot="dialog-close"
              aria-label="Close dialog"
              className="group hover:bg-shade-600 focus-visible:ring-shade-700 absolute top-6.75 right-3.75 flex size-8 items-center justify-center rounded-full outline-hidden transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 sm:top-5.75 sm:right-5.75"
            >
              <Icon
                name="close-modal"
                className="size-3.75 text-black/40 transition-colors duration-300 group-hover:text-black"
              />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-lg leading-5.5 font-bold sm:text-2xl sm:leading-7.25",
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-7.5",
        className,
      )}
      {...props}
    />
  );
}

export { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle };
