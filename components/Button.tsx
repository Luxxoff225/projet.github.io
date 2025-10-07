"use client";

import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef
} from "react";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<string, string> = {
  primary:
    "bg-brand text-brand-ink shadow-glow hover:bg-brand/90 hover:shadow-glow/80",
  secondary:
    "bg-white/5 text-foreground border border-white/10 hover:bg-white/10",
  ghost:
    "bg-transparent text-foreground hover:bg-white/5",
  outline:
    "border border-white/20 text-foreground hover:bg-white/5",
  whatsapp:
    "bg-emerald-400 text-emerald-950 hover:bg-emerald-300"
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode };

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode };

export type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
} & (AnchorProps | NativeButtonProps);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { href, variant = "primary", className, children, ...rest } = props;
  const classes = twMerge(baseStyles, variants[variant] ?? variants.primary, className);

  if (href) {
    const anchorProps = rest as AnchorProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as NativeButtonProps;
  const resolvedType: NativeButtonProps["type"] = buttonProps.type ?? "button";

  return (
    <button ref={ref} className={classes} type={resolvedType} {...buttonProps}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
