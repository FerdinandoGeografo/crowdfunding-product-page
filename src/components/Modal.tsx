import { useCallback, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalContext, type ModalName } from "../contexts/modal.context";
import useDialog from "../hooks/useDialog";
import useModal from "../hooks/useModal";

interface ModalProps {
  children: ReactNode;
}

interface WindowProps {
  name: ModalName;
  children: ReactNode;
  showClose?: boolean;
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<ModalName | null>(null);
  const close = useCallback(() => setOpenName(null), []);
  const open = useCallback((name: ModalName) => setOpenName(name), []);

  return (
    <ModalContext.Provider
      value={{
        openName,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, name, showClose = true }: WindowProps) {
  const { openName, close } = useModal();

  if (name !== openName) return null;

  return createPortal(
    <WindowContent showClose={showClose} close={close}>
      {children}
    </WindowContent>,
    document.body,
  );
}

function WindowContent({
  children,
  showClose,
  close,
}: {
  children: ReactNode;
  showClose: boolean;
  close: () => void;
}) {
  const ref = useDialog<HTMLDivElement>(close);
  const { openName } = useModal();

  return (
    <div
      className="bg-shade-800 fixed top-0 left-0 z-50 h-screen w-full transition-all duration-300"
      onClick={close}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={openName ?? ""}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-1/2 right-6 left-6 flex max-h-[90dvh] -translate-y-1/2 flex-col rounded-lg bg-white sm:right-0 sm:left-1/2 sm:w-max sm:-translate-x-1/2"
      >
        {showClose && (
          <button
            aria-label="Close dialog"
            className="group focus:ring-shade-700 absolute top-4.5 right-4.5 flex size-8 cursor-pointer items-center justify-center rounded-full outline-0 transition-colors duration-300 hover:bg-neutral-200 focus:ring-2 focus:ring-offset-2"
            onClick={close}
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
          </button>
        )}
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

function Title({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openName } = useModal();
  if (!openName)
    throw new Error("Modal.Title must be used inside Modal.Window");

  return (
    <h2
      id={openName}
      className={`text-lg leading-5.5 font-bold sm:text-2xl sm:leading-7.25 ${className}`}
    >
      {children}
    </h2>
  );
}

Modal.Window = Window;
Modal.Title = Title;

export default Modal;
