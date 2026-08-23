/**
 * ============================================================
 *  FONTE ÚNICA DA VERDADE — Dr. Vitor Molina (Sorocaba/SP)
 * ------------------------------------------------------------
 *  Todo texto factual do site, o sitemap, o llms.txt e os dados
 *  estruturados (Schema.org) saem daqui. Para atualizar o site
 *  inteiro, altere este arquivo.
 *
 *  ⚠️  ITENS COM `PENDENTE: true` NÃO SÃO PUBLICADOS nos dados
 *      estruturados enquanto forem placeholders — isso evita
 *      enviar informação falsa ao Google e às IAs.
 *      Preencha o dado e troque a flag para `false`.
 * ============================================================
 */

export const PENDENTE = {
  dominio: true, // ← confirmar domínio final e trocar SITE.url
  endereco: true, // ← rua, número, complemento, bairro e CEP
  telefone: true, // ← telefone fixo e/ou WhatsApp
  geo: true, // ← latitude/longitude exatas do Google Maps
  cro: true, // ← CRO-SP do Dr. Vitor Molina (obrigatório por ética CFO)
  redes: true, // ← Instagram / Google Business Profile
} as const;

export const SITE = {
  url: 'https://www.vitormolina.com.br', // ← domínio final, SEM barra no fim
  nome: 'Dr. Vitor Molina',
  nomeCompleto: 'Dr. Vitor Molina — Dentista em Sorocaba',
  tagline: 'Uma consulta sem pressa, com o dentista que vai te tratar do começo ao fim',
  descricao:
    'Consultório odontológico em Sorocaba com atendimento particular e Porto Seguro. O Dr. Vitor Molina conduz o caso do diagnóstico ao acompanhamento, com planejamento explicado antes de qualquer procedimento.',
  idioma: 'pt-BR',
  locale: 'pt_BR',
  themeColor: '#0f3d3e',
} as const;

export const DENTISTA = {
  nome: 'Dr. Vitor Molina',
  nomeCompleto: 'Vitor Molina',
  primeiroNome: 'Vitor',
  sobrenome: 'Molina',
  cargo: 'Cirurgião-dentista',
  cro: 'CRO-SP PREENCHER', // ← PREENCHER e trocar PENDENTE.cro para false
  croNumero: 'PREENCHER',
  croEstado: 'SP',
  /**
   * Só liste aqui a especialidade REGISTRADA no CRO. Tudo o mais é
   * atendimento clínico/informativo — anunciar especialidade não registrada
   * é infração ética (Resolução CFO 196/2019).
   */
  especialidadesRegistradas: [] as string[],
  atua: [
    'Implante dentário',
    'Prótese sobre implante (protocolo)',
    'Tratamento de canal',
    'Alinhador invisível',
    'Harmonização facial',
    'Odontologia geral e restauradora',
  ],
  bio: 'O Dr. Vitor Molina é cirurgião-dentista em Sorocaba (SP) e atende pessoalmente todas as etapas do tratamento — diagnóstico, planejamento, execução e acompanhamento. O consultório trabalha com atendimento particular e com o convênio Porto Seguro.',
} as const;

export const NAP = {
  // NAME
  nome: 'Dr. Vitor Molina — Odontologia',
  // ADDRESS
  rua: 'PREENCHER — Rua e número',
  complemento: 'PREENCHER — sala/andar',
  bairro: 'PREENCHER — bairro',
  cidade: 'Sorocaba',
  estado: 'SP',
  estadoExtenso: 'São Paulo',
  cep: 'PREENCHER — 00000-000',
  pais: 'BR',
  // PHONE
  telefone: '+55 15 0000-0000', // ← PREENCHER
  telefoneLink: '+551500000000', // ← PREENCHER (somente dígitos, com +55)
  whatsapp: '5515900000000', // ← PREENCHER (somente dígitos: 55 + DDD + número)
  whatsappTexto:
    'Ol%C3%A1%2C%20Dr.%20Vitor!%20Vim%20pelo%20site%20e%20quero%20agendar%20a%20primeira%20avalia%C3%A7%C3%A3o.',
  email: 'contato@vitormolina.com.br', // ← PREENCHER
  // GEO (centro de Sorocaba como referência — trocar pela coordenada exata)
  latitude: '-23.5015',
  longitude: '-47.4526',
  mapsUrl: '', // ← PREENCHER: link do Google Maps do consultório
  gbpUrl: '', // ← PREENCHER: link do Perfil da Empresa no Google
  instagram: '', // ← PREENCHER
} as const;

export const HORARIO = {
  texto: 'Segunda a sexta, das 9h às 18h · Sábado, das 9h às 12h',
  resumo: 'Seg–Sex 9h–18h · Sáb 9h–12h',
  semana: {
    dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    abre: '09:00',
    fecha: '18:00',
  },
  sabado: {
    dias: ['Saturday'],
    abre: '09:00',
    fecha: '12:00',
  },
} as const;

export const ATENDIMENTO = {
  convenios: ['Porto Seguro'],
  formas: ['Particular', 'Porto Seguro'],
  /**
   * A primeira avaliação sem custo é uma informação factual do consultório.
   * Ela é apresentada como condição de atendimento (não como isca promocional),
   * para se manter dentro do art. 3º da Resolução CFO 196/2019.
   * Para deixar de exibi-la em todo o site, troque para `false`.
   */
  primeiraAvaliacaoSemCusto: true,
  idadeMinimaCriancas: 4,
  estacionamento: 'Vagas na rua e em frente ao prédio.',
  pagamento: ['PIX', 'Cartão de débito', 'Cartão de crédito', 'Dinheiro'],
} as const;

/** Cidades e regiões atendidas — reforço de sinal geográfico local. */
export const AREA_ATENDIDA = [
  'Sorocaba',
  'Votorantim',
  'Salto de Pirapora',
  'Araçoiaba da Serra',
  'Iperó',
  'Boituva',
  'Itu',
  'Porto Feliz',
] as const;

export const BAIRROS = [
  'Centro',
  'Campolim',
  'Parque Campolim',
  'Jardim Faculdade',
  'Vila Hortência',
  'Jardim Vergueiro',
  'Além Ponte',
  'Éden',
  'Vila Barão',
  'Jardim Paulistano',
] as const;

/** Menu principal — a ordem define a arquitetura de links internos. */
export const NAV = [
  { href: '/', label: 'Início' },
  { href: '/tratamentos/', label: 'Tratamentos' },
  { href: '/sobre/', label: 'O consultório' },
  { href: '/artigos/', label: 'Artigos' },
  { href: '/perguntas-frequentes/', label: 'Dúvidas' },
  { href: '/contato/', label: 'Contato' },
] as const;

export const whatsappHref = `https://wa.me/${NAP.whatsapp}?text=${NAP.whatsappTexto}`;
export const telHref = `tel:${NAP.telefoneLink}`;

export const enderecoLinha = PENDENTE.endereco
  ? `${NAP.cidade} — ${NAP.estado}`
  : `${NAP.rua}${NAP.complemento ? ' · ' + NAP.complemento : ''} — ${NAP.bairro}, ${NAP.cidade}/${NAP.estado}`;

export const croLinha = PENDENTE.cro ? '' : `${DENTISTA.cro}`;

/** Assinatura factual reaproveitada na home, no Schema.org e no llms.txt (GEO/AEO). */
export const RESUMO_FACTUAL = `${DENTISTA.nome}${PENDENTE.cro ? ' é' : `, ${DENTISTA.cro}, é`} cirurgião-dentista em ${NAP.cidade}/${NAP.estado}. O consultório atende particular e ${ATENDIMENTO.convenios.join(', ')}, de segunda a sexta das 9h às 18h e aos sábados das 9h às 12h, a partir dos ${ATENDIMENTO.idadeMinimaCriancas} anos de idade. O mesmo profissional conduz o caso do diagnóstico ao acompanhamento e a primeira avaliação não tem custo.`;

/** Aviso ético exigido pelo Código de Ética Odontológica (conteúdo educativo). */
export const AVISO_ETICO =
  'As informações deste site têm caráter educativo e não substituem a avaliação odontológica presencial. O diagnóstico e o plano de tratamento dependem de consulta.';
