import { useRef } from "react";
import useScrollLock from "./useScrollLock";
import useEscapeKey from "./useEscapeKey";
import useFocusTrap from "./useFocusTrap";
import useAutoFocus from "./useAutoFocus";

export default function useDialog<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T | null>(null);

  useScrollLock();
  useEscapeKey(onClose);
  useFocusTrap(ref);
  useAutoFocus(ref);

  return ref;
}
