import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import useScrollLock from "../hooks/useScrollLock";

// Tailwind's `sm` breakpoint.
const DESKTOP_QUERY = "(min-width: 40rem)";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = () => setIsOpen(false);

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const desktop = window.matchMedia(DESKTOP_QUERY);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    }
    function handleLayoutChange() {
      if (desktop.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleLayoutChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleLayoutChange);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="to-shade-50 fixed inset-0 z-40 block bg-linear-to-b from-black opacity-60 sm:hidden"
          onClick={close}
        ></div>
      )}

      <button
        ref={toggleRef}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label="Menu"
        className="group relative z-50 flex size-5 items-center justify-center outline-hidden sm:hidden"
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="bg-shade-700 absolute top-1/2 left-1/2 -z-1 size-8 -translate-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"></div>
        {isOpen ? (
          <svg
            aria-hidden="true"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="fill-white" fillRule="evenodd">
              <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
              <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
            </g>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="fill-white" fillRule="evenodd">
              <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
            </g>
          </svg>
        )}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Main"
        className={`pointer-events-none invisible absolute top-22 right-6 left-6 z-50 flex h-auto -translate-y-full rounded-lg bg-white opacity-0 transition-all duration-400 sm:pointer-events-auto sm:visible sm:static sm:h-4 sm:translate-y-0 sm:bg-transparent sm:opacity-100 ${isOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : ""}`}
      >
        <ul className="divide-shade-600 flex flex-1 flex-col items-stretch divide-y sm:flex-auto sm:flex-row sm:items-center sm:gap-[32.5px] sm:divide-y-0 [&>li]:h-auto">
          <li>
            <NavLink to="#" onClick={close}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={close}>
              discover
            </NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={close}>
              get started
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
