import Image from "next/image";
import Link from "next/link";

import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Label } from "./Label";
import { Section } from "./Section";

export function ProjectList() {
  return (
    <Section id="projetos" index="03" title="Principais projetos">
      <h2 className="col-span-full font-serif text-h2-sm sm:col-span-7 lg:col-span-7 lg:col-start-4 lg:text-h2">
        Estes são alguns dos melhores projetos que fiz em minha carreira.
      </h2>

      <ol className="col-span-full grid grid-cols-subgrid">
        {projects.map((project, i) => (
          <li key={project.slug} className="col-span-full grid grid-cols-subgrid">
            <Link
              href={`/projetos/${project.slug}`}
              prefetch
              className="group col-span-full grid grid-cols-subgrid items-start gap-y-6 border-t border-line py-8"
            >
              <div className="col-span-full sm:col-span-5 lg:col-span-6 lg:row-start-1">
                <Label className="flex justify-between lg:justify-start">
                  {String(i + 1).padStart(2, "0")}
                  <span className="text-ink transition-colors group-hover:text-accent sm:hidden">→</span>
                </Label>
                <h3 className="mt-4 font-serif text-h2-sm lg:text-h2">{project.title}</h3>
                <p className="mt-4 min-h-12 text-pretty text-muted transition-colors group-hover:text-ink">
                  {project.summary}
                </p>
              </div>

              <dl className="col-span-full grid grid-cols-subgrid gap-y-4 sm:col-span-5 lg:col-span-2 lg:col-start-7 lg:row-start-1 lg:block">
                <div className="col-span-2 sm:col-span-2 lg:col-span-full">
                  <dt className="text-label font-medium uppercase text-muted">Cliente</dt>
                  <dd className="mt-1">{project.client}</dd>
                </div>
                <div className="col-span-2 sm:col-span-3 lg:col-span-full lg:mt-4">
                  <dt className="text-label font-medium uppercase text-muted">Serviço</dt>
                  <dd className="mt-1">{project.service}</dd>
                </div>
              </dl>

              <div className="relative col-span-full overflow-hidden sm:col-span-3 sm:col-start-6 sm:row-span-2 sm:row-start-1 lg:col-span-4 lg:col-start-9 lg:row-span-1">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  placeholder="blur"
                  sizes="(min-width: 1296px) 384px, (min-width: 1024px) 30vw, (min-width: 640px) 35vw, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-103"
                />
              </div>
            </Link>
          </li>
        ))}
      </ol>

      <div className="col-span-full grid grid-cols-subgrid gap-y-6 border-t border-line pt-6">
        <Label className="col-span-full lg:col-span-3">Marcas com quem trabalhei</Label>
        <ul className="col-span-full grid grid-cols-subgrid lg:col-span-9">
          {site.brands.map((brand) => (
            <li
              key={brand}
              className="col-span-2 flex h-24 items-center border-b border-line font-serif text-h2-sm sm:col-span-2 lg:col-span-3 lg:text-h2"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
