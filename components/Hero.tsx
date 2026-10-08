import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { Container, Grid } from "./Grid";

export function Hero() {
  const [role, focus] = site.headline.split(" | ");

  return (
    <section className="pt-40 lg:pt-48">
      <Container>
        <Grid className="gap-y-12 lg:gap-y-16">
          <h1 className="col-span-full animate-rise font-serif text-display-sm sm:text-display-md lg:text-display">
            Vanessa Serafim
            <br />
            Wehmuth
          </h1>

          <div className="col-span-full animate-rise [animation-delay:120ms] sm:col-span-5 lg:col-span-6">
            <p className="text-h3 font-medium">
              {role}
              <br />
              <span className="text-muted">{focus}</span>
            </p>
            <p className="mt-8 text-body-l text-muted">{site.intro}</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/#projetos"
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-body font-medium text-paper transition-colors hover:bg-accent"
              >
                Veja meu trabalho
              </Link>
              <Link
                href="/#sobre"
                className="inline-flex h-12 items-center rounded-full border border-ink px-6 text-body font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Sobre mim
              </Link>
            </div>
          </div>

          <div className="relative col-span-full aspect-portrait animate-rise overflow-hidden [animation-delay:240ms] sm:col-span-3 sm:col-start-6 lg:col-span-4 lg:col-start-9">
            <Image
              src={site.photos.hero.src}
              alt={site.photos.hero.alt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1296px) 384px, (min-width: 1024px) 30vw, (min-width: 640px) 35vw, 100vw"
              className="object-cover object-[76%_center]"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
}
