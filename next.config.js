/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/sree-goddanti-portfolio',
  assetPrefix: '/sree-goddanti-portfolio',
};

module.exports = nextConfig;
