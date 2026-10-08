import type { StaticImageData } from "next/image";

import perfectingCapa from "@/public/images/perfecting/capa.png";
import zoomCapa from "@/public/images/zoomtecnologia/capa.png";
import zoomBlackFriday from "@/public/images/zoomtecnologia/black-friday.png";
import zoomInnovation from "@/public/images/zoomtecnologia/zoominnovation-video.png";
import omdCapa from "@/public/images/omd-solucoes/capa.png";
import grupoOkCapa from "@/public/images/grupo-ok/capa.png";
import grupoOkTreinamentos from "@/public/images/grupo-ok/treinamentos.png";
import grupoOkBeautyFair from "@/public/images/grupo-ok/beauty-fair.png";
import razorCapa from "@/public/images/lancamento-razor/capa.png";
import razorStories from "@/public/images/lancamento-razor/stories.png";
import razorCarrossel from "@/public/images/lancamento-razor/carrossel.png";
import cupertinoCapa from "@/public/images/cupertino/capa.png";
import cupertinoCarrossel from "@/public/images/cupertino/carrossel.png";
import cupertinoNamorados from "@/public/images/cupertino/namorados.png";

export type Media = {
  src: StaticImageData;
  alt: string;
  /** Optional external link (e.g. a video) the image opens. */
  href?: string;
  linkLabel?: string;
};

export type Stat = { value: string; label: string };

export type Section = {
  /** Small uppercase label shown in columns 1–3. */
  label: string;
  title?: string;
  lede?: string;
  body: string[];
  stats?: Stat[];
  tags?: string[];
  media?: Media[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  service: string;
  summary: string;
  cover: Media;
  sections: Section[];
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "perfecting",
    title: "Perfecting",
    client: "Perfecting",
    service: "Marketing",
    summary: "Estruturação do marketing de uma startup: mensuração, posicionamento e público-alvo.",
    cover: {
      src: perfectingCapa,
      alt: "Telas da plataforma Perfecting com mensagens sobre execução comercial e performance de vendas",
    },
    sections: [
      {
        label: "Estruturação",
        body: [
          "Estruturei a presença digital da empresa e configurei ferramentas como GA4, Google Tag Manager e Google Ads para criar uma base de acompanhamento e análise de dados. Também desenvolvi conteúdos para o blog e campanhas de mídia paga com o objetivo de testar diferentes perfis de público, entender o mercado e contribuir para a definição do ICP.",
        ],
      },
      {
        label: "Análise",
        body: [
          // TODO: confirmar com a Vanessa o final desta frase — no texto original estava
          // truncado ("…aderência dos públicos, utilizando os atratégias de aquisição.").
          "A partir dos dados coletados nas campanhas, analisei comportamento, qualidade dos leads e aderência dos públicos.",
        ],
      },
      {
        label: "Aprendizado",
        body: [
          "O projeto me permitiu atuar de forma integrada em estratégia, conteúdo, mídia paga, mensuração e análise de dados, estruturando o marketing da startup desde o início.",
        ],
      },
    ],
    tags: ["GA4", "Google Tag Manager", "Google Ads", "Blog", "Mídia paga", "Definição de ICP"],
  },
  {
    slug: "zoomtecnologia",
    title: "ZOOMtecnologia",
    client: "ZOOMtecnologia",
    service: "Assistente de marketing",
    summary: "Dois anos em várias frentes: campanhas, conteúdo, mídia, CRM, landing pages e eventos.",
    cover: {
      src: zoomCapa,
      alt: "Posts da ZOOMstore com smartwatches Huawei e fotos dos eventos ZOOMinnovation",
    },
    sections: [
      {
        label: "Visão geral",
        body: [
          "Durante os dois anos em que trabalhei na ZOOMtecnologia, tive contato com diferentes frentes do marketing e construí grande parte da experiência que carrego até hoje. Foi uma experiência bastante prática, em que pude participar desde o planejamento de campanhas e produção de conteúdo até ações de mídia, CRM, e-mail marketing, landing pages, eventos e materiais de comunicação.",
        ],
      },
      {
        label: "Case 01",
        title: "Black Friday ZOOMstore",
        lede: "Quando uma campanha não performa, o trabalho não termina — começa a análise.",
        body: [
          "Durante a Black Friday da ZOOMstore, trabalhamos uma campanha para um smartwatch da Huawei, produto que começava a ganhar destaque no mercado.",
          "No início da campanha, os resultados ficaram abaixo do esperado. Em vez de manter o investimento em uma estratégia que não estava trazendo retorno, pausamos os anúncios e analisamos os criativos, as mensagens e o público utilizado.",
          "A partir dessa análise, reformulamos os criativos e as copies das campanhas e ajustamos a segmentação, direcionando a comunicação para um público com maior afinidade com esporte e atividades físicas.",
          "A mudança de estratégia fez a campanha ganhar tração e o produto passou a apresentar um desempenho significativamente melhor, transformando uma campanha que inicialmente representava apenas investimento em uma ação com retorno para o negócio.",
        ],
        tags: [
          "Análise de performance",
          "Copywriting",
          "Criação e reformulação de criativos",
          "Segmentação de público",
          "Meta Ads",
          "Otimização de campanha",
        ],
        media: [
          {
            src: zoomBlackFriday,
            alt: "Quatro posts da ZOOMstore no Instagram com smartwatches Huawei",
            href: "https://www.youtube.com/watch?v=uSTwJfbz2hw",
            linkLabel: "Assistir no YouTube",
          },
        ],
      },
      {
        label: "Case 02",
        title: "ZOOMinnovation",
        body: [
          "O ZOOMinnovation foi uma série de eventos realizados pela ZOOMtecnologia em Santa Catarina, Paraná, São Paulo e Bahia. Com um time enxuto, participei de diferentes etapas do projeto, desde a estratégia de comunicação até a execução presencial dos eventos.",
          "No digital, planejei a comunicação para leads, clientes e fornecedores, desenvolvi uma Landing Page de inscrição segmentada por estado e criei um fluxo de automação para informar e conduzir a base ao longo da campanha.",
          "Na etapa presencial, viajei para cada cidade no dia anterior ao evento e participei diretamente da montagem e preparação do espaço, incluindo exposição dos produtos, organização das mesas e decoração. Cada evento recebeu, em média, 100 participantes, entre clientes e fornecedores, incluindo representantes de marcas como Huawei e xFusion.",
          "Além da aproximação e fidelização de clientes já existentes, os encontros contribuíram para fortalecer o relacionamento com fornecedores e abrir novas oportunidades comerciais para a empresa.",
        ],
        stats: [
          { value: "4", label: "Eventos" },
          { value: "4", label: "Estados" },
          { value: "~100", label: "Participantes por evento" },
        ],
        tags: [
          "Planejamento de campanha",
          "CRM",
          "Automação de marketing",
          "Landing Pages",
          "Comunicação com leads e clientes",
          "Organização de eventos",
          "Experiência presencial",
        ],
        media: [
          {
            src: zoomInnovation,
            alt: "Vídeo do ZOOMinnovation exibido em dois celulares",
            href: "https://www.youtube.com/watch?v=HT_Pc9nRuLU",
            linkLabel: "Assistir no YouTube",
          },
        ],
      },
    ],
  },
  {
    slug: "omd-solucoes",
    title: "OMD Soluções",
    client: "OMD Soluções",
    service: "Analista de conteúdo",
    summary: "Estratégia de conteúdo, posicionamento e marketing B2B para uma empresa de tecnologia.",
    cover: {
      src: omdCapa,
      alt: "Posts e artigos de blog da OMD Soluções sobre ouvidoria e canal de denúncia",
    },
    sections: [
      {
        label: "Contexto",
        body: [
          "Na OMD Soluções, atuei como Analista de Conteúdo em uma empresa B2B de tecnologia especializada em Ouvidoria, Compliance e Governança. Foi uma experiência importante para aprofundar minha atuação estratégica em marketing, principalmente na transformação de temas técnicos e complexos em conteúdos mais claros, relevantes e conectados aos objetivos do negócio.",
        ],
      },
      {
        label: "Atuação",
        body: [
          "Minha atuação envolvia o planejamento e desenvolvimento de conteúdos para diferentes canais, incluindo blog, LinkedIn, Instagram, newsletters, materiais institucionais e campanhas de e-mail. Também trabalhei com WordPress, SEO, RD Station e CRM, acompanhando a performance dos conteúdos e utilizando dados para identificar oportunidades de melhoria.",
        ],
      },
      {
        label: "Desafio",
        body: [
          "Um dos principais desafios era fortalecer o posicionamento da OMD no mercado. A empresa não queria ser percebida apenas como uma solução relacionada ao recebimento de reclamações ou denúncias, mas como uma empresa que ajudava organizações a estruturar canais de diálogo, relacionamento e gestão.",
          "Para isso, participei da construção de pautas, personas e do Guia de Comunicação e Conteúdo, além do desenvolvimento de uma estratégia editorial voltada para educar o mercado e fortalecer a autoridade da marca. Trabalhei conteúdos relacionados ao Sistema OMD, BPO de Ouvidoria e cursos, buscando adaptar a comunicação para diferentes públicos e momentos da jornada.",
        ],
      },
      {
        label: "Integração",
        body: [
          "Também atuei em conjunto com o time comercial e de Customer Success, utilizando o conteúdo como apoio à geração de demanda, educação do mercado e adoção dos produtos. Além disso, fazia a interface com duas agências terceirizadas, uma especializada em SEO e outra em mídia paga, acompanhando pautas, entregas e direcionamentos estratégicos.",
        ],
      },
      {
        label: "Aprendizado",
        body: [
          "A experiência na OMD ampliou minha visão sobre o papel do conteúdo dentro do marketing: não apenas como produção, mas como uma ferramenta de posicionamento, aquisição, relacionamento e apoio ao negócio.",
        ],
      },
    ],
    tags: ["Estratégia editorial", "Personas", "Blog", "LinkedIn", "Newsletter", "WordPress", "SEO", "RD Station", "CRM"],
  },
  {
    slug: "grupo-ok",
    title: "Grupo OK",
    client: "Grupo OK Distribuidora",
    service: "Análise de marketing",
    summary: "Marketing B2B, conteúdo e relacionamento com indústrias e lojistas de uma distribuidora.",
    cover: {
      src: grupoOkCapa,
      alt: "Fotos de estandes e produtos de beleza na feira Beauty Fair",
    },
    sections: [
      {
        label: "Conteúdo",
        body: [
          "Responsável pelo planejamento mensal de conteúdo e direcionamento estratégico das redes sociais, estruturando a comunicação para falar diretamente com o público B2B e fortalecer a percepção da distribuidora como parceira de negócios, e não apenas como fornecedora de produtos.",
        ],
      },
      {
        label: "Relacionamento",
        body: [
          "Também atuei na construção e fortalecimento do relacionamento com as indústrias, apoiando ações de marcas como Nivea, Embelleze, Océane, Payot, Herbíssimo, Cremer e Prudence. Esse trabalho contribuiu para a aproximação com as marcas e para a conquista da distribuição oficial de Nivea e Océane.",
        ],
      },
      {
        label: "Eventos",
        body: [
          "Além da estratégia de conteúdo, participei do planejamento e acompanhamento de ações de capacitação e eventos do setor, como treinamentos para equipes comerciais e a Beauty Fair, buscando identificar tendências, fortalecer relacionamentos e novas oportunidades comerciais para a distribuidora.",
        ],
        media: [
          {
            src: grupoOkTreinamentos,
            alt: "Stories de treinamentos para equipes comerciais com marcas parceiras",
          },
          {
            src: grupoOkBeautyFair,
            alt: "Corredores e estandes da Beauty Fair 2024",
          },
        ],
      },
      {
        label: "Aprendizado",
        body: [
          "A experiência ampliou minha visão sobre marketing B2B, mostrando na prática a importância de alinhar conteúdo, relacionamento, posicionamento e objetivos comerciais.",
        ],
      },
    ],
    tags: ["Marketing B2B", "Planejamento de conteúdo", "Redes sociais", "Relacionamento com indústrias", "Treinamentos", "Eventos"],
  },
  {
    slug: "lancamento-razor",
    title: "Lançamento Razor",
    client: "American Burrs",
    service: "Design",
    summary: "Criativos para as redes sociais no lançamento das brocas carbide Razor, da American Burrs.",
    cover: {
      src: razorCapa,
      alt: "Posts de Instagram do lançamento das brocas carbide Razor, da American Burrs",
    },
    sections: [
      {
        label: "Criativos",
        body: [
          "Com o intuito de divulgar e valorizar o lançamento das brocas carbide Razor nas redes sociais, desenvolvi criativos mais minimalistas onde o destaque foi para as novas brocas. Sendo assim, priorizei imagens que os dentistas enviavam no momento em que estavam testando o press kit que ganharam. Quando havia criativos textuais eles faziam parte de um carrossel, onde o intuito era explicar a função da nova broca.",
        ],
        media: [
          {
            src: razorStories,
            alt: "Posts e stories minimalistas com as brocas Razor em destaque",
          },
          {
            src: razorCarrossel,
            alt: "Carrosséis do lançamento Razor com fotos enviadas por dentistas",
          },
        ],
      },
      {
        label: "Resultado",
        body: [
          "Os posts serviram para auxiliar a entenderem a função das novas brocas, e principalmente mostrar para os dentistas que os conteúdos que eles enviavam eram aproveitados pela marca.",
        ],
      },
    ],
    tags: ["Design", "Social media", "Carrossel", "Conteúdo gerado por usuários"],
  },
  {
    slug: "cupertino",
    title: "Cupertino",
    client: "Cupertino iStore",
    service: "Social media",
    summary: "Gestão de Instagram e TikTok para alavancar as vendas e o reconhecimento da loja.",
    cover: {
      src: cupertinoCapa,
      alt: "Posts de Instagram da Cupertino iStore com produtos Apple",
    },
    sections: [
      {
        label: "Gestão",
        body: [
          "Mensalmente eu fazia um benchmarking para identificar o que poderia agregar ao Instagram e TikTok da empresa, com a aprovação dos conteúdos eu seguia com a produção dos criativos.",
        ],
        media: [
          {
            src: cupertinoCarrossel,
            alt: "Carrossel “5 motivos para comprar na Cupertino” e post de parcelamento",
          },
          {
            src: cupertinoNamorados,
            alt: "Posts de Dia dos Namorados da Cupertino iStore",
          },
        ],
      },
      {
        label: "Resultado",
        body: [
          "Essa gestão além do crescimento trouxe reconhecimento para a loja, em consequência disso, as vendas aumentaram e os novos clientes relataram que chegaram pelo Instagram, tanto por conteúdo orgânico quanto por patrocinado.",
        ],
      },
    ],
    tags: ["Social media", "Instagram", "TikTok", "Benchmarking", "Criação de criativos"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
