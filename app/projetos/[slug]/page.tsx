import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { CaseSection, Tags } from "@/components/CaseSection";
import { Contact } from "@/components/Contact";
import { Container, Grid } from "@/components/Grid";
import { Label } from "@/components/Label";
import { getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projetos/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

type Params = PageProps<"/projetos/[slug]">["params"];

export default function ProjectPage(props: PageProps<"/projetos/[slug]">) {
  return (
    <>
      {/* params is URL data: read it behind Suspense so the App Shell stays shared. */}
      <Suspense fallback={<div className="min-h-dvh" />}>
        <ProjectCase params={props.params} />
      </Suspense>
      <Contact />
    </>
  );
}

async function ProjectCase({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <article>
      <header className="pt-40 lg:pt-48">
        <Container>
          <Grid className="items-baseline gap-y-8 lg:gap-y-16">
            <Label className="col-span-full">
              <Link href="/#projetos" className="transition-colors hover:text-ink">
                ← Projetos
              </Link>
            </Label>
            <Label className="col-span-full lg:col-span-3">
              Case {pad(index + 1)} / {pad(projects.length)}
            </Label>
            <div className="col-span-full grid grid-cols-subgrid lg:col-span-9 lg:col-start-4">
              <h1 className="col-span-full font-serif text-display-sm sm:text-display-md lg:text-h1">
                {project.title}
              </h1>
              <p className="col-span-full mt-8 text-body-l text-muted sm:col-span-7">
                {project.summary}
              </p>
            </div>

            <dl className="col-span-full grid grid-cols-subgrid gap-y-6 border-t border-line pt-6">
              <div className="col-span-2 sm:col-span-3 lg:col-start-4">
                <dt className="text-label font-medium uppercase text-muted">Cliente</dt>
                <dd className="mt-2 text-h3">{project.client}</dd>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <dt className="text-label font-medium uppercase text-muted">Serviço prestado</dt>
                <dd className="mt-2 text-h3">{project.service}</dd>
              </div>
            </dl>

            <figure className="col-span-full self-start">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                preload
                placeholder="blur"
                sizes="(min-width: 1296px) 1200px, calc(100vw - 32px)"
                className="h-auto w-full"
              />
            </figure>
          </Grid>
        </Container>
      </header>

      {project.sections.map((section) => (
        <CaseSection key={section.label} section={section} />
      ))}

      {project.tags && (
        <section className="pt-24">
          <Container>
            <Grid className="items-baseline gap-y-8 border-t border-line pt-6 lg:gap-y-16">
              <Label className="col-span-full lg:col-span-3">Minha atuação</Label>
              <div className="col-span-full sm:col-span-7 lg:col-span-7 lg:col-start-4">
                <Tags tags={project.tags} />
              </div>
            </Grid>
          </Container>
        </section>
      )}

      <section className="pt-24 lg:pt-40">
        <Container>
          <Link
            href={`/projetos/${next.slug}`}
            prefetch
            className="group grid-site items-baseline gap-y-8 border-t border-ink pt-6"
          >
            <Label className="col-span-full lg:col-span-3">Próximo projeto</Label>
            <div className="col-span-full grid grid-cols-subgrid lg:col-span-9 lg:col-start-4">
              <p className="col-span-full font-serif text-display-sm transition-colors group-hover:text-accent sm:text-display-md lg:text-h1">
                {next.title} <span aria-hidden>→</span>
              </p>
              <p className="col-span-full mt-4 text-muted sm:col-span-7">{next.summary}</p>
            </div>
          </Link>
        </Container>
      </section>

    </article>
  );
}
