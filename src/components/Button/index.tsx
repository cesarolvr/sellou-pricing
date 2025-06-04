import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex h-12 w-full px-8 text-lg items-center justify-center rounded-4xl font-medium transition-colors hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-[var(--foreground)] text-white hover:bg-[var(--foreground-tertiary)] font-bold focus-visible:ring-[var(--foreground-tertiary)]",
    outline:
      "border border-[var(--foreground)] bg-transparent hover:bg-[var(--foreground-secondary)] hover:text-[#fff] focus-visible:ring-[var(--foreground-tertiary)]",
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
