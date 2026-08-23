import type { Artigo } from '../tipos';

export const artigo: Artigo = {
  slug: 'implante-dentario-ou-protocolo-qual-a-diferenca',
  titulo: 'Implante dentário ou protocolo: qual a diferença e quando cada um é indicado',
  tituloSeo: 'Implante ou Protocolo: Qual a Diferença?',
  metaDescricao:
    'Implante dentário repõe um dente; protocolo devolve a arcada inteira sobre implantes. Veja as diferenças, quando cada um é indicado, etapas e prazos — explicado por dentista em Sorocaba.',
  keyword: 'implante dentário Sorocaba',
  keywordsSecundarias: [
    'implante ou protocolo',
    'diferença entre implante e protocolo',
    'protocolo dentário Sorocaba',
    'prótese fixa sobre implante',
    'quantos implantes preciso',
  ],
  categoria: 'Reabilitação',
  resumo:
    'Os dois usam implantes, mas resolvem problemas diferentes: um repõe dentes isolados, o outro reabilita a arcada inteira. Como saber qual é o seu caso.',
  respostaDireta:
    'A diferença entre implante dentário e protocolo está na extensão do que se repõe: o implante unitário substitui um dente perdido, com um pino de titânio e uma coroa por cima; o protocolo é uma prótese fixa que substitui todos os dentes de uma arcada, parafusada sobre quatro a seis implantes. Quem perdeu um ou poucos dentes normalmente é caso de implante; quem perdeu todos os dentes de uma arcada ou usa dentadura é quem costuma ter indicação de protocolo. A definição depende de exame clínico e tomografia.',
  publicadoEm: '2026-08-21',
  atualizadoEm: '2026-08-21',
  tempoLeitura: 8,
  fatos: [
    { rotulo: 'Implante unitário', valor: '1 implante + 1 coroa, para 1 dente perdido' },
    { rotulo: 'Protocolo', valor: 'Prótese fixa de arcada inteira sobre 4 a 6 implantes' },
    { rotulo: 'Exame que define', valor: 'Tomografia computadorizada' },
    { rotulo: 'Tempo médio de tratamento', valor: 'De 4 a 8 meses, conforme o caso' },
    { rotulo: 'Provisório durante a cicatrização', valor: 'Possível na maioria dos casos' },
  ],
  secoes: [
    {
      id: 'o-que-cada-um-resolve',
      titulo: 'O que cada um resolve',
      blocos: [
        {
          tipo: 'p',
          texto:
            'Implante e protocolo costumam ser tratados como se fossem escolhas concorrentes, quando na prática atendem situações diferentes. Os dois partem do mesmo princípio — um pino de titânio instalado no osso, que assume o papel da raiz do dente —, mas o que vai por cima desse pino muda completamente conforme o caso.',
        },
        {
          tipo: 'p',
          texto:
            'No implante unitário, cada dente perdido recebe seu próprio implante e sua própria coroa. É a solução mais próxima do dente natural: cada elemento é independente, é possível passar fio dental entre eles e a higiene é parecida com a de um dente comum.',
        },
        {
          tipo: 'p',
          texto:
            'No protocolo, a lógica se inverte. Em vez de repor dente por dente — o que exigiria muitos implantes e um custo proporcional —, quatro a seis implantes sustentam uma única estrutura que carrega todos os dentes de uma arcada. Essa prótese é parafusada, ou seja, fica fixa: só o dentista a remove, em consulta.',
        },
        {
          tipo: 'tabela',
          cabecalho: ['', 'Implante unitário', 'Protocolo'],
          linhas: [
            ['O que repõe', 'Um dente (ou alguns, isolados)', 'Todos os dentes de uma arcada'],
            ['Nº de implantes', '1 por dente reposto', 'Em geral de 4 a 6 por arcada'],
            ['Prótese', 'Coroa individual', 'Estrutura única parafusada'],
            ['Remoção', 'Fixa, individual', 'Fixa, removida só pelo dentista'],
            ['Higiene', 'Escova e fio dental, como um dente', 'Escova unitufo, passa-fio, irrigador'],
            ['Indicação típica', 'Perda pontual de dentes', 'Perda total da arcada ou uso de dentadura'],
          ],
        },
      ],
    },
    {
      id: 'quando-implante',
      titulo: 'Quando o implante unitário é o caminho',
      blocos: [
        {
          tipo: 'p',
          texto:
            'O implante unitário é indicado quando ainda existem dentes naturais saudáveis na arcada e a perda é pontual. A grande vantagem, além da estética, é a preservação: diferente de uma ponte fixa convencional, o implante não exige desgaste dos dentes vizinhos para se apoiar. Se o dente ao lado está íntegro, ele permanece íntegro.',
        },
        {
          tipo: 'ul',
          itens: [
            'Perda de um dente por cárie extensa, fratura ou trauma',
            'Ausência antiga que fez você mastigar sempre do mesmo lado',
            'Dentes vizinhos saudáveis, que não deveriam ser desgastados para uma ponte',
            'Prótese removível parcial que incomoda, se desloca ou machuca',
            'Espaço entre dentes que começou a permitir a inclinação dos vizinhos',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Há um detalhe que costuma pesar na decisão de não adiar: o osso da região onde o dente foi perdido tende a reabsorver com o tempo, porque deixa de receber estímulo da mastigação. Quanto mais tempo passa, maior a chance de o caso precisar de enxerto antes do implante — o que acrescenta etapas e prazo ao tratamento.',
        },
      ],
    },
    {
      id: 'quando-protocolo',
      titulo: 'Quando o protocolo é o caminho',
      blocos: [
        {
          tipo: 'p',
          texto:
            'O protocolo entra quando a arcada não tem mais como ser reabilitada dente a dente — seja porque todos os dentes já foram perdidos, seja porque os remanescentes não têm condição de permanência, com mobilidade avançada, fraturas ou doença periodontal grave.',
        },
        {
          tipo: 'p',
          texto:
            'A comparação mais útil aqui não é com o implante unitário, e sim com a dentadura. A dentadura se apoia na gengiva e no vácuo; conforme o osso reabsorve, ela perde estabilidade, escorrega ao falar e passa a depender de adesivo. O protocolo transfere a força da mastigação para os implantes ancorados no osso, e isso muda a segurança para morder e para falar em público.',
        },
        {
          tipo: 'ul',
          itens: [
            'Perda total dos dentes de uma arcada, superior ou inferior',
            'Dentadura que escorrega, machuca a gengiva ou atrapalha a fala',
            'Dentes remanescentes sem prognóstico de permanência',
            'Dificuldade de mastigar alimentos comuns com a prótese removível atual',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Vale saber que existe um meio-termo: a overdenture, uma prótese removível que se encaixa por clipes em dois implantes. Ela ganha estabilidade em relação à dentadura comum, envolve menos implantes que o protocolo e continua saindo da boca para a higiene. É uma alternativa discutida na avaliação quando faz sentido para o caso e para o orçamento.',
        },
      ],
    },
    {
      id: 'etapas',
      titulo: 'As etapas, na prática',
      blocos: [
        {
          tipo: 'p',
          texto:
            'A sequência do tratamento é parecida nos dois caminhos, e a maior parte do tempo total não é de cadeira: é de espera pela integração entre osso e implante.',
        },
        {
          tipo: 'ol',
          itens: [
            'Avaliação clínica e tomografia, que mostram o volume ósseo disponível e a posição de estruturas a respeitar.',
            'Planejamento apresentado antes de qualquer procedimento, com número de implantes, etapas, prazos e custo de cada alternativa.',
            'Cirurgia de instalação dos implantes, com anestesia local, no consultório.',
            'Osseointegração — de 3 a 6 meses, em média, conforme a região e a qualidade do osso.',
            'Moldagem e instalação da prótese definitiva, com ajuste de cor, contorno e mordida.',
            'Manutenção periódica, que é o que mais influencia a durabilidade a longo prazo.',
          ],
        },
        {
          tipo: 'callout',
          titulo: 'Você fica sem dente durante o tratamento?',
          itens: [
            'Em implantes unitários na região visível, costuma ser possível usar um provisório.',
            'No protocolo, na maioria dos casos instala-se uma prótese provisória fixa ou adapta-se a prótese atual.',
            'Quando o seu caso for exceção, isso é dito no planejamento — antes de começar, não durante.',
          ],
        },
      ],
    },
    {
      id: 'o-que-influencia-a-decisao',
      titulo: 'O que realmente decide entre um e outro',
      blocos: [
        {
          tipo: 'p',
          texto:
            'A escolha não se resolve pela preferência do paciente nem pelo custo isolado. Três fatores costumam determinar o caminho, e todos eles aparecem na avaliação inicial:',
        },
        {
          tipo: 'ul',
          itens: [
            'Quantos dentes foram perdidos e qual é a condição dos que ficaram — um dente com mobilidade avançada ao lado muda o plano inteiro.',
            'Quanto osso existe, em altura e espessura, o que só a tomografia mostra com precisão. Osso insuficiente não impede o tratamento, mas acrescenta a etapa de enxerto.',
            'Saúde da gengiva e hábitos, com destaque para tabagismo e bruxismo, que influenciam a osseointegração e o desgaste da prótese ao longo dos anos.',
          ],
        },
        {
          tipo: 'p',
          texto:
            'Um princípio ajuda a orientar a conversa: sempre que for clinicamente possível, a alternativa mais conservadora — a que preserva mais estrutura natural — merece ser considerada primeiro. Manter um dente tratável costuma valer mais do que substituí-lo por uma solução mais moderna.',
        },
      ],
    },
    {
      id: 'em-sorocaba',
      titulo: 'Como esse planejamento é feito em Sorocaba',
      blocos: [
        {
          tipo: 'p',
          texto:
            'No consultório do Dr. Vitor Molina, em Sorocaba, a avaliação inicial não tem custo e serve exatamente para essa definição: examinar, pedir a imagem necessária e apresentar os caminhos possíveis com prazo e custo de cada um. O mesmo profissional conduz da cirurgia à prótese e às manutenções, o que evita que o caso se perca entre etapas feitas por pessoas diferentes.',
        },
        {
          tipo: 'p',
          texto:
            'O atendimento é particular ou pelo convênio Porto Seguro, de segunda a sexta das 9h às 18h e aos sábados das 9h às 12h. Quando parte do tratamento tem cobertura do plano e parte não, essa divisão aparece no orçamento antes de começar.',
        },
      ],
    },
  ],
  faq: [
    {
      pergunta: 'Protocolo é a mesma coisa que dentadura fixa?',
      resposta:
        '"Dentadura fixa" é o nome popular. Tecnicamente, o protocolo é uma prótese total fixa parafusada sobre implantes: ela não se apoia na gengiva como a dentadura, e sim nos implantes ancorados no osso.',
    },
    {
      pergunta: 'Quantos implantes preciso para uma arcada inteira?',
      resposta:
        'Em geral de quatro a seis por arcada, definidos pela tomografia conforme o volume ósseo e a região. Repor dente a dente com implantes individuais na arcada inteira raramente é indicado — o custo cresce e a higiene fica mais difícil.',
    },
    {
      pergunta: 'Dá para fazer protocolo embaixo e implantes individuais em cima?',
      resposta:
        'Sim, planos combinados são comuns. O que precisa ser avaliado em conjunto é a mordida: as duas arcadas trabalham juntas, e a solução de uma influencia a força que a outra recebe.',
    },
    {
      pergunta: 'Qual dura mais, implante unitário ou protocolo?',
      resposta:
        'Nos dois casos, o pino de titânio é a parte mais estável, e a prótese é a que sofre desgaste com o tempo. A durabilidade depende muito mais de higiene, saúde da gengiva, bruxismo e manutenção periódica do que do tipo de reabilitação escolhido.',
    },
    {
      pergunta: 'Fumante pode fazer implante ou protocolo?',
      resposta:
        'Pode ser avaliado, mas o tabagismo é um dos fatores mais associados à falha da osseointegração e a problemas na gengiva ao redor dos implantes. Reduzir ou interromper o fumo no período de cicatrização faz diferença real no resultado.',
    },
  ],
  tratamentosRelacionados: ['implante-dentario-sorocaba', 'protocolo-dentario-sorocaba'],
  artigosRelacionados: ['tratamento-de-canal-quando-e-necessario'],
};
