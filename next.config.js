/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'https://cdn2.thedogapi.com/images/',
      'https://api.thedogapi.com/v1/images',
    ],
    loader: 'custom',
    path: '/',
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
