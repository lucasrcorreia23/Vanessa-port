import Link from "next/link";

import { site } from "@/content/site";
import { Container, Grid } from "./Grid";

const linkClass =
  "text-label font-medium uppercase transition-colors hover:text-accent";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-paper/90 backdrop-blur-md">
      <Container>
        <Grid className="h-16 items-center border-b border-line">
          <Link
            href="/"
            aria-label={`${site.name} — início`}
            className="col-span-2 translate-y-2 self-center justify-self-start font-signature text-signature transition-colors hover:text-accent sm:col-span-4"
          >
            <span aria-hidden>VSW</span>
          </Link>
          <nav
            aria-label="Principal"
            className="col-span-2 grid grid-cols-subgrid sm:col-span-4 lg:col-span-8"
          >
            <ul className="col-span-full grid grid-cols-subgrid">
              <li className="hidden sm:block lg:col-span-2">
                <Link href="/#sobre" className={linkClass}>
                  Sobre
                </Link>
              </li>
              <li className="lg:col-span-2">
                <Link href="/#projetos" className={linkClass}>
                  Projetos
                </Link>
              </li>
              <li className="lg:col-span-2">
                <Link href="/#contato" className={linkClass}>
                  Contato
                </Link>
              </li>
              <li className="hidden sm:block lg:col-span-2">
                <a
                  href={site.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <span className="lg:hidden">CV ↗</span>
                  <span className="hidden lg:inline">Currículo ↗</span>
                </a>
              </li>
            </ul>
          </nav>
        </Grid>
      </Container>
    </header>
  );
}
