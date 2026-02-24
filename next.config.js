/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sree-goddanti-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sree-goddanti-portfolio' : '',
};

module.exports = nextConfig;
