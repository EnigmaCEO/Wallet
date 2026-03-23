import Link from "next/link";

import { Badge } from "@/components/shared/badge";
import { SurfaceCard } from "@/components/shared/surface-card";

type ActionCardProps = {
  title: string;
  description?: string;
  href: string;
  cta: string;
  eyebrow?: string;
};

export function ActionCard({
  title,
  description,
  href,
  cta,
  eyebrow,
}: ActionCardProps) {
  return (
    <SurfaceCard className="flex h-full flex-col justify-between gap-5 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-indigo-300/20">
      <div className="space-y-4">
        {eyebrow ? <Badge>{eyebrow}</Badge> : null}
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-white">
            {title}
          </h3>
          {description ? (
            <p className="text-sm leading-6 text-text-muted">{description}</p>
          ) : null}
        </div>
      </div>

      <Link href={href} className="text-sm font-semibold text-indigo-100">
        {cta} &gt;
      </Link>
    </SurfaceCard>
  );
}

