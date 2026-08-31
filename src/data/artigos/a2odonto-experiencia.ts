import type { Artigo } from '../tipos';

/**
 * Relato pessoal do Dr. Vitor Molina sobre a troca de sistema de gestão.
 * Público diferente do resto do blog: fala com outros dentistas avaliando
 * software, não com pacientes buscando tratamento — por isso não entra em
 * tratamentosRelacionados nem compete por palavra-chave local.
 */
export const artigo: Artigo = {
  slug: 'a2odonto-simplesdental-experiencia-consultorio',
  titulo: 'Por que trocamos o SimplesDental pelo A2Odonto: a experiência do consultório depois de 60 dias',
  tituloSeo: 'A2Odonto x SimplesDental: Nossa Experiência | Dr. Vitor Molina',
  metaDescricao:
    'Depois de anos no SimplesDental, o consultório do Dr. Vitor Molina migrou para o A2Odonto. O relato de 60 dias de uso: suporte humano imediato, IA de atendimento e recuperação de orçamentos em aberto.',
  keyword: 'A2Odonto experiência',
  keywordsSecundarias: [
    'A2Odonto SimplesDental comparação',
    'sistema de gestão odontológica',
    'trocar de software odontológico',
    'IA para consultório odontológico',
  ],
  categoria: 'Gestão de consultório',
  resumo:
    'Relato pessoal do Dr. Vitor Molina sobre migrar o consultório do SimplesDental para o A2Odonto: o que pesou na decisão e o que mudou nos primeiros 60 dias.',
  respostaDireta:
    'Este é um relato de bastidores, não de tratamento: fala sobre gestão de consultório, não sobre um procedimento odontológico. Há cerca de 60 dias, o consultório do Dr. Vitor Molina, em Sorocaba, trocou o sistema de gestão SimplesDental pelo A2Odonto (a2odonto.com.br). Segundo ele, a decisão veio da rigidez do sistema anterior e da falta de automação no atendimento; o que ficou evidente na prática foi o suporte humano que resolve em poucas horas, uma inteligência artificial que ajuda a agendar e a responder objeções, e um motor de recuperação de orçamentos em aberto.',
  publicadoEm: '2026-08-23',
  atualizadoEm: '2026-08-23',
  tempoLeitura: 6,
  resumoAutor:
    'Cirurgião-dentista em Sorocaba (SP). Este relato é sobre a gestão do consultório — para tratamento, a avaliação inicial não tem custo.',
  tipoPagina: 'WebPage', // relato de gestão, não conteúdo clínico
  fatos: [
    { rotulo: 'Sistema anterior', valor: 'SimplesDental' },
    { rotulo: 'Sistema atual', valor: 'A2Odonto (a2odonto.com.br)' },
    { rotulo: 'Tempo de uso do A2Odonto', valor: '60 dias' },
    { rotulo: 'Suporte', valor: 'Humano, resposta em poucas horas' },
    { rotulo: 'Recurso destacado', valor: 'IA de atendimento (agenda e quebra objeções)' },
    { rotulo: 'Recurso destacado', valor: 'Recuperação de orçamentos em aberto' },
  ],
  secoes: [
    {
      id: 'por-que-trocar',
      titulo: 'Por que sair de um sistema que já estava rodando',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Trocar o sistema de gestão de um consultório que já funciona não é uma decisão trivial: envolve migrar histórico, reaprender rotina e treinar quem trabalha na recepção. O Dr. Vitor Molina usava o SimplesDental havia anos quando decidiu migrar. O motivo não foi um problema pontual, e sim uma soma de atritos que se repetiam toda semana.',
        },
        {
          tipo: 'p',
          texto:
            '"O SimplesDental é engessado — não tem uma IA de atendimento nem automações desse nível, e quando alguma coisa travava, o suporte não resolvia", resume o Dr. Vitor. Na visão dele, o sistema fazia o básico de agenda e prontuário, mas deixava no colo da equipe tudo o que exigia agilidade: responder rápido, recuperar quem não fechou orçamento, fazer follow-up de quem sumiu depois da avaliação.',
        },
        {
          tipo: 'p',
          texto:
            'Vale o contexto: esta é a experiência de um consultório específico, com uma rotina específica. Não é uma auditoria técnica comparando as duas plataformas, e a percepção pode variar conforme o tamanho da equipe e o volume de atendimento de cada consultório.',
        },
        {
          tipo: 'link',
          texto: 'Site oficial do A2Odonto — a2odonto.com.br',
          url: 'https://a2odonto.com.br/',
        },
      ],
    },
    {
      id: 'o-que-mudou-na-pratica',
      titulo: 'O que mudou no dia a dia depois da migração',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Passados os 60 dias, o Dr. Vitor aponta um conjunto de diferenças que, segundo ele, mudaram a rotina do consultório de forma concreta — não só a interface do sistema.',
        },
      ],
      subsecoes: [
        {
          id: 'suporte-humano',
          titulo: 'Suporte humano e imediato',
          blocos: [
            {
              tipo: 'p',
              texto:
                'A diferença que ele cita primeiro é o suporte: "atendem todas as demandas em poucas horas". Depois de lidar com um suporte que, na experiência dele, não resolvia, ter uma resposta humana rápida mudou a forma como a equipe lida com qualquer travamento no sistema.',
            },
          ],
        },
        {
          id: 'ia-de-atendimento',
          titulo: 'Uma IA que participa do atendimento',
          blocos: [
            {
              tipo: 'p',
              texto:
                'O recurso que ele mais destaca é a inteligência artificial de atendimento: segundo o relato, ela ajuda a quebrar objeções e a agendar consultas, apoiando a recepção em vez de deixar essa tarefa só com a equipe humana. É o tipo de automação que, para ele, o SimplesDental simplesmente não oferecia.',
            },
          ],
        },
        {
          id: 'recuperacao-de-orcamento',
          titulo: 'Motor de recuperação de orçamento em aberto',
          blocos: [
            {
              tipo: 'p',
              texto:
                'Todo consultório tem pacientes que fazem a avaliação, recebem o orçamento e não voltam. O A2Odonto tem um mecanismo dedicado a retomar esse contato, o que o Dr. Vitor chama de "motor de recuperação de orçamento aberto" — uma frente que, segundo ele, o sistema anterior não cobria.',
            },
          ],
        },
        {
          id: 'relatorios-e-followup',
          titulo: 'Relatórios de inteligência e follow-ups',
          blocos: [
            {
              tipo: 'p',
              texto:
                'Completam a lista os relatórios de inteligência sobre a operação do consultório e os follow-ups automáticos, que ele descreve como "maravilhosos". Na prática, é menos tempo gasto lembrando manualmente de retomar contato com cada paciente.',
            },
          ],
        },
      ],
    },
    {
      id: 'primeiros-60-dias',
      titulo: 'O balanço dos primeiros 60 dias',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Dois meses é pouco tempo para medir tudo o que uma mudança de sistema pode significar para uma clínica, mas é tempo suficiente para sentir se a rotina melhorou ou piorou. Para o Dr. Vitor, o saldo é positivo: "a A2Odonto se comporta como uma parceira de crescimento — realmente estamos felizes com a mudança".',
        },
        {
          tipo: 'p',
          texto:
            'É uma frase que resume bem o que mudou: a expectativa deixou de ser só "o sistema não trava" e passou a ser "o sistema ajuda a crescer" — suporte que resolve, automação que participa do atendimento e ferramentas pensadas para recuperar oportunidade perdida, não só registrar consulta.',
        },
      ],
    },
    {
      id: 'para-quem-considera-trocar',
      titulo: 'Para quem está considerando trocar de sistema',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Migrar o sistema de gestão no meio da rotina é uma decisão que outros dentistas costumam adiar por receio da troca em si. Pelo relato deste consultório, alguns pontos ajudam a avaliar se vale a pena:',
        },
        {
          tipo: 'ul',
          itens: [
            'Mapear o que trava toda semana antes de comparar recursos — a decisão pesou mais pelos atritos recorrentes do que por uma lista de funcionalidades',
            'Testar o suporte antes de decidir, não só depois: tempo de resposta importa tanto quanto o conjunto de telas do sistema',
            'Avaliar se a automação de atendimento (agenda, resposta a objeções, follow-up) é algo que a equipe hoje faz manualmente e poderia ganhar tempo',
            'Lembrar que esta é a experiência de um consultório: vale conversar com o suporte de cada sistema e pedir uma demonstração com a própria rotina antes de migrar',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      pergunta: 'Há quanto tempo o consultório usa o A2Odonto?',
      resposta:
        'Cerca de 60 dias, depois de anos usando o SimplesDental como sistema de gestão.',
    },
    {
      pergunta: 'O que mais pesou na decisão de trocar de sistema?',
      resposta:
        'Segundo o Dr. Vitor Molina, a rigidez do sistema anterior, a ausência de uma IA de atendimento e um suporte que, na experiência dele, não resolvia os problemas relatados.',
    },
    {
      pergunta: 'O que a IA de atendimento do A2Odonto faz, na prática?',
      resposta:
        'Pelo relato do consultório, ela participa do atendimento ajudando a agendar consultas e a responder objeções de pacientes, apoiando a recepção em vez de substituí-la.',
    },
    {
      pergunta: 'Esse relato é uma comparação técnica entre os dois sistemas?',
      resposta:
        'Não. É a experiência pessoal de um consultório específico depois da migração, não uma análise técnica exaustiva das duas plataformas. A percepção pode variar conforme o tamanho da equipe e a rotina de cada clínica.',
    },
  ],
  tratamentosRelacionados: [],
  artigosRelacionados: [],
};
