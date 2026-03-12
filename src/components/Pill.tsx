import { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
}

export const Pill = ({ children, className = "" }: PillProps) => {
  return (
    <span className={`pill-badge ${className}`}>
      {children}
    </span>
  );
};
