import Image from "next/image";

import { site } from "@/content/site";
import { Label } from "./Label";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" index="01" title="Sobre mim">
      <div className="col-span-full sm:col-span-5 lg:col-span-6 lg:col-start-4">
        <div className="space-y-8 text-body-l text-pretty">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-6">
          <Label>Formação</Label>
          <p className="mt-4 text-h3">{site.education.join(" · ")}</p>
        </div>
      </div>

      <div className="relative col-span-full aspect-portrait self-start overflow-hidden sm:col-span-3 sm:col-start-6 lg:col-span-3 lg:col-start-10">
        <Image
          src={site.photos.about.src}
          alt={site.photos.about.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1296px) 282px, (min-width: 1024px) 22vw, (min-width: 640px) 35vw, 100vw"
          className="object-cover"
        />
      </div>
    </Section>
  );
}
