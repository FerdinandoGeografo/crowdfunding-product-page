import type { IconName } from "../models/icon.interface";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className}>
      <use href={`#${name}`} />
    </svg>
  );
}
