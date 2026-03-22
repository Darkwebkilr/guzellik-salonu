import withExportOptimizeImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // Kütüphane kendi optimizasyonunu yaptığı için bu kısmı boş bırakıyoruz
  },
};

export default withExportOptimizeImages(nextConfig);
