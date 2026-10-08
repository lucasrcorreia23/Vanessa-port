import type { ReactNode } from "react";

import { cx } from "@/lib/cx";
import { Container, Grid } from "./Grid";
import { Label } from "./Label";

/**
 * A numbered page section. The label sits in columns 1–3 on desktop;
 * children are grid items and place themselves (usually from column 4).
 */
export function Section({
  id,
  index,
  title,
  className,
  children,
}: {
  id?: string;
  index?: string;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cx("pt-24 lg:pt-40", className)}>
      <Container>
        <Grid className="items-baseline gap-y-8 border-t border-line pt-6 lg:gap-y-16">
          <Label className="col-span-full lg:col-span-3">
            {index ? `${index} — ${title}` : title}
          </Label>
          {children}
        </Grid>
      </Container>
    </section>
  );
}
