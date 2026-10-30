import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function useAutoFocus<T extends HTMLElement>(
  ref: RefObject<T | null>,
) {
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const firstFocusable = ref.current?.querySelector<HTMLElement>(FOCUSABLE);
    (firstFocusable ?? ref.current)?.focus();
    return () => previouslyFocused?.focus();
  }, [ref]);
}
