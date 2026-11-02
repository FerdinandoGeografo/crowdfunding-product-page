import type { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  to: string;
  onClick?: () => void;
}

export default function NavLink({ children, to, onClick }: NavLinkProps) {
  return (
    <a
      className="relative flex h-17.5 items-center pl-6 text-lg leading-5.5 font-medium text-black capitalize outline-hidden transition-colors duration-300 after:absolute after:-bottom-px after:left-0 after:hidden after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-primary-500 hover:after:scale-x-100 focus-visible:text-primary-500 focus-visible:after:scale-x-100 sm:h-auto sm:pl-0 sm:text-xs sm:leading-4 sm:text-white sm:after:block sm:hover:text-white sm:focus-visible:text-white"
      href={to}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
