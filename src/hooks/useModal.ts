import { useContext } from "react";
import { ModalContext } from "../contexts/modal.context";

export default function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Context used outside Modal provider");
  return context;
}
