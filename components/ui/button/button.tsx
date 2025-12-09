"use client";

import { cva } from "class-variance-authority";
import { clsx } from "clsx";

const button = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all",
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-dark-hover text-surface dark:text-surface-dark",
        secondary:
          "bg-secondary hover:bg-secondary-hover dark:bg-secondary-dark dark:hover:bg-secondary-dark-hover text-surface dark:text-surface-dark",
        accent:
          "bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover text-surface dark:text-surface-dark",
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(button({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
