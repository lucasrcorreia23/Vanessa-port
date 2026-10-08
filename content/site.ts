import retrato from "@/public/images/home/vanessa-retrato.jpeg";
import pinacoteca from "@/public/images/home/vanessa-pinacoteca.jpeg";

export const site = {
  name: "Vanessa Serafim Wehmuth",
  role: "Analista de Marketing",
  headline: "Analista de Marketing | Estratégia, Conteúdo & Digital",
  intro:
    "Comunicação sempre foi uma paixão e, ao longo da minha vida, transformei esse interesse em carreira. Sou formada em Publicidade e Propaganda e também em Marketing, com experiência em diferentes frentes do marketing digital.",
  year: 2026,
  links: {
    email: "vanessa.serafimw@gmail.com",
    linkedin: "https://www.linkedin.com/in/vanessa-serafim-wehmuth/",
    whatsapp: "https://wa.me/5548991681826",
    resume: "/curriculo-vanessa-serafim-wehmuth.pdf",
  },
  photos: {
    hero: {
      src: retrato,
      alt: "Vanessa Serafim Wehmuth sorrindo em uma sacada, com árvores ao fundo",
    },
    about: {
      src: pinacoteca,
      alt: "Vanessa em uma passarela entre paredes de tijolos na Pinacoteca de São Paulo",
    },
  },
  about: [
    "Ao longo da minha trajetória, construí experiência em diferentes áreas do marketing e em empresas de segmentos diversos, passando por tecnologia, serviços, varejo e comunicação. Já atuei com planejamento e produção de conteúdo, redes sociais, campanhas digitais, mídia paga, SEO, e-mail marketing, CRM, eventos, criação de materiais e posicionamento de marca.",
    "Essa experiência me permitiu desenvolver uma visão mais ampla do marketing, entendendo tanto a parte estratégica quanto a execução das ações. Também tive contato com diferentes públicos e modelos de negócio, incluindo projetos B2B e B2C, o que ampliou minha capacidade de adaptar estratégias de comunicação de acordo com cada contexto.",
    "Ao longo dos anos, fui aprofundando conhecimentos em storytelling, copywriting, planejamento de campanhas e análise de métricas, sempre buscando conectar comunicação, objetivos de negócio e resultados.",
  ],
  education: ["Publicidade e Propaganda", "Marketing"],
  expertise: [
    {
      title: "Estratégia & Marca",
      body: "Planejamento de campanhas, definição de público e posicionamento de marca alinhados ao negócio.",
      keywords: ["Planejamento", "Posicionamento", "Personas e ICP", "B2B e B2C"],
    },
    {
      title: "Conteúdo & Storytelling",
      body: "Planejamento e produção de conteúdo para blog, redes sociais, newsletters e materiais institucionais.",
      keywords: ["Storytelling", "Copywriting", "SEO", "Social media"],
    },
    {
      title: "Mídia & Performance",
      body: "Campanhas de mídia paga, mensuração e análise de métricas para otimizar resultados.",
      keywords: ["Meta Ads", "Google Ads", "GA4", "Google Tag Manager"],
    },
    {
      title: "CRM & Relacionamento",
      body: "Automação, e-mail marketing, landing pages e eventos para aproximar leads, clientes e parceiros.",
      keywords: ["RD Station", "E-mail marketing", "Landing pages", "Eventos"],
    },
  ],
  segments: ["Tecnologia", "Serviços", "Varejo", "Comunicação", "B2B", "B2C"],
} as const;

export type ContactLink = { label: string; value: string; href: string };

export function contactLinks(): ContactLink[] {
  const { email, linkedin, whatsapp, resume } = site.links;
  const links: (ContactLink | false)[] = [
    !!email && { label: "E-mail", value: email, href: `mailto:${email}` },
    !!linkedin && {
      label: "LinkedIn",
      value: "/in/vanessa-serafim-wehmuth",
      href: linkedin,
    },
    !!whatsapp && { label: "WhatsApp", value: "+55 48 99168-1826", href: whatsapp },
    !!resume && { label: "Currículo", value: "Ver currículo (PDF)", href: resume },
  ];
  return links.filter((link): link is ContactLink => !!link);
}
