import { createContext, type RefObject } from "react";

export type ModalName = "back-project" | "thank-you";

export interface ModalContextValue {
  openName: ModalName | null;
  selectedOptionId: string | null;
  /** Element that started the pledge flow, focused again when it ends. */
  openerRef: RefObject<HTMLElement | null>;
  openBackProject: (optionId?: string) => void;
  openThankYou: () => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);
