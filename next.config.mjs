import withExportOptimizeImages from 'next-export-optimize-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  images: {
  },
};

export default withExportOptimizeImages(nextConfig);
