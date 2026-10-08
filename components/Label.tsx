import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

/** Small uppercase label: 12/16, +0.08em tracking. */
export function Label({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cx("text-label font-medium uppercase text-muted", className)}
      {...props}
    />
  );
}
