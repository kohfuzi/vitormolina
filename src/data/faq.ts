import type { Faq } from './tipos';

/**
 * Banco central de perguntas frequentes.
 * Reaproveitado na home, nas páginas foco e em /perguntas-frequentes/,
 * sempre acompanhado do schema FAQPage.
 */

/** Perguntas do consultório — respostas factuais, exatamente como são ditas na recepção. */
export const FAQ_CONSULTORIO: Faq[] = [
  {
    pergunta: 'Vocês atendem convênio?',
    resposta: 'Atendemos particular e Porto Seguro.',
  },
  {
    pergunta: 'A primeira consulta é cobrada?',
    resposta: 'Não. A avaliação inicial é gratuita.',
  },
  {
    pergunta: 'A partir de que idade atendem crianças?',
    resposta: 'A partir dos 4 anos.',
  },
  {
    pergunta: 'Qual o horário de atendimento?',
    resposta: 'De segunda a sexta, das 9h às 18h, e aos sábados das 9h às 12h.',
  },
  {
    pergunta: 'Fazem harmonização facial?',
    resposta: 'Sim — toxina botulínica, preenchimentos, skinbooster e microagulhamento.',
  },
  {
    pergunta: 'Tem estacionamento?',
    resposta: 'Há vagas na rua e em frente ao prédio.',
  },
];

/** Perguntas sobre como o atendimento funciona — usadas em /sobre/ e /perguntas-frequentes/. */
export const FAQ_ATENDIMENTO: Faq[] = [
  {
    pergunta: 'Quem faz o meu tratamento?',
    resposta:
      'O Dr. Vitor Molina, do começo ao fim. Diagnóstico, planejamento, execução e acompanhamento ficam com o mesmo profissional — você não é repassado a cada consulta.',
  },
  {
    pergunta: 'Como funciona a primeira consulta?',
    resposta:
      'É uma avaliação sem pressa: exame clínico, exames de imagem quando necessários e conversa sobre a sua queixa e o seu histórico. Ao final você recebe o diagnóstico, as opções de tratamento e o custo de cada caminho, antes de qualquer procedimento.',
  },
  {
    pergunta: 'Vocês fazem orçamento antes de começar?',
    resposta:
      'Sim. O plano de tratamento é apresentado com as etapas, os prazos e os valores de cada alternativa. Nada é iniciado sem que você saiba o que vai ser feito e por quê.',
  },
  {
    pergunta: 'Posso fazer o tratamento por etapas?',
    resposta:
      'Sim. Quando o caso permite, o plano é organizado por prioridade clínica, e você decide o ritmo. O que é urgente é sinalizado como urgente; o que pode esperar, também.',
  },
  {
    pergunta: 'Quais formas de pagamento são aceitas?',
    resposta: 'PIX, cartão de débito, cartão de crédito e dinheiro. As condições são informadas no plano de tratamento.',
  },
  {
    pergunta: 'Atendem urgência de dor de dente?',
    resposta:
      'Casos de dor são encaixados conforme a disponibilidade da agenda do dia. Entre em contato pelo WhatsApp descrevendo o que está sentindo para que o encaixe seja avaliado.',
  },
];

/** Perguntas específicas de convênio — página /dentista-porto-seguro-sorocaba/. */
export const FAQ_CONVENIO: Faq[] = [
  {
    pergunta: 'Quais convênios são atendidos?',
    resposta: 'O consultório atende o convênio Porto Seguro e também atendimento particular.',
  },
  {
    pergunta: 'Preciso de guia ou autorização para ser atendido?',
    resposta:
      'Procedimentos simples costumam ser realizados com a apresentação da carteirinha e documento com foto. Procedimentos que exigem autorização prévia são encaminhados ao convênio, e você é avisado do prazo estimado de retorno.',
  },
  {
    pergunta: 'Tudo o que eu preciso está coberto pelo plano?',
    resposta:
      'Nem sempre. Cada plano tem uma cobertura e carências próprias, e alguns procedimentos — principalmente de estética e de reabilitação — costumam ficar fora do rol coberto. Na avaliação separamos o que o plano cobre do que fica como particular, antes de começar.',
  },
  {
    pergunta: 'Posso misturar convênio e particular no mesmo tratamento?',
    resposta:
      'Sim, e isso é comum. Parte do plano de tratamento pode ser realizada pela cobertura do convênio e parte como particular, com essa divisão explicada no orçamento.',
  },
  {
    pergunta: 'A avaliação inicial também é gratuita para quem tem convênio?',
    resposta:
      'Sim. A primeira avaliação não tem custo tanto para quem vai fazer o tratamento como particular quanto para quem tem Porto Seguro.',
  },
];

/** Perguntas sobre o atendimento aos sábados — página /dentista-sabado-sorocaba/. */
export const FAQ_SABADO: Faq[] = [
  {
    pergunta: 'O consultório atende aos sábados?',
    resposta: 'Sim. O atendimento de sábado é das 9h às 12h, com agendamento prévio.',
  },
  {
    pergunta: 'O atendimento de sábado é feito pelo mesmo dentista?',
    resposta:
      'Sim. Aos sábados quem atende é o Dr. Vitor Molina, o mesmo profissional que atende durante a semana. Não há rodízio de plantonistas.',
  },
  {
    pergunta: 'Dá para fazer a primeira avaliação no sábado?',
    resposta:
      'Sim. A avaliação inicial, sem custo, pode ser marcada no sábado pela manhã, dentro da disponibilidade da agenda.',
  },
  {
    pergunta: 'O convênio Porto Seguro vale no sábado?',
    resposta: 'Vale. O atendimento de sábado segue as mesmas condições dos dias de semana, particular ou Porto Seguro.',
  },
  {
    pergunta: 'Como faço para garantir um horário no sábado?',
    resposta:
      'A manhã de sábado tem menos horários que um dia útil e costuma fechar antes. O caminho mais rápido é enviar mensagem pelo WhatsApp com dois horários de preferência.',
  },
];

/** Perguntas para crianças e famílias. */
export const FAQ_CRIANCAS: Faq[] = [
  {
    pergunta: 'A partir de que idade a criança pode ser atendida?',
    resposta: 'A partir dos 4 anos.',
  },
  {
    pergunta: 'Os pais podem entrar na sala com a criança?',
    resposta:
      'Podem. A primeira consulta da criança costuma ser de adaptação: conhecer o ambiente, o equipamento e o profissional, sem pressa e com o responsável por perto.',
  },
  {
    pergunta: 'A criança precisa de tratamento se o dente é de leite?',
    resposta:
      'Sim, quando há cárie ou infecção. O dente de leite guarda espaço para o permanente e influencia a mastigação e a fala. Perder um dente de leite antes da hora pode gerar falta de espaço na troca.',
  },
];

/** FAQ exibida na home — a mais próxima da dúvida de quem chega pela busca. */
export const FAQ_HOME: Faq[] = FAQ_CONSULTORIO;

/** Todas as perguntas, agrupadas — usadas na página /perguntas-frequentes/. */
export const FAQ_GRUPOS = [
  { id: 'consultorio', titulo: 'O consultório', perguntas: FAQ_CONSULTORIO },
  { id: 'atendimento', titulo: 'Como funciona o atendimento', perguntas: FAQ_ATENDIMENTO },
  { id: 'convenio', titulo: 'Convênio e pagamento', perguntas: FAQ_CONVENIO },
  { id: 'sabado', titulo: 'Horários e sábado', perguntas: FAQ_SABADO },
  { id: 'criancas', titulo: 'Crianças', perguntas: FAQ_CRIANCAS },
];

export const TODAS_AS_FAQS: Faq[] = FAQ_GRUPOS.flatMap((g) => g.perguntas);
