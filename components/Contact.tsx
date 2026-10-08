import { contactLinks } from "@/content/site";
import { Label } from "./Label";
import { Section } from "./Section";

export function Contact({ index = "04" }: { index?: string }) {
  return (
    <Section id="contato" index={index} title="Contato">
      <div className="col-span-full lg:col-span-9 lg:col-start-4">
        <h2 className="font-serif text-display-sm sm:text-display-md lg:text-h1">
          Trabalhe comigo!
        </h2>
        <p className="mt-6 text-body-l text-muted">
          Entre em contato e vamos planejar novos projetos.
        </p>
      </div>

      <ul className="col-span-full grid grid-cols-subgrid lg:col-span-9 lg:col-start-4">
        {contactLinks().map((link) => (
          <li key={link.label} className="col-span-full grid grid-cols-subgrid">
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group col-span-full grid grid-cols-subgrid items-baseline gap-y-2 border-t border-line py-6"
            >
              <Label className="col-span-full sm:col-span-2 lg:col-span-3">{link.label}</Label>
              <span className="col-span-3 min-w-0 break-words text-body-l transition-colors group-hover:text-accent sm:col-span-5 sm:text-h3">
                {link.value}
              </span>
              <span
                aria-hidden
                className="col-span-1 text-right text-body-l transition-transform group-hover:translate-x-1 sm:text-h3"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
