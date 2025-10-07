"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type StatItem = {
  label: string;
  value: number | string;
  prefix?: string;
  suffix?: string;
};

export type StatsProps = {
  items: StatItem[];
};

const AnimatedNumber = ({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 120, damping: 20 });
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  const formatted = new Intl.NumberFormat("fr-FR").format(display);

  return (
    <span ref={ref} className="text-3xl font-semibold text-foreground">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

const Stats = ({ items }: StatsProps) => {
  return (
    <div className="glass-surface relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-70" aria-hidden />
      <div className="relative mx-auto flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-2 text-center md:text-left"
          >
            {typeof item.value === "number" ? (
              <AnimatedNumber value={item.value} prefix={item.prefix} suffix={item.suffix} />
            ) : (
              <span className="text-3xl font-semibold text-foreground">{item.value}</span>
            )}
            <span className="text-sm text-muted">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
