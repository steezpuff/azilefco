import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.7, 0.2, 1] } },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "span" ? motion.span : motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0, margin: "0px 0px -10% 0px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

interface LineRevealProps {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.8, ease: [0.21, 0.7, 0.2, 1], delay: 0.05 * i },
  }),
};

export function LineReveal({ lines, className, lineClassName, immediate = false }: LineRevealProps) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span className="block overflow-hidden pb-[0.08em]" key={i}>
          <motion.span
            className={lineClassName ?? "block"}
            custom={i}
            initial="hidden"
            variants={lineVariants}
            {...(immediate
              ? { animate: "show" }
              : { whileInView: "show", viewport: { once: true, amount: 0, margin: "0px 0px -10% 0px" } })}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
