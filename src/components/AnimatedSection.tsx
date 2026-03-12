import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export const AnimatedSection = ({ children, delay = 0, className = "", style }: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer = ({ children, className = "", staggerDelay = 0.1 }: StaggeredContainerProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ staggerChildren: shouldReduceMotion ? 0 : staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredItemProps {
  children: ReactNode;
}

export const StaggeredItem = ({ children }: StaggeredItemProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    >
      {children}
    </motion.div>
  );
};
