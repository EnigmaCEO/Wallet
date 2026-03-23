import Link from "next/link";

import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200 transform-gpu hover:-translate-y-0.5 active:translate-y-0";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-slate-950 shadow-[0_0_30px_rgba(129,140,248,0.22)] hover:bg-white",
  secondary:
    "border border-white/14 bg-white/[0.06] text-white hover:border-white/24 hover:bg-white/[0.1]",
  ghost: "text-white/70 hover:text-white",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className?: string,
) {
  return cx(baseStyles, variantStyles[variant], className);
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonClassName(variant, className)}>
      {children}
    </Link>
  );
}
