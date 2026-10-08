"use client";

import { useEffect } from "react";

import { Container, Grid } from "./Grid";

const COLUMNS = Array.from({ length: 12 }, (_, i) => i);

/**
 * Dev-only overlay: press "G" (or add ?grid to the URL) to show the column
 * grid and the 8px baseline. Visibility is a `data-grid` flag on <html>.
 */
export function GridOverlay() {
  useEffect(() => {
    const root = document.documentElement;
    if (new URLSearchParams(window.location.search).has("grid")) root.dataset.grid = "";

    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      if (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.key.toLowerCase() === "g" && !event.metaKey && !event.ctrlKey) {
        root.toggleAttribute("data-grid");
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-50 hidden in-data-grid:block"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0 7px, rgb(0 153 255 / 0.12) 7px 8px)",
      }}
    >
      <Container className="h-full">
        <Grid className="h-full">
          {COLUMNS.map((i) => (
            <div
              key={i}
              className={
                i >= 8 ? "hidden bg-accent/10 lg:block" : i >= 4 ? "hidden bg-accent/10 sm:block" : "bg-accent/10"
              }
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
