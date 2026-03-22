import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = 'public';
const MAX_WIDTH = 1920;
const QUALITY = 80;

const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

async function optimizeImages(dir) {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);

      if (stats.isDirectory()) {
        await optimizeImages(filePath);
        continue;
      }

      const ext = path.extname(file).toLowerCase();
      if (!supportedFormats.includes(ext) || file.includes('Logo')) {
        // Logo veya desteklenmeyen formatları atla (logoyu bozmayalım)
        continue;
      }

      console.log(`Optimizing: ${file}...`);
      
      const buffer = await fs.readFile(filePath);
      const metadata = await sharp(buffer).metadata();

      let pipeline = sharp(buffer);

      // Sadece genişlik MAX_WIDTH'den büyükse küçült
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      // Format bazlı optimizasyon
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: QUALITY, palette: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: QUALITY });
      } else if (ext === '.avif') {
        pipeline = pipeline.avif({ quality: QUALITY });
      }

      await pipeline.toFile(filePath + '.tmp');
      await fs.rename(filePath + '.tmp', filePath);
      
      const newStats = await fs.stat(filePath);
      const saving = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);
      console.log(`  Done: ${file} (Reduced by ${saving}%)`);
    }
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

console.log('--- Starting Image Optimization ---');
await optimizeImages(PUBLIC_DIR);
console.log('--- Optimization Finished ---');
