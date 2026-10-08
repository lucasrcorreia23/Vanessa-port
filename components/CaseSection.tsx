import Image from "next/image";

import type { Media, Section } from "@/content/projects";
import { Container, Grid } from "./Grid";
import { Label } from "./Label";
import { Tag } from "./Tag";

const fullWidthSizes = "(min-width: 1296px) 1200px, calc(100vw - 32px)";

export function Figure({ media }: { media: Media }) {
  const image = (
    <Image
      src={media.src}
      alt={media.alt}
      placeholder="blur"
      sizes={fullWidthSizes}
      className="h-auto w-full"
    />
  );

  if (!media.href) {
    return <figure className="col-span-full self-start">{image}</figure>;
  }

  return (
    <figure className="col-span-full self-start">
      <a href={media.href} target="_blank" rel="noopener noreferrer" className="group block">
        {image}
        <figcaption className="mt-4 text-label font-medium uppercase transition-colors group-hover:text-accent">
          {media.linkLabel ?? "Abrir"} ↗
        </figcaption>
      </a>
    </figure>
  );
}

export function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </ul>
  );
}

export function CaseSection({ section }: { section: Section }) {
  return (
    <section className="pt-24">
      <Container>
        <Grid className="items-baseline gap-y-8 border-t border-line pt-6 lg:gap-y-16">
          <Label className="col-span-full lg:col-span-3">{section.label}</Label>

          {(section.title || section.lede) && (
            <div className="col-span-full sm:col-span-7 lg:col-span-7 lg:col-start-4">
              {section.title && (
                <h2 className="font-serif text-h2-sm lg:text-h2">{section.title}</h2>
              )}
              {section.lede && (
                <p className="mt-4 font-serif text-h3 italic text-muted">{section.lede}</p>
              )}
            </div>
          )}

          {section.stats && (
            <ul className="col-span-full grid grid-cols-subgrid gap-y-8 lg:col-span-9 lg:col-start-4">
              {section.stats.map((stat) => (
                <li key={stat.label} className="col-span-2 border-t border-ink pt-4 lg:col-span-3">
                  <p className="font-serif text-display-sm lg:text-h1">{stat.value}</p>
                  <p className="mt-2 text-label font-medium uppercase text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          )}

          <div className="col-span-full sm:col-span-7 lg:col-span-7 lg:col-start-4">
            <div className="space-y-8 text-body-l text-pretty">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            {section.tags && (
              <div className="mt-12">
                <Label>Minha atuação</Label>
                <div className="mt-4">
                  <Tags tags={section.tags} />
                </div>
              </div>
            )}
          </div>

          {section.media?.map((media) => (
            <Figure key={media.alt} media={media} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
