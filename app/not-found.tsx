import Link from "next/link";

import { Container, Grid } from "@/components/Grid";
import { Label } from "@/components/Label";

export default function NotFound() {
  return (
    <section className="pt-40 lg:pt-48">
      <Container>
        <Grid className="items-baseline gap-y-8 lg:gap-y-16">
          <Label className="col-span-full lg:col-span-3">Erro 404</Label>
          <div className="col-span-full lg:col-span-9 lg:col-start-4">
            <h1 className="font-serif text-display-sm sm:text-display-md lg:text-h1">
              Página não encontrada.
            </h1>
            <Link
              href="/"
              className="mt-12 inline-flex h-12 items-center rounded-full bg-ink px-6 font-medium text-paper transition-colors hover:bg-accent"
            >
              Voltar ao início
            </Link>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
