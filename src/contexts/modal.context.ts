import { createContext } from "react";

export type ModalName = "back-project" | "thank-you";

export interface ModalContextValue {
  openName: ModalName | null;
  open: (name: ModalName) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);
