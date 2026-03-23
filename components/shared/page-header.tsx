import type { ReactNode } from "react";

import { Badge } from "@/components/shared/badge";
import { cx } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cx(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl space-y-4">
        {eyebrow ? <Badge tone="accent">{eyebrow}</Badge> : null}
        <div className="space-y-3">
          <h1 className="text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="text-base leading-7 text-text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
