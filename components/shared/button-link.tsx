import Link from "next/link";

import { cx } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-200 transform-gpu hover:-translate-y-0.5 active:translate-y-0";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(180deg,#4da3ff_0%,#2563eb_100%)] text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:brightness-110",
  secondary:
    "border border-white/12 bg-white/[0.05] text-white hover:border-sky-300/22 hover:bg-white/[0.08]",
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
