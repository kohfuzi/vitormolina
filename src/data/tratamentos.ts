import type { Tratamento } from './tipos';
import { ODONTOLOGIA } from './tratamentos-odontologia';
import { ESTETICA } from './tratamentos-estetica';

/** Todos os tratamentos: 1 tratamento = 1 página = 1 termo de busca foco. */
export const TRATAMENTOS: Tratamento[] = [...ODONTOLOGIA, ...ESTETICA];

export const getTratamento = (slug: string): Tratamento | undefined =>
  TRATAMENTOS.find((t) => t.slug === slug);

export const tratamentosPorCategoria = (categoria: Tratamento['categoria']): Tratamento[] =>
  TRATAMENTOS.filter((t) => t.categoria === categoria);

export const urlTratamento = (slug: string): string => `/tratamentos/${slug}/`;

export const CATEGORIAS = [
  {
    id: 'odontologia' as const,
    titulo: 'Odontologia',
    descricao:
      'Diagnóstico, reabilitação e manutenção — do dente que dói ao caso que precisa de implante ou prótese.',
  },
  {
    id: 'estetica' as const,
    titulo: 'Harmonização orofacial',
    descricao:
      'Procedimentos estéticos do complexo orofacial realizados por cirurgião-dentista, planejados a partir do rosto inteiro.',
  },
];
