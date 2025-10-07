"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode;
  className?: string;
};

const MAX_ROTATION = 5;

const Card = ({ children, className }: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 18 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const percentX = (offsetX - centerX) / centerX;
      const percentY = (offsetY - centerY) / centerY;
      rotateY.set(percentX * MAX_ROTATION);
      rotateX.set(-percentY * MAX_ROTATION);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className={twMerge(
        "group relative h-full rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-soft transition-transform duration-300 will-change-transform hover:-translate-y-1.5 hover:shadow-glow",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-4px)] bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full flex-col gap-4 text-foreground/90">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
