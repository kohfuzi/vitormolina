/**
 * Gera os arquivos de imagem de public/ a partir dos vetores da marca.
 *
 * Fontes (versionadas, editáveis):
 *   public/logo.svg          marca sobre fundo claro (quadrado petróleo)
 *   public/logo-reverso.svg  marca sobre fundo escuro (sem o quadrado)
 *   foto-dr-vitor-molina.jpg foto original do profissional (fora de public/)
 *
 * Saídas:
 *   public/logo.png                512×512 — usada no Schema.org (raster, como o Google pede)
 *   public/apple-touch-icon.png    180×180
 *   public/icone-192.png           192×192
 *   public/icone-512.png           512×512
 *   public/og.png                  1200×630 — prévia em redes sociais e WhatsApp
 *   public/dr-vitor-molina.jpg     520×520 — retrato exibido no site
 *   public/dr-vitor-molina-avatar.jpg 200×200 — recorte no rosto (caixa do autor)
 *
 * Rodar com: npm run imagens
 */
import sharp from 'sharp';
import { existsSync, readFileSync } from 'node:fs';

const PETROLEO = '#0f3d3e';
const DOURADO = '#c39b5e';
const CLARO = '#eaf2f0';

const logo = readFileSync('public/logo.svg');
const logoReverso = readFileSync('public/logo-reverso.svg', 'utf8');

/** Corpo do SVG reverso, para embutir dentro de outros SVGs. */
const marcaReversa = logoReverso.replace(/<svg[^>]*>/, '').replace('</svg>', '');

// ---------- ícones ----------
const png = (tamanho, saida) =>
  sharp(logo, { density: 400 }).resize(tamanho, tamanho).png({ compressionLevel: 9 }).toFile(saida);

await png(512, 'public/logo.png');
await png(180, 'public/apple-touch-icon.png');
await png(192, 'public/icone-192.png');
await png(512, 'public/icone-512.png');

// ---------- imagem de compartilhamento ----------
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PETROLEO}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${DOURADO}"/>
  <circle cx="1040" cy="520" r="260" fill="#ffffff" opacity="0.03"/>
  <g transform="translate(74,64) scale(0.72)">${marcaReversa}</g>
  <text x="200" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#ffffff">Dr. Vitor Molina</text>
  <text x="202" y="158" font-family="Segoe UI, Arial, sans-serif" font-size="21" fill="${DOURADO}" letter-spacing="3">ODONTOLOGIA · SOROCABA</text>
  <text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">Uma consulta sem pressa, com o</text>
  <text x="80" y="374" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">dentista que vai te tratar do</text>
  <text x="80" y="448" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">começo ao fim.</text>
  <rect x="80" y="500" width="80" height="3" fill="${DOURADO}"/>
  <text x="80" y="556" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="${CLARO}">Particular e Porto Seguro  ·  Seg a Sex 9h–18h  ·  Sáb 9h–12h</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');

// ---------- retrato do profissional ----------
// O original tem resolução baixa (≈530px), então nunca é ampliado: só reduzido
// e otimizado. No site ele é exibido em tamanho médio, com no máximo 260px.
const ORIGINAL = 'foto-dr-vitor-molina.jpg';
if (existsSync(ORIGINAL)) {
  await sharp(ORIGINAL)
    .resize(520, 520, { fit: 'cover', position: 'top', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile('public/dr-vitor-molina.jpg');
  // Recorte fechado no rosto, para a caixa do autor nos artigos (círculo de 72px).
  await sharp(ORIGINAL)
    .extract({ left: 122, top: 5, width: 250, height: 250 })
    .resize(200, 200)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile('public/dr-vitor-molina-avatar.jpg');
  console.log('Retratos gerados: public/dr-vitor-molina.jpg e dr-vitor-molina-avatar.jpg');
} else {
  console.log(`Aviso: ${ORIGINAL} não encontrado — retrato não foi regerado.`);
}

console.log('Imagens geradas em public/: logo.png, apple-touch-icon.png, icone-192.png, icone-512.png, og.png');
