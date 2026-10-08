import type { ComponentProps } from "react";

import { cx } from "@/lib/cx";

/** Centered page container: max 1200px of content plus the side margins. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("container-site", className)} {...props} />;
}

/**
 * The 4 / 8 / 12-column grid. All macro layout is placed on it with
 * Tailwind's col-start-* / col-span-* utilities (sm = 8 cols, lg = 12 cols).
 */
export function Grid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx("grid-site", className)} {...props} />;
}
