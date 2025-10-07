import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-ink",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
