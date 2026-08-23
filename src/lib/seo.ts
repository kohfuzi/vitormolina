import { SITE } from '../data/site';

/** Monta a URL absoluta a partir de um caminho relativo, sempre com barra final. */
export function urlAbsoluta(caminho = '/'): string {
  if (caminho.startsWith('http')) return caminho;
  const limpo = caminho.startsWith('/') ? caminho : `/${caminho}`;
  const comBarra = limpo.endsWith('/') || limpo.includes('.') ? limpo : `${limpo}/`;
  return `${SITE.url}${comBarra}`;
}

/**
 * <title> da página. O nome da marca entra no fim, separado por "|",
 * e o conjunto é mantido dentro do limite prático de exibição do Google.
 */
export function montarTitulo(titulo?: string): string {
  if (!titulo) return SITE.nomeCompleto;
  if (titulo.includes(SITE.nome)) return titulo;
  const completo = `${titulo} | ${SITE.nome}`;
  return completo.length <= 65 ? completo : titulo;
}

/** Corta a meta description no limite prático de exibição, sem cortar palavra ao meio. */
export function limitarDescricao(texto: string, limite = 158): string {
  const normalizado = texto.replace(/\s+/g, ' ').trim();
  if (normalizado.length <= limite) return normalizado;
  const cortado = normalizado.slice(0, limite);
  return `${cortado.slice(0, cortado.lastIndexOf(' '))}…`;
}

/** Data ISO completa, exigida por Article.datePublished / dateModified. */
export function dataIso(data: string): string {
  return `${data}T09:00:00-03:00`;
}

/** Formato de data legível em pt-BR, para exibição no artigo. */
export function dataLegivel(data: string): string {
  const [ano, mes, dia] = data.split('-');
  return new Date(Number(ano), Number(mes) - 1, Number(dia)).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
