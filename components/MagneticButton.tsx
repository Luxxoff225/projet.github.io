"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Button, { ButtonProps } from "./Button";

const MAX_TRANSLATE = 20;

const MagneticButton = ({ children, className, ...props }: ButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const offsetX = event.clientX - (rect.left + rect.width / 2);
      const offsetY = event.clientY - (rect.top + rect.height / 2);
      const limitedX = Math.max(Math.min(offsetX * 0.2, MAX_TRANSLATE), -MAX_TRANSLATE);
      const limitedY = Math.max(Math.min(offsetY * 0.2, MAX_TRANSLATE), -MAX_TRANSLATE);
      x.set(limitedX);
      y.set(limitedY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }} className="relative inline-block">
      <Button className={twMerge("shadow-glow", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
