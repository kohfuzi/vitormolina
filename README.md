# Dr. Vitor Molina — site (Astro, 100% estático)

Site institucional do consultório do Dr. Vitor Molina, em Sorocaba/SP.
Gera **apenas HTML, CSS e imagens** — sem servidor, sem banco de dados e sem PHP.
Pode ser hospedado de graça (Cloudflare Pages, Netlify, Vercel ou GitHub Pages).

---

## 1. Comandos

```bash
npm install        # uma vez
npm run dev        # servidor local em http://localhost:4321
npm run build      # gera o site em dist/
npm run preview    # serve o dist/ para conferir antes de publicar
npm run auditar    # build + auditoria de SEO técnico (títulos, schema, links)
npm run imagens    # regera og.png e os ícones a partir de public/logo.jpg
```

---

## 2. ⚠️ Preencher antes de publicar

Tudo está centralizado em **`src/data/site.ts`**. No topo do arquivo há o objeto `PENDENTE`:
enquanto um item estiver `true`, o dado correspondente **não é publicado nos dados estruturados**
(Schema.org) nem no `llms.txt`. Isso é proposital — informação inventada em dados estruturados
prejudica o ranqueamento e é infração ética.

| Preencher | Onde | Depois disso |
|---|---|---|
| Domínio final | `SITE.url` | trocar `PENDENTE.dominio` para `false` |
| Rua, número, complemento, bairro e CEP | `NAP` | `PENDENTE.endereco = false` |
| Telefone fixo, WhatsApp e e-mail | `NAP.telefone`, `NAP.telefoneLink`, `NAP.whatsapp`, `NAP.email` | `PENDENTE.telefone = false` |
| Latitude/longitude e link do Google Maps | `NAP.latitude`, `NAP.longitude`, `NAP.mapsUrl` | `PENDENTE.geo = false` |
| **CRO-SP do Dr. Vitor Molina** | `DENTISTA.cro` e `DENTISTA.croNumero` | `PENDENTE.cro = false` |
| Instagram e Perfil da Empresa no Google | `NAP.instagram`, `NAP.gbpUrl` | `PENDENTE.redes = false` |

> O CRO é **obrigatório** em publicidade odontológica (Resolução CFO 196/2019). Enquanto
> `PENDENTE.cro` for `true`, o número não aparece em lugar nenhum do site — nem no rodapé,
> nem na assinatura dos artigos, nem no schema.

Se o Dr. Vitor tiver **especialidade registrada no CRO** (ex.: Implantodontia, Ortodontia,
Harmonização Orofacial), inclua em `DENTISTA.especialidadesRegistradas`. Sem registro, o site
trata o assunto como conteúdo informativo — nunca como especialidade anunciada.

### Logo

`public/logo.jpg` é o arquivo apontado na criação do projeto (150×150, vindo da pasta
`dentalrecover`). Para trocar: substitua o arquivo mantendo o nome e rode `npm run imagens`
para regerar a imagem de compartilhamento e os ícones.

---

## 3. Estrutura

```
src/
  data/              ← FONTE ÚNICA DA VERDADE (só isso precisa ser editado no dia a dia)
    site.ts            NAP, horário, atendimento, menu, aviso ético
    tipos.ts           tipos compartilhados
    tratamentos.ts     junta odontologia + estética
    tratamentos-odontologia.ts
    tratamentos-estetica.ts
    paginas-foco.ts    páginas de convênio e de sábado
    artigos.ts         índice dos artigos
    artigos/*.ts       um arquivo por artigo
    faq.ts             banco de perguntas frequentes
    geo.ts             blocos de resposta direta para IA generativa
  lib/
    seo.ts             URLs absolutas, título, meta description, datas
    schema.ts          Schema.org em @graph com @id
  components/        blocos reutilizáveis (.astro)
  layouts/
    BaseLayout.astro   <head> completo: canonical, OG, hreflang, JSON-LD
  pages/             rotas do site
  styles/global.css  CSS único, sem framework
public/              logo, ícones, og.png, manifest
scripts/
  gerar-imagens.mjs  gera og.png e ícones
  auditar.mjs        auditoria de SEO do dist/
```

**Regra:** nenhuma página tem texto factual escrito direto no HTML. Tudo vem de `src/data/`.
Assim o horário, o convênio e o telefone mudam em um lugar só e se propagam para o site inteiro,
para o `sitemap.xml`, para o `llms.txt` e para o Schema.org.

---

## 4. Como adicionar conteúdo

**Novo artigo** (a seção começa com 3):

1. Crie `src/data/artigos/meu-artigo.ts` copiando a estrutura de um existente.
2. Importe e adicione na lista em `src/data/artigos.ts`.

A rota, o card no hub, o índice interno, o schema `Article`, o `sitemap.xml`, o `llms.txt` e os
links internos são gerados automaticamente.

**Novo tratamento:** adicione um objeto em `tratamentos-odontologia.ts` ou `tratamentos-estetica.ts`.
A página `/tratamentos/[slug]/` passa a existir sozinha.

---

## 5. SEO e GEO implementados

**SEO técnico**
- HTML estático, CSS único e inline quando pequeno, zero JavaScript de layout
- `<title>` e meta description únicos por página, dentro do limite de exibição
- Canonical em todas as páginas, `hreflang` pt-BR + x-default
- `robots`: `max-image-preview:large`, `max-snippet:-1`
- `sitemap-index.xml` com prioridade por valor de busca (home 1.0, tratamentos 0.9, artigos 0.7)
- `robots.txt` apontando o sitemap
- Open Graph e Twitter Card com imagem 1200×630 gerada com a marca
- Web manifest, favicon SVG e apple-touch-icon
- Breadcrumbs visuais + `BreadcrumbList`
- Um H1 por página, hierarquia H2/H3 correta, âncoras com `id`
- Links internos densos entre tratamento ↔ artigo ↔ página de convênio/sábado

**SEO local**
- `@type: Dentist` com horário real de segunda a sábado
- `areaServed` com Sorocaba e cidades da região
- `geo.region`, `geo.placename` e `ICBM` no `<head>`
- Páginas dedicadas para os termos locais de maior intenção (convênio, sábado)

**GEO / AEO (busca por IA)**
- Primeiro parágrafo de cada página é uma **resposta direta**, com entidades explícitas
- Blocos de pergunta-e-resposta curtos na home (`src/data/geo.ts`)
- Tabela de "fatos-chave" em tratamentos, artigos e páginas foco — formato que IA extrai bem
- `FAQPage` em toda página com FAQ
- `/llms.txt` no padrão llmstxt.org (H1 + blockquote + links Markdown), com instruções explícitas
  do que a IA **não** deve afirmar (preço, endereço, garantia)
- `robots.txt` liberando GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended,
  Applebot-Extended e outros

**Ética (Resolução CFO 196/2019 e 230/2021)**
- Nenhum preço, promoção, "antes e depois", superlativo ou promessa de resultado
- Nenhuma especialidade anunciada sem registro no CRO
- Aviso de conteúdo educativo em todas as páginas de conteúdo
- Zero `Review` ou `AggregateRating` — avaliação inventada é infração e risco de penalização

---

## 6. Termos de busca cobertos

| Termo foco | Página |
|---|---|
| dentista em Sorocaba | `/` |
| dentista Porto Seguro Sorocaba | `/dentista-porto-seguro-sorocaba/` |
| dentista sábado Sorocaba | `/dentista-sabado-sorocaba/` |
| implante dentário Sorocaba | `/tratamentos/implante-dentario-sorocaba/` |
| protocolo dentário Sorocaba | `/tratamentos/protocolo-dentario-sorocaba/` |
| tratamento de canal Sorocaba | `/tratamentos/tratamento-de-canal-sorocaba/` |
| alinhador invisível Sorocaba | `/tratamentos/alinhador-invisivel-sorocaba/` |
| harmonização facial Sorocaba | `/tratamentos/harmonizacao-facial-sorocaba/` |
| botox Sorocaba dentista | `/tratamentos/botox-sorocaba/` |
| preenchimento labial Sorocaba | `/tratamentos/preenchimento-labial-sorocaba/` |

---

## 7. Publicar de graça

O build gera a pasta `dist/`. Qualquer hospedagem de arquivos estáticos serve.

**Cloudflare Pages / Netlify (recomendado)**
- Comando de build: `npm run build`
- Diretório de publicação: `dist`
- O arquivo `public/_headers` já configura cache e cabeçalhos de segurança nas duas plataformas.

**Vercel** — detecta Astro sozinho; publica `dist`.

**GitHub Pages** — publique o conteúdo de `dist/` no branch `gh-pages`.
Neste caso o `public/_headers` é ignorado (a plataforma não suporta), o que não afeta o SEO.

**Sem repositório:** rode `npm run build` e arraste a pasta `dist/` para o Netlify Drop.

### Depois de publicar

1. Confirme o domínio final em `SITE.url` e faça o build de novo (canonical e sitemap dependem disso).
2. Cadastre o site no **Google Search Console** e envie `https://SEU-DOMINIO/sitemap-index.xml`.
3. Crie/reivindique o **Perfil da Empresa no Google** com o mesmo NAP do site — para busca local
   ele pesa mais que o site — e cole o link em `NAP.gbpUrl`.
4. Rode `npm run auditar` antes de cada publicação.
