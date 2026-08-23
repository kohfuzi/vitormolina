import type { Tratamento } from './tipos';

/** Tratamentos odontológicos — um por termo de busca foco. */
export const ODONTOLOGIA: Tratamento[] = [
  {
    slug: 'implante-dentario-sorocaba',
    titulo: 'Implante dentário',
    h1: 'Implante dentário em Sorocaba',
    keyword: 'implante dentário Sorocaba',
    keywordsSecundarias: [
      'implante dentário em Sorocaba',
      'implantodontia Sorocaba',
      'colocar implante dentário Sorocaba',
      'implante unitário Sorocaba',
    ],
    resumo:
      'Reposição do dente perdido com pino de titânio integrado ao osso e coroa instalada por cima, do planejamento à manutenção com o mesmo dentista.',
    respostaDireta:
      'O implante dentário é um pino de titânio instalado no osso da mandíbula ou da maxila para substituir a raiz de um dente perdido; sobre ele é fixada uma coroa que devolve mastigação e estética. Em Sorocaba, o Dr. Vitor Molina conduz todas as etapas — avaliação, exame de imagem, cirurgia, prótese e manutenção — em atendimento particular ou pelo convênio Porto Seguro, com a primeira avaliação sem custo.',
    icone: 'implante',
    categoria: 'odontologia',
    procedimento: 'Implante dentário',
    areaInformativa: 'Implantodontia',
    oQueE: [
      'O implante dentário substitui a raiz do dente que foi perdido. É um pino de titânio, material biocompatível, instalado dentro do osso; com o tempo o osso se integra à superfície do pino num processo chamado osseointegração. Só depois dessa integração é que a parte visível — o pilar e a coroa — é instalada.',
      'A diferença prática para uma ponte fixa convencional é que o implante não depende dos dentes vizinhos: nada precisa ser desgastado ao lado. Por isso ele costuma ser a alternativa mais conservadora quando os dentes vizinhos estão íntegros.',
      'Um implante pode repor um dente só, servir de apoio para uma ponte de três elementos ou sustentar uma arcada inteira — nesse último caso, o caminho costuma ser o protocolo sobre implantes.',
    ],
    indicacoes: [
      'Perda de um ou mais dentes, recente ou antiga',
      'Dente com fratura de raiz ou sem condição de restauração',
      'Prótese removível que se desloca, machuca ou incomoda ao falar',
      'Ponte fixa antiga que precisou ser removida',
      'Espaço entre dentes que faz você mastigar sempre de um lado só',
    ],
    comoFunciona: [
      {
        titulo: 'Avaliação e exame de imagem',
        texto:
          'A consulta inicial verifica o estado da gengiva, dos dentes vizinhos e da mordida. A tomografia mostra a altura e a espessura do osso disponível e a posição de estruturas que precisam ser respeitadas, como o nervo alveolar e o seio maxilar.',
      },
      {
        titulo: 'Planejamento e apresentação do plano',
        texto:
          'Antes de qualquer procedimento você recebe o planejamento: quantos implantes, se há necessidade de enxerto, quanto tempo leva cada fase e qual o custo de cada caminho possível.',
      },
      {
        titulo: 'Instalação do implante',
        texto:
          'A cirurgia é feita no consultório, com anestesia local. O pino é instalado na posição planejada e a gengiva é suturada. Na maioria dos casos é possível voltar às atividades no dia seguinte, seguindo as orientações.',
      },
      {
        titulo: 'Osseointegração',
        texto:
          'Período de integração entre osso e implante, que costuma levar de 3 a 6 meses conforme a região e a qualidade óssea. Nesse intervalo pode ser usada uma prótese provisória quando o dente ausente aparece ao sorrir.',
      },
      {
        titulo: 'Moldagem e instalação da coroa',
        texto:
          'Integrado o implante, é feita a moldagem (convencional ou por escaneamento) e a coroa definitiva é confeccionada e instalada sobre o pilar, com ajuste de cor e de contato com os dentes vizinhos.',
      },
      {
        titulo: 'Manutenção',
        texto:
          'Retornos periódicos para checar a gengiva ao redor do implante, o encaixe da mordida e a higiene da região. É a etapa que mais influencia a durabilidade a longo prazo.',
      },
    ],
    cuidados: [
      'Seguir à risca a medicação e as orientações dos primeiros dias após a cirurgia',
      'Alimentação fria e macia nas primeiras 24 a 48 horas',
      'Evitar cigarro — o fumo é um dos fatores mais associados à falha da osseointegração',
      'Escovação suave na região operada, sem abandonar a higiene',
      'Uso diário de fio dental ou escova interdental ao redor da coroa depois de pronta',
      'Comparecer às consultas de manutenção mesmo sem dor ou incômodo',
    ],
    fatos: [
      { rotulo: 'Material do pino', valor: 'Titânio (biocompatível)' },
      { rotulo: 'Anestesia', valor: 'Local, no consultório' },
      { rotulo: 'Tempo de osseointegração', valor: 'Em geral de 3 a 6 meses' },
      { rotulo: 'Exame necessário', valor: 'Tomografia computadorizada' },
      { rotulo: 'Atendimento', valor: 'Particular e Porto Seguro' },
      { rotulo: 'Onde', valor: 'Sorocaba, São Paulo' },
    ],
    faq: [
      {
        pergunta: 'Quanto tempo demora um implante dentário do início ao fim?',
        resposta:
          'Depende do caso. Contando avaliação, cirurgia, osseointegração e instalação da coroa, o tratamento costuma levar de 4 a 8 meses. Casos que precisam de enxerto ósseo levam mais tempo, e isso é informado no planejamento, antes de começar.',
      },
      {
        pergunta: 'A cirurgia de implante dói?',
        resposta:
          'O procedimento é feito com anestesia local, então não se sente dor durante a cirurgia. No pós-operatório é comum haver desconforto e inchaço por alguns dias, controlados com a medicação prescrita. A intensidade varia de pessoa para pessoa.',
      },
      {
        pergunta: 'Quem tem diabetes ou osteoporose pode colocar implante?',
        resposta:
          'Em muitos casos sim, desde que a condição esteja controlada e haja acompanhamento médico. Doenças sistêmicas e medicamentos de uso contínuo — especialmente os da família dos bifosfonatos — precisam ser informados na avaliação, porque mudam o planejamento.',
      },
      {
        pergunta: 'E se eu não tiver osso suficiente?',
        resposta:
          'Existem alternativas: enxerto ósseo, levantamento de seio maxilar ou escolha de implantes com dimensões diferentes. A tomografia mostra o que é possível, e as opções são apresentadas com prazo e custo antes de qualquer decisão.',
      },
      {
        pergunta: 'O implante dentário é coberto pelo Porto Seguro?',
        resposta:
          'A cobertura depende do plano contratado e das carências. Na avaliação verificamos o que o seu plano cobre e o que fica como particular, e você recebe essa informação antes de iniciar o tratamento.',
      },
      {
        pergunta: 'Quanto tempo dura um implante?',
        resposta:
          'Implantes bem instalados e bem mantidos duram muitos anos, mas não existe garantia de permanência: a longevidade depende de higiene, saúde da gengiva, hábitos como o bruxismo e das consultas de manutenção. A parte mais sujeita a desgaste com o tempo é a coroa, não o pino.',
      },
    ],
    relacionados: ['protocolo-dentario-sorocaba', 'tratamento-de-canal-sorocaba'],
  },
  {
    slug: 'protocolo-dentario-sorocaba',
    titulo: 'Protocolo dentário',
    h1: 'Protocolo dentário em Sorocaba',
    keyword: 'protocolo dentário Sorocaba',
    keywordsSecundarias: [
      'protocolo sobre implantes Sorocaba',
      'prótese fixa sobre implante Sorocaba',
      'protocolo superior e inferior Sorocaba',
      'prótese fixa para quem usa dentadura Sorocaba',
    ],
    resumo:
      'Prótese fixa parafusada sobre implantes que devolve a arcada inteira a quem perdeu todos os dentes ou usa prótese removível.',
    respostaDireta:
      'O protocolo dentário é uma prótese fixa que substitui todos os dentes de uma arcada, parafusada sobre implantes instalados no osso — diferente da dentadura, ela não sai da boca e não depende de adesivo. Em Sorocaba, o planejamento, a cirurgia, a prótese e as manutenções ficam com o mesmo profissional, o Dr. Vitor Molina, em atendimento particular ou Porto Seguro.',
    icone: 'protocolo',
    categoria: 'odontologia',
    procedimento: 'Prótese total fixa sobre implantes (protocolo)',
    areaInformativa: 'Implantodontia e prótese dentária',
    oQueE: [
      'O protocolo é uma prótese de arcada completa sustentada por implantes — em geral de quatro a seis por arcada. Ela é parafusada, ou seja, fica fixa na boca e só o dentista remove, em consulta, para limpeza e revisão.',
      'A comparação mais comum é com a dentadura. A dentadura se apoia na gengiva e no vácuo, escorrega ao falar e perde estabilidade conforme o osso reabsorve. O protocolo transfere a força da mastigação para os implantes, o que muda a segurança para morder e para falar.',
      'Existe também a overdenture, uma prótese removível que se encaixa em dois implantes por meio de clipes. Ela costuma custar menos e ainda sai da boca para a higiene; é uma alternativa intermediária discutida na avaliação quando faz sentido para o caso.',
    ],
    indicacoes: [
      'Perda de todos os dentes de uma arcada, superior ou inferior',
      'Dentadura que escorrega, machuca ou atrapalha a fala',
      'Dentes remanescentes sem condição de recuperação (mobilidade, fraturas, doença periodontal avançada)',
      'Dificuldade de mastigar alimentos comuns com a prótese removível atual',
      'Reabsorção óssea que compromete o encaixe da dentadura',
    ],
    comoFunciona: [
      {
        titulo: 'Avaliação e tomografia',
        texto:
          'Análise da condição da gengiva, do volume ósseo e da relação entre as arcadas. A tomografia define quantos implantes cabem, em que posição e com qual inclinação.',
      },
      {
        titulo: 'Planejamento do caso completo',
        texto:
          'Você recebe o plano com o número de implantes, o tipo de prótese, o tempo de cada etapa e o custo de cada alternativa — inclusive as mais conservadoras, quando forem viáveis.',
      },
      {
        titulo: 'Extrações e instalação dos implantes',
        texto:
          'Quando ainda há dentes sem condição de permanência, as extrações e a instalação dos implantes costumam ser feitas na mesma sessão, com anestesia local.',
      },
      {
        titulo: 'Prótese provisória',
        texto:
          'Em boa parte dos casos é possível instalar uma prótese provisória fixa ou adaptar a prótese existente, para que ninguém fique sem dentes durante a cicatrização.',
      },
      {
        titulo: 'Prótese definitiva',
        texto:
          'Depois da osseointegração são feitas as moldagens e as provas de estética e de mordida. A prótese definitiva é então parafusada sobre os implantes.',
      },
      {
        titulo: 'Manutenção periódica',
        texto:
          'O protocolo é desparafusado periodicamente no consultório para limpeza profunda, checagem dos parafusos e avaliação da gengiva. Essa rotina é parte do tratamento, não um extra.',
      },
    ],
    cuidados: [
      'Higienizar diariamente por baixo da prótese com escova unitufo, irrigador ou passa-fio',
      'Manter as consultas de manutenção — é nelas que folgas de parafuso são detectadas cedo',
      'Evitar morder alimentos muito duros diretamente com a região anterior da prótese',
      'Informar imediatamente se sentir mobilidade, mau cheiro ou sangramento na gengiva',
      'Não fumar durante a fase de cicatrização',
    ],
    fatos: [
      { rotulo: 'Tipo de prótese', valor: 'Fixa, parafusada sobre implantes' },
      { rotulo: 'Implantes por arcada', valor: 'Em geral de 4 a 6' },
      { rotulo: 'Removível pelo paciente', valor: 'Não — só o dentista remove' },
      { rotulo: 'Provisório durante a cicatrização', valor: 'Sim, na maioria dos casos' },
      { rotulo: 'Atendimento', valor: 'Particular e Porto Seguro' },
      { rotulo: 'Onde', valor: 'Sorocaba, São Paulo' },
    ],
    faq: [
      {
        pergunta: 'Qual a diferença entre protocolo e dentadura?',
        resposta:
          'A dentadura é removível e se apoia sobre a gengiva. O protocolo é parafusado sobre implantes e fica fixo: não escorrega ao falar, não usa adesivo e transmite a força da mastigação para o osso por meio dos implantes.',
      },
      {
        pergunta: 'Fico sem dentes durante o tratamento?',
        resposta:
          'Na maior parte dos casos, não. É possível instalar uma prótese provisória fixa ou adaptar a prótese atual durante a fase de cicatrização. Se o seu caso for uma exceção, isso é dito no planejamento, antes de começar.',
      },
      {
        pergunta: 'Quantos implantes são necessários?',
        resposta:
          'Costuma variar de quatro a seis por arcada, conforme o volume ósseo, a região e a força de mastigação. O número exato sai da tomografia e aparece no plano de tratamento.',
      },
      {
        pergunta: 'Como se limpa um protocolo?',
        resposta:
          'A higiene é feita por baixo da prótese, no espaço entre ela e a gengiva, com escova unitufo, passa-fio e, se indicado, irrigador. Além disso, o dentista remove a prótese periodicamente no consultório para limpeza profunda.',
      },
      {
        pergunta: 'Dá para fazer protocolo só na arcada de baixo?',
        resposta:
          'Sim. É comum tratar apenas a arcada inferior, onde a dentadura costuma ter menos estabilidade, e manter em cima outra solução — desde que a mordida entre as arcadas seja avaliada em conjunto.',
      },
    ],
    relacionados: ['implante-dentario-sorocaba', 'tratamento-de-canal-sorocaba'],
  },
  {
    slug: 'tratamento-de-canal-sorocaba',
    titulo: 'Tratamento de canal',
    h1: 'Tratamento de canal em Sorocaba',
    keyword: 'tratamento de canal Sorocaba',
    keywordsSecundarias: [
      'canal dentário Sorocaba',
      'endodontia Sorocaba',
      'dor de dente Sorocaba',
      'quantas sessões tratamento de canal',
    ],
    resumo:
      'Remoção da polpa inflamada ou infectada de dentro do dente, limpeza dos canais e selamento — o caminho para manter o dente em vez de extrair.',
    respostaDireta:
      'O tratamento de canal, ou endodontia, remove a polpa inflamada ou infectada de dentro do dente, limpa e desinfeta os canais da raiz e os sela, permitindo manter o dente natural em vez de extraí-lo. Em Sorocaba, o atendimento é feito pelo Dr. Vitor Molina, com anestesia local, do diagnóstico até a restauração final, em atendimento particular ou Porto Seguro.',
    icone: 'canal',
    categoria: 'odontologia',
    procedimento: 'Tratamento endodôntico (canal)',
    areaInformativa: 'Endodontia',
    oQueE: [
      'Dentro de cada dente existe um tecido mole — a polpa — formado por nervos e vasos sanguíneos. Quando uma cárie profunda, uma trinca ou um trauma atinge esse tecido, ele inflama ou infecciona. É aí que aparece a dor que incomoda à noite, o incômodo com o quente ou o frio e, às vezes, o inchaço na gengiva.',
      'O tratamento de canal remove essa polpa, limpa os canais da raiz com instrumentos e soluções desinfetantes e depois preenche esse espaço com um material selador. O dente segue no lugar, sustentado pela raiz, mas sem o tecido inflamado.',
      'Depois do canal, o dente precisa ser reconstruído. Em dentes posteriores, que recebem carga de mastigação alta, a indicação frequente é uma coroa ou uma restauração que proteja as paredes remanescentes contra fratura.',
    ],
    indicacoes: [
      'Dor espontânea, que aparece sem estímulo ou piora ao deitar',
      'Sensibilidade prolongada ao quente ou ao frio, que demora a passar',
      'Cárie profunda que alcançou a polpa do dente',
      'Fístula (a "bolinha" na gengiva perto da raiz) ou inchaço na região',
      'Dente escurecido após trauma',
      'Dente com canal antigo que voltou a doer (retratamento)',
    ],
    comoFunciona: [
      {
        titulo: 'Diagnóstico',
        texto:
          'Exame clínico, testes de sensibilidade e radiografia para confirmar se o problema é mesmo pulpar, identificar qual dente é a origem da dor e checar a região ao redor da raiz.',
      },
      {
        titulo: 'Anestesia e isolamento',
        texto:
          'Anestesia local e isolamento absoluto com lençol de borracha, que mantém o campo seco e impede que a saliva contamine o interior do canal.',
      },
      {
        titulo: 'Abertura e remoção da polpa',
        texto:
          'Acesso à câmara do dente e remoção do tecido inflamado ou infectado, o que costuma aliviar a dor já na primeira sessão.',
      },
      {
        titulo: 'Limpeza e modelagem dos canais',
        texto:
          'Os canais são medidos, preparados com instrumentos específicos e irrigados com soluções desinfetantes até ficarem limpos e com forma adequada ao preenchimento.',
      },
      {
        titulo: 'Obturação dos canais',
        texto:
          'Os canais são preenchidos e selados. A radiografia final confirma que o preenchimento chegou ao comprimento correto de cada raiz.',
      },
      {
        titulo: 'Restauração do dente',
        texto:
          'O dente é reconstruído. Conforme a quantidade de estrutura que sobrou e a carga de mastigação, a indicação pode ser restauração direta ou coroa.',
      },
    ],
    cuidados: [
      'Evitar mastigar do lado tratado até a restauração definitiva estar pronta',
      'Tomar a medicação prescrita nos horários indicados',
      'Manter a higiene normal, inclusive na região tratada',
      'Voltar ao consultório se a dor aumentar em vez de diminuir depois de 2 ou 3 dias',
      'Não adiar a coroa quando ela for indicada — dente sem proteção pode fraturar',
    ],
    fatos: [
      { rotulo: 'Outro nome', valor: 'Endodontia' },
      { rotulo: 'Sessões mais comuns', valor: 'De 1 a 3, conforme o dente' },
      { rotulo: 'Anestesia', valor: 'Local' },
      { rotulo: 'Depois do canal', valor: 'Restauração ou coroa' },
      { rotulo: 'Atendimento', valor: 'Particular e Porto Seguro' },
      { rotulo: 'Onde', valor: 'Sorocaba, São Paulo' },
    ],
    faq: [
      {
        pergunta: 'Quantas sessões leva um tratamento de canal?',
        resposta:
          'Costuma variar de uma a três sessões. Dentes da frente, com um canal só, tendem a ser resolvidos mais rápido; molares, com três ou quatro canais, ou casos com infecção ativa, geralmente exigem mais de uma sessão.',
      },
      {
        pergunta: 'O tratamento de canal dói?',
        resposta:
          'Durante o procedimento o dente está anestesiado. O que mais incomoda costuma ser a dor que antecede o tratamento — e ela geralmente diminui logo após a remoção da polpa. Nos dias seguintes pode haver sensibilidade ao morder, controlada com a medicação prescrita.',
      },
      {
        pergunta: 'Dá para salvar o dente ou é melhor extrair?',
        resposta:
          'Sempre que houver estrutura suficiente e a raiz estiver íntegra, manter o dente natural é a alternativa mais conservadora. A extração entra em cena quando há fratura de raiz ou perda muito grande de estrutura. Essa comparação é feita na avaliação, com radiografia, antes de decidir.',
      },
      {
        pergunta: 'Dente com canal escurece?',
        resposta:
          'Pode escurecer com o tempo, principalmente em dentes anteriores. Existem alternativas para lidar com isso, como clareamento interno ou restauração estética, avaliadas caso a caso.',
      },
      {
        pergunta: 'Preciso de coroa depois do canal?',
        resposta:
          'Nem sempre, mas é frequente em dentes posteriores. Sem a polpa e com perda de estrutura, o dente fica mais sujeito a fratura, e a coroa distribui a força da mastigação. A indicação depende de quanto de dente sadio restou.',
      },
    ],
    relacionados: ['implante-dentario-sorocaba', 'protocolo-dentario-sorocaba'],
  },
  {
    slug: 'alinhador-invisivel-sorocaba',
    titulo: 'Alinhador invisível',
    h1: 'Alinhador invisível em Sorocaba',
    keyword: 'alinhador invisível Sorocaba',
    keywordsSecundarias: [
      'aparelho invisível Sorocaba',
      'alinhador transparente Sorocaba',
      'ortodontia sem aparelho fixo Sorocaba',
      'aparelho transparente removível Sorocaba',
    ],
    resumo:
      'Placas transparentes removíveis, trocadas em sequência, que movimentam os dentes sem bráquetes e sem fio metálico.',
    respostaDireta:
      'O alinhador invisível é um conjunto de placas transparentes removíveis, feitas sob medida a partir de um escaneamento digital e trocadas em sequência para movimentar os dentes até a posição planejada — sem bráquetes nem fio metálico. Em Sorocaba, o planejamento digital e o acompanhamento mês a mês são feitos pelo Dr. Vitor Molina, com plano e prazo apresentados antes de começar.',
    icone: 'alinhador',
    categoria: 'odontologia',
    procedimento: 'Tratamento ortodôntico com alinhadores transparentes',
    areaInformativa: 'Ortodontia',
    oQueE: [
      'Cada alinhador é uma placa fina de material transparente que encaixa sobre a arcada. A sequência de placas é calculada a partir de um planejamento digital: cada uma aplica um movimento pequeno, e a troca periódica leva os dentes gradualmente à posição final.',
      'A diferença prática em relação ao aparelho fixo é que o alinhador sai da boca para comer e escovar os dentes. Isso facilita a higiene e não impõe restrição alimentar — em troca, exige disciplina: o uso recomendado costuma ser de 20 a 22 horas por dia.',
      'Nem todo caso é resolvível com alinhador. Movimentações mais complexas, correções severas de mordida e casos com indicação cirúrgica seguem pedindo aparelho fixo. Essa avaliação é feita antes, não no meio do tratamento.',
    ],
    indicacoes: [
      'Apinhamento leve a moderado (dentes tortos ou "amontoados")',
      'Espaços entre os dentes (diastemas)',
      'Recidiva depois de tratamento ortodôntico anterior, quando a contenção deixou de ser usada',
      'Preparo ortodôntico antes de prótese, implante ou tratamento estético',
      'Adulto que precisa de correção mas não quer aparelho metálico aparente',
    ],
    comoFunciona: [
      {
        titulo: 'Avaliação e documentação',
        texto:
          'Exame clínico, fotos, radiografias e escaneamento digital das arcadas. É essa documentação que mostra se o caso tem indicação para alinhador ou para aparelho fixo.',
      },
      {
        titulo: 'Planejamento digital',
        texto:
          'A simulação mostra a sequência de movimentos e a posição final prevista dos dentes, além do número estimado de placas e do prazo do tratamento.',
      },
      {
        titulo: 'Entrega e ativação',
        texto:
          'Na instalação são colados os attachments (pequenos relevos de resina que dão ponto de apoio aos movimentos) e você recebe as primeiras placas com as orientações de uso e de troca.',
      },
      {
        titulo: 'Trocas e acompanhamento',
        texto:
          'A troca das placas segue o intervalo definido no plano, com consultas de acompanhamento para conferir se os dentes estão respondendo conforme o planejado e ajustar o que for necessário.',
      },
      {
        titulo: 'Finalização e contenção',
        texto:
          'Atingida a posição planejada, os attachments são removidos e entra a contenção — fixa, removível ou as duas — para manter o resultado. Sem contenção, os dentes tendem a voltar.',
      },
    ],
    cuidados: [
      'Usar as placas de 20 a 22 horas por dia, retirando só para comer e escovar',
      'Escovar os dentes antes de recolocar o alinhador',
      'Beber apenas água com a placa na boca — líquidos quentes deformam o material',
      'Guardar o alinhador sempre no estojo (guardanapo de mesa é o caminho mais curto para perdê-lo)',
      'Higienizar as placas com escova macia e água fria, sem pasta abrasiva',
      'Usar a contenção pelo tempo indicado depois do tratamento',
    ],
    fatos: [
      { rotulo: 'Material', valor: 'Placa termoplástica transparente' },
      { rotulo: 'Removível', valor: 'Sim, pelo paciente' },
      { rotulo: 'Uso diário recomendado', valor: '20 a 22 horas' },
      { rotulo: 'Restrição alimentar', valor: 'Nenhuma (o alinhador sai para comer)' },
      { rotulo: 'Depois do tratamento', valor: 'Contenção é obrigatória' },
      { rotulo: 'Onde', valor: 'Sorocaba, São Paulo' },
    ],
    faq: [
      {
        pergunta: 'O alinhador invisível funciona igual ao aparelho fixo?',
        resposta:
          'Para apinhamentos leves e moderados e fechamento de espaços, os dois caminhos costumam levar a resultados comparáveis. Para movimentações complexas e correções severas de mordida, o aparelho fixo ainda tem indicação mais previsível. A escolha vem da documentação do seu caso.',
      },
      {
        pergunta: 'Quanto tempo dura o tratamento com alinhadores?',
        resposta:
          'Varia conforme a complexidade — de poucos meses em casos simples a mais de um ano em casos extensos. O prazo estimado aparece no planejamento digital antes de você decidir, e depende diretamente do uso diário das placas.',
      },
      {
        pergunta: 'O alinhador aparece quando eu falo?',
        resposta:
          'As placas são transparentes e discretas, mas não invisíveis: de perto é possível notar. Os attachments de resina também ficam visíveis de perto, na cor do dente.',
      },
      {
        pergunta: 'Posso comer com o alinhador?',
        resposta:
          'Não. O alinhador sai da boca para comer e para beber qualquer coisa que não seja água. Isso protege a placa de manchas e deformações e evita acúmulo de alimento por baixo.',
      },
      {
        pergunta: 'E se eu perder uma placa?',
        resposta:
          'Avise o consultório assim que perceber. Conforme o estágio do tratamento, a orientação pode ser voltar à placa anterior ou seguir para a próxima até a reposição. Ficar sem usar é o que mais atrasa o tratamento.',
      },
    ],
    relacionados: ['implante-dentario-sorocaba', 'harmonizacao-facial-sorocaba'],
  },
];
