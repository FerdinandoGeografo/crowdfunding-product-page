import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import useModal from "../hooks/useModal";
import Icon from "./Icon";

export default function ThankYou() {
  const { openName, close } = useModal();

  return (
    <Dialog
      open={openName === "thank-you"}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <DialogContent showCloseButton={false} finalFocus={false}>
        <div className="flex max-w-135 flex-col items-center gap-6 px-6 pt-8 pb-10 sm:gap-8 sm:px-12 sm:pt-12 sm:pb-[48.5px]">
          <Icon
            name="check"
            className="size-16 fill-primary-500 text-white sm:size-22.5"
          />

          <div className="mb-2 flex flex-col items-center gap-6 sm:mt-[15.5px] sm:mb-0 sm:gap-4">
            <DialogTitle>Thanks for your support!</DialogTitle>
            <DialogDescription className="text-center">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </DialogDescription>
          </div>

          <DialogClose render={<Button />}>
            <span>Got it!</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
