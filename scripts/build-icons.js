// Generate PNG icons from SVG sources via sharp.
// Run: node scripts/build-icons.js
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const FAVICON_SVG = path.join(ASSETS, 'favicon.svg');
const OG_SVG = path.join(ASSETS, 'og-image.svg');

const targets = [
  { src: FAVICON_SVG, out: path.join(ASSETS, 'apple-touch-icon.png'), size: 180 },
  { src: FAVICON_SVG, out: path.join(ASSETS, 'icon-192.png'),         size: 192 },
  { src: FAVICON_SVG, out: path.join(ASSETS, 'icon-512.png'),         size: 512 },
  { src: FAVICON_SVG, out: path.join(ROOT, 'favicon.ico'),            size: 32  },
  { src: OG_SVG,      out: path.join(ASSETS, 'og-image.png'),         width: 1200, height: 630 },
];

(async () => {
  for (const t of targets) {
    if (!fs.existsSync(t.src)) {
      console.error(`Missing source: ${t.src}`);
      process.exit(1);
    }
    const svg = fs.readFileSync(t.src);
    const pipeline = sharp(svg, { density: 300 });

    if (t.width && t.height) {
      pipeline.resize(t.width, t.height, { fit: 'cover', background: '#fafaf7' });
    } else {
      pipeline.resize(t.size, t.size, { fit: 'cover', background: '#fafaf7' });
    }

    const ext = path.extname(t.out).toLowerCase();
    const buf = ext === '.ico'
      ? await pipeline.png().toBuffer()
      : await pipeline.png().toBuffer();

    fs.writeFileSync(t.out, buf);
    console.log(`✓ ${path.relative(ROOT, t.out)} (${buf.length} bytes)`);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
