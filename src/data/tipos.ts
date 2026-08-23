/** Tipos compartilhados por toda a camada de dados. */

export type Faq = { pergunta: string; resposta: string };

export type Passo = { titulo: string; texto: string };

export type Fato = { rotulo: string; valor: string };

export type Tratamento = {
  slug: string;
  titulo: string; // nome curto (menu, cards, breadcrumb)
  h1: string;
  tituloSeo?: string; // <title> quando o H1 fica longo demais para a SERP
  keyword: string; // termo de busca foco
  keywordsSecundarias: string[];
  resumo: string; // 1 frase — cards e meta description
  respostaDireta: string; // 1º parágrafo da página (resposta direta p/ GEO/AEO)
  icone: string;
  categoria: 'odontologia' | 'estetica';
  procedimento: string; // nome do procedimento (Schema.org MedicalProcedure)
  areaInformativa: string; // área de atuação — texto informativo, não afirma registro no CRO
  oQueE: string[]; // parágrafos
  indicacoes: string[];
  comoFunciona: Passo[];
  cuidados: string[];
  fatos: Fato[]; // tabela de fatos-chave (muito citada por IA generativa)
  faq: Faq[];
  relacionados: string[]; // slugs de outros tratamentos
};

export type Artigo = {
  slug: string;
  titulo: string; // H1
  tituloSeo: string; // <title>
  metaDescricao: string;
  keyword: string;
  keywordsSecundarias: string[];
  categoria: string;
  resumo: string; // excerpt / card
  respostaDireta: string; // parágrafo de abertura (GEO)
  publicadoEm: string; // ISO yyyy-mm-dd
  atualizadoEm: string; // ISO yyyy-mm-dd
  tempoLeitura: number; // minutos
  fatos: Fato[];
  secoes: Secao[];
  faq: Faq[];
  tratamentosRelacionados: string[]; // slugs de /tratamentos/
  artigosRelacionados: string[]; // slugs de /artigos/
};

export type Bloco =
  | { tipo: 'p'; texto: string }
  | { tipo: 'ul'; itens: string[] }
  | { tipo: 'ol'; itens: string[] }
  | { tipo: 'callout'; titulo: string; itens: string[] }
  | { tipo: 'tabela'; cabecalho: string[]; linhas: string[][] };

export type Secao = {
  id: string; // âncora + índice do artigo
  titulo: string; // H2
  blocos: Bloco[];
  subsecoes?: { id: string; titulo: string; blocos: Bloco[] }[]; // H3
};
