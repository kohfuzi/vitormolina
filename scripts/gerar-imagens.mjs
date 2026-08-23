/**
 * Gera os assets estáticos de imagem em public/:
 *   - og.png              (1200x630, prévia em redes sociais e WhatsApp)
 *   - apple-touch-icon.png (180x180)
 *   - icone-192.png / icone-512.png (manifest)
 *
 * Rodar com: node scripts/gerar-imagens.mjs
 * Depende de public/logo.jpg. Ao trocar o logo, rode o script de novo.
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const PETROLEO = '#0f3d3e';
const DOURADO = '#c39b5e';
const CLARO = '#eaf2f0';

const logo = readFileSync('public/logo.jpg');
const logoBase64 = `data:image/jpeg;base64,${logo.toString('base64')}`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PETROLEO}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${DOURADO}"/>
  <circle cx="1040" cy="520" r="260" fill="#ffffff" opacity="0.03"/>
  <clipPath id="c"><rect x="80" y="72" width="96" height="96" rx="20"/></clipPath>
  <image href="${logoBase64}" x="80" y="72" width="96" height="96" clip-path="url(#c)" preserveAspectRatio="xMidYMid slice"/>
  <text x="200" y="120" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#ffffff">Dr. Vitor Molina</text>
  <text x="200" y="158" font-family="Segoe UI, Arial, sans-serif" font-size="21" fill="${DOURADO}" letter-spacing="3">ODONTOLOGIA · SOROCABA</text>
  <text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">Uma consulta sem pressa, com o</text>
  <text x="80" y="374" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">dentista que vai te tratar do</text>
  <text x="80" y="448" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#ffffff">começo ao fim.</text>
  <rect x="80" y="500" width="80" height="3" fill="${DOURADO}"/>
  <text x="80" y="556" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="${CLARO}">Particular e Porto Seguro  ·  Seg a Sex 9h–18h  ·  Sáb 9h–12h</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');

const quadrado = async (tamanho, saida) => {
  const marca = await sharp(logo)
    .resize(Math.round(tamanho * 0.82), Math.round(tamanho * 0.82), {
      fit: 'contain',
      background: '#ffffff',
    })
    .toBuffer();
  return sharp({
    create: {
      width: tamanho,
      height: tamanho,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: marca }])
    .png()
    .toFile(saida);
};

await quadrado(180, 'public/apple-touch-icon.png');
await quadrado(192, 'public/icone-192.png');
await quadrado(512, 'public/icone-512.png');

console.log('Imagens geradas em public/: og.png, apple-touch-icon.png, icone-192.png, icone-512.png');
