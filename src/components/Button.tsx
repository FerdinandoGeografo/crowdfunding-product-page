import type { ReactNode } from "react";

type ButtonVariation = "primary" | "secondary";
type ButtonSize = "medium" | "large";

interface ButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  variation?: ButtonVariation;
  disabled?: boolean;
  className?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
}

const BUTTON_VARIATIONS: Record<ButtonVariation, string> = {
  primary:
    "bg-primary-500 text-white px-10 hover:bg-primary-800 focus:ring-primary-800",
  secondary: "text-neutral-500 bg-shade-100 sm:pr-6 group focus:ring-shade-700",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  medium: "h-12 pt-3.75 pb-4 text-sm leading-4.25",
  large: "h-14 pt-4.25 pb-4.75 leading-5",
};

export default function Button({
  children,
  variation = "primary",
  size = "medium",
  disabled = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`disabled:bg-shade-500 flex cursor-pointer rounded-full font-bold outline-0 transition-all duration-300 focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed ${BUTTON_VARIATIONS[variation]} ${BUTTON_SIZES[size]} ${className}`}
    >
      {children}
    </button>
  );
}
