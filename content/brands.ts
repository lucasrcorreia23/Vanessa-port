import type { StaticImageData } from "next/image";

import huawei from "@/public/images/marcas/huawei.svg";
import xfusion from "@/public/images/marcas/xfusion.svg";
import nivea from "@/public/images/marcas/nivea.svg";
import oceane from "@/public/images/marcas/oceane.png";
import embelleze from "@/public/images/marcas/embelleze.png";
import payot from "@/public/images/marcas/payot.png";
import herbissimo from "@/public/images/marcas/herbissimo.png";
import prudence from "@/public/images/marcas/prudence.png";

export type Brand = {
  name: string;
  /** Without a logo the name is set in type. */
  logo?: StaticImageData;
  /** "wordmark": flat logo shown as an ink silhouette; "badge": round seal shown in grayscale. */
  kind?: "wordmark" | "badge";
  /** Height token so every logo reads at the same optical size. */
  height?: "h-6" | "h-8" | "h-10" | "h-12" | "h-16";
};

// Logos from each brand's official site (Huawei, xFusion, Océane, Embelleze, Payot,
// Herbíssimo) or Wikimedia Commons (Nivea, Prudence). Cremer's site blocks downloads.
export const brands: Brand[] = [
  { name: "Huawei", logo: huawei, kind: "wordmark", height: "h-8" },
  { name: "xFusion", logo: xfusion, kind: "wordmark", height: "h-6" },
  { name: "Nivea", logo: nivea, kind: "badge", height: "h-16" },
  { name: "Océane", logo: oceane, kind: "wordmark", height: "h-10" },
  { name: "Embelleze", logo: embelleze, kind: "wordmark", height: "h-10" },
  { name: "Payot", logo: payot, kind: "wordmark", height: "h-6" },
  { name: "Herbíssimo", logo: herbissimo, kind: "wordmark", height: "h-12" },
  // TODO: substituir pelo logo oficial da Cremer quando a Vanessa enviar.
  { name: "Cremer" },
  { name: "Prudence", logo: prudence, kind: "badge", height: "h-16" },
];
