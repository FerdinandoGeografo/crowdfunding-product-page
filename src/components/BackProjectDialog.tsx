import { Dialog, DialogContent } from "@/components/ui/dialog";
import useModal from "../hooks/useModal";
import BackProjectForm from "./BackProjectForm";
import ThankYou from "./ThankYou";

export default function BackProjectDialog() {
  const { openName, openerRef, close } = useModal();

  return (
    <Dialog
      open={openName !== null}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <DialogContent align="top" finalFocus={openerRef}>
        <BackProjectForm />
      </DialogContent>
      {/* Nested, so the form stays open underneath and its backdrop is shared. */}
      <ThankYou />
    </Dialog>
  );
}
