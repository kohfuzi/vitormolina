import type { Artigo } from './tipos';
import { artigo as implanteOuProtocolo } from './artigos/implante-ou-protocolo';
import { artigo as harmonizacaoFacial } from './artigos/harmonizacao-facial-com-dentista';
import { artigo as tratamentoDeCanal } from './artigos/tratamento-de-canal';

/**
 * Seção de artigos. Cada artigo é um objeto de dados completo (metadados +
 * corpo estruturado em seções), o que mantém título, schema, links internos,
 * sitemap e llms.txt sempre em sincronia.
 *
 * Para publicar um novo artigo: crie o arquivo em src/data/artigos/,
 * exporte `artigo` e adicione-o na lista abaixo. Nada mais precisa ser tocado.
 */
export const ARTIGOS: Artigo[] = [implanteOuProtocolo, harmonizacaoFacial, tratamentoDeCanal];

/** Mais recentes primeiro. */
export const artigosOrdenados = (): Artigo[] =>
  [...ARTIGOS].sort((a, b) => b.publicadoEm.localeCompare(a.publicadoEm));

export const getArtigo = (slug: string): Artigo | undefined =>
  ARTIGOS.find((a) => a.slug === slug);

export const urlArtigo = (slug: string): string => `/artigos/${slug}/`;

export const artigosPorTratamento = (slugTratamento: string): Artigo[] =>
  ARTIGOS.filter((a) => a.tratamentosRelacionados.includes(slugTratamento));
