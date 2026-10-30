import { Dialog, DialogContent } from "@/components/dialog";
import useModal from "../hooks/useModal";
import BackProjectForm from "./BackProjectForm";

export default function BackProjectDialog() {
  const { openName, openerRef, close } = useModal();

  return (
    <Dialog
      open={openName === "back-project"}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      {/* Leave focus alone when handing over to the thank-you dialog. */}
      <DialogContent finalFocus={openName === "thank-you" ? false : openerRef}>
        <BackProjectForm />
      </DialogContent>
    </Dialog>
  );
}
