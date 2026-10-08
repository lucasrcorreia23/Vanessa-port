import { site } from "@/content/site";
import { Label } from "./Label";
import { Section } from "./Section";

export function Expertise() {
  return (
    <Section index="02" title="Áreas de atuação">
      <h2 className="col-span-full font-serif text-h2-sm sm:col-span-7 lg:col-span-7 lg:col-start-4 lg:text-h2">
        Uma visão ampla do marketing, da estratégia à execução das ações.
      </h2>

      {/* Each card is a 4-row subgrid so number, title, text and keywords line up across cards. */}
      <ul className="col-span-full grid grid-cols-subgrid">
        {site.expertise.map((area, i) => (
          <li
            key={area.title}
            className="col-span-full row-span-4 grid grid-rows-subgrid gap-y-0 border-t border-ink pt-6 pb-12 sm:col-span-4 lg:col-span-3 lg:pb-0"
          >
            <Label>{String(i + 1).padStart(2, "0")}</Label>
            <h3 className="mt-8 text-h3 font-medium">{area.title}</h3>
            <p className="mt-4 text-pretty text-muted">{area.body}</p>
            <ul className="mt-6">
              {area.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="col-span-full grid grid-cols-subgrid gap-y-4 border-t border-line pt-6">
        <Label className="col-span-full lg:col-span-3">Segmentos</Label>
        <p className="col-span-full text-h3 lg:col-span-9">
          {site.segments.join(" · ")}
        </p>
      </div>
    </Section>
  );
}
