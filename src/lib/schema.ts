import {
  ATENDIMENTO,
  AREA_ATENDIDA,
  DENTISTA,
  HORARIO,
  NAP,
  PENDENTE,
  RESUMO_FACTUAL,
  SITE,
} from '../data/site';
import type { Artigo, Faq, Tratamento } from '../data/tipos';
import { dataIso, urlAbsoluta } from './seo';

/**
 * Schema.org em grafo (@graph) com @id estável.
 *
 * Regra de ouro: nada que não esteja confirmado entra no schema.
 * Endereço, telefone, coordenadas e CRO só são publicados quando a flag
 * correspondente em PENDENTE for `false` — informação inventada em dados
 * estruturados destrói a confiança do Google e das IAs e é infração ética.
 */

export const ID_CONSULTORIO = `${SITE.url}/#consultorio`;
export const ID_DENTISTA = `${SITE.url}/#dr-vitor-molina`;
export const ID_SITE = `${SITE.url}/#website`;

const semanaSchema = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: HORARIO.semana.dias,
  opens: HORARIO.semana.abre,
  closes: HORARIO.semana.fecha,
};

const sabadoSchema = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: HORARIO.sabado.dias,
  opens: HORARIO.sabado.abre,
  closes: HORARIO.sabado.fecha,
};

const redesSociais = [NAP.instagram, NAP.gbpUrl].filter(Boolean);

const areaAtendida = AREA_ATENDIDA.map((cidade) => ({
  '@type': 'City',
  name: cidade,
  containedInPlace: { '@type': 'State', name: NAP.estadoExtenso },
}));

/** Person — o profissional. Base do E-E-A-T. */
export function pessoaSchema() {
  return {
    '@type': 'Person',
    '@id': ID_DENTISTA,
    name: DENTISTA.nome,
    givenName: DENTISTA.primeiroNome,
    familyName: DENTISTA.sobrenome,
    jobTitle: DENTISTA.cargo,
    description: DENTISTA.bio,
    url: urlAbsoluta('/sobre/'),
    ...(PENDENTE.cro
      ? {}
      : {
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'CRO',
            value: DENTISTA.cro,
          },
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Registro profissional',
            recognizedBy: {
              '@type': 'Organization',
              name: `Conselho Regional de Odontologia de ${DENTISTA.croEstado}`,
            },
          },
        }),
    knowsAbout: DENTISTA.atua,
    areaServed: areaAtendida,
    worksFor: { '@id': ID_CONSULTORIO },
    ...(redesSociais.length ? { sameAs: redesSociais } : {}),
  };
}

/** Dentist — subtipo de LocalBusiness + MedicalBusiness. É o nó do negócio local. */
export function consultorioSchema() {
  return {
    '@type': 'Dentist',
    '@id': ID_CONSULTORIO,
    name: NAP.nome,
    alternateName: SITE.nome,
    description: SITE.descricao,
    url: SITE.url,
    image: urlAbsoluta('/logo.jpg'),
    logo: urlAbsoluta('/logo.jpg'),
    ...(PENDENTE.telefone ? {} : { telephone: NAP.telefoneLink, email: NAP.email }),
    address: PENDENTE.endereco
      ? {
          '@type': 'PostalAddress',
          addressLocality: NAP.cidade,
          addressRegion: NAP.estado,
          addressCountry: NAP.pais,
        }
      : {
          '@type': 'PostalAddress',
          streetAddress: `${NAP.rua}${NAP.complemento ? `, ${NAP.complemento}` : ''}`,
          addressLocality: NAP.cidade,
          addressRegion: NAP.estado,
          postalCode: NAP.cep,
          addressCountry: NAP.pais,
        },
    ...(PENDENTE.geo
      ? {}
      : {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: NAP.latitude,
            longitude: NAP.longitude,
          },
          hasMap: NAP.mapsUrl || undefined,
        }),
    openingHoursSpecification: [semanaSchema, sabadoSchema],
    areaServed: areaAtendida,
    availableLanguage: { '@type': 'Language', name: 'Portuguese', alternateName: 'pt-BR' },
    currenciesAccepted: 'BRL',
    paymentAccepted: ATENDIMENTO.pagamento.join(', '),
    medicalSpecialty: 'Dentistry',
    isAcceptingNewPatients: true,
    founder: { '@id': ID_DENTISTA },
    employee: { '@id': ID_DENTISTA },
    knowsAbout: DENTISTA.atua,
    slogan: SITE.tagline,
    ...(redesSociais.length ? { sameAs: redesSociais } : {}),
  };
}

/** WebSite — nome explícito da marca + busca interna declarada. */
export function siteSchema() {
  return {
    '@type': 'WebSite',
    '@id': ID_SITE,
    url: SITE.url,
    name: SITE.nome,
    alternateName: SITE.nomeCompleto,
    description: SITE.descricao,
    inLanguage: SITE.idioma,
    publisher: { '@id': ID_CONSULTORIO },
  };
}

/** WebPage — amarra cada página ao grafo do site. */
export function paginaSchema(opcoes: {
  url: string;
  titulo: string;
  descricao: string;
  tipo?: 'WebPage' | 'MedicalWebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
}) {
  const { url, titulo, descricao, tipo = 'WebPage' } = opcoes;
  return {
    '@type': tipo,
    '@id': `${url}#webpage`,
    url,
    name: titulo,
    description: descricao,
    inLanguage: SITE.idioma,
    isPartOf: { '@id': ID_SITE },
    about: { '@id': ID_CONSULTORIO },
    ...(tipo === 'MedicalWebPage'
      ? { lastReviewed: new Date().toISOString().slice(0, 10), reviewedBy: { '@id': ID_DENTISTA } }
      : {}),
  };
}

/** BreadcrumbList — melhora a exibição do caminho no resultado de busca. */
export function migalhasSchema(itens: { nome: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: itens.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nome,
      item: urlAbsoluta(item.url),
    })),
  };
}

/** FAQPage — elegível a rich result e muito usado por IA generativa. */
export function faqSchema(perguntas: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: perguntas.map((p) => ({
      '@type': 'Question',
      name: p.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: p.resposta },
    })),
  };
}

/** MedicalProcedure + Service para cada tratamento. */
export function tratamentoSchema(t: Tratamento, url: string) {
  return [
    {
      '@type': 'MedicalProcedure',
      '@id': `${url}#procedimento`,
      name: t.procedimento,
      description: t.respostaDireta,
      procedureType: { '@type': 'MedicalProcedureType', name: 'Percutaneous procedure' },
      bodyLocation: t.categoria === 'estetica' ? 'Face' : 'Boca',
      howPerformed: t.comoFunciona.map((p) => `${p.titulo}: ${p.texto}`).join(' '),
      preparation: t.indicacoes.join('; '),
      followup: t.cuidados.join('; '),
      performedBy: { '@id': ID_DENTISTA },
      relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Dentistry' },
    },
    {
      '@type': 'Service',
      '@id': `${url}#servico`,
      name: t.h1,
      description: t.resumo,
      serviceType: t.procedimento,
      provider: { '@id': ID_CONSULTORIO },
      areaServed: areaAtendida,
      audience: { '@type': 'PeopleAudience', geographicArea: { '@type': 'City', name: NAP.cidade } },
      url,
    },
  ];
}

/** Article para os artigos, com autoria e revisão atribuídas ao profissional. */
export function artigoSchema(a: Artigo, url: string) {
  return {
    '@type': 'Article',
    '@id': `${url}#artigo`,
    headline: a.titulo.slice(0, 110),
    alternativeHeadline: a.tituloSeo,
    description: a.metaDescricao,
    articleSection: a.categoria,
    inLanguage: SITE.idioma,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    datePublished: dataIso(a.publicadoEm),
    dateModified: dataIso(a.atualizadoEm),
    author: { '@id': ID_DENTISTA },
    creator: { '@id': ID_DENTISTA },
    publisher: { '@id': ID_CONSULTORIO },
    keywords: [a.keyword, ...a.keywordsSecundarias].join(', '),
    about: { '@id': ID_CONSULTORIO },
    wordCount: contarPalavras(a),
    image: urlAbsoluta('/logo.jpg'),
    isAccessibleForFree: true,
  };
}

function contarPalavras(a: Artigo): number {
  const textos: string[] = [a.respostaDireta];
  for (const secao of a.secoes) {
    for (const bloco of secao.blocos) {
      if (bloco.tipo === 'p') textos.push(bloco.texto);
      if (bloco.tipo === 'ul' || bloco.tipo === 'ol') textos.push(bloco.itens.join(' '));
      if (bloco.tipo === 'callout') textos.push(bloco.itens.join(' '));
      if (bloco.tipo === 'tabela') textos.push(bloco.linhas.flat().join(' '));
    }
  }
  for (const f of a.faq) textos.push(`${f.pergunta} ${f.resposta}`);
  return textos.join(' ').split(/\s+/).length;
}

/** ItemList — usada nos hubs (/tratamentos/ e /artigos/). */
export function listaSchema(nome: string, itens: { nome: string; url: string }[]) {
  return {
    '@type': 'ItemList',
    name: nome,
    numberOfItems: itens.length,
    itemListElement: itens.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.nome,
      url: urlAbsoluta(item.url),
    })),
  };
}

/** Resumo factual reaproveitado — ajuda a IA a citar o consultório corretamente. */
export const RESUMO_SCHEMA = RESUMO_FACTUAL;

/** Combina nós num único @graph. */
export function grafo(...nos: unknown[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nos.flat().filter(Boolean),
  };
}
