import { Badge } from "@/components/shared/badge";
import { cx } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cx(
        "space-y-4",
        centered && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow ? <Badge tone="accent">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
