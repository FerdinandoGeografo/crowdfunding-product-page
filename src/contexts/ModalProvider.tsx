import { useCallback, useRef, useState, type ReactNode } from "react";
import { ModalContext, type ModalName } from "./modal.context";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState<ModalName | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const openBackProject = useCallback((optionId?: string) => {
    const { activeElement } = document;
    openerRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    setSelectedOptionId(optionId ?? null);
    setOpenName("back-project");
  }, []);
  const openThankYou = useCallback(() => setOpenName("thank-you"), []);
  const close = useCallback(() => setOpenName(null), []);

  return (
    <ModalContext.Provider
      value={{
        openName,
        selectedOptionId,
        openerRef,
        openBackProject,
        openThankYou,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
