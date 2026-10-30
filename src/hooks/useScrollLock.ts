import { useEffect } from "react";

export default function useScrollLock(
  active: boolean = true,
  inert: boolean = true,
) {
  useEffect(() => {
    if (!active) return;
    const root = document.getElementById("root");
    if (inert) root?.setAttribute("inert", "");
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
      if (inert) root?.removeAttribute("inert");
    };
  }, [active, inert]);
}
