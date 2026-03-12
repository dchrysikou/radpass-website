import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  variant?: "primary" | "secondary" | "nav";
  className?: string;
}

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = ""
}: ButtonProps) => {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles = "inline-flex items-center font-medium rounded-full transition-shadow duration-200";

  const variantStyles = {
    primary: "gap-2 px-6 py-3.5 bg-brand text-white hover:shadow-xl",
    secondary: "gap-2 px-6 py-3.5 bg-brand text-white hover:shadow-xl",
    nav: "px-5 py-2.5 text-sm bg-brand text-white hover:shadow-lg"
  };

  const showArrow = variant !== "nav";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.02, y: shouldReduceMotion ? 0 : -2 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </motion.a>
  );
};
