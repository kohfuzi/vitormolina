import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

/**
 * robots.txt gerado a partir do domínio configurado em src/data/site.ts.
 *
 * Os crawlers de IA generativa são liberados de propósito: é assim que o site
 * passa a ser lido e citado por ChatGPT, Perplexity, Claude, Gemini e pelos
 * resumos de IA da busca (GEO). Para bloquear algum deles, basta trocar
 * "Allow: /" por "Disallow: /" no bloco correspondente.
 */
const conteudo = `# robots.txt — ${SITE.nome}

User-agent: *
Allow: /

# Buscadores
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Crawlers de IA generativa (GEO) — leitura e citação do conteúdo
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: cohere-ai
Allow: /

Sitemap: ${SITE.url}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(conteudo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
