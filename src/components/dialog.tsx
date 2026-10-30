import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { cn } from "cn";

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
        className="bg-shade-800 fixed inset-0 z-50"
      />
      <DialogPrimitive.Viewport
        data-slot="dialog-viewport"
        className="fixed inset-0 z-50 flex overflow-y-auto px-6 py-30 sm:py-46"
      >
        <DialogPrimitive.Popup
          data-slot="dialog-content"
          className={cn(
            "relative mx-auto w-full max-w-full rounded-lg bg-white outline-hidden sm:w-max",
            align === "center" ? "my-auto" : "mb-auto",
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
              <svg
                aria-hidden="true"
                width="15"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-black opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fillRule="evenodd"
                />
              </svg>
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
