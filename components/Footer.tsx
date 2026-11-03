import { site } from "@/content/site";
import { Container, Grid } from "./Grid";
import { Label } from "./Label";

export function Footer() {
  return (
    <footer className="pt-24 lg:pt-40">
      <Container>
        <Grid className="gap-y-4 border-t border-line pt-8 pb-16 lg:pb-24">
          <Label className="col-span-full sm:col-span-4 lg:col-span-6">
            © {site.year} {site.name}
          </Label>
          <Label className="col-span-full sm:col-span-4 lg:col-span-3">
            Bora trabalhar juntos!
          </Label>
          <Label className="col-span-full sm:col-span-4 sm:col-start-5 lg:col-span-3 lg:col-start-auto lg:text-right">
            <a href="#top" className="transition-colors hover:text-ink">
              Voltar ao topo ↑
            </a>
          </Label>
        </Grid>
      </Container>
    </footer>
  );
}
