/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedDir = 'C:\\Users\\Simo\\.gemini\\antigravity-ide\\brain\\1ecda324-506b-41d0-a5c3-80d4099e3af2\\.user_uploaded';
const src512 = path.join(uploadedDir, 'media_1792521488223.png');
const src192 = path.join(uploadedDir, 'media_1792521488199.png');
const src180 = path.join(uploadedDir, 'media_1792521488234.png');
const src32 = path.join(uploadedDir, 'media_1792521488280.png');
const src16 = path.join(uploadedDir, 'media_1792521488245.png');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'app');

function createIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(images.length, 4); // count

  let offset = 6 + images.length * 16;
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...images.map((img) => img.buffer)]);
}

async function run() {
  console.log('Generating comprehensive favicon suite for all devices and Windows...');

  // Ensure directories exist
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  const buf512 = fs.readFileSync(src512);
  const buf192 = fs.readFileSync(src192);
  const buf180 = fs.readFileSync(src180);
  const buf32 = fs.readFileSync(src32);
  const buf16 = fs.readFileSync(src16);
  const buf48 = await sharp(src512).resize(48, 48).png().toBuffer();

  // 1. Copy original exact sized PNGs to public
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), buf16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), buf32);
  fs.writeFileSync(path.join(publicDir, 'favicon.png'), buf32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), buf180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon-precomposed.png'), buf180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), buf192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), buf512);
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), buf192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), buf512);

  // 2. Generate multi-resolution ICO (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: buf16 },
    { width: 32, height: 32, buffer: buf32 },
    { width: 48, height: 48, buffer: buf48 },
  ]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  // 3. Next.js App Router conventions: app/icon.png and app/apple-icon.png
  fs.writeFileSync(path.join(appDir, 'icon.png'), buf32);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), buf180);

  // 4. Windows Microsoft Tiles
  // mstile-150x150.png
  const mstile150 = await sharp(src512).resize(150, 150).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'mstile-150x150.png'), mstile150);

  // mstile-310x310.png
  const mstile310 = await sharp(src512).resize(310, 310).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'mstile-310x310.png'), mstile310);

  // mstile-70x70.png
  const mstile70 = await sharp(src512).resize(70, 70).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'mstile-70x70.png'), mstile70);

  // mstile-310x150.png (wide banner tile with logo centered)
  const logo130 = await sharp(src512).resize(130, 130).png().toBuffer();
  const mstileWide = await sharp({
    create: {
      width: 310,
      height: 150,
      channels: 4,
      background: { r: 41, g: 22, b: 111, alpha: 1 }, // Brand Royal Indigo #29166f
    },
  })
    .composite([{ input: logo130, gravity: 'center' }])
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'mstile-310x150.png'), mstileWide);

  // 5. browserconfig.xml for Windows 8.1, 10, 11 and Edge
  const browserConfigXml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/mstile-70x70.png"/>
      <square150x150logo src="/mstile-150x150.png"/>
      <wide310x150logo src="/mstile-310x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <TileColor>#29166f</TileColor>
    </tile>
  </msapplication>
</browserconfig>
`;
  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfigXml);

  // 6. site.webmanifest and manifest.json for Android, Chrome, and PWA
  const manifestObj = {
    name: 'IPTV USA',
    short_name: 'IPTV USA',
    description: 'IPTV USA Streaming Subscription Service in the United States',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
  const manifestStr = JSON.stringify(manifestObj, null, 2);
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestStr);
  fs.writeFileSync(path.join(publicDir, 'manifest.json'), manifestStr);

  console.log('All favicon and Windows tile files generated successfully in public/ and app/');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
