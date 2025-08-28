import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionDiv = motion.div;

export const Reveal = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 1, ease: "easeOut" },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <MotionDiv  ref={ref}
    initial={initial}
    animate={isInView ? animate : initial}
    transition={transition}
    className="w-full" >
      {children}
    </MotionDiv>
  );
};
