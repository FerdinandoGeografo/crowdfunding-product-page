import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "./Icon";
import NavList from "./NavList";
import useMediaQuery from "../hooks/useMediaQuery";

const DESKTOP_QUERY = "(min-width: 40rem)";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  if (isDesktop && isOpen) setIsOpen(false);

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen} modal>
        <PopoverTrigger
          aria-label="Menu"
          className="group relative z-50 flex size-5 items-center justify-center outline-hidden sm:hidden"
        >
          <div className="bg-shade-700 absolute top-1/2 left-1/2 -z-1 size-8 -translate-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"></div>
          {isOpen ? (
            <Icon name="close-menu" className="h-3.75 w-3.5 text-white" />
          ) : (
            <Icon name="hamburger" className="h-3.75 w-4 text-white" />
          )}
        </PopoverTrigger>
        <PopoverContent
          aria-label="Menu"
          align="end"
          sideOffset={36}
          className="w-[calc(100vw-3rem)]"
        >
          <nav aria-label="Main" className="flex">
            <NavList onNavigate={() => setIsOpen(false)} />
          </nav>
        </PopoverContent>
      </Popover>

      <nav aria-label="Main" className="hidden h-4 sm:flex">
        <NavList />
      </nav>
    </>
  );
}
