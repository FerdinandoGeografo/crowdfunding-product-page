import NavLink from "./NavLink";

interface NavListProps {
  onNavigate?: () => void;
}

export default function NavList({ onNavigate }: NavListProps) {
  return (
    <ul className="flex flex-1 flex-col items-stretch divide-y divide-shade-600 sm:flex-auto sm:flex-row sm:items-center sm:gap-8 sm:divide-y-0 [&>li]:h-auto">
      <li>
        <NavLink to="#" onClick={onNavigate}>
          about
        </NavLink>
      </li>
      <li>
        <NavLink to="#" onClick={onNavigate}>
          discover
        </NavLink>
      </li>
      <li>
        <NavLink to="#" onClick={onNavigate}>
          get started
        </NavLink>
      </li>
    </ul>
  );
}
