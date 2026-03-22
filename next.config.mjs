import withExportOptimizeImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Kütüphane kendi optimizasyonunu yaptığı için bu kısmı boş bırakıyoruz
  },
};

export default withExportOptimizeImages(nextConfig);
