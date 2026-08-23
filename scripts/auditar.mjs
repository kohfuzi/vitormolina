/**
 * Auditoria de SEO técnico do site já construído (pasta dist/).
 *
 * Rodar depois do build:  npm run build && node scripts/auditar.mjs
 *
 * Verifica, página por página: title, meta description, canonical, H1 único,
 * Open Graph, JSON-LD válido, imagens sem alt e links internos quebrados.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LIMITES = { titleMax: 65, descMin: 70, descMax: 165 };

function listarHtml(dir) {
  return readdirSync(dir).flatMap((nome) => {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) return listarHtml(caminho);
    return caminho.endsWith('.html') ? [caminho] : [];
  });
}

const pegar = (html, regex) => {
  const m = html.match(regex);
  return m ? m[1].trim() : '';
};

const paginas = listarHtml(DIST);
const problemas = [];
const avisos = [];
const rotas = new Set(
  paginas.map((p) => {
    const r = `/${relative(DIST, p).replace(/\\/g, '/').replace(/index\.html$/, '')}`;
    return r.endsWith('/') ? r : `${r}/`;
  })
);

let totalSchemas = 0;

for (const arquivo of paginas) {
  const rota = `/${relative(DIST, arquivo).replace(/\\/g, '/').replace(/index\.html$/, '')}`;
  const html = readFileSync(arquivo, 'utf8');
  const erro = (msg) => problemas.push(`${rota} — ${msg}`);
  const aviso = (msg) => avisos.push(`${rota} — ${msg}`);

  const title = pegar(html, /<title>([\s\S]*?)<\/title>/);
  if (!title) erro('sem <title>');
  else if (title.length > LIMITES.titleMax) aviso(`title com ${title.length} caracteres: "${title}"`);

  const desc = pegar(html, /<meta name="description" content="([^"]*)"/);
  if (!desc) erro('sem meta description');
  else if (desc.length < LIMITES.descMin || desc.length > LIMITES.descMax)
    aviso(`meta description com ${desc.length} caracteres`);

  const canonical = pegar(html, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical) erro('sem canonical');

  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length === 0) erro('sem H1');
  if (h1s.length > 1) erro(`${h1s.length} H1 na mesma página`);

  if (!/property="og:title"/.test(html)) erro('sem Open Graph');
  if (!/name="twitter:card"/.test(html)) aviso('sem twitter:card');

  const blocos = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocos.length === 0 && !rota.includes('404')) erro('sem JSON-LD');
  for (const bloco of blocos) {
    try {
      const dados = JSON.parse(bloco[1]);
      const nos = dados['@graph'] || [dados];
      totalSchemas += nos.length;
      for (const no of nos) if (!no['@type']) erro('nó de schema sem @type');
    } catch (e) {
      erro(`JSON-LD inválido: ${e.message}`);
    }
  }

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=/.test(img[0])) erro(`imagem sem atributo alt: ${img[0].slice(0, 70)}`);
  }

  // Todo link externo (WhatsApp, Maps, perfis) abre em nova janela, com rel de segurança.
  for (const ancora of html.matchAll(/<a[^>]*href="(https?:[^"]+)"[^>]*>/g)) {
    const tag = ancora[0];
    if (!/target="_blank"/.test(tag)) erro(`link externo sem target="_blank": ${ancora[1]}`);
    if (!/rel="[^"]*noopener/.test(tag)) erro(`link externo sem rel="noopener": ${ancora[1]}`);
  }

  for (const link of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const destino = link[1];
    if (/\.(png|jpe?g|svg|webp|css|js|webmanifest|xml|txt|ico)$/.test(destino)) {
      if (!existsSync(join(DIST, destino))) erro(`arquivo não encontrado: ${destino}`);
      continue;
    }
    const normalizado = destino.endsWith('/') ? destino : `${destino}/`;
    if (!rotas.has(normalizado)) erro(`link interno quebrado: ${destino}`);
  }
}

console.log(`\nPáginas auditadas: ${paginas.length}`);
console.log(`Nós de Schema.org encontrados: ${totalSchemas}`);

if (avisos.length) {
  console.log(`\nAvisos (${avisos.length}):`);
  for (const a of avisos) console.log(`  · ${a}`);
}

if (problemas.length) {
  console.log(`\nProblemas (${problemas.length}):`);
  for (const p of problemas) console.log(`  ✗ ${p}`);
  process.exit(1);
}

console.log('\nNenhum problema encontrado.\n');
