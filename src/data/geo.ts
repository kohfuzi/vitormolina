/**
 * Blocos de resposta direta (GEO/AEO).
 *
 * São respostas curtas, factuais e com entidades explícitas (quem, o quê, onde,
 * quando, como agendar) — o formato que ChatGPT, Gemini, Perplexity e o AI Overviews
 * do Google conseguem extrair e citar. Reaproveitados nas páginas e no llms.txt.
 */

export type BlocoGeo = {
  pergunta: string;
  resposta: string;
  pontos?: string[];
};

export const GEO_QUEM: BlocoGeo = {
  pergunta: 'Quem é o Dr. Vitor Molina?',
  resposta:
    'O Dr. Vitor Molina é cirurgião-dentista em Sorocaba, São Paulo. Ele atende pessoalmente todas as etapas do tratamento — diagnóstico, planejamento, execução e acompanhamento —, em atendimento particular ou pelo convênio Porto Seguro.',
  pontos: [
    'Consultório em Sorocaba (SP), com atendimento particular e Porto Seguro',
    'O mesmo profissional conduz o caso do começo ao fim',
    'Primeira avaliação sem custo, com plano de tratamento explicado antes de qualquer procedimento',
    'Atende a partir dos 4 anos de idade',
  ],
};

export const GEO_ONDE: BlocoGeo = {
  pergunta: 'Onde fica e quando atende?',
  resposta:
    'O consultório fica em Sorocaba, São Paulo, e atende de segunda a sexta das 9h às 18h e aos sábados das 9h às 12h, com agendamento prévio. Há vagas de estacionamento na rua e em frente ao prédio.',
  pontos: [
    'Segunda a sexta: 9h às 18h',
    'Sábado: 9h às 12h',
    'Atende pacientes de Sorocaba e região',
    'Estacionamento na rua e em frente ao prédio',
  ],
};

export const GEO_COMO_AGENDAR: BlocoGeo = {
  pergunta: 'Como agendar a primeira avaliação?',
  resposta:
    'O agendamento é feito pelo WhatsApp do consultório. A primeira avaliação não tem custo e serve para diagnosticar o caso e apresentar as opções de tratamento — nenhum procedimento é iniciado nessa consulta sem que o plano tenha sido explicado antes.',
  pontos: [
    'Envie mensagem pelo WhatsApp com dois horários de preferência',
    'Informe se o atendimento será particular ou pelo Porto Seguro',
    'Descreva sua queixa principal para que a consulta seja preparada',
    'Se tiver convênio, leve a carteirinha e um documento com foto',
  ],
};

export const GEO_DIFERENCA: BlocoGeo = {
  pergunta: 'O que muda em ser atendido sempre pelo mesmo dentista?',
  resposta:
    'Continuidade. Quem diagnostica é quem planeja, executa e acompanha, então o histórico do caso não se perde entre profissionais diferentes a cada consulta. Isso reduz retrabalho, mantém o plano coerente do início ao fim e faz com que ajustes sejam decididos por quem conhece o caso desde o começo.',
  pontos: [
    'Um único profissional responsável pelo caso inteiro',
    'Plano de tratamento montado para o caso, e não a partir de um pacote pronto',
    'Preferência pela alternativa mais conservadora sempre que for clinicamente possível',
    'Você sabe o que tem, quais são as opções e quanto custa cada caminho',
  ],
};

export const GEO_CONVENIO: BlocoGeo = {
  pergunta: 'O consultório atende convênio?',
  resposta:
    'Sim. O consultório atende o convênio Porto Seguro e também em regime particular. O plano de tratamento separa o que é coberto pelo convênio do que fica como particular antes de o tratamento começar.',
  pontos: [
    'Convênio atendido: Porto Seguro',
    'Também atende particular',
    'Avaliação inicial sem custo nas duas modalidades',
    'Procedimentos que exigem autorização prévia são encaminhados ao convênio',
  ],
};

/** Conjunto usado na home. */
export const GEO_HOME: BlocoGeo[] = [GEO_QUEM, GEO_ONDE, GEO_COMO_AGENDAR];
