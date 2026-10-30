import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`border-shade-200 rounded-lg border bg-white ${className}`}>
      {children}
    </div>
  );
}
