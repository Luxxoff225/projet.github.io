"use client";

import Image, { ImageProps } from "next/image";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

export type ParallaxImageProps = Omit<ImageProps, "ref"> & {
  intensity?: number;
};

const ParallaxImage = ({ intensity = 15, alt, ...props }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  return (
    <div
      ref={containerRef}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.03] to-transparent p-2"
      onMouseMove={(event) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        x.set(Math.max(Math.min(offsetX / 10, intensity), -intensity));
        y.set(Math.max(Math.min(offsetY / 10, intensity), -intensity));
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative h-full w-full overflow-hidden rounded-[26px]"
      >
        <Image alt={alt} {...props} className={`h-full w-full object-cover ${props.className ?? ""}`} />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
