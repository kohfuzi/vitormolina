import type { Faq, Fato, Secao } from './tipos';
import { FAQ_CONVENIO, FAQ_SABADO } from './faq';

/**
 * Páginas foco que não são tratamentos: cobrem termos de busca de intenção
 * local e comercial ("dentista Porto Seguro Sorocaba", "dentista sábado Sorocaba").
 * Ficam na raiz do site porque a URL é o próprio termo de busca.
 */
export type PaginaFoco = {
  slug: string;
  titulo: string; // breadcrumb e cards
  h1: string;
  tituloSeo: string;
  metaDescricao: string;
  keyword: string;
  keywordsSecundarias: string[];
  respostaDireta: string;
  fatos: Fato[];
  secoes: Secao[];
  faq: Faq[];
  tratamentosRelacionados: string[];
};

export const PAGINAS_FOCO: PaginaFoco[] = [
  {
    slug: 'dentista-porto-seguro-sorocaba',
    titulo: 'Convênio Porto Seguro',
    h1: 'Dentista que atende Porto Seguro em Sorocaba',
    tituloSeo: 'Dentista Porto Seguro em Sorocaba | Dr. Vitor Molina',
    metaDescricao:
      'Consultório em Sorocaba que atende o convênio Porto Seguro e também particular. Avaliação inicial sem custo, com o plano de tratamento explicado antes de começar.',
    keyword: 'dentista Porto Seguro Sorocaba',
    keywordsSecundarias: [
      'dentista que atende Porto Seguro em Sorocaba',
      'Porto Seguro odontológico Sorocaba',
      'convênio odontológico Sorocaba',
      'dentista credenciado Porto Seguro Sorocaba',
    ],
    respostaDireta:
      'O consultório do Dr. Vitor Molina, em Sorocaba (SP), atende pelo convênio Porto Seguro e também em regime particular. A avaliação inicial não tem custo nas duas modalidades, e o plano de tratamento separa com clareza o que é coberto pelo plano do que fica como particular — sempre antes de qualquer procedimento.',
    fatos: [
      { rotulo: 'Convênio atendido', valor: 'Porto Seguro' },
      { rotulo: 'Também atende', valor: 'Particular' },
      { rotulo: 'Primeira avaliação', valor: 'Sem custo' },
      { rotulo: 'Horário', valor: 'Seg–Sex 9h–18h · Sáb 9h–12h' },
      { rotulo: 'Idade mínima', valor: 'A partir de 4 anos' },
      { rotulo: 'Cidade', valor: 'Sorocaba, São Paulo' },
    ],
    secoes: [
      {
        id: 'como-funciona',
        titulo: 'Como funciona o atendimento pelo convênio',
        blocos: [
          {
            tipo: 'p',
            texto:
              'O caminho é o mesmo de qualquer paciente: a avaliação inicial acontece sem custo, com exame clínico e, quando necessário, exames de imagem. A diferença aparece na hora do plano de tratamento, quando o que está coberto pelo seu plano é separado do que fica como particular.',
          },
          {
            tipo: 'ol',
            itens: [
              'Você agenda a avaliação pelo WhatsApp informando que tem Porto Seguro.',
              'Na consulta, leve a carteirinha e um documento com foto.',
              'É feito o exame clínico e o diagnóstico, sem pressa e sem procedimento no mesmo momento.',
              'Você recebe o plano de tratamento com a divisão entre cobertura do convênio e particular.',
              'Procedimentos que exigem autorização prévia são enviados ao convênio, e você é avisado do prazo.',
            ],
          },
        ],
      },
      {
        id: 'coberto-e-nao-coberto',
        titulo: 'O que costuma ser coberto e o que costuma ficar como particular',
        blocos: [
          {
            tipo: 'p',
            texto:
              'A cobertura varia conforme o plano contratado, a carência e as regras vigentes do convênio — por isso a conferência é feita caso a caso, na avaliação. Ainda assim, existe um padrão que ajuda a formar expectativa antes da consulta.',
          },
          {
            tipo: 'tabela',
            cabecalho: ['Costuma estar no rol coberto', 'Costuma ficar como particular'],
            linhas: [
              ['Consultas e diagnóstico', 'Procedimentos de estética facial'],
              ['Restaurações e tratamento de cárie', 'Alinhadores invisíveis e ortodontia estética'],
              ['Tratamento de canal', 'Implantes e próteses, conforme o plano'],
              ['Extrações simples', 'Clareamento e procedimentos exclusivamente estéticos'],
              ['Limpeza e prevenção', 'Materiais e técnicas fora do padrão coberto'],
            ],
          },
          {
            tipo: 'callout',
            titulo: 'O que você recebe por escrito antes de começar',
            itens: [
              'Diagnóstico e o que precisa ser tratado primeiro',
              'Quais procedimentos entram pela cobertura do convênio',
              'Quais ficam como particular e quanto custa cada um',
              'Alternativas mais conservadoras, quando forem clinicamente possíveis',
            ],
          },
        ],
      },
      {
        id: 'particular-ou-convenio',
        titulo: 'Particular e convênio no mesmo tratamento',
        blocos: [
          {
            tipo: 'p',
            texto:
              'É bastante comum um plano de tratamento misturar as duas modalidades: o que o convênio cobre entra pela cobertura, e o que está fora — em geral reabilitação e estética — segue como particular. Essa divisão fica explícita no orçamento, sem surpresa no meio do caminho.',
          },
          {
            tipo: 'p',
            texto:
              'A escolha entre um caminho e outro também é sua. Em algumas situações a alternativa coberta e a particular resolvem o mesmo problema com técnicas diferentes, e as duas são apresentadas com prós, contras e custo, para que a decisão seja informada.',
          },
        ],
      },
    ],
    faq: FAQ_CONVENIO,
    tratamentosRelacionados: [
      'tratamento-de-canal-sorocaba',
      'implante-dentario-sorocaba',
      'protocolo-dentario-sorocaba',
    ],
  },
  {
    slug: 'dentista-sabado-sorocaba',
    titulo: 'Atendimento aos sábados',
    h1: 'Dentista que atende aos sábados em Sorocaba',
    tituloSeo: 'Dentista aos Sábados em Sorocaba | Dr. Vitor Molina',
    metaDescricao:
      'Atendimento odontológico aos sábados em Sorocaba, das 9h às 12h, com o mesmo dentista da semana. Particular e Porto Seguro, com avaliação inicial sem custo.',
    keyword: 'dentista sábado Sorocaba',
    keywordsSecundarias: [
      'dentista que atende sábado em Sorocaba',
      'dentista aos sábados Sorocaba',
      'consultório odontológico sábado Sorocaba',
      'dentista fim de semana Sorocaba',
    ],
    respostaDireta:
      'O consultório do Dr. Vitor Molina, em Sorocaba (SP), atende aos sábados das 9h às 12h, com agendamento prévio. O atendimento de sábado é feito pelo mesmo dentista que atende durante a semana, nas mesmas condições — particular ou Porto Seguro — e a primeira avaliação não tem custo.',
    fatos: [
      { rotulo: 'Sábado', valor: '9h às 12h' },
      { rotulo: 'Segunda a sexta', valor: '9h às 18h' },
      { rotulo: 'Agendamento', valor: 'Prévio, pelo WhatsApp' },
      { rotulo: 'Quem atende no sábado', valor: 'Dr. Vitor Molina — o mesmo da semana' },
      { rotulo: 'Formas de atendimento', valor: 'Particular e Porto Seguro' },
      { rotulo: 'Cidade', valor: 'Sorocaba, São Paulo' },
    ],
    secoes: [
      {
        id: 'por-que-sabado',
        titulo: 'Para quem o sábado resolve',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Muita gente adia o dentista não por falta de vontade, mas por falta de horário. Quem trabalha em escala comercial de segunda a sexta acaba tendo que escolher entre faltar ao trabalho e adiar o tratamento — e o adiamento costuma custar caro, porque problema pequeno de dente não fica pequeno por muito tempo.',
          },
          {
            tipo: 'ul',
            itens: [
              'Quem trabalha em horário comercial e não consegue sair durante a semana',
              'Pais que preferem levar a criança sem tirá-la da escola',
              'Tratamentos longos, em que faltar no trabalho toda semana não é viável',
              'Quem vem de cidades da região e prefere concentrar a viagem no fim de semana',
            ],
          },
        ],
      },
      {
        id: 'como-funciona-sabado',
        titulo: 'Como funciona a manhã de sábado',
        blocos: [
          {
            tipo: 'p',
            texto:
              'O sábado não é plantão nem consulta corrida: é a mesma agenda, com o mesmo profissional e o mesmo tempo de consulta dos dias de semana. A diferença é o número de horários disponíveis — são três horas, e elas costumam ser preenchidas com antecedência.',
          },
          {
            tipo: 'callout',
            titulo: 'Para conseguir horário no sábado',
            itens: [
              'Envie mensagem pelo WhatsApp com dois horários de preferência',
              'Avise se o atendimento será particular ou pelo Porto Seguro',
              'Se for a primeira consulta, diga qual é a sua queixa principal',
              'Casos de dor são priorizados dentro da disponibilidade do dia',
            ],
          },
        ],
      },
      {
        id: 'o-que-da-para-fazer',
        titulo: 'O que dá para fazer numa consulta de sábado',
        blocos: [
          {
            tipo: 'p',
            texto:
              'Praticamente tudo o que é feito durante a semana: avaliação inicial, restaurações, tratamento de canal, etapas de reabilitação com implante e prótese, além dos procedimentos de harmonização orofacial. O que define o que cabe na consulta não é o dia da semana, e sim o tempo que o procedimento exige.',
          },
          {
            tipo: 'p',
            texto:
              'Cirurgias mais longas e etapas que pedem acompanhamento nas horas seguintes costumam ser agendadas em dias de semana, justamente para que haja margem de retorno no mesmo dia se algo precisar de ajuste. Isso é combinado no planejamento.',
          },
        ],
      },
    ],
    faq: FAQ_SABADO,
    tratamentosRelacionados: [
      'implante-dentario-sorocaba',
      'tratamento-de-canal-sorocaba',
      'harmonizacao-facial-sorocaba',
    ],
  },
];

export const getPaginaFoco = (slug: string): PaginaFoco | undefined =>
  PAGINAS_FOCO.find((p) => p.slug === slug);
