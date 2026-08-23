import type { Artigo } from '../tipos';

export const artigo: Artigo = {
  slug: 'tratamento-de-canal-quando-e-necessario',
  titulo: 'Tratamento de canal: quando é necessário, quantas sessões leva e o que esperar',
  tituloSeo: 'Tratamento de Canal: Quantas Sessões e Como É | Sorocaba',
  metaDescricao:
    'Sinais de que o dente precisa de canal, quantas sessões o tratamento leva, como é feito passo a passo e por que a coroa depois costuma ser indicada. Sorocaba, SP.',
  keyword: 'tratamento de canal Sorocaba',
  keywordsSecundarias: [
    'quantas sessões tratamento de canal',
    'tratamento de canal dói',
    'endodontia Sorocaba',
    'dor de dente forte à noite',
    'preciso de coroa depois do canal',
  ],
  categoria: 'Endodontia',
  resumo:
    'A dor que piora deitado, a sensibilidade que não passa e a bolinha na gengiva são sinais diferentes do mesmo problema. O que o tratamento faz, quanto tempo leva e o que vem depois.',
  respostaDireta:
    'O tratamento de canal é necessário quando a polpa do dente — o tecido com nervos e vasos que fica no interior dele — está inflamada ou infectada, geralmente por cárie profunda, trinca ou trauma. Ele leva de uma a três sessões, conforme o número de canais do dente e a presença de infecção, e é feito com anestesia local. Depois do canal, o dente precisa ser restaurado, e em dentes posteriores a indicação frequente é uma coroa para evitar fratura.',
  publicadoEm: '2026-08-21',
  atualizadoEm: '2026-08-21',
  tempoLeitura: 7,
  fatos: [
    { rotulo: 'Nome técnico', valor: 'Tratamento endodôntico' },
    { rotulo: 'Sessões mais comuns', valor: 'De 1 a 3' },
    { rotulo: 'Anestesia', valor: 'Local' },
    { rotulo: 'Objetivo', valor: 'Manter o dente natural em vez de extrair' },
    { rotulo: 'Depois do canal', valor: 'Restauração ou coroa' },
  ],
  secoes: [
    {
      id: 'o-que-e',
      titulo: 'O que o tratamento de canal faz, de verdade',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Dentro de cada dente há um espaço ocupado por um tecido mole, a polpa, formado por nervos e vasos sanguíneos. Ela é o que dá sensibilidade ao dente — a percepção de quente, frio e pressão. Quando uma cárie avança até esse tecido, ou quando uma trinca ou uma pancada o atinge, a polpa inflama.',
        },
        {
          tipo: 'p',
          texto:
            'O problema é que ela está confinada dentro de paredes rígidas. Um tecido inflamado incha, e sem espaço para inchar, a pressão interna aumenta — é exatamente isso que produz aquela dor que parece pulsar e que fica pior quando a pessoa se deita, porque o fluxo sanguíneo para a cabeça aumenta nessa posição.',
        },
        {
          tipo: 'p',
          texto:
            'O tratamento remove esse tecido, limpa e desinfeta os canais que percorrem cada raiz e os preenche com um material selador. O dente permanece na boca, sustentado pela raiz, mas sem a polpa. É por isso que ele deixa de responder ao quente e ao frio depois do tratamento — a estrutura continua ali, a sensibilidade interna é que não.',
        },
      ],
    },
    {
      id: 'sinais',
      titulo: 'Os sinais de que pode ser caso de canal',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Nem toda dor de dente é caso de canal, e — o que confunde mais — nem todo caso de canal dói. Estes são os sinais que costumam levar ao diagnóstico:',
        },
        {
          tipo: 'ul',
          itens: [
            'Dor espontânea, que aparece sem nenhum estímulo e piora ao deitar.',
            'Sensibilidade ao quente ou ao frio que demora a passar depois que o estímulo acabou — a sensibilidade que passa em segundos costuma ter outra causa.',
            'Dor ao morder ou ao encostar o dente, sinal de que a inflamação atingiu a região ao redor da raiz.',
            'Uma "bolinha" na gengiva perto da raiz, que às vezes drena e alivia a dor — é uma fístula, e o alívio não significa cura.',
            'Dente que escureceu depois de uma pancada, mesmo sem dor nenhuma.',
            'Dente com canal antigo que voltou a incomodar, situação em que se avalia o retratamento.',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Um ponto importante: a dor pode desaparecer sozinha. Isso costuma significar que a polpa necrosou, não que o problema se resolveu — e a infecção segue avançando em silêncio na direção do osso. Sumiço da dor não é alta.',
        },
      ],
    },
    {
      id: 'como-e-feito',
      titulo: 'Como é feito, sessão por sessão',
      blocos: [
        {
          tipo: 'ol',
          itens: [
            'Diagnóstico: exame clínico, testes de sensibilidade e radiografia para confirmar qual dente é a origem da dor e o que está acontecendo ao redor da raiz.',
            'Anestesia local e isolamento absoluto com lençol de borracha, que mantém o campo seco e impede que a saliva contamine o interior do canal.',
            'Abertura do dente e remoção da polpa inflamada ou infectada — a etapa que costuma aliviar a dor já na primeira sessão.',
            'Medição, preparo e irrigação dos canais com soluções desinfetantes, até que estejam limpos e com forma adequada ao preenchimento.',
            'Obturação: os canais são preenchidos e selados, e a radiografia final confirma que o material chegou ao comprimento correto de cada raiz.',
            'Restauração do dente, com restauração direta ou coroa, conforme a estrutura que restou.',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Entre uma sessão e outra, quando o tratamento não é concluído em uma só, o dente fica com um curativo interno e um selamento provisório. Se esse provisório soltar, é preciso voltar ao consultório — o canal aberto se recontamina.',
        },
      ],
    },
    {
      id: 'quantas-sessoes',
      titulo: 'Quantas sessões leva',
      blocos: [
        {
          tipo: 'p',
          texto:
            'A resposta curta é de uma a três. A resposta útil depende de dois fatores: quantos canais o dente tem e se existe infecção instalada.',
        },
        {
          tipo: 'tabela',
          cabecalho: ['Situação', 'Sessões, em média'],
          linhas: [
            ['Dente da frente, um canal, sem infecção', 'Costuma ser resolvido em uma sessão'],
            ['Pré-molar, um ou dois canais', 'Uma a duas sessões'],
            ['Molar, três ou quatro canais', 'Geralmente mais de uma sessão'],
            ['Qualquer dente com infecção ativa ou abscesso', 'Duas ou mais, com medicação intracanal'],
            ['Retratamento de canal antigo', 'Mais sessões — é preciso remover o material anterior'],
          ],
        },
        {
          tipo: 'p',
          texto:
            'Casos com infecção costumam pedir uma etapa a mais: um medicamento é deixado dentro do canal por alguns dias para reduzir a carga bacteriana antes do selamento definitivo. Apressar essa fase aumenta a chance de o problema voltar meses depois.',
        },
      ],
    },
    {
      id: 'depois',
      titulo: 'O que vem depois do canal',
      blocos: [
        {
          tipo: 'p',
          texto:
            'A parte que mais se negligencia é justamente a que define se o tratamento vai durar. Um dente tratado endodonticamente perdeu estrutura interna — pela cárie que causou o problema e pela abertura necessária ao tratamento — e fica mais sujeito a fratura, principalmente nos dentes de trás, que recebem a maior carga de mastigação.',
        },
        {
          tipo: 'callout',
          titulo: 'Cuidados nos primeiros dias',
          itens: [
            'Evitar mastigar do lado tratado até a restauração definitiva ficar pronta',
            'Tomar a medicação prescrita nos horários indicados',
            'Manter a higiene normal, inclusive na região tratada',
            'Voltar ao consultório se a dor aumentar em vez de diminuir depois de 2 ou 3 dias',
            'Não adiar a coroa quando ela for indicada',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Sensibilidade ao morder por alguns dias é esperada: o ligamento ao redor da raiz também estava inflamado e leva um tempo para se acomodar. O que não é esperado é dor crescente, inchaço ou febre — nesses casos, a orientação é retornar.',
        },
      ],
    },
    {
      id: 'canal-ou-extracao',
      titulo: 'Canal ou extração: como essa decisão é tomada',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Sempre que houver estrutura suficiente e a raiz estiver íntegra, manter o dente natural é a alternativa mais conservadora — e costuma ser a mais barata no total, considerando que a extração cria a necessidade de repor o dente depois, com implante ou prótese.',
        },
        {
          tipo: 'p',
          texto:
            'A extração passa a ser o caminho mais sensato quando há fratura de raiz, perda muito extensa de estrutura ou comprometimento do suporte ósseo ao redor do dente. Essa comparação se faz com radiografia na mão, na avaliação, antes de qualquer decisão — e as duas opções devem ser apresentadas com prazo e custo.',
        },
      ],
    },
    {
      id: 'em-sorocaba',
      titulo: 'Atendimento em Sorocaba',
      blocos: [
        {
          tipo: 'p',
          texto:
            'No consultório do Dr. Vitor Molina, em Sorocaba, o tratamento de canal é conduzido pelo mesmo profissional do diagnóstico até a restauração final, em atendimento particular ou pelo convênio Porto Seguro. Casos de dor são encaixados conforme a disponibilidade da agenda do dia.',
        },
        {
          tipo: 'p',
          texto:
            'O atendimento acontece de segunda a sexta das 9h às 18h e aos sábados das 9h às 12h, e a primeira avaliação não tem custo. Se você está com dor agora, descreva o que está sentindo pelo WhatsApp para que o encaixe seja avaliado.',
        },
      ],
    },
  ],
  faq: [
    {
      pergunta: 'Tratamento de canal dói?',
      resposta:
        'Durante o procedimento o dente está anestesiado. A dor que costuma incomodar é a que antecede o tratamento, e ela geralmente diminui logo após a remoção da polpa. Nos dias seguintes pode haver sensibilidade ao morder, controlada com a medicação prescrita.',
    },
    {
      pergunta: 'Posso trabalhar no mesmo dia?',
      resposta:
        'Na maioria dos casos, sim. A anestesia leva algumas horas para passar e é comum haver sensibilidade ao morder, mas não costuma haver impedimento para a rotina normal.',
    },
    {
      pergunta: 'Dente com canal pode doer de novo?',
      resposta:
        'Pode, e nesse caso é preciso reavaliar. As causas mais comuns são canal acessório não tratado, recontaminação por infiltração da restauração ou fratura. A conduta pode ser retratamento, cirurgia paraendodôntica ou, em último caso, extração.',
    },
    {
      pergunta: 'Preciso mesmo de coroa depois do canal?',
      resposta:
        'Nem sempre, mas é frequente em dentes posteriores. Sem a polpa e com perda de estrutura, o dente fica mais sujeito a fratura, e a coroa distribui a força da mastigação. A indicação depende de quanto de dente sadio restou.',
    },
    {
      pergunta: 'Tratamento de canal é coberto pelo Porto Seguro?',
      resposta:
        'O tratamento endodôntico costuma estar no rol de procedimentos cobertos, mas isso depende do plano contratado e das carências. Na avaliação verificamos o que o seu plano cobre e o que fica como particular.',
    },
    {
      pergunta: 'A dor sumiu sozinha. Ainda preciso tratar?',
      resposta:
        'Provavelmente sim. O desaparecimento da dor costuma indicar que a polpa necrosou, e a infecção continua avançando em direção ao osso sem sintomas. É um dos motivos pelos quais casos silenciosos chegam mais graves ao consultório.',
    },
  ],
  tratamentosRelacionados: ['tratamento-de-canal-sorocaba', 'implante-dentario-sorocaba'],
  artigosRelacionados: ['implante-dentario-ou-protocolo-qual-a-diferenca'],
};
